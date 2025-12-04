import { Skill } from './Skill';

interface ForestryActionPayload {
    treeType: 'Tree' | 'Oak Tree';
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
