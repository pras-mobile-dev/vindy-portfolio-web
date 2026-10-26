import { Section, SectionHeading } from "@/components/section";
import { site } from "@/lib/content";

const channels = [
  {
    label: "Email",
    value: site.email,
    href: `mailto:${site.email}`,
    note: "Best for roles, briefs, and anything with a document attached.",
  },
  {
    label: "WhatsApp",
    value: site.phoneDisplay,
    href: site.whatsapp,
    note: "Fastest route for a quick question or a first conversation.",
    external: true,
  },
  {
    label: "LinkedIn",
    value: site.linkedinDisplay,
    href: site.linkedin,
    note: "Full work history and professional profile.",
    external: true,
  },
  {
    label: "GitHub",
    value: site.githubDisplay,
    href: site.github,
    note: "Source for Dandang Gula and other public repositories.",
    external: true,
  },
];

export function Contact() {
  return (
    <Section id="contact" className="bg-ink-950 text-white" bordered={false}>
      <SectionHeading
        id="contact"
        eyebrow="Contact"
        title="Open to opportunities"
        intro="Available for full-time and contract mobile work — remote, or on-site around East Java. The quickest way to reach me is email."
        inverted
      />

      <ul className="grid gap-px overflow-hidden border border-ink-800 bg-ink-800 sm:grid-cols-2">
        {channels.map((channel) => (
          <li key={channel.label} className="bg-ink-950 p-6">
            <p className="eyebrow text-ink-300">{channel.label}</p>
            <p className="mt-3">
              <a
                href={channel.href}
                {...(channel.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="break-anywhere text-base font-medium text-white underline decoration-ink-600 underline-offset-4 transition-colors hover:decoration-accent-500"
              >
                {channel.value}
              </a>
            </p>
            <p className="mt-2 text-sm leading-relaxed text-ink-300">{channel.note}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
