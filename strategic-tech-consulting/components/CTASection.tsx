import Link from "next/link";

export function CTASection() {
  return (
    <section className="px-6 py-20 md:px-8 md:py-28 lg:px-10">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 p-8 md:p-12">
        <div className="max-w-3xl">
          <p className="text-sm uppercase tracking-[0.22em] text-slate-400">Start here</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-4xl">
            Let’s build something strategic.
          </h2>
          <p className="mt-4 text-base leading-8 text-slate-300 md:text-lg">
            Whether you need a modern dashboard, a business tool, or a high-quality student programme, Strategic Tech Consulting is designed to help you move forward with clarity.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-blue-500 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-600"
            >
              Book a Discovery Call
            </Link>
            <Link
              href="/academy"
              className="inline-flex items-center justify-center rounded-xl border border-slate-700 px-5 py-3 text-sm font-medium text-slate-200 transition hover:border-slate-500 hover:bg-slate-900"
            >
              Join the Academy
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
