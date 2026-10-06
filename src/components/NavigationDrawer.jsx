import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowUpRight } from 'lucide-react';

const NAV_ITEMS = [
  { num: '01', label: 'Home', href: '#hero' },
  { num: '02', label: 'About', href: '#about' },
  { num: '03', label: 'Experience', href: '#experience' },
  { num: '04', label: 'Skills', href: '#skills' },
  { num: '05', label: 'Open Source', href: '#opensource' },
  { num: '06', label: 'Contact', href: '#contact' },
];

export default function NavigationDrawer({ isOpen = false, onClose = () => {} }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-charcoal/40 backdrop-blur-sm z-50 cursor-pointer"
            aria-hidden="true"
          />

          {/* Slide-out Index Drawer */}
          <motion.aside
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'tween', duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="fixed top-0 right-0 h-full w-full max-w-[360px] bg-[#FAF8F5] border-l border-borderDark z-50 shadow-2xl flex flex-col justify-between select-none"
            role="dialog"
            aria-modal="true"
            aria-label="Table of Contents"
          >
            <div>
              {/* Drawer Header */}
              <div className="px-6 py-5 flex items-center justify-between border-b border-borderDark/20">
                <span className="font-mono text-xs font-bold tracking-widest uppercase text-terracotta">
                  INDEX · CONTENTS
                </span>
                <button
                  type="button"
                  onClick={onClose}
                  aria-label="Close index contents"
                  className="w-8 h-8 border border-borderDark/40 flex items-center justify-center text-charcoal hover:bg-terracotta hover:text-linen hover:border-terracotta transition-colors"
                >
                  <X className="w-4 h-4 stroke-[2]" />
                </button>
              </div>

              {/* Numbered Navigation Links */}
              <nav className="py-3 flex flex-col font-sans text-sm font-medium">
                {NAV_ITEMS.map((item) => (
                  <a
                    key={item.num}
                    href={item.href}
                    onClick={onClose}
                    className="px-6 py-2.5 flex items-center justify-between text-charcoal hover:text-terracotta hover:bg-linenMuted/50 transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <span className="font-mono text-xs text-charcoal/50 group-hover:text-terracotta transition-colors">
                        {item.num}
                      </span>
                      <span>{item.label}</span>
                    </div>
                    <span className="font-mono text-xs text-charcoal/40 group-hover:text-terracotta transition-colors">
                      &gt;
                    </span>
                  </a>
                ))}
              </nav>
            </div>

            {/* Archival External Links & Footer */}
            <div className="p-6 border-t border-borderDark/20 flex flex-col items-center gap-4 bg-linen/50">
              <div className="flex items-center justify-center gap-3 w-full">
                <a
                  href="https://github.com/jomkarrr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2 px-3 border border-borderDark/40 hover:border-borderDark hover:text-terracotta text-charcoal text-xs font-mono font-medium flex items-center justify-center gap-1.5 transition-colors bg-[#FAF8F5]"
                >
                  <span>GITHUB</span>
                  <ArrowUpRight className="w-3.5 h-3.5 stroke-[1.75]" />
                </a>
                <a
                  href="https://www.linkedin.com/in/omkarjadhav24"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2 px-3 border border-borderDark/40 hover:border-borderDark hover:text-terracotta text-charcoal text-xs font-mono font-medium flex items-center justify-center gap-1.5 transition-colors bg-[#FAF8F5]"
                >
                  <span>LINKEDIN</span>
                  <ArrowUpRight className="w-3.5 h-3.5 stroke-[1.75]" />
                </a>
                <a
                  href="https://x.com/theomkarjadhav_"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2 px-3 border border-borderDark/40 hover:border-borderDark hover:text-terracotta text-charcoal text-xs font-mono font-medium flex items-center justify-center gap-1.5 transition-colors bg-[#FAF8F5]"
                >
                  <span>X</span>
                  <ArrowUpRight className="w-3.5 h-3.5 stroke-[1.75]" />
                </a>
              </div>

              <a
                href="mailto:omkar30rj@gmail.com"
                className="font-mono text-xs text-charcoal/80 hover:text-terracotta transition-colors tracking-tight"
              >
                omkar30rj@gmail.com
              </a>

              <span className="text-[10px] text-charcoal/50 font-mono tracking-tight text-center">
                © 2026 Omkar Jadhav. All rights reserved.
              </span>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
