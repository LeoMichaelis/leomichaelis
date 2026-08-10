import { ArrowUpRight, ArrowDownRight, DraftingCompass } from "lucide-react";

import { siteConfig } from "@/config/site";

export function HeaderProjectButton() {
  return (
    <a href={siteConfig.sections.project} className="group relative isolate flex min-w-[224px] shrink-0 items-center gap-3.5 overflow-hidden rounded-[1.15rem] border border-white/[0.13] bg-[#121016] px-4 py-3 shadow-[0_14px_40px_rgba(0,0,0,0.38),inset_0_1px_0_rgba(255,255,255,0.06)] transition-all duration-500 hover:-translate-y-0.5 hover:border-[#c084fc]/42 hover:shadow-[0_20px_55px_rgba(88,28,135,0.27),inset_0_1px_0_rgba(255,255,255,0.09)]">
      <span aria-hidden="true" className="absolute inset-0 -z-30 bg-[linear-gradient(120deg,#141118_0%,#16121a_45%,#201429_100%)]" />
      <span aria-hidden="true" className="absolute -bottom-16 right-[-8px] -z-20 h-28 w-36 rounded-full bg-[#7e22ce]/38 blur-[38px] transition-all duration-700 group-hover:right-5 group-hover:bg-[#a855f7]/48" />
      <span aria-hidden="true" className="absolute -left-12 -top-14 -z-20 h-24 w-28 rounded-full bg-[#6366f1]/13 blur-[34px]" />
      <span aria-hidden="true" className="absolute inset-y-0 right-0 -z-10 w-[57%] opacity-[0.18] [background-image:linear-gradient(rgba(216,180,254,0.22)_1px,transparent_1px),linear-gradient(90deg,rgba(216,180,254,0.22)_1px,transparent_1px)] [background-size:13px_13px] [mask-image:linear-gradient(to_left,black,transparent)] transition-opacity duration-500 group-hover:opacity-[0.30]" />

      {/* Détails projet / blueprint — périphériques */}
      <span aria-hidden="true" className="absolute right-[45px] top-[7px] h-[9px] w-[14px] rotate-[5deg] rounded-[2px] border border-[#d8b4fe]/26 bg-[#a855f7]/[0.06] transition-all duration-700 group-hover:-translate-y-0.5 group-hover:rotate-0 group-hover:border-[#e9d5ff]/45">
        <span className="absolute left-[3px] right-[3px] top-[2px] h-px bg-[#d8b4fe]/30" />
        <span className="absolute left-[3px] top-[5px] h-px w-[5px] bg-[#d8b4fe]/20" />
      </span>

      <span aria-hidden="true" className="absolute bottom-[7px] right-[105px] flex size-[8px] items-center justify-center rounded-full border border-[#c4b5fd]/28 bg-[#6366f1]/[0.06] transition-all duration-500 group-hover:border-[#e9d5ff]/45">
        <span className="size-[2px] rounded-full bg-[#c084fc]/65 shadow-[0_0_6px_rgba(192,132,252,0.6)]" />
      </span>

      <span aria-hidden="true" className="absolute left-[72px] top-[8px] size-[3px] rotate-45 bg-[#c084fc]/55 shadow-[0_0_7px_rgba(192,132,252,0.5)] transition-all duration-500 group-hover:-translate-y-0.5 group-hover:bg-[#f0abfc]/80" />
            
      {/* Signature basse */}
      <span aria-hidden="true" className="absolute bottom-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-[#c084fc]/68 to-transparent opacity-65 transition-all duration-500 group-hover:left-3 group-hover:right-3 group-hover:via-[#e9d5ff]/85 group-hover:opacity-100" />

      {/* Emblème conception */}
      <span className="relative flex h-11 w-12 shrink-0 items-center justify-center overflow-hidden rounded-[0.85rem] border border-white/[0.12] bg-black/32 shadow-[inset_0_1px_0_rgba(255,255,255,0.07),0_8px_24px_rgba(0,0,0,0.27)] transition-all duration-500 group-hover:border-[#c084fc]/42 group-hover:bg-[#1a1120]/75 group-hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.10),0_0_24px_rgba(168,85,247,0.20)]">
        <span aria-hidden="true" className="absolute inset-[5px] rounded-[0.52rem] bg-[radial-gradient(circle_at_50%_48%,rgba(168,85,247,0.18),rgba(88,28,135,0.08)_42%,rgba(9,7,12,0.88)_72%)]" />
        <span aria-hidden="true" className="absolute inset-[8px] rounded-full border border-[#d8b4fe]/10 transition-all duration-500 group-hover:scale-110 group-hover:border-[#d8b4fe]/20" />

        <span aria-hidden="true" className="absolute left-[6px] top-[6px] size-[5px] border-l border-t border-[#d8b4fe]/32" />
        <span aria-hidden="true" className="absolute right-[6px] top-[6px] size-[5px] border-r border-t border-[#d8b4fe]/32" />
        <span aria-hidden="true" className="absolute bottom-[6px] left-[6px] size-[5px] border-b border-l border-[#d8b4fe]/32" />
        <span aria-hidden="true" className="absolute bottom-[6px] right-[6px] size-[5px] border-b border-r border-[#d8b4fe]/32" />

        <DraftingCompass size={24} strokeWidth={1.9} className="relative text-[#f3e8ff]/92 drop-shadow-[0_0_8px_rgba(192,132,252,0.55)] transition-all duration-500 group-hover:scale-[1.08] group-hover:text-white group-hover:drop-shadow-[0_0_11px_rgba(216,180,254,0.75)]" />
        <span aria-hidden="true" className="absolute bottom-[7px] right-[7px] size-[3px] rounded-full bg-[#c084fc]/70 shadow-[0_0_7px_rgba(192,132,252,0.65)] transition-all duration-500 group-hover:scale-150 group-hover:bg-[#f0abfc]" />
      </span>

      <span className="relative flex min-w-0 flex-1 flex-col">
        <span className="text-[9px] font-semibold uppercase tracking-[0.25em] text-white/38 transition-colors duration-300 group-hover:text-[#e9d5ff]/62">Votre projet</span>
        <span className="font-[family-name:var(--font-header)] text-[17px] font-bold leading-tight tracking-[0.01em] text-white">Parlons-en</span>
      </span>

    <span className="relative ml-1 flex size-7 shrink-0 items-center justify-center rounded-[9px] border border-white/[0.12] bg-white/[0.055] shadow-[inset_0_1px_0_rgba(255,255,255,0.07),0_5px_14px_rgba(0,0,0,0.18)] transition-all duration-300 group-hover:border-[#d8b4fe]/45 group-hover:bg-[#a855f7]/14 group-hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.10),0_0_15px_rgba(168,85,247,0.22)]">
      <ArrowUpRight size={16} strokeWidth={1.9} className="text-white/62 transition-all duration-300 group-hover:scale-[1.12] group-hover:text-[#f3e8ff]" />
    </span>
      
      <span aria-hidden="true" className="absolute inset-y-0 left-[-45%] w-[30%] skew-x-[-18deg] bg-gradient-to-r from-transparent via-white/[0.06] to-transparent transition-transform duration-700 ease-out group-hover:translate-x-[500%]" />
    </a>
  );
}