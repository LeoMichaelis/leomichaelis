import { ArrowDownRight, ArrowRight, Sparkles } from "lucide-react";
import { siteConfig } from "@/config/site";
import { heroContent } from "@/content/hero";
import { HeroSignature } from "./HeroSignature";

export function HeroContent() {
  return (
    <div className="pointer-events-none absolute top-[40px] z-30 w-[840px]">
      <div className="mb-12 flex items-center gap-3 text-[#7e22ce]">
        <span className="relative flex size-7 items-center justify-center">
          <span aria-hidden="true" className="absolute inset-0 rotate-45 border border-[#7e22ce]/28" />
          <Sparkles size={13} strokeWidth={1.8} />
        </span>
        <span className="text-[9px] font-black uppercase tracking-[0.21em] text-[#6b21a8]/75">{heroContent.eyebrow}</span>
        <span className="h-px w-20 bg-gradient-to-r from-[#9333ea]/45 to-transparent" />
      </div>

      <HeroSignature />

      <div className="mt-14 flex w-[715px] items-start gap-5">
        <span aria-hidden="true" className="mt-1 h-[54px] w-px shrink-0 bg-gradient-to-b from-[#7e22ce]/70 via-[#9333ea]/25 to-transparent" />
        <p className="text-[15.5px] leading-[1.72] tracking-[-0.005em] text-black/54">
          <span className="block whitespace-nowrap">{heroContent.description[0]}</span>
          <span className="block whitespace-nowrap">{heroContent.description[1]}</span>
        </p>
      </div>

      <div className="mt-8 flex items-center gap-4">
        <a href={siteConfig.sections.services} className="pointer-events-auto group relative flex items-center gap-4 overflow-hidden rounded-[17px] bg-[#1d1920] px-5 py-3.5 text-[13px] font-bold text-white shadow-[0_18px_40px_rgba(30,20,37,0.20),inset_0_1px_0_rgba(255,255,255,0.10)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_rgba(76,29,149,0.24),inset_0_1px_0_rgba(255,255,255,0.12)]">
          <span aria-hidden="true" className="absolute inset-0 translate-x-[-120%] bg-[linear-gradient(110deg,transparent_22%,rgba(192,132,252,0.22)_50%,transparent_78%)] transition-transform duration-700 group-hover:translate-x-[120%]" />
          <span className="relative">{heroContent.actions.services}</span>
          <span className="relative flex size-7 items-center justify-center rounded-full border border-white/[0.09] bg-white/[0.07]"><ArrowDownRight size={14} /></span>
        </a>

        <a href={siteConfig.sections.realizations} className="pointer-events-auto group flex items-center gap-3 rounded-[17px] border border-black/[0.08] bg-white/45 px-5 py-3.5 text-[13px] font-bold text-black/61 shadow-[0_12px_30px_rgba(35,25,42,0.07),inset_0_1px_0_rgba(255,255,255,0.68)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#7e22ce]/20 hover:bg-white/68 hover:text-[#4c1d95]">
          {heroContent.actions.realizations}
          <ArrowRight size={15} className="transition-transform duration-300 group-hover:translate-x-1" />
        </a>
      </div>

      <div className="mt-12 flex items-center gap-3">
        <span aria-hidden="true" className="h-px w-10 bg-gradient-to-r from-[#7e22ce]/60 via-[#a855f7]/32 to-transparent" />
        <span className="flex items-center gap-2.5 font-[family-name:var(--font-main)] text-[8px] font-bold uppercase tracking-[0.17em]">
          <span className="text-[#3f3544]/58">{heroContent.baseline[0]}</span>
          <span aria-hidden="true" className="size-[3px] rotate-45 border border-[#7e22ce]/35 bg-[#7e22ce]/12" />
          <span className="text-[#5b21b6]/62">{heroContent.baseline[1]}</span>
          <span aria-hidden="true" className="size-[3px] rotate-45 border border-[#9333ea]/42 bg-[#9333ea]/16" />
          <span className="text-[#7e22ce]/68">{heroContent.baseline[2]}</span>
          <span aria-hidden="true" className="size-[3px] rotate-45 border border-[#a855f7]/50 bg-[#a855f7]/20 shadow-[0_0_5px_rgba(168,85,247,0.16)]" />
          <span className="bg-[linear-gradient(90deg,#9333ea,#c026d3)] bg-clip-text text-transparent">{heroContent.baseline[3]}</span>
        </span>
        <span aria-hidden="true" className="ml-1 size-[4px] rotate-45 border border-[#d946ef]/45 bg-[#d946ef]/18 shadow-[0_0_6px_rgba(217,70,239,0.20)]" />
      </div>
    </div>
  );
}