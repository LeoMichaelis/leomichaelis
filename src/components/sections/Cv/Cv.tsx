import { CvBackground } from "./CvBackground";
import { CvContent } from "./CvContent";
import { CvVisual } from "./CvVisual";

export function Cv() {
  return (
    <section id="cv" className="relative isolate overflow-hidden border-y border-black/[0.07] bg-[#eeeaf1] text-[#1d1a21]">
      <CvBackground />

      <div className="relative z-10 mx-auto grid w-[min(1280px,calc(100%-40px))] items-center gap-12 py-12 sm:w-[min(1280px,calc(100%-64px))] lg:grid-cols-[0.72fr_1.28fr] lg:py-15">
        <CvVisual />
        <CvContent />
      </div>
    </section>
  );
}