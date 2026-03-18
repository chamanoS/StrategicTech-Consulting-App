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

      <section id="enquiry-form" className="section-space mt-[-24px]">
        <div className="container-shell">
          <div className="grid gap-10 lg:grid-cols-[0.88fr_1.12fr]">
            <div className="animate-fade-up">
              <p className="eyebrow md:text-lg">Enquiry form</p>
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
                  <button type="submit" className="primary-btn">
                    Send enquiry
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

     
    </>
  );
}