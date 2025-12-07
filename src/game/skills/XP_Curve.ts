export const MAX_LEVEL = 125;

/**
 * Calculates the total experience required to reach a given level.
 * @param level The target level (1 to MAX_LEVEL).
 * @returns The total cumulative XP required.
 */
export function getXPForLevel(level: number): number {
    if (level < 1) return 0;
    if (level >= MAX_LEVEL) {
        return getXPForLevel(MAX_LEVEL - 1);
    }

    let totalXP = 0;

    for (let currentLevel = 1; currentLevel < level; currentLevel++) {
        const N = currentLevel;
        const requiredForNextLevel = Math.floor(
            (N + 300 * Math.pow(2, N / 10)) / 4
        );

        totalXP += requiredForNextLevel;
    }

    return totalXP;
}

/**
 * Finds the current level based on the total accumulated XP.
 * This is the reverse lookup of getXPForLevel.
 * @param xp The total accumulated experience points.
 * @returns The current skill level (1-MAX_LEVEL).
 */
export function getLevelForXP(xp: number): number {
    if (xp < 0) return 1;

    for (let level = 1; level < MAX_LEVEL; level++) {
        const xpRequired = getXPForLevel(level + 1);

        if (xp < xpRequired) {
            return level;
        }
    }

    return MAX_LEVEL;
}
