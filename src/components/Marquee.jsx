import { usePersona } from '../context/PersonaContext';

const DEVELOPER_ITEMS = [
  'System designer',
  'Fullstack developer',
  'Open source contributer',
  'DSA learner',
  '24 COMMITS THIS WEEK',
];

const FREELANCER_ITEMS = [
  'RAPID 3-WEEK MVP LAUNCHES',
  '100% CLIENT SATISFACTION',
  'HIGH-CONVERTING PRODUCT DESIGN',
  'NEXT.JS & SUPABASE ARCHITECTURES',
  'END-TO-END PRODUCT DELIVERY',
  'AVAILABLE FOR SELECT ENGAGEMENTS',
  'EDITORIAL INTERACTION SYSTEMS',
  
];

export default function Marquee() {
  const { persona } = usePersona();
  const items = persona === 'developer' ? DEVELOPER_ITEMS : FREELANCER_ITEMS;

  return (
    <section className="w-full bg-[#E8E2D8] border-b border-borderDark py-3 sm:py-3.5 select-none overflow-hidden">
      <div className="flex whitespace-nowrap overflow-hidden">
        <div className="animate-marquee flex items-center gap-10 font-mono text-[11px] sm:text-xs font-semibold tracking-widest uppercase text-charcoal">
          {/* Set 1 */}
          <div className="flex items-center gap-10">
            {items.map((item, idx) => (
              <span key={`s1-${idx}`} className="flex items-center gap-10">
                <span>{item}</span>
                <span className="text-terracotta text-xs">✦</span>
              </span>
            ))}
          </div>

          {/* Set 2 (Duplicate for seamless loop) */}
          <div aria-hidden="true" className="flex items-center gap-10">
            {items.map((item, idx) => (
              <span key={`s2-${idx}`} className="flex items-center gap-10">
                <span>{item}</span>
                <span className="text-terracotta text-xs">✦</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
