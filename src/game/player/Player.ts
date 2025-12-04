import ForestrySkill from '@game/skills/Forestry';

export default class Player {
    private name: string;
    private forestrySkill: ForestrySkill;

    constructor(name: string) {
        this.name = name;
        this.forestrySkill = new ForestrySkill();
    }

    getName(): string {
        return this.name;
    }

    setName(name: string): void {
        this.name = name;
    }

    getForestrySkill(): ForestrySkill {
        return this.forestrySkill;
    }
}
