import { Section } from "./Section";
import { skillGroups } from "../data/skills";

export function Skills() {
  return (
    <Section id="skills" title="Skills" subtitle="Technologies I use regularly.">
      <div className="grid gap-8 sm:grid-cols-2">
        {skillGroups.map((group) => (
          <div key={group.label}>
            <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted">
              {group.label}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-lg border border-border bg-surface px-3 py-1.5 text-sm text-text"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
