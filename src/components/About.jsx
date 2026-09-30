import { MapPin, User } from 'lucide-react';
import { education } from '../data/education.js';
import { profile } from '../data/profile.js';
import SectionHeading from './SectionHeading.jsx';

const infoCards = [
  { label: 'Education', value: profile.education, detail: profile.duration },
  { label: 'Institution', value: profile.institution, detail: education[0]?.cgpa ? `CGPA: ${education[0].cgpa}` : '' },
  { label: 'Location', value: profile.location, detail: 'Based in India', icon: MapPin },
  { label: 'Focus', value: profile.focus, detail: 'Software development' },
];

export default function About() {
  return (
    <section id="about" className="section-shell">
      <SectionHeading eyebrow="Background" title="About Me" icon={User} />
      <div className="grid items-start gap-8 lg:grid-cols-12">
      <div className="space-y-5 rounded-2xl border border-border bg-panel p-6 sm:p-8 lg:col-span-7">
        {profile.about.map((paragraph) => (
          <p key={paragraph} className="text-base leading-relaxed text-slate-300 sm:text-lg">
            {paragraph}
          </p>
        ))}
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:col-span-5">
          {infoCards.map(({ label, value, detail, icon: Icon }) => (
            <article key={label} className="rounded-2xl border border-border bg-panel p-5 transition hover:border-purple-500/30">
              <h3 className="mb-2 flex items-center gap-2 text-sm font-semibold text-purple-300">
                {Icon && <Icon aria-hidden="true" className="h-4 w-4" />}
                {label}
              </h3>
              <p className="font-semibold text-white">{value}</p>
              {detail && <p className="mt-1 text-xs text-slate-400">{detail}</p>}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
