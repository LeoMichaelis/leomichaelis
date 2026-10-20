export function AtelierBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Base graphite / aubergine */}
      <div className="absolute inset-0 bg-[linear-gradient(118deg,#131116_0%,#17111d_34%,#120f16_68%,#18101f_100%)]" />

      {/* Nappes atmosphériques */}
      <div className="absolute -left-40 -top-44 h-[520px] w-[680px] rounded-full bg-[radial-gradient(circle,rgba(168,85,247,0.22)_0%,rgba(126,34,206,0.10)_38%,rgba(88,28,135,0.035)_58%,transparent_74%)] blur-[72px]" />
      <div className="absolute right-[4%] top-[5%] h-[380px] w-[560px] rounded-full bg-[radial-gradient(ellipse,rgba(99,102,241,0.24)_0%,rgba(129,140,248,0.11)_38%,rgba(99,102,241,0.04)_60%,transparent_76%)] blur-[48px]" />
      <div className="absolute -right-44 bottom-[-260px] h-[620px] w-[760px] rounded-full bg-[radial-gradient(circle,rgba(192,38,211,0.18)_0%,rgba(147,51,234,0.10)_34%,rgba(79,70,229,0.05)_54%,transparent_74%)] blur-[82px]" />
    </div>
  );
}