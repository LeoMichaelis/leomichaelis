import { Sparkles } from "lucide-react";
import { footerContent } from "@/content/footer";

export function FooterIntro() {
  return (
    <div className="mb-14 flex flex-col justify-between gap-10 lg:mb-20 lg:flex-row lg:items-end">
      <div className="max-w-5xl">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#c084fc]/20 bg-[#9333ea]/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.18em] text-[#d8b4fe] backdrop-blur-md">
          <Sparkles size={14} />
          {footerContent.availabilityBadge}
        </div>

        <h2 className="max-w-[1100px] text-[clamp(3.8rem,6vw,6.5rem)] font-black leading-[0.9] tracking-[-0.075em]">
          {footerContent.title.prefix}
          <span className="block text-[#c084fc]">{footerContent.title.highlight}</span>
        </h2>
      </div>

      <p className="max-w-md text-base leading-7 text-white/55 sm:text-lg sm:leading-8 lg:pb-2">{footerContent.description}</p>
    </div>
  );
}