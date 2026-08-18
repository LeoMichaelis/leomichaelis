"use client";

import { ReactNode, useState } from "react";

type IdeaLampInteractionProps = {
  children: ReactNode;
};

function IdeaLampBeam({ facingUser }: { facingUser: boolean }) {
  return (
    <span aria-hidden="true" className="pointer-events-none absolute -right-[30px] bottom-[-2px] z-0 h-[120px] w-[112px] will-change-transform" style={{ opacity: facingUser ? 0 : 1, transform: facingUser ? "translate3d(7px,-4px,0) rotate(13deg)" : "translate3d(0,0,0) rotate(0deg)", transformOrigin: "44.6px 22.8px", transition: facingUser ? "transform 300ms cubic-bezier(.22,.82,.3,1),opacity 180ms ease 125ms" : "transform 460ms cubic-bezier(.22,.9,.3,1),opacity 250ms ease 100ms" }}>
      <svg className="size-full overflow-visible" viewBox="0 0 112 120" fill="none">
        <defs>
          <linearGradient id="ideaBeamOuter" x1="22" y1="46" x2="-166" y2="91" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#fff8db" stopOpacity=".42" />
            <stop offset=".16" stopColor="#fdf0c9" stopOpacity=".27" />
            <stop offset=".44" stopColor="#f8e6bc" stopOpacity=".14" />
            <stop offset=".74" stopColor="#faedcf" stopOpacity=".055" />
            <stop offset="1" stopColor="#fff7e7" stopOpacity="0" />
          </linearGradient>

          <linearGradient id="ideaBeamMiddle" x1="21" y1="46" x2="-126" y2="85" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#fffdf0" stopOpacity=".62" />
            <stop offset=".15" stopColor="#fff6d7" stopOpacity=".44" />
            <stop offset=".42" stopColor="#fbe9bd" stopOpacity=".23" />
            <stop offset=".72" stopColor="#f9ebcb" stopOpacity=".075" />
            <stop offset="1" stopColor="#fff8e7" stopOpacity="0" />
          </linearGradient>

          <linearGradient id="ideaBeamCore" x1="20" y1="46" x2="-78" y2="73" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#fffef4" stopOpacity=".82" />
            <stop offset=".18" stopColor="#fff7d9" stopOpacity=".58" />
            <stop offset=".48" stopColor="#f9e7b9" stopOpacity=".27" />
            <stop offset=".78" stopColor="#f8e9c8" stopOpacity=".075" />
            <stop offset="1" stopColor="#fff7e2" stopOpacity="0" />
          </linearGradient>

          <radialGradient id="ideaBeamMouth" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(17.5 45.7) rotate(18) scale(16.5 5.4)">
            <stop offset="0" stopColor="#fffef4" stopOpacity=".94" />
            <stop offset=".43" stopColor="#fff4c7" stopOpacity=".66" />
            <stop offset=".76" stopColor="#efd99e" stopOpacity=".26" />
            <stop offset="1" stopColor="#e6c77d" stopOpacity="0" />
          </radialGradient>

          <filter id="ideaBeamOuterBlur" x="-25%" y="-35%" width="155%" height="185%"><feGaussianBlur stdDeviation="10" /></filter>
          <filter id="ideaBeamMiddleBlur" x="-20%" y="-30%" width="150%" height="175%"><feGaussianBlur stdDeviation="5" /></filter>
          <filter id="ideaBeamCoreBlur" x="-20%" y="-30%" width="150%" height="170%"><feGaussianBlur stdDeviation="2.3" /></filter>
          <filter id="ideaBeamMouthBlur" x="-80%" y="-160%" width="260%" height="420%"><feGaussianBlur stdDeviation="2" /></filter>
        </defs>

        <path d="M3.3 40.9C-35 47.5-116 63-178 78C-145 101-96 117-34 124C-7 91 17 64 31.7 50.4Z" fill="url(#ideaBeamOuter)" filter="url(#ideaBeamOuterBlur)" />
        <path d="M3.8 41.1C-25 48.5-83 64-133 80C-106 98-70 108-31 111C-9 83 12 61 31.2 50.2Z" fill="url(#ideaBeamMiddle)" filter="url(#ideaBeamMiddleBlur)" />
        <path d="M4.9 41.5C-14 48.2-50 60-80 72C-60 82-37 88-15 90C1 73 16 58 30.2 49.9Z" fill="url(#ideaBeamCore)" filter="url(#ideaBeamCoreBlur)" />
        <ellipse cx="17.5" cy="45.7" rx="15.2" ry="4.25" transform="rotate(18 17.5 45.7)" fill="url(#ideaBeamMouth)" filter="url(#ideaBeamMouthBlur)" />
      </svg>
    </span>
  );
}

function IdeaLampSideHead({ visible }: { visible: boolean }) {
  return (
    <g style={{ opacity: visible ? 1 : 0, transformBox: "view-box", transformOrigin: "44.6px 22.8px", transform: visible ? "translate(0,0) rotate(0deg) scale(1)" : "translate(7px,-3px) rotate(13deg) scale(.94)", transition: visible ? "opacity 200ms ease 90ms,transform 440ms cubic-bezier(.22,.9,.3,1)" : "opacity 150ms ease 125ms,transform 300ms cubic-bezier(.22,.82,.3,1)" }}>
      {/* col diagonal */}
      <path d="M41 26L36.4 30" stroke="#19181c" strokeWidth="5.4" strokeLinecap="round" />
      <path d="M40.7 25.8L36.3 29.7" stroke="#625e64" strokeWidth="3.05" strokeLinecap="round" />
      <path d="M39.4 26.7L36.7 29.1" stroke="#ddd8d4" strokeWidth=".55" strokeLinecap="round" strokeOpacity=".34" />

      {/* pivot */}
      <circle cx="35.1" cy="31.2" r="3.6" fill="#242228" stroke="#69646b" strokeWidth=".7" />
      <circle cx="35.1" cy="31.2" r="2.15" fill="url(#ideaLampMetal)" />
      <circle cx="35.1" cy="31.2" r=".72" fill="url(#ideaLampBrass)" />

      {/* coque latérale */}
      <path d="M36.3 31.6C32.5 27.6 27 26.2 21.2 27.7C14.2 29.5 7.9 34.5 3.1 40.8C1.9 42.4 2.6 44.8 4.5 45.5L28.9 54.2C31 54.9 33.2 53.8 34 51.8C36.8 45 39.8 36.5 36.3 31.6Z" fill="url(#ideaLampShadeShell)" stroke="#666169" strokeWidth=".95" />
      <path d="M34.8 32C31.4 28.8 26.7 28 21.8 29.2C16.7 30.5 12.1 33.5 8.1 37.5" stroke="#e0dbd7" strokeWidth=".72" strokeLinecap="round" strokeOpacity=".34" />
      <path d="M31.9 29.3C34.2 34.2 34.5 40.1 32.7 45.8" stroke="#151419" strokeWidth=".62" strokeOpacity=".30" />

      {/* réflecteur latéral */}
      <ellipse cx="17.4" cy="46.1" rx="16.6" ry="5.15" transform="rotate(18 17.4 46.1)" fill="#17161a" stroke="#625e64" strokeWidth=".65" />
      <ellipse cx="17.5" cy="45.7" rx="14.8" ry="4.05" transform="rotate(18 17.5 45.7)" fill="url(#ideaLampReflector)" />
      <ellipse cx="17.5" cy="45.7" rx="12.8" ry="3.45" transform="rotate(18 17.5 45.7)" fill="url(#ideaLampEmission)" opacity=".82" />
      <ellipse cx="17.5" cy="45.7" rx="10.5" ry="2.7" transform="rotate(18 17.5 45.7)" fill="#fff8d8" opacity=".34" filter="url(#ideaLampGlow)" />
      <ellipse cx="19.8" cy="46.4" rx="11.8" ry="3.25" transform="rotate(18 19.8 46.4)" fill="url(#ideaLampEmission)" opacity=".72" />
      <ellipse cx="21.5" cy="46.7" rx="8.5" ry="2.55" transform="rotate(18 21.5 46.7)" fill="#fff7d8" opacity=".23" filter="url(#ideaLampEmissionBlur)" />

      {/* profondeur réflecteur */}
      <path d="M4.4 41.7C10 43 21.3 46.2 31.1 50.4" stroke="#fffaf0" strokeWidth=".6" strokeLinecap="round" strokeOpacity=".42" />
      <path d="M5.8 43.7C12.2 45 21.6 47.8 29.5 51" stroke="#71665a" strokeWidth=".7" strokeLinecap="round" strokeOpacity=".38" />
      <ellipse cx="27.2" cy="49.2" rx="1.65" ry="1.15" transform="rotate(18 27.2 49.2)" fill="#393536" />
      <ellipse cx="27.2" cy="49.2" rx=".72" ry=".52" transform="rotate(18 27.2 49.2)" fill="#d6b777" />
    </g>
  );
}

function IdeaLampFrontHead({ visible }: { visible: boolean }) {
  return (
    <g style={{ opacity: visible ? 1 : 0, transformBox: "view-box", transformOrigin: "44.6px 22.8px", transform: visible ? "translate(0,0) scale(1)" : "translate(-7px,3px) scale(.82)", transition: visible ? "opacity 190ms ease 145ms,transform 330ms cubic-bezier(.2,.86,.28,1) 90ms" : "opacity 120ms ease,transform 260ms cubic-bezier(.3,.6,.4,1)" }}>
      {/* NOUVEAU COL : parfaitement vertical */}
      <path d="M44.6 27V32.4" stroke="#19181c" strokeWidth="5.4" strokeLinecap="round" />
      <path d="M44.6 27V32.4" stroke="#625e64" strokeWidth="3.05" strokeLinecap="round" />
      <path d="M43.65 27.6V31.7" stroke="#ddd8d4" strokeWidth=".55" strokeLinecap="round" strokeOpacity=".34" />

      {/* pivot parfaitement centré */}
      <circle cx="44.6" cy="33.1" r="3.6" fill="#242228" stroke="#69646b" strokeWidth=".7" />
      <circle cx="44.6" cy="33.1" r="2.15" fill="url(#ideaLampMetal)" />
      <circle cx="44.6" cy="33.1" r=".72" fill="url(#ideaLampBrass)" />

      {/* lumière frontale, derrière la coque */}
      <ellipse cx="44.6" cy="45.2" rx="29" ry="22" fill="url(#ideaLampFrontHalo)" filter="url(#ideaLampFrontHaloBlur)" />

      {/* vraie coque frontale : on doit clairement voir l'abat-jour autour du réflecteur */}
      <path d="M44.6 29.5C36 29.5 30 34.2 27.8 40.2L26.1 45.8C25.4 48.5 27 51.2 29.7 52.5C37.5 56.3 51.7 56.3 59.5 52.5C62.2 51.2 63.8 48.5 63.1 45.8L61.4 40.2C59.2 34.2 53.2 29.5 44.6 29.5Z" fill="url(#ideaLampFrontShell)" stroke="#666169" strokeWidth=".95" />

      {/* relief de coque */}
      <path d="M31.6 38C34.8 32.8 39.6 31.1 44.6 31.1C49.6 31.1 54.4 32.8 57.6 38" stroke="#e0dbd7" strokeWidth=".7" strokeLinecap="round" strokeOpacity=".34" />

      {/* lèvre sombre visible */}
      <ellipse cx="44.6" cy="45.7" rx="15.8" ry="10.7" fill="#17161a" stroke="#625e64" strokeWidth=".75" />

      {/* réflecteur */}
      <ellipse cx="44.6" cy="45.6" rx="13.5" ry="8.6" fill="url(#ideaLampFrontReflector)" />

      {/* reflet métallique haut */}
      <path d="M34.5 42C37.3 38.5 40.9 37.2 44.7 37.2C49 37.2 52.6 38.7 55 41.7" stroke="#fffaf0" strokeWidth=".55" strokeLinecap="round" strokeOpacity=".42" />

      {/* source volontairement plus petite : évite l'effet "gros œil" */}
      <ellipse cx="44.6" cy="45.6" rx="7.7" ry="4.7" fill="url(#ideaLampFrontEmission)" />
      <ellipse cx="44.6" cy="45.1" rx="4.8" ry="2.7" fill="#fff9dc" opacity=".32" filter="url(#ideaLampGlow)" />

      {/* centre technique */}
      <ellipse cx="44.6" cy="45.6" rx="1.15" ry=".85" fill="#e4c888" opacity=".64" />
    </g>
  );
}

function IdeaLampFrontBeam({ visible }: { visible: boolean }) {
  return (
    <g style={{ opacity: visible ? 1 : 0, transition: visible ? "opacity 280ms ease 320ms" : "opacity 90ms ease" }}>
      {/* diffusion large : part exactement sous l'ouverture et s'élargit vers le bas */}
      <path d="M32 47C28 64 19 92 8 128C30 139 59 139 81 128C70 92 61 64 57 47Z" fill="url(#ideaFrontBeamOuter)" filter="url(#ideaFrontBeamOuterBlur)" />

      {/* cœur lumineux plus concentré */}
      <path d="M35 47C33 62 28 82 23 108C36 115 53 115 66 108C61 82 56 62 54 47Z" fill="url(#ideaFrontBeamCore)" filter="url(#ideaFrontBeamCoreBlur)" />

      {/* raccord avec la bouche de l'abat-jour */}
      <ellipse cx="44.6" cy="47.2" rx="11.5" ry="4.8" fill="url(#ideaFrontBeamMouth)" filter="url(#ideaFrontBeamMouthBlur)" />
    </g>
  );
}

function IdeaLamp({ facingUser }: { facingUser: boolean }) {
  return (
    <span aria-hidden="true" className="pointer-events-none absolute -right-[26px] bottom-[-2px] z-20 h-[120px] w-[112px]">
      <svg className="size-full overflow-visible" viewBox="0 0 112 120" fill="none">
        <defs>
          <linearGradient id="ideaLampBody" x1="30" y1="8" x2="98" y2="113" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#514952" />
            <stop offset=".24" stopColor="#39343c" />
            <stop offset=".58" stopColor="#27242b" />
            <stop offset=".82" stopColor="#1d1b20" />
            <stop offset="1" stopColor="#131216" />
          </linearGradient>

          <linearGradient id="ideaLampArm" x1="38" y1="20" x2="94" y2="102" gradientUnits="userSpaceOnUse">
            <stop stopColor="#716a73" />
            <stop offset=".18" stopColor="#504b53" />
            <stop offset=".52" stopColor="#343139" />
            <stop offset=".82" stopColor="#211f25" />
            <stop offset="1" stopColor="#17161a" />
          </linearGradient>

          <linearGradient id="ideaLampShadeShell" x1="38" y1="25" x2="4" y2="53" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#575159" />
            <stop offset=".24" stopColor="#464148" />
            <stop offset=".58" stopColor="#302d33" />
            <stop offset=".82" stopColor="#242227" />
            <stop offset="1" stopColor="#19181c" />
          </linearGradient>

          <linearGradient id="ideaLampFrontShell" x1="44.6" y1="29" x2="44.6" y2="57" gradientUnits="userSpaceOnUse">
            <stop stopColor="#625b64" />
            <stop offset=".28" stopColor="#474249" />
            <stop offset=".63" stopColor="#302d33" />
            <stop offset=".86" stopColor="#242227" />
            <stop offset="1" stopColor="#18171b" />
          </linearGradient>

          <linearGradient id="ideaLampMetal" x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#ece9e7" />
            <stop offset=".22" stopColor="#aaa5a6" />
            <stop offset=".50" stopColor="#6e696e" />
            <stop offset=".76" stopColor="#403c42" />
            <stop offset="1" stopColor="#242228" />
          </linearGradient>

          <linearGradient id="ideaLampBrass" x1="0" y1="0" x2="1" y2="1">
            <stop stopColor="#fff1c9" />
            <stop offset=".32" stopColor="#d8b77a" />
            <stop offset=".67" stopColor="#9f7745" />
            <stop offset="1" stopColor="#62472c" />
          </linearGradient>

          <radialGradient id="ideaLampReflector" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(17.5 44.8) rotate(18) scale(17 6)">
            <stop offset="0" stopColor="#f0e8d7" />
            <stop offset=".48" stopColor="#d5c9b4" />
            <stop offset=".78" stopColor="#a69b8e" />
            <stop offset="1" stopColor="#716a66" />
          </radialGradient>

          <radialGradient id="ideaLampEmission" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(17.5 45.7) rotate(18) scale(15 4.2)">
            <stop offset="0" stopColor="#fffef4" />
            <stop offset=".32" stopColor="#fff7d6" stopOpacity=".92" />
            <stop offset=".67" stopColor="#efdba8" stopOpacity=".54" />
            <stop offset="1" stopColor="#bd9f65" stopOpacity=".08" />
          </radialGradient>

          <radialGradient id="ideaLampFrontReflector" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(44.6 45.6) scale(13.5 8.6)">
            <stop offset="0" stopColor="#f4eddf" />
            <stop offset=".42" stopColor="#d4c8b7" />
            <stop offset=".76" stopColor="#9d9388" />
            <stop offset="1" stopColor="#665f5c" />
          </radialGradient>

          <radialGradient id="ideaLampFrontEmission" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(44.6 45.6) scale(7.7 4.7)">
            <stop offset="0" stopColor="#fffef4" />
            <stop offset=".28" stopColor="#fff7d4" stopOpacity=".96" />
            <stop offset=".62" stopColor="#f1dda9" stopOpacity=".64" />
            <stop offset="1" stopColor="#d1ae69" stopOpacity=".10" />
          </radialGradient>

          <radialGradient id="ideaLampFrontHalo" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(44.6 45.2) scale(29 22)">
            <stop offset="0" stopColor="#fffdf2" stopOpacity=".68" />
            <stop offset=".28" stopColor="#fff4cf" stopOpacity=".38" />
            <stop offset=".60" stopColor="#f5e2b7" stopOpacity=".15" />
            <stop offset="1" stopColor="#f3dfbb" stopOpacity="0" />
          </radialGradient>

          <radialGradient id="ideaLampFrontDiffuse" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(44.6 45.6) scale(34 27)">
            <stop offset="0" stopColor="#fffef0" stopOpacity=".56" />
            <stop offset=".24" stopColor="#fff5d0" stopOpacity=".34" />
            <stop offset=".50" stopColor="#f7e4b9" stopOpacity=".17" />
            <stop offset=".72" stopColor="#eadcff" stopOpacity=".065" />
            <stop offset="1" stopColor="#eadcff" stopOpacity="0" />
          </radialGradient>

          <radialGradient id="ideaLampFrontCore" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(44.6 45.6) scale(18 14)">
            <stop offset="0" stopColor="#fffef5" stopOpacity=".70" />
            <stop offset=".35" stopColor="#fff4ce" stopOpacity=".30" />
            <stop offset=".70" stopColor="#f4dfb1" stopOpacity=".08" />
            <stop offset="1" stopColor="#f4dfb1" stopOpacity="0" />
          </radialGradient>

          <filter id="ideaLampGlow" x="-70%" y="-180%" width="240%" height="460%"><feGaussianBlur stdDeviation="1.35" /></filter>
          <filter id="ideaLampEmissionBlur" x="-80%" y="-160%" width="260%" height="420%"><feGaussianBlur stdDeviation="1.8" /></filter>
          <filter id="ideaLampFrontHaloBlur" x="-80%" y="-90%" width="260%" height="280%"><feGaussianBlur stdDeviation="5" /></filter>
          <filter id="ideaLampShadow" x="-30%" y="-20%" width="170%" height="150%"><feDropShadow dx="0" dy="2" stdDeviation="1.5" floodColor="#141217" floodOpacity=".26" /></filter>
          <filter id="ideaLampFrontDiffuseBlur" x="-80%" y="-90%" width="260%" height="280%"><feGaussianBlur stdDeviation="6" /></filter>
          <filter id="ideaLampFrontCoreBlur" x="-80%" y="-90%" width="260%" height="280%"><feGaussianBlur stdDeviation="3" /></filter>

          <linearGradient id="ideaFrontBeamOuter" x1="44.6" y1="48" x2="44.6" y2="132" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#fffbed" stopOpacity=".62" />
            <stop offset=".18" stopColor="#fff3cc" stopOpacity=".43" />
            <stop offset=".46" stopColor="#f8e6bc" stopOpacity=".23" />
            <stop offset=".76" stopColor="#eeddf8" stopOpacity=".085" />
            <stop offset="1" stopColor="#eadcff" stopOpacity="0" />
          </linearGradient>

          <linearGradient id="ideaFrontBeamCore" x1="44.6" y1="48" x2="44.6" y2="110" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#fffef3" stopOpacity=".86" />
            <stop offset=".20" stopColor="#fff5d2" stopOpacity=".61" />
            <stop offset=".52" stopColor="#f5e2b8" stopOpacity=".29" />
            <stop offset=".82" stopColor="#f1dfcb" stopOpacity=".08" />
            <stop offset="1" stopColor="#fff7e8" stopOpacity="0" />
          </linearGradient>

          <radialGradient id="ideaFrontBeamMouth" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(44.6 47.2) scale(12 6)">
            <stop offset="0" stopColor="#fffef5" stopOpacity=".94" />
            <stop offset=".42" stopColor="#fff4ca" stopOpacity=".66" />
            <stop offset=".76" stopColor="#ead8a9" stopOpacity=".25" />
            <stop offset="1" stopColor="#ead8a9" stopOpacity="0" />
          </radialGradient>

          <filter id="ideaFrontBeamOuterBlur" x="-70%" y="-20%" width="240%" height="180%"><feGaussianBlur stdDeviation="8" /></filter>
          <filter id="ideaFrontBeamCoreBlur" x="-60%" y="-20%" width="220%" height="180%"><feGaussianBlur stdDeviation="3.5" /></filter>
          <filter id="ideaFrontBeamMouthBlur" x="-80%" y="-100%" width="260%" height="300%"><feGaussianBlur stdDeviation="2.2" /></filter>
        </defs>

        <IdeaLampFrontBeam visible={facingUser} />

        <g filter="url(#ideaLampShadow)">
          {/* socle */}
          <path d="M73 107C73 103.6 75.8 101 79.2 101H96.8C100.2 101 103 103.6 103 107V109H73V107Z" fill="url(#ideaLampBody)" stroke="#615c63" strokeWidth=".8" />
          <path d="M68 109H106C107.7 109 109 110.3 109 112V113.5H65V112C65 110.3 66.3 109 68 109Z" fill="#19181c" stroke="#504c52" strokeWidth=".75" />
          <path d="M72 109.5H101" stroke="#d2cdca" strokeWidth=".55" strokeOpacity=".30" />

          {/* articulation basse */}
          <circle cx="87" cy="96" r="7.5" fill="#252329" stroke="#69636b" strokeWidth=".9" />
          <circle cx="87" cy="96" r="4.3" fill="url(#ideaLampMetal)" />
          <circle cx="87" cy="96" r="1.8" fill="#211f24" stroke="#dbd6d3" strokeWidth=".5" />
          <path d="M84.9 96H89.1" stroke="#e3dedb" strokeWidth=".65" strokeLinecap="round" />

          {/* bras inférieur */}
          <path d="M83.2 90.6L68 57" stroke="#151419" strokeWidth="8" strokeLinecap="round" />
          <path d="M82.1 89.9L67.4 57.8" stroke="url(#ideaLampArm)" strokeWidth="5.4" strokeLinecap="round" />
          <path d="M80.3 86.7L67.4 58.4" stroke="#d3cecb" strokeWidth=".7" strokeLinecap="round" strokeOpacity=".26" />

          {/* articulation centrale */}
          <circle cx="65.3" cy="52.8" r="7.8" fill="#242228" stroke="#686269" strokeWidth=".9" />
          <circle cx="65.3" cy="52.8" r="4.55" fill="url(#ideaLampMetal)" />
          <circle cx="65.3" cy="52.8" r="1.9" fill="#211f24" stroke="#e0dbd8" strokeWidth=".5" />
          <circle cx="65.3" cy="52.8" r=".85" fill="url(#ideaLampBrass)" />

          {/* bras supérieur */}
          <path d="M60.2 48.1L47 26.8" stroke="#151419" strokeWidth="7.5" strokeLinecap="round" />
          <path d="M59.5 47.5L47 27.5" stroke="url(#ideaLampArm)" strokeWidth="5" strokeLinecap="round" />
          <path d="M57.8 44.8L47.1 28.1" stroke="#ddd8d4" strokeWidth=".65" strokeLinecap="round" strokeOpacity=".25" />

          {/* articulation haute, commune aux deux états */}
          <circle cx="44.6" cy="22.8" r="5.8" fill="#242228" stroke="#686269" strokeWidth=".85" />
          <circle cx="44.6" cy="22.8" r="3" fill="url(#ideaLampMetal)" />
          <circle cx="44.6" cy="22.8" r="1.05" fill="url(#ideaLampBrass)" />

          {/* état repos */}
          <IdeaLampSideHead visible={!facingUser} />

          {/* état face utilisateur */}
          <IdeaLampFrontHead visible={facingUser} />

          {/* détail socle */}
          <circle cx="97.2" cy="105" r="1.45" fill="url(#ideaLampBrass)" />
          <circle cx="97.2" cy="105" r=".5" fill="#fff3d1" opacity=".75" />
        </g>
      </svg>
    </span>
  );
}

export function IdeaLampInteraction({ children }: IdeaLampInteractionProps) {
  const [facingUser, setFacingUser] = useState(false);

  return (
    <span className="relative isolate inline-block pr-[34px]">
      <IdeaLampBeam facingUser={facingUser} />
      <IdeaLamp facingUser={facingUser} />
      <span className="relative z-30 inline-block pointer-events-auto" onMouseEnter={() => setFacingUser(true)} onMouseLeave={() => setFacingUser(false)}>{children}</span>
    </span>
  );
}