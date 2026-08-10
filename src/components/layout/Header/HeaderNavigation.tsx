import { siteConfig } from "@/config/site";

export function HeaderNavigation() {
  return (
    <nav aria-label="Navigation principale" className="relative hidden shrink-0 items-center lg:flex">
      <span aria-hidden="true" className="absolute left-0 right-0 top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-white/[0.18] to-transparent" />

      <div className="relative flex items-center">
        {siteConfig.navigation.map((item, index) => (
          <a key={item.href} href={item.href} className="group relative flex min-w-[92px] items-center justify-center px-5 py-4">
            <span aria-hidden="true" className="absolute inset-x-2 inset-y-1 rounded-[14px] border border-transparent bg-transparent transition-all duration-300 group-hover:border-[#c084fc]/15 group-hover:bg-white/[0.035] group-hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.035),0_8px_24px_rgba(88,28,135,0.08)]" />

            <span className="relative font-[family-name:var(--font-header)] text-[13px] font-semibold tracking-[0.045em] text-white/78 transition-all duration-300 group-hover:-translate-y-px group-hover:text-white">
              {item.label}
            </span>

            <span aria-hidden="true" className="absolute bottom-[7px] left-1/2 h-px w-0 -translate-x-1/2 bg-gradient-to-r from-transparent via-[#c084fc] to-transparent opacity-0 shadow-[0_0_8px_rgba(192,132,252,0.7)] transition-all duration-300 group-hover:w-10 group-hover:opacity-100" />
            <span aria-hidden="true" className="absolute bottom-[5px] left-1/2 size-1 -translate-x-1/2 rotate-45 border border-[#e9d5ff]/0 bg-[#a855f7]/0 transition-all duration-300 group-hover:border-[#e9d5ff]/50 group-hover:bg-[#a855f7]/60 group-hover:shadow-[0_0_8px_rgba(168,85,247,0.65)]" />

            {index < siteConfig.navigation.length - 1 && <span aria-hidden="true" className="absolute right-0 top-1/2 h-4 w-px -translate-y-1/2 bg-gradient-to-b from-transparent via-white/[0.22] to-transparent" />}
          </a>
        ))}
      </div>
    </nav>
  );
}