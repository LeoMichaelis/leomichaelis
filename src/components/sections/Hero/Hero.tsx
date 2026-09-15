import { HeroBackground } from "./HeroBackground";
import { HeroContent } from "./HeroContent";
import { HeroVisual } from "./HeroVisual";

export function Hero() {
  return (
    <section id="accueil" className="relative isolate overflow-hidden bg-[#d8d1dc] text-[#1a171d]">
      <HeroBackground />
      <div className="relative z-10 flex items-start justify-between gap-[clamp(1rem,1.2vw,1.5rem)] px-[var(--page-gutter)] pt-[clamp(1.5rem,1.9vw,2rem)] pb-[clamp(1.75rem,2.15vw,2.25rem)]">
        <HeroContent />
        <HeroVisual />
      </div>
    </section>
  );
}