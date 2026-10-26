import { Section, SectionHeading } from "@/components/section";
import { achievements, certifications, education, languages } from "@/lib/content";

export function Credentials() {
  return (
    <Section id="credentials">
      <SectionHeading id="credentials" eyebrow="Credentials" title="Education, languages, and results" />

      <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="space-y-12">
          <div>
            <h3 className="eyebrow">Education</h3>
            <ul className="mt-5 space-y-6">
              {education.map((entry) => (
                <li key={entry.school} className="border-l border-ink-100 pl-5">
                  <p className="text-sm font-semibold tracking-tight text-ink-950">{entry.degree}</p>
                  <p className="mt-1 text-sm text-ink-500">{entry.school}</p>
                  <p className="mt-1 font-mono text-xs uppercase tracking-wider text-ink-400">
                    {entry.period}
                  </p>
                  <p className="mt-1 text-xs text-ink-400">{entry.location}</p>
                  {"note" in entry && entry.note ? (
                    <p className="mt-1 text-xs text-ink-400">{entry.note}</p>
                  ) : null}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="eyebrow">Languages</h3>
            <dl className="mt-5 divide-y divide-ink-100 border-y border-ink-100">
              {languages.map((language) => (
                <div key={language.name} className="flex items-baseline justify-between gap-4 py-3">
                  <dt className="text-sm font-medium text-ink-950">{language.name}</dt>
                  <dd className="text-sm text-ink-500">{language.level}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div>
            <h3 className="eyebrow">Certifications</h3>
            <ul className="mt-5 space-y-4">
              {certifications.map((certification) => (
                <li key={certification.name} className="border-l border-ink-100 pl-5">
                  <p className="text-sm font-semibold tracking-tight text-ink-950">
                    {certification.name}
                  </p>
                  <p className="mt-1 text-sm text-ink-500">{certification.detail}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div>
          <h3 className="eyebrow">Achievements</h3>
          <ul className="mt-5 space-y-4">
            {achievements.map((achievement) => (
              <li key={achievement.slice(0, 32)} className="flex gap-3">
                <span aria-hidden="true" className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-accent-500" />
                <span className="text-sm leading-relaxed text-ink-500">{achievement}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  );
}
