export const ITEM_CATALOG: Readonly<Record<string, Item>> = {
    WOOD_LOG: { name: 'Wood Log', category: 'raw_material' },
    WOOD_PLANK: { name: 'Wood Plank', category: 'material' },
    OAK_LOG: { name: 'Oak Log', category: 'raw_material' },
    OAK_PLANK: { name: 'Oak Plank', category: 'material' },
    STONE_UNREFINED: {
        name: 'Unrefined Stone',
        category: 'raw_material',
    },
    STONE_BRICK: { name: 'Stone Brick', category: 'material' },
    IRON_ORE: { name: 'Iron Ore', category: 'raw_material' },
    IRON_BAR: { name: 'Iron Bar', category: 'material' },
    GOLD_ORE: { name: 'Gold Ore', category: 'raw_material' },
    GOLD_BAR: { name: 'Gold Bar', category: 'material' },
    GOLD_COIN: { name: 'Gold Coin', category: 'currency' },
} as const;

export interface Item {
    name: string;
    category: 'material' | 'currency' | 'raw_material';
}

export type ItemKey = keyof typeof ITEM_CATALOG;

export type ItemData = Partial<Record<ItemKey, number>>;
