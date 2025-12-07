import Player, { type PlayerData } from '@root/game/player/Player';
import type ForestrySkill from '@root/game/skills/Forestry';
import type {
    ForestryActionPayload,
    ForestryData,
} from '@root/game/skills/Forestry';
import type { MiningActionPayload, MiningData } from '@root/game/skills/Mining';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

/**
 * Defines the functions available to manipulate player state.
 */
interface PlayerActions {
    setUsername: (uname: string) => void;
    performForestryAction: (treeType: ForestryActionPayload) => void;
    getForestryXPToNextLevel: () => number;
    getForestryData: () => ForestryData;
    performMiningAction: (oreType: MiningActionPayload) => void;
    getMiningXPToNextLevel: () => number;
    getMiningData: () => MiningData;
    reset: () => void;
}

/**
 * Defines the overall player state structure.
 */
interface PlayerState {
    playerData: PlayerData;
    actions: PlayerActions;
}

/**
 * Defines the default player state upon loading a new game.
 */
const defaultPlayerState: PlayerData = {
    username: 'Player 1',
    forestryXP: 0,
    forestryLevel: 1,
    miningXP: 0,
    miningLevel: 1,
};

/**
 * Zustand store for managing player state and actions.
 */
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

                    console.log(`Earned ${baseXP} Forestry XP.`);

                    set({ playerData: tempPlayer.getData() });
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
                performMiningAction: (oreType: MiningActionPayload) => {
                    const currentData = get().playerData;

                    const tempPlayer = new Player(currentData);

                    const baseXP = tempPlayer
                        .getMiningSkill()
                        .performAction(oreType);

                    console.log(`Earned ${baseXP} Mining XP.`);

                    set({ playerData: tempPlayer.getData() });
                },
                getMiningXPToNextLevel: () => {
                    const currentData = get().playerData;

                    const tempPlayer = new Player(currentData);
                    const miningSkill = tempPlayer.getMiningSkill();

                    return miningSkill.getXPToNextLevel();
                },
                getMiningData: () => {
                    const miningXP = get().playerData.miningXP;
                    const miningLevel = get().playerData.miningLevel;
                    const miningXPToNextLevel =
                        get().actions.getMiningXPToNextLevel();

                    return { miningXP, miningLevel, miningXPToNextLevel };
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
            partialize: (state) => ({ playerData: state.playerData }),
        }
    )
);

/**
 * Custom hook to retrieve the player's username from the store.
 * @returns A string representing the player's username.
 */
export const useGetUsername = () => {
    return usePlayerStore((state) => state.playerData.username);
};

/**
 * Custom hook to retrieve player action functions from the store.
 * @returns An object containing all player actions functions.
 */
export const usePlayerActions = () => {
    return usePlayerStore((state) => state.actions);
};
