import Link from "next/link";

const consultingServices = [
  {
    title: "Business Intelligence & Dashboards",
    description:
      "Clear reporting solutions that help growing businesses understand performance, track KPIs, and make better decisions with confidence.",
  },
  {
    title: "Automation Workflows",
    description:
      "Practical workflow automation that reduces manual effort, improves consistency, and frees up time for more valuable business activity.",
  },
  {
    title: "Custom Business Tools",
    description:
      "Modern internal tools and lightweight web systems tailored to the way your business actually operates.",
  },
  {
    title: "Technology Advisory",
    description:
      "Strategic guidance on systems, digital processes, solution planning, and realistic implementation choices for growth-stage organisations.",
  },
];

const academyPrograms = [
  {
    title: "Portfolio Building Guidance",
    description:
      "Structured support for building stronger projects, cleaner GitHub profiles, and work that is easier to present professionally.",
  },
  {
    title: "Soft Skills & Workp Readiness",
    description:
      "Focused guidance on communication, professionalism, workplace expectations, and confidence in real-world settings.",
  },
  {
    title: "Career Launch Support",
    description:
      "Practical preparation for internships, graduate roles, and entry-level opportunities in tech-related fields.",
  },
];

const trustItems = [
  "Exposure across banking and construction technology",
  "Founder-led delivery with practical business thinking",
];

const featuredAreas = [
  {
    title: "For businesses",
    copy: "Improve visibility, simplify workflows, and build better digital support systems.",
  },
  {
    title: "For students",
    copy: "Strengthen portfolios, professional readiness, and confidence for the job market.",
  },
];

export default function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden section-space pt-14 md:pt-20">
        <div className="hero-shape hero-shape-1" />
        <div className="hero-shape hero-shape-2" />
        <div className="hero-shape hero-shape-3" />

        <div className="container-shell relative z-[1]">
          <div className="grid gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="animate-fade-up">
              

              <h1 className="mt-6 max-w-4xl text-4xl font-semibold tracking-tight text-[var(--text-primary)] md:text-4xl md:leading-[1.05]">
                Practical technology consulting for growing businesses and
                career-focused support for future tech talent.
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--text-secondary)] md:text-lg">
                Strategic Tech Consulting helps businesses improve systems,
                reporting, automation, and digital flow — while also helping
                students become better prepared for the workplace through
                portfolio support and practical readiness programmes.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/contact" className="primary-btn">
                  Start a Project
                </Link>
                <Link href="/academy" className="secondary-btn">
                  Explore the Academy
                </Link>
              </div>

              <div className="mt-10 grid gap-3 sm:grid-cols-2">
                {trustItems.map((item, index) => (
                  <div
                    key={item}
                    className="trust-card animate-soft-rise"
                    style={{ animationDelay: `${index * 90}ms` }}
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="animate-fade-up-delay">
              <div className="hero-panel relative overflow-hidden">
                <div className="panel-shape panel-shape-1" />
                <div className="panel-shape panel-shape-2" />

                <div className="relative z-[1] grid gap-5">
                  <div className="metric-card card-hover">
                    <p className="text-sm font-medium text-[var(--text-muted)]">
                      Consulting focus
                    </p>
                    <h3 className="mt-2 text-2xl font-semibold text-[var(--text-primary)]">
                      Clear solutions built around real business needs
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-[var(--text-secondary)]">
                      The goal is to create useful reporting, better workflow,
                      and more practical digital capability without unnecessary
                      complexity.
                    </p>
                  </div>

                  <div className="grid gap-5 md:grid-cols-2">
                    {featuredAreas.map((item) => (
                      <div key={item.title} className="metric-card card-hover">
                        <p className="text-sm font-medium text-[var(--brand-gold-dark)]">
                          {item.title}
                        </p>
                        <p className="mt-3 text-sm leading-7 text-[var(--text-secondary)]">
                          {item.copy}
                        </p>
                      </div>
                    ))}
                  </div>

                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space bg-white">
        <div className="container-shell">
          <div className="section-heading-wrap animate-fade-up">
            <p className="eyebrow">Consulting services</p>
            <h2 className="section-title mt-3">
              Services designed around clear business needs
            </h2>
            <p className="section-copy">
              The consulting side focuses on practical delivery: solutions that
              improve visibility, reduce manual effort, and support better
              operational decision-making.
            </p>
          </div>

          <div className="four-grid">
            {consultingServices.map((service, index) => (
              <div
                key={service.title}
                className="soft-card card-hover animate-soft-rise"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="service-orb" />
                <h3 className="mt-4 text-xl font-semibold text-[var(--text-primary)]">
                  {service.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[var(--text-secondary)]">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-shell">
          <div className="split-grid">
            <div className="animate-fade-up">
              <p className="eyebrow">Why Strategic Tech Consulting</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--text-primary)] md:text-4xl">
                A consulting approach that balances technology, clarity, and
                business value
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-8 text-[var(--text-secondary)] md:text-lg">
                The goal is not to overload clients with technical language. The
                goal is to understand the problem, define a practical solution,
                and implement it in a way that supports real progress.
              </p>
            </div>

            <div className="grid gap-5">
              <div className="soft-card card-hover animate-soft-rise">
                <h3 className="text-lg font-semibold text-[var(--text-primary)]">
                  Founder-led delivery
                </h3>
                <p className="mt-3 text-sm leading-7 text-[var(--text-secondary)]">
                  Clients work directly with the founder for focused attention,
                  strong accountability, and consistent delivery quality.
                </p>
              </div>

              <div
                className="soft-card card-hover animate-soft-rise"
                style={{ animationDelay: "100ms" }}
              >
                <h3 className="text-lg font-semibold text-[var(--text-primary)]">
                  Technical and business thinking
                </h3>
                <p className="mt-3 text-sm leading-7 text-[var(--text-secondary)]">
                  Solutions are shaped by both technical capability and an
                  understanding of how business processes need to function.
                </p>
              </div>

              <div
                className="soft-card card-hover animate-soft-rise"
                style={{ animationDelay: "180ms" }}
              >
                <h3 className="text-lg font-semibold text-[var(--text-primary)]">
                  Built for steady growth
                </h3>
                <p className="mt-3 text-sm leading-7 text-[var(--text-secondary)]">
                  The model is realistic for a solo founder today and adaptable
                  for future collaboration as demand increases.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space bg-white">
        <div className="container-shell">
          <div className="section-heading-wrap animate-fade-up">
            <p className="eyebrow">Strategic Tech Academy</p>
            <h2 className="section-title mt-3">
              A paid academy focused on employability and practical readiness
            </h2>
            <p className="section-copy">
              The academy supports final-year students and aspiring
              professionals who need more than theory. It is designed to help
              them present themselves well, build stronger portfolios, and
              transition into the workplace with greater confidence.
            </p>
          </div>

          <div className="three-grid">
            {academyPrograms.map((program, index) => (
              <div
                key={program.title}
                className="soft-card academy-card card-hover animate-soft-rise"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="academy-visual">
                  <span className="academy-dot academy-dot-1" />
                  <span className="academy-dot academy-dot-2" />
                  <span className="academy-dot academy-dot-3" />
                </div>

                <h3 className="mt-5 text-xl font-semibold text-[var(--text-primary)]">
                  {program.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[var(--text-secondary)]">
                  {program.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-shell">
          <div className="split-grid">
            <div className="animate-fade-up">
              <p className="eyebrow">Founder</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--text-primary)] md:text-4xl">
                Built by a self-taught developer with business intelligence and
                industry experience
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--text-secondary)] md:text-lg">
                Strategic Tech Consulting is founded by a developer and analyst
                with experience across financial and construction-related
                technology environments, and a strong interest in using
                technology to support both business growth and community impact.
              </p>

              <div className="mt-7">
                <Link href="/founder" className="secondary-btn">
                  Read the founder story
                </Link>
              </div>
            </div>

            <div className="founder-preview-card animate-fade-up-delay">
              <div className="founder-preview-shape founder-preview-shape-1" />
              <div className="founder-preview-shape founder-preview-shape-2" />

              <div className="relative z-[1]">
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-[var(--brand-brown)] text-3xl font-semibold text-white shadow-[0_12px_24px_rgba(107,79,58,0.18)]">
                  ST
                </div>

                <p className="mt-6 max-w-xl text-base leading-8 text-[var(--text-secondary)]">
                  The business combines software development, analytics, and
                  consulting thinking to build solutions that are useful,
                  sustainable, and aligned with real-world needs.
                </p>

                <div className="mt-6 grid gap-3">
                  <div className="founder-preview-chip">Business-minded problem solving</div>
                  <div className="founder-preview-chip">Practical technology delivery</div>
                  <div className="founder-preview-chip">Community-focused growth</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-shell">
          <div className="cta-panel">
            <div className="cta-shape cta-shape-1" />
            <div className="cta-shape cta-shape-2" />

            <div className="relative z-[1] max-w-3xl">
              <p className="eyebrow">Next step</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--text-primary)] md:text-4xl">
                Start with a conversation that is clear and practical
              </h2>
              <p className="mt-4 text-base leading-8 text-[var(--text-secondary)] md:text-lg">
                Whether you need a dashboard, a lightweight internal tool,
                workflow improvement, or structured support for student
                development, Strategic Tech Consulting is designed to help you
                move forward with clarity.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/contact" className="primary-btn">
                  Book a Discovery Call
                </Link>
                <Link href="/consulting" className="secondary-btn">
                  View Consulting Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}