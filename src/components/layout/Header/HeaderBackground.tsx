export function HeaderBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Base sombre neutre */}
      <div className="absolute inset-0 bg-[linear-gradient(105deg,#151218_0%,#100f14_38%,#141019_70%,#110e16_100%)]" />

      {/* Profondeur centrale */}
      <div className="absolute inset-x-[18%] top-[-95px] h-[190px] rounded-[50%] bg-[radial-gradient(ellipse,rgba(255,255,255,0.045)_0%,rgba(168,85,247,0.025)_42%,transparent_72%)] blur-[30px]" />

{/* Halo central — support diffus de la navigation */}
<div className="absolute left-1/2 top-1/2 h-[150px] w-[570px] -translate-x-1/2 -translate-y-1/2 rounded-[50%] bg-[radial-gradient(ellipse,rgba(147,51,234,0.17)_0%,rgba(126,34,206,0.10)_28%,rgba(76,29,149,0.045)_52%,transparent_78%)] blur-[24px]" />

{/* Cœur lumineux du rail */}
<div className="absolute left-1/2 top-1/2 h-[64px] w-[480px] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(ellipse,rgba(192,132,252,0.14)_0%,rgba(168,85,247,0.095)_38%,rgba(99,102,241,0.035)_62%,transparent_82%)] blur-[14px]" />


      {/* Lumière gauche — identité */}
      <div className="absolute -left-28 -top-32 h-[300px] w-[470px] rounded-full bg-[radial-gradient(circle,rgba(192,132,252,0.30)_0%,rgba(147,51,234,0.13)_36%,rgba(88,28,135,0.04)_58%,transparent_74%)] blur-[42px]" />
      <div className="absolute left-[7%] top-[-80px] h-[170px] w-[240px] rounded-full bg-[radial-gradient(circle,rgba(232,121,249,0.13)_0%,transparent_70%)] blur-[30px]" />

      {/* Source lumineuse droite — univers */}
      <div className="absolute -right-24 -top-40 h-[360px] w-[570px] rounded-full bg-[radial-gradient(circle,rgba(192,38,211,0.32)_0%,rgba(147,51,234,0.23)_28%,rgba(99,102,241,0.11)_50%,transparent_73%)] blur-[48px]" />
      <div className="absolute right-[1%] top-[-105px] h-[245px] w-[390px] rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.19)_0%,rgba(79,70,229,0.08)_45%,transparent_72%)] blur-[34px]" />

      {/* Faisceau reliant la zone centrale à l'univers */}
      <div className="absolute right-[8%] top-[-115px] h-[290px] w-[260px] rotate-[58deg] bg-[linear-gradient(90deg,transparent_0%,rgba(168,85,247,0.035)_35%,rgba(216,180,254,0.11)_50%,rgba(99,102,241,0.035)_65%,transparent_100%)] blur-[8px]" />

      {/* Grille architecturale très localisée */}
      <div className="absolute inset-y-0 right-0 w-[35%] opacity-[0.13] [background-image:linear-gradient(rgba(216,180,254,0.22)_1px,transparent_1px),linear-gradient(90deg,rgba(216,180,254,0.22)_1px,transparent_1px)] [background-size:28px_28px] [mask-image:linear-gradient(to_left,black,transparent)]" />

      {/* Grand arc gauche */}
      <div className="absolute -left-[165px] -top-[245px] size-[440px] rounded-full border border-[#c084fc]/[0.13]" />
      <div className="absolute -left-[62px] -top-[176px] size-[300px] rounded-full border border-white/[0.055]" />

      {/* Arcs droite */}
      <div className="absolute -right-[120px] -top-[230px] size-[390px] rounded-full border border-[#c084fc]/[0.15]" />
      <div className="absolute -right-[30px] -top-[142px] size-[245px] rounded-full border border-[#6366f1]/[0.13]" />

      {/* Grandes lignes techniques */}
      <div className="absolute left-[24%] top-[-115px] h-[260px] w-px rotate-[55deg] bg-gradient-to-b from-transparent via-[#c084fc]/22 to-transparent" />
      <div className="absolute right-[26%] top-[-105px] h-[250px] w-px rotate-[-55deg] bg-gradient-to-b from-transparent via-[#6366f1]/20 to-transparent" />

      {/* Repère gauche */}
      <div className="absolute left-[5.4%] top-[18px] flex items-center gap-2 opacity-35">
        <span className="size-1.5 rotate-45 border border-[#e9d5ff]/70" />
        <span className="h-px w-16 bg-gradient-to-r from-[#c084fc]/65 to-transparent" />
      </div>

      {/* Repères droite */}
      <div className="absolute right-[11%] top-[14px] size-2 rotate-45 border border-[#e879f9]/45 shadow-[0_0_12px_rgba(232,121,249,0.25)]" />
      <div className="absolute right-[7%] bottom-[13px] size-1.5 rotate-45 bg-[#818cf8]/55 shadow-[0_0_10px_rgba(129,140,248,0.42)]" />

      {/* Vignette pour maintenir le centre lisible */}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,7,10,0.05)_0%,rgba(8,7,10,0.20)_40%,rgba(8,7,10,0.08)_64%,transparent_100%)]" />

      {/* Séparation basse */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-white/[0.07]" />
      <div className="absolute bottom-0 left-[4%] h-px w-[280px] bg-gradient-to-r from-transparent via-[#c084fc]/55 to-transparent" />
      <div className="absolute bottom-0 right-[4%] h-px w-[390px] bg-gradient-to-r from-transparent via-[#e879f9]/55 via-45% to-[#6366f1]/35" />
    </div>
  );
}