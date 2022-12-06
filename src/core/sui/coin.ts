import {
    Coin as CoinSDK,
    SuiMoveObject
} from '@mysten/sui.js';


export class Coin extends CoinSDK {

}

export type CoinTypeArg = string;

export type CoinObject = {
    objectId: string;
    balance: bigint;
    object: SuiMoveObject;
};

export type CoinBalance = {
    coinTypeArg: CoinTypeArg,
    symbol: string;
    balance: bigint;
    coinObjects: CoinObject[]
}
