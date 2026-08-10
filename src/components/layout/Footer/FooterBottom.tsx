import { siteConfig } from "@/config/site";
import { footerContent } from "@/content/footer";

export function FooterBottom() {
  return (
    <div className="relative mt-20 overflow-hidden border-t border-white/[0.08] pt-8 sm:mt-28">
      <p aria-hidden="true" className="pointer-events-none absolute left-1/2 top-[-0.22em] -translate-x-1/2 whitespace-nowrap text-[clamp(4rem,14vw,13rem)] font-black leading-none tracking-[-0.075em] text-white/[0.025]">{siteConfig.identity.firstName} {siteConfig.identity.lastName}</p>

      <div className="relative z-10 flex flex-col justify-between gap-4 text-xs text-white/35 sm:flex-row sm:items-center">
        <p>© {new Date().getFullYear()} {siteConfig.identity.name}. {footerContent.legal.copyright}</p>
        <p>{footerContent.legal.signature}</p>
      </div>
    </div>
  );
}