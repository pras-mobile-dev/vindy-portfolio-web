import { Section, SectionHeading, Tag } from "@/components/section";
import { skillGroups } from "@/lib/content";

export function Skills() {
  return (
    <Section id="skills">
      <SectionHeading
        id="skills"
        eyebrow="Skills"
        title="What I work with"
        intro="Grouped by where the tool sits in the stack. Everything listed here has been used on a shipped project."
      />

      <dl className="grid gap-px overflow-hidden border border-ink-100 bg-ink-100 sm:grid-cols-2">
        {skillGroups.map((group) => (
          <div key={group.title} className="bg-white p-6 sm:p-7">
            <dt className="text-sm font-semibold tracking-tight text-ink-950">{group.title}</dt>
            <dd className="mt-4">
              <ul className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li key={item}>
                    <Tag>{item}</Tag>
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
