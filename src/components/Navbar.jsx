import { Menu } from 'lucide-react';
import { usePersona } from '../context/PersonaContext';

export default function Navbar({ onOpenDrawer = () => {} }) {
  const { persona, togglePersona } = usePersona();

  return (
    <header className="sticky top-0 z-40 w-full border-b border-charcoal/20 bg-linen/95 backdrop-blur-md transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-12 h-16 md:h-20 flex items-center justify-between">
        {/* Left Zone: Brand / Initials Mark */}
        <div className="flex items-center">
          <a
            href="#"
            className="font-serif text-3xl sm:text-4xl italic font-normal tracking-tight text-charcoal hover:opacity-80 transition-opacity"
          >
            O.J<span className="text-terracotta font-sans not-italic">.</span>
          </a>
        </div>

        {/* Center Zone: Sharp Rectangular Dual-State Toggle */}
        <div className="border border-charcoal/20 bg-linen p-[2px] flex items-center select-none shadow-none">
          <button
            type="button"
            onClick={() => togglePersona('developer')}
            aria-pressed={persona === 'developer'}
            className={`px-3 sm:px-4 py-1 text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider transition-colors border ${
              persona === 'developer'
                ? 'bg-[#C85338] text-white border-[#C85338]'
                : 'bg-transparent text-charcoal border-transparent hover:bg-black/5'
            }`}
          >
            Developer
          </button>
          <button
            type="button"
            onClick={() => togglePersona('freelancer')}
            aria-pressed={persona === 'freelancer'}
            className={`px-3 sm:px-4 py-1 text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider transition-colors border ${
              persona === 'freelancer'
                ? 'bg-[#C85338] text-white border-[#C85338]'
                : 'bg-transparent text-charcoal border-transparent hover:bg-black/5'
            }`}
          >
            Freelancer
          </button>
        </div>

        {/* Right Zone: Minimalist Hamburger Drawer Button */}
        <div className="flex items-center">
          <button
            type="button"
            onClick={onOpenDrawer}
            aria-label="Open Table of Contents"
            className="p-2 text-charcoal hover:text-terracotta transition-colors flex items-center justify-center focus:outline-none"
          >
            <Menu className="w-6 h-6 stroke-[1.75]" />
          </button>
        </div>
      </div>
    </header>
  );
}
