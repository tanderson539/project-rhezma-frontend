import ForestrySkill from '@game/skills/Forestry';
import MiningSkill from '../skills/Mining';

export interface PlayerData {
    username: string;
    forestryXP: number;
    forestryLevel: number;
    miningXP: number;
    miningLevel: number;
}

export default class Player {
    private username: string;
    private forestrySkill: ForestrySkill;
    private miningSkill: MiningSkill;

    constructor(data: PlayerData) {
        this.username = data.username;
        this.forestrySkill = new ForestrySkill(data.forestryXP);
        this.miningSkill = new MiningSkill(data.miningXP);
    }

    public getName(): string {
        return this.username;
    }

    public setName(name: string): void {
        this.username = name;
    }

    public getForestrySkill(): ForestrySkill {
        return this.forestrySkill;
    }

    public getMiningSkill(): MiningSkill {
        return this.miningSkill;
    }

    public getData(): PlayerData {
        return {
            username: this.username,
            forestryXP: this.forestrySkill.getXP(),
            forestryLevel: this.forestrySkill.getLevel(),
            miningXP: this.miningSkill.getXP(),
            miningLevel: this.miningSkill.getLevel(),
        };
    }
}
