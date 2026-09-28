import { prestationsContent } from "@/content/prestations";
import { PrestationsBackground } from "./PrestationsBackground";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { PrestationsCards } from "./PrestationsCards";

export function Prestations() {
  return (
    <section id="prestations" className="relative isolate overflow-hidden border-y border-white/[0.06] bg-[#141118] text-white">
      <PrestationsBackground />
      <div className="relative z-10 px-[var(--page-gutter)] pt-[clamp(1.5rem,1.9vw,2rem)] pb-[clamp(1.75rem,2.15vw,2.25rem)]">
        <Eyebrow as="h2" variant="dark" eyebrow={prestationsContent.eyebrow} />
        <div className="mt-[clamp(2rem,2.5vw,3rem)]"><PrestationsCards /></div>
      </div>
    </section>
  );
}