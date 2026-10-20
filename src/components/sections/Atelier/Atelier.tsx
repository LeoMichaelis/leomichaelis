import Image from "next/image";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { atelierContent } from "@/content/atelier";
import { AtelierBackground } from "./AtelierBackground";

export function Atelier() {
  return (
    <section id="atelier" className="relative z-0 isolate -mt-[var(--section-transition-space)] overflow-hidden bg-[#141118] text-white">
      <AtelierBackground />

      <div className="relative z-10 px-[var(--page-gutter)] pb-[clamp(4rem,5.5vw,5.5rem)] pt-[calc(var(--section-transition-space)+clamp(1.5rem,1.9vw,2rem))]">
        <Eyebrow as="h2" variant="dark" eyebrow={atelierContent.eyebrow} />

        {/* Placeholder de la future scène 2.5D */}
        <div className="relative mt-[clamp(2rem,2.8vw,3rem)] h-[72svh] overflow-hidden rounded-[2.5rem] border border-white/10 bg-[#211a2d] shadow-[0_40px_120px_rgba(0,0,0,0.45)]">
          <Image src="/room-placeholder.webp" alt="Aperçu de l'atelier interactif du portfolio" fill className="object-cover" sizes="(max-width: 768px) 100vw, calc(100vw - 2 * var(--page-gutter))" />
        </div>
      </div>
    </section>
  );
}