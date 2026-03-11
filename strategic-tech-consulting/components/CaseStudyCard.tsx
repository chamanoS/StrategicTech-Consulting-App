export function CaseStudyCard({
  title,
  description,
  tag,
}: {
  title: string;
  description: string;
  tag: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-6 backdrop-blur-sm transition hover:border-indigo-500/40 hover:bg-slate-900/80">
      <span className="inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-300">
        {tag}
      </span>
      <h3 className="mt-5 text-xl font-semibold text-white">{title}</h3>
      <p className="mt-3 text-base leading-7 text-slate-400">{description}</p>
    </div>
  );
}
