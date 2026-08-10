import { FileCode2, Network } from "lucide-react";

export function ProjetsBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Fond principal */}
      <div className="absolute inset-0 bg-[linear-gradient(118deg,#ebe8e3_0%,#f5f2ed_34%,#eee9f1_67%,#e3dee8_100%)]" />

      {/* Grain */}
      <div className="absolute inset-0 opacity-[0.04] [background-image:url('data:image/svg+xml,%3Csvg_viewBox=%220_0_180_180%22_xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter_id=%22n%22%3E%3CfeTurbulence_type=%22fractalNoise%22_baseFrequency=%220.9%22_numOctaves=%224%22_stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect_width=%22100%25%22_height=%22100%25%22_filter=%22url(%23n)%22_opacity=%220.45%22/%3E%3C/svg%3E')]" />

      {/* Grilles */}
      <div className="absolute right-0 top-0 h-[52%] w-[62%] opacity-[0.2] [background-image:linear-gradient(rgba(35,28,40,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(35,28,40,0.08)_1px,transparent_1px)] [background-size:42px_42px] [mask-image:linear-gradient(to_left,black,transparent)]" />
      <div className="absolute bottom-0 left-0 h-[45%] w-[52%] opacity-[0.12] [background-image:linear-gradient(rgba(126,34,206,0.11)_1px,transparent_1px),linear-gradient(90deg,rgba(126,34,206,0.11)_1px,transparent_1px)] [background-size:52px_52px] [mask-image:linear-gradient(to_right,black,transparent)]" />

      {/* Bande sombre */}
      <div className="absolute left-1/2 top-[47%] h-[360px] w-[115vw] -translate-x-1/2 rotate-[-2.5deg] bg-[linear-gradient(90deg,transparent_0%,rgba(29,24,33,0.035)_12%,rgba(29,24,33,0.085)_50%,rgba(29,24,33,0.035)_88%,transparent_100%)] blur-[1px]" />
      <div className="absolute left-1/2 top-[54%] h-px w-[105vw] -translate-x-1/2 rotate-[-2.5deg] bg-gradient-to-r from-transparent via-[#211824]/15 to-transparent" />

      {/* Halos */}
      <div className="absolute -left-48 top-[4%] size-[610px] rounded-full bg-[radial-gradient(circle,rgba(216,180,254,0.42)_0%,rgba(168,85,247,0.11)_44%,transparent_72%)] blur-[68px]" />
      <div className="absolute -right-36 top-[20%] size-[540px] rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.2)_0%,rgba(139,92,246,0.08)_45%,transparent_72%)] blur-[72px]" />
      <div className="absolute left-1/2 top-[52%] h-[420px] w-[940px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(168,85,247,0.13)_0%,rgba(99,102,241,0.05)_45%,transparent_72%)] blur-[58px]" />

      {/* Arcs gauche */}
      <div className="absolute -left-[250px] top-[-170px] size-[690px] rounded-full border border-[#9333ea]/[0.11]" />
      <div className="absolute -left-[115px] top-[-70px] size-[460px] rounded-full border border-black/[0.055]" />
      <div className="absolute left-[5%] top-[9%] size-[270px] rounded-full border border-white/55" />

      {/* Arcs droite */}
      <div className="absolute -right-[330px] bottom-[-410px] size-[880px] rounded-full border border-[#6366f1]/[0.09]" />
      <div className="absolute -right-[165px] bottom-[-285px] size-[610px] rounded-full border border-white/60" />
      <div className="absolute bottom-[4%] right-[4%] size-[370px] rounded-full border border-black/[0.05]" />

      {/* Diagonales */}
      <div className="absolute left-[38%] top-[-160px] h-[520px] w-px rotate-[53deg] bg-gradient-to-b from-transparent via-[#9333ea]/20 to-transparent" />
      <div className="absolute bottom-[-220px] left-[16%] h-[620px] w-px rotate-[38deg] bg-gradient-to-b from-transparent via-[#6366f1]/15 to-transparent" />
      <div className="absolute right-[21%] top-[10%] h-[380px] w-px rotate-[-47deg] bg-gradient-to-b from-transparent via-black/10 to-transparent" />

      {/* Lignes */}
      <div className="absolute left-[45%] top-[12%] h-px w-[440px] bg-gradient-to-r from-transparent via-black/11 to-transparent" />
      <div className="absolute bottom-[10%] left-[11%] h-px w-[460px] bg-gradient-to-r from-transparent via-[#9333ea]/15 to-transparent" />

      {/* Croix technique */}
      <div className="absolute right-[12%] top-[14%] size-8 opacity-22">
        <span className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-[#7e22ce]" />
        <span className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-[#7e22ce]" />
      </div>

      {/* Repère technique */}
      <div className="absolute left-[7%] top-[39%] flex items-center gap-3 opacity-25">
        <span className="size-2 rotate-45 border border-[#7e22ce]" />
        <span className="h-px w-100 bg-[#7e22ce]/50" />
      </div>

      {/* Particules */}
      <div className="absolute left-[7%] top-[13%] size-2 rotate-45 border border-[#7e22ce]/40" />
      <div className="absolute left-[48%] top-[23%] size-2 rotate-45 bg-[#9333ea]/20" />
      <div className="absolute right-[8%] top-[20%] size-2 rounded-full bg-[#6366f1]/30 shadow-[0_0_15px_rgba(99,102,241,0.3)]" />
      <div className="absolute bottom-[15%] left-[42%] size-1.5 rounded-full bg-[#a855f7]/45 shadow-[0_0_12px_rgba(168,85,247,0.45)]" />

      <div className="absolute right-[3%] top-[46%] flex flex-col gap-2 opacity-25">
        <span className="size-1 rounded-full bg-black/60" />
        <span className="size-1 rounded-full bg-black/60" />
        <span className="size-1 rounded-full bg-black/60" />
        <span className="size-1 rounded-full bg-black/60" />
      </div>

      {/* Éléments techniques décoratifs */}
      <FileCode2 size={150} strokeWidth={0.7} className="absolute bottom-[4%] left-[4%] text-[#7e22ce]/[0.035]" />
      <Network size={170} strokeWidth={0.7} className="absolute bottom-[2%] right-[8%] text-black/[0.025]" />
    </div>
  );
}