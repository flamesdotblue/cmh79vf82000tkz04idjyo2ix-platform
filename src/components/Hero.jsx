import React, { useRef } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

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
      className={`relative inline-flex items-center justify-center rounded-full px-7 py-3 overflow-hidden ${className}`}
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
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateX = useTransform(my, [-150, 150], [6, -6]);
  const rotateY = useTransform(mx, [-150, 150], [-6, 6]);
  const translate = useTransform(mx, [-150, 150], [-8, 8]);

  const onMouseMove = (e) => {
    const { innerWidth, innerHeight } = window;
    mx.set(e.clientX - innerWidth / 2);
    my.set(e.clientY - innerHeight / 2);
  };

  return (
    <section id="home" onMouseMove={onMouseMove} className="relative min-h-[92svh] w-full overflow-hidden bg-night text-white">
      <div className="absolute -inset-[1px]">
        <div className="absolute inset-0 opacity-60 bg-[radial-gradient(900px_380px_at_30%_10%,#6F6FCF33,transparent),radial-gradient(900px_380px_at_70%_0%,#384CEA33,transparent),radial-gradient(900px_480px_at_50%_120%,#04326433,transparent)]" />
        <motion.div
          style={{ rotateX, rotateY }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 mix-blend-screen opacity-70 bg-[conic-gradient(from_0deg_at_50%_50%,#6F6FCF33,#384CEA33,#04326433,#6F6FCF33)] animate-[spin_24s_linear_infinite]" />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/70" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-28 pb-24">
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
          <span className="relative inline-block">
            <span className="bg-[linear-gradient(90deg,#6F6FCF,#384CEA,#043264,#6F6FCF)] bg-[length:200%_200%] animate-[gradientmove_6s_ease_infinite] bg-clip-text text-transparent">websites and AI automations.</span>
            <span className="pointer-events-none absolute inset-x-0 -bottom-1 h-[2px] bg-gradient-to-r from-[#6F6FCF] via-[#384CEA] to-[#043264] animate-pulse/slow" />
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-6 max-w-2xl text-base sm:text-lg text-white/85"
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

        <motion.div style={{ x: translate }} className="mt-16 grid grid-cols-3 sm:grid-cols-6 gap-3 opacity-80">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="h-1 rounded-full bg-gradient-to-r from-[#6F6FCF]/60 via-[#384CEA]/60 to-[#043264]/60" />
          ))}
        </motion.div>
      </div>

      <style>{`
        @keyframes gradientmove { 0%{background-position:0% 50%} 50%{background-position:100% 50%} 100%{background-position:0% 50%} }
        @keyframes slow { 0%{opacity:.4} 50%{opacity:1} 100%{opacity:.4} }
      `}</style>
    </section>
  );
};

export default Hero;
