import Link from "next/link";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "Consulting", href: "/consulting" },
  { label: "Academy", href: "/academy" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Founder", href: "/founder" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="relative mt-8 border-t subtle-divider bg-white">
      <div className="footer-shape footer-shape-1" />
      <div className="footer-shape footer-shape-2" />

      <div className="container-shell relative z-[1] py-14">
        <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr_0.9fr]">
          <div>
            <span className="highlight-chip">Founder-led consulting</span>

            <h3 className="mt-4 text-2xl font-semibold tracking-tight text-[var(--text-primary)]">
              Strategic Tech Consulting
            </h3>

            <p className="mt-4 max-w-md text-sm leading-7 text-[var(--text-secondary)]">
              A modern consulting business helping organisations improve
              reporting, systems, and digital capability while creating
              practical value through student career preparation.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.15em] text-[var(--brand-gold-dark)]">
              Quick links
            </h4>

            <div className="mt-4 grid gap-3 text-sm text-[var(--text-secondary)]">
              {quickLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="footer-link"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-[0.15em] text-[var(--brand-gold-dark)]">
              Focus areas
            </h4>

            <ul className="mt-4 space-y-3 text-sm leading-7 text-[var(--text-secondary)]">
              <li>Business intelligence and dashboards</li>
              <li>Automation workflows</li>
              <li>Custom business tools</li>
              <li>Technology advisory</li>
              <li>Career readiness support</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t pt-6 text-sm text-[var(--text-muted)] subtle-divider md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Strategic Tech Consulting. All rights reserved.</p>
          <p>Built with clarity, strategy, and practical growth in mind.</p>
        </div>
      </div>
    </footer>
  );
}