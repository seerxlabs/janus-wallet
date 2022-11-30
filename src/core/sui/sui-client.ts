import {
    JsonRpcProvider,
} from '@mysten/sui.js';


export class Coin {

}

export class Account {



}

export class SuiClient {

    provider: JsonRpcProvider;

    constructor(endpoint: string) {
        this.provider = new JsonRpcProvider(endpoint);
    }

    /**
     * get objects by address
     * @param address
     */
    public async getObjectsOwnedByAddress(address: string) {
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


    public async transferCoin() {

    }

    public async transferObject() {

    }

    public async transferSui() {

    }

}