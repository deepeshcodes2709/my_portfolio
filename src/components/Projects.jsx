import { useMemo, useState } from 'react';
import { ExternalLink, FolderGit2, Github } from 'lucide-react';
import { projects } from '../data/projects.js';
import SectionHeading from './SectionHeading.jsx';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const filters = useMemo(
    () => ['All', ...new Set(projects.flatMap((project) => project.tags))],
    [],
  );
  const visibleProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((project) => project.tags.includes(activeFilter));

  return (
    <section id="projects" className="section-shell">
      <SectionHeading
        eyebrow="Showcase"
        title="Featured Projects"
        description="Applications and software projects built during coursework and internships."
        icon={FolderGit2}
      />
      <div aria-label="Filter projects" className="mb-8 flex flex-wrap gap-2" role="group">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setActiveFilter(filter)}
            aria-pressed={activeFilter === filter}
            className={`rounded-xl px-4 py-2 text-xs font-medium transition-colors ${
              activeFilter === filter
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white'
                : 'border border-border bg-panel text-slate-300 hover:bg-card-hover hover:text-white'
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      {visibleProjects.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visibleProjects.map((project) => (
            <article
              key={project.id}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-panel transition-colors hover:border-purple-500/30"
            >
              <div className="relative flex min-h-36 flex-col justify-between overflow-hidden border-b border-border bg-elevated p-5">
                <span aria-hidden="true" className="pointer-events-none absolute inset-0 flex items-center justify-center font-mono text-6xl font-black text-white/5">
                  {project.title.slice(0, 2).toUpperCase()}
                </span>
                <div className="relative z-10 flex items-center justify-between gap-3">
                  <span className="rounded-md border border-purple-500/30 bg-purple-500/20 px-2.5 py-1 text-xs font-mono text-purple-200">
                    {project.tags[0]}
                  </span>
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`Open GitHub profile for ${project.title}`}
                      className="rounded-lg bg-white/5 p-2 text-slate-300 transition hover:bg-white/10 hover:text-white"
                    >
                      <Github aria-hidden="true" className="h-4 w-4" />
                    </a>
                  )}
                </div>
                <h3 className="relative z-10 mt-8 text-lg font-bold text-white transition-colors group-hover:text-purple-200">
                  {project.title}
                </h3>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="mb-5 text-sm leading-relaxed text-slate-300">{project.description}</p>
                {project.features.length > 0 && (
                  <div className="mb-5">
                    <h4 className="mb-2 font-mono text-xs uppercase tracking-wider text-slate-400">Key Features</h4>
                    <ul className="flex flex-wrap gap-1.5">
                      {project.features.map((feature) => (
                        <li key={feature} className="rounded bg-white/5 px-2 py-1 text-xs text-slate-300">
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                <div className="mt-auto border-t border-white/5 pt-4">
                  <ul aria-label="Technologies" className="mb-4 flex flex-wrap gap-x-2 gap-y-1">
                    {project.technologies.map((technology) => (
                      <li key={technology} className="font-mono text-xs text-purple-300">#{technology}</li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-3">
                    {project.links.github && (
                      <a href={project.links.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-300 hover:text-white">
                        GitHub profile <ExternalLink aria-hidden="true" className="h-3.5 w-3.5" />
                      </a>
                    )}
                    {project.links.live && (
                      <a href={project.links.live} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-300 hover:text-white">
                        Live demo <ExternalLink aria-hidden="true" className="h-3.5 w-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <p role="status" className="rounded-2xl border border-border bg-panel p-6 text-slate-300">
          No projects match this filter.
        </p>
      )}
    </section>
  );
}
