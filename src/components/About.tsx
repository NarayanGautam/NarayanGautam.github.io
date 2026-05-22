import { Section } from "./Section";
import { profile } from "../data/profile";

export function About() {
  return (
    <Section id="about" title="About">
      <div className="max-w-2xl space-y-4 text-base leading-relaxed text-[var(--color-muted)]">
        {profile.bio.map((paragraph) => (
          <p key={paragraph.slice(0, 40)}>{paragraph}</p>
        ))}
      </div>
    </Section>
  );
}
