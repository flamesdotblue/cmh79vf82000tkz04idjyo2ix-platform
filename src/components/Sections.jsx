import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Rocket, Code, Cog, Gauge, Star, Quote, CheckCircle } from 'lucide-react';

const GradientTitle = ({ children }) => (
  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight bg-gradient-to-r from-night to-[#043264] bg-clip-text text-transparent">
    {children}
  </h2>
);

const FeaturedWork = () => {
  const projects = [
    { title: 'Neural Commerce', tag: 'Ecommerce + AI', color: 'from-[#6F6FCF] to-[#384CEA]' },
    { title: 'Atlas Analytics', tag: 'Dashboards', color: 'from-[#384CEA] to-[#043264]' },
    { title: 'Flux Sites', tag: 'Web Platform', color: 'from-[#043264] to-[#6F6FCF]' },
    { title: 'Pulse Automate', tag: 'Automation', color: 'from-[#6F6FCF] to-[#043264]' },
  ];

  const handleTilt = (e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * -6;
    const rotateY = ((x - centerX) / centerX) * 6;
    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(0)`;
  };
  const resetTilt = (e) => { e.currentTarget.style.transform = 'rotateX(0deg) rotateY(0deg) translateZ(0)'; };

  return (
    <section id="work" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-end justify-between gap-4 mb-10">
          <GradientTitle>Featured Work</GradientTitle>
          <a href="#contact" className="text-sm text-[#043264] hover:underline">Work with us</a>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 perspective-[1200px]">
          {projects.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: i * 0.05, duration: 0.5 }}
              onMouseMove={handleTilt}
              onMouseLeave={resetTilt}
              className={`group relative h-56 rounded-2xl overflow-hidden bg-gradient-to-br ${p.color} text-white shadow-xl`}
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.25),transparent_40%),radial-gradient(circle_at_70%_70%,rgba(255,255,255,0.2),transparent_40%)]" />
              <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/40" />
              <div className="relative z-10 p-5 h-full flex flex-col justify-between">
                <span className="text-xs font-medium uppercase tracking-wider text-white/85">{p.tag}</span>
                <h3 className="text-lg font-semibold leading-tight">{p.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const cards = [
    { icon: <Code className="h-6 w-6" />, title: 'Web Development', desc: 'Premium, responsive, and blazing fast experiences.' },
    { icon: <Cog className="h-6 w-6" />, title: 'Automations', desc: 'Streamline workflows with robust no/low-code + code.' },
    { icon: <Gauge className="h-6 w-6" />, title: 'Dashboards', desc: 'Operational BI, metrics, and real-time insights.' },
    { icon: <Rocket className="h-6 w-6" />, title: 'AI/ML Systems', desc: 'Integrations, agents, and inference pipelines.' },
  ];

  const onMove = (e) => {
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rx = ((y - rect.height / 2) / rect.height) * -12;
    const ry = ((x - rect.width / 2) / rect.width) * 12;
    el.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg)`;
  };
  const onLeave = (e) => { e.currentTarget.style.transform = 'rotateX(0deg) rotateY(0deg)'; };

  return (
    <section id="services" className="py-20 bg-[#F8F8F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <GradientTitle>Services</GradientTitle>
        <p className="mt-3 text-night/70 max-w-2xl">End‑to‑end delivery from strategy to ship. Modular, scalable, and production‑ready.</p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ delay: i * 0.06, duration: 0.5 }}
              onMouseMove={onMove}
              onMouseLeave={onLeave}
              className="group relative rounded-2xl bg-white p-6 shadow-[0_20px_50px_-20px_rgba(6,24,44,0.15)] border border-black/5 will-change-transform"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-[#6F6FCF] via-[#384CEA] to-[#043264] text-white flex items-center justify-center shadow-lg shadow-[#6F6FCF]/30" style={{ transform: 'translateZ(20px)' }}>
                {c.icon}
              </div>
              <h3 className="mt-4 font-semibold text-lg" style={{ transform: 'translateZ(14px)' }}>{c.title}</h3>
              <p className="mt-2 text-sm text-night/70" style={{ transform: 'translateZ(12px)' }}>{c.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Process = () => {
  const steps = [
    { icon: <Gauge className="h-5 w-5" />, title: 'Discover', desc: 'Goals, constraints, and success metrics.' },
    { icon: <Code className="h-5 w-5" />, title: 'Design + Build', desc: 'Systems, components, and integrations.' },
    { icon: <Cog className="h-5 w-5" />, title: 'Automate', desc: 'Connect tools, agents, and data flows.' },
    { icon: <Rocket className="h-5 w-5" />, title: 'Launch', desc: 'Polish, performance, and iteration.' },
  ];

  return (
    <section id="process" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <GradientTitle>Process</GradientTitle>
        <div className="relative mt-10">
          <div className="absolute left-2 sm:left-1/2 sm:-translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#6F6FCF]/40 via-[#384CEA]/30 to-transparent" />
          <div className="space-y-10 relative">
            {steps.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="grid sm:grid-cols-2 gap-6 items-start"
              >
                <div className={`flex items-center gap-3 ${i % 2 === 0 ? 'sm:order-1' : 'sm:order-2'}`}>
                  <div className="h-10 w-10 rounded-full bg-white shadow ring-1 ring-black/5 flex items-center justify-center text-[#384CEA]">{s.icon}</div>
                  <h3 className="font-semibold text-lg">{s.title}</h3>
                </div>
                <p className={`text-night/70 ${i % 2 === 0 ? 'sm:order-2' : 'sm:order-1'}`}>{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const Counter = ({ to, duration = 1500 }) => {
  const [value, setValue] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  useEffect(() => {
    if (!inView) return;
    let start = null;
    const animate = (ts) => {
      if (!start) start = ts;
      const p = Math.min(1, (ts - start) / duration);
      setValue(Math.floor(p * to));
      if (p < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [inView, to, duration]);
  return (
    <div ref={ref} className="text-3xl sm:text-4xl font-bold text-night">
      {value.toLocaleString()}
    </div>
  );
};

const Impact = () => (
  <section className="py-20 bg-[#0f1220] text-white overflow-hidden relative">
    <div className="absolute -inset-x-20 -top-20 h-96 pointer-events-none bg-[radial-gradient(600px_200px_at_50%_-20%,rgba(111,111,207,0.25),transparent)]" />
    <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
      <div className="flex items-end justify-between gap-4 mb-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">Impact Metrics</h2>
        <Star className="h-6 w-6 text-[#6F6FCF]" />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="p-6 rounded-2xl bg-white/5 backdrop-blur border border-white/10">
          <Counter to={120} />
          <p className="mt-1 text-sm text-white/70">Projects Delivered</p>
        </div>
        <div className="p-6 rounded-2xl bg-white/5 backdrop-blur border border-white/10">
          <Counter to={35} />
          <p className="mt-1 text-sm text-white/70">AI Systems Launched</p>
        </div>
        <div className="p-6 rounded-2xl bg-white/5 backdrop-blur border border-white/10">
          <Counter to={99} />
          <p className="mt-1 text-sm text-white/70">Uptime %</p>
        </div>
        <div className="p-6 rounded-2xl bg-white/5 backdrop-blur border border-white/10">
          <Counter to={14} />
          <p className="mt-1 text-sm text-white/70">Countries Served</p>
        </div>
      </div>
    </div>
  </section>
);

const Testimonials = () => (
  <section className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6">
      <GradientTitle>Testimonials</GradientTitle>
      <div className="mt-10 grid md:grid-cols-3 gap-6">
        {[1,2,3].map((i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative overflow-hidden rounded-2xl bg-white/60 backdrop-blur shadow-[0_20px_50px_-20px_rgba(6,24,44,0.15)] border border-black/5"
          >
            <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(1200px_200px_at_50%_-10%,rgba(111,111,207,0.15),transparent)]" />
            <div className="p-6">
              <Quote className="h-5 w-5 text-[#384CEA]" />
              <p className="mt-4 text-night/80">Clyver delivered above and beyond—our conversion rate jumped and our ops now run on autopilot.</p>
              <div className="mt-6 flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-[#6F6FCF] to-[#043264]" />
                <div>
                  <div className="font-medium">Alex Morgan</div>
                  <div className="text-xs text-night/60">VP Product, Nova Labs</div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Pricing = () => {
  const [yearly, setYearly] = useState(true);
  const plans = [
    { name: 'Launch', price: yearly ? 6900 : 690, features: ['Website up to 5 pages', 'CMS + Analytics', 'Basic automations'] },
    { name: 'Scale', price: yearly ? 15900 : 1590, features: ['Complex site + dashboards', 'Custom automations', 'Perf + SEO'] },
    { name: 'Elite', price: yearly ? 29900 : 2990, features: ['Full-stack product', 'AI/ML systems', 'Priority support'] },
  ];

  return (
    <section id="pricing" className="py-20 bg-[#F8F8F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <GradientTitle>Pricing</GradientTitle>
          <div className="flex items-center gap-2 text-sm">
            <span className={!yearly ? 'font-medium text-night' : 'text-night/60'}>Monthly</span>
            <button
              onClick={() => setYearly((v) => !v)}
              className="relative inline-flex h-6 w-11 items-center rounded-full bg-night/10 p-1 transition"
            >
              <span className={`h-4 w-4 rounded-full bg-gradient-to-br from-[#6F6FCF] to-[#043264] transition-transform ${yearly ? 'translate-x-5' : 'translate-x-0'}`} />
            </button>
            <span className={yearly ? 'font-medium text-night' : 'text-night/60'}>Yearly</span>
          </div>
        </div>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {plans.map((p) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative rounded-2xl bg-white p-6 border border-black/5 shadow-[0_20px_50px_-20px_rgba(6,24,44,0.15)] hover:shadow-[0_30px_70px_-20px_rgba(6,24,44,0.25)] transition-shadow"
            >
              <div className="absolute inset-0 rounded-2xl pointer-events-none ring-1 ring-transparent [mask-image:linear-gradient(white,transparent)]" style={{ boxShadow: '0 0 0 1px rgba(6,24,44,0.05) inset' }} />
              <h3 className="font-semibold text-lg">{p.name}</h3>
              <div className="mt-2 text-3xl font-bold text-night">
                ${p.price.toLocaleString()} <span className="text-sm font-normal text-night/60">{yearly ? '/yr' : '/mo'}</span>
              </div>
              <ul className="mt-6 space-y-3 text-sm">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-[#384CEA]" /> {f}</li>
                ))}
              </ul>
              <a href="#contact" className="mt-6 inline-flex w-full items-center justify-center rounded-full border border-night/10 bg-night text-white py-2.5 hover:bg-[#043264] transition">Choose {p.name}</a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AISection = () => (
  <section className="relative py-24 bg-night text-white overflow-hidden">
    <div className="absolute -inset-x-20 -top-20 h-96 pointer-events-none bg-[radial-gradient(600px_200px_at_50%_-20%,rgba(111,111,207,0.25),transparent)]" />
    <div className="max-w-7xl mx-auto px-4 sm:px-6 relative">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight">AI + Automations</h2>
      <p className="mt-3 max-w-2xl text-white/75">We design intelligent systems: vector search, RAG pipelines, LLM agents, and workflow automations that drive outcomes.</p>
      <div className="mt-10 grid md:grid-cols-2 gap-6">
        <div className="relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 p-6 backdrop-blur">
          <div className="absolute inset-0 pointer-events-none animate-pulse bg-[radial-gradient(800px_160px_at_50%_-10%,rgba(56,76,234,0.15),transparent)]" />
          <h3 className="font-semibold">Neural Network Visual</h3>
          <p className="mt-2 text-white/70 text-sm">Animated field representing signal flow and inference.</p>
          <div className="mt-6 h-48 w-full rounded-xl bg-[conic-gradient(from_90deg_at_50%_50%,#6F6FCF, #384CEA, #043264, #6F6FCF)] animate-[spin_8s_linear_infinite] opacity-80" />
        </div>
        <div className="relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 p-6 backdrop-blur">
          <h3 className="font-semibold">Automation Graph</h3>
          <p className="mt-2 text-white/70 text-sm">Nodes and edges pulsing like a living system.</p>
          <div className="mt-6 grid grid-cols-6 gap-3">
            {Array.from({ length: 18 }).map((_, i) => (
              <motion.div key={i} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.03 }} className="h-5 rounded-full bg-gradient-to-br from-[#6F6FCF] to-[#043264]" />
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

const FinalCTA = () => (
  <section id="contact" className="py-24 bg-white">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 text-center">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
        <span className="bg-[linear-gradient(90deg,#6F6FCF,#384CEA,#043264,#6F6FCF)] bg-clip-text text-transparent bg-[length:200%_200%] animate-[gradientmove_6s_ease_infinite]">Let’s Build Something Extraordinary</span>
      </h2>
      <p className="mt-4 text-night/70 max-w-2xl mx-auto">Tell us about your vision. We’ll craft a roadmap and bring it to life with precision.</p>
      <div className="mt-8">
        <a href="mailto:hello@clyver.digital" className="inline-flex items-center justify-center rounded-full px-8 py-3 bg-night text-white hover:bg-[#043264] transition shadow-lg">hello@clyver.digital</a>
      </div>
    </div>
  </section>
);

const Sections = () => {
  return (
    <>
      <FeaturedWork />
      <Services />
      <Process />
      <Impact />
      <Testimonials />
      <Pricing />
      <AISection />
      <FinalCTA />
    </>
  );
};

export default Sections;
