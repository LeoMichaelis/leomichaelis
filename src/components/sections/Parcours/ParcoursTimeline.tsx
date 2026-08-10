import { parcoursItems } from "@/content/parcours";
import { TimelineEntry } from "./TimelineEntry";

export function ParcoursTimeline() {
  return (
    <div className="relative mt-20 sm:mt-24">
      <div aria-hidden="true" className="absolute bottom-0 left-[19px] top-0 w-px bg-gradient-to-b from-[#9333ea]/10 via-[#9333ea]/55 to-[#6366f1]/10 lg:left-1/2 lg:-translate-x-1/2" />
      <div aria-hidden="true" className="absolute bottom-0 left-[18px] top-0 w-[3px] bg-gradient-to-b from-transparent via-[#c084fc]/18 to-transparent blur-sm lg:left-1/2 lg:-translate-x-1/2" />

      <div className="space-y-10 lg:space-y-14">
        {parcoursItems.map((item, index) => <TimelineEntry key={item.id} item={item} isLeft={index % 2 === 0} />)}
      </div>
    </div>
  );
}