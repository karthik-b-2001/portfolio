import { useEffect } from "react";
import { site, profile, experience, projects, skills, education, gallery } from "./data";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Experience as ExperienceSection } from "./components/Experience";
import { Projects as ProjectsSection } from "./components/Projects";
import { Skills as SkillsSection } from "./components/Skills";
import { Education as EducationSection } from "./components/Education";
import { Contact } from "./components/Contact";
import { Gallery } from "./components/Gallery";
import { Footer } from "./components/Footer";
import { SectionDivider } from "./components/SectionDivider";
import { Reveal } from "./components/Reveal";
import { Terminal } from "./components/Terminal";
import { ScrollProgress } from "./components/ScrollProgress";
import { asset } from "./lib/asset";

function App() {
  useEffect(() => {
    document.title = `${site.meta.siteTitle} — ${site.meta.tagline}`;
    const descriptionTag = document.querySelector('meta[name="description"]');
    descriptionTag?.setAttribute("content", site.meta.description);
    document.querySelector('meta[name="theme-color"]')?.setAttribute("content", site.meta.themeColorMeta);
  }, []);

  return (
    <>
      <ScrollProgress />
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />
      <Navbar navigation={site.navigation} />

      <main>
        <Hero hero={profile.hero} headshot={profile.headshot} socials={profile.socials} />

        <SectionDivider />
        <Reveal>
          <About about={profile.about} highlights={profile.hero.highlights} location={profile.contact.location} />
        </Reveal>

        <SectionDivider />
        <Reveal>
          <ExperienceSection data={experience} />
        </Reveal>

        <SectionDivider />
        <Reveal>
          <ProjectsSection data={projects} />
        </Reveal>

        <SectionDivider />
        <Reveal>
          <SkillsSection data={skills} />
        </Reveal>

        <SectionDivider />
        <Reveal>
          <EducationSection data={education} />
        </Reveal>

        <SectionDivider />
        <Reveal>
          <Contact contact={profile.contact} socials={profile.socials} />
        </Reveal>

        <SectionDivider />
        <Reveal>
          <Gallery data={gallery} />
        </Reveal>
      </main>

      <Footer brand={site.navigation.brand} name={profile.name} tagline={site.meta.tagline} socials={profile.socials} />

      <Terminal
        username={profile.name.split(" ")[0].toLowerCase()}
        role={profile.role}
        sectionIds={site.navigation.links.filter((link) => link.type === "section").map((link) => link.href.replace("#", ""))}
        highlights={profile.hero.highlights}
        resumeHref={asset(site.navigation.resume.href)}
      />
    </>
  );
}

export default App;
