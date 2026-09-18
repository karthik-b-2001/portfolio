import siteJson from "./site.json";
import profileJson from "./profile.json";
import experienceJson from "./experience.json";
import projectsJson from "./projects.json";
import skillsJson from "./skills.json";
import educationJson from "./education.json";
import galleryJson from "./gallery.json";

import type { SiteData } from "../types/site";
import type { ProfileData } from "../types/profile";
import type { ExperienceData } from "../types/experience";
import type { ProjectsData } from "../types/projects";
import type { SkillsData } from "../types/skills";
import type { EducationData } from "../types/education";
import type { GalleryData } from "../types/gallery";

// `as` rather than `satisfies`: JSON imports widen "section"/"external" to
// `string`, which can never satisfy the NavLinkType union. The others use
// `satisfies` so missing or misspelled fields fail the build.
export const site = siteJson as SiteData;
export const profile = profileJson satisfies ProfileData;
export const experience = experienceJson satisfies ExperienceData;
export const projects = projectsJson satisfies ProjectsData;
export const skills = skillsJson satisfies SkillsData;
export const education = educationJson satisfies EducationData;
export const gallery = galleryJson satisfies GalleryData;
