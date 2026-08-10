import type { ReactNode } from "react";

import { Activity, Bot, Boxes, Check, ChevronRight, Code2, Database, Folder, Globe2, Monitor, Network, Play, ScanSearch, ServerCog, Terminal, Waypoints } from "lucide-react";

export function HeroVisual() {
  return (
    <div aria-hidden="true" className="absolute right-[-54px] top-[49px] z-20 h-[625px] w-[735px] [perspective:1200px]">
      {/* Lumière propre à la workstation */}
      <div className="absolute left-[52%] top-[38%] h-[470px] w-[570px] -translate-x-1/2 -translate-y-1/2 rounded-[50%] bg-[radial-gradient(ellipse,rgba(216,180,254,0.31)_0%,rgba(192,132,252,0.17)_28%,rgba(147,51,234,0.075)_49%,transparent_73%)] blur-[32px]" />
      <div className="absolute left-[55%] top-[38%] h-[255px] w-[440px] -translate-x-1/2 -translate-y-1/2 rounded-[46%] bg-[radial-gradient(ellipse,rgba(232,121,249,0.13)_0%,rgba(192,132,252,0.07)_39%,transparent_72%)] blur-[21px]" />
      <div className="absolute left-[53%] top-[68%] h-[100px] w-[410px] -translate-x-1/2 rounded-[50%] bg-[#9333ea]/13 blur-[25px]" />

      {/* Orbites */}
      <div className="absolute left-[51%] top-[38%] size-[515px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#7e22ce]/17" />
      <div className="absolute left-[51%] top-[38%] size-[417px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/47" />
      <div className="absolute left-[51%] top-[38%] size-[318px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#9333ea]/14" />

      {/* Flux projetés depuis l'écran */}
      <svg className="absolute inset-0 z-[12] size-full overflow-visible" viewBox="0 0 735 625" fill="none">
        <defs>
          <linearGradient id="heroProjectionPurple" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="rgba(192,132,252,0.55)" />
            <stop offset="1" stopColor="rgba(126,34,206,0.08)" />
          </linearGradient>
        </defs>

        <path d="M280 190 C221 174 189 128 126 125" stroke="url(#heroProjectionPurple)" strokeWidth="1.2" strokeDasharray="3 6" />
        <path d="M495 191 C548 170 568 122 630 116" stroke="rgba(192,132,252,0.42)" strokeWidth="1.2" strokeDasharray="3 6" />
        <path d="M510 287 C568 279 587 303 650 296" stroke="rgba(216,180,254,0.43)" strokeWidth="1.2" strokeDasharray="3 6" />
        <path d="M286 323 C218 335 193 380 120 397" stroke="rgba(168,85,247,0.40)" strokeWidth="1.2" strokeDasharray="3 6" />
        <path d="M451 353 C500 390 514 435 551 466" stroke="rgba(192,132,252,0.40)" strokeWidth="1.2" strokeDasharray="3 6" />

        <circle cx="280" cy="190" r="3" fill="rgba(192,132,252,0.92)" />
        <circle cx="495" cy="191" r="3" fill="rgba(192,132,252,0.85)" />
        <circle cx="510" cy="287" r="3" fill="rgba(216,180,254,0.86)" />
        <circle cx="286" cy="323" r="3" fill="rgba(168,85,247,0.86)" />

        {/* petites projections */}
        <path d="M280 190 L249 179 L261 207 Z" fill="rgba(168,85,247,0.025)" />
        <path d="M495 191 L523 171 L528 206 Z" fill="rgba(192,132,252,0.025)" />
      </svg>

      {/* Bras articulé complet derrière le moniteur */}
      <svg className="absolute left-[189px] top-[250px] z-[14] h-[350px] w-[425px] overflow-visible" viewBox="0 0 425 350" fill="none">
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

        {/* fixation écran */}
        <path d="M218 8 L218 62" stroke="#0d0a10" strokeWidth="35" strokeLinecap="round" />
        <path d="M218 8 L218 62" stroke="url(#heroArmMetal)" strokeWidth="27" strokeLinecap="round" />
        <path d="M214 12 L214 58" stroke="url(#heroArmEdge)" strokeWidth="2" strokeLinecap="round" />

        <circle cx="218" cy="66" r="23" fill="#17121c" stroke="rgba(216,180,254,0.24)" strokeWidth="1.5" />
        <circle cx="218" cy="66" r="12" fill="#2b2033" stroke="rgba(192,132,252,0.30)" />
        <circle cx="218" cy="66" r="4" fill="rgba(216,180,254,0.32)" />

        {/* premier segment — rigide, beaucoup moins déporté */}
        <path d="M207 81 L187 137" stroke="#0d0a10" strokeWidth="31" strokeLinecap="round" />
        <path d="M207 81 L187 137" stroke="url(#heroArmMetal)" strokeWidth="23" strokeLinecap="round" />
        <path d="M202 83 L183 134" stroke="url(#heroArmEdge)" strokeWidth="2" strokeLinecap="round" />

        {/* articulation centrale — rapprochée de l'axe écran / pied */}
        <circle cx="186" cy="146" r="21" fill="#17121c" stroke="rgba(216,180,254,0.20)" strokeWidth="1.5" />
        <circle cx="186" cy="146" r="9" fill="#2c2134" />
        <circle cx="186" cy="146" r="3" fill="rgba(192,132,252,0.35)" />

        {/* second segment — presque vertical, revient naturellement au centre du pied */}
        <path d="M188 166 L201 239" stroke="#0d0a10" strokeWidth="34" strokeLinecap="round" />
        <path d="M188 166 L201 239" stroke="url(#heroArmMetal)" strokeWidth="26" strokeLinecap="round" />
        <path d="M184 169 L197 235" stroke="url(#heroArmEdge)" strokeWidth="2" strokeLinecap="round" />

        {/* base massive, volontairement très basse */}
        <path d="M176 235 C161 261 137 276 103 287 C73 297 43 308 18 334 C95 345 303 345 395 334 C369 307 338 296 304 286 C270 276 247 260 233 235 Z" fill="url(#heroBaseMetal)" stroke="rgba(216,180,254,0.15)" />
        <path d="M34 329 C123 313 294 313 380 329" stroke="rgba(216,180,254,0.20)" strokeWidth="1.3" />
        <path d="M54 330 C139 320 278 320 361 330" stroke="rgba(192,132,252,0.22)" strokeWidth="8" opacity="0.32" />
        <path d="M74 336 C151 328 267 328 342 336" stroke="rgba(126,34,206,0.18)" strokeWidth="15" opacity="0.25" />

        {/* la base commence à se dissoudre dans l'horizon */}
        <ellipse cx="208" cy="344" rx="190" ry="27" fill="rgba(23,19,31,0.72)" />
        <ellipse cx="208" cy="337" rx="158" ry="16" fill="rgba(126,34,206,0.08)" />
      </svg>

      {/* Monitor physique */}
      <div className="absolute left-[147px] top-[100px] z-30 h-[319px] w-[485px] origin-center [transform:perspective(1200px)_rotateY(-2.4deg)_rotateX(0.8deg)_rotateZ(-1.7deg)]">
        {/* coque arrière / tranche */}
        <div className="absolute inset-0 translate-x-[6px] translate-y-[8px] rounded-[32px] bg-[#0b0910] shadow-[0_38px_90px_rgba(31,17,39,0.34)]" />
        <div className="absolute -right-[8px] bottom-[25px] top-[22px] w-[13px] rounded-r-[22px] bg-[linear-gradient(90deg,#211725,#0a080d)]" />

        {/* coque frontale */}
        <div className="absolute inset-0 rounded-[32px] bg-[linear-gradient(145deg,#4a3754_0%,#2a2031_7%,#17121d_23%,#0d0b11_100%)] p-[9px] shadow-[0_38px_84px_rgba(41,23,51,0.28),inset_0_1px_0_rgba(255,255,255,0.19)]">
          <div className="pointer-events-none absolute inset-[2px] rounded-[30px] border border-white/[0.075]" />

          {/* Screen */}
          <div className="relative h-[289px] overflow-hidden rounded-[23px] border border-[#d8b4fe]/13 bg-[#0c0a10] shadow-[inset_0_0_50px_rgba(126,34,206,0.07),0_0_25px_rgba(147,51,234,0.05)]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_15%,rgba(147,51,234,0.17),transparent_36%),linear-gradient(145deg,#111019_0%,#0c0b11_50%,#121019_100%)]" />

            {/* IDE topbar */}
            <div className="relative z-10 flex h-[30px] items-center justify-between border-b border-white/[0.065] bg-white/[0.026] px-3">
              <div className="flex items-center gap-1.5">
                <span className="size-1.5 rounded-full bg-[#ef78d8]/70 shadow-[0_0_7px_rgba(239,120,216,0.46)]" />
                <span className="size-1.5 rounded-full bg-[#8b5cf6]/58" />
                <span className="size-1.5 rounded-full bg-white/15" />
              </div>

              <div className="flex items-center gap-2">
                <ServerCog size={10} className="text-[#d8b4fe]/43" />
                <span className="text-[5px] font-black uppercase tracking-[0.18em] text-white/24">workspace / production</span>
              </div>

              <span className="flex items-center gap-1.5 text-[5px] font-bold uppercase tracking-[0.1em] text-[#22d3ee]/48"><span className="size-1 rounded-full bg-[#22d3ee]/75 shadow-[0_0_6px_rgba(34,211,238,0.55)]" />online</span>
            </div>

            {/* IDE */}
            <div className="relative z-10 grid h-[calc(100%-30px)] grid-cols-[0.18fr_0.48fr_0.34fr]">
              <div className="border-r border-white/[0.055] bg-black/10 px-2 py-3">
                <span className="text-[5px] font-black uppercase tracking-[0.14em] text-white/18">Explorer</span>

                <div className="mt-3 space-y-1.5">
                  <ExplorerLine icon={<Folder size={7} />} label="src" active />
                  <ExplorerLine icon={<Folder size={7} />} label="workers" />
                  <ExplorerLine icon={<Folder size={7} />} label="api" />
                  <ExplorerLine icon={<Database size={7} />} label="database" />
                  <ExplorerLine icon={<Bot size={7} />} label="scrapers" />
                </div>

                <div className="mt-5 border-t border-white/[0.05] pt-3">
                  <span className="text-[5px] font-black uppercase tracking-[0.12em] text-white/14">Services</span>
                  <div className="mt-2 space-y-1.5">
                    <ServiceStatus name="api" />
                    <ServiceStatus name="redis" />
                    <ServiceStatus name="worker" />
                  </div>
                </div>
              </div>

              <div className="flex min-w-0 flex-col border-r border-white/[0.055]">
                <div className="flex h-[25px] items-center gap-1 border-b border-white/[0.05] bg-white/[0.018] px-2">
                  <Code2 size={8} className="text-[#c084fc]/58" />
                  <span className="text-[5px] text-white/27">orchestrator.ts</span>
                  <span className="ml-auto text-[5px] text-white/11">×</span>
                </div>

                <div className="flex-1 px-3 py-3 font-mono text-[6px] leading-[1.78]">
                  <EditorLine n="01"><Syntax color="purple">export</Syntax> <Syntax color="blue">async function</Syntax> <Syntax color="white">runPipeline</Syntax>() {"{"}</EditorLine>
                  <EditorLine n="02" indent><Syntax color="purple">const</Syntax> jobs = <Syntax color="blue">await</Syntax> queue.pull();</EditorLine>
                  <EditorLine n="03" indent><Syntax color="purple">const</Syntax> data = <Syntax color="blue">await</Syntax> scraper.collect(jobs);</EditorLine>
                  <EditorLine n="04" indent><Syntax color="purple">await</Syntax> database.persist(data);</EditorLine>
                  <EditorLine n="05" indent><Syntax color="purple">return</Syntax> product.build(data);</EditorLine>
                  <EditorLine n="06">{"}"}</EditorLine>

                  <div className="mt-4 rounded-[6px] border border-[#9333ea]/11 bg-[#9333ea]/[0.047] px-2 py-2">
                    <span className="text-[5px] font-bold uppercase tracking-[0.1em] text-[#d8b4fe]/36">Architecture</span>
                    <div className="mt-2 flex items-center gap-1">
                      <ArchitecturePill label="API" />
                      <ChevronRight size={6} className="text-white/15" />
                      <ArchitecturePill label="QUEUE" accent />
                      <ChevronRight size={6} className="text-white/15" />
                      <ArchitecturePill label="WORKER" />
                    </div>
                  </div>
                </div>

                <div className="h-[68px] border-t border-white/[0.055] bg-black/20 px-3 py-2 font-mono text-[5px] leading-[1.6]">
                  <div className="mb-1 flex items-center gap-3 text-white/17"><span className="text-[#c084fc]/45">TERMINAL</span><span>OUTPUT</span><span>PROBLEMS</span></div>
                  <p className="text-white/22"><span className="text-[#a855f7]/68">→</span> worker:start --concurrency=8</p>
                  <p className="text-[#22d3ee]/40">✓ redis connected · postgres ready</p>
                  <p className="text-white/18">waiting for jobs...</p>
                </div>
              </div>

              {/* dashboard clairement identifiable */}
              <div className="flex min-w-0 flex-col bg-[#111019]/82 p-3">
                <div className="flex items-start justify-between">
                  <div>
                    <span className="block text-[5px] font-black uppercase tracking-[0.14em] text-white/18">System health</span>
                    <span className="mt-1 block text-[11px] font-black text-white/74">Production</span>
                  </div>
                  <Activity size={11} className="text-[#c084fc]/54" />
                </div>

                <div className="mt-3 grid grid-cols-3 gap-1.5">
                  <Metric value="99.9%" label="API" />
                  <Metric value="8" label="Workers" />
                  <Metric value="24ms" label="DB" />
                </div>

                <div className="mt-2.5 rounded-[9px] border border-white/[0.055] bg-white/[0.025] p-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[5px] font-bold text-white/23">Requests / min</span>
                    <span className="text-[5px] font-black text-[#c084fc]/50">+18.4%</span>
                  </div>

                  <svg className="mt-2 h-[42px] w-full" viewBox="0 0 130 42" fill="none">
                    <defs>
                      <linearGradient id="heroChartFill" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0" stopColor="rgba(168,85,247,0.30)" />
                        <stop offset="1" stopColor="rgba(168,85,247,0)" />
                      </linearGradient>
                    </defs>
                    <path d="M0 34 C13 31 16 24 28 27 C41 30 43 14 57 19 C72 25 77 8 89 13 C101 17 108 7 130 4 L130 42 L0 42 Z" fill="url(#heroChartFill)" />
                    <path d="M0 34 C13 31 16 24 28 27 C41 30 43 14 57 19 C72 25 77 8 89 13 C101 17 108 7 130 4" stroke="rgba(192,132,252,0.76)" strokeWidth="1.5" />
                  </svg>
                </div>

                <div className="mt-2.5 flex-1 rounded-[9px] border border-white/[0.055] bg-white/[0.018] p-2">
                  <span className="text-[5px] font-bold text-white/20">Recent jobs</span>
                  <div className="mt-2 space-y-1.5">
                    <JobRow name="scrape:odds" time="120ms" />
                    <JobRow name="sync:events" time="84ms" />
                    <JobRow name="model:update" time="310ms" />
                  </div>
                </div>
              </div>
            </div>

            {/* Screen glass */}
            <div className="pointer-events-none absolute -right-[35px] -top-[100px] h-[280px] w-[115px] rotate-[22deg] bg-gradient-to-r from-transparent via-white/[0.043] to-transparent blur-[1.5px]" />
            <div className="pointer-events-none absolute inset-x-[10%] top-0 h-px bg-gradient-to-r from-transparent via-white/[0.20] to-transparent" />
          </div>

          {/* bord inférieur plus massif */}
          <div className="absolute inset-x-[22px] bottom-[3px] h-[7px] rounded-b-[13px] bg-[linear-gradient(180deg,rgba(255,255,255,0.045),rgba(0,0,0,0.28))]" />
          <div className="absolute bottom-[4px] left-1/2 size-1 -translate-x-1/2 rounded-full bg-[#c084fc]/72 shadow-[0_0_9px_rgba(192,132,252,0.70)]" />
        </div>
      </div>

      {/* SATELLITE ARRIÈRE — terminal */}
      <div className="peer/terminal absolute left-[18px] top-[62px] z-[60] h-[125px] w-[190px] rotate-[-6deg] rounded-[20px]" />

      <div className="pointer-events-none absolute left-[24px] top-[70px] z-20 w-[175px] origin-center rotate-[-6deg] scale-[0.92] opacity-[0.78] transition-all duration-500 peer-hover/terminal:z-50 peer-hover/terminal:-translate-y-2 peer-hover/terminal:rotate-[-3deg] peer-hover/terminal:scale-[1.05] peer-hover/terminal:opacity-100">
        <div className="overflow-hidden rounded-[18px] border border-white/55 bg-[#f0ebf2]/90 shadow-[0_18px_42px_rgba(43,29,51,0.13)] backdrop-blur-xl transition-shadow duration-500 peer-hover/terminal:shadow-[0_28px_60px_rgba(82,40,102,0.22),0_0_26px_rgba(168,85,247,0.10)]">
          <div className="flex items-center justify-between border-b border-black/[0.07] px-3.5 py-2.5">
            <div className="flex items-center gap-2">
              <Terminal size={11} className="text-[#6b21a8]" />
              <span className="text-[6px] font-black uppercase tracking-[0.15em] text-black/38">Terminal</span>
            </div>

            <span className="size-1 rounded-full bg-[#22c55e]/65 shadow-[0_0_6px_rgba(34,197,94,0.25)]" />
          </div>

          <div className="space-y-1.5 px-3.5 py-3 font-mono text-[6px] leading-[1.5]">
            <p className="text-black/47"><span className="text-[#7e22ce]">leo@build</span> ~ % pnpm deploy</p>
            <p className="text-black/28">✓ api compiled</p>
            <p className="text-black/28">✓ 8 workers connected</p>
            <p className="font-bold text-[#6b21a8]/66">ready · production online</p>
          </div>
        </div>
      </div>

      {/* SATELLITE MILIEU — database */}
      <div className="group absolute right-[1px] top-[83px] z-40 w-[180px] origin-center rotate-[6deg] transition-all duration-500 hover:z-50 hover:rotate-[2deg] hover:scale-[1.075]">
        <div className="rounded-[20px] border border-white/[0.09] bg-[#25162e]/97 p-3.5 text-white shadow-[0_26px_55px_rgba(49,24,62,0.27)] transition-shadow duration-500 group-hover:shadow-[0_34px_70px_rgba(67,30,84,0.34),0_0_28px_rgba(192,132,252,0.12)]">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2"><Database size={13} className="text-[#d8b4fe]" /><span className="text-[6px] font-black uppercase tracking-[0.15em] text-white/33">PostgreSQL</span></div>
            <span className="text-[5px] font-bold text-[#c084fc]/55">CONNECTED</span>
          </div>

          <div className="relative mt-3 h-[105px]">
            <DbTable className="left-0 top-0" title="users" rows={["id · uuid", "email · text", "role · enum"]} />
            <DbTable className="right-0 top-[31px]" title="projects" rows={["id · uuid", "owner_id · fk", "status · text"]} accent />

            <svg className="absolute inset-0 size-full" viewBox="0 0 153 105" fill="none">
              <path d="M68 40 C89 40 79 59 94 59" stroke="rgba(192,132,252,0.52)" strokeWidth="1" strokeDasharray="2 3" />
              <circle cx="68" cy="40" r="2" fill="rgba(192,132,252,0.75)" />
              <circle cx="94" cy="59" r="2" fill="rgba(192,132,252,0.75)" />
            </svg>
          </div>

          <div className="mt-2 flex items-center justify-between border-t border-white/[0.06] pt-2 text-[5px] font-bold uppercase tracking-[0.11em] text-white/20"><span>2 tables</span><span>relation mapped</span></div>
        </div>
      </div>

      {/* SATELLITE PREMIER PLAN — crawler */}
      <div className="peer/crawler absolute bottom-[94px] left-[17px] z-[60] h-[155px] w-[218px] rotate-[5deg] rounded-[20px]" />

      <div className="pointer-events-none absolute bottom-[102px] left-[25px] z-40 w-[202px] origin-center rotate-[5deg] transition-all duration-500 peer-hover/crawler:z-50 peer-hover/crawler:-translate-y-2 peer-hover/crawler:rotate-[2deg] peer-hover/crawler:scale-[1.07]">
        <div className="rounded-[20px] border border-white/70 bg-white/88 p-3.5 shadow-[0_26px_58px_rgba(43,28,51,0.16)] backdrop-blur-xl transition-shadow duration-500 peer-hover/crawler:shadow-[0_34px_72px_rgba(76,34,96,0.23),0_0_27px_rgba(168,85,247,0.10)]">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ScanSearch size={13} className="text-[#7e22ce]" />
              <span className="text-[6px] font-black uppercase tracking-[0.15em] text-black/35">Crawler / Worker</span>
            </div>

            <span className="flex items-center gap-1 text-[5px] font-bold text-[#16a34a]/55">
              <span className="size-1 rounded-full bg-[#22c55e]/65" />
              RUNNING
            </span>
          </div>

          <div className="mt-3 flex items-center gap-2 rounded-[7px] border border-black/[0.06] bg-black/[0.025] px-2 py-2">
            <Globe2 size={9} className="shrink-0 text-black/26" />
            <span className="min-w-0 flex-1 truncate font-mono text-[5px] text-black/35">https://source.example/events</span>
            <Play size={7} className="text-[#7e22ce]/55" />
          </div>

          <div className="mt-3 space-y-2">
            <ScraperRow label="Fetch page" value="200" done />
            <ScraperRow label="Parse events" value="148" done />
            <ScraperRow label="Normalize data" value="92%" />
          </div>

          <div className="mt-3 h-1 overflow-hidden rounded-full bg-black/[0.055]">
            <div className="h-full w-[82%] rounded-full bg-gradient-to-r from-[#7e22ce]/65 via-[#9333ea]/68 to-[#c084fc]/72 shadow-[0_0_7px_rgba(168,85,247,0.24)]" />
          </div>
        </div>
      </div>

      {/* SATELLITE ARRIÈRE — API */}
      <div className="group absolute right-[4px] top-[300px] z-20 w-[190px] origin-center rotate-[-5deg] scale-[0.94] opacity-[0.82] transition-all duration-500 hover:z-50 hover:rotate-[-2deg] hover:scale-[1.04] hover:opacity-100">
        <div className="rounded-[19px] border border-white/55 bg-[#ece6f0]/91 p-3.5 shadow-[0_18px_45px_rgba(44,29,53,0.13)] backdrop-blur-xl transition-shadow duration-500 group-hover:shadow-[0_28px_60px_rgba(74,35,93,0.21),0_0_24px_rgba(192,132,252,0.09)]">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2"><Waypoints size={13} className="text-[#6d28d9]" /><span className="text-[6px] font-black uppercase tracking-[0.15em] text-black/34">Request pipeline</span></div>
            <span className="font-mono text-[5px] text-black/22">POST /api</span>
          </div>

          <div className="mt-4 flex items-start">
            <FlowNode icon={<Monitor size={9} />} label="CLIENT" />
            <FlowConnector />
            <FlowNode icon={<Network size={9} />} label="API" accent />
            <FlowConnector />
            <FlowNode icon={<Bot size={9} />} label="WORKER" />
            <FlowConnector />
            <FlowNode icon={<Database size={9} />} label="DB" />
          </div>

          <div className="mt-3 flex items-center justify-between border-t border-black/[0.055] pt-2 text-[5px] font-bold text-black/24"><span>200 OK</span><span>38 ms</span></div>
        </div>
      </div>

      {/* SATELLITE PREMIER PLAN — produit final */}
      <div className="group absolute bottom-[47px] right-[61px] z-50 w-[228px] origin-center rotate-[2deg] transition-all duration-500 hover:-translate-y-2 hover:rotate-0 hover:scale-[1.07]">
        <div className="overflow-hidden rounded-[21px] border border-white/[0.10] bg-[#18141d] shadow-[0_30px_66px_rgba(43,22,54,0.32)] transition-shadow duration-500 group-hover:shadow-[0_40px_82px_rgba(61,25,78,0.38),0_0_30px_rgba(192,132,252,0.13)]">
          <div className="flex h-[25px] items-center gap-2 border-b border-white/[0.06] bg-white/[0.025] px-3">
            <div className="flex gap-1"><span className="size-1 rounded-full bg-white/12" /><span className="size-1 rounded-full bg-white/12" /><span className="size-1 rounded-full bg-[#c084fc]/58" /></div>
            <div className="flex min-w-0 flex-1 items-center gap-1.5 rounded-[5px] bg-white/[0.04] px-2 py-1"><Globe2 size={6} className="text-white/18" /><span className="truncate text-[5px] text-white/20">app.production.dev</span></div>
          </div>

          <div className="relative h-[116px] overflow-hidden bg-[linear-gradient(135deg,#23182b,#111018)] p-3">
            <div className="absolute -right-9 -top-10 size-28 rounded-full bg-[#9333ea]/23 blur-[28px]" />

            <div className="relative flex h-full gap-2.5">
              <div className="w-[25%] rounded-[7px] border border-white/[0.05] bg-black/12 p-2">
                <Boxes size={9} className="text-[#d8b4fe]/52" />
                <div className="mt-3 space-y-2"><span className="block h-1 w-full rounded-full bg-white/10" /><span className="block h-1 w-[72%] rounded-full bg-white/[0.055]" /><span className="block h-1 w-[84%] rounded-full bg-[#9333ea]/20" /><span className="block h-1 w-[60%] rounded-full bg-white/[0.055]" /></div>
              </div>

              <div className="flex flex-1 flex-col gap-2">
                <div className="grid grid-cols-3 gap-1.5"><MiniMetric value="€24.9k" /><MiniMetric value="148" /><MiniMetric value="+21%" /></div>

                <div className="flex-1 rounded-[7px] border border-[#9333ea]/12 bg-[#9333ea]/[0.055] p-2">
                  <svg className="h-full w-full" viewBox="0 0 120 45" fill="none">
                    <path d="M0 37 C12 34 18 27 30 29 C41 31 47 17 59 21 C71 24 76 10 88 13 C102 17 108 7 120 5" stroke="rgba(192,132,252,0.74)" strokeWidth="1.4" />
                    <path d="M0 37 C12 34 18 27 30 29 C41 31 47 17 59 21 C71 24 76 10 88 13 C102 17 108 7 120 5" stroke="rgba(192,132,252,0.13)" strokeWidth="6" />
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between border-t border-white/[0.055] bg-white/[0.018] px-3 py-2">
            <span className="text-[5px] font-black uppercase tracking-[0.13em] text-white/22">Product / output</span>
            <span className="flex items-center gap-1 text-[5px] font-bold text-[#22d3ee]/38"><Check size={6} />deployed</span>
          </div>
        </div>
      </div>

      {/* Projection lumineuse du monitor sur support + horizon */}
      <div className="absolute bottom-[49px] left-[215px] z-[13] h-[22px] w-[385px] rounded-full bg-[#9333ea]/15 blur-[16px]" />
      <div className="absolute bottom-[61px] left-[305px] z-[13] h-[5px] w-[225px] rounded-full bg-[#c084fc]/13 blur-[7px]" />

      {/* Repères */}
      <div className="absolute left-[1px] top-[249px] z-30 flex items-center gap-2 opacity-65"><span className="size-2 rotate-45 border border-[#7e22ce]/70" /><span className="h-px w-11 bg-gradient-to-r from-[#7e22ce]/55 to-transparent" /></div>
      <div className="absolute right-[7px] top-[46px] size-2 rotate-45 bg-[#9333ea]/50 shadow-[0_0_10px_rgba(147,51,234,0.42)]" />
      <div className="absolute bottom-[34px] left-[47%] size-2 rounded-full bg-[#a855f7]/48 shadow-[0_0_13px_rgba(168,85,247,0.5)]" />
    </div>
  );
}

function ExplorerLine({ icon, label, active = false }: { icon: ReactNode; label: string; active?: boolean }) {
  return <div className={`flex items-center gap-1.5 rounded-[4px] px-1.5 py-1 text-[5px] ${active ? "bg-[#9333ea]/10 text-[#d8b4fe]/55" : "text-white/20"}`}>{icon}<span>{label}</span></div>;
}

function ServiceStatus({ name }: { name: string }) {
  return <div className="flex items-center justify-between text-[5px]"><span className="text-white/18">{name}</span><span className="size-1 rounded-full bg-[#22d3ee]/55 shadow-[0_0_5px_rgba(34,211,238,0.35)]" /></div>;
}

function EditorLine({ n, indent = false, children }: { n: string; indent?: boolean; children: ReactNode }) {
  return <div className="flex"><span className="w-5 shrink-0 text-white/11">{n}</span><span className={`${indent ? "pl-2" : ""} text-white/31`}>{children}</span></div>;
}

function Syntax({ color, children }: { color: "purple" | "blue" | "white"; children: ReactNode }) {
  const styles = { purple: "text-[#c084fc]/68", blue: "text-[#a78bfa]/67", white: "text-white/42" } as const;
  return <span className={styles[color]}>{children}</span>;
}

function ArchitecturePill({ label, accent = false }: { label: string; accent?: boolean }) {
  return <span className={`rounded-[4px] border px-1.5 py-1 text-[4px] font-bold ${accent ? "border-[#c084fc]/16 bg-[#9333ea]/12 text-[#d8b4fe]/44" : "border-white/[0.055] bg-white/[0.025] text-white/21"}`}>{label}</span>;
}

function Metric({ value, label }: { value: string; label: string }) {
  return <div className="rounded-[7px] border border-white/[0.05] bg-white/[0.025] px-1.5 py-2"><span className="block text-[7px] font-black text-white/58">{value}</span><span className="mt-0.5 block text-[4px] font-bold uppercase tracking-[0.08em] text-white/16">{label}</span></div>;
}

function JobRow({ name, time }: { name: string; time: string }) {
  return <div className="flex items-center gap-1.5"><span className="size-1 rounded-full bg-[#22d3ee]/45" /><span className="min-w-0 flex-1 truncate font-mono text-[4px] text-white/22">{name}</span><span className="font-mono text-[4px] text-white/13">{time}</span></div>;
}

function DbTable({ className, title, rows, accent = false }: { className: string; title: string; rows: readonly string[]; accent?: boolean }) {
  return (
    <div className={`absolute w-[78px] overflow-hidden rounded-[7px] border ${accent ? "border-[#c084fc]/17 bg-[#9333ea]/10" : "border-white/[0.075] bg-white/[0.035]"} ${className}`}>
      <div className={`flex items-center gap-1.5 border-b px-2 py-1.5 ${accent ? "border-[#c084fc]/10" : "border-white/[0.055]"}`}><Database size={6} className={accent ? "text-[#d8b4fe]/55" : "text-white/27"} /><span className="text-[5px] font-bold text-white/44">{title}</span></div>
      <div className="space-y-1 px-2 py-1.5">{rows.map((row) => <span key={row} className="block font-mono text-[4px] text-white/20">{row}</span>)}</div>
    </div>
  );
}

function ScraperRow({ label, value, done = false }: { label: string; value: string; done?: boolean }) {
  return <div className="flex items-center gap-2"><span className={`flex size-3 items-center justify-center rounded-full ${done ? "bg-[#22c55e]/10 text-[#16a34a]/55" : "bg-[#9333ea]/10 text-[#7e22ce]/55"}`}>{done ? <Check size={7} /> : <Activity size={7} />}</span><span className="flex-1 text-[5px] font-medium text-black/36">{label}</span><span className="font-mono text-[5px] font-bold text-black/28">{value}</span></div>;
}

function FlowNode({ icon, label, accent = false }: { icon: ReactNode; label: string; accent?: boolean }) {
  return <div className="flex flex-col items-center gap-1.5"><span className={`flex size-7 items-center justify-center rounded-full border ${accent ? "border-[#7e22ce]/30 bg-[#9333ea]/15 text-[#6d28d9]/70 shadow-[0_0_10px_rgba(126,34,206,0.11)]" : "border-black/[0.075] bg-white/45 text-black/28"}`}>{icon}</span><span className="text-[4px] font-black tracking-[0.08em] text-black/23">{label}</span></div>;
}

function FlowConnector() {
  return <span className="relative mt-[13px] h-px flex-1 bg-gradient-to-r from-[#7e22ce]/24 via-[#9333ea]/40 to-[#7e22ce]/24"><span className="absolute right-0 top-1/2 size-1 -translate-y-1/2 rotate-45 border-r border-t border-[#7e22ce]/34" /></span>;
}

function MiniMetric({ value }: { value: string }) {
  return <div className="rounded-[5px] border border-white/[0.05] bg-white/[0.025] px-1.5 py-1.5"><span className="text-[5px] font-black text-white/42">{value}</span></div>;
}