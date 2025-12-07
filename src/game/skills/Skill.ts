import { getXPForLevel, getLevelForXP, MAX_LEVEL } from './XP_Curve';

/**
 * The base abstract class for all skills in the game.
 * Encapsulates the core progression logic (XP, Level) common to all skills.
 */
export abstract class Skill {
    protected currentXP: number;

    protected currentLevel: number;

    public readonly name: string;

    public readonly description: string;

    /**
     * Initializes a new skill instance.
     * @param name The display name of the skill.
     * @param description A brief description.
     * @param initialXP Starting XP (default is 0).
     */
    constructor(name: string, description: string, initialXP: number = 0) {
        this.name = name;
        this.description = description;
        this.currentXP = initialXP;
        this.currentLevel = getLevelForXP(initialXP);
    }

    /**
     * Returns the current total XP of the skill.
     * @returns The current XP.
     */
    public getXP(): number {
        return this.currentXP;
    }

    /**
     * Returns the current level of the skill.
     * @returns The current skill level.
     */
    public getLevel(): number {
        return this.currentLevel;
    }

    /**
     * Calculates the XP needed to advance to the next level.
     * @returns The remaining XP required for the next level, or 0 if max level.
     */
    public getXPToNextLevel(): number {
        if (this.currentLevel >= MAX_LEVEL) {
            return 0;
        }

        const xpForNext = getXPForLevel(this.currentLevel + 1);

        return xpForNext - this.currentXP;
    }

    /**
     * Get the total XP required to reach the next level.
     * @returns The total XP needed for level (currentLevel + 1).
     */
    public getRequiredXPForNextLevel(): number {
        if (this.currentLevel >= MAX_LEVEL) {
            return getXPForLevel(MAX_LEVEL);
        }
        return getXPForLevel(this.currentLevel + 1);
    }

    /**
     * Adds experience points to the skill, handling level-ups automatically.
     * @param amount The raw XP amount to add.
     * @returns The number of levels gained in this operation.
     */
    public addXP(amount: number): number {
        if (amount <= 0) {
            return 0;
        }

        const oldLevel = this.currentLevel;

        this.currentXP += amount;

        const newLevel = getLevelForXP(this.currentXP);

        const levelsGained = newLevel - oldLevel;
        this.currentLevel = newLevel;

        if (levelsGained > 0) {
            this.handleLevelUp(oldLevel, newLevel);
        }

        return levelsGained;
    }

    /**
     * Abstract method defining the specific action this skill performs (e.g., Mining ore).
     * Subclasses MUST implement this to define the skill's primary activity.
     * @param payload Specific context for the action (e.g., which rock was mined).
     * @returns The base XP value earned from this action.
     */
    public abstract performAction(payload: unknown): number;

    /**
     * Hook called whenever the skill level increases.
     * Subclasses can implement this to unlock new items/abilities.
     * @param oldLevel The level before the increase.
     * @param newLevel The current level after the increase.
     */
    protected handleLevelUp(oldLevel: number, newLevel: number): void {
        console.log(
            `${this.name} Leveled Up! From ${oldLevel} to ${newLevel}.`
        );

        for (let level = oldLevel + 1; level <= newLevel; level++) {
            //this.checkUnlocks(level);
        }
    }

    /**
     * Abstract method defining the checks for if a specific level unlocks new content.
     * Subclasses should implement actual logic (e.g., checking a lookup table).
     * @param level The level reached.
     */
    protected abstract checkUnlocks(level: number): void;
}
