import { heroContent } from "@/content/hero";

export function HeroBackground() {
  const { software, architecture, data, product, systems } = heroContent.keywords;

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Base minérale */}
      <div className="absolute inset-0 bg-[linear-gradient(116deg,#cec7d2_0%,#e2dce4_30%,#ddd5e1_57%,#c7bdce_100%)]" />

      {/* Modelé lumineux gauche / centre */}
      <div className="absolute left-[17%] top-[-230px] h-[540px] w-[760px] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.68)_0%,rgba(249,246,250,0.38)_35%,rgba(240,228,248,0.16)_52%,transparent_74%)] blur-[58px]" />
      <div className="absolute left-[36%] top-[17%] h-[390px] w-[560px] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.31)_0%,rgba(233,213,246,0.13)_44%,transparent_72%)] blur-[65px]" />

      {/* Lumières latérales */}
      <div className="absolute -left-44 top-[20%] size-[610px] rounded-full bg-[radial-gradient(circle,rgba(216,180,254,0.28)_0%,rgba(168,85,247,0.085)_42%,transparent_72%)] blur-[68px]" />
      <div className="absolute right-[-175px] top-[1%] size-[690px] rounded-full bg-[radial-gradient(circle,rgba(168,85,247,0.21)_0%,rgba(126,34,206,0.105)_34%,rgba(99,102,241,0.035)_56%,transparent_74%)] blur-[72px]" />

      {/* Lumière provenant de la workstation */}
      <div className="absolute right-[5%] top-[21%] h-[420px] w-[610px] rounded-[50%] bg-[radial-gradient(ellipse,rgba(216,180,254,0.25)_0%,rgba(192,132,252,0.14)_27%,rgba(147,51,234,0.07)_47%,transparent_72%)] blur-[43px]" />
      <div className="absolute right-[13%] top-[35%] h-[260px] w-[460px] rounded-[50%] bg-[radial-gradient(ellipse,rgba(232,121,249,0.12)_0%,rgba(168,85,247,0.055)_44%,transparent_73%)] blur-[35px]" />

      {/* SOFTWARE */}
      <div className="absolute left-[-1.8%] top-[-1.5%] h-[126px] w-[590px] rotate-[-1.5deg] overflow-hidden [mask-image:linear-gradient(90deg,rgba(0,0,0,0.72)_0%,black_8%,black_82%,transparent_100%)]">
        <span className="absolute left-0 top-0 whitespace-nowrap font-[family-name:var(--font-header)] text-[111px] font-black leading-none tracking-[-0.078em] text-[#6b21a8]/[0.085] blur-[0.7px]">{software}</span>
        <span className="absolute left-[3px] top-[3px] whitespace-nowrap font-[family-name:var(--font-header)] text-[111px] font-black leading-none tracking-[-0.078em] text-transparent [-webkit-text-stroke:1px_rgba(91,33,182,0.20)]">{software}</span>
      </div>

      {/* ARCHITECTURE */}
      <div className="absolute right-[-6.5%] top-[7%] h-[125px] w-[720px] overflow-hidden [mask-image:linear-gradient(90deg,transparent_0%,black_12%,black_88%,transparent_100%)]">
        <span className="absolute left-0 top-0 whitespace-nowrap font-[family-name:var(--font-header)] text-[96px] font-black leading-none tracking-[-0.066em] text-transparent [-webkit-text-stroke:1px_rgba(126,34,206,0.27)]">{architecture}</span>
        <span className="absolute left-[52%] top-[10px] h-[82px] w-px rotate-[18deg] bg-gradient-to-b from-transparent via-[#a855f7]/45 to-transparent" />
        <span className="absolute left-[64%] top-[54px] h-px w-[135px] bg-gradient-to-r from-[#9333ea]/42 to-transparent" />
        <span className="absolute left-[82%] top-[48px] size-2 rotate-45 border border-[#c084fc]/48" />
        <span className="absolute left-[28%] top-[35px] h-[38px] w-[310px] rounded-full bg-[#9333ea]/[0.055] blur-[18px]" />
      </div>

      {/* DATA */}
      <div className="absolute right-[0.4%] top-[27%] flex h-[232px] items-center gap-3">
        <span className="h-full w-px bg-gradient-to-b from-transparent via-[#9333ea]/30 to-transparent" />

        <div className="relative">
          <span className="bg-[linear-gradient(180deg,rgba(126,34,206,0.18),rgba(168,85,247,0.08))] bg-clip-text font-[family-name:var(--font-header)] text-[56px] font-black tracking-[0.13em] text-transparent [writing-mode:vertical-rl]">{data}</span>
          <span className="absolute left-[4px] top-[4px] font-[family-name:var(--font-header)] text-[56px] font-black tracking-[0.13em] text-transparent [-webkit-text-stroke:1px_rgba(147,51,234,0.25)] [writing-mode:vertical-rl]">{data}</span>
        </div>

        <div className="flex h-full flex-col justify-around">
          <span className="size-1.5 rotate-45 bg-[#a855f7]/55" />
          <span className="h-px w-7 bg-[#9333ea]/36" />
          <span className="size-1 rounded-full bg-[#c084fc]/55 shadow-[0_0_10px_rgba(192,132,252,0.38)]" />
        </div>
      </div>

      {/* PRODUCT */}
      <div className="absolute left-[48%] top-[40%] h-[108px] w-[475px] -rotate-[7deg] overflow-hidden [mask-image:linear-gradient(90deg,transparent_0%,black_9%,black_86%,transparent_100%)]">
        <span className="absolute whitespace-nowrap font-[family-name:var(--font-header)] text-[92px] font-black leading-none tracking-[-0.07em] text-[#6b21a8]/[0.11] blur-[0.55px]">{product}</span>
        <span className="absolute left-[4px] top-[4px] whitespace-nowrap font-[family-name:var(--font-header)] text-[92px] font-black leading-none tracking-[-0.07em] text-transparent [-webkit-text-stroke:1px_rgba(126,34,206,0.18)]">{product}</span>
        <span className="absolute bottom-[13px] left-[13%] h-px w-[72%] bg-gradient-to-r from-transparent via-[#9333ea]/42 to-transparent" />
      </div>


      {/* SYSTEMS */}
      <div className="absolute inset-x-0 bottom-[-28px] z-[11] h-[148px] overflow-hidden">
        {/* Version sur fond clair */}
        <span className="absolute bottom-[-34px] left-1/2 -translate-x-1/2 whitespace-nowrap font-[family-name:var(--font-header)] text-[148px] font-black leading-none tracking-[-0.045em] text-[#6b21a8]/[0.055]">{systems}</span>
        <span className="absolute bottom-[-31px] left-[calc(50%+3px)] -translate-x-1/2 whitespace-nowrap font-[family-name:var(--font-header)] text-[148px] font-black leading-none tracking-[-0.045em] text-transparent opacity-40 [-webkit-text-stroke:1px_rgba(107,33,168,0.20)]">{systems}</span>

        {/* Dans le dark : le même mot révèle progressivement un violet/lilas plus vivant */}
        <div className="absolute inset-0 [mask-image:linear-gradient(180deg,transparent_0%,transparent_45%,rgba(0,0,0,0.24)_58%,rgba(0,0,0,0.72)_76%,black_100%)]">
          <span className="absolute bottom-[-34px] left-1/2 -translate-x-1/2 whitespace-nowrap font-[family-name:var(--font-header)] text-[148px] font-black leading-none tracking-[-0.045em] text-[#d8b4fe]/[0.075]">{systems}</span>
          <span className="absolute bottom-[-31px] left-[calc(50%+3px)] -translate-x-1/2 whitespace-nowrap font-[family-name:var(--font-header)] text-[148px] font-black leading-none tracking-[-0.045em] text-transparent opacity-45 [-webkit-text-stroke:1px_rgba(216,180,254,0.30)]">{systems}</span>
        </div>
      </div>


      {/* Grille technique workstation */}
      <div className="absolute inset-y-0 right-0 w-[59%] opacity-[0.19] [background-image:linear-gradient(rgba(50,31,59,0.10)_1px,transparent_1px),linear-gradient(90deg,rgba(50,31,59,0.10)_1px,transparent_1px)] [background-size:39px_39px] [mask-image:linear-gradient(90deg,transparent,black_42%,black)]" />

      {/* Grandes constructions */}
      <div className="absolute -left-[105px] -top-[110px] size-[385px] rounded-full border border-white/58" />
      <div className="absolute -right-[260px] top-[54px] size-[700px] rounded-full border border-[#9333ea]/16" />
      <div className="absolute left-[29%] top-[-120px] h-[430px] w-px rotate-[54deg] bg-gradient-to-b from-transparent via-[#7e22ce]/24 to-transparent" />
      <div className="absolute right-[33%] top-[-65px] h-[400px] w-px rotate-[-48deg] bg-gradient-to-b from-transparent via-[#9333ea]/22 to-transparent" />

      {/* Horizon */}
      <div className="absolute -bottom-[300px] right-[-13%] h-[525px] w-[79%] rotate-[-5deg] rounded-[50%] bg-[radial-gradient(ellipse_at_42%_4%,rgba(126,34,206,0.34)_0%,rgba(63,42,73,0.92)_27%,rgba(33,25,41,0.98)_54%,#17131f_78%)] shadow-[0_-34px_80px_rgba(126,34,206,0.13)]" />

      {/* Ombre venant de la workstation */}
      <div className="absolute -bottom-[248px] left-[31%] h-[370px] w-[52%] rotate-[3deg] rounded-[50%] bg-[radial-gradient(ellipse_at_67%_0%,rgba(76,29,149,0.23)_0%,rgba(23,19,31,0.76)_56%,transparent_74%)] blur-[2px]" />

      {/* Arête physique */}
      <div className="absolute bottom-[77px] right-[3%] h-px w-[605px] -rotate-[4deg] bg-gradient-to-r from-transparent via-white/22 via-35% to-transparent" />
      <div className="absolute bottom-[76px] right-[3%] h-px w-[605px] -rotate-[4deg] bg-gradient-to-r from-transparent via-[#c084fc]/52 to-transparent shadow-[0_1px_5px_rgba(168,85,247,0.26)]" />
      <div className="absolute bottom-[70px] right-[17%] h-[6px] w-[390px] -rotate-[4deg] rounded-full bg-[#7e22ce]/14 blur-[8px]" />

      {/* Fusion finale avec Universe */}
      <div className="absolute inset-x-0 bottom-0 h-[86px] bg-[linear-gradient(180deg,transparent_0%,rgba(23,19,31,0.30)_32%,rgba(23,19,31,0.78)_72%,#17131f_100%)]" />
    </div>
  );
}