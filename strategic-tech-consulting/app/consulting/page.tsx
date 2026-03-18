import Link from "next/link";

const services = [
  {
    title: "Business Intelligence & Dashboards",
    summary:
      "Reporting and dashboard solutions that help businesses track performance, understand trends, and make better decisions with clearer visibility.",
    deliverables: [
      "Power BI dashboards and KPI reporting",
      "SQL-based data preparation and modelling",
      "Operational, financial, or performance visibility",
      "Decision-ready reporting structures",
    ],
  },
  {
    title: "Automation Workflows",
    summary:
      "Practical automation solutions that reduce manual work, improve consistency, and save time across repeatable business processes.",
    deliverables: [
      "Workflow mapping and process review",
      "Automated reporting and task flows",
      "Internal process optimisation",
      "Integration planning for scalable operations",
    ],
  },
  {
    title: "Custom Business Tools",
    summary:
      "Lightweight digital tools and internal systems designed around real operational needs, not unnecessary complexity.",
    deliverables: [
      "Internal admin tools and portals",
      "Business process support systems",
      "Custom forms, trackers, and workflow tools",
      "Modern web-based interfaces",
    ],
  },
  {
    title: "Technology Advisory",
    summary:
      "Structured guidance for businesses that need clarity on systems, priorities, solution direction, or how to approach digital improvement.",
    deliverables: [
      "Solution planning and recommendation",
      "Technology roadmap discussions",
      "Requirements clarification",
      "Practical implementation direction",
    ],
  },
];

const processSteps = [
  {
    step: "01",
    title: "Discovery",
    description:
      "We start by understanding the business challenge, the current process, and what a useful outcome should look like.",
  },
  {
    step: "02",
    title: "Solution framing",
    description:
      "A practical solution is shaped around your needs, with attention to clarity, usability, and realistic implementation.",
  },
  {
    step: "03",
    title: "Build or support",
    description:
      "The work is delivered with a focus on structure, communication, and outcomes that support real progress.",
  },
  {
    step: "04",
    title: "Refine and scale",
    description:
      "As needs evolve, the solution can be improved, extended, or supported through a steady growth approach.",
  },
];

const fitItems = [
  "Small businesses that need better visibility and reporting",
  "Growing teams dealing with manual and repetitive processes",
  "Startups that need lean digital tools or internal systems",
  "Organisations looking for practical technology guidance",
];

const packageGuides = [
  {
    title: "Focused advisory",
    price: "From R1 500",
    detail:
      "For structured consultation sessions, solution direction, and business technology guidance.",
  },
  {
    title: "Dashboard and reporting work",
    price: "From R7 500",
    detail:
      "For reporting, KPI visibility, and practical business intelligence delivery depending on scope.",
  },
  {
    title: "Custom build or automation work",
    price: "Custom quote",
    detail:
      "For internal tools, automation workflows, and tailored implementation based on business requirements.",
  },
];

export default function ConsultingPage() {
  return (
    <>
      <section className="section-space pt-14 md:pt-20">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="animate-fade-up">
              <p className="eyebrow">Consulting</p>

              <h1 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight text-[var(--text-primary)] md:text-5xl">
                Practical consulting services for businesses that need better
                systems, better visibility, and better flow.
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--text-secondary)] md:text-lg">
                Strategic Tech Consulting helps businesses improve how they
                operate through reporting, automation, custom tools, and clear
                technology direction. The focus is always on practical value,
                structured delivery, and solutions that support real business
                progress.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/contact" className="primary-btn">
                  Book a Discovery Call
                </Link>
                <Link href="#services" className="secondary-btn">
                  Explore Services
                </Link>
              </div>
            </div>

            <div className="animate-fade-up-delay">
              <div className="rounded-[2rem] border bg-[linear-gradient(180deg,#ffffff_0%,#f8f4ed_100%)] p-6 md:p-8 subtle-divider shadow-[0_18px_50px_rgba(0,0,0,0.04)]">
                <div className="grid gap-4">
                  <div className="rounded-2xl border bg-white p-5 subtle-divider transition duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.04)]">
                    <p className="text-sm font-medium text-[var(--brand-gold-dark)]">
                      Built for clarity
                    </p>
                    <p className="mt-2 text-sm leading-7 text-[var(--text-secondary)]">
                      Solutions are shaped around actual business needs, not
                      unnecessary complexity.
                    </p>
                  </div>

                  <div className="rounded-2xl border bg-white p-5 subtle-divider transition duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.04)]">
                    <p className="text-sm font-medium text-[var(--brand-gold-dark)]">
                      Founder-led quality
                    </p>
                    <p className="mt-2 text-sm leading-7 text-[var(--text-secondary)]">
                      Clients work directly with the founder for focused
                      engagement and accountability.
                    </p>
                  </div>

                  <div className="rounded-2xl border bg-white p-5 subtle-divider transition duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.04)]">
                    <p className="text-sm font-medium text-[var(--brand-gold-dark)]">
                      Scalable support
                    </p>
                    <p className="mt-2 text-sm leading-7 text-[var(--text-secondary)]">
                      Delivery is realistic for current needs and adaptable as
                      the business grows.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="section-space bg-white">
        <div className="container-shell">
          <div className="mb-10">
            <p className="eyebrow">Core services</p>
            <h2 className="section-title mt-3">
              Consulting services designed around real business challenges
            </h2>
            <p className="section-copy">
              The service offering is intentionally focused on areas where clear
              technical thinking can create visible business value.
            </p>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {services.map((service, index) => (
              <div
                key={service.title}
                className="soft-card transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(0,0,0,0.05)]"
                style={{ animationDelay: `${index * 90}ms` }}
              >
                <div className="mb-5 h-11 w-11 rounded-full bg-[#f3e7d3]" />
                <h3 className="text-2xl font-semibold text-[var(--text-primary)]">
                  {service.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[var(--text-secondary)]">
                  {service.summary}
                </p>

                <div className="mt-6">
                  <p className="text-sm font-semibold text-[var(--brand-brown)]">
                    Typical focus areas
                  </p>
                  <ul className="mt-3 space-y-3">
                    {service.deliverables.map((item) => (
                      <li
                        key={item}
                        className="rounded-xl border bg-[#fffdfa] px-4 py-3 text-sm text-[var(--text-secondary)] subtle-divider"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="animate-fade-up">
              <p className="eyebrow">How the work is approached</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--text-primary)] md:text-4xl">
                A simple process designed to keep delivery clear and focused.
              </h2>
              <p className="mt-4 text-base leading-8 text-[var(--text-secondary)] md:text-lg">
                Good consulting should feel well-structured. The process is kept
                simple so that businesses understand what is happening, what is
                being delivered, and how the work connects to real outcomes.
              </p>
            </div>

            <div className="grid gap-5 animate-fade-up-delay">
              {processSteps.map((item) => (
                <div
                  key={item.step}
                  className="rounded-2xl border bg-white px-5 py-5 subtle-divider transition duration-300 hover:border-[var(--border-strong)] hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.04)]"
                >
                  <div className="flex items-start gap-4">
                    <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[var(--brand-brown)] text-sm font-semibold text-white">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-[var(--text-primary)]">
                        {item.title}
                      </h3>
                      <p className="mt-2 text-sm leading-7 text-[var(--text-secondary)]">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-space bg-white">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
            <div className="animate-fade-up">
              <p className="eyebrow">Who this is for</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--text-primary)] md:text-4xl">
                Best suited for businesses that want practical support and clear
                direction.
              </h2>

              <div className="mt-8 space-y-4">
                {fitItems.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border bg-[#fffdfa] px-5 py-4 text-sm leading-7 text-[var(--text-secondary)] subtle-divider transition duration-300 hover:-translate-y-1 hover:shadow-[0_10px_24px_rgba(0,0,0,0.04)]"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <div className="animate-fade-up-delay">
              <div className="rounded-[2rem] border bg-[linear-gradient(180deg,#ffffff_0%,#f8f4ed_100%)] p-6 md:p-8 subtle-divider">
                <p className="eyebrow">Pricing guide</p>
                <h3 className="mt-3 text-2xl font-semibold text-[var(--text-primary)]">
                  Clear starting points for engagement
                </h3>
                <p className="mt-4 text-sm leading-7 text-[var(--text-secondary)]">
                  Final pricing depends on scope, complexity, and timelines, but
                  these ranges provide a practical starting point for planning.
                </p>

                <div className="mt-8 space-y-4">
                  {packageGuides.map((item) => (
                    <div
                      key={item.title}
                      className="rounded-2xl border bg-white p-5 subtle-divider transition duration-300 hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(0,0,0,0.05)]"
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <h4 className="text-lg font-semibold text-[var(--text-primary)]">
                            {item.title}
                          </h4>
                          <p className="mt-2 text-sm leading-7 text-[var(--text-secondary)]">
                            {item.detail}
                          </p>
                        </div>
                        <span className="rounded-full bg-[#f6efe3] px-3 py-1 text-sm font-semibold text-[var(--brand-brown)]">
                          {item.price}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8">
                  <Link href="/contact" className="primary-btn">
                    Request a Quote
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-shell">
          <div className="rounded-[2rem] border bg-white px-6 py-12 md:px-10 md:py-14 subtle-divider shadow-[0_18px_50px_rgba(0,0,0,0.04)]">
            <div className="max-w-3xl">
              <p className="eyebrow">Next step</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--text-primary)] md:text-4xl">
                Start with a discovery conversation that is clear and practical.
              </h2>
              <p className="mt-4 text-base leading-8 text-[var(--text-secondary)] md:text-lg">
                Whether you already know what you need or want help clarifying
                the right solution, the first step is a conversation focused on
                your business context and priorities.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact" className="primary-btn">
                Book a Discovery Call
              </Link>
              <Link href="/founder" className="secondary-btn">
                Meet the Founder
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}