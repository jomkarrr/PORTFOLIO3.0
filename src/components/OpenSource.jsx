import { useEffect, useState } from 'react';
import { GitFork, GitCommit, CheckCircle2, ExternalLink, Zap } from 'lucide-react';

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

const GITHUB_USER = 'jomkarrr';
// Upstream = PRs authored by him in repositories he does NOT own (forked-repo contributions).
const UPSTREAM_QUERY = `author:${GITHUB_USER} type:pr -user:${GITHUB_USER}`;
const MORE_ON_GITHUB_URL = `https://github.com/search?q=${encodeURIComponent(
  UPSTREAM_QUERY
)}&type=pullrequests`;

function formatMonthYear(iso) {
  try {
    return new Date(iso).toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
  } catch {
    return '';
  }
}

function toGroups(items) {
  const groups = [];
  const byRepo = new Map();
  for (const item of items) {
    const repoName = item.repository_url.split('/repos/')[1];
    if (!byRepo.has(repoName)) {
      byRepo.set(repoName, {
        repoName,
        repoUrl: `https://github.com/${repoName}`,
        prs: [],
      });
      groups.push(byRepo.get(repoName));
    }
    const merged = Boolean(item.pull_request && item.pull_request.merged_at);
    byRepo.get(repoName).prs.push({
      title: item.title,
      badge: merged ? 'MERGED' : item.state === 'open' ? 'OPEN' : 'CLOSED',
      url: item.html_url,
      meta: `#${item.number} · ${formatMonthYear(item.created_at)}`,
    });
  }
  return groups;
}

export default function OpenSource() {
  const [groups, setGroups] = useState([]);
  const [status, setStatus] = useState('loading'); // loading | ready | error
  const [counts, setCounts] = useState({ merged: null, authored: null, repos: null });

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        const searchUrl = (q, perPage) =>
          `https://api.github.com/search/issues?q=${encodeURIComponent(
            q
          )}&sort=created&order=desc&per_page=${perPage}`;

        const [listRes, mergedRes, userRes] = await Promise.all([
          fetch(searchUrl(UPSTREAM_QUERY, 4)),
          fetch(searchUrl(`${UPSTREAM_QUERY} is:merged`, 1)),
          fetch(`https://api.github.com/users/${GITHUB_USER}`),
        ]);
        if (!listRes.ok) throw new Error('github search failed');
        const list = await listRes.json();
        const merged = mergedRes.ok ? await mergedRes.json() : null;
        const user = userRes.ok ? await userRes.json() : null;
        if (cancelled) return;

        setGroups(toGroups(list.items || []));
        setCounts({
          merged: merged ? merged.total_count : null,
          authored: typeof list.total_count === 'number' ? list.total_count : null,
          repos: user ? user.public_repos : null,
        });
        setStatus('ready');
      } catch {
        if (!cancelled) setStatus('error');
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, []);

  const show = (v) => (status === 'ready' && typeof v === 'number' ? String(v) : '—');
  const metrics = [
    { label: 'Merged PRs Upstream', value: show(counts.merged), icon: CheckCircle2 },
    { label: 'Public Repositories', value: show(counts.repos), icon: GitFork },
    { label: 'Upstream PRs Authored', value: show(counts.authored), icon: GitCommit },
    { label: 'Engine SLA & Uptime', value: '99.99%', icon: Zap },
  ];

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
            {status === 'loading' && (
              <div className="p-6 sm:p-7 font-mono text-xs sm:text-[13px] text-charcoal/60 tracking-tight">
                Fetching live data from GitHub…
              </div>
            )}
            {status === 'error' && (
              <div className="p-6 sm:p-7 font-mono text-xs sm:text-[13px] text-charcoal/60 tracking-tight">
                Live data could not be loaded right now — the full history is on GitHub below.
              </div>
            )}
            {status === 'ready' && groups.length === 0 && (
              <div className="p-6 sm:p-7 font-mono text-xs sm:text-[13px] text-charcoal/60 tracking-tight">
                The first upstream contributions are in progress — follow along on GitHub below.
              </div>
            )}
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
                        <span className="font-mono text-[11px] text-charcoal/50"> {pr.meta}</span>
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
            href={MORE_ON_GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-5 py-3 border border-charcoal bg-transparent text-charcoal font-mono text-xs font-semibold uppercase tracking-wider hover:bg-charcoal hover:text-linen transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-terracotta"
          >
            <GithubIcon className="w-3.5 h-3.5" />
            <span>More on GitHub ↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
