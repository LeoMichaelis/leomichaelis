export function RealisationsBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden [container-type:inline-size] [--u:clamp(.78px,calc(100cqw/1600),1.08px)]" style={{ WebkitMaskImage: `linear-gradient(#000 0 0), url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' preserveAspectRatio='none'%3E%3Cpath fill='white' d='M-20 0a70 76 0 1 1 140 0a70 76 0 1 1-140 0Z'/%3E%3C/svg%3E")`, WebkitMaskSize: "100% calc(100% - var(--section-transition-space) + 1px), 100% var(--section-transition-space)", WebkitMaskPosition: "top, bottom", WebkitMaskRepeat: "no-repeat", maskImage: `linear-gradient(#000 0 0), url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100' preserveAspectRatio='none'%3E%3Cpath fill='white' d='M-20 0a70 76 0 1 1 140 0a70 76 0 1 1-140 0Z'/%3E%3C/svg%3E")`, maskSize: "100% calc(100% - var(--section-transition-space) + 1px), 100% var(--section-transition-space)", maskPosition: "top, bottom", maskRepeat: "no-repeat" }}>
      {/* Base minérale lilas */}
      <div className="absolute inset-0 bg-[linear-gradient(116deg,#e9e3ec_0%,#eee8ef_29%,#ebe4ee_57%,#e5dfeb_82%,#e1daea_100%)]" />

      {/* Transition Prestations → Réalisations */}
      <div className="absolute inset-x-0 top-0 h-[clamp(2.75rem,3vw,4.25rem)] bg-[linear-gradient(180deg,#2a1932_0%,rgba(65,43,73,0.82)_22%,rgba(104,79,111,0.58)_45%,rgba(155,132,160,0.32)_68%,rgba(206,193,209,0.12)_86%,transparent_100%)]" />

      {/* Sources atmosphériques */}
      <div className="absolute left-[calc(-105*var(--u))] top-[calc(-145*var(--u))] h-[calc(385*var(--u))] w-[calc(475*var(--u))] rounded-[50%] bg-[radial-gradient(ellipse_at_44%_48%,rgba(216,180,254,0.42)_0%,rgba(192,132,252,0.20)_32%,rgba(168,85,247,0.075)_52%,rgba(126,34,206,0.018)_66%,transparent_75%)] blur-[calc(30*var(--u))]" />
      <div className="absolute left-[calc(72*var(--u))] top-[calc(12*var(--u))] h-[calc(190*var(--u))] w-[calc(285*var(--u))] rounded-[50%] bg-[radial-gradient(ellipse,rgba(247,235,252,0.24)_0%,rgba(235,214,245,0.075)_48%,transparent_74%)] blur-[calc(22*var(--u))]" />
      <div className="absolute right-[calc(-190*var(--u))] top-[calc(85*var(--u))] h-[calc(485*var(--u))] w-[calc(590*var(--u))] rounded-[50%] bg-[radial-gradient(ellipse,rgba(165,180,252,0.34)_0%,rgba(167,139,250,0.19)_34%,rgba(139,92,246,0.065)_56%,transparent_75%)] blur-[calc(58*var(--u))]" />
      <div className="absolute left-[calc(-220*var(--u))] bottom-[calc(-215*var(--u))] h-[calc(420*var(--u))] w-[calc(590*var(--u))] rounded-[50%] bg-[radial-gradient(ellipse,rgba(232,184,230,0.26)_0%,rgba(216,180,254,0.13)_38%,rgba(192,132,252,0.035)_60%,transparent_76%)] blur-[calc(60*var(--u))]" />
      <div className="absolute right-[13%] bottom-[calc(-255*var(--u))] h-[calc(455*var(--u))] w-[calc(700*var(--u))] rounded-[50%] bg-[radial-gradient(ellipse,rgba(192,132,252,0.22)_0%,rgba(167,139,250,0.095)_40%,rgba(139,92,246,0.025)_62%,transparent_77%)] blur-[calc(68*var(--u))]" />

      {/* Transition Réalisations → Atelier — miroir vertical exact */}
      <div className="absolute inset-x-0 bottom-0 h-[clamp(2.75rem,3vw,4.25rem)] bg-[linear-gradient(0deg,#2a1932_0%,rgba(65,43,73,0.82)_22%,rgba(104,79,111,0.58)_45%,rgba(155,132,160,0.32)_68%,rgba(206,193,209,0.12)_86%,transparent_100%)]" />

      {/* Intersections techniques */}
      <span className="absolute left-[2.6%] top-[27%] font-mono text-[clamp(1.35rem,1.5vw,1.6rem)] font-light leading-none text-[#9333ea]/50">+</span>
      <span className="absolute right-[2.7%] top-[44%] font-mono text-[clamp(1.1rem,1.25vw,1.35rem)] font-light leading-none text-[#9333ea]/40">+</span>
      <span className="absolute left-[3.25%] top-[68%] font-mono text-[clamp(.95rem,1.05vw,1.15rem)] font-light leading-none text-[#9333ea]/38">+</span>

      {/* Grain */}
      <div className="absolute inset-0 opacity-[0.045] [background-image:url('data:image/svg+xml,%3Csvg_viewBox=%220_0_180_180%22_xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter_id=%22n%22%3E%3CfeTurbulence_type=%22fractalNoise%22_baseFrequency=%220.80%22_numOctaves=%223%22_stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect_width=%22100%25%22_height=%22100%25%22_filter=%22url(%23n)%22_opacity=%220.46%22/%3E%3C/svg%3E')]" />
    </div>
  );
}