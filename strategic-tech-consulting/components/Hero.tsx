import Link from "next/link";
import { academyPrograms, consultingServices, trustStats } from "@/lib/site";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-hero-radial">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 py-20 md:px-8 md:py-28 lg:grid-cols-[1.15fr_0.85fr] lg:px-10">
        <div>
          <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-300">
            Founder-led consulting for modern businesses and future tech talent
          </span>
          <h1 className="mt-6 max-w-4xl text-5xl font-semibold tracking-tight text-white md:text-6xl">
            Technology consulting for growing businesses. Career preparation for future tech talent.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Strategic Tech Consulting helps startups and small businesses build better systems, sharper insights, and stronger digital foundations — while equipping students with practical skills to enter the job market with confidence.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-blue-500 px-5 py-3 text-sm font-medium text-white transition hover:bg-blue-600"
            >
              Start a Project
            </Link>
            <Link
              href="/academy"
              className="inline-flex items-center justify-center rounded-xl border border-slate-700 px-5 py-3 text-sm font-medium text-slate-200 transition hover:border-slate-500 hover:bg-slate-900"
            >
              Explore the Academy
            </Link>
          </div>
          <div className="mt-10 grid gap-3 sm:grid-cols-2">
            {trustStats.map((item) => (
              <div key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-300">
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-x-10 top-10 -z-10 h-48 rounded-full bg-blue-500/20 blur-3xl" />
          <div className="space-y-5">
            <div className="rounded-3xl border border-white/10 bg-slate-950/80 p-6 shadow-glow backdrop-blur">
              <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Consulting</p>
              <div className="mt-5 space-y-4">
                {consultingServices.slice(0, 2).map((service) => (
                  <div key={service.title} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="flex items-center gap-3 text-white">
                      <span className="rounded-xl border border-white/10 bg-white/5 p-2 text-blue-400">{service.icon}</span>
                      <p className="font-medium">{service.title}</p>
                    </div>
                    <p className="mt-2 text-sm leading-6 text-slate-400">{service.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-slate-950/70 p-6 backdrop-blur">
              <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Academy</p>
              <div className="mt-5 grid gap-4">
                {academyPrograms.slice(0, 2).map((program) => (
                  <div key={program.title} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="flex items-center gap-3 text-white">
                      <span className="rounded-xl border border-white/10 bg-white/5 p-2 text-indigo-400">{program.icon}</span>
                      <p className="font-medium">{program.title}</p>
                    </div>
                    <p className="mt-2 text-sm leading-6 text-slate-400">{program.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
