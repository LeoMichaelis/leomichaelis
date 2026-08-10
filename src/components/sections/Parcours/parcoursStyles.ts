import type { ParcoursAccent } from "@/types/parcours";

type AccentStyle = {
  border: string;
  text: string;
  dot: string;
  glow: string;
  softBackground: string;
  cardGlow: string;
};

export const parcoursAccentStyles = {
  violet: {
    border: "border-[#9333ea]/20",
    text: "text-[#7e22ce]",
    dot: "bg-[#a855f7]",
    glow: "bg-[#a855f7]/35",
    softBackground: "bg-[#9333ea]/[0.07]",
    cardGlow: "rgba(168,85,247,0.18)",
  },
  indigo: {
    border: "border-[#6366f1]/20",
    text: "text-[#4f46e5]",
    dot: "bg-[#6366f1]",
    glow: "bg-[#6366f1]/35",
    softBackground: "bg-[#6366f1]/[0.07]",
    cardGlow: "rgba(99,102,241,0.17)",
  },
  cyan: {
    border: "border-[#06b6d4]/20",
    text: "text-[#0891b2]",
    dot: "bg-[#06b6d4]",
    glow: "bg-[#06b6d4]/30",
    softBackground: "bg-[#06b6d4]/[0.07]",
    cardGlow: "rgba(6,182,212,0.14)",
  },
} satisfies Record<ParcoursAccent, AccentStyle>;