import { GraduationCap } from 'lucide-react';
import { education } from '../data/education.js';
import SectionHeading from './SectionHeading.jsx';

export default function Education() {
  return (
    <section id="education" className="section-shell">
      <SectionHeading eyebrow="Academic Background" title="Education" icon={GraduationCap} />
      {education.length > 0 ? (
        <ol className="relative ml-3 space-y-6 border-l border-white/10 sm:ml-6">
          {education.map((item) => (
            <li key={item.id} className="relative pl-6 sm:pl-8">
              <span aria-hidden="true" className="absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full bg-purple-500 ring-4 ring-canvas" />
              <article className="rounded-2xl border border-border bg-panel p-6 sm:p-8">
                <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-xl font-bold text-white">{item.degree}</h3>
                    <p className="mt-1 text-sm font-medium text-purple-300">
                      {item.institution} <span className="text-slate-400">· {item.location}</span>
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {item.cgpa && <span className="rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1 font-mono text-xs font-semibold text-emerald-200">CGPA: {item.cgpa}</span>}
                    <time className="rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-xs text-slate-300">{item.period}</time>
                  </div>
                </div>
                {item.coursework.length > 0 && (
                  <div className="border-t border-white/5 pt-4">
                    <h4 className="mb-3 font-mono text-xs uppercase tracking-wider text-slate-400">Relevant Coursework</h4>
                    <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                      {item.coursework.map((course) => (
                        <li key={course} className="flex items-center gap-2 rounded-xl border border-white/5 bg-white/5 p-3 text-xs font-medium text-slate-300">
                          <span aria-hidden="true" className="h-1.5 w-1.5 shrink-0 rounded-full bg-purple-400" />
                          {course}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </article>
            </li>
          ))}
        </ol>
      ) : (
        <p className="rounded-2xl border border-border bg-panel p-6 text-slate-300">Education details have not been added yet.</p>
      )}
    </section>
  );
}
