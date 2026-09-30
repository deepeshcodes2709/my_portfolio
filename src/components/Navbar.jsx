import { useEffect, useState } from 'react';
import { Download, Menu, X } from 'lucide-react';
import { profile, resumeUrl } from '../data/profile.js';

const navigation = [
  ['home', 'Home'],
  ['about', 'About'],
  ['skills', 'Skills'],
  ['experience', 'Experience'],
  ['projects', 'Projects'],
  ['coding', 'DSA'],
  ['education', 'Education'],
  ['achievements', 'Achievements'],
  ['github', 'GitHub'],
  ['contact', 'Contact'],
];

export default function Navbar({ activeSection, scrollToSection }) {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setMenuOpen(false);
    };
    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, []);

  const navigate = (id) => {
    setMenuOpen(false);
    scrollToSection(id);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-navbar/95 py-3 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <button
          type="button"
          onClick={() => navigate('home')}
          className="group text-left"
          aria-label={`Go to ${profile.name}'s home section`}
        >
          <span className="flex items-center gap-2 text-lg font-bold tracking-tight text-white transition-colors group-hover:text-purple-300">
            <span aria-hidden="true" className="h-2.5 w-2.5 rounded-full bg-gradient-to-r from-blue-500 to-purple-500" />
            {profile.name}
          </span>
          <span className="block font-mono text-xs tracking-wider text-slate-400">Software Developer</span>
        </button>

        <nav aria-label="Main navigation" className="hidden items-center gap-1 xl:flex">
          {navigation.map(([id, label]) => (
            <button
              key={id}
              type="button"
              onClick={() => navigate(id)}
              aria-current={activeSection === id ? 'location' : undefined}
              className={`rounded-full px-3 py-2 text-xs font-medium transition-colors ${
                activeSection === id
                  ? 'border border-purple-500/30 bg-purple-500/20 text-purple-200'
                  : 'text-slate-300 hover:bg-white/5 hover:text-white'
              }`}
            >
              {label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={resumeUrl}
            download
            className="hidden items-center gap-2 rounded-lg border border-white/10 bg-purple-600/80 px-4 py-2 text-xs font-medium text-white transition-colors hover:bg-purple-600 sm:inline-flex"
          >
            <Download aria-hidden="true" className="h-3.5 w-3.5" />
            Resume
          </a>
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className="rounded-lg p-2 text-slate-300 transition-colors hover:bg-white/10 hover:text-white xl:hidden"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
          >
            {menuOpen ? <X aria-hidden="true" className="h-6 w-6" /> : <Menu aria-hidden="true" className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="absolute left-0 right-0 top-full border-b border-border bg-navbar/95 p-4 shadow-2xl backdrop-blur-xl xl:hidden"
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            {navigation.map(([id, label]) => (
              <button
                key={id}
                type="button"
                onClick={() => navigate(id)}
                aria-current={activeSection === id ? 'location' : undefined}
                className={`rounded-lg px-4 py-3 text-left text-sm font-medium transition-colors ${
                  activeSection === id
                    ? 'bg-purple-500/20 text-purple-200'
                    : 'text-slate-300 hover:bg-white/5 hover:text-white'
                }`}
              >
                {label}
              </button>
            ))}
            <a
              href={resumeUrl}
              download
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-purple-600 px-4 py-3 text-sm font-medium text-white sm:hidden"
            >
              <Download aria-hidden="true" className="h-4 w-4" />
              Download Resume
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
