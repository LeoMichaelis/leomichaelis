import { Sparkles } from "lucide-react";

export function SectionHeader({ eyebrow, title, highlight, description, keywords }: { eyebrow: string; title: string; highlight: string; description: string; keywords: readonly string[] }) {
  return (
    <header className="grid gap-8 lg:grid-cols-[1fr_0.5fr] lg:items-end">
      <div>
        <div className="mb-5 flex items-center gap-2 text-[#7e22ce]">
          <Sparkles size={16} strokeWidth={1.7} />
          <p className="text-[11px] font-black uppercase tracking-[0.2em]">{eyebrow}</p>
        </div>

        <h2 className="max-w-4xl text-[clamp(3.7rem,7vw,7.3rem)] font-black leading-[0.85] tracking-[-0.07em]">
          {title}
          <span className="block bg-gradient-to-r from-[#6b21a8] via-[#9333ea] to-[#6366f1] bg-clip-text pr-[0.08em] text-transparent">{highlight}</span>
        </h2>
      </div>

      <div className="max-w-md lg:justify-self-end">
        <p className="text-base leading-6 text-black/52 sm:text-lg sm:leading-7">{description}</p>

        <div className="mt-6 flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.16em] text-black/32">
          <span className="h-px w-12 bg-gradient-to-r from-[#9333ea]/70 to-transparent" />
          {keywords.join(" · ")}
        </div>
      </div>
    </header>
  );
}