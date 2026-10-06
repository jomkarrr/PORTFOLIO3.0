import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePersona } from '../context/PersonaContext';

const RELEASES_DATA = {
  developer: [
    {
      version: 'v5.0',
      title: 'iGOT Karmayogi — Statistical System',
      subtitle: 'Diksha · Platform for Ministry of Statistics & Programme Implementation (MoSPI)',
      period: 'Sept 2026 — Present',
      bullets: [
        'Working with MoSPI (Official Statistical System) to build a competency-driven learning ecosystem for civil service personnel and statistical investigators.',
        'AI Competency Profiling: Engineered role-specific competency profiles synthesizing designation, department hierarchy, domain experience, and historical training vectors.',
        'iGOT Karmayogi Integration: Mapped identified capability gaps directly with accredited learning pathways across the central government capacity-building infrastructure.',
        'Led end-to-end product engineering spanning UI/UX design, frontend architecture, REST API integrations, cross-browser validation, and low-latency deployments.',
      ],
      links: [
        { label: 'GITHUB SOURCE ↗', href: 'https://github.com/jomkarrr/diksha' },
        { label: 'VERIFY DEPLOYMENT ↗', href: 'https://diksha-seven.vercel.app/' },
      ],
      stack: ['React 18', 'TypeScript', 'Tailwind CSS', 'Node.js', 'PostgreSQL', 'System Architecture'],
    },
    {
      version: 'v4.0',
      title: 'Aptive Studio',
      subtitle: 'Learning Management System & Telemetry Engine',
      period: 'Aug 2026 — Present',
      bullets: [
        'Designed and implemented high-resolution analytics experience for tracking real-time user learning retention, cognitive fatigue, and module throughput.',
        'Data-Driven Architecture: Centralized modular telemetry pipelines allowing zero-friction swapping between mock streams and production analytics APIs.',
        'Engineered responsive dashboards with sub-100ms render metrics using memoized layout primitives and virtualization.',
      ],
      links: [
        { label: 'GITHUB SOURCE ↗', href: 'https://github.com/jomkarrr' },
        { label: 'VERIFY DEPLOYMENT ↗', href: 'https://app.aptivestudio.com/' },
      ],
      stack: ['Next.js', 'TypeScript', 'FastAPI', 'Tailwind CSS', 'Recharts'],
    },
    {
      version: 'v3.0',
      title: 'GitHub Desktop Heatmap',
      subtitle: 'Windhawk Desktop Mod · Native Windows Contribution Graph',
      period: 'Aug 2026 — Present',
      bullets: [
        'Engineered the core C++ rendering pipeline and GitHub GraphQL API integration logic for smooth, low-overhead native desktop shell integration.',
        'Built custom Windhawk UI configuration panels for user credentials, personal access tokens, configurable polling intervals, sizing, and multi-monitor placement.',
        'Maintained sub-1% CPU idle overhead with efficient local cache validation and asynchronous event loops.',
      ],
      links: [
        { label: 'GITHUB SOURCE ↗', href: 'https://github.com/jomkarrr' },
        { label: 'WINDHAWK REPO ↗', href: 'https://github.com/jomkarrr' },
      ],
      stack: ['C++', 'Win32 API', 'GitHub GraphQL API', 'Windhawk Engine'],
    },
    
    
  ],
  freelancer: [
    {
      version: 'v5.0',
      title: 'iGOT Karmayogi — Statistical System',
      subtitle: 'Diksha · Platform for Ministry of Statistics & Programme Implementation (MoSPI)',
      period: 'Sept 2026 — Present',
      bullets: [
        'Working with MoSPI (Official Statistical System) to build a competency-driven learning ecosystem for civil service personnel and statistical investigators.',
        'AI Competency Profiling: Engineered role-specific competency profiles synthesizing designation, department hierarchy, domain experience, and historical training vectors.',
        'iGOT Karmayogi Integration: Mapped identified capability gaps directly with accredited learning pathways across the central government capacity-building infrastructure.',
        'Led end-to-end product engineering spanning UI/UX design, frontend architecture, REST API integrations, cross-browser validation, and low-latency deployments.',
      ],
      links: [
        { label: 'GITHUB SOURCE ↗', href: 'https://github.com/jomkarrr/diksha' },
        { label: 'VERIFY DEPLOYMENT ↗', href: 'https://diksha-seven.vercel.app/' },
      ],
      stack: ['React 18', 'TypeScript', 'Tailwind CSS', 'Node.js', 'PostgreSQL', 'System Architecture'],
    },
    {
      version: 'v4.0',
      title: 'Aptive Studio',
      subtitle: 'Learning Management System & Telemetry Engine',
      period: 'Aug 2026 — Present',
      bullets: [
        'Designed and implemented high-resolution analytics experience for tracking real-time user learning retention, cognitive fatigue, and module throughput.',
        'Data-Driven Architecture: Centralized modular telemetry pipelines allowing zero-friction swapping between mock streams and production analytics APIs.',
        'Engineered responsive dashboards with sub-100ms render metrics using memoized layout primitives and virtualization.',
      ],
      links: [
        { label: 'GITHUB SOURCE ↗', href: 'https://github.com/jomkarrr' },
        { label: 'VERIFY DEPLOYMENT ↗', href: 'https://app.aptivestudio.com/' },
      ],
      stack: ['Next.js', 'TypeScript', 'FastAPI', 'Tailwind CSS', 'Recharts'],
    },
    {
      version: 'v3.0',
      title: 'GitHub Desktop Heatmap',
      subtitle: 'Windhawk Desktop Mod · Native Windows Contribution Graph',
      period: 'Aug 2026 — Present',
      bullets: [
        'Engineered the core C++ rendering pipeline and GitHub GraphQL API integration logic for smooth, low-overhead native desktop shell integration.',
        'Built custom Windhawk UI configuration panels for user credentials, personal access tokens, configurable polling intervals, sizing, and multi-monitor placement.',
        'Maintained sub-1% CPU idle overhead with efficient local cache validation and asynchronous event loops.',
      ],
      links: [
        { label: 'GITHUB SOURCE ↗', href: 'https://github.com/jomkarrr' },
        { label: 'WINDHAWK REPO ↗', href: 'https://github.com/jomkarrr' },
      ],
      stack: ['C++', 'Win32 API', 'GitHub GraphQL API', 'Windhawk Engine'],
    },
    
  ],
};

export default function Experience() {
  const { persona } = usePersona();
  const releases = RELEASES_DATA[persona] || RELEASES_DATA.developer;
  const [openVersions, setOpenVersions] = useState(() => new Set(['v5.0']));

  const toggleVersion = (version) => {
    setOpenVersions((prev) => {
      const next = new Set(prev);
      if (next.has(version)) {
        next.delete(version);
      } else {
        next.add(version);
      }
      return next;
    });
  };

  return (
    <section id="experience" className="py-20 border-t border-charcoal/20">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-12">
        {/* Section Marker & Title */}
        <div className="w-full mb-10">
          <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-wider text-charcoal/70 pb-3 select-none">
            <span className="text-terracotta font-semibold">03 //</span>
            <span className="tracking-widest">RELEASE HISTORY</span>
            <span className="text-charcoal/30">·</span>
            <span className="text-charcoal/50">CHANGELOG</span>
          </div>
          <div className="w-full h-px bg-charcoal/20 mb-8" />
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-charcoal">
            Milestones and chronological releases<span className="text-terracotta">.</span>
          </h2>
        </div>

        {/* Changelog Accordion List */}
        <div className="w-full border-t border-charcoal/20">
          {releases.map((item) => {
            const isOpen = openVersions.has(item.version);

            return (
              <article
                key={item.version}
                className="border-b border-charcoal/20 transition-colors duration-200"
              >
                {/* Clickable Header Row */}
                <button
                  type="button"
                  onClick={() => toggleVersion(item.version)}
                  aria-expanded={isOpen}
                  className="w-full py-6 flex items-start justify-between group gap-4 select-none text-left focus:outline-none"
                >
                  <div className="flex flex-col sm:flex-row sm:items-baseline gap-4 sm:gap-10 md:gap-14 flex-1">
                    {/* Version Tag */}
                    <span className="font-mono font-semibold text-sm tracking-wider text-terracotta w-14 shrink-0">
                      [{item.version}]
                    </span>

                    {/* Title & Subtitle */}
                    <div className="flex-1">
                      <h3 className="font-serif text-2xl sm:text-[26px] leading-snug font-normal text-charcoal group-hover:text-terracotta transition-colors">
                        {item.title}
                      </h3>
                      <p className="font-sans text-xs sm:text-sm text-charcoal/70 mt-1 font-normal">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Date & Trigger Icon */}
                  <div className="flex items-center space-x-6 shrink-0 pt-1 text-right">
                    <span className="font-mono text-[11px] sm:text-xs text-charcoal/60 tracking-widest uppercase hidden md:inline-block">
                      {item.period}
                    </span>
                    <span
                      className={`font-mono text-xl sm:text-2xl leading-none w-6 text-center select-none font-light transition-colors ${
                        isOpen ? 'text-terracotta' : 'text-charcoal group-hover:text-terracotta'
                      }`}
                    >
                      {isOpen ? '—' : '+'}
                    </span>
                  </div>
                </button>

                {/* Collapsible Panel */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key={`content-${item.version}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pl-0 sm:pl-16 md:pl-[104px] pr-4 pt-1 pb-8">
                        {/* Narrative Bullets */}
                        <ul className="space-y-3.5 max-w-3xl text-sm sm:text-[15px] leading-relaxed text-charcoal/90 font-normal">
                          {item.bullets.map((bullet, bIdx) => (
                            <li key={bIdx} className="flex items-start">
                              <span className="text-terracotta mr-3 select-none text-base leading-snug shrink-0 font-medium">
                                →
                              </span>
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>

                        {/* Tech Stack Badges */}
                        <div className="flex flex-wrap gap-2 mt-6">
                          {item.stack.map((tech, tIdx) => (
                            <span
                              key={tIdx}
                              className="px-2.5 py-1 rounded bg-[#FAF8F5] border border-charcoal/15 text-xs font-mono text-charcoal/80"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        {/* Upstream / Verification Links */}
                        <div className="flex flex-wrap gap-6 mt-6">
                          {item.links.map((link, lIdx) => (
                            <a
                              key={lIdx}
                              href={link.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center text-xs font-mono uppercase tracking-wider text-charcoal underline underline-offset-4 decoration-charcoal/30 hover:text-terracotta hover:decoration-terracotta transition-colors duration-200"
                            >
                              {link.label}
                            </a>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
