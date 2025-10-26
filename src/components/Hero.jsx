import React, { useRef } from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

const MagneticButton = ({ children, className, href }) => {
  const ref = useRef(null);
  const handleMouseMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate(${x * 0.08}px, ${y * 0.08}px)`;
  };
  const handleMouseLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = 'translate(0px, 0px)';
  };

  return (
    <a
      href={href}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative inline-flex items-center justify-center rounded-full px-6 py-3 overflow-hidden ${className}`}
    >
      <span className="absolute inset-0 bg-gradient-to-r from-[#6F6FCF] via-[#384CEA] to-[#043264] opacity-90" />
      <span className="absolute inset-0 [filter:url(#liquid)] opacity-80" />
      <span ref={ref} className="relative text-white font-medium flex items-center gap-2">
        {children}
      </span>
      <svg width="0" height="0">
        <filter id="liquid">
          <feTurbulence type="fractalNoise" baseFrequency="0.01" numOctaves="3" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="6" />
        </filter>
      </svg>
    </a>
  );
};

const Hero = () => {
  return (
    <section id="home" className="relative h-[100svh] w-full overflow-hidden bg-night text-white">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/jdTN4VDCXmSY8utE/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/70" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 h-full flex items-center">
        <div className="w-full">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-3 py-1 text-xs sm:text-sm backdrop-blur"
          >
            Elite Web Experiences • AI Automations • Dashboards
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight"
          >
            <span className="bg-gradient-to-r from-white via-[#E5E2D8] to-white bg-clip-text text-transparent">We build intelligent</span>
            <br />
            <span className="bg-[linear-gradient(90deg,#6F6FCF, #384CEA, #043264, #6F6FCF)] bg-[length:200%_200%] animate-[gradientmove_6s_ease_infinite] bg-clip-text text-transparent">websites and AI automations.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-6 max-w-2xl text-base sm:text-lg text-white/80"
          >
            Clyver Digital blends world‑class design with deep engineering to craft fluid, cinematic digital products.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <MagneticButton href="#contact" className="shadow-xl">
              <span>Start a project</span>
            </MagneticButton>
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-full px-6 py-3 border border-white/20 bg-white/5 text-white/90 hover:bg-white/10 transition backdrop-blur"
            >
              See our work
            </a>
          </motion.div>
        </div>
      </div>

      <style>{`
        @keyframes gradientmove {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
