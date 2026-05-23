import { Section } from "./Section";
import { ProjectCard } from "./ProjectCard";
import { featuredProjects, moreProjects } from "../data/projects";

export function Projects() {
  return (
    <Section
      id="projects"
      title="Projects"
      subtitle="Featured projects include full-stack web applications, desktop systems, robotics, and low-level C/C++."
    >
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {featuredProjects.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>

      <h3 className="font-display mt-14 mb-6 text-lg font-semibold text-text">
        More work
      </h3>
      <div className="grid gap-4 sm:grid-cols-2">
        {moreProjects.map((p) => (
          <ProjectCard key={p.id} project={p} compact />
        ))}
      </div>
    </Section>
  );
}
