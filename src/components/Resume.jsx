import { Download, ExternalLink, FileText } from 'lucide-react';
import { resumeUrl } from '../data/profile.js';

export default function Resume() {
  return (
    <section id="resume" className="section-shell">
      <div className="relative flex flex-col items-center justify-between gap-7 overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-blue-900/20 via-purple-900/20 to-emerald-900/20 p-8 text-center backdrop-blur sm:flex-row sm:p-12 sm:text-left">
        <div>
          <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-purple-500/10 px-3 py-1 font-mono text-xs uppercase tracking-widest text-purple-200">
            <FileText aria-hidden="true" className="h-3.5 w-3.5" />
            Curriculum Vitae
          </div>
          <h2 className="mb-2 text-2xl font-bold text-white sm:text-3xl">Explore my experience</h2>
          <p className="max-w-xl text-sm text-slate-300">
            View or download my resume for details about my education, internships, projects, and skills.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-3">
          <a href={resumeUrl} download className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-5 py-3 text-sm font-medium text-white transition hover:from-blue-500 hover:to-purple-500">
            <Download aria-hidden="true" className="h-4 w-4" />
            Download Resume
          </a>
          <a href={resumeUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-slate-200 transition hover:bg-white/10">
            View Resume <ExternalLink aria-hidden="true" className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
