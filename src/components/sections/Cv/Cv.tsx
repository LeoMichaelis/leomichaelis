
import type { ReactNode } from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import { cvContent } from "@/content/cv";
import { siteConfig } from "@/config/site";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { CvBackground } from "./CvBackground";
import { CvCards } from "./CvCards";

export function Cv() {
  return (
    <section id="cv" className="relative isolate overflow-hidden">
      <CvBackground />
      <div className="relative z-10 px-[var(--page-gutter)] py-[clamp(1.5rem,1.9vw,2rem)]">
        <div className="flex items-center justify-between">
          <Eyebrow as="h2" eyebrow={cvContent.eyebrow} />
          <div className="flex shrink-0 items-center gap-[clamp(.45rem,.65vw,.65rem)]">
            <SocialLink href={siteConfig.links.linkedin} label="LinkedIn" icon={<FaLinkedinIn size={20} />} />
            <SocialLink href={siteConfig.links.github} label="GitHub" icon={<FaGithub size={20} />} />
          </div>
        </div>
        <div className="mt-[clamp(2rem,2.8vw,3rem)]"><CvCards /></div>
      </div>
    </section>
  );
}


function SocialLink({ href, label, icon }: { href: string; label: string; icon: ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label} title={label} className="group/social relative size-[clamp(2.7rem,3.2vw,3rem)] aspect-square shrink-0 appearance-none rounded-full border-0 bg-transparent p-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9333ea]/35 focus-visible:ring-offset-[clamp(.12rem,.15vw,.15rem)] focus-visible:ring-offset-transparent">
      {/* Surface nacrée */}
      <span aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden rounded-full bg-[linear-gradient(145deg,#fffefe_0%,#faf7fb_35%,#f2ebf5_68%,#e9dfed_100%)] shadow-[0_10px_24px_rgba(65,42,77,0.12),0_4px_10px_rgba(45,26,55,0.07),inset_0_0_0_1px_rgba(101,70,116,0.13),inset_0_1px_0_rgba(255,255,255,0.95)] transition-shadow duration-300 group-hover/social:shadow-[0_13px_28px_rgba(101,55,123,0.17),0_4px_11px_rgba(51,31,64,0.09),inset_0_0_0_1px_rgba(143,88,171,0.25),inset_0_1px_0_rgba(255,255,255,1)]">
        {/* Éclairage supérieur */}
        <span className="absolute inset-x-0 top-0 h-[55%] bg-[radial-gradient(ellipse_at_32%_-10%,rgba(255,255,255,0.90)_0%,rgba(237,206,249,0.30)_38%,transparent_76%)] opacity-70 transition-opacity duration-300 group-hover/social:opacity-100" />
        {/* Lamelles usinées */}
        <span className={`absolute inset-0 ${label === "LinkedIn" ? "-scale-x-100" : ""}`}>
          <span className="absolute right-[14%] top-[9%] h-[34%] w-[4%] rotate-[-38deg] rounded-full bg-[linear-gradient(180deg,#d5c9db_0%,#9a83a6_100%)] opacity-70 transition-opacity duration-300 group-hover/social:opacity-90" />
          <span className="absolute right-[24%] top-[18%] h-[26%] w-[4%] rotate-[-38deg] rounded-full bg-[linear-gradient(180deg,#c9bbd1_0%,#8b7698_100%)] opacity-70 transition-opacity duration-300 group-hover/social:opacity-90" />
        </span>
      </span>
      {/* Icône */}
      <span className="relative z-10 flex size-full items-center justify-center text-[#66596b] transition-colors duration-300 group-hover/social:text-[#9159b2]">{icon}</span>
    </a>
  );
}
