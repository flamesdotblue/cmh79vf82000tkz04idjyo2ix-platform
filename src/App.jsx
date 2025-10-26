import React from 'react';
import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Sections from './components/Sections.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="min-h-screen bg-white text-night selection:bg-[#6F6FCF]/20 selection:text-[#043264]">
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
