# Claude Code Prompt — Portfolio Build

Paste everything below the line into Claude Code (running in your `portfolio` folder, with the
`frontend-design` plugin installed). First copy the six JSON files into `portfolio/src/data/`
(Claude Code will create that folder). Then send the prompt.

---

Use the **frontend-design skill** for this build.

**Context & constraints (read fully before doing anything):**

- Treat the current folder (`portfolio`) as the project ROOT. Do **not** create a wrapping
  subfolder — scaffold Vite directly into the current directory (`npm create vite@latest . --
  --template react-ts`, note the `.`).
- Stack: **Vite + React + TypeScript**. Plain CSS or CSS Modules is fine; no CSS framework
  required unless the design calls for one. If you use Tailwind, configure it properly.
- **Everything on the page must be data-driven.** There must be NO hardcoded human-readable
  copy in the components — every string, list, project, job, skill, nav link, and heading is
  read from JSON. A reviewer should be able to change any visible text by editing JSON only.
- The JSON data files already exist in `src/data/`: `site.json`, `profile.json`,
  `experience.json`, `projects.json`, `skills.json`, `education.json`. Load these (import them
  or fetch them) and render the entire site from their contents. Do not duplicate their content
  into components.
- Define **TypeScript interfaces** for each JSON shape in `src/types/` and type the imports.
- The **navbar** comes from `site.json > navigation.links`. It includes a **Blog** entry that
  is an external dummy link (`type: "external"`, `external: true`) — render it as a real anchor
  that opens in a new tab; I'll swap the href later. Section links (`type: "section"`) should
  smooth-scroll to the matching section id.
- **Headshot**: `profile.json > headshot` points at `/headshot-placeholder.png`. Generate a
  tasteful placeholder image at `public/headshot-placeholder.png` (a simple neutral avatar /
  silhouette on a solid or subtly-gradient background sized ~600x600) so the layout looks
  finished. I'll replace the file later with my real LinkedIn headshot — keep the filename.
- Also add a `public/favicon.svg` and a resume placeholder note (the resume href in site.json
  is `/Karthik_Bharadwaj_Resume.pdf` — I'll add the PDF to `public/` myself).

**Sections to render (all from JSON), in this order:**
1. Sticky navbar (brand `KB`, links incl. Blog dummy, and a Resume button)
2. Hero — greeting, headline, subheadline, two CTAs, and the three highlight stats
3. About — heading + paragraphs, with the headshot placeholder
4. Experience — cards/timeline from `experience.json`
5. Projects — featured projects emphasized; each with stack chips, tags, and links
6. Skills — grouped chips from `skills.json`
7. Education — from `education.json`, including certifications
8. Contact — email (primary), location, availability, and social links from `profile.json`
9. Footer — brand, socials, small credit line

**Design direction (this is where the frontend-design skill earns its keep):**
- Follow the skill's process: first propose a compact design plan — palette (4–6 named hex
  values), a deliberate display + body type pairing (not defaults), a layout concept, and ONE
  signature element that this page is remembered by. Show me that plan and wait for my OK
  BEFORE writing component code.
- Avoid the three generic "AI-generated" looks the skill warns about (cream+serif+terracotta;
  near-black+single acid accent; broadsheet hairline columns). Make choices specific to a
  backend/systems + applied-AI engineer.
- I'm a backend/full-stack engineer who works with graphs, pipelines, and systems — a subtle
  structural motif (nodes/edges, a graph, a schema-like grid) is a natural, non-generic
  signature direction if you can execute it with restraint. Spend boldness in one place; keep
  everything else quiet and disciplined.
- Quality floor: fully responsive down to mobile, visible keyboard focus states, respects
  `prefers-reduced-motion`, semantic HTML, good color contrast, and accessible alt text.

**Deliverables:**
- A running `npm run dev` site rendering entirely from the JSON.
- Typed data layer. Clean component structure under `src/components/`.
- A short `README.md` explaining how to edit content via the JSON files and where to drop the
  real headshot + resume.

Start by confirming the folder is empty-enough to scaffold into, then give me the design plan.
