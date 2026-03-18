import Link from "next/link";

const featuredStudies = [
  {
    category: "Business intelligence",
    title: "Operations Visibility Dashboard",
    summary:
      "A reporting solution designed to give business stakeholders clearer visibility into performance, activity trends, and operational priorities.",
    challenge:
      "The reporting process was fragmented and manual, making it difficult for decision-makers to get a clear, timely view of performance.",
    approach:
      "The work focused on structuring the reporting view around key metrics, simplifying data interpretation, and improving how performance information was presented.",
    solution:
      "A dashboard-led reporting structure was created to support visibility, easier review, and better ongoing decision support.",
    outcome:
      "The result was a clearer reporting environment that made information easier to track, easier to discuss, and more useful in day-to-day operations.",
    tags: ["Dashboards", "Reporting", "Data visibility"],
  },
  {
    category: "Automation",
    title: "Workflow Improvement for Repetitive Processes",
    summary:
      "A practical process improvement concept aimed at reducing manual effort and creating more consistent execution across repeatable business tasks.",
    challenge:
      "Important tasks were being handled manually, which increased effort, slowed turnaround time, and created inconsistency in how work was completed.",
    approach:
      "The process was reviewed from a business perspective first, with attention to friction points, repeated effort, and opportunities for structured improvement.",
    solution:
      "A workflow-oriented solution approach was designed to simplify repeated actions and support more consistent execution.",
    outcome:
      "The proposed result was a leaner process flow, improved efficiency, and a stronger foundation for future automation.",
    tags: ["Automation", "Process improvement", "Efficiency"],
  },
  {
    category: "Custom tools",
    title: "Internal Business Support Tool",
    summary:
      "A lightweight digital tool concept created to support internal processes more clearly and reduce dependence on scattered manual tracking.",
    challenge:
      "Internal activity was being tracked through fragmented methods, making visibility, consistency, and follow-up more difficult than necessary.",
    approach:
      "The focus was placed on understanding the practical workflow and identifying how a simple, usable digital tool could support the process.",
    solution:
      "A structured internal tool concept was developed to centralise workflow activity and make internal coordination more manageable.",
    outcome:
      "The result was a clearer support model for internal work, with better structure and stronger day-to-day usability.",
    tags: ["Internal tools", "Workflow", "Usability"],
  },
];

const proofPoints = [
  {
    title: "Business-focused structure",
    description:
      "Each case study is framed around a real business need, not just technology for its own sake.",
  },
  {
    title: "Clear problem-to-solution thinking",
    description:
      "The work is presented in a way that shows how challenges are understood, shaped, and solved practically.",
  },
  {
    title: "Representative capability",
    description:
      "These examples reflect the type of consulting work Strategic Tech Consulting is designed to support.",
  },
];

const process = [
  {
    step: "01",
    title: "Understand the challenge",
    description:
      "The first step is always to understand the operational issue, reporting need, or workflow friction clearly.",
  },
  {
    step: "02",
    title: "Frame the solution properly",
    description:
      "Solutions are shaped around usability, business value, and realistic delivery rather than unnecessary complexity.",
  },
  {
    step: "03",
    title: "Deliver with structure",
    description:
      "Whether the outcome is reporting, automation, or a custom tool, the delivery is meant to feel clear and useful.",
  },
];

export default function CaseStudiesPage() {
  return (
    <>
      <section className="section-space pt-14 md:pt-20">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="animate-fade-up">
              <p className="eyebrow">Case studies</p>

              <h1 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight text-[var(--text-primary)] md:text-5xl">
                Representative work that shows how strategy, systems, and
                practical delivery come together.
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--text-secondary)] md:text-lg">
                Strategic Tech Consulting focuses on work that improves clarity,
                supports better business flow, and creates more useful digital
                capability. These case studies are designed to show the type of
                thinking, structure, and solution approach behind that work.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/contact" className="primary-btn">
                  Discuss a Similar Need
                </Link>
                <Link href="/consulting" className="secondary-btn">
                  View Consulting Services
                </Link>
              </div>
            </div>

            <div className="animate-fade-up-delay">
              <div className="rounded-[2rem] border bg-[linear-gradient(180deg,#ffffff_0%,#f8f4ed_100%)] p-6 md:p-8 subtle-divider shadow-[0_18px_50px_rgba(0,0,0,0.04)]">
                <div className="grid gap-4">
                  {proofPoints.map((item) => (
                    <div
                      key={item.title}
                      className="rounded-2xl border bg-white p-5 subtle-divider transition duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.04)]"
                    >
                      <p className="text-sm font-medium text-[var(--brand-gold-dark)]">
                        {item.title}
                      </p>
                      <p className="mt-2 text-sm leading-7 text-[var(--text-secondary)]">
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space bg-white">
        <div className="container-shell">
          <div className="mb-10">
            <p className="eyebrow">Featured examples</p>
            <h2 className="section-title mt-3">
              Case studies structured around business needs and solution clarity
            </h2>
            <p className="section-copy">
              These examples are presented to show the type of work Strategic
              Tech Consulting can support across reporting, process improvement,
              and internal tool development.
            </p>
          </div>

          <div className="space-y-8">
            {featuredStudies.map((study, index) => (
              <article
                key={study.title}
                className="rounded-[2rem] border bg-[#fffdfa] p-6 md:p-8 subtle-divider shadow-[0_12px_36px_rgba(0,0,0,0.03)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_44px_rgba(0,0,0,0.05)]"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
                  <div>
                    <span className="rounded-full bg-[#f6efe3] px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--brand-brown)]">
                      {study.category}
                    </span>

                    <h3 className="mt-4 text-3xl font-semibold tracking-tight text-[var(--text-primary)]">
                      {study.title}
                    </h3>

                    <p className="mt-4 text-base leading-8 text-[var(--text-secondary)]">
                      {study.summary}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-3">
                      {study.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border bg-white px-3 py-1 text-xs font-medium text-[var(--text-secondary)] subtle-divider"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="grid gap-4">
                    <div className="rounded-2xl border bg-white p-5 subtle-divider">
                      <p className="text-sm font-semibold text-[var(--brand-gold-dark)]">
                        Challenge
                      </p>
                      <p className="mt-2 text-sm leading-7 text-[var(--text-secondary)]">
                        {study.challenge}
                      </p>
                    </div>

                    <div className="rounded-2xl border bg-white p-5 subtle-divider">
                      <p className="text-sm font-semibold text-[var(--brand-gold-dark)]">
                        Approach
                      </p>
                      <p className="mt-2 text-sm leading-7 text-[var(--text-secondary)]">
                        {study.approach}
                      </p>
                    </div>

                    <div className="rounded-2xl border bg-white p-5 subtle-divider">
                      <p className="text-sm font-semibold text-[var(--brand-gold-dark)]">
                        Solution
                      </p>
                      <p className="mt-2 text-sm leading-7 text-[var(--text-secondary)]">
                        {study.solution}
                      </p>
                    </div>

                    <div className="rounded-2xl border bg-[linear-gradient(180deg,#ffffff_0%,#f8f4ed_100%)] p-5 subtle-divider">
                      <p className="text-sm font-semibold text-[var(--brand-brown)]">
                        Outcome
                      </p>
                      <p className="mt-2 text-sm leading-7 text-[var(--text-secondary)]">
                        {study.outcome}
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="animate-fade-up">
              <p className="eyebrow">How these projects are approached</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--text-primary)] md:text-4xl">
                Every solution begins with understanding what the business
                actually needs.
              </h2>
              <p className="mt-4 text-base leading-8 text-[var(--text-secondary)] md:text-lg">
                Strong consulting work is not only about technical execution. It
                is also about how the problem is understood, how the solution is
                framed, and how the final outcome supports better day-to-day
                decision-making or operations.
              </p>
            </div>

            <div className="grid gap-5 animate-fade-up-delay">
              {process.map((item) => (
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
          <div className="rounded-[2rem] border bg-[linear-gradient(180deg,#ffffff_0%,#f8f4ed_100%)] px-6 py-12 md:px-10 md:py-14 subtle-divider">
            <div className="max-w-3xl">
              <p className="eyebrow">Need something similar?</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--text-primary)] md:text-4xl">
                Let’s talk about the challenge you are trying to solve.
              </h2>
              <p className="mt-4 text-base leading-8 text-[var(--text-secondary)] md:text-lg">
                Whether your need relates to reporting, workflow improvement, or
                a tailored internal tool, the best starting point is a clear
                conversation about your context, your priorities, and the kind
                of outcome you need.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/contact" className="primary-btn">
                Start the Conversation
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