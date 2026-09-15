import { HeaderBackground } from "./HeaderBackground";
import { HeaderIdentity } from "./HeaderIdentity";
import { HeaderNavigation } from "./HeaderNavigation";
import { HeaderProjectButton } from "./HeaderProjectButton";

export function Header() {
  return (
    <header className="sticky top-0 z-50 overflow-hidden border-b border-white/[0.07] bg-[#17161a]/94 text-white backdrop-blur-2xl">
      <HeaderBackground />
      <div className="relative flex min-h-20 w-full items-center justify-between gap-8 px-[var(--page-gutter)]">
        <HeaderIdentity />
        <HeaderNavigation />
        <HeaderProjectButton />
      </div>
    </header>
  );
}