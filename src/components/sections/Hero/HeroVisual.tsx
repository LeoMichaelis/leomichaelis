import type { ReactNode } from "react";

import { Activity, Bot, Check, ChevronRight, Code2, Database, Folder, Globe2, Play, ScanSearch, ServerCog } from "lucide-react";

export function HeroVisual() {
  return (
    <div aria-hidden="true" className="absolute right-[-54px] z-20 h-[625px] w-[735px] [perspective:1200px]">
      {/* Lumière workstation */}
      <div className="absolute left-[52%] top-[34%] h-[490px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-[50%] bg-[radial-gradient(ellipse,rgba(216,180,254,0.29)_0%,rgba(192,132,252,0.15)_30%,rgba(147,51,234,0.065)_51%,transparent_74%)] blur-[34px]" />
      <div className="absolute left-[55%] top-[34%] h-[280px] w-[485px] -translate-x-1/2 -translate-y-1/2 rounded-[46%] bg-[radial-gradient(ellipse,rgba(232,121,249,0.11)_0%,rgba(192,132,252,0.06)_40%,transparent_73%)] blur-[23px]" />
      <div className="absolute left-[53%] top-[67%] h-[100px] w-[430px] -translate-x-1/2 rounded-[50%] bg-[#9333ea]/11 blur-[27px]" />

      {/* Flux limités aux deux satellites */}
      <svg className="absolute inset-0 z-[12] size-full overflow-visible" viewBox="0 0 735 625" fill="none">
        <defs>
          <linearGradient id="heroProjectionPurple" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="rgba(192,132,252,0.46)" />
            <stop offset="1" stopColor="rgba(126,34,206,0.06)" />
          </linearGradient>
          <linearGradient id="heroProjectionCrawler" x1="1" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="rgba(168,85,247,0.42)" />
            <stop offset="1" stopColor="rgba(192,132,252,0.08)" />
          </linearGradient>
        </defs>
        <path d="M575 145 C620 128 650 112 692 105" stroke="url(#heroProjectionPurple)" strokeWidth="1.1" strokeDasharray="3 7" />
        <path d="M236 350 C199 364 178 386 145 408" stroke="url(#heroProjectionCrawler)" strokeWidth="1.1" strokeDasharray="3 7" />
        <circle cx="575" cy="145" r="2.5" fill="rgba(192,132,252,0.70)" />
        <circle cx="236" cy="350" r="2.5" fill="rgba(168,85,247,0.72)" />
      </svg>

      {/* Bras articulé — inchangé structurellement */}
      <svg className="absolute left-[174px] top-[239px] z-[14] h-[350px] w-[425px] overflow-visible" viewBox="0 0 425 350" fill="none">
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

     {/* SATELLITE ARRIÈRE — PostgreSQL / identité schema */}
   <div className="group absolute right-[-20px] top-[48px] z-20 w-[136px] origin-center rotate-[1deg] transition-all duration-500 ease-out hover:z-50 hover:-translate-z-[-40px]">
      <div className="relative overflow-hidden rounded-[16px] border border-[#f0abfc]/18 bg-[linear-gradient(145deg,#482253_0%,#35183f_42%,#24112d_100%)] p-2.5 text-white shadow-[0_20px_44px_rgba(57,23,69,0.25),inset_0_1px_0_rgba(255,255,255,0.07)] transition-shadow duration-500 group-hover:shadow-[0_28px_58px_rgba(73,28,89,0.33),0_0_24px_rgba(217,70,239,0.10)]">
        <span className="pointer-events-none absolute inset-0 opacity-[0.12] [background-image:linear-gradient(rgba(232,121,249,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(232,121,249,0.18)_1px,transparent_1px)] [background-size:14px_14px]" />
        <span className="pointer-events-none absolute -right-8 -top-10 size-[90px] rounded-full bg-[#e879f9]/12 blur-[25px]" />
        <span className="pointer-events-none absolute -bottom-8 -left-5 size-[75px] rounded-full bg-[#7c3aed]/10 blur-[22px]" />
        <span className="pointer-events-none absolute inset-x-[12%] top-0 h-px bg-gradient-to-r from-transparent via-[#f5d0fe]/42 to-transparent" />

        <div className="relative z-10 flex items-center justify-between gap-1.5 border-b border-white/[0.08] pb-2">
          <div className="flex items-center gap-1.5">
            <span className="flex size-[17px] items-center justify-center rounded-[5px] border border-[#f0abfc]/17 bg-[#d946ef]/11">
              <Database size={10} className="text-[#f5d0fe]/92" />
            </span>
            <div>
              <span className="block text-[6.2px] font-black uppercase tracking-[0.09em] text-white/78">PostgreSQL</span>
              <span className="mt-[1px] block text-[4.3px] font-medium tracking-[0.055em] text-white/38">RELATIONAL SCHEMA</span>
            </div>
          </div>
          <span className="flex items-center gap-1 text-[4.5px] font-bold text-[#f0abfc]/76"><span className="size-1 rounded-full bg-[#e879f9]/88 shadow-[0_0_5px_rgba(232,121,249,0.45)]" />CONNECTED</span>
        </div>

        <div className="relative z-10 mt-2.5 h-[82px]">
          <DbTable className="left-0 top-0" title="users" rows={["id · uuid", "email · text", "role · enum"]} />
          <DbTable className="right-0 top-[26px]" title="projects" rows={["id · uuid", "owner_id · fk", "status · text"]} accent />

          <svg className="absolute inset-0 size-full overflow-visible" viewBox="0 0 112 82" fill="none">
            <path d="M55 32 C72 32 65 50 77 50" stroke="rgba(240,171,252,0.82)" strokeWidth="1.2" strokeDasharray="2 3" />
            <path d="M55 38 C69 40 68 64 84 64" stroke="rgba(192,132,252,0.38)" strokeWidth="0.8" strokeDasharray="1 4" />
            <circle cx="55" cy="32" r="1.9" fill="rgba(245,208,254,0.95)" />
            <circle cx="77" cy="50" r="1.9" fill="rgba(245,208,254,0.95)" />
          </svg>
        </div>

        <div className="relative z-10 mt-1 flex items-center justify-between border-t border-white/[0.09] pt-2 text-[4.5px] font-bold uppercase tracking-[0.08em] text-white/40"><span>2 tables</span><span className="text-[#f0abfc]/65">mapped</span></div>
      </div>
    </div>

      {/* MONITEUR */}
      <div className="group/monitor absolute left-[120px] top-[72px] z-30 h-[355px] w-[540px] origin-center [transform:rotate(-1deg)]">
        <div className="absolute inset-0 translate-x-[7px] translate-y-[9px] rounded-[35px] bg-[#0b0910] shadow-[0_42px_96px_rgba(31,17,39,0.34)]" />
        <div className="absolute -right-[9px] bottom-[28px] top-[24px] w-[14px] rounded-r-[24px] bg-[linear-gradient(90deg,#211725,#0a080d)]" />

        <div className="absolute inset-0 rounded-[35px] bg-[linear-gradient(145deg,#4a3754_0%,#2a2031_7%,#17121d_23%,#0d0b11_100%)] p-[9px] shadow-[0_40px_90px_rgba(41,23,51,0.29),inset_0_1px_0_rgba(255,255,255,0.19)]">
          <div className="pointer-events-none absolute inset-[2px] rounded-[33px] border border-white/[0.075]" />

          <div className="relative h-[325px] overflow-hidden rounded-[26px] border border-[#d8b4fe]/13 bg-[#0c0a10] shadow-[inset_0_0_56px_rgba(126,34,206,0.07),0_0_28px_rgba(147,51,234,0.05)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_15%,rgba(147,51,234,0.17),transparent_36%),linear-gradient(145deg,#111019_0%,#0c0b11_50%,#121019_100%)]" />

          {/* topbar */}
          <div className="relative z-10 flex h-[34px] items-center justify-between border-b border-white/[0.08] bg-white/[0.03] px-3.5">
            <div className="flex w-[33px] items-center gap-1.5">
              <span className="relative flex size-[7px] items-center justify-center rounded-full bg-[#ff5f57]/85 shadow-[0_0_5px_rgba(255,95,87,0.12)]">
                <span className="translate-y-[-0.2px] text-[5px] font-black leading-none text-[#561311]/0 transition-colors duration-200 group-hover/monitor:text-[#561311]/75">×</span>
              </span>
              <span className="relative flex size-[7px] items-center justify-center rounded-full bg-[#febc2e]/82 shadow-[0_0_5px_rgba(254,188,46,0.10)]">
                <span className="translate-y-[-0.4px] text-[5px] font-black leading-none text-[#6b4700]/0 transition-colors duration-200 group-hover/monitor:text-[#6b4700]/70">−</span>
              </span>
              <span className="relative flex size-[7px] items-center justify-center rounded-full bg-[#28c840]/82 shadow-[0_0_5px_rgba(40,200,64,0.10)]">
                <span className="translate-y-[-0.2px] text-[4px] font-black leading-none text-[#0b5218]/0 transition-colors duration-200 group-hover/monitor:text-[#0b5218]/72">↗</span>
              </span>
            </div>

            <div className="flex items-center gap-2">
              <ServerCog size={11} className="text-[#d8b4fe]/72" />
              <span className="text-[5.5px] font-black uppercase tracking-[0.17em] text-white/50">workspace / production</span>
            </div>

            <span className="w-[33px]" />
          </div>

            {/* interface */}
            <div className="relative z-10 grid h-[calc(100%-34px)] grid-cols-[0.20fr_0.46fr_0.34fr]">
              {/* Sidebar */}
              <div className="border-r border-white/[0.075] bg-black/[0.13] px-2.5 py-3">
                <span className="text-[6.2px] font-black uppercase tracking-[0.12em] text-white/55">Explorer</span>

                <div className="mt-3 space-y-1.5">
                  <ExplorerLine icon={<Folder size={8} />} label="src" active />
                  <ExplorerLine icon={<Folder size={8} />} label="workers" />
                  <ExplorerLine icon={<Folder size={8} />} label="api" />
                  <ExplorerLine icon={<Database size={8} />} label="database" />
                  <ExplorerLine icon={<Bot size={8} />} label="scrapers" />
                </div>

                <div className="mt-5 border-t border-white/[0.075] pt-3">
                  <span className="text-[5.8px] font-black uppercase tracking-[0.11em] text-white/46">Services</span>
                  <div className="mt-2 space-y-1.5">
                    <ServiceStatus name="api" />
                    <ServiceStatus name="redis" />
                    <ServiceStatus name="worker" />
                  </div>
                </div>
              </div>

              {/* Code / Architecture / Terminal */}
              <div className="flex min-w-0 flex-col border-r border-white/[0.075]">
                {/* file tab */}
                <div className="flex h-[31px] items-center gap-2 border-b border-white/[0.08] bg-white/[0.03] px-2.5">
                  <span className="flex size-[18px] items-center justify-center rounded-[5px] border border-[#c084fc]/10 bg-[#9333ea]/13">
                    <Code2 size={11} className="text-[#e9d5ff]/86" />
                  </span>
                  <span className="text-[6.5px] font-semibold tracking-[-0.01em] text-white/70">orchestrator.ts</span>
                  <span className="ml-auto text-[12px] text-white/30">×</span>
                </div>

                <div className="flex-1 px-3.5 py-3 font-mono text-[6.2px] leading-[1.72]">
                  <EditorLine n="01"><Syntax color="purple">export</Syntax> <Syntax color="blue">async function</Syntax> <Syntax color="white">runPipeline</Syntax>() {"{"}</EditorLine>
                  <EditorLine n="02" indent><Syntax color="purple">const</Syntax> jobs = <Syntax color="blue">await</Syntax> queue.pull();</EditorLine>
                  <EditorLine n="03" indent><Syntax color="purple">const</Syntax> data = <Syntax color="blue">await</Syntax> scraper.collect(jobs);</EditorLine>
                  <EditorLine n="04" indent><Syntax color="purple">await</Syntax> database.persist(data);</EditorLine>
                  <EditorLine n="05" indent><Syntax color="purple">return</Syntax> product.build(data);</EditorLine>
                  <EditorLine n="06">{"}"}</EditorLine>

                  {/* architecture */}
                  <div className="mt-4 rounded-[8px] border border-[#c084fc]/17 bg-[linear-gradient(145deg,rgba(147,51,234,0.075),rgba(126,34,206,0.035))] px-2.5 py-2.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.025)]">
                    <div className="flex items-center justify-between">
                      <span className="text-[6.3px] font-black uppercase tracking-[0.095em] text-[#f3e8ff]/76">Architecture</span>
                      <span className="text-[4.8px] font-medium uppercase tracking-[0.08em] text-white/35">pipeline</span>
                    </div>

                    <div className="mt-2.5 flex items-center gap-1">
                      <ArchitecturePill label="API" />
                      <ChevronRight size={7} className="shrink-0 text-[#c084fc]/38" />
                      <ArchitecturePill label="QUEUE" accent />
                      <ChevronRight size={7} className="shrink-0 text-[#c084fc]/38" />
                      <ArchitecturePill label="WORKER" />
                    </div>
                  </div>
                </div>

                {/* terminal */}
                <div className="h-[78px] border-t border-white/[0.09] bg-[#08070b]/55 px-3.5 py-2.5 font-mono text-[6px] leading-[1.58]">
                  <div className="mb-1.5 flex items-center gap-3 text-white/48">
                    <span className="font-bold text-[#e9d5ff]/80">TERMINAL</span>
                    <span>OUTPUT</span>
                    <span>PROBLEMS</span>
                  </div>
                  <p className="text-white/63"><span className="text-[#c084fc]/92">→</span> worker:start --concurrency=8</p>
                  <p className="text-[#86efac]/68">✓ redis connected · postgres ready</p>
                  <p className="text-white/50">waiting for jobs...</p>
                </div>
              </div>

              {/* Dashboard / output produit */}
              <div className="relative flex min-w-0 flex-col overflow-hidden bg-[linear-gradient(160deg,#171420_0%,#100f17_62%,#14111b_100%)] p-3.5 pb-4">
                <span className="pointer-events-none absolute -right-10 -top-12 size-[120px] rounded-full bg-[#9333ea]/10 blur-[28px]" />
                <span className="pointer-events-none absolute bottom-[35px] left-[25%] h-[70px] w-[120px] rounded-full bg-[#7c3aed]/[0.035] blur-[24px]" />

                {/* Header */}
                <div className="relative z-10 flex items-start justify-between">
                  <div>
                    <span className="block text-[5.8px] font-black uppercase tracking-[0.13em] text-[#d8b4fe]/52">System health</span>
                    <span className="mt-1 block text-[12.5px] font-black tracking-[-0.025em] text-white/94">Production</span>
                  </div>

                  <span className="flex size-[24px] items-center justify-center rounded-[8px] border border-[#c084fc]/16 bg-[#9333ea]/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">
                    <Activity size={12} className="text-[#e9d5ff]/80" />
                  </span>
                </div>

                {/* Metrics */}
                <div className="relative z-10 mt-2.5 grid grid-cols-3 gap-1.5">
                  <Metric value="99.9%" label="API" />
                  <Metric value="8" label="Workers" />
                  <Metric value="24ms" label="DB" />
                </div>

                {/* Traffic */}
                <div className="relative z-10 mt-2 rounded-[10px] border border-white/[0.10] bg-[linear-gradient(145deg,rgba(255,255,255,0.055),rgba(255,255,255,0.022))] p-2.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.03),0_7px_20px_rgba(0,0,0,0.08)]">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="block text-[5.8px] font-bold text-white/60">Requests / min</span>
                      <span className="mt-[1px] block text-[4.5px] text-white/28">Live traffic · last 60s</span>
                    </div>
                    <span className="rounded-[5px] border border-[#c084fc]/12 bg-[#9333ea]/12 px-1.5 py-1 text-[5px] font-black text-[#e9d5ff]/78">+18.4%</span>
                  </div>

                  <svg className="mt-1 h-[43px] w-full" viewBox="0 0 130 42" fill="none">
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

                {/* Recent jobs — volontairement compact, avec respiration basse */}
                <div className="relative z-10 mt-2 rounded-[10px] border border-white/[0.09] bg-[linear-gradient(145deg,rgba(255,255,255,0.04),rgba(255,255,255,0.018))] p-2.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.025)]">
                  <div className="flex items-center justify-between">
                    <span className="text-[5.8px] font-bold text-white/56">Recent jobs</span>
                    <span className="flex items-center gap-1 text-[4.7px] font-bold text-[#86efac]/66">
                      <span className="size-1 rounded-full bg-[#4ade80]/80 shadow-[0_0_4px_rgba(74,222,128,0.25)]" />
                      LIVE
                    </span>
                  </div>

                  <div className="mt-1.5 space-y-1">
                    <JobRow name="scrape:odds" time="120ms" />
                    <JobRow name="sync:events" time="84ms" />
                  </div>
                </div>
              </div>
            </div>

            {/* verre écran */}
            <div className="pointer-events-none absolute -right-[35px] -top-[100px] h-[310px] w-[125px] rotate-[22deg] bg-gradient-to-r from-transparent via-white/[0.043] to-transparent blur-[1.5px]" />
            <div className="pointer-events-none absolute inset-x-[10%] top-0 h-px bg-gradient-to-r from-transparent via-white/[0.20] to-transparent" />
          </div>

          <div className="absolute inset-x-[24px] bottom-[3px] h-[7px] rounded-b-[13px] bg-[linear-gradient(180deg,rgba(255,255,255,0.045),rgba(0,0,0,0.28))]" />
          <div className="absolute bottom-[4px] left-1/2 size-1 -translate-x-1/2 rounded-full bg-[#c084fc]/72 shadow-[0_0_9px_rgba(192,132,252,0.70)]" />
        </div>
      </div>

      {/* SATELLITE PREMIER PLAN — Crawler / Worker */}
      <div className="group absolute left-[72px] top-[350px] z-40 w-[164px] origin-center transition-all duration-500 ease-out hover:z-50 hover:-translate-z-[-80px]">
        <div className="relative overflow-hidden rounded-[17px] border border-[#e9d5ff]/19 bg-[linear-gradient(145deg,#4a3455_0%,#35253e_42%,#1f1825_100%)] p-3 text-white shadow-[0_22px_50px_rgba(35,25,42,0.25),inset_0_1px_0_rgba(255,255,255,0.07)] transition-all duration-500 group-hover:border-[#d8b4fe]/28 group-hover:shadow-[0_30px_64px_rgba(55,32,68,0.30),0_0_24px_rgba(168,85,247,0.11)]">
          <span className="pointer-events-none absolute -left-5 -top-8 size-[100px] rounded-full bg-[#c084fc]/12 blur-[27px]" />
          <span className="pointer-events-none absolute -bottom-10 right-0 size-[90px] rounded-full bg-[#7e22ce]/10 blur-[24px]" />
          <span className="pointer-events-none absolute inset-x-[10%] top-0 h-px bg-gradient-to-r from-transparent via-[#f3e8ff]/34 to-transparent" />

          {/* signature matérielle différente */}
          <span className="pointer-events-none absolute bottom-0 left-0 top-0 w-[2px] bg-gradient-to-b from-[#e879f9]/55 via-[#a855f7]/25 to-transparent" />

          <div className="relative z-10 flex items-center justify-between gap-2">
            <div className="flex min-w-0 items-center gap-1.5">
              <span className="flex size-[18px] shrink-0 items-center justify-center rounded-[6px] border border-[#d8b4fe]/15 bg-[#a855f7]/11">
                <ScanSearch size={10} className="text-[#f3e8ff]/92" />
              </span>

              <div>
                <span className="block whitespace-nowrap text-[6px] font-black uppercase tracking-[0.075em] text-white/82">Crawler / Worker</span>
                <span className="mt-px block text-[5px] font-medium tracking-[0.05em] text-[#e9d5ff]/55">AUTOMATION PIPELINE</span>
              </div>
            </div>

            <span className="flex shrink-0 items-center gap-1 text-[5px] font-bold text-[#86efac]/82">
              <span className="size-1 rounded-full bg-[#4ade80]/90 shadow-[0_0_5px_rgba(74,222,128,0.35)]" />
              RUNNING
            </span>
          </div>

          <div className="relative z-10 mt-2.5 flex items-center gap-2 rounded-[7px] border border-white/[0.10] bg-black/[0.14] px-2 py-1.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.035)]">
            <Globe2 size={8} className="shrink-0 text-[#e9d5ff]/66" />
            <span className="min-w-0 flex-1 truncate font-mono text-[5px] text-white/66">source.example/events</span>
            <Play size={7} className="text-[#e879f9]/78" />
          </div>

          <div className="relative z-10 mt-2.5 space-y-1.5">
            <ScraperRow label="Fetch page" value="200" done />
            <ScraperRow label="Parse events" value="148" done />
            <ScraperRow label="Normalize data" value="92%" />
          </div>

          <div className="relative z-10 mt-2.5 h-[4px] overflow-hidden rounded-full bg-white/[0.075]">
            <div className="h-full w-[82%] rounded-full bg-gradient-to-r from-[#8b5cf6]/78 via-[#c084fc]/88 to-[#f0abfc]/78 shadow-[0_0_8px_rgba(192,132,252,0.30)]" />
          </div>
        </div>
      </div>




      {/* Projection lumineuse */}
      <div className="absolute bottom-[47px] left-[196px] z-[13] h-[24px] w-[420px] rounded-full bg-[#9333ea]/13 blur-[17px]" />
      <div className="absolute bottom-[59px] left-[290px] z-[13] h-[5px] w-[240px] rounded-full bg-[#c084fc]/11 blur-[7px]" />

      {/* Repères */}
      <div className="absolute right-[7px] top-[30px] size-2 rotate-45 bg-[#9333ea]/45 shadow-[0_0_10px_rgba(147,51,234,0.36)]" />
      <div className="absolute bottom-[32px] left-[47%] size-2 rounded-full bg-[#a855f7]/42 shadow-[0_0_12px_rgba(168,85,247,0.42)]" />
    </div>
  );
}

function ExplorerLine({ icon, label, active = false }: { icon: ReactNode; label: string; active?: boolean }) {
  return <div className={`flex items-center gap-1.5 rounded-[5px] px-1.5 py-1 text-[5.8px] font-medium ${active ? "border border-[#c084fc]/14 bg-[#9333ea]/15 text-[#f3e8ff]/80" : "text-white/50"}`}>{icon}<span>{label}</span></div>;
}

function ServiceStatus({ name }: { name: string }) {
  return <div className="flex items-center justify-between text-[5.8px]"><span className="text-white/48">{name}</span><span className="size-1 rounded-full bg-[#4ade80]/68 shadow-[0_0_5px_rgba(74,222,128,0.22)]" /></div>;
}

function EditorLine({ n, indent = false, children }: { n: string; indent?: boolean; children: ReactNode }) {
  return <div className="flex"><span className="w-5 shrink-0 text-[5.2px] text-white/27">{n}</span><span className={`${indent ? "pl-2" : ""} text-white/59`}>{children}</span></div>;
}

function Syntax({ color, children }: { color: "purple" | "blue" | "white"; children: ReactNode }) {
  const styles = { purple: "text-[#e879f9]/88", blue: "text-[#c4b5fd]/90", white: "text-white/74" } as const;
  return <span className={styles[color]}>{children}</span>;
}

function ArchitecturePill({ label, accent = false }: { label: string; accent?: boolean }) {
  return <span className={`flex min-w-[36px] items-center justify-center rounded-[5px] border px-1.5 py-1.5 text-[5.2px] font-black tracking-[0.035em] ${accent ? "border-[#c084fc]/34 bg-[#9333ea]/22 text-[#f3e8ff]/82 shadow-[0_0_7px_rgba(168,85,247,0.09)]" : "border-white/[0.13] bg-white/[0.05] text-white/58"}`}>{label}</span>;
}

function Metric({ value, label }: { value: string; label: string }) {
  return (
    <div className="relative overflow-hidden rounded-[8px] border border-white/[0.11] bg-[linear-gradient(145deg,rgba(255,255,255,0.065),rgba(255,255,255,0.026))] px-1.5 py-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]">
      <span className="pointer-events-none absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-[#c084fc]/36 to-transparent" />
      <span className="block text-[8.5px] font-black text-white/88">{value}</span>
      <span className="mt-0.5 block text-[4.8px] font-bold uppercase tracking-[0.055em] text-white/43">{label}</span>
    </div>
  );
}

function JobRow({ name, time }: { name: string; time: string }) {
  return <div className="flex items-center gap-1.5 rounded-[4px] border border-transparent px-1 py-[2px]"><span className="size-1 rounded-full bg-[#4ade80]/65 shadow-[0_0_4px_rgba(74,222,128,0.18)]" /><span className="min-w-0 flex-1 truncate font-mono text-[5px] text-white/56">{name}</span><span className="font-mono text-[4.8px] text-white/37">{time}</span></div>;
}

function DbTable({ className, title, rows, accent = false }: { className: string; title: string; rows: readonly string[]; accent?: boolean }) {
  return (
    <div className={`absolute w-[58px] overflow-hidden rounded-[6px] border ${accent ? "border-[#f0abfc]/32 bg-[#d946ef]/11 shadow-[0_0_10px_rgba(217,70,239,0.06)]" : "border-white/[0.16] bg-[#160b1c]/52"} ${className}`}>
      <div className={`flex items-center gap-1 border-b px-1.5 py-1.5 ${accent ? "border-[#f0abfc]/20" : "border-white/[0.11]"}`}>
        <Database size={6} className={accent ? "text-[#f5d0fe]/88" : "text-[#e9d5ff]/70"} />
        <span className="text-[5.2px] font-black text-white/80">{title}</span>
      </div>
      <div className="space-y-1 px-1.5 py-1.5">{rows.map((row) => <span key={row} className="block font-mono text-[4.2px] text-white/49">{row}</span>)}</div>
    </div>
  );
}

function ScraperRow({ label, value, done = false }: { label: string; value: string; done?: boolean }) {
  return <div className="flex items-center gap-1.5"><span className={`flex size-[11px] shrink-0 items-center justify-center rounded-full ${done ? "bg-[#4ade80]/13 text-[#86efac]/84" : "bg-[#c084fc]/15 text-[#e9d5ff]/82"}`}>{done ? <Check size={7} /> : <Activity size={7} />}</span><span className="flex-1 text-[5px] font-medium text-white/68">{label}</span><span className="font-mono text-[5px] font-bold text-white/58">{value}</span></div>;
}