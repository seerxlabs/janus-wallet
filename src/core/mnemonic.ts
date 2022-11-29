import * as bip39 from '@scure/bip39';
import {wordlist as enWordlist} from '@scure/bip39/wordlists/english';
import {wordlist as czWordlist} from '@scure/bip39/wordlists/czech';
import {wordlist as frWordlist} from '@scure/bip39/wordlists/french';
import {wordlist as itWordlist} from '@scure/bip39/wordlists/italian';
import {wordlist as jpWordlist} from '@scure/bip39/wordlists/japanese';
import {wordlist as krWordlist} from '@scure/bip39/wordlists/korean';
import {wordlist as szhWordlist} from '@scure/bip39/wordlists/simplified-chinese';
import {wordlist as spWordlist} from '@scure/bip39/wordlists/spanish';
import {wordlist as tzhWordlist} from '@scure/bip39/wordlists/traditional-chinese';


const  BIP39_WORDLISTS = [
    enWordlist,
    czWordlist,
    frWordlist,
    itWordlist,
    jpWordlist,
    krWordlist,
    szhWordlist,
    spWordlist,
    tzhWordlist,
];

export function validateMnemonic(mnemonic: string): boolean {
    for (let wordlist of BIP39_WORDLISTS) {
        if (bip39.validateMnemonic(mnemonic, wordlist)) {
            return true;
        }
    }
    return false;
}

/**
 * English mnemonics are used by default
 */
export function generateMnemonic(): string {
    return bip39.generateMnemonic(enWordlist);
}


