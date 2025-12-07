import { Skill } from './Skill';

/**
 * Defines the types of trees available to be chopped by a player.
 */
export interface ForestryActionPayload {
    treeType: 'Tree' | 'Oak Tree';
}

/**
 * Defines the structure for forestry-related data retrieval.
 */
export interface ForestryData {
    forestryXP: number;
    forestryLevel: number;
    forestryXPToNextLevel: number;
}

export default class ForestrySkill extends Skill {
    constructor(xp: number = 0) {
        super(
            'Forestry',
            'Your skill at chopping down trees and gathering wood.',
            xp
        );
    }

    public performAction(payload: ForestryActionPayload): number {
        let baseXP = 0;

        switch (payload.treeType) {
            case 'Tree':
                baseXP = 15;
                break;
            case 'Oak Tree':
                baseXP = 25;
                break;
            default:
                baseXP = 5;
        }

        this.addXP(baseXP);

        return baseXP;
    }

    //TODO: Implement unlocks
    protected checkUnlocks(_level: number): void {
        throw new Error('Method not implemented.');
    }
}
