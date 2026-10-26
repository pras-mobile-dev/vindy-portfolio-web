"use client";

import Image from "next/image";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import type { Project } from "@/lib/content";

/**
 * Full detail view for a single project.
 *
 * Rendered once by `ProjectGallery` and reused for every card, so opening a
 * project never costs an extra network round trip. Focus is trapped inside
 * while open, and returned to the card that opened it on close.
 */
export function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  const panelRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const titleId = useId();
  const descriptionId = useId();
  const [activeShot, setActiveShot] = useState(0);

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.stopPropagation();
        onClose();
        return;
      }

      if (event.key !== "Tab") return;

      const focusables = panelRef.current?.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );
      if (!focusables || focusables.length === 0) return;

      const first = focusables[0];
      const last = focusables[focusables.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    },
    [onClose],
  );

  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown, true);
    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown, true);
      previouslyFocused?.focus?.();
    };
  }, [handleKeyDown]);

  const shots = project.gallery;

  return (
    <div className="fixed inset-0 z-100 flex items-end justify-center sm:items-center">
      <div
        className="absolute inset-0 bg-ink-950/60"
        onClick={onClose}
        aria-hidden="true"
      />

      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={descriptionId}
        className="relative flex max-h-[92vh] w-full max-w-3xl flex-col overflow-hidden rounded-t-lg bg-white sm:max-h-[88vh] sm:rounded-lg"
      >
        <div className="flex items-start justify-between gap-4 border-b border-ink-100 px-6 py-5 sm:px-8">
          <div className="min-w-0">
            <p className="eyebrow">{project.category}</p>
            <h3 id={titleId} className="mt-2 text-2xl font-semibold tracking-tight text-ink-950">
              {project.name}
            </h3>
          </div>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            className="-mr-2 -mt-1 shrink-0 rounded p-2 text-ink-500 transition-colors hover:bg-ink-50 hover:text-ink-950"
          >
            <span className="sr-only">Close {project.name} details</span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
              <path d="M5 5l10 10M15 5L5 15" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-6 py-6 sm:px-8">
          <div id={descriptionId}>
            <p className="border-l-2 border-accent-500 pl-4 text-base font-medium leading-relaxed text-ink-950">
              {project.impact}
            </p>

            {project.delisted ? (
              <p className="mt-4 inline-flex rounded border border-amber-300 bg-amber-50 px-3 py-1.5 text-xs font-medium text-amber-900">
                {project.delisted}
              </p>
            ) : null}

            <dl className="mt-6 flex flex-wrap gap-x-8 gap-y-3 border-y border-ink-100 py-4">
              <div>
                <dt className="text-xs uppercase tracking-wider text-ink-400">Role</dt>
                <dd className="mt-1 text-sm font-medium text-ink-950">{project.role}</dd>
              </div>
              <div>
                <dt className="text-xs uppercase tracking-wider text-ink-400">Duration</dt>
                <dd className="mt-1 text-sm font-medium text-ink-950">{project.duration}</dd>
              </div>
            </dl>

            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              <div>
                <h4 className="text-xs uppercase tracking-wider text-ink-400">Problem</h4>
                <p className="mt-2 text-sm leading-relaxed text-ink-500">{project.problem}</p>
              </div>
              <div>
                <h4 className="text-xs uppercase tracking-wider text-ink-400">Solution</h4>
                <p className="mt-2 text-sm leading-relaxed text-ink-500">{project.solution}</p>
              </div>
            </div>

            <div className="mt-6">
              <h4 className="text-xs uppercase tracking-wider text-ink-400">Tech stack</h4>
              <ul className="mt-2 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <li
                    key={item}
                    className="rounded border border-ink-200 bg-ink-50 px-2 py-1 text-xs font-medium text-ink-600"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {shots.length > 0 ? (
            <div className="mt-8">
              <h4 className="text-xs uppercase tracking-wider text-ink-400">
                Screenshots <span className="normal-case tracking-normal">({shots.length})</span>
              </h4>

              <div
                className={`mt-4 overflow-hidden rounded border border-ink-100 bg-ink-50 ${
                  project.wide ? "aspect-16/10" : "aspect-4/5 sm:aspect-16/10"
                }`}
              >
                <Image
                  key={shots[activeShot]}
                  src={shots[activeShot]}
                  alt={`${project.name} — screenshot ${activeShot + 1} of ${shots.length}`}
                  width={1600}
                  height={1000}
                  sizes="(min-width: 768px) 42rem, 100vw"
                  className={`h-full w-full ${project.wide ? "object-cover object-top" : "object-contain"}`}
                />
              </div>

              {shots.length > 1 ? (
                <ul className="mt-3 flex flex-wrap gap-2" aria-label={`${project.name} screenshots`}>
                  {shots.map((shot, index) => (
                    <li key={shot}>
                      <button
                        type="button"
                        onClick={() => setActiveShot(index)}
                        aria-current={index === activeShot}
                        className={`block h-16 w-11 overflow-hidden rounded border transition-colors ${
                          index === activeShot
                            ? "border-ink-950"
                            : "border-ink-200 hover:border-ink-400"
                        }`}
                      >
                        <span className="sr-only">
                          Show screenshot {index + 1} of {shots.length}
                        </span>
                        <Image
                          src={shot}
                          alt=""
                          width={88}
                          height={128}
                          sizes="44px"
                          className="h-full w-full object-cover object-top"
                        />
                      </button>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          ) : null}
        </div>

        {project.links.length > 0 ? (
          <div className="flex flex-wrap items-center gap-3 border-t border-ink-100 px-6 py-4 sm:px-8">
            <span className="text-xs uppercase tracking-wider text-ink-400">Verify</span>
            {project.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded border border-ink-950 px-3 py-1.5 text-sm font-medium text-ink-950 transition-colors hover:bg-ink-950 hover:text-white"
              >
                {link.label}
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                  <path
                    d="M4 2h6v6M10 2L4.5 7.5"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            ))}
            {project.ios ? (
              <span className="basis-full text-xs text-ink-400 sm:basis-auto">{project.ios}</span>
            ) : null}
          </div>
        ) : (
          <div className="border-t border-ink-100 px-6 py-4 sm:px-8">
            <p className="text-xs text-ink-400">No public store link available for this project.</p>
          </div>
        )}
      </div>
    </div>
  );
}
