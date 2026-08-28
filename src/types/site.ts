export type NavLinkType = "section" | "external";

export interface NavLink {
  label: string;
  href: string;
  type: NavLinkType;
  external?: boolean;
  note?: string;
}

export interface ResumeLink {
  label: string;
  href: string;
  note?: string;
}

export interface SiteMeta {
  siteTitle: string;
  tagline: string;
  description: string;
  favicon: string;
  themeColorMeta: string;
}

export interface Navigation {
  brand: string;
  links: NavLink[];
  resume: ResumeLink;
}

export interface SiteData {
  meta: SiteMeta;
  navigation: Navigation;
}
