import { ExternalLink } from "lucide-react";
import type { Project } from "../data/projects";

export function ProjectCard({ project, compact = false }: { project: Project; compact?: boolean }) {
  return (
    <article
      className={`group flex flex-col rounded-xl border border-border bg-surface p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md ${
        compact ? "md:p-4" : "md:p-6"
      }`}
    >
      <div className="flex items-start justify-between gap-3">
        <h3
          className={`font-display font-semibold text-text ${
            compact ? "text-base" : "text-lg"
          }`}
        >
          {project.title}
        </h3>
        {project.period && (
          <span className="shrink-0 text-xs text-muted">
            {project.period}
          </span>
        )}
      </div>
      <p
        className={`mt-2 flex-1 leading-relaxed text-muted ${
          compact ? "text-sm" : "text-sm md:text-base"
        }`}
      >
        {project.description}
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-md bg-bg px-2.5 py-0.5 text-xs font-medium text-muted"
          >
            {tag}
          </span>
        ))}
      </div>
      {project.links && project.links.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-3 border-t border-border pt-4">
          {project.links.map((link) => (
            <a
              key={link.url}
              href={link.url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-sm font-medium text-accent hover:underline"
            >
              {link.label}
              <ExternalLink size={14} />
            </a>
          ))}
        </div>
      )}
    </article>
  );
}
