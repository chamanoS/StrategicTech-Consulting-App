import Link from "next/link";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import CTASection from "@/components/CTASection";

const consultingServices = [
  {
    title: "Business Intelligence & Dashboards",
    description:
      "Clear reporting solutions that help growing businesses understand performance, track KPIs, and make better decisions with confidence.",
  },
  {
    title: "Automation Workflows",
    description:
      "Practical workflow automation that reduces manual work, improves consistency, and frees up time for more valuable business activity.",
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
  "Portfolio Building Guidance",
  "Soft Skills & Workplace Readiness",
  "Career Launch Support for Final-Year Students",
];

const trustItems = [
  "5 years industry experience",
  "Full-stack development and BI background",
  "Exposure across banking and construction technology",
  "Founder-led delivery with practical business thinking",
];

export default function HomePage() {
  return (
    <>
      <section className="section-space pt-14 md:pt-20">
        <div className="container-shell">
          <div className="split-grid">
            <div>
              <span className="highlight-chip">
                Founder-led consulting with community impact
              </span>

              <h1 className="mt-6 max-w-3xl text-4xl font-semibold tracking-tight text-[var(--text-primary)] md:text-6xl">
                Technology consulting for growing businesses, with a practical
                path for future tech talent.
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--text-secondary)] md:text-lg">
                Strategic Tech Consulting helps businesses improve systems,
                automate processes, and gain better visibility through data —
                while also preparing students to enter the tech job market with
                stronger portfolios and workplace readiness.
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
                {trustItems.map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border bg-white px-4 py-3 text-sm text-[var(--text-secondary)] subtle-divider"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="hero-panel">
              <div className="grid gap-5">
                <div className="metric-card">
                  <p className="text-sm font-medium text-[var(--text-muted)]">
                    Consulting focus
                  </p>
                  <h3 className="mt-2 text-2xl font-semibold text-[var(--text-primary)]">
                    Simple, strategic, and implementable solutions
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--text-secondary)]">
                    The business is built to help clients move forward with
                    clarity — not unnecessary complexity.
                  </p>
                </div>

                <div className="grid gap-5 md:grid-cols-2">
                  <div className="metric-card">
                    <p className="text-sm font-medium text-[var(--brand-gold-dark)]">
                      For businesses
                    </p>
                    <p className="mt-3 text-sm leading-7 text-[var(--text-secondary)]">
                      Better dashboards, better tools, and better operational
                      visibility.
                    </p>
                  </div>

                  <div className="metric-card">
                    <p className="text-sm font-medium text-[var(--brand-gold-dark)]">
                      For students
                    </p>
                    <p className="mt-3 text-sm leading-7 text-[var(--text-secondary)]">
                      Career preparation support that focuses on practical
                      readiness and portfolio quality.
                    </p>
                  </div>
                </div>

                <div className="metric-card">
                  <p className="text-sm font-medium text-[var(--text-muted)]">
                    Built for realistic delivery
                  </p>
                  <p className="mt-3 text-sm leading-7 text-[var(--text-secondary)]">
                    Strategic Tech Consulting is intentionally structured for
                    founder-led quality now, with room to scale through trusted
                    collaboration as client demand grows.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space bg-white">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Consulting services"
            title="Services designed around clear business needs"
            copy="The consulting side focuses on practical delivery: solutions that improve visibility, reduce manual effort, and support better operational decision-making."
          />

          <div className="four-grid">
            {consultingServices.map((service) => (
              <ServiceCard
                key={service.title}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-shell">
          <div className="split-grid">
            <div>
              <SectionHeading
                eyebrow="Why Strategic Tech Consulting"
                title="A consulting approach that balances technology, clarity, and business value"
                copy="The goal is not to overload clients with technical language. The goal is to understand the problem, define a practical solution, and implement it in a way that supports real progress."
              />
            </div>

            <div className="grid gap-5">
              <div className="soft-card">
                <h3 className="text-lg font-semibold text-[var(--text-primary)]">
                  Founder-led delivery
                </h3>
                <p className="mt-3 text-sm leading-7 text-[var(--text-secondary)]">
                  Clients work directly with the founder for focused attention,
                  strong accountability, and consistent delivery quality.
                </p>
              </div>

              <div className="soft-card">
                <h3 className="text-lg font-semibold text-[var(--text-primary)]">
                  Technical and business thinking
                </h3>
                <p className="mt-3 text-sm leading-7 text-[var(--text-secondary)]">
                  Solutions are shaped by both technical capability and an
                  understanding of how business processes need to function.
                </p>
              </div>

              <div className="soft-card">
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
          <SectionHeading
            eyebrow="Strategic Tech Academy"
            title="A paid academy focused on employability and practical readiness"
            copy="The academy supports final-year students and aspiring professionals who need more than theory. It is designed to help them present themselves well, build stronger portfolios, and transition into the workplace with greater confidence."
          />

          <div className="three-grid">
            {academyPrograms.map((program) => (
              <div key={program} className="soft-card">
                <h3 className="text-xl font-semibold text-[var(--text-primary)]">
                  {program}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[var(--text-secondary)]">
                  Structured support designed to help students strengthen their
                  practical positioning for internships, graduate programmes,
                  and entry-level opportunities.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-shell">
          <SectionHeading
            eyebrow="Founder"
            title="Built by a self-taught developer with business intelligence and industry experience"
            copy="Strategic Tech Consulting is founded by a developer and analyst with experience across financial and construction-related technology environments, and a strong interest in using technology to support both business growth and community impact."
          />

          <div className="split-grid">
            <div className="rounded-3xl border bg-[#f6efe3] p-10 subtle-divider">
              <div className="flex h-24 w-24 items-center justify-center rounded-full bg-[var(--brand-brown)] text-3xl font-semibold text-white">
                ST
              </div>
              <p className="mt-6 max-w-xl text-base leading-8 text-[var(--text-secondary)]">
                The business combines software development, analytics, and
                consulting thinking to build solutions that are useful,
                sustainable, and aligned with real-world needs.
              </p>
            </div>

            <div className="grid gap-5">
              <div className="soft-card">
                <h3 className="text-lg font-semibold text-[var(--text-primary)]">
                  Professional credibility
                </h3>
                <p className="mt-3 text-sm leading-7 text-[var(--text-secondary)]">
                  Experience in industry environments provides context for how
                  systems, reporting, and operational needs intersect in real
                  organisations.
                </p>
              </div>

              <div className="soft-card">
                <h3 className="text-lg font-semibold text-[var(--text-primary)]">
                  Continuous growth
                </h3>
                <p className="mt-3 text-sm leading-7 text-[var(--text-secondary)]">
                  The founder continues to grow through formal study, hands-on
                  development work, and ongoing exploration of modern technology
                  and consulting practice.
                </p>
              </div>

              <div className="soft-card">
                <h3 className="text-lg font-semibold text-[var(--text-primary)]">
                  Community impact
                </h3>
                <p className="mt-3 text-sm leading-7 text-[var(--text-secondary)]">
                  The student arm of the business exists to help bridge the gap
                  between study and employability in the tech field.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Start with a conversation that is clear and practical"
        copy="Whether you need a dashboard, a lightweight internal tool, workflow improvement, or structured support for student development, Strategic Tech Consulting is designed to help you move forward with clarity."
        primaryLabel="Book a Discovery Call"
        primaryHref="/contact"
        secondaryLabel="View Consulting Services"
        secondaryHref="/consulting"
      />
    </>
  );
}