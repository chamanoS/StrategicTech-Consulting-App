import Link from "next/link";

const contactReasons = [
  {
    title: "Start a consulting project",
    description:
      "For businesses that need dashboards, automation support, internal tools, or guidance on a technology solution.",
  },
  {
    title: "Request a quote",
    description:
      "For businesses that already have a clear need and want to discuss scope, timelines, and a tailored estimate.",
  },
  {
    title: "Ask about the academy",
    description:
      "For students or partners who want to know more about portfolio support, career readiness, or mentoring opportunities.",
  },
];

const contactDetails = [
  {
    label: "Business email",
    value: "hello@strategictechconsulting.co.za",
  },
  {
    label: "Response time",
    value: "Within 1–2 business days",
  },
  {
    label: "Consulting focus",
    value: "Business intelligence, automation, and digital tools",
  },
];

const enquiryTypes = [
  "Consulting project",
  "Request a quote",
  "Academy enquiry",
  "Partnership or collaboration",
  "General enquiry",
];

export default function ContactPage() {
  return (
    <>
      <section className="section-space pt-14 md:pt-20">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
            <div className="animate-fade-up">
              <p className="eyebrow">Contact</p>

              <h1 className="mt-3 max-w-3xl text-4xl font-semibold tracking-tight text-[var(--text-primary)] md:text-6xl">
                Let’s start with a clear conversation about what you need.
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--text-secondary)] md:text-lg">
                Whether you need support for a business challenge, want to
                discuss a consulting project, or would like to enquire about the
                academy, the first step is a focused conversation. The aim is to
                understand your context clearly and determine the most practical
                next move.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a href="#enquiry-form" className="primary-btn">
                  Send an Enquiry
                </a>
                <Link href="/consulting" className="secondary-btn">
                  View Consulting Services
                </Link>
              </div>
            </div>

            <div className="animate-fade-up-delay">
              <div className="rounded-[2rem] border bg-[linear-gradient(180deg,#ffffff_0%,#f8f4ed_100%)] p-6 md:p-8 subtle-divider shadow-[0_18px_50px_rgba(0,0,0,0.04)]">
                <div className="grid gap-4">
                  {contactDetails.map((item) => (
                    <div
                      key={item.label}
                      className="rounded-2xl border bg-white p-5 subtle-divider transition duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.04)]"
                    >
                      <p className="text-sm font-medium text-[var(--brand-gold-dark)]">
                        {item.label}
                      </p>
                      <p className="mt-2 text-sm leading-7 text-[var(--text-secondary)]">
                        {item.value}
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
            <p className="eyebrow">Ways to get in touch</p>
            <h2 className="section-title mt-3">
              Different reasons to reach out, one clear starting point
            </h2>
            <p className="section-copy">
              Strategic Tech Consulting supports both business-focused work and
              student-focused growth. This page is designed to help you choose
              the right type of enquiry without unnecessary complexity.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {contactReasons.map((item, index) => (
              <div
                key={item.title}
                className="soft-card transition duration-300 hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(0,0,0,0.05)]"
                style={{ animationDelay: `${index * 90}ms` }}
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

      <section id="enquiry-form" className="section-space">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr]">
            <div className="animate-fade-up">
              <p className="eyebrow">Enquiry form</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--text-primary)] md:text-4xl">
                Share a little context so the response can be useful.
              </h2>
              <p className="mt-4 text-base leading-8 text-[var(--text-secondary)] md:text-lg">
                The more clarity you provide about your business, your need, or
                your question, the easier it is to respond with something
                relevant and practical.
              </p>

              <div className="mt-8 rounded-[1.5rem] border bg-[#fffdfa] p-6 subtle-divider">
                <p className="text-sm font-semibold text-[var(--brand-brown)]">
                  What to include
                </p>
                <ul className="mt-4 space-y-3 text-sm leading-7 text-[var(--text-secondary)]">
                  <li>• A short description of what you need</li>
                  <li>• Whether the enquiry is for consulting or the academy</li>
                  <li>• Any timelines or expected delivery windows</li>
                  <li>• The best way to contact you back</li>
                </ul>
              </div>
            </div>

            <div className="animate-fade-up-delay">
              <form className="rounded-[2rem] border bg-white p-6 md:p-8 subtle-divider shadow-[0_18px_50px_rgba(0,0,0,0.04)]">
                <div className="grid gap-5 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-[var(--text-primary)]">
                      Full name
                    </label>
                    <input
                      type="text"
                      placeholder="Your name"
                      className="w-full rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-sm text-[var(--text-primary)] outline-none transition placeholder:text-[var(--text-muted)] focus:border-[var(--brand-gold-dark)]"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-[var(--text-primary)]">
                      Email address
                    </label>
                    <input
                      type="email"
                      placeholder="you@example.com"
                      className="w-full rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-sm text-[var(--text-primary)] outline-none transition placeholder:text-[var(--text-muted)] focus:border-[var(--brand-gold-dark)]"
                    />
                  </div>
                </div>

                <div className="mt-5 grid gap-5 md:grid-cols-2">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-[var(--text-primary)]">
                      Organisation or institution
                    </label>
                    <input
                      type="text"
                      placeholder="Business, startup, university, or individual"
                      className="w-full rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-sm text-[var(--text-primary)] outline-none transition placeholder:text-[var(--text-muted)] focus:border-[var(--brand-gold-dark)]"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-[var(--text-primary)]">
                      Type of enquiry
                    </label>
                    <select className="w-full rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-sm text-[var(--text-primary)] outline-none transition focus:border-[var(--brand-gold-dark)]">
                      {enquiryTypes.map((item) => (
                        <option key={item}>{item}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="mt-5">
                  <label className="mb-2 block text-sm font-medium text-[var(--text-primary)]">
                    Project, question, or enquiry details
                  </label>
                  <textarea
                    rows={7}
                    placeholder="Share a short description of what you need, what stage you are at, and any timelines that matter."
                    className="w-full rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 text-sm text-[var(--text-primary)] outline-none transition placeholder:text-[var(--text-muted)] focus:border-[var(--brand-gold-dark)]"
                  />
                </div>

                <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
                  <p className="max-w-md text-sm leading-7 text-[var(--text-muted)]">
                    This form is currently a front-end layout and can later be
                    connected to email, a database, or a CRM workflow.
                  </p>

                  <button type="submit" className="primary-btn">
                    Send enquiry
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="section-space bg-white">
        <div className="container-shell">
          <div className="rounded-[2rem] border bg-[linear-gradient(180deg,#ffffff_0%,#f8f4ed_100%)] px-6 py-12 md:px-10 md:py-14 subtle-divider">
            <div className="max-w-3xl">
              <p className="eyebrow">Prefer to start with context first?</p>
              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--text-primary)] md:text-4xl">
                Learn more about the work before you reach out.
              </h2>
              <p className="mt-4 text-base leading-8 text-[var(--text-secondary)] md:text-lg">
                If you are still exploring whether Strategic Tech Consulting is
                the right fit, you can review the consulting services or read
                more about the founder and the thinking behind the business.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/consulting" className="secondary-btn">
                Explore Consulting
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