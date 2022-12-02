
export enum Network {
    LOCAL = 'LOCAL',
    DEVNET = 'DEVNET',
    TESTNET = 'TESTNET',
}

export type ApiEndpoints = {
    fullNode: string;
    faucet?: string;
};

export const NETWORK_TO_API: Record<Network, ApiEndpoints> = {
    [Network.LOCAL]: {
        fullNode: 'http://127.0.0.1:9000',
        faucet: 'http://127.0.0.1:9123/gas',
    },
    [Network.DEVNET]: {
        fullNode: 'https://fullnode.devnet.sui.io/',
        faucet: 'https://faucet.devnet.sui.io/gas',
    },
    [Network.TESTNET]: {
        fullNode: 'https://fullnode.testnet.sui.io/',
        faucet: 'https://faucet.testnet.sui.io/gas',
    },
};
