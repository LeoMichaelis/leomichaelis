export function ParcoursBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(118deg,#ebe8e3_0%,#f5f2ed_34%,#eee9f1_67%,#e3dee8_100%)]" />
      <div className="absolute inset-0 opacity-[0.038] [background-image:url('data:image/svg+xml,%3Csvg_viewBox=%220_0_180_180%22_xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter_id=%22n%22%3E%3CfeTurbulence_type=%22fractalNoise%22_baseFrequency=%220.9%22_numOctaves=%224%22_stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect_width=%22100%25%22_height=%22100%25%22_filter=%22url(%23n)%22_opacity=%220.45%22/%3E%3C/svg%3E')]" />

      {/* Grilles */}
      <div className="absolute right-0 top-0 h-[58%] w-[56%] opacity-[0.17] [background-image:linear-gradient(rgba(35,28,40,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(35,28,40,0.08)_1px,transparent_1px)] [background-size:46px_46px] [mask-image:linear-gradient(to_left,black,transparent)]" />
      <div className="absolute bottom-0 left-0 h-[46%] w-[52%] opacity-[0.12] [background-image:linear-gradient(rgba(126,34,206,0.09)_1px,transparent_1px),linear-gradient(90deg,rgba(126,34,206,0.09)_1px,transparent_1px)] [background-size:54px_54px] [mask-image:linear-gradient(to_right,black,transparent)]" />

      {/* Bande */}
      <div className="absolute left-1/2 top-[46%] h-[380px] w-[120vw] -translate-x-1/2 rotate-[-2deg] bg-[linear-gradient(90deg,transparent_0%,rgba(29,24,33,0.025)_10%,rgba(29,24,33,0.075)_50%,rgba(29,24,33,0.025)_90%,transparent_100%)]" />

      {/* Glows */}
      <div className="absolute -left-48 top-[4%] size-[620px] rounded-full bg-[radial-gradient(circle,rgba(216,180,254,0.42)_0%,rgba(168,85,247,0.11)_44%,transparent_72%)] blur-[68px]" />
      <div className="absolute -right-40 top-[30%] size-[560px] rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.18)_0%,rgba(139,92,246,0.06)_46%,transparent_72%)] blur-[74px]" />
      <div className="absolute bottom-[3%] left-[38%] size-[500px] rounded-full bg-[radial-gradient(circle,rgba(6,182,212,0.11)_0%,transparent_70%)] blur-[72px]" />

      {/* Arcs */}
      <div className="absolute -left-[260px] top-[-180px] size-[720px] rounded-full border border-[#9333ea]/[0.11]" />
      <div className="absolute -left-[120px] top-[-70px] size-[470px] rounded-full border border-black/[0.055]" />
      <div className="absolute -right-[360px] bottom-[-410px] size-[900px] rounded-full border border-[#6366f1]/[0.09]" />
      <div className="absolute -right-[170px] bottom-[-280px] size-[620px] rounded-full border border-white/60" />

      {/* Diagonales */}
      <div className="absolute left-[38%] top-[-170px] h-[540px] w-px rotate-[53deg] bg-gradient-to-b from-transparent via-[#9333ea]/18 to-transparent" />
      <div className="absolute bottom-[-250px] left-[14%] h-[660px] w-px rotate-[38deg] bg-gradient-to-b from-transparent via-[#6366f1]/14 to-transparent" />
      <div className="absolute right-[19%] top-[13%] h-[410px] w-px rotate-[-48deg] bg-gradient-to-b from-transparent via-black/9 to-transparent" />

      <div className="absolute left-[46%] top-[11%] h-px w-[440px] bg-gradient-to-r from-transparent via-black/10 to-transparent" />

      {/* Repères */}
      <div className="absolute left-[7%] top-[23%] flex items-center gap-3 opacity-24">
        <span className="size-2 rotate-45 border border-[#7e22ce]" />
        <span className="h-px w-24 bg-[#7e22ce]/45" />
        <span className="text-[8px] font-black tracking-[0.18em] text-[#7e22ce]">2012 — 2026</span>
      </div>

      <div className="absolute right-[8%] top-[16%] size-8 opacity-20">
        <span className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-[#7e22ce]" />
        <span className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-[#7e22ce]" />
      </div>

      {/* Particules */}
      <div className="absolute left-[7%] top-[12%] size-2 rotate-45 border border-[#7e22ce]/40" />
      <div className="absolute left-[48%] top-[20%] size-2 rotate-45 bg-[#9333ea]/20" />
      <div className="absolute right-[7%] top-[24%] size-2 rounded-full bg-[#6366f1]/30 shadow-[0_0_15px_rgba(99,102,241,0.3)]" />
      <div className="absolute bottom-[12%] left-[40%] size-1.5 rounded-full bg-[#a855f7]/45 shadow-[0_0_12px_rgba(168,85,247,0.45)]" />

      <div className="absolute right-[3%] top-[48%] flex flex-col gap-2 opacity-22">
        <span className="size-1 rounded-full bg-black/60" />
        <span className="size-1 rounded-full bg-black/60" />
        <span className="size-1 rounded-full bg-black/60" />
        <span className="size-1 rounded-full bg-black/60" />
      </div>
    </div>
  );
}