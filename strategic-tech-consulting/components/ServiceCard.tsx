import type { ReactNode } from "react";

export function ServiceCard({
  icon,
  title,
  description,
}: {
  icon: ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-6 backdrop-blur-sm transition hover:border-blue-500/40 hover:bg-slate-900/80">
      <div className="inline-flex rounded-2xl border border-white/10 bg-white/5 p-3 text-blue-400">{icon}</div>
      <h3 className="mt-5 text-xl font-semibold text-white">{title}</h3>
      <p className="mt-3 text-base leading-7 text-slate-400">{description}</p>
    </div>
  );
}
