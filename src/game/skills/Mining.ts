import { Skill } from './Skill';

export interface MiningActionPayload {
    oreType: 'Copper' | 'Tin' | 'Iron' | 'Gold';
}

/**
 * Defines the structure for mining-related data retrieval.
 */
export interface MiningData {
    miningXP: number;
    miningLevel: number;
    miningXPToNextLevel: number;
}

export default class MiningSkill extends Skill {
    constructor(xp: number = 0) {
        super(
            'Mining',
            'Your skill at mining ores and gathering minerals.',
            xp
        );
    }

    public performAction(payload: MiningActionPayload): number {
        let baseXP = 0;

        switch (payload.oreType) {
            case 'Copper':
                baseXP = 10;
                break;
            case 'Tin':
                baseXP = 15;
                break;
            case 'Iron':
                baseXP = 25;
                break;
            case 'Gold':
                baseXP = 40;
                break;
            default:
                baseXP = 5;
        }

        this.addXP(baseXP);

        return baseXP;
    }

    protected checkUnlocks(_level: number): void {
        throw new Error('Method not implemented.');
    }
}
