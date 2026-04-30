const NAV_LINKS = [
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

const SOCIAL = {
  github: 'https://github.com/karthik-b-2001',
  linkedin: 'https://linkedin.com/in/karth1kb',
  email: 'karthikbharadwajds@gmail.com',
}

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  )
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

function ArrowDownIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 5v14m-7-7 7 7 7-7" />
    </svg>
  )
}

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-[#09090d]/80 backdrop-blur-lg">
      <div className="mx-auto flex max-w-4xl items-center justify-between px-6 py-5">
        <a href="#" className="text-sm font-semibold tracking-wide text-[#25de00]">
          KB
        </a>

        <div className="flex items-center gap-6">
          <div className="hidden items-center gap-6 md:flex">
            {NAV_LINKS.map(l => (
              <a key={l.href} href={l.href} className="text-[13px] text-gray-500 transition-colors hover:text-[#d900d9]">
                {l.label}
              </a>
            ))}
          </div>

          <div className="h-4 w-px bg-border hidden md:block" />

          <div className="flex items-center gap-4">
            <a href={SOCIAL.github} target="_blank" rel="noopener noreferrer" className="text-gray-500 transition-colors hover:text-[#d900d9]" aria-label="GitHub">
              <GithubIcon className="h-4.5 w-4.5" />
            </a>
            <a href={SOCIAL.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-500 transition-colors hover:text-[#d900d9]" aria-label="LinkedIn">
              <LinkedinIcon className="h-4.5 w-4.5" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col items-center justify-center px-6">
      <div className="hero-glow pointer-events-none absolute inset-0" />

      <div className="animate-fade-up relative max-w-2xl">
        <p className="mb-4 text-sm font-medium tracking-wide text-[#d900d9]">Software and AI Engineer</p>

        <h1 className="text-4xl font-bold leading-[1.15] tracking-tight font-mono sm:text-5xl">
          <span className="name-blue text-[rgb(0,30,224)]">Karthik</span>{' '}
          <span className="name-red text-[rgb(255,5,5)]">Bharadwaj</span>
        </h1>

        <p className="mt-6 text-lg leading-relaxed text-gray-400">
          Currently pursuing a Master of Science in Computer Science at Northeastern University. Previously worked for AB-InBev through Digitide — building and maintaining features for a large-scale planogram visualization tool, built and maintained full-stack systems at zevvo. Passionate about building scalable AI applications.
        </p>

        <div className="mt-8 flex items-center gap-5">
          <a href={`mailto:${SOCIAL.email}`} className="text-sm font-medium text-white transition-colors hover:text-[#d900d9]">
            {SOCIAL.email}
          </a>
          <span className="text-gray-700">/</span>
          <span className="inline-flex items-center gap-1.5 text-sm text-gray-400">
            <span className="pulse-dot inline-block h-1.5 w-1.5 rounded-full bg-accent" />
            Open to opportunities
          </span>
        </div>
      </div>

      <a href="#experience" className="absolute bottom-10 text-gray-700 transition-colors hover:text-[#d900d9]">
        <ArrowDownIcon className="h-5 w-5 animate-bounce" />
      </a>
    </section>
  )
}

function SectionLabel({ label }: { label: string }) {
  return (
    <div className="mb-12 flex items-center gap-4">
      <h2 className="text-sm font-semibold uppercase tracking-widest text-[#25de00]">{label}</h2>
      <div className="h-px flex-1 bg-border" />
    </div>
  )
}

const EXPERIENCES = [
  {
    company: 'Digitide Solutions Ltd',
    role: 'Software Engineer',
    period: 'Sep 2024 – Jun 2025',
    bullets: [
      'Engineered a modular SaaS platform for AB-InBev (1,000+ DAU) — report generation, admin controls, planogram extraction, and bulk workflows across Angular, Python, Docker, and Azure.',
      'Built an NLP/LLM chatbot for warehouse staff to query inventory via natural language, cutting manual lookup time by 60%.',
      'Designed parameter-driven report generation for business users, reducing support tickets by 35%.',
    ],
    tags: ['Angular', 'Python', 'Docker', 'Azure', 'LLM'],
  },
  {
    company: 'zevvo',
    role: 'Full Stack Engineer',
    period: 'Jan 2024 – Jul 2024',
    bullets: [
      'Built core systems end-to-end — bookings, subscriptions, billing, inventory — from system design through MongoDB schema and payment integration.',
      'Implemented JWT auth with XSS/CSRF resistance and admin portal with billing controls, reducing auth bugs by 40%.',
      'Automated CI/CD via GitHub Actions deploying Dockerized services to AWS ECS + Kubernetes, improving deploy frequency 40%.',
    ],
    tags: ['React', 'Node.js', 'AWS', 'Docker', 'MongoDB', 'K8s'],
  },
  {
    company: 'Crestron Electronics',
    role: 'Software Development Intern',
    period: 'Mar 2023 – Jul 2023',
    bullets: [
      'Built REST APIs in .NET Core with query optimizations — 28% faster response times; developed mobile-responsive React components.',
      'Raised unit test coverage from 65% to 89% with Jest, reducing post-deployment defects.',
    ],
    tags: ['.NET Core', 'React', 'Jest', 'REST APIs'],
  },
]

function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-4xl px-6 py-24">
      <SectionLabel label="Experience" />

      <div className="space-y-0">
        {EXPERIENCES.map((exp, i) => (
          <div key={exp.company} className="animate-fade-up border-b border-border py-10 first:pt-0 last:border-b-0 last:pb-0" style={{ animationDelay: `${i * 80}ms` }}>
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <div className="flex items-baseline gap-3">
                <h3 className="text-lg font-semibold text-white">{exp.company}</h3>
                <span className="text-sm text-gray-600">{exp.role}</span>
              </div>
              <span className="text-sm tabular-nums text-gray-600">{exp.period}</span>
            </div>

            <ul className="mt-3 space-y-1.5">
              {exp.bullets.map((b, j) => (
                <li key={j} className="flex gap-3 text-[15px] leading-relaxed text-gray-400">
                  <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-gray-600" />
                  {b}
                </li>
              ))}
            </ul>

            <div className="mt-4 flex flex-wrap gap-1.5">
              {exp.tags.map(tag => (
                <span key={tag} className="rounded-md border border-border bg-surface px-2.5 py-1 text-xs text-[#d900d9]">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

const PROJECTS = [
  {
    title: 'Autonomous Vehicle Perception Pipeline',
    period: '2022',
    description: 'Fine-tuned YOLOv3 for traffic sign detection (88% mAP). Built multi-sensor control-decision pipeline for steering and safety, trained steering angle prediction on recorded track data.',
    tags: ['YOLOv3', 'Computer Vision', 'Python'],
    github: '',
  },
  {
    title: 'MultiCal',
    period: '2025–2026',
    description: 'Multi-calendar desktop app with MVC architecture — event creation, timezone conversion, cross-calendar copying. 90%+ test coverage with JUnit.',
    tags: ['Java', 'MVC', 'JUnit'],
    github: 'https://github.com/karthik-b-2001/multiCal',
  },
  {
    title: 'SAR Imagery Analysis',
    period: '2021',
    description: 'Benchmarked CNN architectures (ResNet, EfficientNet, MobileNet, Inception) on synthetic aperture radar satellite imagery. Compared accuracy, inference speed, and model size.',
    tags: ['PyTorch', 'CNN', 'Remote Sensing'],
    github: '',
  },
  {
    title: 'ParetoFolio — Portfolio Optimization Engine',
    period: '2025',
    description: 'Full-stack portfolio optimization app implementing NSGA-II from scratch to compute the Pareto-optimal efficient frontier across 75 US equities. Features a FastAPI backend with yfinance data ingestion and a React frontend with an interactive efficient frontier scatter plot, allocation donut chart, and Sharpe-ranked table.',
    tags: ['Python', 'FastAPI', 'React 19', 'TypeScript', 'Tailwind CSS', 'NSGA-II'],
    github: 'https://github.com/karthik-b-2001/ParetoFolio',
  },
  {
    title: 'SportsTV Streaming Data Warehouse',
    period: '2025',
    description: 'End-to-end OLTP→OLAP pipeline consolidating 2M+ streaming transactions into a Kimball star schema on Aiven-hosted MySQL 8, with a fully live R Markdown BI report covering growth trends, device breakdowns, and day-of-week analysis.',
    tags: ['R', 'MySQL', 'SQLite', 'R Markdown', 'Kimball Star Schema'],
    github: 'https://github.com/karthik-b-2001/sportstv-streaming-warehouse',
  },
]

function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-4xl px-6 py-24">
      <SectionLabel label="Projects" />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((p, i) => (
          <div key={p.title} className="animate-fade-up rounded-xl border border-border bg-surface p-6 transition-colors hover:border-gray-700 hover:bg-surface-light" style={{ animationDelay: `${i * 80}ms` }}>
            <h3 className="text-[15px] font-semibold text-white">{p.title}</h3>
            <span className="mt-1 block text-xs text-gray-600">{p.period}</span>
            <p className="mt-3 text-sm leading-relaxed text-gray-500">{p.description}</p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {p.tags.map(tag => (
                <span key={tag} className="rounded-md border border-border px-2 py-0.5 text-xs text-[#d900d9]">
                  {tag}
                </span>
              ))}
            </div>
            {p.github && (
              <a href={p.github} target="_blank" rel="noopener noreferrer" className="mt-4 inline-flex items-center gap-1.5 text-xs text-gray-600 transition-colors hover:text-gray-400">
                <GithubIcon className="h-3.5 w-3.5" />
                GitHub
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

const EDUCATION = [
  {
    school: 'Northeastern University',
    degree: 'MS Computer Science',
    period: 'Expected Dec 2027',
    gpa: '4.0 / 4.0',
    coursework: ['Algorithms', 'Database Management Systems', 'Foundations of AI', 'Programming Design Paradigms'],
    current: true,
  },
  {
    school: 'R V College of Engineering',
    degree: 'BE Computer Science & Engineering',
    period: 'Graduated Aug 2023',
    gpa: '8.04 / 10',
    coursework: ['Data Structures', 'Operating Systems', 'Advanced Algorithms', 'Finite Automata'],
    current: false,
  },
]

function Education() {
  return (
    <section id="education" className="mx-auto max-w-4xl px-6 py-24">
      <SectionLabel label="Education" />

      <div className="space-y-0">
        {EDUCATION.map((edu, i) => (
          <div key={edu.school} className="animate-fade-up border-b border-border py-10 first:pt-0 last:border-b-0 last:pb-0" style={{ animationDelay: `${i * 80}ms` }}>
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <div className="flex items-baseline gap-3">
                <h3 className="text-lg font-semibold text-white">{edu.school}</h3>
                {edu.current && (
                  <span className="rounded-full border border-accent/30 bg-accent/10 px-2 py-0.5 text-[11px] font-medium text-accent">
                    current
                  </span>
                )}
              </div>
              <span className="text-sm tabular-nums text-gray-600">{edu.period}</span>
            </div>

            <p className="mt-1 text-sm text-gray-500">{edu.degree} &middot; GPA {edu.gpa}</p>

            <div className="mt-3 flex flex-wrap gap-1.5">
              {edu.coursework.map(c => (
                <span key={c} className="rounded-md border border-border bg-surface px-2.5 py-1 text-xs text-[#d900d9]">
                  {c}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-4xl px-6 py-24">
      <SectionLabel label="Contact" />

      <div className="animate-fade-up">
        <p className="max-w-md text-lg text-gray-400">
          Interested in working together? I'd love to hear from you.
        </p>
        <a
          href={`mailto:${SOCIAL.email}`}
          className="mt-6 inline-flex items-center gap-2 text-white transition-colors hover:text-[#d900d9]"
        >
          {SOCIAL.email}
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14m-7-7 7 7-7 7" /></svg>
        </a>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto flex max-w-4xl items-center justify-between px-6 text-xs text-[#d900d9]">
        <p>&copy; {new Date().getFullYear()} <code className="rounded bg-surface px-1.5 py-0.5 border border-border">Karthik Bharadwaj</code></p>
        <div className="flex gap-4">
          <a href={SOCIAL.github} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-[#d900d9]">GitHub</a>
          <a href={SOCIAL.linkedin} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-[#d900d9]">LinkedIn</a>
        </div>
      </div>
    </footer>
  )
}

function App() {
  return (
    <div className="min-h-screen bg-[#09090d] font-mono text-gray-100">
      <Navbar />
      <main>
        <Hero />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
