import {
    generateMnemonic,
    validateMnemonic,
    Ed25519KeypairCustom
} from '../src/core';

test('testGenerateMnemonic', async () => {
    let mnemonic = generateMnemonic()
    console.log('generateMnemonic:', mnemonic)
    let isTrue = validateMnemonic(mnemonic);
    console.log(isTrue)
})

test('testEd25519Keypair', async () => {
    let mnemonic = generateMnemonic()
    let ed25519Keypair = Ed25519KeypairCustom.deriveKeypair(mnemonic);
    console.log('publicKey:',ed25519Keypair.getPublicKey().toBase64())
    console.log('suiAddress:',ed25519Keypair.getPublicKey().toSuiAddress())
    console.log('privateKey:',ed25519Keypair.getPrivateKeyToBase64())
});