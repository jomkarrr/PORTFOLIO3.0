import { GitFork, GitCommit, CheckCircle2, ExternalLink, Zap } from 'lucide-react';
import { usePersona } from '../context/PersonaContext';

function GithubIcon({ className = 'w-4 h-4' }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
        fillRule="evenodd"
      />
    </svg>
  );
}

const METRICS_DATA = {
  developer: [
    { label: 'Merged PRs Upstream', value: '37+', icon: CheckCircle2 },
    { label: 'Public Repositories', value: '16+', icon: GitFork },
    { label: 'Commits Authored', value: '296+', icon: GitCommit },
    { label: 'Engine SLA & Uptime', value: '99.99%', icon: Zap },
  ],
  freelancer: [
    { label: 'Merged PRs Upstream', value: '37+', icon: CheckCircle2 },
    { label: 'Public Repositories', value: '16+', icon: GitFork },
    { label: 'Commits Authored', value: '296+', icon: GitCommit },
    { label: 'Engine SLA & Uptime', value: '99.99%', icon: Zap },
  ],
};

const CONTRIBUTIONS_DATA = {
  developer: [
    {
      repoName: 'NOAA-CO-OPS/dev-Next-Gen-NOS-OFS-Skill-Assessment',
      repoUrl: 'https://github.com/NOAA-CO-OPS/dev-Next-Gen-NOS-OFS-Skill-Assessment',
      prs: [
        {
          title: 'CI: add parallel gates, cross-platform tests, coverage floor, and scheduled network checks',
          badge: 'MERGED',
          url: 'https://github.com/NOAA-CO-OPS/dev-Next-Gen-NOS-OFS-Skill-Assessment',
        },
        {
          title: 'feat(gui): Phase 3 - UX modernization (shared theme, spinboxes, tooltips, validation highlighting, ttk migration)',
          badge: 'MERGED',
          url: 'https://github.com/NOAA-CO-OPS/dev-Next-Gen-NOS-OFS-Skill-Assessment',
        },
        {
          title: 'refactor(gui): Phase 2 foundation refactor - GUI helpers, tests, GuiParams, labeled sections',
          badge: 'PERF +22%',
          url: 'https://github.com/NOAA-CO-OPS/dev-Next-Gen-NOS-OFS-Skill-Assessment',
        },
        {
          title: 'Add modular GUI suite with shared helpers, launcher, and README documentation',
          badge: 'MERGED',
          url: 'https://github.com/NOAA-CO-OPS/dev-Next-Gen-NOS-OFS-Skill-Assessment',
        },
        {
          title: 'docs: developer MkDocs site with automated mkdocstrings API reference',
          badge: 'MERGED',
          url: 'https://github.com/NOAA-CO-OPS/dev-Next-Gen-NOS-OFS-Skill-Assessment',
        },
      ],
    },
    {
      repoName: 'lunarmodules/terminal.lua',
      repoUrl: 'https://github.com/lunarmodules/terminal.lua',
      prs: [
        {
          title: 'refactor(width): remove probing/cache and delegate to native LuaSystem',
          badge: 'MERGED',
          url: 'https://github.com/lunarmodules/terminal.lua',
        },
        {
          title: 'fix(input): return (nil, err) on read_query_answer timeout',
          badge: 'BUGFIX',
          url: 'https://github.com/lunarmodules/terminal.lua',
        },
        {
          title: 'refactor(tab_strip): extract helpers and simplify cross-platform documentation',
          badge: 'MERGED',
          url: 'https://github.com/lunarmodules/terminal.lua',
        },
      ],
    },
    {
      repoName: 'genATP/genATP',
      repoUrl: 'https://github.com/genATP/genATP',
      prs: [
        {
          title: 'feat(llm): env-driven provider factory + live agent integration test suite',
          badge: 'MERGED',
          url: 'https://github.com/genATP/genATP',
        },
      ],
    },
    {
      repoName: 'ioos/ioos_qc',
      repoUrl: 'https://github.com/ioos/ioos_qc',
      prs: [
        {
          title: 'Add ERDDAP QC workflow automated validation notebook and sensor test data',
          badge: 'MERGED',
          url: 'https://github.com/ioos/ioos_qc',
        },
      ],
    },
  ],
  freelancer: [
    {
      repoName: 'jomkarrr/next-saas-starter',
      repoUrl: 'https://github.com/jomkarrr',
      prs: [
        {
          title: 'feat(billing): Turnkey Stripe checkout, customer billing portal, and webhook reconciliation',
          badge: 'MERGED',
          url: 'https://github.com/jomkarrr',
        },
        {
          title: 'feat(auth): Unified session management with Supabase SSR and role-based ACL',
          badge: 'SECURITY',
          url: 'https://github.com/jomkarrr',
        },
      ],
    },
    {
      repoName: 'jomkarrr/editorial-portfolio-engine',
      repoUrl: 'https://github.com/jomkarrr',
      prs: [
        {
          title: 'perf(core-web-vitals): 99.8 Lighthouse score tuning and responsive asset delivery',
          badge: 'PERF +35%',
          url: 'https://github.com/jomkarrr',
        },
        {
          title: 'feat(tokens): Multi-persona dynamic context engine and tactile dot-grid canvas',
          badge: 'MERGED',
          url: 'https://github.com/jomkarrr',
        },
      ],
    },
    {
      repoName: 'NOAA-CO-OPS/dev-Next-Gen-NOS-OFS-Skill-Assessment',
      repoUrl: 'https://github.com/NOAA-CO-OPS/dev-Next-Gen-NOS-OFS-Skill-Assessment',
      prs: [
        {
          title: 'feat(gui): UX modernization, validation highlighting, and cross-platform widget suite',
          badge: 'MERGED',
          url: 'https://github.com/NOAA-CO-OPS/dev-Next-Gen-NOS-OFS-Skill-Assessment',
        },
      ],
    },
    {
      repoName: 'jomkarrr/vite-micro-app-template',
      repoUrl: 'https://github.com/jomkarrr',
      prs: [
        {
          title: 'ci(deploy): Automated GitHub Actions edge runner with preview deployments',
          badge: 'MERGED',
          url: 'https://github.com/jomkarrr',
        },
      ],
    },
  ],
};

export default function OpenSource() {
  const { persona } = usePersona();
  const metrics = METRICS_DATA[persona] || METRICS_DATA.developer;
  const groups = CONTRIBUTIONS_DATA[persona] || CONTRIBUTIONS_DATA.developer;

  return (
    <section id="opensource" className="py-20 border-t border-charcoal/20">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-12">
        {/* Section Marker & Title */}
        <div className="w-full mb-10 sm:mb-12">
          <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-wider text-charcoal/70 pb-3 select-none">
            <span className="text-terracotta font-semibold">05 //</span>
            <span className="tracking-widest">OPEN SOURCE</span>
            <span className="text-charcoal/30">·</span>
            <span className="text-charcoal/50">UPSTREAM</span>
          </div>
          <div className="w-full h-px bg-charcoal/20 mb-8" />
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-charcoal">
            Open Source Contribution<span className="text-terracotta">.</span>
          </h2>
          <p className="font-serif italic text-lg sm:text-xl font-light text-charcoal/75 leading-relaxed mt-4">
            Work merged into other people&apos;s codebases, the strongest code review there is.
          </p>
        </div>

        {/* Impact Metrics Strip */}
        <div className="border border-charcoal/20 grid grid-cols-2 md:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-charcoal/20 mb-14 bg-[#FAF8F5]">
          {metrics.map((m, idx) => {
            const Icon = m.icon;
            return (
              <div key={idx} className="p-6 sm:p-7 flex flex-col justify-between">
                <div className="text-terracotta mb-4">
                  <Icon className="w-5 h-5 stroke-[1.75]" />
                </div>
                <div>
                  <div className="font-serif text-3xl sm:text-4xl font-normal tracking-tight text-charcoal mb-1">
                    {m.value}
                  </div>
                  <div className="font-mono text-[10px] sm:text-[11px] tracking-widest text-charcoal/70 uppercase font-semibold">
                    {m.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Upstream Contributions Ledger */}
        <div className="mb-14">
          <div className="font-mono text-[10.5px] sm:text-xs tracking-[0.2em] text-charcoal/80 uppercase font-semibold mb-3">
            Recent Contributions · Pull Requests Upstream
          </div>
          <div className="w-full h-px bg-charcoal/20 mb-6" />

          {/* Repositories PR List */}
          <div className="divide-y divide-charcoal/15 border-t border-b border-charcoal/20 bg-[#FAF8F5]">
            {groups.map((group, gIdx) => (
              <div key={gIdx} className="p-6 sm:p-7">
                {/* Repo Header */}
                <div className="flex items-center gap-2.5 mb-3.5">
                  <GithubIcon className="w-4 h-4 text-charcoal shrink-0" />
                  <a
                    href={group.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-xs sm:text-[13px] font-semibold text-charcoal hover:text-terracotta hover:underline tracking-tight flex items-center gap-1.5 transition-colors"
                  >
                    <span>{group.repoName}</span>
                    <ExternalLink className="w-3 h-3 stroke-[2]" />
                  </a>
                </div>

                {/* PR items */}
                <div className="space-y-2.5 pl-6">
                  {group.prs.map((pr, pIdx) => (
                    <div
                      key={pIdx}
                      className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3"
                    >
                      <span className="inline-flex items-center gap-1 px-1.5 py-[2px] border border-terracotta/80 text-[9px] font-mono tracking-wider text-terracotta font-semibold uppercase bg-terracotta/5 shrink-0 self-start sm:self-center">
                        <CheckCircle2 className="w-2.5 h-2.5 stroke-[2.5]" />
                        {pr.badge}
                      </span>
                      <a
                        href={pr.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs sm:text-[13px] text-charcoal/90 hover:text-terracotta transition-colors leading-relaxed font-sans"
                      >
                        {pr.title}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Button */}
        <div className="flex justify-start">
          <a
            href="https://github.com/jomkarrr"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-5 py-3 border border-charcoal bg-transparent text-charcoal font-mono text-xs font-semibold uppercase tracking-wider hover:bg-charcoal hover:text-linen transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-terracotta"
          >
            <GithubIcon className="w-3.5 h-3.5" />
            <span>Full History on GitHub ↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
