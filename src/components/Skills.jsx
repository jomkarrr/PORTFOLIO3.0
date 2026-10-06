import { useState } from 'react';
import { usePersona } from '../context/PersonaContext';

const SKILLS_DATA = {
  developer: [
    {
      letter: 'A',
      title: 'Core Architecture & Languages',
      items: [
        {
          name: 'TypeScript / JavaScript',
          desc: 'Authored modular design systems, async data pipelines, and custom event buses.',
          depth: '5+ YRS',
          highlight: true,
        },
        {
          name: 'Python / FastAPI',
          desc: 'Implemented backend automation pipelines, ORM data layers, and secure JWT auth.',
          depth: '3+ YRS',
        },
        {
          name: 'C++ / Systems',
          desc: 'Engineered core rendering pipelines and native Windows OS desktop shell integration.',
          depth: '2+ YRS',
        },
        {
          name: 'SQL / PostgreSQL',
          desc: 'Designed normalized schemas, index optimizations, and complex analytical views.',
          depth: '4+ YRS',
        },
        {
          name: 'Data Structures & Algorithms',
          desc: 'Smart India Hackathon algorithms, graph pathfinding, and computational geometry.',
          depth: 'CORE',
        },
      ],
    },
    {
      letter: 'B',
      title: 'Modern Frontend & Systems',
      items: [
        {
          name: 'React 18 / Next.js',
          desc: 'Built high-performance SSR/SSG web applications, state synchronization, and component libraries.',
          depth: 'PRODUCTION',
          highlight: true,
        },
        {
          name: 'Tailwind CSS & Tokens',
          desc: 'Engineered strict design tokens, editorial typography scales, and responsive dark themes.',
          depth: '4+ YRS',
        },
        {
          name: 'Framer Motion',
          desc: 'Crafted fluid micro-interactions, layout transitions, and tactile user feedback.',
          depth: 'ADVANCED',
        },
        {
          name: 'WebSockets & Streaming',
          desc: 'Real-time client telemetry, live pub/sub feeds, and event-driven sockets.',
          depth: 'PRODUCTION',
        },
        {
          name: 'Vite & Build Tooling',
          desc: 'Configured sub-second HMR builds, code-splitting bundles, and asset optimization.',
          depth: 'PRODUCTION',
        },
      ],
    },
    {
      letter: 'C',
      title: 'Backend & Distributed Systems',
      items: [
        {
          name: 'Node.js & Express',
          desc: 'High-throughput RESTful services, middleware pipelines, and webhook handlers.',
          depth: '4+ YRS',
        },
        {
          name: 'Supabase & Postgres RLS',
          desc: 'Row Level Security policies, relational models, and real-time database listeners.',
          depth: '3+ YRS',
          highlight: true,
        },
        {
          name: 'Redis & Caching',
          desc: 'In-memory session caching, rate-limiting layers, and zero-copy data stores.',
          depth: 'PRODUCTION',
        },
        {
          name: 'RAG & Vector Search',
          desc: 'Engineered semantic retrieval pipelines with pgvector embeddings and LLM routing.',
          depth: 'AI SYSTEMS',
        },
        {
          name: 'Distributed Microservices',
          desc: 'Decoupled service architectures with typed contracts and latency monitoring.',
          depth: 'PRODUCTION',
        },
      ],
    },
    {
      letter: 'D',
      title: 'Tooling, Ops & Infrastructure',
      items: [
        {
          name: 'Docker & Containers',
          desc: 'Containerized microservices and reproducible dev-to-prod deployment environments.',
          depth: 'PRODUCTION',
          highlight: true,
        },
        {
          name: 'Git & GitHub Workflows',
          desc: 'Maintained CI/CD deployment actions, trunk-based branching, and code reviews.',
          depth: 'DAILY',
        },
        {
          name: 'Linux & Shell Scripting',
          desc: 'Server administration, daemon supervisors, and bash automation scripts.',
          depth: 'PROFICIENT',
        },
        {
          name: 'Cloudflare / Vercel / Render',
          desc: 'Edge CDN routing, serverless function deployments, and custom domain SSL.',
          depth: 'PRODUCTION',
        },
        {
          name: 'Performance Profiling',
          desc: 'Core Web Vitals tuning, memory leak debugging, and bundle size reduction.',
          depth: 'ADVANCED',
        },
      ],
    },
  ],
  freelancer: [
    {
      letter: 'A',
      title: 'Product & Strategy',
      items: [
        {
          name: 'Product Roadmapping',
          desc: 'Directed quarterly roadmaps aligned to core business KPIs across agile founder sprints.',
          depth: 'LEAD',
          highlight: true,
        },
        {
          name: 'User Research & Discovery',
          desc: 'Conducted 40+ deep user discovery interviews and usability tests to validate features.',
          depth: 'USER-FIRST',
        },
        {
          name: 'Go-to-Market Strategy',
          desc: 'Architected launch positioning, marketing funnels, and enterprise sales collateral.',
          depth: 'STRATEGY',
        },
        {
          name: 'Data Analysis & Metrics',
          desc: 'Built funnel drop-off models, retention cohorts, and unit economic projections.',
          depth: 'ANALYTICS',
        },
        {
          name: 'Agile MVP Scoping',
          desc: 'Scoped 3-week end-to-end deliverables to maximize speed-to-market.',
          depth: 'VELOCITY',
        },
      ],
    },
    {
      letter: 'B',
      title: 'Modern Full-Stack & UI',
      items: [
        {
          name: 'React 18 / Next.js',
          desc: 'Built this portfolio, client platforms, and multiple production-grade frontends.',
          depth: 'PRODUCTION',
          highlight: true,
        },
        {
          name: 'Tailwind CSS & Editorial UI',
          desc: 'Delivered distinctive, bespoke brand aesthetics without generic template feel.',
          depth: 'DESIGN-SYSTEMS',
        },
        {
          name: 'TypeScript Delivery',
          desc: 'End-to-end type safety preventing runtime regressions in production builds.',
          depth: 'PRODUCTION',
        },
        {
          name: 'Interactive Motion & 3D',
          desc: 'Engaging micro-interactions and visual depth that elevate brand perception.',
          depth: 'CREATIVE',
        },
        {
          name: 'Headless CMS Architecture',
          desc: 'Connected Sanity, Strapi, and headless platforms for effortless client publishing.',
          depth: 'FLEXIBLE',
        },
      ],
    },
    {
      letter: 'C',
      title: 'Data, Auth & Payments',
      items: [
        {
          name: 'Supabase & PostgreSQL',
          desc: 'Managed auth workflows, real-time sync listeners, and Row Level Security policies.',
          depth: 'SCALABLE',
          highlight: true,
        },
        {
          name: 'Stripe Billing & Checkout',
          desc: 'Implemented subscription billing, one-off payments, and webhook reconciliation.',
          depth: 'PAYMENTS',
        },
        {
          name: 'AI & LLM Integration',
          desc: 'Integrated LLM reasoning endpoints, streaming completions, and prompt routing.',
          depth: 'AI APPS',
        },
        {
          name: 'Webhooks & Automation',
          desc: 'Connected third-party SaaS tools, transactional emails, and CRM updates.',
          depth: 'AUTOMATION',
        },
        {
          name: 'Analytics & GA4 Events',
          desc: 'Implemented custom measurement protocol events and user cohort tracking.',
          depth: 'MEASUREMENT',
        },
      ],
    },
    {
      letter: 'D',
      title: 'Ship, Deploy & Scale',
      items: [
        {
          name: 'Figma to Production Code',
          desc: 'Engineered comprehensive design tokens, interactive prototypes, and auto-layout systems.',
          depth: 'PIXEL-PERFECT',
          highlight: true,
        },
        {
          name: 'Vercel & Render Hosting',
          desc: 'Constructed zero-downtime deployment pipelines with preview branch environments.',
          depth: 'DEV-OPS',
        },
        {
          name: 'Stitch Design Workflows',
          desc: 'Rapid UI prototype validation and collaborative multi-variant design iteration.',
          depth: 'ATELIER',
        },
        {
          name: 'Git Version Control',
          desc: 'Clean version history, maintainable pull requests, and automated testing.',
          depth: 'DISCIPLINE',
        },
        {
          name: 'SEO & Web Vitals Audit',
          desc: 'Lighthouse 95+ score optimization, meta tags, and structured schema data.',
          depth: 'GROWTH',
        },
      ],
    },
  ],
};

export default function Skills() {
  const { persona } = usePersona();
  const columns = SKILLS_DATA[persona] || SKILLS_DATA.developer;

  const defaultSkill = columns[0].items[0];
  const [hoveredSkill, setHoveredSkill] = useState(defaultSkill);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseMove = (e) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  return (
    <section id="skills" className="py-20 border-t border-charcoal/20">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-12">
        {/* Section Marker & Title */}
        <div className="w-full mb-10 sm:mb-12">
          <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-wider text-charcoal/70 pb-3 select-none">
            <span className="text-terracotta font-semibold">04 //</span>
            <span className="tracking-widest">WORKING RANGE</span>
            <span className="text-charcoal/30">·</span>
            <span className="text-charcoal/50">CAPABILITIES</span>
          </div>
          <div className="w-full h-px bg-charcoal/20 mb-8" />
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-charcoal">
            Technical competencies, tooling, and domain scope<span className="text-terracotta">.</span>
          </h2>
          <p className="font-mono text-[11px] sm:text-xs tracking-[0.16em] uppercase text-charcoal/60 mt-4">
            Hover any line for where it was used in anger.
          </p>
        </div>

        {/* 4-Column Capabilities Matrix */}
        <div
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          className="relative w-full border border-charcoal/20 bg-[#FAF8F5]"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 lg:divide-x divide-charcoal/20">
            {columns.map((col, colIdx) => (
              <div
                key={colIdx}
                className="flex flex-col sm:border-b lg:border-b-0 sm:last:border-b-0 border-charcoal/20"
              >
                {/* Column Header */}
                <div className="pt-4 pb-5 px-4 sm:px-5 border-b border-charcoal/20 bg-linen/50 select-none">
                  <span className="font-mono text-[11px] sm:text-xs font-semibold tracking-wider uppercase text-charcoal block truncate">
                    <span className="text-terracotta mr-1.5">{col.letter}.</span> {col.title}
                  </span>
                </div>

                {/* Skills Rows */}
                <ul className="divide-y divide-charcoal/10 flex-1">
                  {col.items.map((item, itemIdx) => {
                    const isCurrent = hoveredSkill.name === item.name;

                    return (
                      <li
                        key={itemIdx}
                        onMouseEnter={() => setHoveredSkill(item)}
                        className={`px-4 sm:px-5 py-3 cursor-pointer group transition-colors duration-150 flex items-center justify-between ${
                          isCurrent ? 'bg-[#EDE7E0]/70' : 'hover:bg-[#EDE7E0]/40'
                        }`}
                      >
                        <span
                          className={`text-[13.5px] sm:text-[14px] font-sans transition-colors ${
                            isCurrent
                              ? 'text-terracotta font-medium'
                              : 'text-charcoal group-hover:text-terracotta'
                          }`}
                        >
                          {item.name}
                        </span>

                        {item.highlight && (
                          <span
                            title="Primary Production Competency"
                            className="w-1.5 h-1.5 rounded-full bg-terracotta/80 shrink-0 ml-2"
                          />
                        )}
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Floating Dark Tooltip (Desktop) */}
        {isHovering && hoveredSkill && (
          <aside
            aria-live="polite"
            className="hidden lg:block fixed z-50 pointer-events-none rounded-[2px] bg-[#191816] border border-[#2C2A26] px-4 py-3.5 w-[280px] shadow-2xl text-left transition-all duration-75 ease-out"
            style={{
              left: `${mousePos.x + 16}px`,
              top: `${mousePos.y + 16}px`,
            }}
          >
            <div className="font-mono text-[11px] font-bold tracking-[0.14em] uppercase text-terracotta mb-1 flex items-center justify-between">
              <span>{hoveredSkill.name}</span>
              <span className="text-[9px] text-[#8C8880] font-normal tracking-wider">
                {hoveredSkill.depth}
              </span>
            </div>
            <div className="font-sans text-[12px] leading-[1.5] text-[#ECEAE5] font-normal">
              {hoveredSkill.desc}
            </div>
          </aside>
        )}

        {/* Mobile / Tablet Responsive Spec Card */}
        <div className="mt-4 p-4 border border-charcoal/20 bg-[#FAF8F5] lg:hidden">
          <div className="font-mono text-[11px] font-bold uppercase tracking-wider text-terracotta mb-1 flex items-center justify-between">
            <span>SPEC: {hoveredSkill.name}</span>
            <span className="text-[10px] text-charcoal/60">{hoveredSkill.depth}</span>
          </div>
          <p className="font-sans text-xs text-charcoal/80 leading-relaxed">
            {hoveredSkill.desc}
          </p>
        </div>
      </div>
    </section>
  );
}
