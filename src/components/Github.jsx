import { ArrowRight, ExternalLink, FolderGit2, Github as GithubIcon } from 'lucide-react';
import { featuredRepositories } from '../data/github.js';
import { profile } from '../data/profile.js';
import SectionHeading from './SectionHeading.jsx';

export default function Github() {
  return (
    <section id="github" className="section-shell">
      <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <SectionHeading
          eyebrow="Open Source"
          title="GitHub Showcase"
          description="Selected projects and development work."
          icon={GithubIcon}
        />
        <a
          href={profile.github}
          target="_blank"
          rel="noreferrer"
          className="mb-10 inline-flex w-fit items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-xs font-medium text-slate-200 transition hover:bg-white/10"
        >
          View GitHub Profile
          <ExternalLink aria-hidden="true" className="h-3.5 w-3.5" />
        </a>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        {featuredRepositories.map((repository) => (
          <article key={repository.id} className="rounded-2xl border border-border bg-panel p-6 transition hover:border-purple-500/30">
            <div className="mb-3 flex items-start justify-between gap-3">
              <h3 className="flex items-center gap-2 font-mono text-sm font-bold text-white">
                <FolderGit2 aria-hidden="true" className="h-4 w-4 shrink-0 text-purple-300" />
                {repository.name}
              </h3>
              <span className="shrink-0 rounded bg-white/5 px-2.5 py-1 font-mono text-xs text-slate-300">
                {repository.language}
              </span>
            </div>
            <p className="mb-5 text-sm leading-relaxed text-slate-300">{repository.description}</p>
            <a
              href={repository.url}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 border-t border-white/5 pt-4 text-xs font-medium text-purple-200 transition hover:text-white"
            >
              Explore GitHub profile <ArrowRight aria-hidden="true" className="h-3.5 w-3.5" />
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
