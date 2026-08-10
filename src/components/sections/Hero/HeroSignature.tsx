import { heroContent } from "@/content/hero";

function VisionBolt() {
  return (
    <>
      <span className="pointer-events-none absolute -left-[16px] -top-[20px] z-0 h-[116px] w-[58px] rotate-[17deg] rounded-full bg-[#fde68a]/9 blur-[17px]" />

      <svg aria-hidden="true" className="pointer-events-none absolute -left-[26px] -top-[12px] z-[1] h-[112px] w-[54px] rotate-[17deg] overflow-visible drop-shadow-[0_0_8px_rgba(250,204,21,0.50)]" viewBox="0 0 55 116" fill="none">
        <defs>
          <linearGradient id="visionBolt" x1="12" y1="3" x2="43" y2="110" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#fffbe7" />
            <stop offset=".22" stopColor="#fde68a" />
            <stop offset=".62" stopColor="#facc15" />
            <stop offset="1" stopColor="#f59e0b" />
          </linearGradient>
        </defs>

        <path d="M34 1L10 51H26L17 114L47 48H31L43 1H34Z" fill="url(#visionBolt)" />
        <path d="M34 3L13 49H29L21 103L43 50H28L40 3H34Z" stroke="#fff8d4" strokeOpacity=".72" strokeWidth="1.1" strokeLinejoin="round" />
      </svg>
    </>
  );
}

function VisionSparkle() {
  return (
    <span aria-hidden="true" className="pointer-events-none relative -top-[-14px] -right-[2px] inline-block h-[29px] w-[29px] translate-y-[-26px]">
      <span className="absolute left-1/2 top-0 h-full w-[2px] -translate-x-1/2 bg-gradient-to-b from-transparent via-[#fff0a3] to-transparent shadow-[0_0_8px_rgba(250,204,21,0.72)]" />
      <span className="absolute left-0 top-1/2 h-[2px] w-full -translate-y-1/2 bg-gradient-to-r from-transparent via-[#fde68a] to-transparent shadow-[0_0_8px_rgba(250,204,21,0.72)]" />
      <span className="absolute left-1/2 top-1/2 size-[5px] -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-[1px] bg-[#fffce8] shadow-[0_0_8px_rgba(255,255,255,0.90),0_0_15px_rgba(250,204,21,0.60)]" />
    </span>
  );
}

function VisionWord() {
  const { vision } = heroContent.signature.line1;

  return (
    <span className="relative inline-block overflow-visible">
      <span>{vision.before}</span>

      {/* O / œil */}
      <span className="relative inline-block overflow-visible">
        <span className="pointer-events-none absolute left-[25px] top-[61%] z-[1] h-[22px] w-[20px] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-[50%] border border-[#6d28d9]/18 bg-[linear-gradient(180deg,#fff_0%,#faf8ff_54%,#eee9f4_100%)] shadow-[inset_0_-2px_4px_rgba(76,29,149,0.10),0_0_8px_rgba(168,85,247,0.10)]">
          <span className="absolute left-1/2 top-1/2 size-[18px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle_at_38%_34%,#f5f3ff_0%,#ddd6fe_15%,#a78bfa_32%,#7c3aed_53%,#5b21b6_73%,#2e1065_100%)] shadow-[0_0_5px_rgba(124,58,237,0.35)]">
            <span className="absolute left-1/2 top-1/2 size-[7px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#130d18]" />
            <span className="absolute left-[4px] top-[3px] size-[3px] rounded-full bg-white shadow-[0_0_4px_rgba(255,255,255,0.85)]" />
            <span className="absolute inset-[2px] rounded-full border border-white/20" />
          </span>

          <span className="absolute left-[4px] top-[2px] h-[5px] w-px -rotate-[29deg] bg-[#33233b]/55" />
          <span className="absolute left-[9px] top-0 h-[5px] w-px -rotate-[13deg] bg-[#33233b]/60" />
          <span className="absolute right-[9px] top-0 h-[5px] w-px rotate-[13deg] bg-[#33233b]/60" />
          <span className="absolute right-[4px] top-[2px] h-[5px] w-px rotate-[29deg] bg-[#33233b]/55" />
          <span className="absolute left-[3px] right-[3px] top-[1px] h-[8px] rounded-[50%] border-t border-[#33233b]/48" />
        </span>

        <span className="pointer-events-none absolute left-1/2 top-1/2 z-0 size-[46px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#a855f7]/8 blur-[12px]" />
        <span className="relative">{vision.eye}</span>
      </span>

      <span>{vision.after}</span>
    </span>
  );
}

function AmplitudeWord() {
  const { focus } = heroContent.signature.line2;

  return (
    <span className="relative ml-[5px] inline-block translate-y-[-2px] text-[83px] font-black tracking-[0.005em]">
      <span className="relative z-20 bg-[linear-gradient(96deg,#7c3aed_0%,#9333ea_34%,#a855f7_67%,#d946ef_100%)] bg-clip-text text-transparent">{focus}</span>

      {/* Support futuriste — VALIDÉ */}
      {/* <span aria-hidden="true" className="pointer-events-none absolute -bottom-[32px] left-1/2 z-10 h-[35px] w-[90%] -translate-x-1/2">
        <span className="absolute bottom-[3px] left-1/2 h-[16px] w-[54%] -translate-x-1/2 rounded-[50%] bg-[#a855f7]/10 blur-[10px]" />

        <span className="absolute left-[3%] top-0 h-[15px] w-[94%] rounded-[50%] border border-[#e9d5ff]/38 bg-[linear-gradient(90deg,#4c1d95_0%,#6d28d9_18%,#a855f7_50%,#d946ef_82%,#701a75_100%)] shadow-[inset_0_2px_3px_rgba(255,255,255,0.32),0_0_7px_rgba(168,85,247,0.15)]">
          <span className="absolute inset-x-[7%] top-[2px] h-[8px] rounded-[50%] bg-[linear-gradient(90deg,rgba(196,181,253,0.30),rgba(233,213,255,0.68)_42%,rgba(240,171,252,0.58)_68%,rgba(217,70,239,0.22))]" />
          <span className="absolute inset-x-[14%] top-[4px] h-[6px] rounded-[50%] border border-white/18 bg-[#f3e8ff]/6" />
        </span>

        <span className="absolute left-[7%] top-[9px] h-[17px] w-[86%] overflow-hidden rounded-b-[48%] border-x border-b border-[#4c1d95]/32 bg-[linear-gradient(180deg,#34203d_0%,#211727_44%,#151018_100%)]">
          <span className="absolute inset-x-[5%] top-[2px] h-[9px] opacity-55 [background-image:repeating-linear-gradient(90deg,transparent_0px,transparent_7px,rgba(216,180,254,0.22)_7px,rgba(216,180,254,0.22)_8px)]" />
          <span className="absolute bottom-[3px] left-[10%] h-[2px] w-[80%] rounded-full bg-[linear-gradient(90deg,transparent,#7c3aed_15%,#c084fc_46%,#e879f9_72%,transparent)] shadow-[0_0_6px_rgba(192,132,252,0.40)]" />
          <span className="absolute bottom-[5px] left-[19%] size-[3px] rounded-full bg-[#c4b5fd] shadow-[0_0_4px_rgba(196,181,253,0.70)]" />
          <span className="absolute bottom-[5px] left-[37%] size-[3px] rounded-full bg-[#a855f7] shadow-[0_0_4px_rgba(168,85,247,0.65)]" />
          <span className="absolute bottom-[5px] right-[37%] size-[3px] rounded-full bg-[#e879f9] shadow-[0_0_4px_rgba(232,121,249,0.60)]" />
          <span className="absolute bottom-[5px] right-[19%] size-[3px] rounded-full bg-[#c4b5fd] shadow-[0_0_4px_rgba(196,181,253,0.65)]" />
        </span>

        <span className="absolute bottom-[1px] left-[14%] h-[10px] w-[72%] rounded-[50%] border border-[#9333ea]/28 bg-[#17131f]/70">
          <span className="absolute inset-x-[9%] bottom-[1px] h-[3px] rounded-[50%] border-b border-[#c084fc]/60 shadow-[0_2px_5px_rgba(168,85,247,0.18)]" />
        </span>

        <span className="absolute bottom-[-2px] left-1/2 h-[5px] w-[30%] -translate-x-1/2 rounded-[50%] bg-[radial-gradient(ellipse_at_center,rgba(216,180,254,0.60)_0%,rgba(168,85,247,0.22)_48%,transparent_75%)]" />
      </span> */}
     
     {/* Trace d’élévation — plus présente, structurée autour de 3 axes porteurs */}
    <span aria-hidden="true" className="pointer-events-none absolute -bottom-[21px] left-1/2 z-10 h-[27px] w-[100%] -translate-x-1/2">
      {/* Niveau d’origine — plus court, extrémités très fondues */}
      <span className="absolute bottom-[2px] left-[12%] h-px w-[76%] bg-[linear-gradient(90deg,transparent_0%,rgba(126,34,206,0.20)_15%,rgba(147,51,234,0.46)_38%,rgba(192,132,252,0.62)_50%,rgba(217,70,239,0.40)_70%,transparent_100%)] shadow-[0_0_5px_rgba(168,85,247,0.12)]" />

      {/* Halo extrêmement localisé au centre */}
      <span className="absolute bottom-[-1px] left-1/2 h-[9px] w-[48%] -translate-x-1/2 rounded-full bg-[#a855f7]/12 blur-[7px]" />

      {/* Axes secondaires — volontairement irréguliers et faibles */}
      <span className="absolute bottom-[3px] left-[13%] h-[8px] w-px bg-gradient-to-t from-[#7e22ce]/30 to-transparent" />
      <span className="absolute bottom-[3px] left-[28%] h-[13px] w-px bg-gradient-to-t from-[#9333ea]/40 via-[#a855f7]/16 to-transparent" />
      <span className="absolute bottom-[3px] right-[27%] h-[12px] w-px bg-gradient-to-t from-[#c026d3]/36 via-[#d946ef]/14 to-transparent" />
      <span className="absolute bottom-[3px] right-[12%] h-[7px] w-px bg-gradient-to-t from-[#d946ef]/25 to-transparent" />

      {/* Axe porteur gauche */}
      <span className="absolute bottom-[3px] left-[39%] h-[21px] w-px bg-gradient-to-t from-[#7e22ce]/60 via-[#a855f7]/34 to-transparent shadow-[0_0_5px_rgba(147,51,234,0.20)]">
        <span className="absolute -left-[2px] bottom-[-1px] size-[5px] rotate-45 border border-[#a855f7]/50 bg-[#f3e8ff]/50 shadow-[0_0_5px_rgba(168,85,247,0.22)]" />
      </span>

      {/* Axe porteur central — le plus puissant */}
      <span className="absolute bottom-[3px] left-1/2 h-[27px] w-px -translate-x-1/2 bg-gradient-to-t from-[#9333ea]/72 via-[#c084fc]/42 to-transparent shadow-[0_0_7px_rgba(168,85,247,0.26)]">
        <span className="absolute -left-[3px] bottom-[-2px] size-[6px] rotate-45 border border-[#d8b4fe]/60 bg-[#a855f7]/38 shadow-[0_0_7px_rgba(168,85,247,0.34)]" />
        <span className="absolute -left-[3px] top-[3px] h-px w-[7px] bg-[#d8b4fe]/34" />
      </span>

      {/* Axe porteur droit */}
      <span className="absolute bottom-[3px] right-[38%] h-[22px] w-px bg-gradient-to-t from-[#a855f7]/58 via-[#d946ef]/30 to-transparent shadow-[0_0_5px_rgba(192,38,211,0.18)]">
        <span className="absolute -left-[2px] bottom-[-1px] size-[5px] rotate-45 border border-[#d946ef]/45 bg-[#f5d0fe]/42 shadow-[0_0_5px_rgba(217,70,239,0.20)]" />
      </span>

      {/* Petits repères horizontaux donnant une sensation de mesure / ascension */}
      <span className="absolute bottom-[10px] left-[38%] h-px w-[7px] bg-[#a855f7]/25" />
      <span className="absolute bottom-[15px] left-[49%] h-px w-[9px] bg-[#c084fc]/34" />
      <span className="absolute bottom-[11px] right-[37%] h-px w-[6px] bg-[#d946ef]/22" />
    </span>

    </span>
  );
}

function PlusWord() {
  return (
    <span className="relative ml-[2px] inline-flex items-baseline overflow-visible pr-[2px] leading-none tracking-[-0.055em]">
      <span className="inline-block text-[1em] text-[#201b24]">p</span>
      <span className="inline-block -translate-y-[1px] text-[1.025em] text-[#2f1e35]">l</span>
      <span className="inline-block -translate-y-[2px] text-[1.05em] text-[#452052]">u</span>
      <span className="inline-block -translate-y-[3px] text-[1.075em] text-[#61277b]">s</span>
    </span>
  );
}

export function HeroSignature() {
  const { line1, line2, line3 } = heroContent.signature;

  return (
    <h1 aria-label="Votre vision, toute son ampleur. Et même un peu plus..." className="relative isolate w-[850px] overflow-visible font-[family-name:var(--font-hero)]">
      <span aria-hidden="true" className="pointer-events-none absolute left-[185px] top-[-16px] -z-20 h-[105px] w-[390px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.36)_0%,rgba(250,204,21,0.045)_30%,rgba(192,132,252,0.045)_50%,transparent_74%)] blur-[18px]" />
      <span aria-hidden="true" className="pointer-events-none absolute left-[115px] top-[76px] -z-20 h-[120px] w-[650px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.085)_0%,rgba(126,34,206,0.035)_44%,transparent_74%)] blur-[22px]" />

      {/* L1 */}
      <span aria-hidden="true" className="relative z-20 block whitespace-nowrap text-[88px] font-extrabold leading-[0.86] tracking-[-0.032em] text-[#19161c]">
        <span className="relative inline-block">
          <VisionBolt />

          {/* Le texte passe devant l'éclair */}
          <span className="relative z-1">{line1.before}</span>
        </span>

        {/* Scintillement placé entre VOTRE et VISION */}
        <VisionSparkle />

        <VisionWord />{line1.punctuation}
      </span>

      {/* L2 */}
      <span aria-hidden="true" className="relative z-10 mt-[12px] block whitespace-nowrap font-extrabold leading-[0.84]">
        <span className="bg-[linear-gradient(96deg,#5b21b6_0%,#6d28d9_44%,#7c3aed_78%,#9333ea_100%)] bg-clip-text text-[78px] tracking-[-0.058em] text-transparent">{line2.before} </span>
        <AmplitudeWord />
        <span className="bg-[linear-gradient(90deg,#c026d3,#d946ef)] bg-clip-text text-[82px] text-transparent">{line2.punctuation}</span>
      </span>

      {/* L3 */}
      <span aria-hidden="true" className="relative z-20 mt-[16px] block whitespace-nowrap text-[69px] font-bold leading-[0.92] tracking-[-0.038em] text-[#201b24]">
        {line3.before} <PlusWord />

        <span className="ml-[4px] inline-flex translate-y-[-1px] items-center gap-[5px]">
          <span className="size-[6px] rounded-full bg-[#55235f]/68" />
          <span className="size-[8px] -translate-y-[1px] rounded-full bg-[#7e22ce]/80 shadow-[0_0_6px_rgba(126,34,206,0.24)]" />
          <span className="relative size-[10px] -translate-y-[2px] rounded-full bg-[#c026d3]/92 shadow-[0_0_10px_rgba(192,38,211,0.42)]">
            <span className="absolute -inset-[4px] rounded-full border border-[#d946ef]/15" />
          </span>
        </span>
      </span>
    </h1>
  );
}