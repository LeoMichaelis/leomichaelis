import type { ReactNode } from "react";
import { Activity, Bot, Check, ChevronRight, Code2, Database, Folder, Globe2, Play, ScanSearch, ServerCog, Maximize2 } from "lucide-react";

export function HeroVisual() {
  return (
    <div aria-hidden="true" className="relative z-20 w-[clamp(34rem,46vw,50rem)] shrink-0 [container-type:inline-size]">
      <div className="relative aspect-[735/625] w-full [--u:calc(100cqw/735)]">

        {/* Lumière workstation */}
        <div className="absolute left-[52%] top-[34%] h-[calc(490*var(--u))] w-[calc(620*var(--u))] -translate-x-1/2 -translate-y-1/2 rounded-[50%] bg-[radial-gradient(ellipse,rgba(216,180,254,0.29)_0%,rgba(192,132,252,0.15)_30%,rgba(147,51,234,0.065)_51%,transparent_74%)] blur-[calc(34*var(--u))]" />
        <div className="absolute left-[55%] top-[34%] h-[calc(280*var(--u))] w-[calc(485*var(--u))] -translate-x-1/2 -translate-y-1/2 rounded-[46%] bg-[radial-gradient(ellipse,rgba(232,121,249,0.11)_0%,rgba(192,132,252,0.06)_40%,transparent_73%)] blur-[calc(23*var(--u))]" />
        <div className="absolute left-[53%] top-[67%] h-[calc(100*var(--u))] w-[calc(430*var(--u))] -translate-x-1/2 rounded-[50%] bg-[#9333ea]/11 blur-[calc(27*var(--u))]" />

        {/* Bras articulé */}
        <svg className="absolute left-[calc(205*var(--u))] top-[calc(235*var(--u))] z-[14] h-[calc(380*var(--u))] w-[calc(455*var(--u))] overflow-visible" viewBox="0 0 425 350" fill="none">
          <defs>
            <linearGradient id="heroArmMetal" x1="190" y1="0" x2="190" y2="330">
              <stop offset="0" stopColor="#45344e" />
              <stop offset="0.18" stopColor="#302638" />
              <stop offset="0.56" stopColor="#211a27" />
              <stop offset="1" stopColor="#151219" />
            </linearGradient>
            <linearGradient id="heroArmEdge" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="rgba(233,213,255,0.58)" />
              <stop offset="0.45" stopColor="rgba(192,132,252,0.18)" />
              <stop offset="1" stopColor="rgba(99,102,241,0.02)" />
            </linearGradient>
            <linearGradient id="heroBaseMetal" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#382942" />
              <stop offset="0.48" stopColor="#251d2c" />
              <stop offset="1" stopColor="#17131c" />
            </linearGradient>
          </defs>

          <path d="M218 8 L218 62" stroke="#0d0a10" strokeWidth="35" strokeLinecap="round" />
          <path d="M218 8 L218 62" stroke="url(#heroArmMetal)" strokeWidth="27" strokeLinecap="round" />
          <path d="M214 12 L214 58" stroke="url(#heroArmEdge)" strokeWidth="2" strokeLinecap="round" />
          <circle cx="218" cy="66" r="23" fill="#17121c" stroke="rgba(216,180,254,0.24)" strokeWidth="1.5" />
          <circle cx="218" cy="66" r="12" fill="#2b2033" stroke="rgba(192,132,252,0.30)" />
          <circle cx="218" cy="66" r="4" fill="rgba(216,180,254,0.32)" />

          <path d="M207 81 L187 137" stroke="#0d0a10" strokeWidth="31" strokeLinecap="round" />
          <path d="M207 81 L187 137" stroke="url(#heroArmMetal)" strokeWidth="23" strokeLinecap="round" />
          <path d="M202 83 L183 134" stroke="url(#heroArmEdge)" strokeWidth="2" strokeLinecap="round" />
          <circle cx="186" cy="146" r="21" fill="#17121c" stroke="rgba(216,180,254,0.20)" strokeWidth="1.5" />
          <circle cx="186" cy="146" r="9" fill="#2c2134" />
          <circle cx="186" cy="146" r="3" fill="rgba(192,132,252,0.35)" />

          <path d="M188 166 L201 239" stroke="#0d0a10" strokeWidth="34" strokeLinecap="round" />
          <path d="M188 166 L201 239" stroke="url(#heroArmMetal)" strokeWidth="26" strokeLinecap="round" />
          <path d="M184 169 L197 235" stroke="url(#heroArmEdge)" strokeWidth="2" strokeLinecap="round" />

          <path d="M176 235 C161 261 137 276 103 287 C73 297 43 308 18 334 C95 345 303 345 395 334 C369 307 338 296 304 286 C270 276 247 260 233 235 Z" fill="url(#heroBaseMetal)" stroke="rgba(216,180,254,0.15)" />
          <path d="M34 329 C123 313 294 313 380 329" stroke="rgba(216,180,254,0.20)" strokeWidth="1.3" />
          <path d="M54 330 C139 320 278 320 361 330" stroke="rgba(192,132,252,0.22)" strokeWidth="8" opacity="0.32" />
          <path d="M74 336 C151 328 267 328 342 336" stroke="rgba(126,34,206,0.18)" strokeWidth="15" opacity="0.25" />
          <ellipse cx="208" cy="344" rx="190" ry="27" fill="rgba(23,19,31,0.72)" />
          <ellipse cx="208" cy="337" rx="158" ry="16" fill="rgba(126,34,206,0.08)" />
        </svg>

        {/* Mot décoratif — DATA */}
        <div className="absolute right-[calc(-70*var(--u))] top-[calc(126*var(--u))] z-10 flex h-[calc(232*var(--u))] items-center">
          <span className="h-full w-px bg-gradient-to-b from-transparent via-[#9333ea]/30 to-transparent" />
          <div className="relative ml-[calc(-10*var(--u))]">
            <span className="bg-[linear-gradient(180deg,rgba(126,34,206,0.18),rgba(168,85,247,0.08))] bg-clip-text font-[family-name:var(--font-header)] text-[calc(56*var(--u))] font-black tracking-[0.13em] text-transparent [writing-mode:vertical-rl]">
              DATA
            </span>
            <span className="absolute left-[calc(4*var(--u))] top-[calc(4*var(--u))] font-[family-name:var(--font-header)] text-[calc(56*var(--u))] font-black tracking-[0.13em] text-transparent [-webkit-text-stroke:1px_rgba(147,51,234,0.25)] [writing-mode:vertical-rl]">
              DATA
            </span>
          </div>
        </div>

        {/* MONITEUR */}
        <div className="absolute left-[calc(100*var(--u))] top-[calc(30*var(--u))] z-30 h-[calc(408*var(--u))] w-[calc(622*var(--u))] origin-center">
          <div className="absolute inset-0 rounded-[calc(40*var(--u))] bg-[linear-gradient(145deg,#4a3754_0%,#2a2031_7%,#17121d_23%,#0d0b11_100%)] p-[calc(10*var(--u))] shadow-[0_46px_104px_rgba(41,23,51,0.29),inset_0_1px_0_rgba(255,255,255,0.19)]">

            <div className="pointer-events-none absolute inset-[calc(2*var(--u))] rounded-[calc(38*var(--u))] border border-white/[0.075]" />

            <div className="relative h-[calc(374*var(--u))] overflow-hidden rounded-[calc(30*var(--u))] border border-[#d8b4fe]/13 bg-[#0c0a10] shadow-[inset_0_0_64px_rgba(126,34,206,0.07),0_0_32px_rgba(147,51,234,0.05)]">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_15%,rgba(147,51,234,0.17),transparent_36%),linear-gradient(145deg,#111019_0%,#0c0b11_50%,#121019_100%)]" />

              {/* topbar */}
              <div className="relative z-10 grid h-[calc(39*var(--u))] grid-cols-[1fr_auto_1fr] items-center border-b border-white/[0.08] bg-white/[0.03] px-[calc(16*var(--u))]">
                <div className="group/traffic flex justify-self-start items-center gap-[calc(7*var(--u))]">
                  <span className="relative flex size-[calc(9*var(--u))] items-center justify-center rounded-full bg-[#ff5f57]">
                    <span className="absolute h-[calc(1.4*var(--u))] w-[calc(5*var(--u))] rotate-45 rounded-full bg-[#6b1712] opacity-0 transition-opacity duration-100 group-hover/traffic:opacity-100" />
                    <span className="absolute h-[calc(1.4*var(--u))] w-[calc(5*var(--u))] -rotate-45 rounded-full bg-[#6b1712] opacity-0 transition-opacity duration-100 group-hover/traffic:opacity-100" />
                  </span>

                  <span className="relative flex size-[calc(9*var(--u))] items-center justify-center rounded-full bg-[#febc2e]">
                    <span className="h-[calc(1.4*var(--u))] w-[calc(5*var(--u))] rounded-full bg-[#735100] opacity-0 transition-opacity duration-100 group-hover/traffic:opacity-100" />
                  </span>

                  <span className="relative flex size-[calc(9*var(--u))] items-center justify-center rounded-full bg-[#28c840]">
                    <Maximize2 strokeWidth={4} className="relative size-[calc(5*var(--u))] text-[#0b5c19] opacity-0 transition-opacity duration-100 group-hover/traffic:opacity-100" />
                  </span>
                </div>

                <div className="flex justify-self-center items-center gap-[calc(9*var(--u))]">
                  <ServerCog className="size-[calc(14*var(--u))] text-[#d8b4fe]/72" />
                  <span className="text-[calc(7.5*var(--u))] font-black uppercase tracking-[0.17em] text-white/50">workspace / production</span>
                </div>

                <span />
              </div>

              {/* interface */}
              <div className="relative z-10 grid h-[calc(100%_-_39*var(--u))] grid-cols-[0.20fr_0.46fr_0.34fr]">

                {/* Sidebar */}
                <div className="border-r border-white/[0.075] bg-black/[0.13] px-[calc(12*var(--u))] py-[calc(14*var(--u))]">
                  <span className="text-[calc(7.5*var(--u))] font-black uppercase tracking-[0.12em] text-white/55">Explorer</span>

                  <div className="mt-[calc(14*var(--u))] space-y-[calc(7*var(--u))]">
                    <ExplorerLine icon={<Folder className="size-[calc(10*var(--u))]" />} label="src" active />
                    <ExplorerLine icon={<Folder className="size-[calc(10*var(--u))]" />} label="workers" />
                    <ExplorerLine icon={<Folder className="size-[calc(10*var(--u))]" />} label="api" />
                    <ExplorerLine icon={<Database className="size-[calc(10*var(--u))]" />} label="database" />
                    <ExplorerLine icon={<Bot className="size-[calc(10*var(--u))]" />} label="scrapers" />
                  </div>

                  <div className="mt-[calc(23*var(--u))] border-t border-white/[0.075] pt-[calc(14*var(--u))]">
                    <span className="text-[calc(7.5*var(--u))] font-black uppercase tracking-[0.11em] text-white/55">Services</span>

                    <div className="mt-[calc(9*var(--u))] space-y-[calc(7*var(--u))]">
                      <ServiceStatus name="api" />
                      <ServiceStatus name="redis" />
                      <ServiceStatus name="worker" />
                    </div>
                  </div>
                </div>

                {/* Code / Architecture / Terminal */}
                <div className="flex min-w-0 flex-col border-r border-white/[0.075]">

                  {/* file tab */}
                  <div className="flex h-[calc(36*var(--u))] items-center gap-[calc(9*var(--u))] border-b border-white/[0.08] bg-white/[0.03] px-[calc(12*var(--u))]">
                    <span className="flex size-[calc(21*var(--u))] items-center justify-center rounded-[calc(6*var(--u))] border border-[#c084fc]/10 bg-[#9333ea]/13">
                      <Code2 className="size-[calc(13*var(--u))] text-[#e9d5ff]/86" />
                    </span>

                    <span className="text-[calc(8.5*var(--u))] font-semibold tracking-[-0.01em] text-white/70">orchestrator.ts</span>
                    <span className="ml-auto text-[calc(14*var(--u))] text-white/30">×</span>
                  </div>

                  <div className="flex-1 px-[calc(16*var(--u))] py-[calc(14*var(--u))] font-mono text-[calc(7.7*var(--u))] leading-[1.72]">
                    <EditorLine n="01"><Syntax color="purple">export</Syntax> <Syntax color="blue">async function</Syntax> <Syntax color="white">runPipeline</Syntax>() {"{"}</EditorLine>
                    <EditorLine n="02" indent><Syntax color="purple">const</Syntax> jobs = <Syntax color="blue">await</Syntax> queue.pull();</EditorLine>
                    <EditorLine n="03" indent><Syntax color="purple">const</Syntax> data = <Syntax color="blue">await</Syntax> scraper.collect(jobs);</EditorLine>
                    <EditorLine n="04" indent><Syntax color="purple">await</Syntax> database.persist(data);</EditorLine>
                    <EditorLine n="05" indent><Syntax color="purple">return</Syntax> product.build(data);</EditorLine>
                    <EditorLine n="06">{"}"}</EditorLine>

                    {/* architecture */}
                    <div className="mt-[calc(18*var(--u))] rounded-[calc(9*var(--u))] border border-[#c084fc]/17 bg-[linear-gradient(145deg,rgba(147,51,234,0.075),rgba(126,34,206,0.035))] px-[calc(12*var(--u))] py-[calc(12*var(--u))] shadow-[inset_0_1px_0_rgba(255,255,255,0.025)]">
                      <div className="flex items-center justify-between">
                        <span className="text-[calc(7.2*var(--u))] font-black uppercase tracking-[0.095em] text-[#f3e8ff]/76">Architecture</span>
                        <span className="text-[calc(6*var(--u))] font-medium uppercase tracking-[0.08em] text-white/45">pipeline</span>
                      </div>

                      <div className="mt-[calc(12*var(--u))] flex items-center gap-[calc(5*var(--u))]">
                        <ArchitecturePill label="API" />
                        <ChevronRight className="size-[calc(8*var(--u))] shrink-0 text-[#c084fc]/38" />
                        <ArchitecturePill label="QUEUE" accent />
                        <ChevronRight className="size-[calc(8*var(--u))] shrink-0 text-[#c084fc]/38" />
                        <ArchitecturePill label="WORKER" />
                      </div>
                    </div>
                  </div>

                  {/* terminal */}
                  <div className="h-[calc(90*var(--u))] border-t border-white/[0.09] bg-[#08070b]/55 px-[calc(16*var(--u))] py-[calc(12*var(--u))] font-mono text-[calc(8*var(--u))] leading-[1.58]">
                    <div className="mb-[calc(7*var(--u))] flex items-center gap-[calc(14*var(--u))] text-white/30">
                      <span className="font-bold text-[#e9d5ff]/80">TERMINAL</span>
                      <span>OUTPUT</span>
                      <span>PROBLEMS</span>
                    </div>

                    <div className="mt-[calc(8*var(--u))] text-[calc(7.5*var(--u))]">
                      <p className="text-white/63"><span className="text-[#c084fc]/92">→</span> worker:start --concurrency=8</p>
                      <p className="text-[#86efac]/68">✓ redis connected · postgres ready</p>
                      <p className="text-white/50">waiting for jobs...</p>
                    </div>
                  </div>
                </div>

                {/* Dashboard / output produit */}
                <div className="relative flex min-w-0 flex-col overflow-hidden bg-[linear-gradient(160deg,#171420_0%,#100f17_62%,#14111b_100%)] p-[calc(16*var(--u))] pb-[calc(18*var(--u))]">
                  <span className="pointer-events-none absolute right-[calc(-46*var(--u))] top-[calc(-55*var(--u))] size-[calc(138*var(--u))] rounded-full bg-[#9333ea]/10 blur-[calc(32*var(--u))]" />
                  <span className="pointer-events-none absolute bottom-[calc(40*var(--u))] left-[25%] h-[calc(81*var(--u))] w-[calc(138*var(--u))] rounded-full bg-[#7c3aed]/[0.035] blur-[calc(28*var(--u))]" />

                  {/* Header */}
                  <div className="relative z-10 flex items-start justify-between">
                    <div>
                      <span className="block text-[calc(6.7*var(--u))] font-black uppercase tracking-[0.13em] text-[#d8b4fe]/52">System health</span>
                      <span className="mt-[calc(5*var(--u))] block text-[calc(14.4*var(--u))] font-black tracking-[-0.025em] text-white/94">Production</span>
                    </div>

                    <span className="flex size-[calc(28*var(--u))] items-center justify-center rounded-[calc(9*var(--u))] border border-[#c084fc]/16 bg-[#9333ea]/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">
                      <Activity className="size-[calc(14*var(--u))] text-[#e9d5ff]/80" />
                    </span>
                  </div>

                  {/* Metrics */}
                  <div className="relative z-10 mt-[calc(12*var(--u))] grid grid-cols-3 gap-[calc(7*var(--u))]">
                    <Metric value="99.9%" label="API" />
                    <Metric value="8" label="Workers" />
                    <Metric value="24ms" label="DB" />
                  </div>

                  {/* Traffic */}
                  <div className="relative z-10 mt-[calc(12*var(--u))] rounded-[calc(12*var(--u))] border border-white/[0.10] bg-[linear-gradient(145deg,rgba(255,255,255,0.055),rgba(255,255,255,0.022))] p-[calc(12*var(--u))] shadow-[inset_0_1px_0_rgba(255,255,255,0.03),0_8px_23px_rgba(0,0,0,0.08)]">
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="block text-[calc(8*var(--u))] font-bold text-white/60">Requests / min</span>
                        <span className="mt-[calc(2*var(--u))] block text-[calc(6*var(--u))] text-white/35">Live traffic · last 60s</span>
                      </div>

                      <span className="rounded-[calc(6*var(--u))] border border-[#c084fc]/12 bg-[#9333ea]/12 px-[calc(7*var(--u))] py-[calc(5*var(--u))] text-[calc(5.8*var(--u))] font-black text-[#e9d5ff]/78">+18.4%</span>
                    </div>

                    <svg className="mt-[calc(10*var(--u))] h-[calc(49*var(--u))] w-full" viewBox="0 0 130 42" fill="none">
                      <defs>
                        <linearGradient id="heroChartFill" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0" stopColor="rgba(168,85,247,0.38)" />
                          <stop offset="1" stopColor="rgba(168,85,247,0)" />
                        </linearGradient>
                        <linearGradient id="heroChartStroke" x1="0" y1="0" x2="130" y2="0">
                          <stop offset="0" stopColor="rgba(167,139,250,0.72)" />
                          <stop offset="0.55" stopColor="rgba(192,132,252,0.96)" />
                          <stop offset="1" stopColor="rgba(232,121,249,0.90)" />
                        </linearGradient>
                      </defs>

                      <path d="M0 10 H130 M0 22 H130 M0 34 H130" stroke="rgba(255,255,255,0.055)" strokeWidth="0.7" strokeDasharray="2 4" />
                      <path d="M22 0 V42 M54 0 V42 M86 0 V42 M118 0 V42" stroke="rgba(255,255,255,0.025)" strokeWidth="0.6" strokeDasharray="2 5" />
                      <path d="M0 34 C13 31 16 24 28 27 C41 30 43 14 57 19 C72 25 77 8 89 13 C101 17 108 7 130 4 L130 42 L0 42 Z" fill="url(#heroChartFill)" />
                      <path d="M0 34 C13 31 16 24 28 27 C41 30 43 14 57 19 C72 25 77 8 89 13 C101 17 108 7 130 4" stroke="url(#heroChartStroke)" strokeWidth="1.8" />
                      <circle cx="130" cy="4" r="2.2" fill="#f0abfc" />
                      <circle cx="130" cy="4" r="5" fill="rgba(232,121,249,0.12)" />
                    </svg>
                  </div>

                  {/* Recent jobs */}
                  <div className="relative z-10 mt-[calc(12*var(--u))] rounded-[calc(12*var(--u))] border border-white/[0.09] bg-[linear-gradient(145deg,rgba(255,255,255,0.04),rgba(255,255,255,0.018))] p-[calc(12*var(--u))] shadow-[inset_0_1px_0_rgba(255,255,255,0.025)]">
                    <div className="flex items-center justify-between">
                      <span className="text-[calc(8*var(--u))] font-bold text-white/60">Recent jobs</span>

                      <span className="flex items-center gap-[calc(5*var(--u))] text-[calc(6.2*var(--u))] font-bold text-[#86efac]/66">
                        <span className="size-[calc(6*var(--u))] rounded-full bg-[#4ade80]/80 shadow-[0_0_5px_rgba(74,222,128,0.25)]" />
                        LIVE
                      </span>
                    </div>

                    <div className="mt-[calc(10*var(--u))] space-y-[calc(5*var(--u))]">
                      <JobRow name="scrape:odds" time="120ms" />
                      <JobRow name="sync:events" time="84ms" />
                    </div>
                  </div>
                </div>
              </div>

              {/* verre écran */}
              <div className="pointer-events-none absolute right-[calc(-40*var(--u))] top-[calc(-115*var(--u))] h-[calc(357*var(--u))] w-[calc(144*var(--u))] rotate-[22deg] bg-gradient-to-r from-transparent via-white/[0.043] to-transparent blur-[calc(1.5*var(--u))]" />
              <div className="pointer-events-none absolute inset-x-[10%] top-0 h-px bg-gradient-to-r from-transparent via-white/[0.20] to-transparent" />
            </div>

            <div className="absolute inset-x-[calc(28*var(--u))] bottom-[calc(3*var(--u))] h-[calc(8*var(--u))] rounded-b-[calc(15*var(--u))] bg-[linear-gradient(180deg,rgba(255,255,255,0.045),rgba(0,0,0,0.28))]" />
            <div className="absolute bottom-[calc(5*var(--u))] left-1/2 size-[calc(5*var(--u))] -translate-x-1/2 rounded-full bg-[#c084fc]/72 shadow-[0_0_10px_rgba(192,132,252,0.70)]" />
          </div>
        </div>

        {/* SATELLITE ARRIÈRE — Crawler / Worker */}
        <div className="group absolute left-[calc(20*var(--u))] top-[calc(6*var(--u))] z-20 w-[calc(158*var(--u))] hover:z-40">
          <div className="relative left-0 top-0 w-full [container-type:inline-size] transition-[width,left,top] duration-300 ease-out group-hover:left-[calc(-5*var(--u))] group-hover:top-[calc(-4*var(--u))] group-hover:w-[calc(168*var(--u))]">
            <CrawlerCard />
          </div>
        </div>

        {/* SATELLITE AVANT — PostgreSQL / identity schema */}
        <div className="group absolute right-[calc(-52*var(--u))] top-[calc(350*var(--u))] z-40 w-[calc(136*var(--u))] hover:z-50">
          <div className="relative left-0 top-0 w-full [container-type:inline-size] transition-[width,left,top] duration-300 ease-out group-hover:left-[calc(-4.5*var(--u))] group-hover:top-[calc(-5*var(--u))] group-hover:w-[calc(145*var(--u))]">
            <PostgreSQLCard />
          </div>
        </div>

      </div>
    </div>
  );
}
function ExplorerLine({ icon, label, active = false }: { icon: ReactNode; label: string; active?: boolean }) {
  return (
    <div className={`flex items-center gap-[calc(6*var(--u))] rounded-[calc(5*var(--u))] px-[calc(6*var(--u))] py-[calc(4*var(--u))] text-[calc(8*var(--u))] font-medium ${active ? "border border-[#c084fc]/14 bg-[#9333ea]/15 text-[#f3e8ff]/80" : "text-white/55"}`}>
      {icon}
      <span>{label}</span>
    </div>
  );
}

function ServiceStatus({ name }: { name: string }) {
  return (
    <div className="flex items-center justify-between text-[calc(8*var(--u))]">
      <span className="text-white/60">{name}</span>
      <span className="size-[calc(4*var(--u))] rounded-full bg-[#4ade80]/68 shadow-[0_0_5px_rgba(74,222,128,0.22)]" />
    </div>
  );
}

function EditorLine({ n, indent = false, children }: { n: string; indent?: boolean; children: ReactNode }) {
  return (
    <div className="flex items-end">
      <span className="w-[calc(20*var(--u))] shrink-0 text-[calc(5.8*var(--u))] text-white/40">{n}</span>
      <span className={`${indent ? "pl-[calc(8*var(--u))]" : ""} text-white/65`}>{children}</span>
    </div>
  );
}

function Syntax({ color, children }: { color: "purple" | "blue" | "white"; children: ReactNode }) {
  const styles = {
    purple: "text-[#e879f9]/88",
    blue: "text-[#c4b5fd]/90",
    white: "text-white/78",
  } as const;

  return <span className={styles[color]}>{children}</span>;
}

function ArchitecturePill({ label, accent = false }: { label: string; accent?: boolean }) {
  return (
    <span className={`flex min-w-[calc(36*var(--u))] items-center justify-center rounded-[calc(5*var(--u))] border px-[calc(8*var(--u))] py-[calc(6*var(--u))] text-[calc(7*var(--u))] font-black tracking-[0.035em] ${accent ? "border-[#c084fc]/34 bg-[#9333ea]/22 text-[#f3e8ff]/82 shadow-[0_0_7px_rgba(168,85,247,0.09)]" : "border-white/[0.13] bg-white/[0.05] text-white/58"}`}>
      {label}
    </span>
  );
}

function Metric({ value, label }: { value: string; label: string }) {
  return (
    <div className="relative overflow-hidden rounded-[calc(8*var(--u))] border border-white/[0.11] bg-[linear-gradient(145deg,rgba(255,255,255,0.065),rgba(255,255,255,0.026))] px-[calc(6*var(--u))] py-[calc(8*var(--u))] shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">
      <span className="pointer-events-none absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-[#c084fc]/36 to-transparent" />
      <span className="block text-[calc(8.5*var(--u))] font-black text-white/88">{value}</span>
      <span className="mt-[calc(2*var(--u))] block text-[calc(6*var(--u))] font-bold uppercase tracking-[0.055em] text-white/43">{label}</span>
    </div>
  );
}

function JobRow({ name, time }: { name: string; time: string }) {
  return (
    <div className="flex items-center gap-[calc(8*var(--u))] rounded-[calc(4*var(--u))] border border-transparent px-[calc(4*var(--u))] py-[calc(2*var(--u))]">
      <span className="relative top-[calc(-1*var(--u))] size-[calc(4*var(--u))] rounded-full bg-[#4ade80]/65 shadow-[0_0_4px_rgba(74,222,128,0.18)]" />
      <span className="min-w-0 flex-1 truncate font-mono text-[calc(6.5*var(--u))] text-white/56">{name}</span>
      <span className="font-mono text-[calc(6*var(--u))] text-white/37">{time}</span>
    </div>
  );
}

function ScraperRow({ label, value, done = false }: { label: string; value: string; done?: boolean }) {
  return <div className="flex items-center gap-[calc(6*var(--u))]">
    <span className={`flex size-[calc(11*var(--u))] shrink-0 items-center justify-center rounded-full ${done ? "bg-[#4ade80]/13 text-[#86efac]/84" : "bg-[#c084fc]/15 text-[#e9d5ff]/82"}`}>
      {done ? <Check className="size-[calc(7*var(--u))]" /> : <Activity className="size-[calc(7*var(--u))]" />}
    </span>
    <span className="flex-1 text-[calc(6.2*var(--u))] font-medium text-white/68">{label}</span>
    <span className="font-mono text-[calc(6*var(--u))] font-bold text-white/58">{value}</span>
  </div>;
}

function CrawlerCard() {
  return (
    <div className="relative w-full overflow-hidden rounded-[calc(17*var(--u))] border border-[#e9d5ff]/19 bg-[linear-gradient(145deg,#4a3455_0%,#35253e_42%,#1f1825_100%)] p-[calc(12*var(--u))] text-white shadow-[0_18px_42px_rgba(35,25,42,0.22),inset_0_1px_0_rgba(255,255,255,0.07)] [--u:calc(100cqw/158)]">
      {/* Lumières */}
      <span className="pointer-events-none absolute left-[calc(-20*var(--u))] top-[calc(-32*var(--u))] size-[calc(100*var(--u))] rounded-full bg-[#c084fc]/12 blur-[calc(27*var(--u))]" />
      <span className="pointer-events-none absolute bottom-[calc(-40*var(--u))] right-0 size-[calc(90*var(--u))] rounded-full bg-[#7e22ce]/10 blur-[calc(24*var(--u))]" />
      <span className="pointer-events-none absolute inset-x-[10%] top-0 h-px bg-gradient-to-r from-transparent via-[#f3e8ff]/34 to-transparent" />
      <span className="pointer-events-none absolute bottom-0 left-0 top-0 w-[2px] bg-gradient-to-b from-[#e879f9]/55 via-[#a855f7]/25 to-transparent" />
      {/* Header */}
      <div className="relative z-10 flex items-center justify-between gap-[calc(8*var(--u))]">
        <div className="flex min-w-0 items-center gap-[calc(6*var(--u))]">
          <span className="flex size-[calc(18*var(--u))] shrink-0 items-center justify-center rounded-[calc(6*var(--u))] border border-[#d8b4fe]/15 bg-[#a855f7]/11">
            <ScanSearch className="size-[calc(10*var(--u))] text-[#f3e8ff]/92" />
          </span>
          <div>
            <span className="block whitespace-nowrap text-[calc(6*var(--u))] font-black uppercase tracking-[0.075em] text-white/82">Crawler / Worker</span>
            <span className="mt-px block text-[calc(5*var(--u))] font-medium tracking-[0.05em] text-[#e9d5ff]/55">AUTOMATION PIPELINE</span>
          </div>
        </div>
      </div>
      {/* Source */}
      <div className="relative z-10 mt-[calc(10*var(--u))] flex items-center gap-[calc(8*var(--u))] rounded-[calc(7*var(--u))] border border-white/[0.10] bg-black/[0.14] px-[calc(8*var(--u))] py-[calc(6*var(--u))] shadow-[inset_0_1px_0_rgba(255,255,255,0.035)]">
        <Globe2 className="size-[calc(8*var(--u))] shrink-0 text-[#e9d5ff]/66" />
        <span className="min-w-0 flex-1 truncate font-mono text-[calc(5.5*var(--u))] text-white/69">source.example/events</span>
        <Play className="size-[calc(7*var(--u))] text-[#e879f9]/78" />
      </div>
      {/* Pipeline */}
      <div className="relative z-10 mt-[calc(10*var(--u))] space-y-[calc(6*var(--u))]">
        <ScraperRow label="Fetch page" value="200" done />
        <ScraperRow label="Parse events" value="148" done />
        <ScraperRow label="Normalize data" value="92%" />
      </div>
      {/* Progress */}
      <div className="relative z-10 mt-[calc(10*var(--u))] h-[calc(4*var(--u))] overflow-hidden rounded-full bg-white/[0.075]">
        <div className="h-full w-[82%] rounded-full bg-gradient-to-r from-[#8b5cf6]/78 via-[#c084fc]/88 to-[#f0abfc]/78 shadow-[0_0_8px_rgba(192,132,252,0.30)]" />
      </div>
    </div>
  );
}

function DbTable({ className, title, rows, accent = false }: { className: string; title: string; rows: readonly string[]; accent?: boolean }) {
  return (
    <div className={`absolute w-[calc(55*var(--u))] overflow-hidden rounded-[calc(6*var(--u))] border ${accent ? "border-[#f0abfc]/32 bg-[#d946ef]/11 shadow-[0_0_10px_rgba(217,70,239,0.06)]" : "border-white/[0.16] bg-[#160b1c]/52"} ${className}`}>
      <div className={`flex items-center gap-[calc(4*var(--u))] border-b px-[calc(6*var(--u))] py-[calc(5*var(--u))] ${accent ? "border-[#f0abfc]/20" : "border-white/[0.11]"}`}>
        <Database className={`size-[calc(6.8*var(--u))] shrink-0 ${accent ? "text-[#f5d0fe]/88" : "text-[#e9d5ff]/70"}`} />
        <span className="whitespace-nowrap text-[calc(6.7*var(--u))] font-black leading-[1.1] text-white/86">{title}</span>
      </div>
      <div className="space-y-[calc(3.5*var(--u))] px-[calc(6*var(--u))] py-[calc(5.5*var(--u))]">
        {rows.map((row) => <span key={row} className="block whitespace-nowrap font-mono text-[calc(5.6*var(--u))] leading-[1.1] text-white/65">{row}</span>)}
      </div>
    </div>
  );
}

function PostgreSQLCard() {
  return (
    <div className="relative w-full overflow-hidden rounded-[calc(16*var(--u))] border border-[#f0abfc]/18 bg-[linear-gradient(145deg,#482253_0%,#35183f_42%,#24112d_100%)] p-[calc(10*var(--u))] text-white shadow-[0_20px_44px_rgba(57,23,69,0.25),inset_0_1px_0_rgba(255,255,255,0.07)] transition-shadow duration-500 group-hover:shadow-[0_28px_58px_rgba(73,28,89,0.33),0_0_24px_rgba(217,70,239,0.10)] [--u:calc(100cqw/136)]">
      <span className="pointer-events-none absolute inset-0 opacity-[0.12] [background-image:linear-gradient(rgba(232,121,249,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(232,121,249,0.18)_1px,transparent_1px)] [background-size:calc(14*var(--u))_calc(14*var(--u))]" />
      <span className="pointer-events-none absolute right-[calc(-32*var(--u))] top-[calc(-40*var(--u))] size-[calc(90*var(--u))] rounded-full bg-[#e879f9]/12 blur-[calc(25*var(--u))]" />
      <span className="pointer-events-none absolute bottom-[calc(-32*var(--u))] left-[calc(-20*var(--u))] size-[calc(75*var(--u))] rounded-full bg-[#7c3aed]/10 blur-[calc(22*var(--u))]" />
      <span className="pointer-events-none absolute inset-x-[12%] top-0 h-px bg-gradient-to-r from-transparent via-[#f5d0fe]/42 to-transparent" />
      <div className="relative z-10 flex items-center justify-between gap-[calc(6*var(--u))] border-b border-white/[0.08] pb-[calc(8*var(--u))]">
        <div className="flex items-center gap-[calc(6*var(--u))]">
          <span className="flex size-[calc(17*var(--u))] items-center justify-center rounded-[calc(5*var(--u))] border border-[#f0abfc]/17 bg-[#d946ef]/11">
            <Database className="size-[calc(10*var(--u))] text-[#f5d0fe]/92" />
          </span>
          <div>
            <span className="block text-[calc(6*var(--u))] font-black uppercase tracking-[0.09em] text-white/78">PostgreSQL</span>
            <span className="mt-[calc(1*var(--u))] block text-[calc(5*var(--u))] font-medium tracking-[0.055em] text-white/38">SCHEMA</span>
          </div>
        </div>
        <span className="flex items-center gap-[calc(4*var(--u))] text-[calc(4.5*var(--u))] font-bold text-[#f0abfc]/76">
          <span className="size-[calc(4*var(--u))] rounded-full bg-[#e879f9]/88 shadow-[0_0_5px_rgba(232,121,249,0.45)]" />
          CONNECTED
        </span>
      </div>
      <div className="relative z-10 mt-[calc(10*var(--u))] h-[calc(88*var(--u))]">
        <DbTable className="left-0 top-0" title="users" rows={["id · uuid", "email · text", "role · enum"]} />
        <DbTable className="right-0 top-[calc(27*var(--u))]" title="projects" rows={["id · uuid", "owner_id · fk", "status · text"]} accent />
        <svg className="absolute inset-0 size-full overflow-visible" viewBox="0 0 132 92" fill="none">
          <path d="M55 32 C72 32 65 50 77 50" stroke="rgba(240,171,252,0.82)" strokeWidth="1.2" strokeDasharray="2 3" />
          <path d="M55 38 C69 40 68 64 84 64" stroke="rgba(192,132,252,0.38)" strokeWidth="0.8" strokeDasharray="1 4" />
          <circle cx="55" cy="32" r="1.9" fill="rgba(245,208,254,0.95)" />
          <circle cx="77" cy="50" r="1.9" fill="rgba(245,208,254,0.95)" />
        </svg>
      </div>
      <div className="relative z-10 mt-[calc(4*var(--u))] flex items-center justify-between border-t border-white/[0.09] pt-[calc(8*var(--u))] text-[calc(4.8*var(--u))] font-bold uppercase tracking-[0.08em] text-white/48">
        <span>2 tables</span>
        <span className="text-[#f0abfc]/65">mapped</span>
      </div>
    </div>
  );
}