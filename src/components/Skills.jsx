import { Cpu } from 'lucide-react';
import { skills } from '../data/skills.js';
import SectionHeading from './SectionHeading.jsx';

export default function Skills() {
  return (
    <section id="skills" className="section-shell">
      <SectionHeading
        eyebrow="Technical Expertise"
        title="Skills & Technologies"
        description="Languages, tools, and computer science foundations."
        icon={Cpu}
      />
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {skills.map(({ category, skills: categorySkills }) => (
          <article
            key={category}
            className="rounded-2xl border border-border bg-panel p-6 transition duration-300 hover:-translate-y-1 hover:border-purple-500/30"
          >
            <h3 className="mb-4 border-b border-white/5 pb-3 font-mono text-sm uppercase tracking-wider text-purple-300">
              {category}
            </h3>
            <ul className="flex flex-wrap gap-2">
              {categorySkills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-lg border border-white/5 bg-white/5 px-3 py-1.5 text-xs font-medium text-slate-200 transition-colors hover:border-purple-500/40 hover:bg-purple-500/10"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
