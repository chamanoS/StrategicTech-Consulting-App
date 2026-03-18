import Image from "next/image";
import Link from "next/link";

const strengths = [
  {
    title: "Full-stack development",
    description:
      "Able to design and build practical web-based solutions that are clean, functional, and aligned to real business needs.",
  },
  {
    title: "Business intelligence and analytics",
    description:
      "Experience turning data into useful reporting and decision support through dashboards, structured insights, and performance visibility.",
  },
  {
    title: "Business-minded problem solving",
    description:
      "Focused on understanding the business problem first, then shaping a solution that is realistic, valuable, and sustainable.",
  },
];

const journey = [
  "Built technical capability through self-driven learning and practical implementation.",
  "Worked across technology-related environments in financial and construction contexts.",
  "Combined development, analytics, and business thinking into one consulting direction.",
  "Created Strategic Tech Consulting to support both business growth and student employability.",
];

const values = [
  {
    title: "Clarity over complexity",
    description:
      "I believe good consulting should make things clearer, not more confusing. The goal is to simplify, structure, and move forward with purpose.",
  },
  {
    title: "Practical delivery",
    description:
      "Solutions should be realistic to implement and useful in day-to-day operations, not just impressive in theory.",
  },
  {
    title: "Growth with impact",
    description:
      "The business is designed not only to serve clients, but also to create practical value for students preparing to enter the tech industry.",
  },
];

export default function FounderPage() {
  return (
    <>
      <section className="section-space pt-14 md:pt-20">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_1fr] lg:items-center">
            <div className="animate-fade-up">
              <p className="eyebrow">Founder</p>

              <h1 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight text-[var(--text-primary)] md:text-4xl">
                Building practical technology solutions with a strong business
                mindset and a commitment to community impact.
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--text-secondary)] md:text-lg">
                Strategic Tech Consulting is founded on the belief that
                technology should help businesses operate better and help people
                prepare better. My work brings together software development,
                analytics, and problem-solving in a way that is structured,
                modern, and grounded in real-world needs.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/contact" className="primary-btn">
                  Work With Me
                </Link>
                <Link href="/consulting" className="secondary-btn">
                  View Consulting Services
                </Link>
              </div>

              {/* <div className="mt-10 grid gap-3 sm:grid-cols-2">
                <div className="rounded-xl border bg-white px-4 py-4 subtle-divider transition duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.04)]">
                  <p className="text-sm font-medium text-[var(--brand-gold-dark)]">
                    Industry exposure
                  </p>
                  <p className="mt-2 text-sm leading-7 text-[var(--text-secondary)]">
                    Experience across financial and construction-related
                    technology environments.
                  </p>
                </div>

                <div className="rounded-xl border bg-white px-4 py-4 subtle-divider transition duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.04)]">
                  <p className="text-sm font-medium text-[var(--brand-gold-dark)]">
                    Learning path
                  </p>
                  <p className="mt-2 text-sm leading-7 text-[var(--text-secondary)]">
                    Self-taught in development, with continued academic growth
                    in History and Information Science at UNISA.
                  </p>
                </div>
              </div> */}
            </div>

            <div className="animate-fade-up-delay">
             <div className="overflow-hidden rounded-[2rem] border bg-white p-2 subtle-divider shadow-[0_10px_30px_rgba(0,0,0,0.05)] max-w-sm mx-auto">
               <div className="relative h-[480px] w-full max-w-sm mx-auto overflow-hidden rounded-[1.5rem] bg-[#f4f1eb]">
                  <Image
                    src="/images/founder.jpeg"
                    alt="Founder of Strategic Tech Consulting"
                    fill
                    className="object-cover transition duration-700 hover:scale-[1.02]"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space bg-white">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="animate-fade-up">
              <p className="eyebrow">Professional profile</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--text-primary)] md:text-4xl">
                A founder profile shaped by development, analytics, and
                independent growth.
              </h2>
            </div>

            <div className="animate-fade-up-delay">
              <p className="text-base leading-8 text-[var(--text-secondary)] md:text-lg">
                My journey has been shaped by curiosity, discipline, and the
                willingness to build capability through practical work. Over
                time, I developed a skill set that sits at the intersection of
                software development, business intelligence, and business
                improvement. That combination now forms the foundation of
                Strategic Tech Consulting.
              </p>

              <p className="mt-5 text-base leading-8 text-[var(--text-secondary)] md:text-lg">
                I am especially interested in work that improves clarity,
                creates efficiency, and gives people or organisations a stronger
                platform for growth. That applies to business systems and data,
                but it also applies to student development and employability.
              </p>
            </div>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {strengths.map((item, index) => (
              <div
                key={item.title}
                className="soft-card transition duration-300 hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(0,0,0,0.05)]"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="mb-4 h-11 w-11 rounded-full bg-[#f3e7d3]" />
                <h3 className="text-xl font-semibold text-[var(--text-primary)]">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-[var(--text-secondary)]">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-shell">
          <div className="rounded-[2rem] border bg-[linear-gradient(180deg,#ffffff_0%,#f8f4ed_100%)] p-8 md:p-10 subtle-divider">
            <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
              <div className="animate-fade-up">
                <p className="eyebrow">Journey</p>
                <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--text-primary)] md:text-4xl">
                  A path built through self-learning, hands-on development, and
                  consistent growth.
                </h2>
              </div>

              <div className="space-y-4 animate-fade-up-delay">
                {journey.map((item, index) => (
                  <div
                    key={item}
                    className="rounded-2xl border bg-white px-5 py-5 subtle-divider transition duration-300 hover:border-[var(--border-strong)] hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.04)]"
                  >
                    <div className="flex items-start gap-4">
                      <div className="mt-1 flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[var(--brand-brown)] text-xs font-semibold text-white">
                        {index + 1}
                      </div>
                      <p className="text-sm leading-7 text-[var(--text-secondary)]">
                        {item}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space bg-white">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="animate-fade-up">
              <p className="eyebrow">Why this business exists</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--text-primary)] md:text-4xl">
                Strategic Tech Consulting was created to connect technology,
                business growth, and employability.
              </h2>

              <p className="mt-5 text-base leading-8 text-[var(--text-secondary)] md:text-lg">
                On one side, the business supports small businesses and growing
                organisations that need better systems, clearer reporting, and
                practical digital improvement. On the other side, it supports
                students who need help moving from academic learning into the
                actual job market.
              </p>
            </div>

            <div className="grid gap-5 animate-fade-up-delay">
              {values.map((item) => (
                <div
                  key={item.title}
                  className="soft-card transition duration-300 hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(0,0,0,0.05)]"
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

      <section className="section-space">
        <div className="container-shell">
          <div className="rounded-[2rem] border bg-white px-6 py-12 md:px-10 md:py-14 subtle-divider shadow-[0_18px_50px_rgba(0,0,0,0.04)]">
            <div className="max-w-3xl">
              <p className="eyebrow">Next step</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--text-primary)] md:text-4xl">
                Let’s build something useful, strategic, and well-executed.
              </h2>
              <p className="mt-4 text-base leading-8 text-[var(--text-secondary)] md:text-lg">
                Whether you need consulting support for a business challenge or
                want to engage with the academy side of the business, the goal
                is the same: practical progress with clarity and intention.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact" className="primary-btn">
                Book a Discovery Call
              </Link>
              <Link href="/academy" className="secondary-btn">
                Explore the Academy
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}