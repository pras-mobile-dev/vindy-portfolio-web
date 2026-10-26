import { Section, SectionHeading } from "@/components/section";
import { experience, professionalDevelopment } from "@/lib/content";

export function Experience() {
  return (
    <Section id="experience">
      <SectionHeading
        id="experience"
        eyebrow="Experience"
        title="Four years of shipped work"
        intro="Newest first. Each entry lists the engagement type, because part-time and contract work is not the same thing as a full-time role."
      />

      <ol className="space-y-12 sm:space-y-14">
        {experience.map((job) => (
          <li key={`${job.company}-${job.period}`} className="grid gap-4 sm:grid-cols-[10rem_minmax(0,1fr)] sm:gap-8">
            <div className="sm:pt-1">
              <p className="font-mono text-xs uppercase tracking-wider text-ink-400">{job.period}</p>
              <p className="mt-2 inline-flex rounded border border-ink-200 px-2 py-1 text-xs font-medium text-ink-600">
                {job.type}
              </p>
              <p className="mt-2 text-xs text-ink-400">{job.location}</p>
            </div>

            <div className="border-ink-100 sm:border-l sm:pl-8">
              <h3 className="text-lg font-semibold tracking-tight text-ink-950">
                {job.role}
                <span className="font-normal text-ink-400"> · </span>
                <span className="font-medium text-ink-600">{job.company}</span>
              </h3>
              {job.companyNote ? (
                <p className="mt-1 text-sm text-ink-400">{job.companyNote}</p>
              ) : null}

              <ul className="mt-4 space-y-2.5">
                {job.bullets.map((bullet) => (
                  <li key={bullet.slice(0, 32)} className="flex gap-3 text-sm leading-relaxed text-ink-500">
                    <span aria-hidden="true" className="mt-2 h-px w-3 shrink-0 bg-ink-300" />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>

      <div className="mt-14 border-t border-ink-100 pt-10">
        <p className="eyebrow">Professional development</p>
        <div className="mt-4 grid gap-4 sm:grid-cols-[10rem_minmax(0,1fr)] sm:gap-8">
          <div>
            <p className="font-mono text-xs uppercase tracking-wider text-ink-400">
              {professionalDevelopment.period}
            </p>
            <p className="mt-2 inline-flex rounded border border-ink-200 px-2 py-1 text-xs font-medium text-ink-600">
              {professionalDevelopment.label}
            </p>
          </div>
          <ul className="space-y-2.5 border-ink-100 sm:border-l sm:pl-8">
            {professionalDevelopment.points.map((point) => (
              <li key={point.slice(0, 32)} className="flex gap-3 text-sm leading-relaxed text-ink-500">
                <span aria-hidden="true" className="mt-2 h-px w-3 shrink-0 bg-ink-300" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
