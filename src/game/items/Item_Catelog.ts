import { Items_Currency } from './Items_Currency';
import { Items_Materials } from './Items_Materials';
import { Items_Raw_Materials } from './Items_Raw_Materials';

export const ITEM_CATALOG: Readonly<Record<string, Item>> = {
    ...Items_Materials,
    ...Items_Raw_Materials,
    ...Items_Currency,
} as const;

export interface Item {
    name: string;
    category: 'material' | 'currency' | 'raw_material';
}

export type ItemKey = keyof typeof ITEM_CATALOG;

export type ItemData = Partial<Record<ItemKey, number>>;
