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

export const site = siteJson as SiteData;
export const profile = profileJson as ProfileData;
export const experience = experienceJson as ExperienceData;
export const projects = projectsJson as ProjectsData;
export const skills = skillsJson as SkillsData;
export const education = educationJson as EducationData;
export const gallery = galleryJson as GalleryData;
