export function PrestationsBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Base graphite / aubergine */}
      <div className="absolute inset-0 bg-[linear-gradient(118deg,#131116_0%,#17111d_34%,#120f16_68%,#18101f_100%)]" />

      {/* Grandes nappes de lumière */}
      <div className="absolute -left-40 -top-44 h-[520px] w-[680px] rounded-full bg-[radial-gradient(circle,rgba(168,85,247,0.22)_0%,rgba(126,34,206,0.10)_38%,rgba(88,28,135,0.035)_58%,transparent_74%)] blur-[72px]" />
      <div className="absolute left-[38%] top-[-210px] h-[430px] w-[760px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(216,180,254,0.105)_0%,rgba(168,85,247,0.045)_40%,transparent_72%)] blur-[64px]" />
      <div className="absolute -right-44 bottom-[-260px] h-[620px] w-[760px] rounded-full bg-[radial-gradient(circle,rgba(192,38,211,0.20)_0%,rgba(147,51,234,0.12)_34%,rgba(79,70,229,0.06)_54%,transparent_74%)] blur-[82px]" />
      <div className="absolute right-[4%] top-[5%] h-[380px] w-[560px] rounded-full bg-[radial-gradient(ellipse,rgba(99,102,241,0.26)_0%,rgba(129,140,248,0.12)_38%,rgba(99,102,241,0.045)_60%,transparent_76%)] blur-[48px]" />
      <div className="absolute -left-[16%] top-[clamp(30rem,37vw,41rem)] h-[520px] w-[900px] rounded-full bg-[radial-gradient(ellipse,rgba(168,85,247,0.22)_0%,rgba(126,34,206,0.11)_38%,rgba(147,51,234,0.05)_60%,transparent_78%)] blur-[58px]" />

      {/* Architecture discrète */}
      <div className="absolute inset-y-0 right-0 w-[44%] opacity-[0.10] [background-image:linear-gradient(rgba(216,180,254,0.16)_1px,transparent_1px),linear-gradient(90deg,rgba(216,180,254,0.16)_1px,transparent_1px)] [background-size:38px_38px] [mask-image:linear-gradient(to_left,black,transparent_82%)]" />
      <div className="absolute -left-[330px] bottom-[-430px] size-[760px] rounded-full border border-[#c084fc]/[0.075]" />
      <div className="absolute -left-[220px] bottom-[-325px] size-[560px] rounded-full border border-white/[0.035]" />
      <div className="absolute -right-[250px] top-[-360px] size-[720px] rounded-full border border-[#818cf8]/[0.065]" />

      {/* Micro-géométries */}
      <div className="absolute left-[4%] top-[clamp(8rem,10vw,12rem)] size-2 rotate-45 border border-[#d8b4fe]/30 bg-[#a855f7]/[0.04]" />
      <div className="absolute right-[4%] top-[clamp(8rem,10vw,12rem)] size-2 rotate-45 bg-[#c084fc]/35 shadow-[0_0_10px_rgba(192,132,252,0.28)]" />
      <div className="absolute left-[4%] top-[clamp(29rem,34vw,39rem)] flex flex-col gap-2 opacity-50">
        <span className="size-1 rounded-full border border-[#d8b4fe]/70" />
        <span className="size-1 rounded-full border border-[#d8b4fe]/45" />
        <span className="size-1 rounded-full border border-[#d8b4fe]/25" />
      </div>
      <div className="absolute right-[4%] top-[clamp(29rem,34vw,39rem)] flex flex-col gap-2 opacity-25">
        <span className="size-1 rounded-full bg-[#d8b4fe]/70" />
        <span className="size-1 rounded-full bg-[#d8b4fe]/45" />
        <span className="size-1 rounded-full bg-[#d8b4fe]/25" />
      </div>

      {/* Grain très léger */}
      <div className="absolute inset-0 opacity-[0.025] [background-image:url('data:image/svg+xml,%3Csvg_viewBox=%220_0_180_180%22_xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter_id=%22n%22%3E%3CfeTurbulence_type=%22fractalNoise%22_baseFrequency=%220.82%22_numOctaves=%223%22_stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect_width=%22100%25%22_height=%22100%25%22_filter=%22url(%23n)%22_opacity=%220.5%22/%3E%3C/svg%3E')]" />

      {/* Séparation haute */}
      <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-white/[0.08] to-transparent" />
    </div>
  );
}
