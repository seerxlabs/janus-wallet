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
    getPaySuiTransaction
} from '@mysten/sui.js';

import {SuiData} from "@mysten/sui.js/src/types/objects";
import {Network, NETWORK_TO_API} from "./network";
import {Coin, CoinBalance} from "./coin";
import {Portal} from "@radix-ui/react-dialog";


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

    constructor(endpoint: string | Network = Network.DEVNET) {
        let endpoints = endpoint;
        if ((Object.values(Network) as string[]).includes(endpoint)) {
            endpoints = NETWORK_TO_API[endpoint as Network].fullNode;
        }
        this.provider = new JsonRpcProvider(endpoints);
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
        typeArg?: string
    ): Promise<CoinBalance[]> {
        let coinBalancesOwnedByAddress = await this.provider.getCoinBalancesOwnedByAddress(address, typeArg);
        return coinBalancesOwnedByAddress
            .filter((item) => item.status === 'Exists' && Coin.isCoin(item))
            .reduce<CoinBalance[]>((groups, item) => {
                const subMoveObject = (item.details as SuiObject).data as SuiData as SuiMoveObject;
                let type = Coin.getCoinType(subMoveObject.type) || "";
                const symbol = Coin.getCoinSymbol(type);
                const balance = subMoveObject.fields.balance;
                const objectId = subMoveObject.fields.id.id;
                const group = groups.find(_item => _item.type == type)
                const coinObject = {
                    objectId: objectId,
                    balance: BigInt(balance)
                }
                if (group) {
                    group.balance += BigInt(balance)
                    group.coinObjects.push(coinObject)
                } else {
                    groups.push({
                        type: type,
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


    public async transferCoin() {

    }

    public async transferObject() {

    }

    public async transferSui() {

    }

}