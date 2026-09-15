import Image from "next/image";
import caliperNeeds from "@/assets/img/caliper.png";
import { IdeaLampInteraction } from "./hover/IdeaLampInteraction";
import { NeedsLevelBubble } from "./hover/NeedsLevelBubble";
import { heroContent } from "@/content/hero";
const u = (value: number) => `calc(${value}*var(--u))`;

function IdeaSpark() {
  return (
    <svg aria-hidden="true" className="pointer-events-none absolute left-[34%] top-[24%] z-20 size-[calc(12*var(--u))] overflow-visible" viewBox="0 0 16 16" fill="none">
      <path d="M8 1.2V14.8M1.8 8H14.2" stroke="#fff8dc" strokeWidth=".7" strokeLinecap="round" />
      <path d="M4.5 4.5L11.5 11.5M11.5 4.5L4.5 11.5" stroke="#e9d5ff" strokeWidth=".45" strokeLinecap="round" opacity=".85" />
      <path d="M8 4.1C8.25 6.25 9.75 7.75 11.9 8C9.75 8.25 8.25 9.75 8 11.9C7.75 9.75 6.25 8.25 4.1 8C6.25 7.75 7.75 6.25 8 4.1Z" fill="#fffdf4" />
      <circle cx="8" cy="8" r="1.2" fill="#f3e8ff" />
    </svg>
  );
}

function IdeaWord() {
  const { focus } = heroContent.signature.line1;
  return (
    <IdeaLampInteraction>
      <span className="relative z-10 bg-[linear-gradient(104deg,#19151d_0%,#201725_55%,#321539_100%)] bg-clip-text text-transparent [text-shadow:-1px_1.8px_2.2px_rgba(65,52,71,0.18)]">
        {focus}
        <IdeaSpark />
      </span>
    </IdeaLampInteraction>
  );
}

function ProductBevels({ children }: { children: React.ReactNode }) {
  const bevel = "linear-gradient(135deg,transparent 0 31%,#8F6BBB 32% 50%,#B59AD3 51% 57%,#70489D 58% 68%,transparent 69%)";
  return (
    <span aria-hidden="true" className="pointer-events-none absolute inset-0 bg-clip-text text-transparent [-webkit-background-clip:text]" style={{ backgroundImage: `${bevel}, ${bevel}, ${bevel}`, backgroundRepeat: "no-repeat", backgroundSize: `${u(18)} ${u(16)}, ${u(12)} ${u(10)}, ${u(15)} ${u(8)}`, backgroundPosition: "6% 26%, 67% 35%, 100% 86%" }}>
      {children}
    </span>
  );
}

function ProductFinishLines({ children }: { children: React.ReactNode }) {
  const finishLine = "linear-gradient(90deg,transparent 0 30%,rgba(214,192,236,.96) 31% 43%,rgba(132,97,173,.92) 44% 58%,rgba(92,61,130,.76) 59% 68%,transparent 69%)";
  return (
    <span aria-hidden="true" className="pointer-events-none absolute inset-0 z-[12] bg-clip-text text-transparent [-webkit-background-clip:text]" style={{ backgroundImage: `${finishLine}, ${finishLine}`, backgroundRepeat: "no-repeat", backgroundSize: `${u(8)} ${u(7)}, ${u(6)} ${u(10)}`, backgroundPosition: "20% 89%, 61% 9%" }}>
      {children}
    </span>
  );
}

function ProductFacetCuts({ children }: { children: React.ReactNode }) {
  const facet = "conic-gradient(from 215deg at 50% 50%,transparent 0 17%,#6F4898 18% 35%,#9470BC 36% 56%,#C0A8D9 57% 67%,#8058AA 68% 81%,transparent 82% 100%)";
  return (
    <span aria-hidden="true" className="pointer-events-none absolute inset-0 z-[13] bg-clip-text text-transparent [-webkit-background-clip:text]" style={{ backgroundImage: `${facet}, ${facet}, ${facet}`, backgroundRepeat: "no-repeat", backgroundSize: `${u(12)} ${u(12)}, ${u(12)} ${u(12)}, ${u(10)} ${u(14)}`, backgroundPosition: "39% 50%, 56% 85%, 85% 36%" }}>
      {children}
    </span>
  );
}

function ProductMicroNotches({ children }: { children: React.ReactNode }) {
  const notch = "conic-gradient(from 225deg at 50% 50%,transparent 0 20%,#32194D 21% 43%,#44245F 44% 61%,#7954A0 62% 67%,transparent 68% 100%)";
  return (
    <span aria-hidden="true" className="pointer-events-none absolute inset-0 z-[14] bg-clip-text text-transparent [-webkit-background-clip:text]" style={{backgroundImage: `${notch}, ${notch}, ${notch}`, backgroundRepeat: "no-repeat", backgroundSize: `${u(9)} ${u(8)}, ${u(12)} ${u(12)}, ${u(12)} ${u(12)}`, backgroundPosition: "21% 38%, 77% 96%, 95% 18%" }}>
      {children}
    </span>
  );
}

function ProductWord() {
  const { focus } = heroContent.signature.line2;
  return (
    <span className="relative inline-block text-[#4B2E73]">
      <span>{focus}</span>
      <ProductBevels>{focus}</ProductBevels>
      <ProductFinishLines>{focus}</ProductFinishLines>
      <ProductFacetCuts>{focus}</ProductFacetCuts>
      <ProductMicroNotches>{focus}</ProductMicroNotches>
    </span>
  );
}

function CaliperMeasure() {
  return (
    <svg aria-hidden="true" className="pointer-events-none absolute left-[calc(-32*var(--u))] top-[calc(-17*var(--u))] z-0 h-[calc(96*var(--u))] w-[calc(100%+72*var(--u))] overflow-visible" viewBox="0 0 370 100" preserveAspectRatio="none" fill="none">
      <path d="M38 16H319" stroke="url(#caliperPurple)" strokeWidth="1.2" strokeOpacity=".72" />
      {Array.from({ length: 46 }).map((_, i) => {
        const x = 44 + i * 6;
        const major = i % 5 === 0;
        return <path key={`top-${i}`} d={`M${x} ${major ? 7 : 11}V17`} stroke="#6f4b93" strokeWidth={major ? ".9" : ".68"} strokeOpacity={major ? ".72" : ".50"} />;
      })}
      <path d="M38 82H319" stroke="url(#caliperPurple)" strokeWidth="1.35" strokeOpacity=".78" />
      {Array.from({ length: 46 }).map((_, i) => {
        const x = 44 + i * 6;
        const major = i % 5 === 0;
        return <path key={`bottom-${i}`} d={`M${x} 82V${major ? 94 : 89}`} stroke="#735294" strokeWidth={major ? ".92" : ".7"} strokeOpacity={major ? ".78" : ".54"} />;
      })}
    </svg>
  );
}

function NeedsWord() {
  const { focus } = heroContent.signature.line3;
  return (
    <span className="relative inline-block">
      <CaliperMeasure />
      <NeedsLevelBubble />
      <Image src={caliperNeeds} alt="" aria-hidden="true" className="pointer-events-none absolute left-[32%] top-[-4%] z-[10] w-full select-none" style={{ WebkitMaskImage: "linear-gradient(90deg,rgba(0,0,0,.15) 0%, rgba(0,0,0,.18) 10%, rgba(0,0,0,.24) 40%, rgba(0,0,0,.40) 50%, #000 85%)", maskImage: "linear-gradient(90deg,rgba(0,0,0,.15) 0%, rgba(0,0,0,.18) 10%,rgba(0,0,0,.24) 40%, rgba(0,0,0,.40) 50%, #000 85%)" }} priority />
      <span className="relative z-10 bg-[linear-gradient(101deg,#352039_0%,#4c2058_34%,#702581_66%,#952c9f_100%)] bg-clip-text text-transparent">{focus}</span>
    </span>
  );
}

export function HeroSignature() {
  const { line1, line2, line3 } = heroContent.signature;
  return (
    <h1 aria-label="De l'idée au produit. Taillé pour vos besoins." className="relative isolate w-full overflow-visible font-[family-name:var(--font-hero)] text-[#19161c] [container-type:inline-size]">
      <span className="relative block [--u:calc(100cqw/610)]">
        <span aria-hidden="true" className="pointer-events-none absolute left-[calc(65*var(--u))] top-[calc(18*var(--u))] -z-20 h-[calc(205*var(--u))] w-[calc(430*var(--u))] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,.052)_0%,rgba(216,180,254,.018)_46%,transparent_72%)] blur-[calc(30*var(--u))]" />
        <span className="relative z-20 flex w-fit items-baseline whitespace-nowrap text-[calc(72*var(--u))] font-extrabold leading-[.90] tracking-[-.024em]">
          <span className="text-[#19161c]">{line1.before}</span>
          <span className="ml-[calc(4*var(--u))]"><IdeaWord /></span>
        </span>
        <span className="relative z-20 mt-[calc(12*var(--u))] flex w-fit items-baseline whitespace-nowrap">
          <span className="mr-[calc(16*var(--u))] text-[calc(74*var(--u))] font-extrabold lowercase leading-none tracking-[-.025em] text-[#19161c]">{line2.before.toLowerCase()}</span>
          <span className="text-[calc(84*var(--u))] font-extrabold leading-[.87] tracking-[-.022em]"><ProductWord /></span>
        </span>
        <span className="relative z-20 mt-[calc(14*var(--u))] flex w-fit items-baseline whitespace-nowrap">
          <span className="text-[calc(58*var(--u))] font-extrabold leading-[.94] tracking-[-.031em] text-[#211b25]">{line3.before}</span>
          <span className="ml-[calc(14*var(--u))] text-[calc(68*var(--u))] font-extrabold leading-[.90] tracking-[-.026em]"><NeedsWord /></span>
        </span>
      </span>
    </h1>
  );
}