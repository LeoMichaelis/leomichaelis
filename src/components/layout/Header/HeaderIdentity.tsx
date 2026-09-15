import { siteConfig } from "@/config/site";

export function HeaderIdentity() {
  const { firstName, lastName, role } = siteConfig.identity;
  return (
    <a href={siteConfig.sections.home} aria-label="Retour à l’accueil" className="group relative flex shrink-0 items-center py-2">
      <span className="absolute -inset-x-4 -inset-y-2 rounded-2xl bg-[#a020f0]/0 blur-2xl transition duration-500 group-hover:bg-[#a020f0]/15" />
      <span className="relative flex flex-col">
        <span className="flex items-center font-[family-name:var(--font-logo)] text-[clamp(1.8rem,calc(1.1rem+0.83vw),2.05rem)] font-bold leading-none tracking-[-0.06em]">
          <span className="text-white">{firstName}</span>
          <span className="mx-[0.18em] mt-[0.04em] size-[0.36em] rounded-full bg-[#d946ef] shadow-[0_0_14px_rgba(217,70,239,0.9)] transition duration-300 group-hover:scale-125" />
         <span className="-my-[0.1em] bg-gradient-to-r from-white via-white to-[#d8b4fe] bg-clip-text py-[0.1em] pr-[0.08em] text-transparent">{lastName}</span>
        </span>
        <span className="mt-1 flex items-center gap-[0.82em] pl-0.5 text-[clamp(.72rem,calc(.47rem+0.3vw),.82rem)]">
          <span className="h-px w-[3.3em] bg-gradient-to-r from-[#d946ef]/90 via-[#c084fc]/55 to-transparent" />
          <span className="bg-gradient-to-r from-[#d8d4dc]/80 via-[#c9c3d1]/90 to-[#b9a8c9] bg-clip-text font-semibold tracking-[0.055em] text-transparent">{role}</span>
          <span aria-hidden="true" className="size-[0.41em] rotate-45 border border-[#c084fc]/65 bg-[#c084fc]/10 shadow-[0_0_7px_rgba(192,132,252,0.30)]" />
        </span>
      </span>
    </a>
  );
}