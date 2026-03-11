import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 md:grid-cols-3 md:px-8 lg:px-10">
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-white">Strategic Tech Consulting</h3>
          <p className="max-w-sm text-sm leading-7 text-slate-400">
            Founder-led technology consulting for growing businesses, with a paid academy focused on career preparation and portfolio development.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Pages</h4>
          <div className="mt-4 flex flex-col gap-3 text-sm text-slate-300">
            <Link href="/consulting">Consulting</Link>
            <Link href="/academy">Academy</Link>
            <Link href="/case-studies">Case Studies</Link>
            <Link href="/founder">Founder</Link>
            <Link href="/contact">Contact</Link>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">Get in touch</h4>
          <div className="mt-4 space-y-3 text-sm text-slate-300">
            <p>hello@strategictechconsulting.co.za</p>
            <p>Pretoria, South Africa</p>
            <p>Consulting for SMEs, startups, and emerging tech talent.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
