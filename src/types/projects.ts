export interface ProjectLink {
  label: string;
  href: string;
  icon: string;
}

export interface ProjectItem {
  title: string;
  subtitle: string;
  year: string;
  featured: boolean;
  blurb: string;
  details: string[];
  stack: string[];
  links: ProjectLink[];
  tags: string[];
}

export interface ProjectsData {
  eyebrow: string;
  subheading: string;
  items: ProjectItem[];
}
