import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';

const Header = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrolled = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setProgress(scrolled);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto w-full">
        <div className="backdrop-blur-xl bg-white/60 dark:bg-night/50 border-b border-black/5 dark:border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            <a href="#home" className="flex items-center gap-2">
              <div className="h-7 w-7 rounded-lg bg-gradient-to-br from-[#6F6FCF] via-[#384CEA] to-[#043264] shadow-lg shadow-[#6F6FCF]/30" />
              <span className="font-semibold tracking-tight text-night">Clyver Digital</span>
            </a>
            <nav className="hidden md:flex items-center gap-8 text-sm text-night/70">
              <a className="hover:text-night transition-colors" href="#work">Work</a>
              <a className="hover:text-night transition-colors" href="#services">Services</a>
              <a className="hover:text-night transition-colors" href="#process">Process</a>
              <a className="hover:text-night transition-colors" href="#pricing">Pricing</a>
            </nav>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-[#6F6FCF] via-[#384CEA] to-[#043264] shadow-lg shadow-[#384CEA]/30 hover:shadow-[#384CEA]/40 transition duration-300"
            >
              Let's talk
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>
          <div className="h-0.5 w-full bg-transparent">
            <div
              className="h-0.5 bg-gradient-to-r from-[#6F6FCF] via-[#384CEA] to-[#043264] transition-[width] duration-200"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
