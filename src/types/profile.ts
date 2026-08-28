export interface Headshot {
  src: string;
  alt: string;
  note?: string;
  placeholder?: boolean;
}

export interface Cta {
  label: string;
  href: string;
}

export interface Highlight {
  value: string;
  label: string;
}

export interface Hero {
  headline: string;
  rotatingRoles: string[];
  subheadline: string;
  availability: string;
  primaryCta: Cta;
  secondaryCta: Cta;
  highlights: Highlight[];
}

export interface About {
  eyebrow: string;
  paragraphs: string[];
}

export interface Social {
  label: string;
  href: string;
  handle: string;
  icon: string;
}

export interface Contact {
  eyebrow: string;
  blurb: string;
  email: string;
  location: string;
  phone?: string;
  phoneNote?: string;
  availability: string;
}

export interface ProfileData {
  name: string;
  role: string;
  headshot: Headshot;
  hero: Hero;
  about: About;
  socials: Social[];
  contact: Contact;
}
