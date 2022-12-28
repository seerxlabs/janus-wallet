import {
    MIST_PER_SUI
} from '@mysten/sui.js';

export function formatCurrency(amount: number | bigint | undefined) {
    if (!amount) {
        return 0;
    }
    if (amount <= 0) {
        return 0;
    }
    return Number(amount) / Number(MIST_PER_SUI);

}

export function formatCurrencyArr(amounts: number[]) {
    let totalAmount = 0;
    for (const amount of amounts) {
        totalAmount += amount;
    }
    return formatCurrency(totalAmount);
}