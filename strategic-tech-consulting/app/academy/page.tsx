import Link from "next/link";

const programs = [
  {
    title: "Portfolio Builder Programme",
    description:
      "A structured programme designed to help students build stronger GitHub portfolios, improve project quality, and present themselves more confidently for internships and entry-level roles.",
    points: [
      "Project selection and structure guidance",
      "GitHub portfolio improvement",
      "Personal branding support",
      "Practical project feedback",
    ],
  },
  {
    title: "Career Launch Programme",
    description:
      "Focused support for students preparing to enter the job market, with attention to CV quality, interview preparation, workplace readiness, and professional positioning.",
    points: [
      "CV and LinkedIn support",
      "Interview readiness guidance",
      "Professional communication practice",
      "Entry-level job market preparation",
    ],
  },
  {
    title: "Mentorship Support",
    description:
      "Ongoing guidance for students who need accountability, direction, and practical support while building confidence in their technical and professional growth.",
    points: [
      "Monthly mentoring support",
      "Progress reviews",
      "Soft skills development",
      "Personal growth direction",
    ],
  },
];

const outcomes = [
  {
    title: "Stronger portfolio quality",
    description:
      "Students leave with better-structured work that reflects practical effort and clearer personal direction.",
  },
  {
    title: "Better professional readiness",
    description:
      "The academy focuses on how students present themselves, communicate, and prepare for real workplace expectations.",
  },
  {
    title: "More confidence for the job market",
    description:
      "The goal is to reduce uncertainty and help students move into applications, interviews, and networking with more confidence.",
  },
];

const audience = [
  "Final-year university students in tech-related fields",
  "Self-taught developers who need structure and direction",
  "Graduates preparing for internships or entry-level roles",
  "Students who need practical support beyond theory",
];

const visualCards = [
  {
    label: "Portfolio",
    title: "Projects with direction",
    copy: "Build work that is easier to present and easier to explain.",
  },
  {
    label: "Readiness",
    title: "Career preparation",
    copy: "Develop confidence in interviews, communication, and presentation.",
  },
  {
    label: "Growth",
    title: "Guided improvement",
    copy: "Get support that helps you progress with more clarity.",
  },
];

export default function AcademyPage() {
  return (
    <>
      <section className="section-space pt-14 md:pt-20">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="animate-fade-up">
              <p className="eyebrow">Academy</p>

              <h1 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight text-[var(--text-primary)] md:text-6xl">
                Career preparation support designed to help students enter the
                tech job market with more confidence.
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--text-secondary)] md:text-lg">
                Strategic Tech Academy exists to help students move beyond
                theory and become more practically prepared for the workplace.
                The focus is on portfolio quality, personal positioning, soft
                skills, and readiness for real opportunities.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/contact" className="primary-btn">
                  Enquire About the Academy
                </Link>
                <a href="#programmes" className="secondary-btn">
                  Explore Programmes
                </a>
              </div>
            </div>

            <div className="animate-fade-up-delay">
              <div className="relative rounded-[2rem] border bg-[linear-gradient(180deg,#ffffff_0%,#f8f4ed_100%)] p-6 md:p-8 subtle-divider shadow-[0_18px_50px_rgba(0,0,0,0.04)] overflow-hidden">
                <div className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-[#f3e7d3]/70" />
                <div className="pointer-events-none absolute -bottom-10 left-8 h-24 w-24 rounded-full bg-[#eadcc7]/60" />

                <div className="relative grid gap-4">
                  {visualCards.map((item, index) => (
                    <div
                      key={item.title}
                      className="rounded-2xl border bg-white p-5 subtle-divider transition duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.04)]"
                      style={{ animationDelay: `${index * 90}ms` }}
                    >
                      <div className="flex items-start gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#f6efe3]">
                          {index === 0 && (
                            <div className="grid gap-1">
                              <span className="block h-1.5 w-5 rounded-full bg-[var(--brand-brown)]" />
                              <span className="block h-1.5 w-4 rounded-full bg-[var(--brand-gold-dark)]" />
                              <span className="block h-1.5 w-3 rounded-full bg-[var(--brand-brown-soft)]" />
                            </div>
                          )}
                          {index === 1 && (
                            <div className="relative h-6 w-6 rounded-full border-2 border-[var(--brand-brown)]">
                              <span className="absolute left-1/2 top-1 h-2 w-0.5 -translate-x-1/2 rounded-full bg-[var(--brand-brown)]" />
                              <span className="absolute left-1/2 top-1/2 h-0.5 w-2 -translate-x-1/2 rounded-full bg-[var(--brand-gold-dark)]" />
                            </div>
                          )}
                          {index === 2 && (
                            <div className="relative h-6 w-6">
                              <span className="absolute bottom-0 left-0 h-3 w-3 rounded-full bg-[var(--brand-brown)]" />
                              <span className="absolute right-0 top-0 h-3 w-3 rounded-full bg-[var(--brand-gold-dark)]" />
                            </div>
                          )}
                        </div>

                        <div>
                          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--brand-gold-dark)]">
                            {item.label}
                          </p>
                          <h3 className="mt-2 text-lg font-semibold text-[var(--text-primary)]">
                            {item.title}
                          </h3>
                          <p className="mt-2 text-sm leading-7 text-[var(--text-secondary)]">
                            {item.copy}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}

                  <div className="rounded-2xl border bg-[#fffdfa] p-5 subtle-divider">
                    <p className="text-sm font-medium text-[var(--brand-gold-dark)]">
                      Academy focus
                    </p>
                    <p className="mt-2 text-sm leading-7 text-[var(--text-secondary)]">
                      Practical growth, clearer direction, and stronger
                      positioning for students preparing to enter the tech
                      industry.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="programmes" className="section-space bg-white">
        <div className="container-shell">
          <div className="mb-10">
            <p className="eyebrow">Programmes</p>
            <h2 className="section-title mt-3">
              Paid programmes built around practical readiness
            </h2>
            <p className="section-copy">
              The academy is designed for students who want structured,
              practical support that improves both their technical presentation
              and their professional readiness.
            </p>
          </div>

          <div className="grid gap-6 xl:grid-cols-3">
            {programs.map((program, index) => (
              <div
                key={program.title}
                className="soft-card flex h-full flex-col transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(0,0,0,0.05)]"
                style={{ animationDelay: `${index * 90}ms` }}
              >
                <div className="mb-5 flex items-center justify-between">
                  <div className="h-12 w-12 rounded-2xl bg-[#f3e7d3]" />
                  <span className="rounded-full bg-[#f6efe3] px-3 py-1 text-xs font-semibold text-[var(--brand-brown)]">
                    Paid programme
                  </span>
                </div>

                <h3 className="text-2xl font-semibold text-[var(--text-primary)]">
                  {program.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-[var(--text-secondary)]">
                  {program.description}
                </p>

                <div className="mt-6">
                  <p className="text-sm font-semibold text-[var(--brand-brown)]">
                    What it includes
                  </p>
                  <ul className="mt-3 space-y-3">
                    {program.points.map((point) => (
                      <li
                        key={point}
                        className="rounded-xl border bg-[#fffdfa] px-4 py-3 text-sm text-[var(--text-secondary)] subtle-divider"
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-2">
                  <Link href="/contact" className="secondary-btn">
                    Enquire Now
                  </Link>
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
              <p className="eyebrow">Outcomes</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--text-primary)] md:text-4xl">
                The goal is not just learning. The goal is visible improvement.
              </h2>
              <p className="mt-4 text-base leading-8 text-[var(--text-secondary)] md:text-lg">
                Strategic Tech Academy is designed to give students more than
                advice. It is meant to help them improve how they build, how
                they present themselves, and how they step into the job market.
              </p>
            </div>

            <div className="grid gap-5 animate-fade-up-delay">
              {outcomes.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border bg-white px-5 py-5 subtle-divider transition duration-300 hover:border-[var(--border-strong)] hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.04)]"
                >
                  <h3 className="text-lg font-semibold text-[var(--text-primary)]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-[var(--text-secondary)]">
                    {item.description}
                  </p>
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
              <p className="eyebrow">Who it is for</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--text-primary)] md:text-4xl">
                Best suited for students who want structured support and clearer
                direction.
              </h2>

              <div className="mt-8 space-y-4">
                {audience.map((item) => (
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
                <p className="eyebrow">Why this matters</p>
                <h3 className="mt-3 text-2xl font-semibold text-[var(--text-primary)]">
                  Bridging the gap between study and employability
                </h3>
                <p className="mt-4 text-sm leading-7 text-[var(--text-secondary)]">
                  Many students complete their studies without feeling fully
                  prepared for how the tech job market actually works. The
                  academy exists to provide guidance that is more practical,
                  more focused, and more aligned with what employers and
                  workplaces expect.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border bg-white p-5 subtle-divider">
                    <p className="text-sm font-medium text-[var(--brand-gold-dark)]">
                      Portfolio support
                    </p>
                    <p className="mt-2 text-sm leading-7 text-[var(--text-secondary)]">
                      Improve how projects are built, explained, and presented.
                    </p>
                  </div>

                  <div className="rounded-2xl border bg-white p-5 subtle-divider">
                    <p className="text-sm font-medium text-[var(--brand-gold-dark)]">
                      Workplace readiness
                    </p>
                    <p className="mt-2 text-sm leading-7 text-[var(--text-secondary)]">
                      Build confidence in communication, professionalism, and
                      transition into work.
                    </p>
                  </div>
                </div>

                <div className="mt-8">
                  <Link href="/contact" className="primary-btn">
                    Ask About the Academy
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
                Start with an enquiry and find the right programme fit.
              </h2>
              <p className="mt-4 text-base leading-8 text-[var(--text-secondary)] md:text-lg">
                Whether you are preparing for internships, graduate roles, or
                your first entry-level opportunity, the academy is designed to
                support you with more clarity and stronger practical direction.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact" className="primary-btn">
                Enquire About the Academy
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