
import { ArrowUpRight } from "lucide-react";
import { cvContent } from "@/content/cv";
import { CvIllustration, ParcoursIllustration } from "./CvIllustrations";

export function CvCards() {
  return (
    <div className="mx-auto grid w-[70%] grid-cols-2 gap-[clamp(1rem,1.4vw,1.4rem)]">
      {cvContent.cards.map(card => <CvCard key={card.id} id={card.id} title={card.title} />)}
    </div>
  );
}

function CvCard({ id, title }: { id: string; title: string }) {
  return (
    <article className="group/card relative isolate aspect-[4/3] min-w-0 rounded-[clamp(1.35rem,1.75vw,1.75rem)] shadow-[0_3px_9px_rgba(61,40,72,0.09),0_18px_38px_rgba(74,47,89,0.13),0_34px_65px_rgba(75,48,92,0.05)] hover:shadow-[0_4px_12px_rgba(61,40,72,0.12),0_22px_46px_rgba(74,47,89,0.15),0_36px_72px_rgba(75,48,92,0.07)]">
      {/* Tranche / épaisseur */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 translate-x-[3px] translate-y-[6px] rounded-[inherit] bg-[linear-gradient(145deg,#ede6ee_0%,#d6c9db_58%,#c5b4cd_100%)] shadow-[0_7px_18px_rgba(51,29,61,0.13)]" />
      {/* Matière intérieure */}
      <div className="relative z-10 h-full w-full overflow-hidden rounded-[inherit] bg-[linear-gradient(150deg,#fffdfd_0%,#fcfafc_30%,#faf7fb_60%,#f5eff7_100%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.85),inset_1px_0_0_rgba(255,255,255,0.55),inset_-1px_0_0_rgba(87,59,98,0.07),inset_0_-1px_0_rgba(87,59,98,0.12)]">
        <CvCardBackground id={id} />
        {/* Zone illustration + titre */}
        <div className="relative z-10 flex h-full flex-col px-[clamp(1rem,1.8vw,1.65rem)] pt-[clamp(1rem,1.8vw,1.65rem)] pb-[clamp(2.8rem,3.2vw,3.2rem)]">
          <div className="relative min-h-0 w-full flex-1">{id === "cv" && <CvIllustration />}{id === "parcours" && <ParcoursIllustration />}</div>
          <div className="mt-[clamp(.75rem,1.2vw,1.2rem)] flex flex-col items-center"><h3 className="w-fit self-center bg-[linear-gradient(180deg,#4c3a54_0%,#513d59_55%,#5d4865_100%)] bg-clip-text text-center text-[clamp(1.5rem,1.8vw,1.9rem)] font-bold leading-[1.1] tracking-[-0.045em] text-transparent drop-shadow-[0_1px_0_rgba(255,255,255,0.55)]">{title}</h3></div>
        </div>
        <CvCardFold />
      </div>
    </article>
  );
}

function CvCardBackground({ id }: { id: string }) {
  const splashId = `cv-splash-${id}`;
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0">
      {/* Lumière nacrée supérieure */}
      <div className="absolute -left-[12%] -top-[28%] h-[75%] w-[90%] rounded-full bg-[radial-gradient(ellipse,rgba(255,255,255,0.72)_0%,rgba(255,255,255,0.24)_38%,transparent_74%)] blur-[clamp(1rem,1.8vw,2rem)]" />
      {/* Profondeur lilas inférieure */}
      <div className="absolute -bottom-[38%] -right-[27%] h-[90%] w-[90%] rounded-full bg-[radial-gradient(ellipse,rgba(166,118,184,0.12)_0%,rgba(190,151,204,0.045)_45%,transparent_74%)] blur-[clamp(1.25rem,2vw,2.25rem)]" />
      {/* Nuance satinée verticale */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.10)_0%,transparent_45%,rgba(112,74,125,0.035)_100%)]" />
      {/* Reflet du chant supérieur */}
      <div className="absolute left-[7%] right-[7%] top-px h-px bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.85)_25%,rgba(255,255,255,0.45)_70%,transparent_100%)]" />
      {/* Reflet vertical du chant gauche */}
      <div className="absolute left-px top-[9%] bottom-[24%] w-px bg-[linear-gradient(180deg,transparent_0%,rgba(255,255,255,0.65)_24%,rgba(255,255,255,0.20)_70%,transparent_100%)]" />
      {/* Profondeur périphérique inférieure */}
      <div className="absolute inset-0 shadow-[inset_-8px_-9px_20px_rgba(83,53,95,0.035)]" />
      {/* Splash chromatique central */}
      <svg aria-hidden="true" className="absolute inset-x-0 top-0 h-[30px] w-full overflow-visible" viewBox="0 0 390 30" preserveAspectRatio="none">
        <defs>
          <linearGradient id={splashId} x1="0" x2="1">
            <stop offset="0%" stopColor="#d37ac9" stopOpacity=".05" />
            <stop offset="48%" stopColor="#e7a3dc" stopOpacity=".22" />
            <stop offset="100%" stopColor="#b96dca" stopOpacity=".05" />
          </linearGradient>
        </defs>
        <path d="M151 -7C167 -3 174 3 186 2C198 1 203 -3 216 1C224 3 229 8 237 9C224 11 214 8 204 9C191 11 180 12 169 8C160 6 154 1 151 -7Z" fill={`url(#${splashId})`} />
        <path d="M163 1C176 4 183 6 195 5C208 4 215 3 226 7" fill="none" stroke="rgba(255,255,255,.10)" strokeWidth=".6" strokeLinecap="round" />
      </svg>
      {/* Micro-décor : lamelles usinées */}
      <div className="absolute -right-[9px] top-[10%] flex rotate-[-38deg] gap-[5px] opacity-[0.2]">
        <span className="h-[34px] w-[4px] rounded-full bg-[linear-gradient(180deg,#ecd8f5_0%,#a761bd_100%)]" />
        <span className="mt-[6px] h-[30px] w-[4px] rounded-full bg-[linear-gradient(180deg,#d7b8e4_0%,#84469a_100%)]" />
        <span className="mt-[12px] h-[26px] w-[4px] rounded-full bg-[linear-gradient(180deg,#c89fd8_0%,#703982_100%)]" />
      </div>
      {/* Bulles */}
      <div className="absolute bottom-[2%] left-[3%] flex items-end gap-[2px]">
        <span className="size-[24px] rounded-full bg-[radial-gradient(circle_at_32%_28%,rgba(255,255,255,0.75)_0%,rgba(172,117,194,0.17)_42%,transparent_78%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.60)]" />
        <span className="size-[16px] rounded-full bg-[radial-gradient(circle_at_32%_28%,rgba(255,255,255,0.65)_0%,rgba(157,97,181,0.13)_45%,transparent_80%)]" />
        <span className="size-[10px] rounded-full bg-[radial-gradient(circle_at_32%_28%,rgba(255,255,255,0.65)_0%,rgba(157,97,181,0.13)_45%,transparent_80%)]" />
      </div>
    </div>
  );
}

function CvCardFold() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute bottom-0 right-0 z-20 h-[50px] w-[50px] transition-[width,height] duration-500 ease-[cubic-bezier(.22,1,.36,1)] group-hover/card:h-[60px] group-hover/card:w-[60px]">
      {/* Ombre du pli */}
      <div className="absolute inset-0 translate-[-2px] bg-[rgba(13,6,17,0.34)] opacity-75 blur-[3px] [clip-path:polygon(0_100%,100%_0,100%_100%)]" />
      {/* Facette métallique */}
      <div className="absolute inset-0 bg-[linear-gradient(135deg,#593366_0%,#9861aa_34%,#d5a9e1_58%,#875198_78%,#4c2a58_100%)] [clip-path:polygon(0_100%,100%_0,100%_100%)]">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.04)_35%,rgba(255,255,255,0.32)_49%,rgba(255,255,255,0.07)_52%,transparent_72%)]" />
      </div>
      {/* Ligne de pli */}
      <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent_47%,rgba(243,218,250,0.45)_49%,rgba(45,20,52,0.42)_51%,transparent_53%)]" />
      {/* Affordance révélée au hover */}
      <ArrowUpRight className="absolute bottom-[7px] right-[7px] h-[25px] w-[25px] translate-x-[3px] translate-y-[3px] text-white opacity-0 drop-shadow-[0_1px_0_rgba(255,255,255,0.22)] transition-all delay-0 duration-300 group-hover/card:translate-x-0 group-hover/card:translate-y-0 group-hover/card:opacity-100 group-hover/card:delay-150" strokeWidth={2.5} />
    </div>
  );
}
