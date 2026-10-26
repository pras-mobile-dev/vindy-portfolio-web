"use client";

import { useEffect, useState } from "react";
import { navItems, site } from "@/lib/content";

/**
 * Sticky header with a mobile disclosure menu.
 *
 * The mobile panel closes on Escape, restores focus to the trigger, and locks
 * body scroll while open, so keyboard and screen-reader users are not stranded.
 */
export function SiteHeader() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-ink-100 bg-white/85 backdrop-blur">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between gap-4 px-6 py-3.5 sm:px-8">
        <a
          href="#top"
          className="text-sm font-semibold tracking-tight text-ink-950"
          aria-label={`${site.name} — back to top`}
        >
          {site.name}
          <span className="ml-2 hidden font-normal text-ink-400 sm:inline">{site.role}</span>
        </a>

        <nav aria-label="Sections" className="hidden md:block">
          <ul className="flex items-center gap-7">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-sm text-ink-500 transition-colors hover:text-ink-950"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href={`mailto:${site.email}`}
          className="hidden rounded border border-ink-950 px-3.5 py-1.5 text-sm font-medium text-ink-950 transition-colors hover:bg-ink-950 hover:text-white md:inline-block"
        >
          Get in touch
        </a>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          className="-mr-2 rounded p-2 text-ink-600 md:hidden"
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <svg width="20" height="20" viewBox="0 0 20 20" aria-hidden="true" fill="none">
            {open ? (
              <path
                d="M5 5l10 10M15 5L5 15"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M3 6h14M3 10h14M3 14h14"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          aria-label="Sections"
          className="border-t border-ink-100 bg-white md:hidden"
        >
          <ul className="mx-auto w-full max-w-5xl px-6 py-2 sm:px-8">
            {navItems.map((item) => (
              <li key={item.href} className="border-b border-ink-100 last:border-b-0">
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 text-sm text-ink-600"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="py-3">
              <a
                href={`mailto:${site.email}`}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-accent-700"
              >
                {site.email}
              </a>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
