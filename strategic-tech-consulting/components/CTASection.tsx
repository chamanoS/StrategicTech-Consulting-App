import Link from "next/link";

type CTASectionProps = {
  title: string;
  copy: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel: string;
  secondaryHref: string;
};

export default function CTASection({
  title,
  copy,
  primaryLabel,
  primaryHref,
  secondaryLabel,
  secondaryHref,
}: CTASectionProps) {
  return (
    <section className="section-space">
      <div className="container-shell">
        <div className="rounded-3xl border bg-white px-6 py-12 md:px-10 md:py-14 subtle-divider">
          <div className="max-w-3xl">
            <p className="eyebrow">Next step</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--text-primary)] md:text-4xl">
              {title}
            </h2>
            <p className="mt-4 text-base leading-8 text-[var(--text-secondary)] md:text-lg">
              {copy}
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link href={primaryHref} className="primary-btn">
              {primaryLabel}
            </Link>
            <Link href={secondaryHref} className="secondary-btn">
              {secondaryLabel}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}