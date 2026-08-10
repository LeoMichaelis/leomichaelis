import type { ReactNode } from "react";

const technologyTagStyles = {
  light: "border-black/[0.07] bg-black/[0.035] px-3 py-2 text-[9px] font-bold uppercase tracking-[0.08em] text-black/48",
  dark: "border-white/[0.075] bg-white/[0.055] px-3 py-1.5 text-[9px] font-bold leading-none tracking-[0.06em] text-white/50 backdrop-blur-md",
  accent: "border-[#c084fc]/15 bg-[#9333ea]/10 px-3 py-1.5 text-[9px] font-bold leading-none text-[#d8b4fe]/65",
} as const;

export function TechnologyTag({ children, variant = "light" }: { children: ReactNode; variant?: keyof typeof technologyTagStyles }) {
  return <span className={`rounded-full border ${technologyTagStyles[variant]}`}>{children}</span>;
}