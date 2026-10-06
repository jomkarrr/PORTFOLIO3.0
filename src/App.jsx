import { useState } from 'react';
import { PersonaProvider } from './context/PersonaContext';
import Navbar from './components/Navbar';
import NavigationDrawer from './components/NavigationDrawer';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import OpenSource from './components/OpenSource';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

function HomeLayout() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div className="min-h-screen bg-linen text-charcoal bg-dot-grid relative flex flex-col font-sans selection:bg-[#ffdad2] selection:text-[#3d0600]">
      <Navbar onOpenDrawer={() => setIsDrawerOpen(true)} />
      <NavigationDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />

      <main className="flex-1 flex flex-col">
        <Hero />
        <Marquee />
        <About />
        <Experience />
        <Skills />
        <OpenSource />
        <Contact />

        {/* Empty Anchor Targets for Remaining Site Sections */}
        <div id="about-dossier" className="scroll-mt-24" aria-hidden="true" />
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
}

export default function App() {
  return (
    <PersonaProvider>
      <HomeLayout />
    </PersonaProvider>
  );
}
