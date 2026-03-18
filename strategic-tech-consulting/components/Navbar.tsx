import Link from "next/link";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Consulting", href: "/consulting" },
  { label: "Academy", href: "/academy" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Founder", href: "/founder" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b subtle-divider nav-blur">
      <div className="container-shell flex h-20 items-center justify-between">
        <Link href="/" className="flex flex-col">
          <span className="text-lg font-semibold tracking-tight text-[var(--text-primary)]">
            Strategic Tech Consulting
          </span>
          <span className="text-xs text-[var(--text-muted)]">
            Technology, growth and employability
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-[var(--text-secondary)] transition hover:text-[var(--text-primary)]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <Link href="/contact" className="primary-btn">
          Book a Discovery Call
        </Link>
      </div>
    </header>
  );
}