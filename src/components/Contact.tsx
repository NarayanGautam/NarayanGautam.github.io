import { Mail } from "lucide-react";
import { Section } from "./Section";
import { profile } from "../data/profile";

export function Contact() {
  return (
    <Section
      id="contact"
      title="Contact"
      subtitle="Open to new grad software engineering roles."
    >
      <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)] p-8 md:p-10">
        <p className="text-lg text-[var(--color-text)]">
          The best way to reach me is by email or LinkedIn.
        </p>
        <a
          href={`mailto:${profile.email}`}
          className="mt-4 inline-flex items-center gap-2 text-lg font-medium text-[var(--color-accent)] hover:underline"
        >
          <Mail size={20} />
          {profile.email}
        </a>
        <div className="mt-6 flex flex-wrap gap-4">
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-sm font-medium text-[var(--color-muted)] hover:text-[var(--color-accent)]"
          >
            LinkedIn →
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="text-sm font-medium text-[var(--color-muted)] hover:text-[var(--color-accent)]"
          >
            GitHub →
          </a>
          <a
            href={profile.resumePath}
            download
            className="text-sm font-medium text-[var(--color-muted)] hover:text-[var(--color-accent)]"
          >
            Download resume →
          </a>
        </div>
      </div>
    </Section>
  );
}
