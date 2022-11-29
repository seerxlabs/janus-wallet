import {
    generateMnemonic,
    validateMnemonic
} from '../src/core';

test('generateMnemonic', async () => {
    let mnemonic = generateMnemonic()
    console.log('generateMnemonic:', mnemonic)
    let isTrue = validateMnemonic(mnemonic);
    console.log(isTrue)
});