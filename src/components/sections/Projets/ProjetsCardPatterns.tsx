import type { ComponentType } from "react";
import { Binary, CalendarDays, Code2, Percent, Sigma, Target, TicketCheck } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import type { ProjectTheme } from "@/types/projets";

const projetsPatterns = {
  betlab: BetLabCardPattern,
  cuve: CuveCardPattern,
  opensource: OpenSourceCardPattern,
  aideoparieurs: AideOParieursCardPattern,
} satisfies Record<ProjectTheme, ComponentType>;

export function ProjetsCardPattern({ theme }: { theme: ProjectTheme }) {
  const Pattern = projetsPatterns[theme];
  return <Pattern />;
}

function BetLabCardPattern() {
  return (
    <>
      <div className="absolute inset-y-0 right-0 w-[75%] opacity-[0.18] [background-image:linear-gradient(rgba(192,132,252,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(192,132,252,0.15)_1px,transparent_1px)] [background-size:31px_31px] [mask-image:linear-gradient(to_left,black,transparent)]" />

      <Sigma size={175} strokeWidth={0.85} className="absolute -right-7 top-[10%] text-white/[0.045]" />

      <div className="absolute right-7 top-[19%] flex items-end gap-2 opacity-45">
        <span className="h-10 w-5 rounded-t-md bg-[#6366f1]/45" />
        <span className="h-20 w-5 rounded-t-md bg-[#9333ea]/55" />
        <span className="h-14 w-5 rounded-t-md bg-[#c084fc]/60" />
        <span className="h-28 w-5 rounded-t-md bg-[#a855f7]/55" />
      </div>

      <svg viewBox="0 0 320 160" className="absolute right-[-12px] top-[31%] h-[150px] w-[320px] opacity-35">
        <path d="M5 132 C45 120, 63 92, 96 100 S152 52, 190 72 S244 23, 315 34" fill="none" stroke="rgba(192,132,252,0.8)" strokeWidth="2" />
        <path d="M5 145 C62 140, 95 128, 136 133 S200 98, 239 108 S280 77, 315 81" fill="none" stroke="rgba(99,102,241,0.6)" strokeWidth="1.4" />
        <circle cx="190" cy="72" r="4" fill="rgba(216,180,254,0.9)" />
        <circle cx="315" cy="34" r="4" fill="rgba(216,180,254,0.9)" />
      </svg>

      <div className="absolute right-6 top-[8%] rounded-full border border-[#c084fc]/15 bg-[#17131b]/40 px-3 py-1.5 text-[9px] font-black tracking-[0.14em] text-[#d8b4fe]/32">
        1.87 × 54 %
      </div>
    </>
  );
}

function CuveCardPattern() {
  return (
    <>
      <div className="absolute right-[-80px] top-[-45px] size-[265px] rounded-full border border-[#d8b4fe]/10" />
      <div className="absolute right-[-22px] top-[12px] size-[175px] rounded-full border border-white/[0.065]" />

      {/* Tonneau réfrigérant abstrait */}
      <div className="absolute right-6 top-[21%] h-[205px] w-[142px] rounded-[48%_48%_24%_24%/18%_18%_12%_12%] border border-[#c084fc]/17 bg-[linear-gradient(90deg,rgba(255,255,255,0.025),rgba(192,132,252,0.13),rgba(255,255,255,0.025))]">
        <span className="absolute left-0 top-[23%] h-2 w-full bg-[#d8b4fe]/10" />
        <span className="absolute left-0 top-[49%] h-2 w-full bg-[#d8b4fe]/10" />
        <span className="absolute left-0 top-[75%] h-2 w-full bg-[#d8b4fe]/10" />
        <span className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-white/[0.06]" />
        <span className="absolute left-1/2 top-[10%] h-[80%] w-[62%] -translate-x-1/2 rounded-[50%] border border-white/[0.045]" />
      </div>

      <CalendarDays size={125} strokeWidth={0.9} className="absolute right-[31%] top-[9%] text-white/[0.04]" />

      <div className="absolute right-[35%] top-[27%] space-y-2 opacity-38">
        <span className="block h-2 w-20 rounded-full bg-[#c084fc]/35" />
        <span className="block h-2 w-14 rounded-full bg-white/10" />
        <span className="block h-2 w-24 rounded-full bg-white/[0.07]" />
      </div>

      <TicketCheck size={58} strokeWidth={1} className="absolute right-[39%] top-[43%] rotate-[-8deg] text-[#d8b4fe]/[0.08]" />
    </>
  );
}

function OpenSourceCardPattern() {
  return (
    <>
      <div className="absolute inset-y-0 right-0 w-[78%] opacity-[0.16] [background-image:radial-gradient(circle,rgba(216,180,254,0.48)_1.4px,transparent_1.4px)] [background-size:31px_31px] [mask-image:linear-gradient(to_left,black,transparent)]" />

      <svg viewBox="0 0 340 260" className="absolute right-[-12px] top-[7%] h-[280px] w-[350px] opacity-36">
        <g stroke="rgba(192,132,252,0.7)" strokeWidth="1.4">
          <line x1="62" y1="57" x2="165" y2="95" />
          <line x1="165" y1="95" x2="265" y2="51" />
          <line x1="165" y1="95" x2="232" y2="195" />
          <line x1="62" y1="57" x2="81" y2="190" />
          <line x1="81" y1="190" x2="232" y2="195" />
          <line x1="265" y1="51" x2="299" y2="168" />
          <line x1="232" y1="195" x2="299" y2="168" />
        </g>

        <g fill="rgba(216,180,254,0.88)">
          <circle cx="62" cy="57" r="6" />
          <circle cx="165" cy="95" r="9" />
          <circle cx="265" cy="51" r="6" />
          <circle cx="81" cy="190" r="6" />
          <circle cx="232" cy="195" r="8" />
          <circle cx="299" cy="168" r="6" />
        </g>
      </svg>

      <FaGithub size={132} className="absolute -right-5 top-[42%] text-white/[0.035]" />

      <div className="absolute right-[34%] top-[42%] rounded-xl border border-[#c084fc]/10 bg-white/[0.025] p-3 opacity-45">
        <Code2 size={26} className="text-[#d8b4fe]/55" />

        <div className="mt-3 space-y-2">
          <span className="block h-1.5 w-16 rounded-full bg-white/12" />
          <span className="block h-1.5 w-12 rounded-full bg-[#c084fc]/25" />
        </div>
      </div>
    </>
  );
}

function AideOParieursCardPattern() {
  return (
    <>
      <div className="absolute inset-y-0 right-0 w-[76%] opacity-[0.16] [background-image:linear-gradient(rgba(99,102,241,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.2)_1px,transparent_1px)] [background-size:29px_29px] [mask-image:linear-gradient(to_left,black,transparent)]" />

      <div className="absolute right-5 top-[12%] grid grid-cols-3 gap-2 opacity-52">
        {["1", "N", "2", "+2.5", "BTTS", "AH"].map((value) => (
          <span key={value} className="flex size-12 items-center justify-center rounded-xl border border-[#c084fc]/14 bg-[#9333ea]/[0.07] text-[9px] font-black text-[#d8b4fe]/60 backdrop-blur-sm">
            {value}
          </span>
        ))}
      </div>

      <Percent size={110} strokeWidth={0.85} className="absolute right-[40%] top-[10%] text-white/[0.04]" />
      <Target size={90} strokeWidth={0.9} className="absolute right-[7%] top-[43%] text-[#c084fc]/[0.065]" />

      <svg viewBox="0 0 310 145" className="absolute right-[-8px] top-[42%] h-[145px] w-[310px] opacity-32">
        <path d="M5 124 C48 118, 71 89, 104 99 S162 52, 196 69 S255 27, 305 37" fill="none" stroke="rgba(192,132,252,0.82)" strokeWidth="2" />
        <path d="M5 137 C48 132, 90 122, 125 126 S187 99, 224 108 S274 83, 305 87" fill="none" stroke="rgba(99,102,241,0.62)" strokeWidth="1.4" />
      </svg>

      <div className="absolute right-[34%] top-[35%] space-y-2 rounded-xl border border-white/[0.06] bg-white/[0.025] p-3 opacity-45">
        <div className="flex items-center gap-2">
          <Binary size={14} className="text-[#c084fc]" />
          <span className="h-1.5 w-12 rounded-full bg-white/12" />
        </div>

        <span className="block h-1.5 w-20 rounded-full bg-white/[0.08]" />
        <span className="block h-1.5 w-14 rounded-full bg-[#9333ea]/25" />
      </div>
    </>
  );
}