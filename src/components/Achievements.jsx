import { Award } from 'lucide-react';
import { achievements } from '../data/achievements.js';
import SectionHeading from './SectionHeading.jsx';

export default function Achievements() {
  return (
    <section id="achievements" className="section-shell">
      <SectionHeading
        eyebrow="Milestones"
        title="Achievements & Certifications"
        description="Verified certifications and achievements."
        icon={Award}
      />
      {achievements.length > 0 ? (
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {achievements.map((achievement) => (
            <article key={achievement.id} className="rounded-2xl border border-border bg-panel p-6 transition hover:border-purple-500/30">
              <Award aria-hidden="true" className="mb-4 h-6 w-6 text-purple-300" />
              <h3 className="font-semibold text-white">{achievement.title}</h3>
              <p className="mt-1 text-sm text-purple-200">{achievement.issuer}</p>
              {achievement.date && <p className="mt-2 font-mono text-xs text-slate-400">{achievement.date}</p>}
              {achievement.description && <p className="mt-3 text-sm leading-relaxed text-slate-300">{achievement.description}</p>}
              {achievement.link && <a href={achievement.link} target="_blank" rel="noreferrer" className="mt-4 inline-block text-sm text-purple-200 underline underline-offset-4">View credential</a>}
            </article>
          ))}
        </div>
      ) : (
        <p className="rounded-2xl border border-dashed border-border bg-section p-6 text-sm text-slate-400">
          No achievements or certifications have been added.
        </p>
      )}
    </section>
  );
}
