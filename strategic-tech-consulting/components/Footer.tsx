import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t subtle-divider bg-white">
      <div className="container-shell py-12">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <h3 className="text-lg font-semibold text-[var(--text-primary)]">
              Strategic Tech Consulting
            </h3>
            <p className="mt-3 max-w-md text-sm leading-7 text-[var(--text-secondary)]">
              A founder-led consulting business helping organisations improve
              systems, data visibility, and digital capability while supporting
              students entering the tech job market.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.15em] text-[var(--brand-gold-dark)]">
              Services
            </h4>
            <ul className="mt-4 space-y-3 text-sm text-[var(--text-secondary)]">
              <li>Business Intelligence</li>
              <li>Automation Workflows</li>
              <li>Custom Business Tools</li>
              <li>Technology Advisory</li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.15em] text-[var(--brand-gold-dark)]">
              Explore
            </h4>
            <div className="mt-4 flex flex-col gap-3 text-sm text-[var(--text-secondary)]">
              <Link href="/consulting">Consulting</Link>
              <Link href="/academy">Academy</Link>
              <Link href="/founder">Founder</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </div>
        </div>

        <div className="mt-10 border-t pt-6 text-sm text-[var(--text-muted)] subtle-divider">
          © {new Date().getFullYear()} Strategic Tech Consulting. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}