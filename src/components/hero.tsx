import { heroStats, site } from "@/lib/content";

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-heading" className="border-b border-ink-100">
      <div className="mx-auto w-full max-w-5xl px-6 pb-16 pt-16 sm:px-8 sm:pb-20 sm:pt-24 lg:pt-28">
        <p className="eyebrow flex items-center gap-2">
          <span aria-hidden="true" className="inline-block h-1.5 w-1.5 rounded-full bg-accent-500" />
          {site.availability}
        </p>

        <h1
          id="hero-heading"
          className="mt-6 text-4xl font-semibold leading-[1.05] tracking-tight text-ink-950 sm:text-5xl lg:text-6xl"
        >
          {site.name}
        </h1>

        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-500 sm:text-xl">
          <span className="font-medium text-ink-950">{site.role}</span> — {site.roleDetail}.
          I ship production apps for Android and iOS, and I measure the work in downloads,
          not adjectives.
        </p>

        <dl className="mt-14 grid grid-cols-1 gap-px overflow-hidden border border-ink-100 bg-ink-100 sm:grid-cols-3">
          {heroStats.map((stat) => (
            <div key={stat.label} className="bg-white px-6 py-7">
              <dt className="sr-only">{stat.label}</dt>
              <dd>
                <p className="flex items-baseline gap-1.5 font-mono text-3xl font-semibold tracking-tight text-ink-950 sm:text-4xl">
                  {stat.value}
                  {"suffix" in stat && stat.suffix ? (
                    <span className="text-base font-medium text-ink-400">{stat.suffix}</span>
                  ) : null}
                </p>
                <p className="mt-2 text-sm font-medium text-ink-950">{stat.label}</p>
                <p className="mt-1 text-xs text-ink-400">{stat.detail}</p>
              </dd>
            </div>
          ))}
        </dl>

        <div className="mt-12 flex flex-wrap items-center gap-x-3 gap-y-4">
          <a
            href="#contact"
            className="rounded bg-ink-950 px-5 py-3 text-sm font-medium text-white transition-colors hover:bg-ink-800"
          >
            {site.availability}
          </a>
          <a
            href="#projects"
            className="rounded border border-ink-200 px-5 py-3 text-sm font-medium text-ink-950 transition-colors hover:border-ink-950"
          >
            See the work
          </a>
          <p className="text-sm text-ink-400">
            {site.location}
          </p>
        </div>
      </div>
    </section>
  );
}
