import { SectionHeading } from "@/components/SectionHeading";

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 md:px-8 md:py-28 lg:px-10">
      <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <SectionHeading
            eyebrow="Contact"
            title="Start the conversation"
            description="Use this page to capture leads, qualify project requests, and open academy enquiries without making the process feel heavy."
          />
          <div className="mt-8 space-y-4 text-base leading-7 text-slate-300">
            <p>Email: hello@strategictechconsulting.co.za</p>
            <p>Location: Pretoria, South Africa</p>
            <p>Availability: Consulting projects, student programmes, and selected advisory sessions.</p>
          </div>
        </div>

        <form className="rounded-[2rem] border border-white/10 bg-slate-950/60 p-8">
          <div className="grid gap-5">
            <label className="grid gap-2 text-sm text-slate-300">
              Name
              <input className="w-full rounded-xl border border-slate-800 bg-slate-950 px-4 py-3 text-slate-100 placeholder:text-slate-500 focus:border-blue-500 focus:outline-none" placeholder="Your name" />
            </label>
            <label className="grid gap-2 text-sm text-slate-300">
              Email
              <input className="w-full rounded-xl border border-slate-800 bg-slate-950 px-4 py-3 text-slate-100 placeholder:text-slate-500 focus:border-blue-500 focus:outline-none" placeholder="you@example.com" />
            </label>
            <label className="grid gap-2 text-sm text-slate-300">
              Service needed
              <input className="w-full rounded-xl border border-slate-800 bg-slate-950 px-4 py-3 text-slate-100 placeholder:text-slate-500 focus:border-blue-500 focus:outline-none" placeholder="Consulting, academy, mentorship..." />
            </label>
            <label className="grid gap-2 text-sm text-slate-300">
              Message
              <textarea className="min-h-[160px] w-full rounded-xl border border-slate-800 bg-slate-950 px-4 py-3 text-slate-100 placeholder:text-slate-500 focus:border-blue-500 focus:outline-none" placeholder="Tell us about your project or enquiry" />
            </label>
            <button className="inline-flex items-center justify-center rounded-xl bg-blue-500 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-600">
              Send Enquiry
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
