import Player, { type PlayerData } from '@root/game/player/Player';
import type ForestrySkill from '@root/game/skills/Forestry';
import type { ForestryActionPayload } from '@root/game/skills/Forestry';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface PlayerActions {
    setUsername: (uname: string) => void;
    performForestryAction: (treeType: ForestryActionPayload) => void;
    getForestryXP: () => number;
    getForestryLevel: () => number;
    getForestryXPToNextLevel: () => number;
    getForestryData: () => ForestryData;
    reset: () => void;
}

interface PlayerState {
    playerData: PlayerData;
    actions: PlayerActions;
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
            actions: {
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
                getForestryData: () => {
                    const forestryXP = get().playerData.forestryXP;
                    const forestryLevel = get().playerData.forestryLevel;
                    const forestryXPToNextLevel =
                        get().actions.getForestryXPToNextLevel();

                    return { forestryXP, forestryLevel, forestryXPToNextLevel };
                },

                reset: () => set({ playerData: defaultPlayerState }),
            },
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

export const useGetUsername = () => {
    return usePlayerStore((state) => state.playerData.username);
};

export const usePlayerActions = () => {
    return usePlayerStore((state) => state.actions);
};
