import { useCallback, useEffect, useState } from 'react';
import About from './components/About.jsx';
import Achievements from './components/Achievements.jsx';
import BackToTop from './components/BackToTop.jsx';
import Coding from './components/Coding.jsx';
import Contact from './components/Contact.jsx';
import Education from './components/Education.jsx';
import Experience from './components/Experience.jsx';
import Footer from './components/Footer.jsx';
import Github from './components/Github.jsx';
import Hero from './components/Hero.jsx';
import Navbar from './components/Navbar.jsx';
import Projects from './components/Projects.jsx';
import Resume from './components/Resume.jsx';
import Skills from './components/Skills.jsx';

const sectionIds = [
  'home',
  'about',
  'skills',
  'experience',
  'projects',
  'coding',
  'education',
  'achievements',
  'github',
  'resume',
  'contact',
];

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section) => section !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort((first, second) => second.intersectionRatio - first.intersectionRatio);

        if (visibleSections[0]) {
          setActiveSection(visibleSections[0].target.id);
        }
      },
      { rootMargin: '-20% 0px -65% 0px', threshold: [0, 0.1, 0.25, 0.5] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const scrollToSection = useCallback((id) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches
        ? 'auto'
        : 'smooth',
      block: 'start',
    });
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden bg-canvas text-slate-100">
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        <div className="absolute -left-[10%] -top-[10%] h-[40vw] w-[40vw] rounded-full bg-blue-600/5 blur-[120px]" />
        <div className="absolute -right-[10%] top-[40%] h-[35vw] w-[35vw] rounded-full bg-purple-600/5 blur-[140px]" />
        <div className="absolute -bottom-[10%] left-[20%] h-[40vw] w-[40vw] rounded-full bg-emerald-600/5 blur-[150px]" />
      </div>

      <Navbar activeSection={activeSection} scrollToSection={scrollToSection} />
      <main className="relative z-10 flex flex-col gap-24 pb-24 md:gap-32">
        <Hero scrollToSection={scrollToSection} />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Coding />
        <Education />
        <Achievements />
        <Github />
        <Resume />
        <Contact />
      </main>
      <Footer scrollToSection={scrollToSection} />
      <BackToTop />
    </div>
  );
}
