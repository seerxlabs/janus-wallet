import {Ed25519KeypairCustom} from "./ed25519-keypair";
import {
    SuiAddress,
    Base64DataBuffer,
    Ed25519PublicKey
} from "@mysten/sui.js";

import {toHEX} from "@mysten/bcs";

export class Account {

    key: Ed25519KeypairCustom;
    private readonly pathId: number
    private readonly path: string;

    constructor(mnemonics: string, pathId?: number) {
        if (!pathId) {
            pathId = 0;
        }
        this.pathId = pathId;
        this.path = this.derivationHdPath(pathId);
        this.key = Ed25519KeypairCustom.deriveKeypair(mnemonics, this.path)
    }

    private derivationHdPath(pathId: number): string {
        return `m/44'/784'/0'/0'/${pathId}'`;
    }

    public getAddress(): SuiAddress {
        return '0x' + this.key.getPublicKey().toSuiAddress();
    }

    public getPublicKey(): Ed25519PublicKey {
        return this.key.getPublicKey();
    }

    public getPublicKeyToHash(): string {
        return '0x' + this.key.getPublicKeyToHash();
    }

    public getPrivateKeyToHash(): string {
        return '0x' + this.key.getPrivateKeyToHash();
    }

    public signData(data: Base64DataBuffer): Base64DataBuffer {
        return this.key.signData(data);
    }

    public getKeyScheme() {
        return this.key.getKeyScheme();
    }

    public getKey() {
        return this.key;
    }

}