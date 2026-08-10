import { Building2, GraduationCap } from "lucide-react";
import type { ParcoursAccent, ParcoursItemType } from "@/types/parcours";
import { parcoursAccentStyles } from "./parcoursStyles";

export function TimelineCardBackground({ accent, type, reverse }: { accent: ParcoursAccent; type: ParcoursItemType; reverse: boolean }) {
  const accentStyle = parcoursAccentStyles[accent];

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className={`absolute -top-20 size-[230px] rounded-full blur-[48px] ${reverse ? "-left-20" : "-right-20"}`} style={{ background: `radial-gradient(circle, ${accentStyle.cardGlow} 0%, transparent 72%)` }} />

      <div className={`absolute top-0 h-[58%] w-[62%] opacity-[0.14] [background-image:linear-gradient(rgba(35,28,40,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(35,28,40,0.08)_1px,transparent_1px)] [background-size:30px_30px] ${reverse ? "left-0 [mask-image:linear-gradient(to_right,black,transparent)]" : "right-0 [mask-image:linear-gradient(to_left,black,transparent)]"}`} />

      <div className={`absolute top-[-92px] size-[230px] rounded-full border border-[#9333ea]/[0.09] ${reverse ? "-left-14" : "-right-14"}`} />
      <div className={`absolute top-[-48px] size-[150px] rounded-full border border-black/[0.045] ${reverse ? "left-4" : "right-4"}`} />
      <div className={`absolute top-[18%] h-px w-36 bg-gradient-to-r from-transparent via-[#9333ea]/14 to-transparent ${reverse ? "left-4" : "right-4"}`} />

      {type === "education"
        ? <GraduationCap size={130} strokeWidth={0.8} className="absolute bottom-[-25px] right-[-5px] text-[#7e22ce]/[0.035]" />
        : <Building2 size={125} strokeWidth={0.75} className="absolute bottom-[-10px] right-[-4px] text-black/[0.025]" />}

      <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(255,255,255,0.18),transparent_32%,transparent_72%,rgba(168,85,247,0.035))]" />
    </div>
  );
}