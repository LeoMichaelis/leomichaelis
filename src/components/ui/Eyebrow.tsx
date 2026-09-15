import { Sparkles } from "lucide-react";

export function Eyebrow({ eyebrow }: { eyebrow: string; }) {
  return (
    <div className="flex min-w-0 items-center gap-2 text-[#7e22ce]">
      <span className="relative flex size-7 shrink-0 items-center justify-center">
        <span aria-hidden="true" className="absolute inset-0 rotate-45 border border-[#7e22ce]/50" />
        <Sparkles size={15} strokeWidth={1.8} />
      </span>
      <p className="ml-1 whitespace-nowrap text-[clamp(.625rem,.7vw,.75rem)] font-bold uppercase tracking-[0.17em] text-[#6b21a8]/85">
        {eyebrow}
      </p>
      <span className="h-px min-w-0 max-w-20 flex-1 bg-gradient-to-r from-[#9333ea]/50 to-transparent" />
    </div>
  );
}