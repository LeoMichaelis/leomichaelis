import { Eyebrow } from "@/components/ui/Eyebrow";
import { realisationsContent } from "@/content/realisations";
import { RealisationsBackground } from "./RealisationsBackground";
import { RealisationsSlideshowBackground } from "./slideshow/RealisationsSlideshowBackground";
import { RealisationsCards, RealisationsNavigation, RealisationsPagination, RealisationsSlideshow } from "./slideshow/RealisationsSlideshow";

export function Realisations() {
  return (
    <section id="realisations" className="relative z-[1] isolate -mt-[var(--section-transition-space)] overflow-hidden text-[#1d1a21]">
      <RealisationsBackground />
      <div className="relative z-10 px-[var(--page-gutter)] pb-[calc(clamp(1.75rem,2.15vw,2.25rem)+var(--section-transition-space))] pt-[calc(.5*var(--section-transition-space)+clamp(1.5rem,1.9vw,2rem))]">
        <RealisationsSlideshow>
          <RealisationsSlideshowBackground />
          <div className="flex items-center justify-between">
            <Eyebrow as="h2" eyebrow={realisationsContent.eyebrow} />
            <RealisationsNavigation />
          </div>
          <RealisationsCards />
          <div className="mt-[clamp(1.6rem,2.2vw,2.2rem)] flex justify-center">
            <RealisationsPagination />
          </div>
        </RealisationsSlideshow>
        <div className="mt-[clamp(2rem,3vw,3rem)] text-center text-[clamp(.78rem,.85vw,.9rem)] leading-relaxed text-black/42">
          Au-delà de ces réalisations,{" "}<button type="button" className="cursor-pointer font-medium text-black/62 transition-colors duration-200 hover:text-[#7e22ce]">découvrez mon parcours professionnel</button>{" "}à travers les expériences qui l’ont façonné.
        </div>
      </div>
    </section>
  );
}