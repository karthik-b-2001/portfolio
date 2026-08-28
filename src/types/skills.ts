export interface Skill {
  name: string;
  category: string;
  logo?: string;
  fallback?: string;
}

export interface SkillsData {
  eyebrow: string;
  subheading: string;
  categories: string[];
  items: Skill[];
}
