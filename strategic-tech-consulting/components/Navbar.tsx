"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Consulting", href: "/consulting" },
  { label: "Academy", href: "/academy" },
  { label: "Case Studies", href: "/case-studies" },
  { label: "Founder", href: "/founder" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b subtle-divider nav-blur">
      <div className="container-shell">
        <div className="flex h-20 items-center justify-between gap-4">
          <Link href="/" className="group flex flex-col">
            <span className="text-lg font-semibold tracking-tight text-[var(--text-primary)] transition group-hover:text-[var(--brand-brown)]">
              Strategic Tech Consulting
            </span>
            <span className="text-xs text-[var(--text-muted)]">
              Technology, growth and employability
            </span>
          </Link>

          <nav className="hidden items-center gap-7 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="nav-link"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden lg:block">
            <Link href="/contact" className="primary-btn">
              Book a Discovery Call
            </Link>
          </div>

          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            onClick={() => setIsOpen((prev) => !prev)}
            className="mobile-menu-btn lg:hidden"
          >
            <span className={`mobile-line ${isOpen ? "translate-y-[7px] rotate-45" : ""}`} />
            <span className={`mobile-line ${isOpen ? "opacity-0" : ""}`} />
            <span className={`mobile-line ${isOpen ? "-translate-y-[7px] -rotate-45" : ""}`} />
          </button>
        </div>

        <div
          className={`overflow-hidden transition-all duration-300 lg:hidden ${
            isOpen ? "max-h-[420px] pb-6" : "max-h-0"
          }`}
        >
          <div className="mt-2 rounded-3xl border bg-white/95 p-4 subtle-divider shadow-[0_12px_30px_rgba(0,0,0,0.04)]">
            <nav className="flex flex-col gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="mobile-nav-link"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="mt-4 pt-4 border-t subtle-divider">
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="primary-btn w-full"
              >
                Book a Discovery Call
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}