import type { Item } from './Item_Catelog';

const Items_Wood_Raw_Materials: Readonly<Record<string, Item>> = {
    WOOD_LOG: { name: 'Wood Log', category: 'raw_material' },
    OAK_LOG: { name: 'Oak Log', category: 'raw_material' },
    MAPLE_LOG: { name: 'Maple Log', category: 'raw_material' },
} as const;

const Items_Ore_Raw_Materials: Readonly<Record<string, Item>> = {
    IRON_ORE: { name: 'Iron Ore', category: 'raw_material' },
    COPPER_ORE: { name: 'Copper Ore', category: 'raw_material' },
    TIN_ORE: { name: 'Tin Ore', category: 'raw_material' },
    GOLD_ORE: { name: 'Gold Ore', category: 'raw_material' },
    COAL_ORE: { name: 'Coal Ore', category: 'raw_material' },
} as const;

export const Items_Raw_Materials: Readonly<Record<string, Item>> = {
    STONE_UNREFINED: {
        name: 'Unrefined Stone',
        category: 'raw_material',
    },
    ...Items_Ore_Raw_Materials,
    ...Items_Wood_Raw_Materials,
} as const;
