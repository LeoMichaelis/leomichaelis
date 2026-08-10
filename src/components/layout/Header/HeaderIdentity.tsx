import { siteConfig } from "@/config/site";

export function HeaderIdentity() {
  const { firstName, lastName, role, focus } = siteConfig.identity;

  return (
    <a href={siteConfig.sections.home} aria-label="Retour à l’accueil" className="group relative flex shrink-0 items-center py-2">
      <span className="absolute -inset-x-4 -inset-y-2 rounded-2xl bg-[#a020f0]/0 blur-2xl transition duration-500 group-hover:bg-[#a020f0]/15" />

      <span className="relative flex flex-col">
        <span className="flex items-center font-[family-name:var(--font-logo)] text-[1.9rem] font-bold leading-none tracking-[-0.06em]">
          <span className="text-white">{firstName}</span>
          <span className="mx-[0.18em] mt-[0.04em] size-2.75 rounded-full bg-[#d946ef] shadow-[0_0_14px_rgba(217,70,239,0.9)] transition duration-300 group-hover:scale-125" />
          <span className="bg-gradient-to-r from-white via-white to-[#d8b4fe] bg-clip-text pr-[0.08em] pt-[0.08em] text-transparent">{lastName}</span>
        </span>

        <span className="mt-1 flex items-center gap-2.5 pl-0.5">
          <span className="h-px w-8 bg-gradient-to-r from-[#d946ef]/90 via-[#c084fc]/55 to-transparent" />
          <span className="text-[.76rem] font-medium tracking-[0.055em] text-white/68">{role}</span>
          <span aria-hidden="true" className="size-[4px] rotate-45 border border-[#c084fc]/65 bg-[#c084fc]/10 shadow-[0_0_7px_rgba(192,132,252,0.30)]" />
          <span className="bg-gradient-to-r from-[#e9d5ff]/90 to-[#c084fc]/80 bg-clip-text text-[.76rem] font-semibold tracking-[0.055em] text-transparent">{focus}</span>
        </span>
      </span>
    </a>
  );
}