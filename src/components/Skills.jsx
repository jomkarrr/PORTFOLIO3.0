import { useState } from 'react';
import { usePersona } from '../context/PersonaContext';

const SKILLS_DATA = {
  developer: [
    {
      letter: 'A',
      title: 'Languages & Core',
      items: [
        {
          name: 'TypeScript / JavaScript',
          desc: 'The language behind everything I ship — typed React apps, React Native screens, and Node.js APIs.',
          depth: 'CORE',
          highlight: true,
        },
        {
          name: 'Python / FastAPI',
          desc: "Backend services and REST APIs — the DIKSHA platform's backend runs on FastAPI.",
          depth: 'PRODUCTION',
        },
        {
          name: 'Java',
          desc: 'My DSA language — LeetCode problem-solving and coursework, where my algorithmic thinking gets trained.',
          depth: 'CORE',
        },
        {
          name: 'SQL / PostgreSQL',
          desc: 'Relational schemas, queries, and Row-Level Security policies, designed and run on Supabase Postgres.',
          depth: 'PRODUCTION',
        },
        {
          name: 'Data Structures & Algorithms',
          desc: 'Consistent LeetCode practice in Java — arrays, graphs, and dynamic programming.',
          depth: 'ONGOING',
        },
      ],
    },
    {
      letter: 'B',
      title: 'Frontend & Mobile',
      items: [
        {
          name: 'React / Next.js',
          desc: "This portfolio, the Campus Eats landing site, and DIKSHA's web app — component-driven interfaces built with Vite and Next.js.",
          depth: 'PRODUCTION',
          highlight: true,
        },
        {
          name: 'React Native / Expo',
          desc: 'CampusEats — a two-sided food-ordering app for students and delivery partners, shipped as a v1.0 Android release.',
          depth: 'SHIPPED',
        },
        {
          name: 'Tailwind CSS',
          desc: 'Utility-first styling and design tokens across every project — including NativeWind in React Native.',
          depth: 'DAILY',
        },
        {
          name: 'Three.js & Motion',
          desc: 'Interactive 3D and micro-interactions, used where a page needs life.',
          depth: 'TOOLKIT',
        },
        {
          name: 'Vite & Build Tooling',
          desc: 'Every web project I run starts on Vite — fast development builds and code-split production bundles.',
          depth: 'DAILY',
        },
      ],
    },
    {
      letter: 'C',
      title: 'Backend & Data',
      items: [
        {
          name: 'Node.js & Express',
          desc: 'REST APIs built with Express — routing, middleware, and JSON services behind my web projects.',
          depth: 'HANDS-ON',
        },
        {
          name: 'Supabase & Postgres RLS',
          desc: 'Authentication, relational data, and Row-Level Security policies — the backend of CampusEats and Aptive Studio.',
          depth: 'PRODUCTION',
          highlight: true,
        },
        {
          name: 'REST API Design',
          desc: 'Designing and consuming APIs end-to-end — FastAPI and Express services wired into React frontends.',
          depth: 'PRODUCTION',
        },
        {
          name: 'Realtime Data',
          desc: 'Live order updates in CampusEats through Supabase Realtime — the app reacts the moment the data changes.',
          depth: 'SHIPPED',
        },
        {
          name: 'Auth & Access Control',
          desc: 'Email auth, user roles, and row-level policies — every user sees only what belongs to them.',
          depth: 'PRODUCTION',
        },
      ],
    },
    {
      letter: 'D',
      title: 'Tooling & Deployment',
      items: [
        {
          name: 'Git & GitHub',
          desc: 'Where all my code lives — daily commits, branches, and pull requests across my repositories.',
          depth: 'DAILY',
          highlight: true,
        },
        {
          name: 'Cloudflare / Vercel / Render',
          desc: 'Where my work goes live — this portfolio auto-deploys to Cloudflare from GitHub; other projects run on Vercel and Render.',
          depth: 'PRODUCTION',
        },
        {
          name: 'EAS Builds & Releases',
          desc: 'CampusEats was packaged through Expo EAS — a real installable APK, published as GitHub Release v1.0.0.',
          depth: 'SHIPPED',
        },
        {
          name: 'Terminal & Shell',
          desc: 'Comfortable on the command line — git, package managers, dev servers, and local tooling, every day.',
          depth: 'DAILY',
        },
        {
          name: 'AI-Assisted Workflow',
          desc: 'I build with AI in the loop — planning, reviewing, and shipping faster, with every line checked before it lands.',
          depth: 'DAILY',
        },
      ],
    },
  ],
  freelancer: [
    {
      letter: 'A',
      title: 'What I Build',
      items: [
        {
          name: 'Web Applications',
          desc: 'Complete web apps — dashboards, platforms, and tools — built with React/Next.js and a real backend, not static mockups.',
          depth: 'END-TO-END',
          highlight: true,
        },
        {
          name: 'Mobile Apps',
          desc: 'Cross-platform Android apps with React Native & Expo — CampusEats, shipped as a released v1.0 build, is the proof.',
          depth: 'SHIPPED',
        },
        {
          name: 'Landing Pages & Sites',
          desc: 'Fast, distinctive marketing sites that load quickly and read clearly — the Campus Eats site is live on Cloudflare.',
          depth: 'LIVE',
        },
        {
          name: 'MVP Builds',
          desc: 'Your idea scoped to its essential core and built first — so you can launch and test instead of waiting.',
          depth: 'LEAN',
        },
        {
          name: 'Design-to-Code (Stitch)',
          desc: 'Google Stitch designs turned into production code — what gets approved is exactly what gets built.',
          depth: 'WORKFLOW',
        },
      ],
    },
    {
      letter: 'B',
      title: 'Frontend Craft',
      items: [
        {
          name: 'React / Next.js',
          desc: 'Modern, maintainable frontends — this portfolio and my client-facing builds run on it.',
          depth: 'PRODUCTION',
          highlight: true,
        },
        {
          name: 'Tailwind & Design Systems',
          desc: 'Consistent colors, typography, and spacing tokens — your product looks deliberate on every screen.',
          depth: 'DESIGN-SYSTEMS',
        },
        {
          name: 'TypeScript',
          desc: 'Typed code from day one — fewer surprises as your product grows.',
          depth: 'PRODUCTION',
        },
        {
          name: 'Responsive, Mobile-First',
          desc: 'Every layout tested on real phone widths first — most of your users are on mobile.',
          depth: 'ALWAYS',
        },
        {
          name: 'Interactive & 3D Touches',
          desc: 'Three.js and motion where it serves the brand — flair with a purpose, never decoration for its own sake.',
          depth: 'CREATIVE',
        },
      ],
    },
    {
      letter: 'C',
      title: 'Backend, Data & Auth',
      items: [
        {
          name: 'Supabase & PostgreSQL',
          desc: 'Database, login, and storage set up securely — Row-Level Security ensures users only ever see their own data.',
          depth: 'SECURE',
          highlight: true,
        },
        {
          name: 'Node.js / Express APIs',
          desc: 'Custom APIs when your product needs its own logic — built with Express or FastAPI.',
          depth: 'HANDS-ON',
        },
        {
          name: 'Python / FastAPI Services',
          desc: 'Fast, documented APIs in Python — the stack behind the DIKSHA platform.',
          depth: 'PRODUCTION',
        },
        {
          name: 'Auth & User Roles',
          desc: 'Sign-up, login, and role-based access — customers, partners, and admins each get their own view.',
          depth: 'INCLUDED',
        },
        {
          name: 'Realtime Features',
          desc: 'Live updates without refresh — order status, feeds, and dashboards, powered by Supabase Realtime.',
          depth: 'LIVE',
        },
      ],
    },
    {
      letter: 'D',
      title: 'Ship & Support',
      items: [
        {
          name: 'Deployment & Hosting',
          desc: 'Your product goes live on Cloudflare, Vercel, or Render — with your domain connected and SSL on.',
          depth: 'LIVE',
          highlight: true,
        },
        {
          name: 'Android Release',
          desc: 'For mobile projects: a real installable APK build via Expo EAS, ready to share or publish.',
          depth: 'SHIPPED',
        },
        {
          name: 'Git & Handover',
          desc: 'A clean GitHub history from day one — and at the end, the code is yours, in your repository.',
          depth: 'YOURS',
        },
        {
          name: 'Direct Communication',
          desc: 'You talk directly to the developer building your product — me. No account managers, no lost messages.',
          depth: 'ALWAYS',
        },
        {
          name: 'Post-Launch Support',
          desc: 'I stay reachable after launch for fixes and small iterations — products need care after day one.',
          depth: 'INCLUDED',
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
