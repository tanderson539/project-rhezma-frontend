import { create } from 'zustand';
import type { Player } from './types/PlayerTypes';
import type { Resources } from './types/ResourceStateTypes';

interface PlayerState {
    player: Player;
    setUsername: (uname: string) => void;
    reset: () => void;
}

interface ResourcesState {
    resources: Resources;
    addResource: (res: keyof Resources, amount: number) => void;
    removeResource: (res: keyof Resources, amount: number) => void;
    reset: () => void;
}

export const usePlayerStore = create<PlayerState>((set, get, store) => ({
    player: {
        username: 'Player 1',
    },
    setUsername: (uname: string) =>
        set((state) => ({ player: { ...state.player, username: uname } })),
    reset: () => {
        set(store.getInitialState());
    },
}));

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
