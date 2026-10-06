import { usePersona } from '../context/PersonaContext';

export default function Hero() {
  const { persona, togglePersona } = usePersona();
  const isDeveloper = persona === 'developer';

  return (
    <section id="hero" className="w-full">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-12 pt-8 sm:pt-10 pb-12 flex flex-col justify-between">
        {/* EDITORIAL SPEC HEADER RULE (Above Headline) */}
        <div className="w-full">
          <div className="w-full pb-2.5 flex items-center justify-between font-mono text-xs uppercase tracking-wider text-charcoal/70">
            <span>SPEC NO. 001 · PORTFOLIO OF WORK</span>
            <span>REV. 2026 · WRITTEN &amp; BUILT BY HAND</span>
          </div>
          <div className="w-full border-b border-charcoal/20" />
        </div>

        {/* HERO MAIN BODY */}
        <div className="pt-8 sm:pt-12">
          {/* Slanted Stamped Badge (Top Right) */}
          <div className="w-full flex justify-end mb-4 sm:mb-2">
            <div className="inline-block border border-terracotta text-terracotta font-mono text-xs uppercase px-2 py-0.5 rotate-[-2.5deg] bg-linen/90 shadow-sm select-none font-medium">
              {isDeveloper ? 'CURRENTLY BUILDING' : 'AVAILABLE FOR FREELANCE WORK'}
            </div>
          </div>

          {/* Headline: Editorial Serif Display */}
          <div className="max-w-4xl">
            <h1 className="font-serif text-5xl sm:text-7xl lg:text-[5.5rem] leading-[1.08] tracking-tight font-normal text-charcoal">
              {isDeveloper ? (
                <>
                  Architects <span className="italic text-terracotta font-normal">logic.</span>
                  <br />
                  Deploys{' '}
                  <span className="border border-charcoal/20 bg-charcoal/5 px-4 py-1 inline-block text-charcoal">
                    impact.
                  </span>
                </>
              ) : (
                <>
                  Render <span className="italic text-terracotta font-normal">your</span>
                  <br />
                  vision{' '}
                  <span className="border border-charcoal/20 bg-charcoal/5 px-4 py-1 inline-block text-charcoal">
                    live.
                  </span>
                </>
              )}
            </h1>
          </div>

          {/* Description Paragraph + Inline Switch Row */}
          <div className="mt-10 sm:mt-14 grid grid-cols-1 md:grid-cols-12 gap-8 items-end justify-between">
            <div className="md:col-span-8 lg:col-span-8">
              <p className="text-base sm:text-lg text-charcoal/80 font-normal leading-relaxed max-w-2xl font-sans">
                {isDeveloper
                  ? 'Full-stack & systems engineer who treats every commit as a product decision. Specializing in resilient distributed architectures, high-performance web applications, and open-source software tooling.'
                  : 'I create beautiful, functional, and user-centered digital experiences. With 2+ years of experience in web development / Web3 development, I bring ideas to life through clean code.'}
              </p>
            </div>

            {/* Inline "READ THIS DOCUMENT AS" sharp rectangular toggle */}
            <div className="md:col-span-4 lg:col-span-4 flex flex-col md:items-end gap-2">
              <span className="font-mono text-[10px] sm:text-[11px] tracking-widest uppercase text-charcoal/60">
                READ THIS DOCUMENT AS
              </span>
              <div className="border border-charcoal/20 bg-linen p-[2px] inline-flex items-center select-none shadow-none">
                <button
                  type="button"
                  onClick={() => togglePersona('developer')}
                  aria-pressed={isDeveloper}
                  className={`px-3 sm:px-4 py-1 text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider transition-colors border ${
                    isDeveloper
                      ? 'bg-[#C85338] text-white border-[#C85338]'
                      : 'bg-transparent text-charcoal border-transparent hover:bg-black/5'
                  }`}
                >
                  Developer
                </button>
                <button
                  type="button"
                  onClick={() => togglePersona('freelancer')}
                  aria-pressed={!isDeveloper}
                  className={`px-3 sm:px-4 py-1 text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider transition-colors border ${
                    !isDeveloper
                      ? 'bg-[#C85338] text-white border-[#C85338]'
                      : 'bg-transparent text-charcoal border-transparent hover:bg-black/5'
                  }`}
                >
                  Freelancer
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 4-COLUMN METADATA BOTTOM GRID */}
        <div className="w-full mt-16 sm:mt-24 border-y border-charcoal/20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 divide-charcoal/20 py-4 sm:py-5">
            {/* Column 01: NAME */}
            <div className="py-3 sm:py-0 sm:pr-6 sm:border-r sm:border-charcoal/20 flex flex-col justify-center">
              <span className="font-mono text-[10px] sm:text-xs tracking-widest text-charcoal/60 uppercase block mb-1">
                01 / NAME
              </span>
              <span className="font-sans text-base font-semibold text-charcoal block">
                Omkar Jadhav
              </span>
            </div>

            {/* Column 02: CURRENTLY */}
            <div className="py-3 sm:py-0 sm:px-6 lg:border-r lg:border-charcoal/20 flex flex-col justify-center">
              <span className="font-mono text-[10px] sm:text-xs tracking-widest text-charcoal/60 uppercase block mb-1">
                02 / CURRENTLY
              </span>
              <span className="font-sans text-base font-medium text-charcoal block">
                {isDeveloper
                  ? 'Product & Distributed Systems'
                  : 'Full-Stack & Web3 Development'}
              </span>
            </div>

            {/* Column 03: STATUS */}
            <div className="py-3 sm:py-0 sm:px-6 sm:border-r sm:border-charcoal/20 flex flex-col justify-center">
              <span className="font-mono text-[10px] sm:text-xs tracking-widest text-charcoal/60 uppercase block mb-1">
                03 / STATUS
              </span>
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-terracotta inline-block animate-pulse" />
                <span className="font-sans text-base font-medium text-charcoal">
                  {isDeveloper ? 'Currently Building' : 'Available for Freelance Work'}
                </span>
              </div>
            </div>

            {/* Column 04: CONTENTS */}
            <div className="py-3 sm:py-0 sm:pl-6 flex flex-col justify-center">
              <span className="font-mono text-[10px] sm:text-xs tracking-widest text-charcoal/60 uppercase block mb-1">
                04 / CONTENTS
              </span>
              <a
                href="#about"
                className="font-sans text-base font-medium text-charcoal hover:text-terracotta inline-flex items-center gap-1.5 transition-colors group"
              >
                <span>Begin reading</span>
                <span className="text-terracotta group-hover:translate-y-0.5 transition-transform">
                  ↓
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
