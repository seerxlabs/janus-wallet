import {
    JsonRpcProvider,
    SuiObject,
    SuiMoveObject
} from '@mysten/sui.js';

import {SuiData} from "@mysten/sui.js/src/types/objects";
import {Network, NETWORK_TO_API} from "./network";
import {Coin, CoinBalance} from "./coin";


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
    public async getTransactionInfoByAddress(address: string) {

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
        address: string
    ): Promise<CoinBalance[]> {
        let coinBalancesOwnedByAddress = await this.provider.getCoinBalancesOwnedByAddress(address);
        return coinBalancesOwnedByAddress
            .filter((item) => item.status === 'Exists' && Coin.isCoin(item))
            .reduce<CoinBalance[]>((groups, item) => {
                const subMoveObject = (item.details as SuiObject).data as SuiData as SuiMoveObject;
                const type = subMoveObject.type;
                const symbol = Coin.getCoinSymbol(Coin.getCoinType(type) || "");
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