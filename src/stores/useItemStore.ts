import {
    ITEM_CATALOG,
    type ItemData,
    type ItemKey,
} from '@root/game/items/Item_Catelog';
import { useMemo } from 'react';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { useShallow } from 'zustand/shallow';

interface ItemState {
    items: ItemData;
    addItem: (key: ItemKey, amount: number) => void;
    removeItem: (key: ItemKey, amount: number) => void;
    getDisplayItems: () => { key: ItemKey; name: string; count: number }[];
    reset: () => void;
}

const useItemStore = create<ItemState>()(
    persist(
        (set, get, store) => ({
            items: {},

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
        }),
        {
            name: 'game-items',
        }
    )
);

export const useDisplayItems = () => {
    const items = useItemStore((state) => state.items);

    return useMemo(() => {
        const displayItems = [];

        for (const key in items) {
            const itemKey = key as ItemKey;
            const count = items[itemKey]!;

            if (count > 0 && ITEM_CATALOG[itemKey]) {
                displayItems.push({
                    key: itemKey,
                    name: ITEM_CATALOG[itemKey].name,
                    count: count,
                });
            }
        }

        displayItems.sort((a, b) => a.name.localeCompare(b.name));

        return displayItems;
    }, [items]);
};

export const useItemActions = () => {
    return useItemStore(
        useShallow((state) => ({
            addItem: state.addItem,
            removeItem: state.removeItem,
        }))
    );
};

export const useResetItems = () => {
    return useItemStore((state) => state.reset);
};
