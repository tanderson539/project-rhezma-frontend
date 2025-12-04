import type { Player } from '@root/game/types/PlayerTypes';
import { create } from 'zustand';

interface PlayerState {
    player: Player;
    setUsername: (uname: string) => void;
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
