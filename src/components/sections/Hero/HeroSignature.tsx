import { heroContent } from "@/content/hero";

function IdeaSpark() {
  return (
    <svg aria-hidden="true" className="pointer-events-none absolute left-[34%] top-[37%] z-20 size-[12px] overflow-visible" viewBox="0 0 16 16" fill="none">
      <path d="M8 1.2V14.8M1.8 8H14.2" stroke="#fff8dc" strokeWidth=".7" strokeLinecap="round" />
      <path d="M4.5 4.5L11.5 11.5M11.5 4.5L4.5 11.5" stroke="#e9d5ff" strokeWidth=".45" strokeLinecap="round" opacity=".85" />
      <path d="M8 4.1C8.25 6.25 9.75 7.75 11.9 8C9.75 8.25 8.25 9.75 8 11.9C7.75 9.75 6.25 8.25 4.1 8C6.25 7.75 7.75 6.25 8 4.1Z" fill="#fffdf4" />
      <circle cx="8" cy="8" r="1.2" fill="#f3e8ff" />
    </svg>
  );
}

function IdeaLamp() {
  return (
    <span aria-hidden="true" className="pointer-events-none absolute -right-[42px] bottom-[-2px] z-20 h-[108px] w-[102px]">
      <svg className="size-full overflow-visible" viewBox="0 0 102 108" fill="none">
        <defs>
          <linearGradient id="lampBody" x1="26" y1="11" x2="88" y2="101" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#44364d" />
            <stop offset=".38" stopColor="#2b252f" />
            <stop offset=".72" stopColor="#211d25" />
            <stop offset="1" stopColor="#161419" />
          </linearGradient>

          <linearGradient id="lampArm" x1="31" y1="30" x2="84" y2="91" gradientUnits="userSpaceOnUse">
            <stop stopColor="#6d5a76" />
            <stop offset=".28" stopColor="#453b4c" />
            <stop offset=".7" stopColor="#28222c" />
            <stop offset="1" stopColor="#18151c" />
          </linearGradient>

          <linearGradient id="lampShade" x1="11" y1="27" x2="43" y2="52" gradientUnits="userSpaceOnUse">
            <stop stopColor="#57475e" />
            <stop offset=".48" stopColor="#332b39" />
            <stop offset="1" stopColor="#1c1920" />
          </linearGradient>

          <linearGradient id="lampMetal" x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#d8cbe0" />
            <stop offset=".35" stopColor="#8d7899" />
            <stop offset=".72" stopColor="#55445f" />
            <stop offset="1" stopColor="#2d2632" />
          </linearGradient>

          <linearGradient id="lampAccent" x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#e9d5ff" />
            <stop offset=".48" stopColor="#a855f7" />
            <stop offset="1" stopColor="#6d28d9" />
          </linearGradient>

          <filter id="lampShadow" x="-30%" y="-20%" width="170%" height="150%">
            <feDropShadow dx="0" dy="2" stdDeviation="1.5" floodColor="#171319" floodOpacity=".24" />
          </filter>
        </defs>

        <g filter="url(#lampShadow)">
          {/* socle — posé sur le bas de la ligne */}
          <path d="M67 97C67 93.7 69.7 91 73 91H89C92.3 91 95 93.7 95 97V99H67V97Z" fill="url(#lampBody)" stroke="#6b596f" strokeWidth=".75" />
          <path d="M63 99H97C98.7 99 100 100.3 100 102V103.5H60V102C60 100.3 61.3 99 63 99Z" fill="#1b181e" stroke="#55475b" strokeWidth=".7" />
          <path d="M67 99.4H94" stroke="#b9a6c3" strokeWidth=".55" strokeOpacity=".42" />

          {/* articulation basse */}
          <circle cx="79" cy="87" r="7.2" fill="#27212b" stroke="#77657e" strokeWidth=".85" />
          <circle cx="79" cy="87" r="4.1" fill="url(#lampMetal)" />
          <circle cx="79" cy="87" r="1.65" fill="#221c26" stroke="#d8cbe0" strokeWidth=".55" />
          <path d="M77.1 87H80.9" stroke="#d9cce0" strokeWidth=".7" strokeLinecap="round" />

          {/* bras inférieur : monte vers la gauche */}
          <path d="M75.5 82.5L57 51.5" stroke="#19161d" strokeWidth="7.6" strokeLinecap="round" />
          <path d="M74.3 81.8L56.4 52.4" stroke="url(#lampArm)" strokeWidth="5.2" strokeLinecap="round" />
          <path d="M72.5 79.2L56.2 52.7" stroke="#b8a4c2" strokeWidth=".75" strokeLinecap="round" strokeOpacity=".35" />

          {/* articulation centrale */}
          <circle cx="54" cy="47.5" r="7.5" fill="#252029" stroke="#75617d" strokeWidth=".9" />
          <circle cx="54" cy="47.5" r="4.35" fill="url(#lampMetal)" />
          <circle cx="54" cy="47.5" r="1.8" fill="#211b25" stroke="#e2d6e7" strokeWidth=".55" />
          <circle cx="54" cy="47.5" r=".75" fill="#a855f7" />

          {/* bras supérieur : revient franchement vers idée */}
          <path d="M49 43.5L34.5 25.5" stroke="#18151c" strokeWidth="7.2" strokeLinecap="round" />
          <path d="M48.4 42.8L34.4 26.1" stroke="url(#lampArm)" strokeWidth="4.8" strokeLinecap="round" />
          <path d="M46.7 40.7L34.6 26.4" stroke="#c2afcb" strokeWidth=".7" strokeLinecap="round" strokeOpacity=".34" />

          {/* articulation de tête */}
          <circle cx="31.8" cy="23.3" r="5.5" fill="#26202a" stroke="#75627d" strokeWidth=".8" />
          <circle cx="31.8" cy="23.3" r="2.75" fill="url(#lampMetal)" />
          <circle cx="31.8" cy="23.3" r="1" fill="url(#lampAccent)" />

          {/* petit col qui relie le bras à l'abat-jour */}
          <path d="M28.8 25.7L23 31.1" stroke="#211c24" strokeWidth="5" strokeLinecap="round" />
          <path d="M28.3 25.5L23.2 30.5" stroke="#67556e" strokeWidth="3" strokeLinecap="round" />

          {/* abat-jour orienté vers la gauche / bas-gauche */}
          <path d="M24.8 26.8C20.1 26.6 15.7 28.7 12.5 32.4L7.4 38.4C6.4 39.6 6.8 41.4 8.3 41.9L25 47.4C26.1 47.8 27.3 47.2 27.7 46.1C30 39.5 29.1 33 24.8 26.8Z" fill="url(#lampShade)" stroke="#75617d" strokeWidth=".9" />
          <path d="M10.3 40.1L25.3 45.1" stroke="#b7a5c0" strokeWidth=".7" strokeOpacity=".55" />
          <path d="M13.1 33.4C16.6 29.8 20.4 28.6 24.2 29" stroke="#d8c9df" strokeWidth=".65" strokeLinecap="round" strokeOpacity=".45" />

          {/* intérieur de l'abat-jour : visible, mais PAS encore lumineux */}
          <path d="M8.4 40.6L25.9 46.4" stroke="#c5b4cd" strokeWidth="2.15" strokeLinecap="round" />
          <path d="M9.8 40.1L25 45.1" stroke="#eee6f2" strokeWidth=".7" strokeLinecap="round" strokeOpacity=".62" />

          {/* petit bouton / détail industriel */}
          <circle cx="88.5" cy="95" r="1.35" fill="url(#lampAccent)" />
        </g>
      </svg>
    </span>
  );
}

function IdeaWord() {
  const { focus } = heroContent.signature.line1;

  return (
    <span className="relative inline-block pr-[34px]">
      <IdeaLamp />
      <span className="relative z-10 bg-[linear-gradient(104deg,#19151d_0%,#201725_58%,#321539_100%)] bg-clip-text text-transparent">
        {focus}
        {/* On le réactivera seulement après validation de la lampe */}
        {/* <IdeaSpark /> */}
      </span>
    </span>
  );
}

const PRODUCT_MATERIAL = [
  "radial-gradient(circle at 17% 27%,rgba(255,244,210,.95) 0 1px,rgba(186,139,63,.95) 1.15px 1.65px,transparent 1.8px)",
  "radial-gradient(circle at 42% 68%,rgba(255,244,210,.92) 0 1px,rgba(186,139,63,.90) 1.15px 1.65px,transparent 1.8px)",
  "radial-gradient(circle at 69% 31%,rgba(255,244,210,.92) 0 1px,rgba(186,139,63,.90) 1.15px 1.65px,transparent 1.8px)",
  "radial-gradient(circle at 88% 69%,rgba(255,244,210,.88) 0 .9px,rgba(186,139,63,.86) 1.05px 1.55px,transparent 1.7px)",
  "linear-gradient(90deg,transparent 0 20.5%,rgba(236,205,143,.48) 20.65%,rgba(236,205,143,.48) 20.95%,rgba(50,21,70,.38) 21.1%,transparent 21.25% 46%,rgba(236,205,143,.42) 46.15%,rgba(236,205,143,.42) 46.45%,rgba(50,21,70,.34) 46.6%,transparent 46.75% 72%,rgba(236,205,143,.38) 72.15%,rgba(236,205,143,.38) 72.45%,rgba(50,21,70,.32) 72.6%,transparent 72.75% 100%)",
  "linear-gradient(180deg,transparent 0 49%,rgba(255,234,194,.24) 49.15%,rgba(255,234,194,.24) 49.45%,rgba(48,17,67,.27) 49.6%,transparent 49.9% 100%)",
  "linear-gradient(108deg,#391269 0%,#4d1989 18%,#6022a9 39%,#7830c7 58%,#9b38d7 77%,#c63bd5 100%)",
].join(",");

function ProductWord() {
  const { focus } = heroContent.signature.line2;

  return (
    <span className="relative inline-block isolate">
      <span className="relative z-10 bg-clip-text text-transparent [-webkit-text-stroke:0.35px_rgba(82,44,66,0.48)]" style={{ backgroundImage: PRODUCT_MATERIAL }}>
        {focus}
      </span>

      {/* reflet de matière extrêmement discret : aucun relief externe */}
      <span aria-hidden="true" className="pointer-events-none absolute inset-0 z-20 bg-[linear-gradient(180deg,rgba(255,255,255,.24)_0%,rgba(255,255,255,.07)_19%,transparent_38%,transparent_72%,rgba(42,9,65,.16)_100%)] bg-clip-text text-transparent" style={{ WebkitTextFillColor: "transparent" }}>
        {focus}
      </span>

      {/* un seul micro axe horloger réellement assumé */}
      <span aria-hidden="true" className="pointer-events-none absolute left-[50.5%] top-[42%] z-30 size-[7px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#d7b56c]/55">
        <span className="absolute left-1/2 top-1/2 size-[2px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#f0d49a]/80" />
      </span>
    </span>
  );
}

function CaliperMeasure() {
  return (
    <svg aria-hidden="true" className="pointer-events-none absolute -left-[23px] -top-[20px] z-0 h-[91px] w-[calc(100%+72px)] overflow-visible" viewBox="0 0 370 100" preserveAspectRatio="none" fill="none">
      <defs>
        <linearGradient id="caliperMetal" x1="20" y1="0" x2="350" y2="100" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#f7f2fa" />
          <stop offset=".18" stopColor="#d8cce1" />
          <stop offset=".46" stopColor="#a991ba" />
          <stop offset=".68" stopColor="#73558d" />
          <stop offset=".86" stopColor="#aa91bd" />
          <stop offset="1" stopColor="#eee5f3" />
        </linearGradient>

        <linearGradient id="caliperPurple" x1="34" y1="0" x2="344" y2="0">
          <stop stopColor="#6d28d9" stopOpacity=".20" />
          <stop offset=".45" stopColor="#9333ea" stopOpacity=".55" />
          <stop offset=".8" stopColor="#7e22ce" stopOpacity=".48" />
          <stop offset="1" stopColor="#5b21b6" stopOpacity=".24" />
        </linearGradient>

        <linearGradient id="caliperGold" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#fff2c5" />
          <stop offset=".5" stopColor="#d9b66a" />
          <stop offset="1" stopColor="#9d7131" />
        </linearGradient>

        <filter id="caliperShadow" x="-20%" y="-20%" width="140%" height="150%">
          <feDropShadow dx="0" dy="2" stdDeviation="1.6" floodColor="#3f2450" floodOpacity=".12" />
        </filter>
      </defs>

      {/* axe vertical de cote, comme sur la projection */}
      <path d="M24 19V83" stroke="#7953a0" strokeWidth=".9" strokeOpacity=".52" strokeDasharray="2.5 2.8" />
      <path d="M20 24L24 17L28 24" fill="#7e22ce" fillOpacity=".55" />
      <path d="M20 78L24 85L28 78" fill="#7e22ce" fillOpacity=".55" />

      {/* règle supérieure */}
      <path d="M38 16H319" stroke="url(#caliperPurple)" strokeWidth="1.15" />
      <path d="M46 11V17 M58 13V17 M70 12V17 M82 13V17 M94 11V17 M106 13V17 M118 12V17 M130 13V17 M142 11V17 M154 13V17 M166 12V17 M178 13V17 M190 11V17 M202 13V17 M214 12V17 M226 13V17 M238 11V17 M250 13V17 M262 12V17 M274 13V17 M286 11V17 M298 13V17 M310 12V17" stroke="#6f4b93" strokeWidth=".72" strokeOpacity=".45" />

      {/* repère optique supérieur */}
      <circle cx="248" cy="16" r="5" stroke="#7e22ce" strokeWidth=".8" strokeOpacity=".46" />
      <circle cx="248" cy="16" r="1.5" fill="#9f67cf" fillOpacity=".62" />
      <path d="M248 6V26M238 16H258" stroke="#8b5cad" strokeWidth=".65" strokeOpacity=".40" />

      {/* règle inférieure, volontairement plus présente */}
      <path d="M39 82H322" stroke="url(#caliperPurple)" strokeWidth="1.4" />
      <path d="M46 82V90 M58 82V87 M70 82V90 M82 82V87 M94 82V90 M106 82V87 M118 82V90 M130 82V87 M142 82V90 M154 82V87 M166 82V90 M178 82V87 M190 82V90 M202 82V87 M214 82V90 M226 82V87 M238 82V90 M250 82V87 M262 82V90 M274 82V87 M286 82V90 M298 82V87 M310 82V90" stroke="#735294" strokeWidth=".76" strokeOpacity=".50" />

      {/* petit bloc fixe côté gauche : matérialise l'outil sans enfermer le mot */}
      <g filter="url(#caliperShadow)">
        <path d="M38 13H48V27H43V70H50V83H38Z" fill="url(#caliperMetal)" stroke="#806295" strokeWidth=".75" strokeOpacity=".92" />
        <path d="M42 30H48" stroke="#7c5b94" strokeWidth="1" strokeOpacity=".64" />
        <circle cx="43" cy="22" r="2.1" fill="url(#caliperGold)" stroke="#8d682f" strokeWidth=".45" />
      </g>

      {/* coulisse métallique droite : partie explicitement reconnaissable du pied à coulisse */}
      <g filter="url(#caliperShadow)">
        <rect x="296" y="11" width="31" height="23" rx="3.2" fill="url(#caliperMetal)" stroke="#806295" strokeWidth=".8" />

        <path d="M302 15V30M307 17V30M312 15V30M317 17V30M322 15V30" stroke="#76548f" strokeWidth=".6" strokeOpacity=".60" />

        <circle cx="312" cy="22.5" r="3.1" fill="url(#caliperGold)" stroke="#90682f" strokeWidth=".55" />
        <path d="M309.8 22.5H314.2M312 20.3V24.7" stroke="#6d4b21" strokeWidth=".55" strokeLinecap="round" />

        {/* grande mâchoire */}
        <path d="M325 10H339V29H334V73H346V86H326V61H333V34H325Z" fill="url(#caliperMetal)" stroke="#76568d" strokeWidth=".9" />
        <path d="M333 34H339" stroke="#f7f0fa" strokeWidth=".8" strokeOpacity=".7" />

        {/* pointe de mesure interne */}
        <path d="M325 31L315 42H325Z" fill="#bba9c7" stroke="#77598d" strokeWidth=".65" />
        <path d="M326 72L315 62H326Z" fill="#a48db4" stroke="#77598d" strokeWidth=".65" />
      </g>
    </svg>
  );
}

function NeedsWord() {
  const { focus } = heroContent.signature.line3;

  return (
    <span className="relative inline-block">
      <CaliperMeasure />
      <span className="relative z-10 bg-[linear-gradient(101deg,#352039_0%,#4c2058_34%,#702581_66%,#952c9f_100%)] bg-clip-text text-transparent">{focus}</span>
    </span>
  );
}

export function HeroSignature() {
  const { line1, line2, line3 } = heroContent.signature;

  return (
    <h1 aria-label="De l'idée au produit. Taillé pour vos besoins." className="relative isolate w-[610px] overflow-visible font-[family-name:var(--font-hero)] text-[#19161c]">
      <span aria-hidden="true" className="pointer-events-none absolute left-[65px] top-[18px] -z-20 h-[205px] w-[430px] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,.052)_0%,rgba(216,180,254,.018)_46%,transparent_72%)] blur-[30px]" />

      {/* idée — la première marche reste clairement la plus courte */}
      <span className="relative z-20 flex w-fit items-baseline whitespace-nowrap text-[69px] font-extrabold leading-[.90] tracking-[-.024em]">
        <span className="text-[#19161c]">{line1.before}</span>
        <span className="ml-[6px]"><IdeaWord /></span>
      </span>

      {/* produit — "au" reste présent, mais cesse d'être le sujet */}
      <span className="relative z-20 mt-[11px] flex w-fit items-baseline whitespace-nowrap">
        <span className="mr-[12px] text-[61px] font-extrabold lowercase leading-none tracking-[-.025em] text-[#19161c]">{line2.before.toLowerCase()}</span>
        <span className="text-[78px] font-extrabold leading-[.87] tracking-[-.022em]"><ProductWord /></span>
      </span>

      {/* besoins — plus longue, mais sans le bond disproportionné de la V1 */}
      <span className="relative z-20 mt-[15px] flex w-fit items-baseline whitespace-nowrap">
        <span className="text-[47px] font-extrabold leading-[.94] tracking-[-.031em] text-[#211b25]">{line3.before}</span>
        <span className="ml-[10px] text-[52px] font-extrabold leading-[.90] tracking-[-.026em]"><NeedsWord /></span>
      </span>
    </h1>
  );
}