import { heroContent } from "@/content/hero";

export function HeroBackground() {
  const { data, product } = heroContent.keywords;

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden [container-type:inline-size] [--u:clamp(.75px,calc(100cqw/1600),1.1px)]">
      {/* BACKGROUND */}
      {/* Base minérale */}
      <div className="absolute inset-0 bg-[linear-gradient(108deg,#d2cbd6_0%,#e1dce4_38%,#d9d1de_65%,#c8bccf_100%)]" />
      {/* Lumière éditoriale gauche */}
      <div className="absolute left-[-3%] top-[10%] h-[calc(430*var(--u))] w-[calc(620*var(--u))] rounded-[50%] bg-[radial-gradient(ellipse_at_60%_42%,rgba(255,248,238,0.24)_0%,rgba(250,239,230,0.13)_30%,rgba(238,221,230,0.055)_52%,transparent_74%)] blur-[calc(24*var(--u))]" />
      {/* Nappe lilas centrale */}
      <div className="absolute left-[28%] top-[15%] h-[calc(390*var(--u))] w-[calc(610*var(--u))] rounded-[50%] bg-[radial-gradient(ellipse,rgba(155,112,184,0.095)_0%,rgba(151,107,180,0.055)_38%,rgba(139,94,170,0.025)_58%,transparent_74%)] blur-[calc(20*var(--u))]" />
      {/* Lueur haute workstation */}
      <div className="absolute right-[4%] top-[-9%] h-[calc(340*var(--u))] w-[calc(680*var(--u))] rounded-[50%] bg-[radial-gradient(ellipse_at_56%_72%,rgba(225,201,240,0.26)_0%,rgba(203,166,226,0.15)_30%,rgba(171,119,204,0.065)_52%,transparent_74%)] blur-[calc(34*var(--u))]" />
      {/* Teinte latérale droite workstation */}
      <div className="absolute right-[calc(-175*var(--u))] top-[1%] size-[calc(690*var(--u))] rounded-full bg-[radial-gradient(circle,rgba(168,85,247,0.21)_0%,rgba(126,34,206,0.105)_34%,rgba(99,102,241,0.035)_56%,transparent_74%)] blur-[calc(72*var(--u))]" />
      {/* Grille technique workstation */}
      <div className="absolute right-[-2%] top-[0.4%] h-[calc(175*var(--u))] w-[55%] opacity-[0.32] [background-image:linear-gradient(rgba(126,34,206,0.13)_1px,transparent_1px),linear-gradient(90deg,rgba(126,34,206,0.13)_1px,transparent_1px)] [background-size:calc(38*var(--u))_calc(38*var(--u))] [mask-image:linear-gradient(90deg,transparent_0%,black_18%,black_84%,transparent_100%)]" />
      {/* Horizon */}
      <div className="absolute bottom-[calc(-320*var(--u))] right-[-13%] h-[calc(525*var(--u))] w-[79%] rotate-[-5deg] rounded-[50%] bg-[radial-gradient(ellipse_at_42%_4%,rgba(126,34,206,0.34)_0%,rgba(63,42,73,0.92)_27%,rgba(33,25,41,0.98)_54%,#17131f_78%)] shadow-[0_-34px_80px_rgba(126,34,206,0.13)]" />
      {/* Ombre venant de la workstation */}
      <div className="absolute bottom-[calc(-52*var(--u))] right-[15%] h-[calc(205*var(--u))] w-[48%] rotate-[3deg] rounded-[50%] bg-[radial-gradient(ellipse_at_74%_24%,rgba(18,12,24,0.52)_0%,rgba(35,21,46,0.35)_30%,rgba(68,39,84,0.18)_52%,transparent_74%)] blur-[calc(3*var(--u))]" />
      {/* Fusion finale avec Prestations */}
      <div className="absolute inset-x-0 bottom-0 h-[calc(57*var(--u))] bg-[linear-gradient(180deg,transparent_0%,rgba(23,19,31,0.10)_38%,rgba(23,19,31,0.52)_72%,#17131f_100%)]" />
      {/* Arête physique — accroche lumineuse du plan */}
      <svg className="pointer-events-none absolute bottom-[calc(55*var(--u))] right-[2%] h-[calc(92*var(--u))] w-[calc(700*var(--u))] overflow-visible" viewBox="0 0 700 92" fill="none">
        <defs>
          <linearGradient id="hero-edge-highlight" x1="0" y1="0" x2="700" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
            <stop offset="14%" stopColor="#ffffff" stopOpacity="0.08" />
            <stop offset="32%" stopColor="#fffaff" stopOpacity="0.30" />
            <stop offset="49%" stopColor="#f3e8ff" stopOpacity="0.20" />
            <stop offset="67%" stopColor="#d8b4fe" stopOpacity="0.30" />
            <stop offset="88%" stopColor="#c084fc" stopOpacity="0.17" />
            <stop offset="100%" stopColor="#c084fc" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d="M8 66 C220 62 458 44 692 14" stroke="#a855f7" strokeOpacity="0.15" strokeWidth="1.4" />
        <path d="M8 66 C220 62 458 44 692 14" stroke="url(#hero-edge-highlight)" strokeWidth="0.9" />
      </svg>
      {/* MOTS DE DÉCORATION */}
      
      {/* PRODUCT */}
      <div className="absolute left-[46%] top-[42%] h-[calc(108*var(--u))] w-[calc(475*var(--u))] -rotate-[7deg] overflow-hidden [mask-image:linear-gradient(90deg,transparent_0%,black_9%,black_86%,transparent_100%)]">
        <span className="absolute whitespace-nowrap font-[family-name:var(--font-header)] text-[calc(92*var(--u))] font-black leading-none tracking-[-0.07em] text-[#6b21a8]/[0.11] blur-[calc(.55*var(--u))]">
          {product}
        </span>
        <span className="absolute left-[calc(4*var(--u))] top-[calc(4*var(--u))] whitespace-nowrap font-[family-name:var(--font-header)] text-[calc(92*var(--u))] font-black leading-none tracking-[-0.07em] text-transparent [-webkit-text-stroke:1px_rgba(126,34,206,0.18)]">
          {product}
        </span>
        <span className="absolute bottom-[calc(13*var(--u))] left-[13%] h-px w-[72%] bg-gradient-to-r from-transparent via-[#9333ea]/42 to-transparent" />
      </div>
    </div>
  );
}