import { Code2, Github, Linkedin } from 'lucide-react';
import { profile } from '../data/profile.js';

const footerLinks = [
  ['home', 'Home'],
  ['about', 'About'],
  ['projects', 'Projects'],
  ['contact', 'Contact'],
];

export default function Footer({ scrollToSection }) {
  return (
    <footer className="relative z-10 mt-24 border-t border-border bg-navbar py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-4 sm:px-6 md:flex-row lg:px-8">
        <div className="text-center md:text-left">
          <p className="mb-1 flex items-center justify-center gap-2 text-lg font-bold text-white md:justify-start">
            <span aria-hidden="true" className="h-2 w-2 rounded-full bg-purple-500" />
            {profile.name}
          </p>
          <p className="font-mono text-xs text-slate-400">{profile.role}</p>
        </div>
        <nav aria-label="Footer navigation" className="flex flex-wrap justify-center gap-5 text-xs font-medium text-slate-400">
          {footerLinks.map(([id, label]) => (
            <button key={id} type="button" onClick={() => scrollToSection(id)} className="transition-colors hover:text-white">
              {label}
            </button>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          {[
            { label: 'GitHub profile', href: profile.github, icon: Github },
            { label: 'LinkedIn profile', href: profile.linkedin, icon: Linkedin },
            { label: 'LeetCode profile', href: profile.leetcode, icon: Code2 },
          ].map(({ label, href, icon: Icon }) => (
            <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} className="rounded-lg bg-white/5 p-2 text-slate-300 transition hover:bg-white/10 hover:text-white">
              <Icon aria-hidden="true" className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
      <p className="mx-auto mt-8 max-w-7xl border-t border-white/5 px-4 pt-6 text-center font-mono text-xs text-slate-500 sm:px-6 lg:px-8">
        © {new Date().getFullYear()} {profile.name}
      </p>
    </footer>
  );
}
