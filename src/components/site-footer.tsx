import { cacheLife } from "next/cache";
import { navItems, site } from "@/lib/content";

/**
 * The copyright year is derived from the current time, which is not available
 * while prerendering. Caching the component with the `max` profile keeps the
 * page fully static and refreshes the year on revalidation.
 */
export async function SiteFooter() {
  "use cache";
  cacheLife("max");

  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ink-800 bg-ink-950 text-ink-300">
      <div className="mx-auto w-full max-w-5xl px-6 py-12 sm:px-8">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-sm font-semibold tracking-tight text-white">{site.name}</p>
            <p className="mt-1 text-sm">
              {site.role} — {site.roleDetail}
            </p>
            <p className="mt-1 text-sm">{site.location}</p>
          </div>

          <nav aria-label="Footer">
            <ul className="grid grid-cols-2 gap-x-10 gap-y-2 sm:grid-cols-1">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="text-sm transition-colors hover:text-white">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <ul className="space-y-2">
            <li>
              <a
                href={`mailto:${site.email}`}
                className="break-anywhere text-sm transition-colors hover:text-white"
              >
                {site.email}
              </a>
            </li>
            <li>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm transition-colors hover:text-white"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href={site.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm transition-colors hover:text-white"
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-ink-800 pt-6 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.name}. Built with Next.js and Tailwind CSS.
          </p>
          <p>
            <a href="#top" className="transition-colors hover:text-white">
              Back to top
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
