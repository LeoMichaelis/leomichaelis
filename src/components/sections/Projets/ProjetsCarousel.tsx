"use client";
import type { ReactNode } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useCallback, useEffect, useState } from "react";
import { projects, projectsContent } from "@/content/projets";
import { getRelativePosition, PROJECT_AUTOPLAY_DELAY } from "./carousel";
import { ProjetsCard } from "./ProjetsCard";

export function ProjetsCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const showNextProject = useCallback(() => setActiveIndex((current) => (current + 1) % projects.length), []);
  const showPreviousProject = useCallback(() => setActiveIndex((current) => (current - 1 + projects.length) % projects.length), []);

  useEffect(() => {
    if (isPaused) return;

    const interval = window.setInterval(showNextProject, PROJECT_AUTOPLAY_DELAY);
    return () => window.clearInterval(interval);
  }, [isPaused, showNextProject]);

  return (
    <>
      <div className="relative z-10 mx-auto mt-16 flex w-[min(1280px,calc(100%-40px))] items-center justify-between gap-6 sm:mt-20 sm:w-[min(1280px,calc(100%-64px))]">
        <p className="mt-2 text-sm text-black/38">{projectsContent.carouselHint}</p>

        <div className="flex items-center gap-2">
          <CarouselButton label="Afficher le projet précédent" onClick={showPreviousProject}><ArrowLeft size={18} /></CarouselButton>
          <CarouselButton label="Afficher le projet suivant" onClick={showNextProject}><ArrowRight size={18} /></CarouselButton>
        </div>
      </div>

      <div className="relative z-10 mt-8 h-[565px] w-full perspective-[1800px] sm:mt-10" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
        {projects.map((project, index) => (
          <ProjetsCard key={project.id} project={project} position={getRelativePosition(index, activeIndex, projects.length)} isActive={index === activeIndex} onActivate={() => setActiveIndex(index)} />
        ))}

        <div aria-hidden="true" className="absolute bottom-[54px] left-1/2 h-20 w-[78%] -translate-x-1/2 rounded-[50%] bg-black/[0.12] blur-[42px]" />
      </div>

      <div className="relative z-20 mx-auto mt-2 flex w-fit items-center gap-2">
        {projects.map((project, index) => (
          <button key={project.id} type="button" aria-label={`Afficher le projet ${project.title}`} onClick={() => setActiveIndex(index)} className={`relative h-1.5 overflow-hidden rounded-full transition-all duration-500 ${activeIndex === index ? "w-14 bg-black/[0.08]" : "w-6 bg-black/[0.07] hover:bg-black/[0.14]"}`}>
            {activeIndex === index && (
              <span key={`${activeIndex}-${isPaused}`} style={!isPaused ? { animation: `portfolio-progress ${PROJECT_AUTOPLAY_DELAY}ms linear forwards` } : undefined} className={`absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-[#7e22ce] via-[#9333ea] to-[#6366f1] ${isPaused ? "w-full" : ""}`} />
            )}
          </button>
        ))}
      </div>
    </>
  );
}

function CarouselButton({ label, onClick, children }: { label: string; onClick: () => void; children: ReactNode }) {
  return (
    <button type="button" aria-label={label} onClick={onClick} className="flex size-11 items-center justify-center rounded-full border border-black/[0.09] bg-white/55 text-black/54 shadow-[0_10px_28px_rgba(35,25,42,0.08),inset_0_1px_0_rgba(255,255,255,0.85)] backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-[#9333ea]/25 hover:bg-white/80 hover:text-[#6b21a8] hover:shadow-[0_14px_34px_rgba(88,28,135,0.14)]">
      {children}
    </button>
  );
}