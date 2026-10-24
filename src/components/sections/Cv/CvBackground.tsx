
export function CvBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden [container-type:inline-size]">
      <div className="relative size-full [--u:clamp(.78px,calc(100cqw/1600),1.08px)]">
        {/* Base */}
        <div className="absolute inset-0 bg-[linear-gradient(116deg,#e9e3ec_0%,#eee8ef_29%,#ebe4ee_57%,#e5dfeb_82%,#e1daea_100%)]" />

        {/* Voile lumineux central */}
        <div className="absolute left-[47%] top-[calc(-180*var(--u))] h-[calc(340*var(--u))] w-[calc(680*var(--u))] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.78)_0%,rgba(216,180,254,0.18)_46%,transparent_74%)] blur-[calc(60*var(--u))]" />

        {/* Glow gauche violet */}
        <div className="absolute left-[calc(-112*var(--u))] top-[calc(-144*var(--u))] size-[calc(430*var(--u))] rounded-full bg-[radial-gradient(ellipse_at_44%_48%,rgba(216,180,254,0.42)_0%,rgba(192,132,252,0.20)_32%,rgba(168,85,247,0.075)_52%,rgba(126,34,206,0.018)_66%,transparent_75%)] blur-[calc(55*var(--u))]" />

        {/* Glow inférieur droit */}
        <div className="absolute right-[calc(-112*var(--u))] bottom-[calc(-230*var(--u))] size-[calc(520*var(--u))] rounded-full bg-[radial-gradient(ellipse_at_44%_48%,rgba(216,180,254,0.42)_0%,rgba(192,132,252,0.20)_32%,rgba(168,85,247,0.075)_52%,rgba(126,34,206,0.018)_66%,transparent_75%)] blur-[calc(68*var(--u))]" />

        {/* Particules */}
        <div className="absolute left-[4%] top-[clamp(8rem,10vw,12rem)] size-2 rotate-45 border border-[#7e22ce]/40" />
        <div className="absolute right-[4%] top-[clamp(8rem,10vw,12rem)] size-2 rotate-45 bg-[#7e22ce]/24" />
        <div className="absolute left-[4%] top-[clamp(20rem,25vw,25rem)] flex flex-col gap-2 opacity-50">
          <span className="size-1 rounded-full border border-[#7e22ce]/70" />
          <span className="size-1 rounded-full border border-[#7e22ce]/45" />
          <span className="size-1 rounded-full border border-[#7e22ce]/25" />
        </div>
        <div className="absolute right-[4%] top-[clamp(20rem,25vw,25rem)] flex flex-col gap-2 opacity-25">
          <span className="size-1 rounded-full bg-[#7e22ce]/70" />
          <span className="size-1 rounded-full bg-[#7e22ce]/45" />
          <span className="size-1 rounded-full bg-[#7e22ce]/25" />
        </div>

        {/* Grain très léger */}
        <div className="absolute inset-0 opacity-[0.025] [background-image:url('data:image/svg+xml,%3Csvg_viewBox=%220_0_180_180%22_xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter_id=%22n%22%3E%3CfeTurbulence_type=%22fractalNoise%22_baseFrequency=%220.82%22_numOctaves=%223%22_stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect_width=%22100%25%22_height=%22100%25%22_filter=%22url(%23n)%22_opacity=%220.5%22/%3E%3C/svg%3E')]" />
      
        {/* Séparation supérieure */}
        <div className="absolute inset-x-0 top-0 z-10 h-[calc(30*var(--u))] bg-[linear-gradient(180deg,rgba(54,29,67,0.16)_0%,rgba(112,66,138,0.065)_42%,transparent_100%)]" />
        <div className="absolute inset-x-0 top-0 z-20 h-px bg-[linear-gradient(90deg,rgba(116,71,139,0.35)_0%,rgba(195,145,219,0.80)_50%,rgba(116,71,139,0.35)_100%)]" />

      </div>
    </div>
  );
}
