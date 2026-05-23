import { Section } from "./Section";
import { experience } from "../data/experience";

export function Experience() {
  return (
    <Section
      id="experience"
      title="Experience"
      subtitle="Co-ops, government, and teaching roles."
    >
      <ol className="relative border-l border-border pl-6">
        {experience.map((job, i) => (
          <li key={`${job.company}-${job.period}`} className={i > 0 ? "mt-10" : ""}>
            <span className="absolute -left-[5px] mt-1.5 h-2.5 w-2.5 rounded-full bg-accent" />
            <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <div>
                <h3 className="font-display text-lg font-semibold text-text">
                  {job.role}
                </h3>
                <p className="text-accent">{job.company}</p>
              </div>
              <p className="shrink-0 text-sm text-muted">
                {job.period}
                {job.location ? ` · ${job.location}` : ""}
              </p>
            </div>
            <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-relaxed text-muted">
              {job.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </Section>
  );
}
