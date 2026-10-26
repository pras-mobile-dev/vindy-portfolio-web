"use client";

import Image from "next/image";
import { useState } from "react";
import { ProjectModal } from "@/components/project-modal";
import type { Project } from "@/lib/content";

/**
 * Grid of verifiable project cards. Every card carries a link to the store or
 * repository it can be checked against, and opens a detail modal in place so
 * the reader never loses their scroll position.
 */
export function ProjectGrid({ projects }: { projects: Project[] }) {
  const [openSlug, setOpenSlug] = useState<string | null>(null);

  const openProject = projects.find((project) => project.slug === openSlug) ?? null;

  return (
    <>
      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <li key={project.slug} className="flex">
            <article className="group flex w-full flex-col overflow-hidden rounded-lg border border-ink-100 transition-colors hover:border-ink-300">
              <button
                type="button"
                onClick={() => setOpenSlug(project.slug)}
                aria-haspopup="dialog"
                className="flex flex-1 flex-col text-left"
              >
                {/*
                  Phone screenshots are in a fixed 9:16 well so the grid stays
                  even. Wide banner art (Dandang Gula's desktop UI, Kosify's
                  feature graphic, BisChat's header) keeps its own aspect ratio
                  instead, otherwise it shrinks into an unreadable sliver.
                */}
                <span
                  className={`block overflow-hidden bg-ink-50 ${
                    project.wide ? "aspect-16/10" : "aspect-3/4"
                  }`}
                >
                  <Image
                    src={project.thumbnail ?? project.gallery[0]}
                    alt={project.thumbnailAlt}
                    width={800}
                    height={600}
                    sizes="(min-width: 1024px) 20rem, (min-width: 640px) 45vw, 100vw"
                    className={`h-full w-full transition-transform duration-300 group-hover:scale-[1.02] ${
                      project.wide
                        ? "object-cover object-top"
                        : project.banner
                          ? "object-cover"
                          : "object-contain object-top p-3"
                    }`}
                  />
                </span>

                <span className="flex flex-1 flex-col px-5 pb-4 pt-5">
                  <span className="eyebrow">{project.category}</span>
                  <span className="mt-2 text-lg font-semibold tracking-tight text-ink-950">
                    {project.name}
                  </span>
                  <span className="mt-2 text-sm leading-relaxed text-ink-500">{project.impact}</span>
                  {project.delisted ? (
                    <span className="mt-3 inline-flex w-fit rounded border border-amber-300 bg-amber-50 px-2 py-1 text-xs font-medium text-amber-900">
                      {project.delisted}
                    </span>
                  ) : null}
                  <span className="mt-auto pt-4 text-sm font-medium text-ink-950 underline decoration-ink-200 underline-offset-4 group-hover:decoration-accent-600">
                    Read the detail
                  </span>
                </span>
              </button>

              {project.links.length > 0 ? (
                <div className="flex flex-wrap gap-x-4 gap-y-1 border-t border-ink-100 px-5 py-3">
                  {project.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs font-medium text-ink-500 underline decoration-ink-200 underline-offset-4 transition-colors hover:text-ink-950"
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              ) : (
                <div className="border-t border-ink-100 px-5 py-3">
                  <span className="text-xs text-ink-400">No public link</span>
                </div>
              )}
            </article>
          </li>
        ))}
      </ul>

      {openProject ? (
        <ProjectModal project={openProject} onClose={() => setOpenSlug(null)} />
      ) : null}
    </>
  );
}
