import { Download, FileText } from 'lucide-react';
import { usePersona } from '../context/PersonaContext';

export default function About() {
  const { persona } = usePersona();
  const isDeveloper = persona === 'developer';

  return (
    <section id="about" className="py-20 border-t border-charcoal/20">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-12">
        {/* Section Marker & Title */}
        <div className="w-full mb-10 sm:mb-12">
          <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-wider text-charcoal/70 pb-3 select-none">
            <span className="text-terracotta font-semibold">02 //</span>
            <span className="tracking-widest">ABOUT</span>
            <span className="text-charcoal/50">ME</span>
          </div>
          <div className="w-full h-px bg-charcoal/20 mb-8" />
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-charcoal">
            Building meaningful <span className="italic text-terracotta font-normal">Digital experience</span>.
          </h2>
        </div>

        {/* Two-Column Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          {/* Left Column: Narrative Bio */}
          <div className="lg:col-span-7 flex flex-col pt-1">
            <h3 className="font-serif italic text-2xl sm:text-3xl text-charcoal font-normal leading-snug tracking-tight mb-6">
              {isDeveloper
                ? 'A engineer who refuses to pick a side between mathematical logic and design craft.'
                : 'Your dedicated tech partner.'}
            </h3>

            <div className="text-base sm:text-[16px] text-charcoal/90 leading-relaxed space-y-5 font-sans font-normal">
              {isDeveloper ? (
                <>
                  <p>
                    I&apos;m <strong className="font-semibold text-charcoal">Omkar Jadhav</strong>, a product-minded software engineer building scalable full-stack architectures and thoughtful user experiences. My journey began with an obsession for pixel-perfect frontends and evolved into a deep fascination with how <span className="italic text-terracotta font-medium">distributed systems, databases, and network brokers</span> operate under extreme throughput.
                  </p>
                  <p>
                    I treat every <strong className="font-medium text-charcoal">commit </strong>as a product and usability decision. When I&apos;m not writing code, I analyze systems architecture, optimize query execution, and contribute to open-source tooling. I believe in continuous craftsmanship, attention to micro-details, and the <span className="italic text-terracotta font-medium">compounding power of clean abstractions</span>.
                  </p>
                </>
              ) : (
                <>
                  <p>
                    I&apos;m <strong className="font-semibold text-charcoal">Omkar Jadhav</strong>, an independent digital product engineer partnering with ambitious founders and fast-moving teams to build and launch production web applications from scratch. With 2+ years of experience in modern full-stack development and Web3 integrations, I bridge the gap between design engineering and rock-solid infrastructure.
                  </p>
                  <p>
                    I operate as an agile, full-cycle technical partner—taking ideas from zero-to-one with rapid MVP prototypes, robust database modeling, and conversion-focused design systems. No bureaucratic agency bloat or communication loss; just rapid delivery, meticulous craft, and a relentless focus on <span className="italic text-terracotta font-medium">measurable venture outcomes</span>.
                  </p>
                </>
              )}
            </div>

            {/* Section Divider & Attachments */}
            <div className="w-full h-px bg-charcoal/20 mt-10 mb-6" />
            <div className="flex flex-col">
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-charcoal/60 mb-3 block">
                ATTACHMENTS · PICK YOUR LENS
              </span>
              <div className="divide-y divide-charcoal/15 border-b border-charcoal/15">
                <a
                  href="#download-product"
                  className="group flex items-center justify-between py-3 px-1 -mx-1 hover:bg-charcoal/5 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <FileText className="w-4 h-4 text-charcoal/60 group-hover:text-terracotta transition-colors" />
                    <span className="font-mono text-xs sm:text-sm text-charcoal font-semibold tracking-tight">
                      resume-product.pdf
                    </span>
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-terracotta" />
                    <span className="text-charcoal/60 text-xs hidden sm:inline">Product Resume</span>
                  </div>
                  <Download className="w-4 h-4 text-charcoal/50 group-hover:text-terracotta transition-transform group-hover:translate-y-0.5" />
                </a>
                <a
                  href="#download-developer"
                  className="group flex items-center justify-between py-3 px-1 -mx-1 hover:bg-charcoal/5 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <FileText className="w-4 h-4 text-charcoal/60 group-hover:text-terracotta transition-colors" />
                    <span className="font-mono text-xs sm:text-sm text-charcoal font-semibold tracking-tight">
                      resume-developer.pdf
                    </span>
                    <span className="inline-block w-1.5 h-1.5 rounded-full bg-terracotta" />
                    <span className="text-charcoal/60 text-xs hidden sm:inline">Technical Resume</span>
                  </div>
                  <Download className="w-4 h-4 text-charcoal/50 group-hover:text-terracotta transition-transform group-hover:translate-y-0.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Framed Portrait / Archival Spec Card */}
          <div className="lg:col-span-5 relative flex flex-col items-center lg:items-end justify-start">
            <div className="relative z-10 w-full max-w-[420px]">
              <div className="border border-charcoal bg-linenMuted p-3 sm:p-4 shadow-lg relative">
                {/* Inner Image Frame */}
                <div className="overflow-hidden bg-[#E7E2DA] border border-charcoal/20 aspect-[4/4.8] relative group">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDpc9PLJZ3tdY77WtWWsmNjFzq2LxNYaxLzKmw6XhXgLrv6hU0G1jk_XqJAbvSX4xLGzUi1Ah0AKCekUjyLpFuGGXthnn2tGGL321YrmhfUHF-doj9e6_pulHDl2ovFccbpv-n3kuiH5WA8UF22I0kG7FNfwJh5aSo12bfZQkonLVZT4yxHPQes751a6VYgyBi_PevG_x8slquPoKbJ3VAzEuFgxbvFKQ-iOsO_B1D4FprF_dJ7l2HiYEygoS5zmO-HSas"
                    alt="Omkar Jadhav — System Architect & Product Engineer"
                    className="w-full h-full object-cover object-center grayscale contrast-105 hover:grayscale-0 transition-all duration-500"
                  />
                  <span className="absolute top-2 left-2 text-[10px] font-mono text-charcoal/70 bg-linen/90 px-1.5 py-0.5 border border-charcoal/20">
                    OJ-26
                  </span>
                </div>

                {/* Editorial Caption Strip */}
                <div className="mt-3 pt-2.5 border-t border-charcoal/15 flex items-center justify-between text-left">
                  <figcaption className="font-mono text-[11px] sm:text-xs uppercase tracking-[0.2em] text-charcoal/70 font-medium select-none">
                    FIG. 01 — OMKAR JADHAV · SYSTEM ARCHITECT
                  </figcaption>
                </div>

                {/* Archival Metadata Tags */}
                <div className="mt-3 pt-2.5 border-t border-charcoal/10 grid grid-cols-2 gap-2.5 font-mono text-[10px] tracking-wider uppercase text-charcoal/60">
                  <div>
                    <span className="text-charcoal/40 block">LOCATION</span>
                    <span className="text-charcoal font-semibold">Maharashtra,INDIA</span>
                  </div>
                  <div>
                    <span className="text-charcoal/40 block">COORDINATES</span>
                    <span className="text-charcoal font-semibold">19.9975° N, 73.7898° E</span>
                  </div>
                  <div>
                    <span className="text-charcoal/40 block">PERSPECTIVE</span>
                    <span className="text-charcoal font-semibold capitalize">{persona}</span>
                  </div>
                  <div>
                    <span className="text-charcoal/40 block">STATUS</span>
                    <span className="text-terracotta font-semibold">● ACTIVE</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
