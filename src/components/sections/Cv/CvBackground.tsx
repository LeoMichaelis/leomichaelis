export function CvBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Fond principal */}
      <div className="absolute inset-0 bg-[linear-gradient(112deg,#e7e4eb_0%,#f2eef5_34%,#ece5f1_68%,#e1dcea_100%)]" />

      {/* Voile lumineux central */}
      <div className="absolute left-[47%] top-[-180px] h-[340px] w-[680px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.78)_0%,rgba(216,180,254,0.18)_46%,transparent_74%)] blur-[60px]" />

      {/* Glow gauche violet */}
      <div className="absolute -left-28 -top-36 size-[430px] rounded-full bg-[radial-gradient(circle,rgba(216,180,254,0.55)_0%,rgba(168,85,247,0.18)_42%,transparent_72%)] blur-[55px]" />

      {/* Glow inférieur droit */}
      <div className="absolute -right-28 bottom-[-230px] size-[520px] rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.28)_0%,rgba(99,102,241,0.1)_44%,transparent_72%)] blur-[68px]" />

      {/* Halo cyan discret */}
      <div className="absolute right-[18%] top-[-110px] h-[250px] w-[380px] rounded-full bg-[radial-gradient(circle,rgba(6,182,212,0.12)_0%,transparent_70%)] blur-[52px]" />

      {/* Grille architecturale */}
      <div className="absolute inset-y-0 left-0 w-[58%] opacity-[0.24] [background-image:linear-gradient(rgba(35,28,40,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(35,28,40,0.08)_1px,transparent_1px)] [background-size:36px_36px] [mask-image:linear-gradient(to_right,black,transparent)]" />

      {/* Grandes courbes */}
      <div className="absolute -left-40 top-[-250px] size-[590px] rounded-full border border-[#9333ea]/[0.11]" />
      <div className="absolute -left-12 top-[-170px] size-[420px] rounded-full border border-black/[0.055]" />
      <div className="absolute -right-44 bottom-[-390px] size-[690px] rounded-full border border-[#6366f1]/[0.09]" />
      <div className="absolute -right-24 bottom-[-315px] size-[530px] rounded-full border border-white/55" />

      {/* Traits */}
      <div className="absolute left-[34%] top-[-110px] h-[390px] w-px rotate-[58deg] bg-gradient-to-b from-transparent via-[#9333ea]/22 to-transparent" />
      <div className="absolute left-[41%] top-[22%] h-px w-[420px] bg-gradient-to-r from-transparent via-black/10 to-transparent" />
      <div className="absolute left-[16%] bottom-[-140px] h-[360px] w-px rotate-[38deg] bg-gradient-to-b from-transparent via-[#6366f1]/14 to-transparent" />

      {/* Croisillon technique */}
      <div className="absolute left-[45%] bottom-[18%] size-6 opacity-25">
        <span className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-[#7e22ce]" />
        <span className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-[#7e22ce]" />
      </div>

      {/* Particules */}
      <div className="absolute left-[7%] top-[18%] size-2 rotate-45 border border-[#7e22ce]/40" />
      <div className="absolute right-[7%] top-[24%] size-2 rotate-45 bg-[#6366f1]/24" />

      <div className="absolute right-[3%] top-[54%] flex flex-col gap-2 opacity-25">
        <span className="size-1 rounded-full bg-black/60" />
        <span className="size-1 rounded-full bg-black/60" />
        <span className="size-1 rounded-full bg-black/60" />
      </div>

      {/* Grain léger */}
      <div className="absolute inset-0 opacity-[0.04] [background-image:url('data:image/svg+xml,%3Csvg_viewBox=%220_0_180_180%22_xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter_id=%22n%22%3E%3CfeTurbulence_type=%22fractalNoise%22_baseFrequency=%220.9%22_numOctaves=%224%22_stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect_width=%22100%25%22_height=%22100%25%22_filter=%22url(%23n)%22_opacity=%220.45%22/%3E%3C/svg%3E')]" />
    </div>
  );
}