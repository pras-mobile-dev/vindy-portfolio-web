/**
 * Small shared layout primitives so spacing and typography stay consistent
 * across sections.
 */

export function Section({
  id,
  children,
  className = "",
  bordered = true,
}: {
  id: string;
  children: React.ReactNode;
  className?: string;
  bordered?: boolean;
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-heading`}
      className={`${bordered ? "border-t border-ink-100" : ""} scroll-mt-24 ${className}`}
    >
      <div className="mx-auto w-full max-w-5xl px-6 py-16 sm:px-8 sm:py-20 lg:py-24">{children}</div>
    </section>
  );
}

export function SectionHeading({
  id,
  eyebrow,
  title,
  intro,
  inverted = false,
}: {
  id: string;
  eyebrow: string;
  title: string;
  intro?: string;
  /** Set on dark backgrounds so heading and intro keep enough contrast. */
  inverted?: boolean;
}) {
  return (
    <header className="mb-10 sm:mb-14">
      <p className={`eyebrow ${inverted ? "text-ink-300" : ""}`}>{eyebrow}</p>
      <h2
        id={`${id}-heading`}
        className={`mt-3 text-3xl font-semibold tracking-tight sm:text-4xl ${
          inverted ? "text-white" : "text-ink-950"
        }`}
      >
        {title}
      </h2>
      {intro ? (
        <p
          className={`mt-4 max-w-2xl text-base leading-relaxed ${
            inverted ? "text-ink-300" : "text-ink-500"
          }`}
        >
          {intro}
        </p>
      ) : null}
    </header>
  );
}

export function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block rounded border border-ink-200 bg-ink-50 px-2 py-1 text-xs font-medium text-ink-600">
      {children}
    </span>
  );
}

export function TagList({ items, label }: { items: readonly string[]; label: string }) {
  return (
    <ul className="flex flex-wrap gap-2" aria-label={label}>
      {items.map((item) => (
        <li key={item}>
          <Tag>{item}</Tag>
        </li>
      ))}
    </ul>
  );
}
