import React, { useEffect } from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Sections from './components/Sections.jsx';
import Footer from './components/Footer.jsx';
import Lenis from '@studio-freight/lenis';

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      smoothWheel: true,
      smoothTouch: false,
      lerp: 0.09,
      wheelMultiplier: 1.1,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-white text-night selection:bg-[#6F6FCF]/20 selection:text-[#043264]">
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="absolute inset-0 opacity-[0.07] bg-[radial-gradient(1000px_500px_at_-10%_-10%,#6F6FCF,transparent_35%),radial-gradient(800px_500px_at_110%_-10%,#384CEA,transparent_30%),radial-gradient(900px_500px_at_50%_120%,#043264,transparent_35%)]" />
      </div>
      <Header />
      <main className="flex flex-col">
        <Hero />
        <Sections />
      </main>
      <Footer />
    </div>
  );
}

export default App;
