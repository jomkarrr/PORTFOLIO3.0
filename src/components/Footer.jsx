export default function Footer() {
  return (
    <footer className="border-t border-charcoal/20 bg-linen w-full relative">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-12 py-5 flex items-center justify-between text-[11px] font-mono tracking-wider text-charcoal/70 uppercase">
        {/* Left Copyright */}
        <span className="whitespace-nowrap">© 2026 OMKAR JADHAV</span>

        {/* Single-Line Colophon Text (Hidden on mobile, single line on md+) */}
        <p className="hidden md:block whitespace-nowrap text-center">
          · WRITTEN, DESIGNED &amp; BUILT BY HAND
        </p>

        {/* Right Social Links */}
        <div className="flex items-center space-x-6">
          <a
            href="https://github.com/jomkarrr"
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-4 hover:text-[#C85338] transition-colors"
          >
            GITHUB
          </a>
          <a
            href="https://www.linkedin.com/in/omkarjadhav24"
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-4 hover:text-[#C85338] transition-colors"
          >
            LINKEDIN
          </a>
          <a
            href="https://x.com/theomkarjadhav_"
            target="_blank"
            rel="noreferrer"
            className="underline underline-offset-4 hover:text-[#C85338] transition-colors"
          >
            X
          </a>
        </div>
      </div>
    </footer>
  );
}
