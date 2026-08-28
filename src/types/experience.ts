export interface ExperienceItem {
  company: string;
  client: string | null;
  role: string;
  location: string;
  start: string;
  end: string;
  summary: string;
  highlights: string[];
  stack: string[];
}

export interface ExperienceData {
  eyebrow: string;
  subheading: string;
  items: ExperienceItem[];
}
