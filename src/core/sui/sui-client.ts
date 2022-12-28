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
    getTransactionKindName,
    PayTransaction,
    PaySuiTransaction,
    UnserializedSignableTransaction,
    RawSigner,
    TransactionKindName
} from '@mysten/sui.js';

import {SuiData} from "@mysten/sui.js/src/types/objects";
import {Network, NETWORK_TO_API} from "./network";
import {Coin, CoinBalance, CoinTypeArg} from "./coin";
import {Account} from "./account";
import {formatCurrency, formatCurrencyArr} from "../utils/format-currency";
import {SuiExecuteTransactionResponse} from "@mysten/sui.js/src/types";
import addReceiverActionListener = chrome.cast.addReceiverActionListener;

export const SUI_TYPE_ARG = '0x2::sui::SUI';


export type TransactionRecord = {
    from: SuiAddress,
    to: SuiAddress | SuiAddress[],
    gasFee: number,
    gasFeeFormat: number,
    amounts: number[]
    amountFormat: number;
    status: ExecutionStatusType | undefined,
    name: string,
    object: CoinObject | OtherObject,
    type: TransactionKindName,
    timestamp: number | null
}


export type CoinObject = {
    type: 'coin';
    symbol: string;
    balance: string;
}


export type OtherObject = {}


export class SuiClient {

    provider: JsonRpcProvider;
    serializer: LocalTxnDataSerializer;

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
        const txIds = await this.provider.getTransactionsForAddress(address, true);
        if (txIds.length === 0 || !txIds[0]) {
            return [];
        }
        const digests = txIds.filter(
            (value, index, self) => self.indexOf(value) === index
        );
        const effects = await this.provider.getTransactionWithEffectsBatch(digests);
        const transactionRecords = [];
        for (const effect of effects) {
            const data = getTransactionData(effect.certificate);
            for (const tx of data.transactions) {
                let transactionRecord = {
                    timestamp: effect.timestamp_ms,
                    gasFee: getTotalGasUsed(effect),
                    gasFeeFormat: formatCurrency(getTotalGasUsed(effect)),
                    from: getTransactionSender(effect.certificate),
                    status: getExecutionStatusType(effect)
                } as TransactionRecord;
                let transferSuiTransaction = getTransferSuiTransaction(tx);
                let payTransaction = getPayTransaction(tx);
                let paySuiTransaction = getPaySuiTransaction(tx);
                const kind = getTransactionKindName(tx);
                if (kind === 'TransferSui' && transferSuiTransaction) {
                    // console.log("getTransferSuiTransaction", JSON.stringify(tx))
                    transactionRecord.to = transferSuiTransaction.recipient;
                    transactionRecord.amounts = transferSuiTransaction.amount ? [transferSuiTransaction.amount] : [0]
                    transactionRecord.name = "SUI"
                    transactionRecord.amountFormat = formatCurrencyArr(transactionRecord.amounts);
                } else if (kind === 'PaySui' && paySuiTransaction) {
                    transactionRecord.to = paySuiTransaction.recipients;
                    transactionRecord.amounts = paySuiTransaction.amounts;
                    transactionRecord.amountFormat = formatCurrencyArr(transactionRecord.amounts);
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
                const group = groups.find(_item => _item.coinTypeArg == coinTypeArg);
                const coinObject = {
                    objectId: objectId,
                    balance: BigInt(balance),
                    balanceFormat: formatCurrency(BigInt(balance)),
                    object: subMoveObject
                }
                if (group) {
                    group.balance += BigInt(balance);
                    group.balanceFormat += formatCurrency(BigInt(balance));
                    group.coinObjects.push(coinObject);
                } else {
                    groups.push({
                        coinTypeArg: coinTypeArg,
                        symbol: symbol,
                        balance: BigInt(balance),
                        balanceFormat: formatCurrency(BigInt(balance)),
                        coinObjects: [
                            coinObject
                        ]
                    })
                }
                return groups;
            }, [])
    }


    public async transferCoin(
        coinTypeArg: CoinTypeArg, // example 0x2::sui::SUI
        amount: bigint,
        toAddress: SuiAddress,
        fromAccount: Account
    ) {
        const coins = await this.getCoinBalancesOwnedByAddress(fromAccount.getAddress(), coinTypeArg);
        const suiCoins = await this.getCoinBalancesOwnedByAddress(fromAccount.getAddress(), SUI_TYPE_ARG);
        //TODO calculate gasBudget
        let gasBudget = BigInt(10000);

        if (coins.length === 0) {
            throw new Error("Insufficient transfer amount");
        }
        if (suiCoins.length === 0 || suiCoins[0].balance < gasBudget) {
            throw new Error("Insufficient gasBudget");
        }
        const coin = coins[0];
        const objects = coin.coinObjects.map((item) => item.object);
        const calculateCoinAmount = Coin.selectCoinSetWithCombinedBalanceGreaterThanOrEqual(objects, amount);
        if (calculateCoinAmount.length == 0) {
            throw new Error("Insufficient transfer amount");
        }
        let payTx;
        let payTxData = {
            inputCoins: calculateCoinAmount.map(Coin.getID),
            recipients: [toAddress],
            amounts: [Number(amount)],
            gasBudget: Number(gasBudget)
        }
        if (coinTypeArg === SUI_TYPE_ARG) {
            if (coin.balance < (amount + gasBudget)) {
                throw new Error("Insufficient gasBudget");
            }
            payTx = {
                kind: 'paySui',
                data: payTxData as PayTransaction
            } as UnserializedSignableTransaction;
        } else {
            payTx = {
                kind: 'pay',
                data: payTxData as PayTransaction
            } as UnserializedSignableTransaction;
        }
        const signer = new RawSigner(fromAccount.getKey(), this.provider, this.serializer);
        return await signer.signAndExecuteTransaction(payTx);
    }

    public async transferObject() {

    }

    public async transferSui() {

    }

}