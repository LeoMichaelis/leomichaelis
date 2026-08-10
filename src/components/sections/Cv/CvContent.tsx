import type { ReactNode } from "react";

import { ArrowUpRight, FileText, Sparkles } from "lucide-react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";

import { siteConfig } from "@/config/site";
import { cvContent } from "@/content/cv";

export function CvContent() {
  return (
    <div className="flex flex-col items-start lg:pl-6">
      <div className="mb-4 flex items-center gap-2 text-[#7e22ce]">
        <Sparkles size={16} strokeWidth={1.7} />
        <span className="text-[11px] font-bold uppercase tracking-[0.18em]">{cvContent.eyebrow}</span>
      </div>

      <div className="flex w-full flex-col justify-between gap-12 xl:flex-row xl:items-end">
        <div>
          <h2 className="max-w-2xl text-[clamp(2.2rem,4vw,4.2rem)] font-black leading-[0.94] tracking-[-0.05em]">
            {cvContent.title.prefix}
            <span className="block bg-gradient-to-r from-[#6b21a8] via-[#9333ea] to-[#6366f1] bg-clip-text pr-[0.08em] text-transparent">{cvContent.title.highlight}</span>
          </h2>

          <p className="mt-4 max-w-xl text-sm leading-6 text-black/55 sm:text-base">{cvContent.description}</p>
        </div>

        <div className="flex shrink-0 flex-col flex-wrap items-center gap-4">
          <a href={siteConfig.links.cv} target="_blank" rel="noopener noreferrer" className="group relative flex items-center gap-3 overflow-hidden rounded-full border border-[#6b21a8]/20 bg-[#211b27] px-5 py-3.5 font-bold text-white shadow-[0_16px_38px_rgba(88,28,135,0.24),inset_0_1px_0_rgba(255,255,255,0.12)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#2c2133] hover:shadow-[0_20px_45px_rgba(88,28,135,0.3)]">
            <span aria-hidden="true" className="absolute inset-0 translate-x-[-110%] bg-[linear-gradient(110deg,transparent_20%,rgba(216,180,254,0.18)_50%,transparent_80%)] transition-transform duration-700 group-hover:translate-x-[110%]" />
            <FileText size={18} className="relative" />
            <span className="relative">{cvContent.action}</span>
            <ArrowUpRight size={17} className="relative transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>

          <div className="flex items-center gap-3">
            <SocialLink href={siteConfig.links.linkedin} label="LinkedIn" icon={<FaLinkedinIn size={19} />} />
            <SocialLink href={siteConfig.links.github} label="GitHub" icon={<FaGithub size={20} />} />
          </div>
        </div>
      </div>
    </div>
  );
}

function SocialLink({ href, label, icon }: { href: string; label: string; icon: ReactNode }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label} title={label} className="group relative flex size-12 items-center justify-center overflow-hidden rounded-full border border-black/[0.1] bg-white/55 text-black/62 shadow-[0_10px_28px_rgba(35,25,42,0.08),inset_0_1px_0_rgba(255,255,255,0.8)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-[#9333ea]/25 hover:bg-white/80 hover:text-[#6b21a8] hover:shadow-[0_14px_34px_rgba(88,28,135,0.14)]">
      <span aria-hidden="true" className="absolute inset-0 scale-0 rounded-full bg-[radial-gradient(circle,rgba(168,85,247,0.18)_0%,transparent_68%)] transition-transform duration-300 group-hover:scale-100" />
      <span className="relative">{icon}</span>
    </a>
  );
}