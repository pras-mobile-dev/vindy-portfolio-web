import { Section, SectionHeading } from "@/components/section";
import { site, summary } from "@/lib/content";

const contactRows = [
  { label: "Email", value: site.email, href: `mailto:${site.email}` },
  { label: "WhatsApp", value: site.phoneDisplay, href: site.whatsapp },
  { label: "LinkedIn", value: site.linkedinDisplay, href: site.linkedin },
  { label: "GitHub", value: site.githubDisplay, href: site.github },
];

export function About() {
  return (
    <Section id="about" bordered={false}>
      <SectionHeading
        id="about"
        eyebrow="About"
        title="Production apps, not portfolio filler."
      />

      <div className="grid gap-12 lg:grid-cols-[minmax(0,1.55fr)_minmax(0,1fr)] lg:gap-16">
        <div className="space-y-5">
          <p className="text-lg leading-relaxed text-ink-950">{summary.lead}</p>
          {summary.body.map((paragraph) => (
            <p key={paragraph.slice(0, 24)} className="leading-relaxed text-ink-500">
              {paragraph}
            </p>
          ))}
        </div>

        <aside aria-label="Contact details">
          <h3 className="eyebrow">Contact</h3>
          <dl className="mt-5 divide-y divide-ink-100 border-y border-ink-100">
            {contactRows.map((row) => (
              <div key={row.label} className="flex items-baseline justify-between gap-4 py-3">
                <dt className="text-sm text-ink-400">{row.label}</dt>
                <dd className="min-w-0 text-right">
                  <a
                    href={row.href}
                    {...(row.href.startsWith("http")
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                    className="break-anywhere text-sm font-medium text-ink-950 underline decoration-ink-200 underline-offset-4 transition-colors hover:decoration-accent-600"
                  >
                    {row.value}
                  </a>
                </dd>
              </div>
            ))}
          </dl>
          <p className="mt-5 text-sm leading-relaxed text-ink-400">
            Based in {site.location}. Open to full-time and contract mobile work, remote or on-site.
          </p>
        </aside>
      </div>
    </Section>
  );
}
