import type { ReactNode } from "react";
import { ArrowUpRight, BarChart3, CalendarDays, ChartNoAxesCombined } from "lucide-react";
import { FaGithub } from "react-icons/fa6";
import type { PortfolioProject, ProjectTheme } from "@/types/projets";
import { TechnologyTag } from "@/components/ui/TechnologyTag";
import { getCardTransform } from "./carousel";
import { ProjetsCardBackground } from "./ProjetsCardBackground";

const projectIcons = {
  betlab: <ChartNoAxesCombined size={22} />,
  cuve: <CalendarDays size={22} />,
  opensource: <FaGithub size={21} />,
  aideoparieurs: <BarChart3 size={22} />,
} satisfies Record<ProjectTheme, ReactNode>;

export function ProjetsCard({ project, position, isActive, onActivate }: { project: PortfolioProject; position: number; isActive: boolean; onActivate: () => void }) {
  const isVisible = Math.abs(position) <= 1;

  return (
    <article style={{ transform: getCardTransform(position), opacity: isVisible ? 1 : 0, zIndex: isActive ? 30 : 15, pointerEvents: isVisible ? "auto" : "none" }} className={`group absolute left-1/2 top-4 h-[520px] w-[min(390px,82vw)] origin-center overflow-hidden rounded-[32px] border border-white/[0.11] bg-[#1b1720] text-white shadow-[0_32px_75px_rgba(34,23,42,0.24),inset_0_1px_0_rgba(255,255,255,0.075)] transition-[transform,opacity,filter,box-shadow] duration-[850ms] ease-[cubic-bezier(0.22,1,0.36,1)] sm:w-[clamp(330px,27vw,390px)] ${isActive ? "cursor-default" : "brightness-[0.76] saturate-[0.78] hover:brightness-[0.9]"}`}>
      <ProjetsCardBackground theme={project.theme} />
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-[1] bg-[linear-gradient(to_bottom,transparent_0%,transparent_24%,rgba(24,20,28,0.48)_42%,rgba(24,20,28,0.96)_64%,#18141c_100%)]" />

      <div className="relative z-10 grid h-full grid-rows-[auto_1fr_auto] gap-0 p-7 sm:p-8">
        <header className="flex min-h-12 items-center justify-between gap-4">
          <div className="flex size-11 shrink-0 items-center justify-center rounded-[15px] border border-white/[0.1] bg-white/[0.065] text-[#d8b4fe] shadow-[inset_0_1px_0_rgba(255,255,255,0.09)] backdrop-blur-xl">{projectIcons[project.theme]}</div>
          <div className="rounded-full border border-white/[0.09] bg-[#17131b]/70 px-3.5 py-2 text-right text-[9px] font-bold uppercase leading-none tracking-[0.12em] text-white/55 backdrop-blur-xl">{project.type}</div>
        </header>

        <div className="flex min-h-0 flex-col justify-center">
          <div className="mb-4 flex items-center gap-3">
            <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#c084fc]">{project.date}</span>
            <span className="h-px flex-1 bg-gradient-to-r from-[#c084fc]/45 to-transparent" />
          </div>

          <h3 className="max-w-full text-[clamp(2.35rem,3vw,3.2rem)] font-black leading-[0.91] tracking-[-0.055em] text-white">{project.title}</h3>
          <p className="mt-5 line-clamp-4 text-[14px] leading-[1.7] text-white/56">{project.description}</p>
        </div>

        <footer className="border-t border-white/[0.07] pt-5">
          <div className="flex min-h-[62px] items-start justify-between gap-4">
            <div className="flex max-w-[285px] flex-wrap content-start gap-2">
              {project.technologies.slice(0, 4).map((technology) => <TechnologyTag key={technology} variant="dark">{technology}</TechnologyTag>)}
              {project.technologies.length > 4 && <TechnologyTag variant="accent">+{project.technologies.length - 4}</TechnologyTag>}
            </div>

            <ProjectAction project={project} />
          </div>
        </footer>
      </div>

      {!isActive && isVisible && <button type="button" aria-label={`Afficher le projet ${project.title}`} onClick={onActivate} className="absolute inset-0 z-20 cursor-pointer" />}
    </article>
  );
}

function ProjectAction({ project }: { project: PortfolioProject }) {
  const className = "relative z-30 flex size-11 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white text-[#211824] shadow-[0_12px_28px_rgba(0,0,0,0.24)] transition-all duration-300 hover:-translate-y-1 hover:rotate-6 hover:bg-[#d8b4fe]";

  if (!project.href) return <span aria-hidden="true" className={className}><ArrowUpRight size={20} /></span>;

  return <a href={project.href} aria-label={`Voir le projet ${project.title}`} className={className}><ArrowUpRight size={20} /></a>;
}