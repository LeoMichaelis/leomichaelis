
import { FileText, BriefcaseBusiness, Building2, IdCard } from "lucide-react";

export function CvIllustration() {
  return (
    <div aria-hidden="true" className="relative h-full w-full [container-type:size]">
      <div className="absolute left-1/2 top-1/2 h-[calc(240*var(--u))] w-[calc(420*var(--u))] -translate-x-1/2 -translate-y-1/2 [--u:min(calc(100cqw/420),calc(100cqh/240))] [font-size:calc(16*var(--u))]">
        <div className="relative mx-auto h-full w-[21.5em]">
          {/* Halo derrière les documents */}
          <div className="absolute left-1/2 top-1/2 h-[12.5em] w-[25em] -translate-x-1/2 -translate-y-1/2 rounded-[44%_56%_48%_52%/52%_44%_56%_48%] bg-[rgba(216,180,254,0.58)]" />
          {/* Grande feuille */}
          <div className="absolute left-0 top-1/2 z-10 -translate-y-1/2 h-[12.25em] w-[18.375em] rotate-[-4deg] overflow-hidden rounded-[1.75em] border border-black/[0.08] bg-[#fcfafc] p-[1em] shadow-[0_1.5em_3.4375em_rgba(40,28,48,0.15),inset_0_1px_0_rgba(255,255,255,0.95)]">
            <div className="flex items-center gap-[.75em]">
              <div className="flex size-[2.5em] items-center justify-center rounded-[.75em] border border-[#9333ea]/10 bg-[#9333ea]/10 text-[#7e22ce]">
                <FileText className="size-[1.25em]" />
              </div>
              <div className="space-y-[.5em]">
                <span className="block h-[.5em] w-[7em] rounded-full bg-black/22" />
                <span className="block h-[.375em] w-[5em] rounded-full bg-black/[0.08]" />
              </div>
            </div>
            <div className="mt-[1.5em] grid grid-cols-[0.36fr_0.64fr] gap-[1em]">
              <div className="space-y-[.5em] rounded-[.75em] border border-black/[0.055] bg-[#f5f1f7]/80 p-[.75em]">
                <span className="block h-[.375em] w-full rounded-full bg-[#9333ea]/42" />
                <span className="block h-[.375em] w-4/5 rounded-full bg-black/[0.08]" />
                <span className="block h-[.375em] w-3/5 rounded-full bg-black/[0.08]" />
                <span className="block h-[.375em] w-[72%] rounded-full bg-black/[0.08]" />
              </div>
              <div className="space-y-[.75em]">
                <span className="block h-[.5em] w-2/3 rounded-full bg-black/18" />
                <div className="space-y-[.5em]">
                  <span className="block h-[.375em] w-full rounded-full bg-black/[0.07]" />
                  <span className="block h-[.375em] w-5/6 rounded-full bg-black/[0.07]" />
                  <span className="block h-[.375em] w-3/4 rounded-full bg-black/[0.07]" />
                </div>
                <span className="block h-[.5em] w-1/2 rounded-full bg-[#6366f1]/20" />
                <div className="space-y-[.5em]">
                  <span className="block h-[.375em] w-full rounded-full bg-black/[0.07]" />
                  <span className="block h-[.375em] w-4/5 rounded-full bg-black/[0.07]" />
                </div>
              </div>
            </div>
          </div>
          {/* Seconde feuille */}
          <div className="absolute right-0 top-[17%] z-0 h-[10em] w-[7em] rotate-[9deg] rounded-[1em] border border-[#9333ea]/12 bg-[#fcfafc] shadow-[0_1.25em_2.5em_rgba(45,28,56,0.1)]">
            <div className="space-y-[.5em] p-[1em]">
              <span className="block h-[.375em] w-[3.5em] rounded-full bg-[#9333ea]/22" />
              <span className="block h-[.375em] w-full rounded-full bg-black/[0.06]" />
              <span className="block h-[.375em] w-4/5 rounded-full bg-black/[0.06]" />
              <span className="block h-[.375em] w-3/5 rounded-full bg-black/[0.06]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


export function ParcoursIllustration() {
  const paper = "absolute z-10 overflow-hidden rounded-[1em] border border-black/[0.08] bg-[#fcfafc] shadow-[0_1.5em_3.4375em_rgba(40,28,48,0.15),inset_0_1px_0_rgba(255,255,255,0.95)]";
  return (
    <div aria-hidden="true" className="relative size-full [container-type:size]">
      <div className="absolute left-1/2 top-1/2 h-[calc(240*var(--u))] w-[calc(420*var(--u))] -translate-x-1/2 -translate-y-1/2 [--u:min(calc(100cqw/420),calc(100cqh/240))] [font-size:calc(16*var(--u))]">

        {/* Trajectoire et connexions */}
        <svg className="pointer-events-none absolute inset-0 size-full" viewBox="0 0 420 240" fill="none">
          <defs>
            <linearGradient id="parcours-route" x1="38" y1="211" x2="381" y2="124" gradientUnits="userSpaceOnUse">
              <stop stopColor="#cba4df" />
              <stop offset=".48" stopColor="#9159b2" />
              <stop offset="1" stopColor="#b878d3" />
            </linearGradient>
          </defs>

          {/* Repères discrets */}
          <circle cx="211" cy="119" r="91" stroke="#ad84c1" strokeOpacity=".10" />
          <circle cx="211" cy="119" r="111" stroke="#ad84c1" strokeOpacity=".055" />

          {/* Trajectoire */}
          <path d="M37 217C99 224 133 183 210 181S322 176 381 124" stroke="#855398" strokeOpacity=".13" strokeWidth="12" strokeLinecap="round" />
          <path d="M37 217C99 224 133 183 210 181S322 176 381 124" stroke="url(#parcours-route)" strokeWidth="4" strokeLinecap="round" />
          <path d="M37 216C99 223 133 182 210 180S322 175 381 123" stroke="#fff5ff" strokeOpacity=".62" strokeWidth=".9" strokeLinecap="round" />

          {/* Connexions aux documents */}
          <path d="M85 205V189M211 181V157M354 146V110" stroke="#9d70b6" strokeWidth="1.5" strokeDasharray="3 4" />

          {/* Jalons */}
          {[{ x: 85, y: 214 }, { x: 211, y: 181 }, { x: 354, y: 146 }].map((point, index) => (
            <g key={index}>
              <circle cx={point.x} cy={point.y} r="12" fill="#b78aca" fillOpacity=".13" />
              <circle cx={point.x} cy={point.y} r="6.5" fill="#fbf5fd" stroke="#aa78c3" strokeWidth="1.5" />
              <circle cx={point.x} cy={point.y} r="2.5" fill="#8955ac" />
            </g>
          ))}
        </svg>

        {/* Document 1 — Présentation classique */}
        <div className={`${paper} left-[1.2em] top-[6.25em] h-[5.5em] w-[7.2em] rotate-[-6deg] p-[.75em]`}>
          <div className="flex items-center gap-[.5em]">
            <div className="flex size-[1.85em] shrink-0 items-center justify-center rounded-[.55em] border border-[#9333ea]/10 bg-[#9333ea]/10 text-[#7e22ce]">
              <BriefcaseBusiness className="size-[1.05em]" strokeWidth={1.7} />
            </div>
            <div className="space-y-[.4em]">
              <span className="block h-[.38em] w-[3.2em] rounded-full bg-black/22" />
              <span className="block h-[.3em] w-[2.25em] rounded-full bg-black/[0.08]" />
            </div>
          </div>
          <div className="mt-[.75em] h-px bg-black/[0.055]" />
          <div className="mt-[.65em] space-y-[.4em]">
            <span className="block h-[.3em] w-full rounded-full bg-black/[0.08]" />
            <span className="block h-[.3em] w-4/5 rounded-full bg-black/[0.08]" />
          </div>
          <div className="mt-[.65em] flex items-center gap-[.3em]">
            <span className="size-[.3em] rounded-full bg-[#9333ea]/45" />
            <span className="h-[.28em] w-[2.1em] rounded-full bg-[#9333ea]/20" />
          </div>
        </div>

        {/* Document 2 — Fiche d'expérience structurée */}
        <div className={`${paper} left-[9.25em] top-[3.1em] h-[6.65em] w-[8.2em] p-[.85em]`}>
          <div className="flex items-start justify-between gap-[.5em]">
            <div className="space-y-[.48em] pt-[.25em]">
              <span className="block h-[.42em] w-[4.1em] rounded-full bg-black/22" />
              <span className="block h-[.3em] w-[2.9em] rounded-full bg-black/[0.08]" />
            </div>
            <div className="flex size-[2em] shrink-0 items-center justify-center rounded-[.6em] border border-[#9333ea]/10 bg-[#9333ea]/10 text-[#7e22ce]">
              <Building2 className="size-[1.15em]" strokeWidth={1.65} />
            </div>
          </div>
          <div className="mt-[.75em] h-px bg-black/[0.055]" />
          <div className="mt-[.7em] flex gap-[.6em]">
            <span className="w-[.2em] shrink-0 rounded-full bg-[#9333ea]/40" />
            <div className="flex-1 space-y-[.5em]">
              <span className="block h-[.32em] w-full rounded-full bg-black/[0.13]" />
              <span className="block h-[.32em] w-5/6 rounded-full bg-black/[0.08]" />
              <span className="block h-[.32em] w-[92%] rounded-full bg-black/[0.08]" />
            </div>
          </div>
          <div className="mt-[.75em] flex gap-[.35em]">
            <span className="h-[.35em] w-[2.5em] rounded-full bg-[#9333ea]/25" />
            <span className="h-[.35em] w-[1.6em] rounded-full bg-black/[0.07]" />
          </div>
        </div>

        {/* Document 3 — Fiche professionnelle avec colonne latérale */}
        <div className={`${paper} right-[.5em] top-[1.4em] h-[5.8em] w-[7.2em] rotate-[6deg] p-[.75em]`}>
          <div className="flex h-full gap-[.65em]">
            <div className="flex w-[1.55em] shrink-0 flex-col items-center justify-center gap-[.65em] rounded-[.55em] border border-[#9333ea]/10 bg-[#f5edf9] text-[#7e22ce]">
              <IdCard className="size-[1.05em]" strokeWidth={1.7} />
              <span className="h-[1.7em] w-px rounded-full bg-[#9333ea]/25" />
            </div>
            <div className="min-w-0 flex-1 pt-[.2em]">
              <span className="block h-[.38em] w-[85%] rounded-full bg-black/22" />
              <span className="mt-[.48em] block h-[.3em] w-[60%] rounded-full bg-black/[0.08]" />
              <div className="mt-[.75em] h-px bg-black/[0.055]" />
              <div className="mt-[.65em] space-y-[.48em]">
                <div className="flex items-center gap-[.3em]">
                  <span className="size-[.25em] shrink-0 rounded-full bg-[#9333ea]/42" />
                  <span className="h-[.3em] flex-1 rounded-full bg-black/[0.10]" />
                </div>
                <div className="flex items-center gap-[.3em]">
                  <span className="size-[.25em] shrink-0 rounded-full bg-[#9333ea]/28" />
                  <span className="h-[.3em] w-[75%] rounded-full bg-black/[0.08]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}