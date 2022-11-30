import {
    generateMnemonic,
    validateMnemonic,
    Ed25519KeypairCustom,
    SuiClient
} from '../src/core';
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
    let suiClient = new SuiClient("https://fullnode.devnet.sui.io/")
    let res = await suiClient.getObjectsOwnedByAddress("0x265f6d2c8e0177e59c357accaf17a3c0febc4b24")
    console.log(res)

});