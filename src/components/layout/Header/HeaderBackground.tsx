export function HeaderBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Base sombre neutre */}
      <div className="absolute inset-0 bg-[linear-gradient(105deg,#151218_0%,#100f14_38%,#141019_70%,#110e16_100%)]" />


      {/* GAUCHE */}
      <div className="absolute -left-28 -top-32 h-[300px] w-[470px] rounded-full bg-[radial-gradient(circle,rgba(192,132,252,0.30)_0%,rgba(147,51,234,0.13)_36%,rgba(88,28,135,0.04)_58%,transparent_74%)] blur-[42px]" />
      <div className="absolute left-[7%] top-[-80px] h-[170px] w-[240px] rounded-full bg-[radial-gradient(circle,rgba(232,121,249,0.13)_0%,transparent_70%)] blur-[30px]" />

      
      {/* CENTRE */}
      <div className="absolute inset-x-[18%] top-[-95px] h-[190px] rounded-[50%] bg-[radial-gradient(ellipse,rgba(255,255,255,0.045)_0%,rgba(168,85,247,0.025)_42%,transparent_72%)] blur-[30px]" />
      <div className="absolute left-1/2 top-1/2 h-[150px] w-[570px] -translate-x-1/2 -translate-y-1/2 rounded-[50%] bg-[radial-gradient(ellipse,rgba(147,51,234,0.17)_0%,rgba(126,34,206,0.10)_28%,rgba(76,29,149,0.045)_52%,transparent_78%)] blur-[24px]" />
      <div className="absolute left-1/2 top-1/2 h-[64px] w-[480px] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(ellipse,rgba(192,132,252,0.18)_0%,rgba(168,85,247,0.095)_38%,rgba(99,102,241,0.035)_62%,transparent_82%)] blur-[14px]" />


      {/* DROIT */}
      <div className="absolute -right-24 -top-40 h-[360px] w-[570px] rounded-full bg-[radial-gradient(circle,rgba(192,38,211,0.32)_0%,rgba(147,51,234,0.23)_28%,rgba(99,102,241,0.11)_50%,transparent_73%)] blur-[48px]" />
      <div className="absolute right-[1%] top-[-105px] h-[245px] w-[390px] rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.19)_0%,rgba(79,70,229,0.08)_45%,transparent_72%)] blur-[34px]" />
      <div className="absolute right-[8%] top-[-115px] h-[290px] w-[260px] rotate-[58deg] bg-[linear-gradient(90deg,transparent_0%,rgba(168,85,247,0.035)_35%,rgba(216,180,254,0.11)_50%,rgba(99,102,241,0.035)_65%,transparent_100%)] blur-[8px]" />

      <div className="absolute inset-y-0 right-0 w-[35%] opacity-[0.08] [background-image:linear-gradient(rgba(216,180,254,0.22)_1px,transparent_1px),linear-gradient(90deg,rgba(216,180,254,0.22)_1px,transparent_1px)] [background-size:28px_28px] [mask-image:linear-gradient(to_left,black,transparent)]" />


      {/* Séparation basse */}
      <div className="absolute bottom-0 left-0 h-px w-[clamp(220px,22vw,430px)] bg-gradient-to-r from-[#c084fc]/0 via-[#c084fc]/65 to-transparent" />
      <div className="absolute bottom-0 right-0 h-px w-[clamp(260px,28vw,520px)] bg-gradient-to-l from-transparent via-[#e879f9]/65 to-[#6366f1]/0" />
      
    </div>
  );
}