import Player, { type PlayerData } from '@root/game/player/Player';
import type ForestrySkill from '@root/game/skills/Forestry';
import type { ForestryActionPayload } from '@root/game/skills/Forestry';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface PlayerState {
    playerData: PlayerData;
    setUsername: (uname: string) => void;
    performForestryAction: (treeType: ForestryActionPayload) => void;
    getForestryXP: () => number;
    getForestryLevel: () => number;
    getForestryXPToNextLevel: () => number;
    reset: () => void;
}

interface ForestryData {
    forestryXP: number;
    forestryLevel: number;
    forestryXPToNextLevel: number;
}

const defaultPlayerState: PlayerData = {
    username: 'Player 1',
    forestryXP: 0,
    forestryLevel: 1,
};

const usePlayerStore = create<PlayerState>()(
    persist(
        (set, get) => ({
            playerData: defaultPlayerState,

            setUsername: (uname: string) => {
                const currentData = get().playerData;

                const tempPlayer = new Player(currentData);
                tempPlayer.setName(uname);

                set({ playerData: tempPlayer.getData() });
            },

            performForestryAction: (treeType: ForestryActionPayload) => {
                const currentData = get().playerData;

                const tempPlayer = new Player(currentData);

                const baseXP = tempPlayer
                    .getForestrySkill()
                    .performAction(treeType);

                console.log(
                    `Earned ${baseXP} XP. New level: ${tempPlayer.getForestrySkill().getLevel()}`
                );

                set({ playerData: tempPlayer.getData() });
            },
            getForestryXP: () => {
                return get().playerData.forestryXP;
            },
            getForestryLevel: () => {
                return get().playerData.forestryLevel;
            },
            getForestryXPToNextLevel: () => {
                const currentData = get().playerData;

                const tempPlayer = new Player(currentData);
                const forestrySkill: ForestrySkill =
                    tempPlayer.getForestrySkill();

                return forestrySkill.getXPToNextLevel();
            },

            reset: () => set({ playerData: defaultPlayerState }),
        }),
        {
            name: 'player-store',
            merge: (persistedState: unknown, currentState: PlayerState) => {
                const state = persistedState as Partial<PlayerState>;
                if (state?.playerData) {
                    return { ...currentState, playerData: state.playerData };
                }
                return currentState;
            },
        }
    )
);

export const useSetUsername = (uname: string) => {
    return usePlayerStore((state) => state.setUsername(uname));
};

export const useGetUsername = () => {
    return usePlayerStore((state) => state.playerData.username);
};

export const useGetForestryData = (): ForestryData => {
    const forestryXP = usePlayerStore((state) => state.playerData.forestryXP);
    const forestryLevel = usePlayerStore(
        (state) => state.playerData.forestryLevel
    );
    const forestryXPToNextLevel = usePlayerStore((state) => {
        return state.getForestryXPToNextLevel();
    });
    return { forestryXP, forestryLevel, forestryXPToNextLevel };
};

export const useForestryAction = () => {
    return usePlayerStore((state) => state.performForestryAction);
};

export const useResetPlayerStore = () => {
    return usePlayerStore((state) => state.reset);
};
