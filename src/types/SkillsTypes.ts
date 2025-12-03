export interface Skill {
    skill_name: string;
    skill_lvl: number;
    skill_xp: number;
}

export interface ForestrySkill extends Skill {
    skill_name: 'Forestry';
}

export interface Skills {
    forestry: Skill;
    mining: Skill;
}
