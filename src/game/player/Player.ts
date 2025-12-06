import ForestrySkill from '@game/skills/Forestry';

export interface PlayerData {
    username: string;
    forestryXP: number;
    forestryLevel: number;
}

export default class Player {
    private username: string;
    private forestrySkill: ForestrySkill;

    constructor(data: PlayerData) {
        this.username = data.username;
        this.forestrySkill = new ForestrySkill(data.forestryXP);
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

    public getData(): PlayerData {
        return {
            username: this.username,
            forestryXP: this.forestrySkill.getXP(),
            forestryLevel: this.forestrySkill.getLevel(),
        };
    }
}
