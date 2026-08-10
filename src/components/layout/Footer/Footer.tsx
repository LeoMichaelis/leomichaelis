import { FooterBackground } from "./FooterBackground";
import { FooterBottom } from "./FooterBottom";
import { FooterContactCard } from "./FooterContactCard";
import { FooterIntro } from "./FooterIntro";

export function Footer() {
  return (
    <footer id="contact" className="relative overflow-hidden bg-[#17131f] px-4 pb-8 pt-12 text-white sm:px-6 sm:pb-10 sm:pt-16 lg:px-8 lg:pt-20">
      <FooterBackground />

      <div className="relative z-10 mx-auto w-full max-w-[1440px]">
        <FooterIntro />
        <FooterContactCard />
        <FooterBottom />
      </div>
    </footer>
  );
}