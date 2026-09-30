import { Code2, ExternalLink, Flame } from 'lucide-react';
import { codingPlatforms, dsaTopics } from '../data/coding.js';
import SectionHeading from './SectionHeading.jsx';

export default function Coding() {
  return (
    <section id="coding" className="section-shell">
      <SectionHeading
        eyebrow="Problem Solving"
        title="Problem Solving & DSA"
        description="Data structures and algorithms topics, alongside coding platform profiles."
        icon={Flame}
      />
      <div className="grid gap-6 lg:grid-cols-12">
        <div className="rounded-2xl border border-border bg-panel p-6 sm:p-8 lg:col-span-7">
          <p className="mb-6 leading-relaxed text-slate-300">
            I practice Data Structures and Algorithms to improve problem-solving skills and prepare for software engineering opportunities.
          </p>
          <h3 className="mb-3 font-mono text-xs uppercase tracking-wider text-slate-400">Topics</h3>
          <ul className="flex flex-wrap gap-2">
            {dsaTopics.map((topic) => (
              <li key={topic} className="rounded-lg border border-white/5 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-200 transition hover:border-purple-500/30">
                {topic}
              </li>
            ))}
          </ul>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-1">
          {codingPlatforms.map((platform, index) => {
            const Icon = index === 0 ? Code2 : Flame;
            return (
              <article key={platform.name} className="flex flex-col justify-between rounded-2xl border border-border bg-panel p-6 transition hover:border-purple-500/30">
                <div>
                  <h3 className="mb-2 flex items-center gap-2 font-bold text-white">
                    <Icon aria-hidden="true" className="h-4 w-4 text-purple-300" />
                    {platform.name}
                  </h3>
                  <p className="mb-4 font-mono text-xs text-slate-400">Username: {platform.username}</p>
                </div>
                <a
                  href={platform.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-purple-500/20 bg-purple-500/10 py-2.5 text-xs font-medium text-purple-200 transition hover:bg-purple-500/20"
                >
                  View {platform.name} profile
                  <ExternalLink aria-hidden="true" className="h-3.5 w-3.5" />
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
