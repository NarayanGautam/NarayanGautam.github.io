import { ArrowDown, FileDown } from "lucide-react";
import { profile } from "../data/profile";

export function Hero() {
  return (
    <section className="mx-auto flex min-h-[90vh] max-w-[1100px] flex-col justify-center px-6 pt-24 pb-16 md:flex-row md:items-center md:gap-12">
      <div className="order-2 flex-1 md:order-1">
        <p className="mb-3 text-sm font-medium text-[var(--color-accent)]">
          New grad · Software Engineering · 2026
        </p>
        <h1 className="font-display text-4xl font-semibold tracking-tight text-[var(--color-text)] md:text-5xl lg:text-[3.25rem] lg:leading-tight">
          {profile.name}
        </h1>
        <p className="mt-2 text-xl text-[var(--color-muted)]">{profile.title}</p>
        <p className="mt-6 max-w-lg text-lg leading-relaxed text-[var(--color-muted)]">
          {profile.tagline}
        </p>
        <p className="mt-2 text-sm text-[var(--color-muted)]">
          {profile.education} · {profile.location}
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-lg bg-[var(--color-accent)] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[var(--color-accent-hover)]"
          >
            View projects
            <ArrowDown size={16} />
          </a>
          <a
            href={profile.resumePath}
            download
            className="inline-flex items-center gap-2 rounded-lg border border-[var(--color-border)] bg-[var(--color-surface)] px-5 py-2.5 text-sm font-medium text-[var(--color-text)] transition-colors hover:border-[var(--color-accent)]"
          >
            <FileDown size={16} />
            Resume
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-[var(--color-border)] px-5 py-2.5 text-sm font-medium text-[var(--color-text)] transition-colors hover:border-[var(--color-accent)]"
          >
            GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-[var(--color-border)] px-5 py-2.5 text-sm font-medium text-[var(--color-text)] transition-colors hover:border-[var(--color-accent)]"
          >
            LinkedIn
          </a>
        </div>
      </div>

      <div className="order-1 mb-8 flex justify-center md:order-2 md:mb-0">
        <img
          src={profile.photoPath}
          alt={profile.name}
          className="h-36 w-36 rounded-full border-4 border-[var(--color-surface)] object-cover shadow-lg ring-1 ring-[var(--color-border)] md:h-44 md:w-44"
          width={176}
          height={176}
        />
      </div>
    </section>
  );
}
