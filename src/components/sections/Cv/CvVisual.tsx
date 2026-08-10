import { FileText } from "lucide-react";

export function CvVisual() {
  return (
    <div aria-hidden="true" className="relative hidden min-h-[220px] -translate-x-8 items-center justify-center lg:flex">
      {/* Halo derrière les documents */}
      <div className="absolute h-[200px] w-[330px] rounded-[44%_56%_48%_52%/52%_44%_56%_48%] bg-[linear-gradient(135deg,rgba(216,180,254,0.58),rgba(168,85,247,0.22),rgba(99,102,241,0.12))] blur-[1px]" />

      {/* Anneaux graphiques */}
      <div className="absolute size-[245px] rounded-full border border-white/60" />
      <div className="absolute size-[290px] rounded-full border border-[#9333ea]/10" />

      {/* Grande feuille */}
      <div className="relative z-10 h-[196px] w-[294px] rotate-[-4deg] overflow-hidden rounded-[28px] border border-black/[0.08] bg-white/76 p-4 shadow-[0_24px_55px_rgba(40,28,48,0.15),inset_0_1px_0_rgba(255,255,255,0.95)] backdrop-blur-xl">
        <div className="flex items-center gap-3">
          <div className="flex size-10 items-center justify-center rounded-xl border border-[#9333ea]/10 bg-[#9333ea]/10 text-[#7e22ce]">
            <FileText size={20} />
          </div>

          <div className="space-y-2">
            <span className="block h-2 w-28 rounded-full bg-black/22" />
            <span className="block h-1.5 w-20 rounded-full bg-black/[0.08]" />
          </div>
        </div>

        <div className="mt-6 grid grid-cols-[0.36fr_0.64fr] gap-4">
          <div className="space-y-2 rounded-xl border border-black/[0.055] bg-[#f5f1f7]/80 p-3">
            <span className="block h-1.5 w-full rounded-full bg-[#9333ea]/42" />
            <span className="block h-1.5 w-4/5 rounded-full bg-black/[0.08]" />
            <span className="block h-1.5 w-3/5 rounded-full bg-black/[0.08]" />
            <span className="block h-1.5 w-[72%] rounded-full bg-black/[0.08]" />
          </div>

          <div className="space-y-3">
            <span className="block h-2 w-2/3 rounded-full bg-black/18" />

            <div className="space-y-2">
              <span className="block h-1.5 w-full rounded-full bg-black/[0.07]" />
              <span className="block h-1.5 w-5/6 rounded-full bg-black/[0.07]" />
              <span className="block h-1.5 w-3/4 rounded-full bg-black/[0.07]" />
            </div>

            <span className="block h-2 w-1/2 rounded-full bg-[#6366f1]/20" />

            <div className="space-y-2">
              <span className="block h-1.5 w-full rounded-full bg-black/[0.07]" />
              <span className="block h-1.5 w-4/5 rounded-full bg-black/[0.07]" />
            </div>
          </div>
        </div>

        <div className="absolute -bottom-14 -right-10 size-36 rounded-full bg-[#9333ea]/14 blur-3xl" />
      </div>

      {/* Seconde feuille */}
      <div className="absolute right-[3%] top-[17%] z-0 h-40 w-28 rotate-[9deg] rounded-2xl border border-[#9333ea]/12 bg-[linear-gradient(145deg,rgba(255,255,255,0.62),rgba(216,180,254,0.28))] shadow-[0_20px_40px_rgba(45,28,56,0.1)] backdrop-blur-lg">
        <div className="space-y-2 p-4">
          <span className="block h-1.5 w-14 rounded-full bg-[#9333ea]/22" />
          <span className="block h-1.5 w-full rounded-full bg-black/[0.06]" />
          <span className="block h-1.5 w-4/5 rounded-full bg-black/[0.06]" />
          <span className="block h-1.5 w-3/5 rounded-full bg-black/[0.06]" />
        </div>
      </div>

      {/* Petit motif flottant */}
      <div className="absolute right-[12%] top-[4%] size-3 rotate-45 border border-[#7e22ce]/35" />
    </div>
  );
}