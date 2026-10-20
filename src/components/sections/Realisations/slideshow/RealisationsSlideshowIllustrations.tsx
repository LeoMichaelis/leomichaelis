import Image from "next/image";
import aideOParieursHuman from "@/assets/img/realisations/aideoparieursHuman.webp";
import aideOParieursLogo from "@/assets/img/realisations/aideoparieursLogo.png";
import aideOParieursApp from "@/assets/img/realisations/aideoparieursApp.png";
import aixHygieneService from "@/assets/img/realisations/aixHygieneService.webp";
import betlab from "@/assets/img/realisations/betlab.webp";
import laSourceMobile from "@/assets/img/realisations/laSourceMobile.webp";

export function RealisationsSlideshowIllustration({ projectId }: { projectId: String }) {
  switch (projectId) {
    case "aide-o-parieurs":
      return <AideOParieursIllustration />;
    case "aix-hygiene-service":
      return <AixHygieneServiceIllustration />
    case "betlab":
      return <BetlabIllustration />
    case "la-source-mobile":
      return <LaSourceMobileIllustration />
    default:
      return null;
  }
}

function AideOParieursIllustration() {
  return (
    <div aria-hidden="true" className="pointer-events-none relative h-full w-full">
      {/* Humain */}
      <div className="absolute bottom-[8%] left-[0%] z-10 w-[44%]">
        <Image src={aideOParieursHuman} alt="" priority className="h-auto w-full" />
      </div>
      <svg className="absolute inset-0 h-full w-full overflow-visible" viewBox="0 0 340 200" fill="none">
        <defs>
          {/* Atmosphère générale */}
          <radialGradient id="aop-v2-glow" cx="0" cy="0" r="1" gradientTransform="translate(177 103) rotate(90) scale(88 151)" gradientUnits="userSpaceOnUse">
            <stop stopColor="#d15abf" stopOpacity=".13" />
            <stop offset=".43" stopColor="#a258b4" stopOpacity=".055" />
            <stop offset="1" stopColor="#70427d" stopOpacity="0" />
          </radialGradient>

          {/* UI flottante */}
          <linearGradient id="aop-v2-glass" x1="140" y1="44" x2="224" y2="73" gradientUnits="userSpaceOnUse">
            <stop stopColor="#624a67" stopOpacity=".76" />
            <stop offset=".5" stopColor="#32263a" stopOpacity=".91" />
            <stop offset="1" stopColor="#1d1721" stopOpacity=".96" />
          </linearGradient>

          <linearGradient id="aop-v2-glass-edge" x1="140" y1="44" x2="220" y2="74" gradientUnits="userSpaceOnUse">
            <stop stopColor="#eed4eb" stopOpacity=".42" />
            <stop offset=".35" stopColor="#d487c8" stopOpacity=".18" />
            <stop offset="1" stopColor="#85558f" stopOpacity=".05" />
          </linearGradient>

          <linearGradient id="aop-v2-magenta" x1="153" y1="48" x2="205" y2="67" gradientUnits="userSpaceOnUse">
            <stop stopColor="#ff99dc" />
            <stop offset=".5" stopColor="#df58be" />
            <stop offset="1" stopColor="#ac429e" />
          </linearGradient>

          <filter id="aop-v2-shadow" x="-50%" y="-60%" width="200%" height="240%">
            <feDropShadow dx="0" dy="7" stdDeviation="5" floodColor="#080609" floodOpacity=".42" />
          </filter>

          <filter id="aop-v2-soft" x="-50%" y="-60%" width="200%" height="220%">
            <feGaussianBlur stdDeviation="8" />
          </filter>

          <filter id="aop-v2-floor" x="-30%" y="-300%" width="160%" height="700%">
            <feGaussianBlur stdDeviation="5" />
          </filter>
        </defs>

        {/* Halo général */}
        <ellipse cx="177" cy="102" rx="151" ry="86" fill="url(#aop-v2-glow)" filter="url(#aop-v2-soft)" />
        <ellipse cx="171" cy="184" rx="137" ry="6" fill="#080609" opacity=".20" filter="url(#aop-v2-floor)" />

        {/* Flux analytiques */}
        <g opacity=".5">
          <path d="M130 80C154 71 188 72 232 84" stroke="#c976bc" strokeWidth="1" strokeDasharray="2 5" strokeLinecap="round" />
          <path d="M139 108C169 111 197 111 232 102" stroke="#96629f" strokeWidth="1" strokeDasharray="2 5" strokeLinecap="round" />
          <path d="M158 143C181 137 207 126 232 116" stroke="#87548f" strokeWidth="1" strokeDasharray="2 5" strokeLinecap="round" />
          <circle cx="150" cy="75" r="2" fill="#de8bce" />
          <circle cx="194" cy="76" r="2" fill="#b566b0" />
          <circle cx="212" cy="124" r="1.6" fill="#b963ad" />
        </g>

        {/* Capsule VALUE */}
        <g filter="url(#aop-v2-shadow)">
          <rect x="144" y="28" width="67" height="27" rx="7" fill="url(#aop-v2-glass-edge)" />
          <rect x="145" y="29" width="65" height="25" rx="6.2" fill="url(#aop-v2-glass)" />
          <text x="152" y="35" fill="#e8dce9" opacity=".48" fontSize="5" fontWeight="700" letterSpacing=".75" fontFamily="var(--font-main)">VALUE</text>
          <text x="152" y="49" fill="url(#aop-v2-magenta)" fontSize="11.5" fontWeight="800" fontFamily="var(--font-main)">+4.8%</text>
        </g>

        {/* Cotes */}
        <g filter="url(#aop-v2-shadow)">
          <rect x="133" y="84" width="28" height="17" rx="5" fill="#211923" stroke="#9d6ba1" strokeWidth=".8" />
          <text x="147" y="95" textAnchor="middle" fill="#f1d9ee" fontSize="7.2" fontWeight="700" fontFamily="var(--font-main)">1.44</text>

          <rect x="169" y="88" width="28" height="17" rx="5" fill="#211923" stroke="#83578d" strokeWidth=".8" />
          <text x="183" y="99" textAnchor="middle" fill="#dca8d6" fontSize="7.2" fontWeight="700" fontFamily="var(--font-main)">5.30</text>

          <rect x="205" y="83" width="28" height="17" rx="5" fill="#211923" stroke="#a35a9a" strokeWidth=".8" />
          <text x="219" y="94.3" textAnchor="middle" fill="#f09edc" fontSize="7.2" fontWeight="700" fontFamily="var(--font-main)">6.95</text>
        </g>

        {/* Capsule communautaire */}
        <g filter="url(#aop-v2-shadow)">
          <rect x="154" y="140" width="70" height="27" rx="7" fill="url(#aop-v2-glass-edge)" opacity=".82" />
          <rect x="155" y="141" width="72" height="25" rx="6.2" fill="url(#aop-v2-glass)" />

          {/* Profil 1 */}
          <g>
            <circle cx="167" cy="153.5" r="8.5" fill="#302438" stroke="#b978b3" strokeWidth=".8" />
            <circle cx="167" cy="153.5" r="6.9" fill="#443249" />
            <path d="M161.5 159.1C162.3 156.8 164.3 155.6 166.4 155.5C168.8 155.4 171 156.8 172 159.1Z" fill="#8f5d91" />
            <path d="M164.5 153.1C164.7 154.8 164.5 155.6 163.8 156.2C165.1 157 166.7 157.1 168 156.4C167.3 155.7 167.2 154.7 167.5 153.2Z" fill="#b8838d" />
            <path d="M163.2 153.8C162.2 153 161.8 151.6 162 150.3C162.2 148.7 163.3 147.5 164.8 147.1C166.2 146.7 167.7 147.1 168.5 148.1C169 148.7 169.1 149.4 169.3 150C169.5 150.4 170.2 150.5 170.7 150.8C170.5 151.2 170.2 151.4 169.8 151.6C169.9 151.9 170 152.2 169.8 152.5C169.6 152.7 169.4 152.8 169.2 152.9C169.3 153.2 169.2 153.5 169 153.7C168.5 154.2 167.8 154.4 167 154.5C166.4 154.6 166.1 155 166.1 155.5C165.1 155.4 164 154.8 163.2 153.8Z" fill="#c99598" />
            <path d="M166.2 147.1C167.4 147.4 168.2 148 168.6 148.8C169 149.5 169 150 169.3 150.2C169.6 150.5 170.2 150.6 170.7 150.8C170.5 151.2 170.2 151.4 169.8 151.6C169.9 151.9 170 152.2 169.8 152.5C169.6 152.7 169.4 152.8 169.2 152.9C169.3 153.2 169.2 153.5 169 153.7C168.6 154.1 168 154.3 167.3 154.4C166.8 154 166.5 153.4 166.4 152.7C166.7 151.7 166.8 150.7 166.7 149.7C166.6 148.8 166.3 147.8 166.2 147.1Z" fill="#e1afb0" opacity=".34" />
            <path d="M161.9 151.2C161.6 149.8 162 148.3 163 147.4C164 146.4 165.5 146 166.9 146.2C168.1 146.3 169.1 146.8 169.7 147.6C169 147.4 168.4 147.5 167.8 147.8C167.2 148.2 166.6 148.5 165.8 148.4C165 148.3 164.4 148.1 163.8 148.5C162.9 149 162.7 150 162.6 150.9C162.4 151.2 162.2 151.3 161.9 151.2Z" fill="#19151c" />
            <path d="M163.3 147.7C164.3 146.7 165.6 146.4 166.9 146.5C168 146.5 169 146.9 169.6 147.5C168.8 147.3 168.1 147.5 167.4 147.8C166.6 148.1 165.9 148.1 165.2 147.9C164.6 147.8 164 147.7 163.3 147.7Z" fill="#2d2631" />
            <path d="M169.25 152.25C168.85 152.2 168.55 152.25 168.25 152.4" stroke="#754855" strokeWidth=".4" strokeLinecap="round" />
            <path d="M162.1 148.9C162.7 147.3 164.1 146.3 165.8 146" stroke="#e6c7df" strokeWidth=".45" strokeLinecap="round" opacity=".18" />
          </g>

          {/* Profil 2 */}
          <g>
            <circle cx="181" cy="153.5" r="8.5" fill="#292033" stroke="#93639c" strokeWidth=".8" />
            <circle cx="181" cy="153.5" r="6.9" fill="#392b42" />
            <path d="M176.5 151C176.4 148 178.2 145.9 181.1 145.7C184.3 145.5 186.2 147.7 186.2 150.7C186.2 153.1 185.6 155.8 184.8 158.8H177.4C176.8 156.6 176.5 153.8 176.5 151Z" fill="#211922" />
            <path d="M175.4 159.2C176.4 156.8 178.4 155.6 180.7 155.5C183.2 155.4 185.5 156.8 186.5 159.2Z" fill="#865989" />
            <path d="M179.2 153C179.4 154.6 179.2 155.5 178.6 156.2C179.9 156.9 181.4 157 182.7 156.3C182 155.6 181.9 154.7 182.2 153.1Z" fill="#c28f98" />
            <path d="M178 153.7C177.1 152.8 176.8 151.4 177 150C177.3 148.5 178.2 147.4 179.6 147C181 146.6 182.5 147 183.4 148C183.9 148.6 184 149.3 184.2 149.9C184.4 150.3 185.1 150.5 185.6 150.8C185.4 151.2 185.1 151.5 184.7 151.6C184.8 151.9 184.9 152.2 184.7 152.5C184.5 152.7 184.3 152.8 184.1 152.9C184.2 153.2 184.1 153.5 183.9 153.7C183.4 154.2 182.7 154.4 181.9 154.5C181.3 154.6 181 155 181 155.5C179.9 155.4 178.8 154.7 178 153.7Z" fill="#d2a0a5" />
            <path d="M181.1 147C182.3 147.3 183.1 147.9 183.5 148.7C183.9 149.4 183.9 149.9 184.2 150.2C184.5 150.5 185.1 150.6 185.6 150.8C185.4 151.2 185.1 151.5 184.7 151.6C184.8 151.9 184.9 152.2 184.7 152.5C184.5 152.7 184.3 152.8 184.1 152.9C184.2 153.2 184.1 153.5 183.9 153.7C183.5 154.1 182.9 154.3 182.2 154.4C181.7 154 181.4 153.4 181.3 152.7C181.6 151.7 181.7 150.7 181.6 149.7C181.5 148.8 181.2 147.7 181.1 147Z" fill="#efbec1" opacity=".34" />
            <path d="M176.9 150C177 147.2 178.8 145.6 181.2 145.6C183.2 145.6 184.8 146.7 185.5 148.4C184.5 147.6 183.4 147.4 182.5 147.7C181.4 148 180.6 148.1 179.7 147.8C178.9 147.6 178.2 148.3 178 149.1C177.8 149.7 177.6 150.1 176.9 150Z" fill="#18131a" />
            <path d="M177.3 149.1C178 146.8 179.8 145.8 181.7 146C180.8 146.5 180.2 147.2 179.8 148.2C179.4 149.2 178.7 149.8 177.9 150.1Z" fill="#33263a" />
          </g>

          {/* Conversation */}
          <path d="M197.4 150.6C197.4 147.8 199.7 145.5 202.5 145.5H214.2C217 145.5 219.3 147.8 219.3 150.6V156.2C219.3 159 217 161.3 214.2 161.3H208.8L204.2 164.4V161.3H202.5C199.7 161.3 197.4 159 197.4 156.2V150.6Z" fill="#5a3560" opacity=".62" />
          <path d="M196 149.8C196 147.2 198.1 145.1 200.7 145.1H213.6C216.2 145.1 218.3 147.2 218.3 149.8V155.6C218.3 158.2 216.2 160.3 213.6 160.3H207.9L203.6 163.5V160.3H200.7C198.1 160.3 196 158.2 196 155.6V149.8Z" fill="url(#aop-v2-glass)" stroke="#b96caf" strokeWidth=".8" />
          <path d="M199 148.1C199.8 147.2 200.9 146.8 202.2 146.8H212.9C214.2 146.8 215.2 147.2 216 148.1" stroke="#f0d9ed" strokeWidth=".55" strokeLinecap="round" opacity=".24" />
          <circle cx="202.2" cy="153" r="1.3" fill="#e9addb" />
          <circle cx="207.2" cy="153" r="1.3" fill="#cf79c1" />
          <circle cx="212.2" cy="153" r="1.3" fill="#a65aa1" />
        </g>
      </svg>

      {/* Logo */}
      <div className="absolute right-[22%] -top-[4%] z-20 aspect-square w-[12.5%] rounded-full bg-[linear-gradient(145deg,#ded8df_0%,#817a84_20%,#28262a_52%,#8a657f_78%,#c477ad_100%)] p-[1.2%] shadow-[0_7px_14px_rgba(7,4,9,0.42),inset_0_1px_0_rgba(255,255,255,0.38)]">
        <div className="relative h-full w-full overflow-hidden rounded-full bg-white shadow-[inset_0_0_0_1px_rgba(25,13,31,0.50)]">
          <Image src={aideOParieursLogo} alt="" fill unoptimized sizes="50px" className="object-cover" />
          <span className="absolute left-[18%] right-[18%] top-[8%] h-[8%] rounded-full bg-white/55 blur-[1px]" />
        </div>
      </div>

      {/* iPhone — la capture définit toute la géométrie */}
      <div className="absolute right-[0%] top-[1%] z-10 w-[27%] origin-center rotate-[3deg]">
        {/* Ombre */}
        <div className="absolute -inset-[8px] translate-x-[3px] translate-y-[6px] rounded-[18px] bg-black/30 blur-[8px]" />
        {/* Tranche métallique arrière */}
        <div className="absolute -inset-[6px] translate-x-[3px] translate-y-[4px] rounded-[17px] bg-[linear-gradient(145deg,#8d8d91_0%,#48484c_15%,#1b1b1e_48%,#343438_78%,#77777c_100%)] shadow-[0_12px_22px_rgba(5,4,6,0.46)]" />
        {/* Châssis */}
        <div className="absolute -inset-[5px] rounded-[16px] border border-white/30 bg-[linear-gradient(145deg,#d0d0d2_0%,#79797e_9%,#303034_21%,#101012_55%,#39393d_83%,#96969a_100%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.45)]" />
        {/* Bezel noir autour de LA capture */}
        <div className="absolute -inset-[2px] rounded-[13px] bg-[#050506]" />
        {/* Capture native */}
        <Image src={aideOParieursApp} alt="" priority sizes="110px" className="relative z-10 block h-auto w-full rounded-[11px]" />
        {/* Dynamic Island */}
        <span className="absolute left-1/2 top-[3px] z-20 h-[5px] w-[27%] -translate-x-1/2 rounded-full bg-[#050505]" />
        {/* Boutons latéraux */}
        <span className="absolute -left-[7px] top-[20%] h-[8%] w-[2px] rounded-l-full bg-[#59595d]" />
        <span className="absolute -left-[7px] top-[32%] h-[14%] w-[2px] rounded-l-full bg-[#444448]" />
        <span className="absolute -left-[7px] top-[49%] h-[14%] w-[2px] rounded-l-full bg-[#444448]" />
        <span className="absolute -right-[7px] top-[31%] h-[18%] w-[2px] rounded-r-full bg-[#49494d]" />
      </div>
      
    </div>
  );
}

function AixHygieneServiceIllustration() {
  return (
    <div aria-hidden="true" className="pointer-events-none relative h-full w-full">
      <Image src={aixHygieneService} alt="Aix Hygiène Service" className="h-full w-full object-contain" />
    </div>
  );
}

function BetlabIllustration() {
  return (
    <div aria-hidden="true" className="pointer-events-none relative h-full w-full">
      <Image src={betlab} alt="Betlab" className="h-full w-full object-contain" />
    </div>
  );
}

function LaSourceMobileIllustration() {
  return (
    <div aria-hidden="true" className="pointer-events-none relative h-full w-full">
      <Image src={laSourceMobile} alt="La source mobile" className="h-full w-full object-contain" />
    </div>
  );
}