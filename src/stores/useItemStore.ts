import {
    ITEM_CATALOG,
    type ItemData,
    type ItemKey,
} from '@root/game/items/Item_Catelog';
import { useMemo } from 'react';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { useShallow } from 'zustand/shallow';

/**
 * Defines the functions available to manipulate item state.
 */
interface ItemActions {
    addItem: (key: ItemKey, amount: number) => void;
    removeItem: (key: ItemKey, amount: number) => void;
    getDisplayItems: () => { key: ItemKey; name: string; count: number }[];
    reset: () => void;
}

/**
 * Defines the overall item state structure.
 */
interface ItemState {
    items: ItemData;
    actions: ItemActions;
}

/**
 * Defines the structure for display-friendly item information.
 */
export interface DisplayItem {
    key: ItemKey;
    name: string;
    count: number;
}

/**
 * Zustand store for managing item state and actions.
 */
const useItemStore = create<ItemState>()(
    persist(
        (set, get, store) => ({
            items: {},

            actions: {
                addItem: (key, count) =>
                    set((state) => {
                        const currentCount = state.items[key] || 0;
                        const newCount = currentCount + count;

                        return {
                            items: {
                                ...state.items,
                                [key]: newCount,
                            } as ItemData,
                        } as Partial<ItemState>;
                    }),

                removeItem: (key, count) =>
                    set((state) => {
                        const currentCount = state.items[key] || 0;
                        const newCount = Math.max(0, currentCount - count);

                        const newItems: ItemData = { ...state.items };

                        if (newCount > 0) {
                            newItems[key] = newCount;
                        } else {
                            delete newItems[key];
                        }

                        return {
                            items: newItems,
                        } as Partial<ItemState>;
                    }),

                getDisplayItems: () => {
                    const itemData = get().items;
                    const displayItems = [];

                    for (const key in itemData) {
                        const itemKey = key as ItemKey;
                        const count = itemData[itemKey]!;

                        if (count > 0) {
                            displayItems.push({
                                key: itemKey,
                                name: ITEM_CATALOG[itemKey].name,
                                count: count,
                            });
                        }
                    }

                    displayItems.sort((a, b) => a.name.localeCompare(b.name));

                    return displayItems;
                },
                reset: () => {
                    set(store.getInitialState());
                },
            },
        }),
        {
            name: 'game-items',
        }
    )
);

/**
 * Custom hook to retrieve a display-friendly list of items from the store.
 * @returns A DisplayItem array containing the items currently in the player's possession for display on the UI.
 */
export const useDisplayItems = (): DisplayItem[] => {
    const getDisplayItems = useItemStore(
        useShallow((state) => state.actions.getDisplayItems)
    );

    return useMemo(() => getDisplayItems(), [getDisplayItems]);
};

/**
 * Custom hook to retrieve item store action functions from the store.
 * @returns An object containing all item store actions functions.
 */
export const useItemActions = () => {
    const actions = useItemStore((state) => state.actions);

    return useMemo(() => actions, [actions]);
};
