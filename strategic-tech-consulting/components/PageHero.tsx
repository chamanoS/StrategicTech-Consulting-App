type Props = {
  eyebrow: string;
  title: string;
  description: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
};

import Link from "next/link";

export default function PageHero({
  eyebrow,
  title,
  description,
  primaryCta,
  secondaryCta,
}: Props) {
  return (
    <section className="relative overflow-hidden section-space pt-14 md:pt-20">
      {/* shapes */}
      <div className="hero-shape hero-shape-1" />
      <div className="hero-shape hero-shape-2" />

      <div className="container-shell relative z-[1]">
        <div className="max-w-3xl animate-fade-up">
          <p className="eyebrow">{eyebrow}</p>

          <h1 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">
            {title}
          </h1>

          <p className="mt-5 text-base leading-8 text-[var(--text-secondary)] md:text-lg">
            {description}
          </p>

          {(primaryCta || secondaryCta) && (
            <div className="mt-7 flex flex-wrap gap-4">
              {primaryCta && (
                <Link href={primaryCta.href} className="primary-btn">
                  {primaryCta.label}
                </Link>
              )}
              {secondaryCta && (
                <Link href={secondaryCta.href} className="secondary-btn">
                  {secondaryCta.label}
                </Link>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}