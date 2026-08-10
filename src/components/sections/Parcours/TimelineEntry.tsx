import { Braces, Code2, Database, GraduationCap, RadioTower, Workflow } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { ParcoursIcon, ParcoursItem } from "@/types/parcours";
import { TechnologyTag } from "@/components/ui/TechnologyTag";
import { parcoursAccentStyles } from "./parcoursStyles";
import { TimelineCardBackground } from "./TimelineCardBackground";

const timelineIcons = {
  database: Database,
  radioTower: RadioTower,
  braces: Braces,
  code: Code2,
  workflow: Workflow,
  graduation: GraduationCap,
} satisfies Record<ParcoursIcon, LucideIcon>;

export function TimelineEntry({ item, isLeft }: { item: ParcoursItem; isLeft: boolean }) {
  const accent = parcoursAccentStyles[item.accent];
  const Icon = timelineIcons[item.icon];

  return (
    <article className="relative grid grid-cols-[40px_1fr] gap-5 lg:grid-cols-[1fr_88px_1fr] lg:gap-8">
      <div className="relative z-20 col-start-1 row-start-1 flex items-start justify-center pt-7 lg:col-start-2">
        <div className={`relative flex size-10 items-center justify-center rounded-full border bg-[#efede9] shadow-[0_10px_28px_rgba(35,25,42,0.12)] ${accent.border}`}>
          <span className={`absolute size-5 rounded-full blur-md ${accent.glow}`} />
          <span className={`relative size-2.5 rounded-full ${accent.dot}`} />
        </div>
      </div>

      <div className={`col-start-2 row-start-1 lg:col-auto ${isLeft ? "lg:col-start-1 lg:justify-self-end" : "lg:col-start-3 lg:justify-self-start"}`}>
        <div className="group relative w-full max-w-[520px] overflow-hidden rounded-[30px] border border-black/[0.08] bg-white/62 p-6 shadow-[0_20px_60px_rgba(42,28,70,0.09),inset_0_1px_0_rgba(255,255,255,0.88)] backdrop-blur-xl transition-all duration-500 hover:-translate-y-1.5 hover:bg-white/78 hover:shadow-[0_28px_75px_rgba(42,28,70,0.14),inset_0_1px_0_rgba(255,255,255,0.95)] sm:p-7">
          <TimelineCardBackground accent={item.accent} type={item.type} reverse={!isLeft} />

          <div className="relative z-10">
            <header className="flex items-start justify-between gap-5">
              <div className={`flex size-11 shrink-0 items-center justify-center rounded-2xl border bg-white/55 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] backdrop-blur-md ${accent.border} ${accent.text}`}>
                <Icon size={20} />
              </div>

              <span className={`rounded-full border px-3.5 py-2 text-[10px] font-black uppercase tracking-[0.14em] ${accent.border} ${accent.softBackground} ${accent.text}`}>{item.period}</span>
            </header>

            <div className="mt-8">
              <p className="text-[10px] font-black uppercase tracking-[0.17em] text-black/32">{item.type === "education" ? "Formation" : "Expérience professionnelle"}</p>
              <h3 className="mt-3 text-3xl font-black leading-[0.96] tracking-[-0.045em] text-[#1d1a21] sm:text-[2.15rem]">{item.title}</h3>

              <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-1">
                <p className={`text-sm font-black ${accent.text}`}>{item.organization}</p>

                {item.location && (
                  <>
                    <span className="size-1 rounded-full bg-black/20" />
                    <p className="text-sm text-black/42">{item.location}</p>
                  </>
                )}
              </div>

              <p className="mt-5 text-[14px] leading-7 text-black/54 sm:text-[15px]">{item.description}</p>
            </div>

            <div className="mt-6 flex flex-wrap gap-2 border-t border-black/[0.065] pt-5">
              {item.technologies.map((technology) => (
                <TechnologyTag key={technology}>{technology}</TechnologyTag>
              ))}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}