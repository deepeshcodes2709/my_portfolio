import { Briefcase } from 'lucide-react';
import { experience } from '../data/experience.js';
import SectionHeading from './SectionHeading.jsx';

export default function Experience() {
  return (
    <section id="experience" className="section-shell">
      <SectionHeading
        eyebrow="Career Journey"
        title="Professional Experience"
        description="Internships and hands-on industry experience."
        icon={Briefcase}
      />
      {experience.length > 0 ? (
        <ol className="relative ml-3 space-y-8 border-l border-white/10 sm:ml-6">
          {experience.map((item) => (
            <li key={item.id} className="relative pl-6 sm:pl-8">
              <span aria-hidden="true" className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-purple-500 ring-4 ring-canvas" />
              <article className="rounded-2xl border border-border bg-panel p-6 transition-colors hover:border-purple-500/30 sm:p-8">
                <div className="mb-4 flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white">{item.role}</h3>
                    <p className="mt-1 text-sm font-medium text-purple-300">
                      {item.company} <span className="text-slate-400">· {item.location}</span>
                    </p>
                  </div>
                  <time className="w-fit rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-xs text-slate-300">
                    {item.period}
                  </time>
                </div>
                <p className="mb-2 text-sm font-semibold text-slate-200">
                  Project: <span className="text-emerald-300">{item.project}</span>
                </p>
                <p className="mb-4 text-sm leading-relaxed text-slate-300">{item.description}</p>
                <ul className="mb-5 flex flex-wrap gap-2">
                  {item.technologies.map((technology) => (
                    <li key={technology} className="rounded border border-purple-500/20 bg-purple-500/10 px-2.5 py-1 text-xs text-purple-200">
                      {technology}
                    </li>
                  ))}
                </ul>
                <div className="border-t border-white/5 pt-4">
                  <h4 className="mb-2 font-mono text-xs uppercase tracking-wider text-slate-400">Key Contributions</h4>
                  <ul className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                    {item.highlights.map((highlight) => (
                      <li key={highlight} className="flex items-start gap-2 text-xs text-slate-300">
                        <span aria-hidden="true" className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-purple-400" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </li>
          ))}
        </ol>
      ) : (
        <p className="rounded-2xl border border-border bg-panel p-6 text-slate-300">Experience details have not been added yet.</p>
      )}
    </section>
  );
}
