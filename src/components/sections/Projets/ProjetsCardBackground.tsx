import type { ProjectTheme } from "@/types/projets";
import { ProjetsCardPattern } from "./ProjetsCardPatterns";

export function ProjetsCardBackground({ theme }: { theme: ProjectTheme }) {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(145deg,#241e29_0%,#17131b_58%,#211625_100%)]" />
      <div className="absolute inset-0 opacity-[0.045] [background-image:url('data:image/svg+xml,%3Csvg_viewBox=%220_0_180_180%22_xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter_id=%22n%22%3E%3CfeTurbulence_type=%22fractalNoise%22_baseFrequency=%220.9%22_numOctaves=%224%22_stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect_width=%22100%25%22_height=%22100%25%22_filter=%22url(%23n)%22_opacity=%220.45%22/%3E%3C/svg%3E')]" />

      <div className="absolute -right-20 -top-24 size-[280px] rounded-full bg-[#9333ea]/18 blur-[62px]" />
      <div className="absolute -bottom-24 -left-20 size-[260px] rounded-full bg-[#6366f1]/10 blur-[68px]" />

      <ProjetsCardPattern theme={theme} />

      <div className="absolute inset-0 bg-[linear-gradient(115deg,rgba(255,255,255,0.04),transparent_26%,transparent_72%,rgba(192,132,252,0.04))]" />
    </div>
  );
}