import { ArrowDownRight, ChevronDown } from "lucide-react";
import { siteConfig } from "@/config/site";
import { heroContent } from "@/content/hero";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { HeroSignature } from "./HeroSignature";

export function HeroContent() {
  return (
    <div className="pointer-events-none relative z-30 w-[clamp(30rem,38.6vw,42rem)] shrink-0">
      <Eyebrow eyebrow={heroContent.eyebrow} />
      <div className="mt-[clamp(3rem,4vw,4.5rem)]"><HeroSignature /></div>
      <div className="mt-[clamp(3rem,4vw,4.5rem)] flex items-start gap-5 text-[clamp(.875rem,1vw,1.0625rem)]">
        <span aria-hidden="true" className="mt-1 self-stretch w-px shrink-0 bg-[linear-gradient(180deg,rgba(126,34,206,.68)_0%,rgba(147,51,234,.52)_58%,rgba(147,51,234,.28)_82%,rgba(147,51,234,.08)_100%)]" />
        <p className="leading-[1.72] tracking-[-0.005em] text-black/54">
         {heroContent.description.map(item => (<span key={item} className="block whitespace-nowrap">{item}</span>))}
        </p>
      </div>
      <div className="mt-[clamp(2.25rem,3vw,3.25rem)] flex items-center gap-4 text-[clamp(.8rem,.82vw,.875rem)]">
        <a href={siteConfig.sections.services} className="pointer-events-auto group relative flex shrink-0 items-center gap-4 whitespace-nowrap overflow-hidden rounded-[17px] border border-white/[0.06] bg-[#1d1920] px-5 py-3.5 text-[13px] font-bold text-white shadow-[0_18px_40px_rgba(30,20,37,0.20),inset_0_1px_0_rgba(255,255,255,0.10)] transition-all duration-300 hover:-translate-y-1 hover:border-[#c084fc]/15 hover:shadow-[0_24px_50px_rgba(76,29,149,0.24),inset_0_1px_0_rgba(255,255,255,0.12)]">
          <span aria-hidden="true" className="absolute inset-0 translate-x-[-120%] bg-[linear-gradient(110deg,transparent_22%,rgba(192,132,252,0.22)_50%,transparent_78%)] transition-transform duration-700 group-hover:translate-x-[120%]" />
          <span className="relative">{heroContent.actions.services}</span>
          <span className="relative flex size-7 items-center justify-center rounded-full border border-white/[0.09] bg-white/[0.07]"><ArrowDownRight size={14} /></span>
        </a>
        <a href={siteConfig.sections.realizations} className="pointer-events-auto group flex shrink-0 items-center gap-3 whitespace-nowrap rounded-[17px] border border-black/[0.08] bg-white/50 px-5 py-4.25 font-bold text-black/61 shadow-[0_12px_30px_rgba(35,25,42,0.07),inset_0_1px_0_rgba(255,255,255,0.78)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#7e22ce]/20 hover:bg-white/68 hover:text-[#4c1d95]">
          {heroContent.actions.realizations}
          <ChevronDown size={16} strokeWidth={2} />
        </a>
      </div>
    </div>
  );
}