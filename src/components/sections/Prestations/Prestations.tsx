import { prestationsContent } from "@/content/prestations";
import { PrestationsBackground } from "./PrestationsBackground";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { PrestationsCards } from "./PrestationsCards";
import { siteConfig } from "@/config/site";

export function Prestations() {
  return (
    <section id="prestations" className="relative isolate overflow-hidden border-y border-white/[0.06] bg-[#141118] text-white">
      <PrestationsBackground />
      <div className="relative z-10 px-[var(--page-gutter)] pt-[clamp(1.5rem,1.9vw,2rem)] pb-[clamp(1.75rem,2.15vw,2.25rem)]">
        <Eyebrow as="h2" variant="dark" eyebrow={prestationsContent.eyebrow} />
        <div className="mt-[clamp(2rem,2.5vw,3rem)]"><PrestationsCards /></div>
        <div className="mt-[clamp(1.75rem,2.2vw,2.5rem)] text-center text-[clamp(.78rem,.85vw,.9rem)] leading-relaxed text-white/52">
          Vous avez un besoin différent ou un projet plus spécifique ?{" "}
          <a href={siteConfig.sections.project} className="font-medium text-white/68 transition-colors duration-200 hover:text-[#d8b4fe]">Demandez un devis personnalisé</a>
          {" "} ou {" "}
          <a href={siteConfig.sections.contact} className="font-medium text-white/68 transition-colors duration-200 hover:text-[#d8b4fe]">contactez-moi directement</a>.
        </div>
      </div>
    </section>
  );
}