import type { Item } from './Item_Catelog';

export const Items_Currency: Readonly<Record<string, Item>> = {
    GOLD_COIN: { name: 'Gold Coin', category: 'currency' },
} as const;
