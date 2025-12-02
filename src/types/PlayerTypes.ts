import type { Resources } from './ResourceStateTypes';
import type { Skills } from './SkillsTypes';

export interface Player {
    username: string;
    skills: Skills;
    resources: Resources;
}
