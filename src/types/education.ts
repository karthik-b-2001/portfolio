export interface EducationItem {
  institution: string;
  location: string;
  degree: string;
  start: string;
  end: string;
  gpa: string | null;
  highlights: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  href: string;
  note?: string;
}

export interface EducationData {
  eyebrow: string;
  items: EducationItem[];
  certifications: Certification[];
}
