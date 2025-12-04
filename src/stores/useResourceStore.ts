import type { Resources } from '@root/game/types/ResourceStateTypes';
import { create } from 'zustand';

interface ResourcesState {
    resources: Resources;
    addResource: (res: keyof Resources, amount: number) => void;
    removeResource: (res: keyof Resources, amount: number) => void;
    reset: () => void;
}

export const useResourceStore = create<ResourcesState>((set, get, store) => ({
    resources: {
        woodAmt: 12310,
        stoneAmt: 0,
        ironAmt: 0,
    },
    addResource: (res, amount) =>
        set((state) => ({
            resources: {
                ...state.resources,
                [res]: state.resources[res] + amount,
            },
        })),
    removeResource: (res, amount) =>
        set((state) => ({
            resources: {
                ...state.resources,
                [res]: state.resources[res] - amount,
            },
        })),
    reset: () => {
        set(store.getInitialState());
    },
}));
