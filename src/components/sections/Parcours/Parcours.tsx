import { parcoursContent } from "@/content/parcours";
import { ParcoursBackground } from "./ParcoursBackground";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ParcoursTimeline } from "./ParcoursTimeline";

export function Parcours() {
  return (
    <section id="parcours" className="relative isolate overflow-hidden bg-[#efede9] py-24 text-[#1d1a21] sm:py-32">
      <ParcoursBackground />

      <div className="relative z-10 mx-auto w-[min(1280px,calc(100%-40px))] sm:w-[min(1280px,calc(100%-64px))]">
        <SectionHeader eyebrow={parcoursContent.eyebrow}  title={parcoursContent.title.prefix} highlight={parcoursContent.title.highlight} description={parcoursContent.description} keywords={parcoursContent.keywords} />
        <ParcoursTimeline />
      </div>
    </section>
  );
}