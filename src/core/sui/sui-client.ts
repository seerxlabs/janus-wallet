import {
    JsonRpcProvider,
    SuiObject,
    SuiMoveObject,
    getTransactionData,
    getTransactionSender,
    getTotalGasUsed,
    getTransferSuiTransaction,
    ExecutionStatusType,
    SuiAddress,
    TransactionDigest,
    getPayTransaction,
    CertifiedTransaction,
    getExecutionStatusType,
    getPaySuiTransaction,
    LocalTxnDataSerializer,
    PayTransaction
} from '@mysten/sui.js';

import {SuiData} from "@mysten/sui.js/src/types/objects";
import {Network, NETWORK_TO_API} from "./network";
import {Coin, CoinBalance, CoinTypeArg} from "./coin";
import {Account} from "./account";


export type TransactionRecord = {
    from: SuiAddress,
    to: SuiAddress | SuiAddress[],
    gasFee: number,
    amount: number | number[] | null;
    status: ExecutionStatusType | undefined,
    name: string,
    object: CoinObject | OtherObject,
    type: TransactionType,
    timestamp: number | null
}

enum TransactionType {
    TransferSui,
    PaySui,
    Pay,
    Call

}

export type CoinObject = {
    type: 'coin';
    symbol: string;
    balance: string;
}


export type OtherObject = {}


export class SuiClient {

    private provider: JsonRpcProvider;
    private serializer: LocalTxnDataSerializer;

    constructor(endpoint: string | Network = Network.DEVNET) {
        let endpoints = endpoint;
        if ((Object.values(Network) as string[]).includes(endpoint)) {
            endpoints = NETWORK_TO_API[endpoint as Network].fullNode;
        }
        this.provider = new JsonRpcProvider(endpoints);
        this.serializer = new LocalTxnDataSerializer(this.provider)
    }

    /**
     * get objects by address
     * @param address
     */
    public async getObjectsOwnedByAddress(address: string) {
        let objectsOwnedByAddress = await this.provider.getObjectsOwnedByAddress(address);
        console.log(JSON.stringify(objectsOwnedByAddress))
        return []
    }


    /**
     * get coin by address
     * @param address
     */
    public async getCoinByAddress(address: string) {
    }


    /**
     *
     * @param address
     */
    public async getTransactionByAddress(address: string): Promise<TransactionRecord[]> {
        const txIds = await this.provider.getTransactionsForAddress(address);
        if (txIds.length === 0 || !txIds[0]) {
            return [];
        }
        const effects = await this.provider.getTransactionWithEffectsBatch(txIds);
        const transactionRecords = [];
        for (const effect of effects) {
            const data = getTransactionData(effect.certificate);
            for (const tx of data.transactions) {
                let transactionRecord = {
                    timestamp: effect.timestamp_ms,
                    gasFee: getTotalGasUsed(effect),
                    from: getTransactionSender(effect.certificate),
                    status: getExecutionStatusType(effect)
                } as TransactionRecord;
                let transferSuiTransaction = getTransferSuiTransaction(tx);
                let payTransaction = getPayTransaction(tx);
                let paySuiTransaction = getPaySuiTransaction(tx);
                if (transferSuiTransaction) {
                    // console.log("getTransferSuiTransaction", JSON.stringify(tx))
                    transactionRecord.to = transferSuiTransaction.recipient;
                    transactionRecord.amount = transferSuiTransaction.amount
                    transactionRecord.name = "SUI"
                    transactionRecord.type = TransactionType.TransferSui
                } else if (paySuiTransaction) {
                    transactionRecord.to = paySuiTransaction.recipients
                    transactionRecord.amount = paySuiTransaction.amounts
                    console.log(JSON.stringify(paySuiTransaction))
                    //TODO
                } else if (payTransaction) {
                    // console.log("getPayTransaction", JSON.stringify(tx))
                    //TODO
                }
                transactionRecords.push(transactionRecord)
            }
        }
        return transactionRecords;
    }


    /**
     *
     * @param address
     * @param coin
     */
    public async getCoinByAddressAndCoin(address: string, coin: string) {

    }


    /**
     * gei coin balances
     * @param address
     */
    public async getCoinBalancesOwnedByAddress(
        address: string,
        coinType?: CoinTypeArg
    ): Promise<CoinBalance[]> {
        let coinBalancesOwnedByAddress = await this.provider.getCoinBalancesOwnedByAddress(address, coinType);
        return coinBalancesOwnedByAddress
            .filter((item) => item.status === 'Exists' && Coin.isCoin(item))
            .reduce<CoinBalance[]>((groups, item) => {
                const subMoveObject = (item.details as SuiObject).data as SuiData as SuiMoveObject;
                let coinTypeArg = Coin.getCoinType(subMoveObject.type) || "" as CoinTypeArg;
                const symbol = Coin.getCoinSymbol(coinTypeArg);
                const balance = subMoveObject.fields.balance;
                const objectId = subMoveObject.fields.id.id;
                const group = groups.find(_item => _item.coinTypeArg == coinTypeArg)
                const coinObject = {
                    objectId: objectId,
                    balance: BigInt(balance),
                    object: subMoveObject
                }
                if (group) {
                    group.balance += BigInt(balance)
                    group.coinObjects.push(coinObject)
                } else {
                    groups.push({
                        coinTypeArg: coinTypeArg,
                        symbol: symbol,
                        balance: BigInt(balance),
                        coinObjects: [
                            coinObject
                        ]
                    })
                }
                return groups;
            }, [])
    }


    public async transferCoin(
        coinTypeArg: CoinTypeArg,
        amount: number,
        toAddress: SuiAddress,
        fromAccount: Account
    ) {
        // const coins = await this.getCoinBalancesOwnedByAddress("0x4c3d90914821c8ade5fd27ae113a1b1ccf2a86ba", coinTypeArg);
        const coins = await this.getCoinBalancesOwnedByAddress(fromAccount.getAddress(), coinTypeArg);
        if (coins.length == 0) {
            throw new Error("Insufficient transfer amount");
        }
        const objects = coins[0].coinObjects.map((item) => item.object);
        const calculateCoinAmount = Coin.selectCoinSetWithCombinedBalanceGreaterThanOrEqual(objects, BigInt(amount));
        if (calculateCoinAmount.length == 0) {
            throw new Error("Insufficient transfer amount");
        }
        const fromAddress = fromAccount.getAddress() as SuiAddress;
        // get original data
        const data = await this.serializer.serializeToBytes(
            fromAddress,
            {
                kind: 'pay',
                data: {
                    //   inputCoins: ObjectId[];
                    // gasBudget: number
                    recipients: [toAddress],
                    amounts: [amount],
                } as PayTransaction
            }
        );
        // sign
        let signData = fromAccount.signData(data);
        //
        this.provider.executeTransaction(
            data, fromAccount.getKeyScheme(), signData, fromAccount.getPublicKey()
        );
    }

    public async transferObject() {

    }

    public async transferSui() {

    }

}