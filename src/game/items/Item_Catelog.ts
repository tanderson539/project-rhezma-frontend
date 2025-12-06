export const ITEM_CATALOG = {
    WOOD_LOG: { name: 'Wood Log', stackable: true, category: 'material' },
    OAK_LOG: { name: 'Oak Log', stackable: true, category: 'material' },
    STONE_UNREFINED: {
        name: 'Unrefined Stone',
        stackable: true,
        category: 'material',
    },
    STONE_BRICK: { name: 'Stone Brick', stackable: true, category: 'material' },
    IRON_ORE: { name: 'Iron Ore', stackable: true, category: 'material' },
    IRON_BAR: { name: 'Iron Bar', stackable: true, category: 'material' },
    GOLD_COIN: { name: 'Gold Coin', stackable: true, category: 'currency' },
} as const;

export type ItemKey = keyof typeof ITEM_CATALOG;

export type ItemData = Partial<Record<ItemKey, number>>;
