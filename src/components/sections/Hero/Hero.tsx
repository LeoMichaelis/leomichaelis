import { HeroBackground } from "./HeroBackground";
import { HeroContent } from "./HeroContent";
import { HeroVisual } from "./HeroVisual";

export function Hero() {
  return (
    <section id="accueil" className="relative isolate h-[690px] overflow-hidden bg-[#d8d1dc] text-[#1a171d]">
      <HeroBackground />

      <div className="relative z-10 mx-auto h-full w-[min(1280px,calc(100%-40px))]">
        <HeroContent />
        <HeroVisual />
      </div>
    </section>
  );
}