import { useState } from 'react';
import { Copy, Check, ArrowUpRight } from 'lucide-react';
import { usePersona } from '../context/PersonaContext';

export default function Contact() {
  const { persona } = usePersona();
  const [copied, setCopied] = useState(false);
  const email = 'omkar30rj@gmail.com';

  const handleCopy = async () => {
    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(email);
      } else {
        // Fallback for older browser contexts
        const textArea = document.createElement('textarea');
        textArea.value = email;
        textArea.style.position = 'fixed';
        textArea.style.opacity = '0';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2400);
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  };

  return (
    <section id="contact" className="py-24 border-t border-charcoal/20">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-12">
        {/* Top Marker & Hairline Spec Header */}
        <header className="w-full mb-10 sm:mb-14">
          <div className="flex items-center justify-between pb-3.5">
            <div className="flex items-center space-x-3 text-[11px] sm:text-xs font-mono uppercase tracking-[0.22em]">
              <span className="text-terracotta font-semibold">06 /</span>
              <span className="text-charcoal/70 uppercase">SIGNOFF</span>
            </div>
            <div className="hidden sm:flex items-center gap-2 font-mono text-[10.5px] uppercase tracking-widest text-charcoal/60">
              <span>DIRECT INBOX</span>
              <span className="text-terracotta">●</span>
              <span>AVAILABLE Q2–Q3</span>
            </div>
          </div>
          {/* Hairline Divider */}
          <div className="w-full h-px bg-charcoal/20" />
        </header>

        {/* Editorial Headline & Narrative */}
        <div className="mt-8 md:mt-12">
          <h2 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[76px] font-normal tracking-tight text-charcoal leading-[1.05] max-w-4xl">
            Let's build something enduring together<span className="text-terracotta">.</span>
          </h2>

          {/* Persona Adaptability Subtext */}
          <div className="mt-8 sm:mt-10 max-w-2xl text-[15px] sm:text-[16px] text-charcoal/80 leading-relaxed font-sans space-y-3">
            {persona === 'developer' ? (
              <>
                <p>
                  I'm actively exploring core software engineering roles, distributed systems challenges, and high-leverage open-source initiatives. Let's engineer systems designed with mechanical sympathy and resilient foundations.
                </p>
                <p className="text-charcoal/70">
                  Technical questions, architecture proposals, or engineering team inquiries: the inbox is open.
                </p>
              </>
            ) : (
              <>
                <p>
                  Available for select client engagements, end-to-end MVP engineering, technical advisory, and sprint-based product builds. I partner with founders to take ambitious software from concept to launch in weeks, not quarters.
                </p>
                <p className="text-charcoal/70">
                  Have a venture, workflow tool, or scoped web product in mind? Let's discuss your timeline and roadmap.
                </p>
              </>
            )}
          </div>
        </div>

        {/* Interactive Call-to-Action Zone */}
        <div className="mt-12 sm:mt-16 pt-2">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-4">
            {/* Prominent Mailto Link + Copy Action */}
            <div className="space-y-4">
              <span className="block font-mono text-[11px] sm:text-xs uppercase tracking-[0.2em] text-charcoal/60">
                PRIMARY CONTACT CHANNEL
              </span>

              <div className="flex flex-wrap items-center gap-4 sm:gap-6">
                <a
                  href={`mailto:${email}`}
                  className="contact-link group inline-flex items-center text-2xl sm:text-3xl md:text-[38px] lg:text-[42px] font-serif font-normal text-charcoal pb-2 border-b-2 border-charcoal hover:text-terracotta hover:border-terracotta transition-colors duration-200"
                  title="Click to compose an email"
                >
                  <span className="break-all sm:break-normal">{email}</span>
                  <span className="ml-3.5 inline-block text-xl sm:text-2xl md:text-3xl font-sans transition-transform duration-200 ease-out group-hover:translate-x-2">
                    →
                  </span>
                </a>

                {/* Direct Copy Button */}
                <button
                  type="button"
                  onClick={handleCopy}
                  className="inline-flex items-center gap-2 px-3.5 py-2 border border-charcoal/30 hover:border-charcoal bg-[#FAF8F5] text-charcoal font-mono text-[11px] sm:text-xs uppercase tracking-wider transition-all duration-150 hover:text-terracotta active:scale-95 shadow-sm"
                  aria-label="Copy email address"
                  title="Copy email to clipboard"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-terracotta stroke-[2.5]" />
                      <span className="text-terracotta font-semibold">COPIED</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 stroke-[1.75]" />
                      <span>COPY ADDRESS</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Response-Time Stamp Badge */}
            <div className="flex items-center self-start lg:self-end">
              <div
                className="border border-terracotta/90 rounded-[2px] px-3 py-1.5 text-terracotta font-mono text-[10.5px] sm:text-[11px] font-semibold tracking-[0.16em] uppercase select-none shadow-sm bg-linen/90 inline-flex items-center gap-2.5 transform rotate-1 sm:rotate-2 hover:rotate-0 transition-transform duration-200"
                title="Standard response expectation"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-terracotta opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-terracotta"></span>
                </span>
                <span>REPLIES FAST · &lt; 24 HOURS</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Status & Channel Strip */}
        <div className="mt-16 sm:mt-20 pt-6 border-t border-charcoal/20">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 font-mono text-[11px] sm:text-xs">
            {/* Status Indicator */}
            <div className="flex items-center space-x-2.5 tracking-[0.2em] uppercase text-charcoal/70">
              <span aria-hidden="true" className="inline-block w-2 h-2 rounded-full bg-terracotta animate-pulse" />
              <span>CURRENTLY BUILDING · NASHIK, INDIA (IST)</span>
            </div>

            {/* Outbound Social Channels */}
            <div className="flex items-center gap-5 sm:gap-6 text-charcoal/80 uppercase tracking-widest font-semibold">
              <a
                href="https://github.com/jomkarrr"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-terracotta transition-colors flex items-center gap-1"
              >
                <span>GITHUB</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://www.linkedin.com/in/omkarjadhav24"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-terracotta transition-colors flex items-center gap-1"
              >
                <span>LINKEDIN</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://x.com/theomkarjadhav_"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-terracotta transition-colors flex items-center gap-1"
              >
                <span>X</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Toast Notification on Copy */}
      <div
        aria-live="polite"
        role="status"
        className={`fixed bottom-6 left-1/2 -translate-x-1/2 bg-charcoal text-linen font-mono text-xs px-4 py-2.5 rounded shadow-xl transition-all duration-300 z-50 flex items-center gap-2 border border-charcoal/40 ${
          copied ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-3 pointer-events-none'
        }`}
      >
        <Check className="w-3.5 h-3.5 text-terracotta stroke-[2.5]" />
        <span>omkar30rj@gmail.com copied to clipboard</span>
      </div>
    </section>
  );
}
