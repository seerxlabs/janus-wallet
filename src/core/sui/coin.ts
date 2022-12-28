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
    balanceFormat: number;
    object: SuiMoveObject;
};

export type CoinBalance = {
    coinTypeArg: CoinTypeArg,
    symbol: string;
    balance: bigint;
    balanceFormat: number;
    coinObjects: CoinObject[]
}
