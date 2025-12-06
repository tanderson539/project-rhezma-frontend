export const ITEM_CATALOG: Readonly<Record<string, Item>> = {
    WOOD_LOG: { name: 'Wood Log', category: 'material' },
    OAK_LOG: { name: 'Oak Log', category: 'material' },
    STONE_UNREFINED: {
        name: 'Unrefined Stone',
        category: 'material',
    },
    STONE_BRICK: { name: 'Stone Brick', category: 'material' },
    IRON_ORE: { name: 'Iron Ore', category: 'material' },
    IRON_BAR: { name: 'Iron Bar', category: 'material' },
    GOLD_COIN: { name: 'Gold Coin', category: 'currency' },
} as const;

export interface Item {
    name: string;
    category: 'material' | 'currency';
}

export type ItemKey = keyof typeof ITEM_CATALOG;

export type ItemData = Partial<Record<ItemKey, number>>;
