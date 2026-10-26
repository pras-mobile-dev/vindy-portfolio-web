import { ProjectGrid } from "@/components/project-grid";
import { Section, SectionHeading } from "@/components/section";
import { projects, textOnlyProjects } from "@/lib/content";

export function Projects() {
  return (
    <Section id="projects">
      <SectionHeading
        id="projects"
        eyebrow="Projects"
        title="Apps you can go and check"
        intro="Each card links to the Play Store listing or repository it can be verified against. Select a card for the full problem, solution, role, and screenshots."
      />

      <ProjectGrid projects={projects} />

      <div className="mt-14">
        <h3 className="eyebrow">Also built</h3>
        <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-500">
          Two pieces of work with no public screenshots: a backend and an internal tool. Listed for
          completeness rather than for looks.
        </p>

        <dl className="mt-6 grid gap-px overflow-hidden border border-ink-100 bg-ink-100 sm:grid-cols-2">
          {textOnlyProjects.map((project) => (
            <div key={project.name} className="bg-white p-6">
              <dt>
                <span className="block text-sm font-semibold tracking-tight text-ink-950">
                  {project.name}
                </span>
                <span className="eyebrow mt-1 block">{project.category}</span>
              </dt>
              <dd className="mt-3">
                <p className="text-sm leading-relaxed text-ink-500">{project.description}</p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <li
                      key={item}
                      className="rounded border border-ink-200 bg-ink-50 px-2 py-1 text-xs font-medium text-ink-600"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </Section>
  );
}
