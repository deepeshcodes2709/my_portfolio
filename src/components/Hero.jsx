import { ArrowRight, Code2, Download, Github, Linkedin, Mail, Sparkles, Terminal } from 'lucide-react';
import { profile, resumeUrl } from '../data/profile.js';
import { skills } from '../data/skills.js';

const socialLinks = [
  { label: 'GitHub profile', href: profile.github, icon: Github },
  { label: 'LinkedIn profile', href: profile.linkedin, icon: Linkedin },
  { label: 'LeetCode profile', href: profile.leetcode, icon: Code2 },
  ...(profile.email ? [{ label: 'Email', href: `mailto:${profile.email}`, icon: Mail }] : []),
];

export default function Hero({ scrollToSection }) {
  const stack = skills.find((group) => group.category === 'Programming')?.skills ?? [];

  return (
    <section id="home" className="mx-auto w-full max-w-7xl scroll-mt-24 px-4 pb-8 pt-16 sm:px-6 md:pt-24 lg:px-8 lg:pt-32">
      <div className="grid items-center gap-12 lg:grid-cols-12">
        <div className="flex flex-col items-start text-left lg:col-span-7">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-purple-500/10 px-3 py-1.5 text-xs font-medium text-purple-200">
            <Sparkles aria-hidden="true" className="h-3.5 w-3.5" />
            <span>Computer Science Engineering Student · JIET Jodhpur</span>
          </div>
          <h1 className="mb-4 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Hi, I&apos;m{' '}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent">
              {profile.name}
            </span>
          </h1>
          <p className="mb-6 text-xl font-semibold text-slate-300 sm:text-2xl">{profile.role}</p>
          <p className="mb-8 max-w-2xl text-base leading-relaxed text-slate-400 sm:text-lg">{profile.introduction}</p>

          <div className="mb-10 flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => scrollToSection('projects')}
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-purple-600/20 transition hover:from-blue-500 hover:to-purple-500"
            >
              View My Work <ArrowRight aria-hidden="true" className="h-4 w-4" />
            </button>
            <a
              href={resumeUrl}
              download
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-6 py-3 text-sm font-medium text-slate-200 transition hover:bg-white/10"
            >
              <Download aria-hidden="true" className="h-4 w-4" />
              Download Resume
            </a>
            <button
              type="button"
              onClick={() => scrollToSection('contact')}
              className="rounded-xl px-4 py-3 text-sm font-medium text-slate-300 transition hover:bg-white/5 hover:text-white"
            >
              Contact Me
            </button>
          </div>

          <div className="flex w-full items-center gap-4 border-t border-white/10 pt-4">
            <span className="font-mono text-xs uppercase tracking-wider text-slate-400">Connect:</span>
            <div className="flex items-center gap-3">
              {socialLinks.map(({ label, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('mailto:') ? undefined : '_blank'}
                  rel={href.startsWith('mailto:') ? undefined : 'noreferrer'}
                  aria-label={label}
                  className="rounded-xl border border-white/5 bg-white/5 p-2.5 text-slate-300 transition hover:bg-white/10 hover:text-white"
                >
                  <Icon aria-hidden="true" className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full lg:col-span-5">
          <div className="overflow-hidden rounded-2xl border border-border bg-terminal shadow-2xl">
            <div className="flex items-center justify-between border-b border-border bg-terminal-header px-4 py-3">
              <div aria-hidden="true" className="flex items-center gap-2">
                <span className="h-3 w-3 rounded-full bg-rose-500/80" />
                <span className="h-3 w-3 rounded-full bg-amber-500/80" />
                <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
              </div>
              <div className="flex items-center gap-1.5 font-mono text-xs text-slate-400">
                <Terminal aria-hidden="true" className="h-3.5 w-3.5 text-purple-400" />
                <span>developer-profile.js</span>
              </div>
              <span aria-hidden="true" className="w-10" />
            </div>
            <div className="overflow-x-auto p-6 font-mono text-xs text-slate-300 sm:text-sm">
              <p className="mb-2 text-slate-500">// Developer profile</p>
              <p><span className="text-purple-400">const</span> <span className="text-blue-400">developer</span> = {'{'}</p>
              <div className="my-2 space-y-1.5 pl-4">
                <p><span className="text-slate-400">name:</span> <span className="text-emerald-400">&quot;{profile.name}&quot;</span>,</p>
                <p><span className="text-slate-400">role:</span> <span className="text-emerald-400">&quot;Software Developer&quot;</span>,</p>
                <p><span className="text-slate-400">education:</span> <span className="text-emerald-400">&quot;B.Tech CSE&quot;</span>,</p>
                <p><span className="text-slate-400">stack:</span> [</p>
                <div className="space-y-1 pl-4">
                  {stack.slice(0, 4).map((technology, index) => (
                    <p key={technology}>
                      <span className="text-emerald-400">&quot;{technology}&quot;</span>{index < Math.min(stack.length, 4) - 1 ? ',' : ''}
                    </p>
                  ))}
                </div>
                <p>],</p>
                <p><span className="text-slate-400">location:</span> <span className="text-emerald-400">&quot;{profile.location}&quot;</span></p>
              </div>
              <p>{'};'}</p>
              <div className="mt-4 flex items-center justify-between border-t border-white/5 pt-4 font-mono text-xs text-slate-500">
                <span>// Explore the portfolio</span>
                <span className="text-emerald-400">Ready</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
