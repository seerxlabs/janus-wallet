import {
    Coin as CoinSDK
} from '@mysten/sui.js';


export class Coin extends CoinSDK {

}

export type CoinObject = {
    objectId: string;
    balance: bigint;
};

export type CoinBalance = {
    type: string,
    symbol: string;
    balance: bigint;
    coinObjects: CoinObject[]
}
