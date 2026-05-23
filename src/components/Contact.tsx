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
      <div className="rounded-xl border border-border bg-surface p-8 md:p-10">
        <p className="text-lg text-text">
          Say hi — I'm always open to talking about work, projects, or a good trail recommendation.
        </p>
        <a
          href={`mailto:${profile.email}`}
          className="mt-4 inline-flex items-center gap-2 text-lg font-medium text-accent hover:underline"
        >
          <Mail size={20} />
          {profile.email}
        </a>
        <div className="mt-6 flex flex-wrap gap-4">
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-sm font-medium text-muted hover:text-accent"
          >
            LinkedIn →
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="text-sm font-medium text-muted hover:text-accent"
          >
            GitHub →
          </a>
          <a
            href={profile.resumePath}
            download="Shuva_Gautam_Resume.pdf"
            className="text-sm font-medium text-muted hover:text-accent"
          >
            Download resume →
          </a>
        </div>
      </div>
    </Section>
  );
}
