import {Ed25519Keypair, isValidHardenedPath, mnemonicToSeedHex} from '@mysten/sui.js'
import {derivePath, getPublicKey} from "../utils/ed25519-hd-key";
import {Ed25519KeypairData} from "@mysten/sui.js/src/cryptography/ed25519-keypair";
import {toHEX} from "@mysten/bcs";
import nacl from 'tweetnacl';

export const DEFAULT_ED25519_DERIVATION_PATH = "m/44'/784'/0'/0'/0'";

export class Ed25519KeypairCustom extends Ed25519Keypair {

    private keypairCustom: Ed25519KeypairData;

    /**
     * Create a new Ed25519 keypair instance.
     * Generate random keypair if no {@link Ed25519Keypair} is provided.
     *
     * @param keypair Ed25519 keypair
     */
    constructor(keypair?: Ed25519KeypairData) {
        super(keypair);
        if (keypair) {
            this.keypairCustom = keypair;
        } else {
            this.keypairCustom = nacl.sign.keyPair();
        }
    }

    getPrivateKeyToHash(): string {
        return toHEX(this.keypairCustom.secretKey.subarray(0, 32));
    }

    getPublicKeyToHash(): string {
        return toHEX(this.keypairCustom.publicKey);
    }


    static deriveKeypair(mnemonics: string, path?: string): Ed25519KeypairCustom {
        if (path == null) {
            path = DEFAULT_ED25519_DERIVATION_PATH;
        }
        if (!isValidHardenedPath(path)) {
            throw new Error('Invalid derivation path');
        }
        const {key} = derivePath(path, mnemonicToSeedHex(mnemonics));
        const pubkey = getPublicKey(key, false);

        // Ed25519 private key returned here has 32 bytes. NaCl expects 64 bytes where the last 32 bytes are the public key.
        let fullPrivateKey = new Uint8Array(64);
        fullPrivateKey.set(key);
        fullPrivateKey.set(pubkey, 32);
        return new Ed25519KeypairCustom({publicKey: pubkey, secretKey: fullPrivateKey});
    }

}