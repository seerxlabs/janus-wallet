import {Ed25519KeypairCustom, generateMnemonic, SuiClient, validateMnemonic} from '../src/core';
import {Network, NETWORK_TO_API} from "../src/core/sui/network";

import * as bip39 from '@scure/bip39';


import {toHEX} from "@mysten/bcs";
import {wordlist as enWordlist} from '@scure/bip39/wordlists/english';


test('testGenerateMnemonic', async () => {
    let mnemonic = generateMnemonic()
    console.log('generateMnemonic:', mnemonic)
    let isTrue = validateMnemonic(mnemonic);
    console.log(isTrue)
})

test('testEd25519Keypair', async () => {
    let mnemonic = "stuff steel bless hobby ordinary stem heavy where lottery unfold merge olympic"
    // let mnemonic = generateMnemonic()
    let ed25519Keypair = Ed25519KeypairCustom.deriveKeypair(mnemonic);
    console.log('publicKey:', toHEX(ed25519Keypair.getPublicKey().toBytes()))
    console.log('suiAddress:', ed25519Keypair.getPublicKey().toSuiAddress())
    console.log('privateKey:', ed25519Keypair.getPrivateKeyToHash())
    let ar = bip39.mnemonicToEntropy(mnemonic, enWordlist);
    console.log(toHEX(ar))
});

test('testSuiClient', async () => {
    let suiClient = new SuiClient(Network.DEVNET)
    let res = await suiClient.getObjectsOwnedByAddress("0x265f6d2c8e0177e59c357accaf17a3c0febc4b24")
    console.log(res)
});

test('testGetCoinBalancesOwnedByAddress', async () => {
    let suiClient = new SuiClient(Network.TESTNET)
    let coinBalancesOwnedByAddress = await suiClient.getCoinBalancesOwnedByAddress("0x4c3d90914821c8ade5fd27ae113a1b1ccf2a86ba","0x61df0e8caaf7b241d137fdc97906e3ca6bd68cca::btc::BTC");
    console.log(JSON.stringify(coinBalancesOwnedByAddress,(key, value) =>
        typeof value === 'bigint'
            ? value.toString()
            : value // return everything else unchanged
    ));


});

test('testgetObjectsOwnedByAddress', async () => {
    let suiClient = new SuiClient(Network.DEVNET)
    let coinBalancesOwnedByAddress = await suiClient.getObjectsOwnedByAddress("0x4c3d90914821c8ade5fd27ae113a1b1ccf2a86ba")

});