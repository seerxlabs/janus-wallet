import {Ed25519KeypairCustom, generateMnemonic, SuiClient, validateMnemonic, Account} from '../src/core';
import {Network, NETWORK_TO_API} from "../src/core/sui/network";

import * as bip39 from '@scure/bip39';


import {toHEX} from "@mysten/bcs";
import {wordlist as enWordlist} from '@scure/bip39/wordlists/english';
import {json} from "stream/consumers";

let mnemonic = "stuff steel bless hobby ordinary stem heavy where lottery unfold merge olympic"


const suiClient = new SuiClient(Network.DEVNET)
const testnetAddress = "0x4c3d90914821c8ade5fd27ae113a1b1ccf2a86ba";
const devnetAddress = "0x265f6d2c8e0177e59c357accaf17a3c0febc4b24";
// const testnetAddress = "0x335aa6836ea339d98f9f52c9d59d401038f63491";


jest.setTimeout(600000);

test('testGenerateMnemonic', async () => {
    let mnemonic = generateMnemonic()
    console.log('generateMnemonic:', mnemonic)
    let isTrue = validateMnemonic(mnemonic);
    console.log(isTrue)
})

test('testEd25519Keypair', async () => {
    // let mnemonic = generateMnemonic()
    let ed25519Keypair = Ed25519KeypairCustom.deriveKeypair(mnemonic);
    console.log('publicKey:', toHEX(ed25519Keypair.getPublicKey().toBytes()))
    console.log('suiAddress:', ed25519Keypair.getPublicKey().toSuiAddress())
    console.log('privateKey:', ed25519Keypair.getPrivateKeyToHash())
    let ar = bip39.mnemonicToEntropy(mnemonic, enWordlist);
    console.log(toHEX(ar))
});

test('testGetObjectsOwnedByAddress', async () => {
    let res = await suiClient.getObjectsOwnedByAddress(testnetAddress)
});

test('testGetCoinBalancesOwnedByAddress', async () => {
    let suiClient = new SuiClient(Network.TESTNET)
    let coinBalancesOwnedByAddress = await suiClient.getCoinBalancesOwnedByAddress("0x4c3d90914821c8ade5fd27ae113a1b1ccf2a86ba",
        "0x61df0e8caaf7b241d137fdc97906e3ca6bd68cca::btc::BTC");
    console.log(JSON.stringify(coinBalancesOwnedByAddress, (key, value) =>
        typeof value === 'bigint'
            ? value.toString()
            : value // return everything else unchanged
    ));
});


/**
 *
 */
test('testGetTransactionByAddress', async () => {
    let result = await suiClient.getTransactionByAddress(devnetAddress);
    console.log(JSON.stringify(result))
});


/**
 *
 */
test('testAccount', async () => {
    let account = new Account(mnemonic, 0);
    console.log(account.getAddress())
    console.log(account.getPublicKey())
});

/**
 *
 */
test('testTransferCoin', async () => {
    const account = new Account(mnemonic)
    await suiClient.transferCoin("0x2::sui::SUI", BigInt(20000), "0x61df0e8caaf7b241d137fdc97906e3ca6bd68cca",account)
});