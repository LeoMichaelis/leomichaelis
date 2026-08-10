import type { ReactNode } from "react";
import { ArrowUpRight, Download, Mail, MapPin, Phone } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { siteConfig } from "@/config/site";
import { footerContent } from "@/content/footer";

export function FooterContactCard() {
  return (
    <div className="relative overflow-hidden rounded-[30px] border border-white/[0.09] bg-white/[0.045] shadow-[0_40px_120px_rgba(0,0,0,0.32),inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-2xl sm:rounded-[38px]">
      <ContactCardBackground />

      <div className="relative z-10 grid gap-0 lg:grid-cols-[1.2fr_0.8fr]">
        <ContactInformation />
        <ContactLinks />
      </div>
    </div>
  );
}

function ContactInformation() {
  return (
    <div className="border-b border-white/[0.08] p-6 sm:p-10 lg:border-b-0 lg:border-r lg:p-12">
      <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#c084fc]">{footerContent.contact.eyebrow}</p>

      <a href={`mailto:${siteConfig.contact.email}`} className="group mt-5 block max-w-4xl break-words text-[clamp(2rem,4vw,5rem)] font-black leading-[0.95] tracking-[-0.055em] text-white">
        <span className="bg-gradient-to-r from-white via-white to-white/60 bg-[length:200%_100%] bg-clip-text text-transparent transition-[background-position] duration-500 group-hover:bg-right">{siteConfig.contact.email}</span>
        <ArrowUpRight size={34} strokeWidth={2.2} className="ml-3 inline-block translate-y-[-0.15em] text-[#c084fc] transition-transform duration-300 group-hover:-translate-y-2 group-hover:translate-x-2" />
      </a>

      <div className="mt-10 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
        <ContactDetail icon={<Phone size={18} />} label={footerContent.contact.phoneLabel} value={siteConfig.contact.phone} href={`tel:${siteConfig.contact.phoneHref}`} />
        <ContactDetail icon={<MapPin size={18} />} label={footerContent.contact.locationLabel} value={siteConfig.identity.location} />
        <ContactDetail icon={<Mail size={18} />} label={footerContent.contact.availabilityLabel} value={footerContent.contact.availabilityValue} />
      </div>
    </div>
  );
}

function ContactLinks() {
  return (
    <div className="flex flex-col justify-between gap-10 p-6 sm:p-10 lg:p-12">
      <div>
        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-white/35">{footerContent.links.eyebrow}</p>

        <div className="mt-5 space-y-3">
          <FooterLink href={siteConfig.links.github} label={footerContent.links.github.label} description={footerContent.links.github.description} icon={<FaGithub size={21} />} external />
          <FooterLink href={siteConfig.links.linkedin} label={footerContent.links.linkedin.label} description={footerContent.links.linkedin.description} icon={<FaLinkedin size={21} />} external />
          <FooterLink href={siteConfig.links.cv} label={footerContent.links.cv.label} description={footerContent.links.cv.description} icon={<Download size={21} />} download />
        </div>
      </div>

      <a href={`mailto:${siteConfig.contact.email}`} className="group flex min-h-16 items-center justify-between gap-5 rounded-[20px] bg-white px-5 py-4 text-[#211824] shadow-[0_18px_45px_rgba(0,0,0,0.22)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#d8b4fe] hover:shadow-[0_24px_55px_rgba(147,51,234,0.23)]">
        <span>
          <span className="block text-sm font-black">{footerContent.cta.title}</span>
          <span className="mt-1 block text-xs text-black/48">{footerContent.cta.description}</span>
        </span>

        <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-[#211824] text-white transition-transform duration-300 group-hover:rotate-6">
          <ArrowUpRight size={20} />
        </span>
      </a>
    </div>
  );
}

function ContactDetail({ icon, label, value, href }: { icon: ReactNode; label: string; value: string; href?: string }) {
  const content = (
    <>
      <span className="flex size-10 shrink-0 items-center justify-center rounded-[13px] border border-white/[0.08] bg-white/[0.055] text-[#d8b4fe]">{icon}</span>

      <span className="min-w-0">
        <span className="block text-[9px] font-black uppercase tracking-[0.16em] text-white/30">{label}</span>
        <span className="mt-1 block text-sm font-bold leading-5 text-white/72">{value}</span>
      </span>
    </>
  );

  const className = `flex min-h-[76px] items-center gap-3 rounded-[18px] border border-white/[0.07] bg-black/[0.08] px-4 py-3 transition-all duration-300 ${href ? "hover:-translate-y-0.5 hover:border-[#c084fc]/25 hover:bg-[#9333ea]/10" : ""}`;

  return href ? <a href={href} className={className}>{content}</a> : <div className={className}>{content}</div>;
}

function FooterLink({ href, label, description, icon, external = false, download = false }: { href: string; label: string; description: string; icon: ReactNode; external?: boolean; download?: boolean }) {
  return (
    <a href={href} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined} download={download || undefined} className="group flex items-center justify-between gap-4 rounded-[18px] border border-white/[0.07] bg-white/[0.025] px-4 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-[#c084fc]/25 hover:bg-[#9333ea]/[0.08]">
      <span className="flex min-w-0 items-center gap-4">
        <span className="flex size-11 shrink-0 items-center justify-center rounded-[14px] border border-white/[0.08] bg-white/[0.05] text-white/65 transition-colors duration-300 group-hover:text-[#d8b4fe]">{icon}</span>

        <span className="min-w-0">
          <span className="block text-sm font-black text-white/85">{label}</span>
          <span className="mt-1 block text-xs text-white/35">{description}</span>
        </span>
      </span>

      <ArrowUpRight size={18} className="shrink-0 text-white/30 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#d8b4fe]" />
    </a>
  );
}

function ContactCardBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.035),transparent_34%,transparent_68%,rgba(147,51,234,0.055))]" />
      <div className="absolute -left-32 -top-36 size-[420px] rounded-full bg-[#9333ea]/18 blur-[90px]" />
      <div className="absolute -bottom-44 right-[8%] size-[440px] rounded-full bg-[#6366f1]/12 blur-[105px]" />
      <div className="absolute right-0 top-0 h-full w-[56%] opacity-[0.14] [background-image:linear-gradient(rgba(216,180,254,0.16)_1px,transparent_1px),linear-gradient(90deg,rgba(216,180,254,0.16)_1px,transparent_1px)] [background-size:38px_38px] [mask-image:linear-gradient(to_left,black,transparent)]" />
      <div className="absolute -right-[180px] -top-[210px] size-[510px] rounded-full border border-[#c084fc]/10" />
      <div className="absolute -right-[65px] -top-[95px] size-[310px] rounded-full border border-white/[0.055]" />
      <div className="absolute left-[34%] top-[-150px] h-[440px] w-px rotate-[48deg] bg-gradient-to-b from-transparent via-[#c084fc]/20 to-transparent" />
    </div>
  );
}