import Image from "next/image";
import caliperNeeds from "@/assets/hero/caliper.png";
import { heroContent } from "@/content/hero";

function IdeaSpark() {
  return (
    <svg aria-hidden="true" className="pointer-events-none absolute left-[34%] top-[24%] z-20 size-[12px] overflow-visible" viewBox="0 0 16 16" fill="none">
      <path d="M8 1.2V14.8M1.8 8H14.2" stroke="#fff8dc" strokeWidth=".7" strokeLinecap="round" />
      <path d="M4.5 4.5L11.5 11.5M11.5 4.5L4.5 11.5" stroke="#e9d5ff" strokeWidth=".45" strokeLinecap="round" opacity=".85" />
      <path d="M8 4.1C8.25 6.25 9.75 7.75 11.9 8C9.75 8.25 8.25 9.75 8 11.9C7.75 9.75 6.25 8.25 4.1 8C6.25 7.75 7.75 6.25 8 4.1Z" fill="#fffdf4" />
      <circle cx="8" cy="8" r="1.2" fill="#f3e8ff" />
    </svg>
  );
}

function IdeaLampBeam() {
  return (
    <span aria-hidden="true" className="pointer-events-none absolute -right-[30px] bottom-[-2px] z-0 h-[120px] w-[112px]">
      <svg className="size-full overflow-visible" viewBox="0 0 112 120" fill="none">
        <defs>
          <linearGradient id="beamOuter" x1="22" y1="46" x2="-166" y2="91" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#fff8db" stopOpacity=".42" />
            <stop offset=".16" stopColor="#fdf0c9" stopOpacity=".27" />
            <stop offset=".44" stopColor="#f8e6bc" stopOpacity=".14" />
            <stop offset=".74" stopColor="#faedcf" stopOpacity=".055" />
            <stop offset="1" stopColor="#fff7e7" stopOpacity="0" />
          </linearGradient>

          <linearGradient id="beamMiddle" x1="21" y1="46" x2="-126" y2="85" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#fffdf0" stopOpacity=".62" />
            <stop offset=".15" stopColor="#fff6d7" stopOpacity=".44" />
            <stop offset=".42" stopColor="#fbe9bd" stopOpacity=".23" />
            <stop offset=".72" stopColor="#f9ebcb" stopOpacity=".075" />
            <stop offset="1" stopColor="#fff8e7" stopOpacity="0" />
          </linearGradient>

          <linearGradient id="beamCore" x1="20" y1="46" x2="-78" y2="73" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#fffef4" stopOpacity=".82" />
            <stop offset=".18" stopColor="#fff7d9" stopOpacity=".58" />
            <stop offset=".48" stopColor="#f9e7b9" stopOpacity=".27" />
            <stop offset=".78" stopColor="#f8e9c8" stopOpacity=".075" />
            <stop offset="1" stopColor="#fff7e2" stopOpacity="0" />
          </linearGradient>

          <radialGradient id="beamMouth" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(17.5 45.7) rotate(18) scale(16.5 5.4)">
            <stop offset="0" stopColor="#fffef4" stopOpacity=".94" />
            <stop offset=".43" stopColor="#fff4c7" stopOpacity=".66" />
            <stop offset=".76" stopColor="#efd99e" stopOpacity=".26" />
            <stop offset="1" stopColor="#e6c77d" stopOpacity="0" />
          </radialGradient>

          <filter id="beamOuterBlur" x="-25%" y="-35%" width="155%" height="185%">
            <feGaussianBlur stdDeviation="10" />
          </filter>

          <filter id="beamMiddleBlur" x="-20%" y="-30%" width="150%" height="175%">
            <feGaussianBlur stdDeviation="5" />
          </filter>

          <filter id="beamCoreBlur" x="-20%" y="-30%" width="150%" height="170%">
            <feGaussianBlur stdDeviation="2.3" />
          </filter>

          <filter id="beamMouthBlur" x="-80%" y="-160%" width="260%" height="420%">
            <feGaussianBlur stdDeviation="2" />
          </filter>
        </defs>

        {/* diffusion atmosphérique : part des deux bords de l'ouverture */}
        <path d="M3.3 40.9C-35 47.5-116 63-178 78C-145 101-96 117-34 124C-7 91 17 64 31.7 50.4Z" fill="url(#beamOuter)" filter="url(#beamOuterBlur)" />

        {/* faisceau principal */}
        <path d="M3.8 41.1C-25 48.5-83 64-133 80C-106 98-70 108-31 111C-9 83 12 61 31.2 50.2Z" fill="url(#beamMiddle)" filter="url(#beamMiddleBlur)" />

        {/* cœur : plus intense près de la lampe, mais toujours sans bord net */}
        <path d="M4.9 41.5C-14 48.2-50 60-80 72C-60 82-37 88-15 90C1 73 16 58 30.2 49.9Z" fill="url(#beamCore)" filter="url(#beamCoreBlur)" />

        {/* raccord exact avec toute la bouche du réflecteur */}
        <ellipse cx="17.5" cy="45.7" rx="15.2" ry="4.25" transform="rotate(18 17.5 45.7)" fill="url(#beamMouth)" filter="url(#beamMouthBlur)" />
      </svg>
    </span>
  );
}

function IdeaLamp() {
  return (
    <span aria-hidden="true" className="pointer-events-none absolute -right-[26px] bottom-[-2px] z-20 h-[120px] w-[112px]">
      <svg className="size-full overflow-visible" viewBox="0 0 112 120" fill="none">
        <defs>
          {/* graphite chaud : la lampe reste sombre mais n'est plus un simple aplat noir */}
          <linearGradient id="lampBody" x1="30" y1="8" x2="98" y2="113" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#514952" />
            <stop offset=".24" stopColor="#39343c" />
            <stop offset=".58" stopColor="#27242b" />
            <stop offset=".82" stopColor="#1d1b20" />
            <stop offset="1" stopColor="#131216" />
          </linearGradient>

          <linearGradient id="lampArm" x1="38" y1="20" x2="94" y2="102" gradientUnits="userSpaceOnUse">
            <stop stopColor="#716a73" />
            <stop offset=".18" stopColor="#504b53" />
            <stop offset=".52" stopColor="#343139" />
            <stop offset=".82" stopColor="#211f25" />
            <stop offset="1" stopColor="#17161a" />
          </linearGradient>

          {/* abat-jour légèrement plus noble et différencié du reste */}
          <linearGradient id="lampShadeShell" x1="38" y1="25" x2="4" y2="53" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#575159" />
            <stop offset=".24" stopColor="#464148" />
            <stop offset=".58" stopColor="#302d33" />
            <stop offset=".82" stopColor="#242227" />
            <stop offset="1" stopColor="#19181c" />
          </linearGradient>

          <linearGradient id="lampMetal" x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#ece9e7" />
            <stop offset=".22" stopColor="#aaa5a6" />
            <stop offset=".50" stopColor="#6e696e" />
            <stop offset=".76" stopColor="#403c42" />
            <stop offset="1" stopColor="#242228" />
          </linearGradient>

          {/* petits détails mécaniques : champagne/laiton, pas violet */}
          <linearGradient id="lampBrass" x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#fff1c9" />
            <stop offset=".32" stopColor="#d8b77a" />
            <stop offset=".67" stopColor="#9f7745" />
            <stop offset="1" stopColor="#62472c" />
          </linearGradient>

          <radialGradient id="lampReflector" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(17.5 44.8) rotate(18) scale(17 6)">
            <stop offset="0" stopColor="#f0e8d7" />
            <stop offset=".48" stopColor="#d5c9b4" />
            <stop offset=".78" stopColor="#a69b8e" />
            <stop offset="1" stopColor="#716a66" />
          </radialGradient>

          <radialGradient id="lampEmission" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(17.5 45.7) rotate(18) scale(15 4.2)">
            <stop offset="0" stopColor="#fffef4" />
            <stop offset=".32" stopColor="#fff7d6" stopOpacity=".92" />
            <stop offset=".67" stopColor="#efdba8" stopOpacity=".54" />
            <stop offset="1" stopColor="#bd9f65" stopOpacity=".08" />
          </radialGradient>

          <filter id="lampGlow" x="-70%" y="-180%" width="240%" height="460%">
            <feGaussianBlur stdDeviation="1.35" />
          </filter>

          <filter id="lampShadow" x="-30%" y="-20%" width="170%" height="150%">
            <feDropShadow dx="0" dy="2" stdDeviation="1.5" floodColor="#141217" floodOpacity=".26" />
          </filter>
        </defs>

        <g filter="url(#lampShadow)">
          {/* socle : même principe, légèrement plus compact visuellement */}
          <path d="M73 107C73 103.6 75.8 101 79.2 101H96.8C100.2 101 103 103.6 103 107V109H73V107Z" fill="url(#lampBody)" stroke="#615c63" strokeWidth=".8" />
          <path d="M68 109H106C107.7 109 109 110.3 109 112V113.5H65V112C65 110.3 66.3 109 68 109Z" fill="#19181c" stroke="#504c52" strokeWidth=".75" />
          <path d="M72 109.5H101" stroke="#d2cdca" strokeWidth=".55" strokeOpacity=".30" />

          {/* articulation basse */}
          <circle cx="87" cy="96" r="7.5" fill="#252329" stroke="#69636b" strokeWidth=".9" />
          <circle cx="87" cy="96" r="4.3" fill="url(#lampMetal)" />
          <circle cx="87" cy="96" r="1.8" fill="#211f24" stroke="#dbd6d3" strokeWidth=".5" />
          <path d="M84.9 96H89.1" stroke="#e3dedb" strokeWidth=".65" strokeLinecap="round" />

          {/* bras inférieur : plus vertical qu'avant */}
          <path d="M83.2 90.6L68 57" stroke="#151419" strokeWidth="8" strokeLinecap="round" />
          <path d="M82.1 89.9L67.4 57.8" stroke="url(#lampArm)" strokeWidth="5.4" strokeLinecap="round" />
          <path d="M80.3 86.7L67.4 58.4" stroke="#d3cecb" strokeWidth=".7" strokeLinecap="round" strokeOpacity=".26" />

          {/* articulation centrale */}
          <circle cx="65.3" cy="52.8" r="7.8" fill="#242228" stroke="#686269" strokeWidth=".9" />
          <circle cx="65.3" cy="52.8" r="4.55" fill="url(#lampMetal)" />
          <circle cx="65.3" cy="52.8" r="1.9" fill="#211f24" stroke="#e0dbd8" strokeWidth=".5" />
          <circle cx="65.3" cy="52.8" r=".85" fill="url(#lampBrass)" />

          {/* bras supérieur : revient vers la gauche, mais moins violemment */}
          <path d="M60.2 48.1L47 26.8" stroke="#151419" strokeWidth="7.5" strokeLinecap="round" />
          <path d="M59.5 47.5L47 27.5" stroke="url(#lampArm)" strokeWidth="5" strokeLinecap="round" />
          <path d="M57.8 44.8L47.1 28.1" stroke="#ddd8d4" strokeWidth=".65" strokeLinecap="round" strokeOpacity=".25" />

          {/* articulation de tête */}
          <circle cx="44.6" cy="22.8" r="5.8" fill="#242228" stroke="#686269" strokeWidth=".85" />
          <circle cx="44.6" cy="22.8" r="3" fill="url(#lampMetal)" />
          <circle cx="44.6" cy="22.8" r="1.05" fill="url(#lampBrass)" />


          {/* col mécanique court */}
          <path d="M41 26L36.4 30" stroke="#19181c" strokeWidth="5.4" strokeLinecap="round" />
          <path d="M40.7 25.8L36.3 29.7" stroke="#625e64" strokeWidth="3.05" strokeLinecap="round" />
          <path d="M39.4 26.7L36.7 29.1" stroke="#ddd8d4" strokeWidth=".55" strokeLinecap="round" strokeOpacity=".34" />

          {/* bague / pivot de fixation de l'abat-jour */}
          <circle cx="35.1" cy="31.2" r="3.6" fill="#242228" stroke="#69646b" strokeWidth=".7" />
          <circle cx="35.1" cy="31.2" r="2.15" fill="url(#lampMetal)" />
          <circle cx="35.1" cy="31.2" r=".72" fill="url(#lampBrass)" />

          {/* abat-jour : vraie cloche large et peu profonde */}
          <path d="M36.3 31.6C32.5 27.6 27 26.2 21.2 27.7C14.2 29.5 7.9 34.5 3.1 40.8C1.9 42.4 2.6 44.8 4.5 45.5L28.9 54.2C31 54.9 33.2 53.8 34 51.8C36.8 45 39.8 36.5 36.3 31.6Z" fill="url(#lampShadeShell)" stroke="#666169" strokeWidth=".95" />

          {/* relief supérieur de la coque */}
          <path d="M34.8 32C31.4 28.8 26.7 28 21.8 29.2C16.7 30.5 12.1 33.5 8.1 37.5" stroke="#e0dbd7" strokeWidth=".72" strokeLinecap="round" strokeOpacity=".34" />

          {/* légère ligne de fabrication près du capot arrière */}
          <path d="M31.9 29.3C34.2 34.2 34.5 40.1 32.7 45.8" stroke="#151419" strokeWidth=".62" strokeOpacity=".30" />

          {/* large lèvre frontale */}
          <ellipse cx="17.4" cy="46.1" rx="16.6" ry="5.15" transform="rotate(18 17.4 46.1)" fill="#17161a" stroke="#625e64" strokeWidth=".65" />

          {/* réflecteur intérieur — matière uniquement, aucune lumière pour l'instant */}
          <ellipse cx="17.5" cy="45.7" rx="14.8" ry="4.05" transform="rotate(18 17.5 45.7)" fill="url(#lampReflector)" />

          {/* l'ampoule/réflecteur devient la source physique du faisceau */}
          <ellipse cx="17.5" cy="45.7" rx="12.8" ry="3.45" transform="rotate(18 17.5 45.7)" fill="url(#lampEmission)" opacity=".82" />
          <ellipse cx="17.5" cy="45.7" rx="10.5" ry="2.7" transform="rotate(18 17.5 45.7)" fill="#fff8d8" opacity=".34" filter="url(#lampGlow)" />

          {/* émission lumineuse : superposée au réflecteur sans modifier sa matière */}
          <ellipse cx="19.8" cy="46.4" rx="11.8" ry="3.25" transform="rotate(18 19.8 46.4)" fill="url(#lampEmission)" opacity=".72" />
          <ellipse cx="21.5" cy="46.7" rx="8.5" ry="2.55" transform="rotate(18 21.5 46.7)" fill="#fff7d8" opacity=".23" filter="url(#lampEmissionBlur)" />

          {/* profondeur interne du réflecteur */}
          <path d="M4.4 41.7C10 43 21.3 46.2 31.1 50.4" stroke="#fffaf0" strokeWidth=".6" strokeLinecap="round" strokeOpacity=".42" />
          <path d="M5.8 43.7C12.2 45 21.6 47.8 29.5 51" stroke="#71665a" strokeWidth=".7" strokeLinecap="round" strokeOpacity=".38" />

          {/* centre technique du réflecteur — pas encore une ampoule allumée */}
          <ellipse cx="27.2" cy="49.2" rx="1.65" ry="1.15" transform="rotate(18 27.2 49.2)" fill="#393536" />
          <ellipse cx="27.2" cy="49.2" rx=".72" ry=".52" transform="rotate(18 27.2 49.2)" fill="#d6b777" />


          {/* minuscule détail d'assemblage chaud */}
          <circle cx="97.2" cy="105" r="1.45" fill="url(#lampBrass)" />
          <circle cx="97.2" cy="105" r=".5" fill="#fff3d1" opacity=".75" />
        </g>
      </svg>
    </span>
  );
}

function IdeaWord() {
  const { focus } = heroContent.signature.line1;

  return (
    <span className="relative isolate inline-block pr-[34px]">
      <IdeaLampBeam />
      <IdeaLamp />

      <span className="relative z-10 bg-[linear-gradient(104deg,#19151d_0%,#201725_55%,#321539_100%)] bg-clip-text text-transparent [text-shadow:-1px_1.8px_2.2px_rgba(65,52,71,0.18)]">
        {focus}
        <IdeaSpark />
      </span>
    </span>
  );
}

function ProductBevels({ children }: { children: React.ReactNode }) {
  const bevel = "linear-gradient(135deg,transparent 0 31%,#8F6BBB 32% 50%,#B59AD3 51% 57%,#70489D 58% 68%,transparent 69%)";
  return (
    <span aria-hidden="true" className="pointer-events-none absolute inset-0 bg-clip-text text-transparent [-webkit-background-clip:text]" style={{ backgroundImage: `${bevel},${bevel},${bevel}`, backgroundRepeat: "no-repeat", backgroundSize: "36px 28px, 14px 38px, 15px 8px", backgroundPosition: "7.5% 18%, 42% 58%, 99% 85%" }}>
      {children}
    </span>
  );
}

function ProductFinishLines({ children }: { children: React.ReactNode }) {
  const finishLine = "linear-gradient(90deg,transparent 0 30%,rgba(214,192,236,.96) 31% 43%,rgba(132,97,173,.92) 44% 58%,rgba(92,61,130,.76) 59% 68%,transparent 69%)";
  return (
    <span aria-hidden="true" className="pointer-events-none absolute inset-0 z-[12] bg-clip-text text-transparent [-webkit-background-clip:text]" style={{ backgroundImage: `${finishLine},${finishLine},${finishLine}`, backgroundRepeat: "no-repeat", backgroundSize: "8px 18px, 8px 24px, 18px 16px", backgroundPosition: "23% 83%, 53% 26%, 78% 84%" }}>
      {children}
    </span>
  );
}

function ProductFacetCuts({ children }: { children: React.ReactNode }) {
  const facet = "conic-gradient(from 215deg at 50% 50%,transparent 0 17%,#6F4898 18% 35%,#9470BC 36% 56%,#C0A8D9 57% 67%,#8058AA 68% 81%,transparent 82% 100%)";
  return (
    <span aria-hidden="true" className="pointer-events-none absolute inset-0 z-[13] bg-clip-text text-transparent [-webkit-background-clip:text]" style={{ backgroundImage: `${facet},${facet},${facet}`, backgroundRepeat: "no-repeat", backgroundSize: "10px 15px, 13px 13px, 10px 14px", backgroundPosition: "21% 37%, 60% 6%, 85% 36%" }}>
      {children}
    </span>
  );
}

function ProductMicroNotches({ children }: { children: React.ReactNode }) {
  const notch = "conic-gradient(from 225deg at 50% 50%,transparent 0 20%,#32194D 21% 43%,#44245F 44% 61%,#7954A0 62% 67%,transparent 68% 100%)";
  return (
    <span
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-[14] bg-clip-text text-transparent [-webkit-background-clip:text]"
      style={{
        backgroundImage: `${notch},${notch},${notch}`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "11px 9px, 9px 8px, 12px 12px",
        backgroundPosition: "9% 85%, 64% 18%, 95% 18%",
      }}
    >
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
    <svg aria-hidden="true" className="pointer-events-none absolute -left-[30px] -top-[12px] z-0 h-[91px] w-[calc(100%+72px)] overflow-visible" viewBox="0 0 370 100" preserveAspectRatio="none" fill="none">
      {/* règle supérieure */}
      <path d="M38 16H319" stroke="url(#caliperPurple)" strokeWidth="1.15" />
      <path d="M46 11V17 M58 13V17 M70 12V17 M82 13V17 M94 11V17 M106 13V17 M118 12V17 M130 13V17 M142 11V17 M154 13V17 M166 12V17 M178 13V17 M190 11V17 M202 13V17 M214 12V17 M226 13V17 M238 11V17 M250 13V17 M262 12V17 M274 13V17 M286 11V17 M298 13V17 M310 12V17" stroke="#6f4b93" strokeWidth=".72" strokeOpacity=".45" />
      {/* règle inférieure, volontairement plus présente */}
      <path d="M39 82H322" stroke="url(#caliperPurple)" strokeWidth="1.4" />
      <path d="M46 82V90 M58 82V87 M70 82V90 M82 82V87 M94 82V90 M106 82V87 M118 82V90 M130 82V87 M142 82V90 M154 82V87 M166 82V90 M178 82V87 M190 82V90 M202 82V87 M214 82V90 M226 82V87 M238 82V90 M250 82V87 M262 82V90 M274 82V87 M286 82V90 M298 82V87 M310 82V90" stroke="#735294" strokeWidth=".76" strokeOpacity=".50" />
    </svg>
  );
}

function NeedsWord() {
  const { focus } = heroContent.signature.line3;
  return (
    <span className="relative inline-block">
      <CaliperMeasure />
      <Image src={caliperNeeds} alt="Pied à coulisse" aria-hidden="true" className="pointer-events-none absolute left-62 top-[-8] z-[1] h-auto w-[35%] select-none" priority />
      <span className="relative z-10 bg-[linear-gradient(101deg,#352039_0%,#4c2058_34%,#702581_66%,#952c9f_100%)] bg-clip-text text-transparent">{focus}</span>

    </span>
  );
}

export function HeroSignature() {
  const { line1, line2, line3 } = heroContent.signature;

  return (
    <h1 aria-label="De l'idée au produit. Taillé pour vos besoins." className="relative isolate w-[610px] overflow-visible font-[family-name:var(--font-hero)] text-[#19161c]">
      <span aria-hidden="true" className="pointer-events-none absolute left-[65px] top-[18px] -z-20 h-[205px] w-[430px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,.052)_0%,rgba(216,180,254,.018)_46%,transparent_72%)] blur-[30px]" />

      <span className="relative z-20 flex w-fit items-baseline whitespace-nowrap text-[69px] font-extrabold leading-[.90] tracking-[-.024em]">
        <span className="text-[#19161c]">{line1.before}</span>
        <span className="ml-[6px]"><IdeaWord /></span>
      </span>

      <span className="relative z-20 mt-[12px] flex w-fit items-baseline whitespace-nowrap">
        <span className="mr-[16px] text-[69px] font-extrabold lowercase leading-none tracking-[-.025em] text-[#19161c]">{line2.before.toLowerCase()}</span>
        <span className="text-[88px] font-extrabold leading-[.87] tracking-[-.022em]"><ProductWord /></span>
      </span>

      <span className="relative z-20 mt-[12px] flex w-fit items-baseline whitespace-nowrap">
        <span className="text-[58px] font-extrabold leading-[.94] tracking-[-.031em] text-[#211b25]">{line3.before}</span>
        <span className="ml-[14px] text-[74px] font-extrabold leading-[.90] tracking-[-.026em]"><NeedsWord /></span>
      </span>
    </h1>
  );
}