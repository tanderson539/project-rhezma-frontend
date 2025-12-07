import type { Item } from './Item_Catelog';

const Items_Wood_Materials: Readonly<Record<string, Item>> = {
    WOOD_PLANK: { name: 'Wood Plank', category: 'material' },
    OAK_PLANK: { name: 'Oak Plank', category: 'material' },
    MAPLE_PLANK: { name: 'Maple Plank', category: 'material' },
} as const;

const Items_Metal_Materials: Readonly<Record<string, Item>> = {
    IRON_INGOT: { name: 'Iron Ingot', category: 'material' },
    COPPER_INGOT: { name: 'Copper Ingot', category: 'material' },
    TIN_INGOT: { name: 'Tin Ingot', category: 'material' },
    BRONZE_INGOT: { name: 'Bronze Ingot', category: 'material' },
    GOLD_INGOT: { name: 'Gold Ingot', category: 'material' },
} as const;

export const Items_Materials: Readonly<Record<string, Item>> = {
    STONE_BRICK: { name: 'Stone Brick', category: 'material' },
    ...Items_Metal_Materials,
    ...Items_Wood_Materials,
} as const;
