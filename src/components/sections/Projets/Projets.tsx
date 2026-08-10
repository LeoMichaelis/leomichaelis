import { projectsContent } from "@/content/projets";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ProjetsBackground } from "./ProjetsBackground";
import { ProjetsCarousel } from "./ProjetsCarousel";

export function Projets() {
  return (
    <section id="projets" className="relative isolate overflow-hidden bg-[#efede9] pb-28 pt-24 text-[#1d1a21] sm:pb-36 sm:pt-32">
      <ProjetsBackground />

      <div className="relative z-10 mx-auto w-[min(1280px,calc(100%-40px))] sm:w-[min(1280px,calc(100%-64px))]">
        <SectionHeader eyebrow={projectsContent.eyebrow} title={projectsContent.title.prefix} highlight={projectsContent.title.highlight} description={projectsContent.description} keywords={projectsContent.keywords} />
      </div>

      <ProjetsCarousel />
    </section>
  );
}