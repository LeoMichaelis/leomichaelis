import type { ReactNode } from "react";
import Image from "next/image";
import browserFavicon from "@/assets/img/prestations/browser-favicon.webp";
import leo from "@/assets/img/prestations/leo.webp";
import tom from "@/assets/img/prestations/tom.webp";
import ines from "@/assets/img/prestations/ines.webp";
import alvina from "@/assets/img/prestations/alvina.webp";
import sophie from "@/assets/img/prestations/sophie.webp";
import velodrome from "@/assets/img/prestations/velodrome.webp";
import poker from "@/assets/img/prestations/poker.webp";
import simpsons from "@/assets/img/prestations/simpsons.webp";
import om from "@/assets/img/prestations/om.png";
import iryna from "@/assets/img/prestations/iryna.webp";
import maman from "@/assets/img/prestations/maman.webp";
import emma from "@/assets/img/prestations/emma.webp";
const profiles = { iryna, maman, emma };
import { prestationsContent } from "@/content/prestations";
import { ArrowLeft, ArrowRight, Bell, CalendarDays, ChevronDown, Heart, Home, ImageIcon, Maximize2, MessageCircle, MoreHorizontal, RotateCw, Search, Star } from "lucide-react";

export function PrestationsCards() {
  return (
    <div className="flex flex-col gap-[clamp(1rem,1.35vw,1.4rem)]">
      <PrestationsMainCard />

      <div className="flex gap-[clamp(1rem,1.35vw,1.4rem)]">
        <PrestationsSecondaryCard title={prestationsContent.secondary.title} illustration={<SitesExperienceVisual />} />
        <PrestationsSecondaryCard title={prestationsContent.third.title} illustration={<AutomationDataVisual />} />
        <PrestationsSecondaryCard title={prestationsContent.fourth.title} illustration={<ExistingEvolutionVisual />} />
      </div>
    </div>
  );
}

export function PrestationsMainCard() {
  const { main } = prestationsContent;
  return (
    <article className="group relative isolate flex w-full overflow-hidden rounded-[clamp(1.5rem,1.8vw,1.9rem)] border border-white/[0.085] bg-[#1c1720] shadow-[0_1.5rem_4rem_rgba(0,0,0,0.22),0_0_0_1px_rgba(168,85,247,0.018),inset_0_1px_0_rgba(255,255,255,0.035),inset_0_-1px_0_rgba(126,34,206,0.045)] transition-[border-color,box-shadow] duration-300 ease-out hover:border-white/[0.16] hover:shadow-[0_1.5rem_4rem_rgba(0,0,0,0.22),0_0_0_1px_rgba(216,180,254,0.07),0_0_1.35rem_rgba(168,85,247,0.045),inset_0_1px_0_rgba(255,255,255,0.075),inset_0_-1px_0_rgba(168,85,247,0.07)]">
      <MainCardBackground />
      <div className="relative z-10 flex w-full items-stretch">
        <div className="flex shrink-0 flex-col justify-between px-[clamp(1.75rem,2.6vw,3rem)] pt-[clamp(1.6rem,2.15vw,2.4rem)] pb-[clamp(3.6rem,4.2vw,4.5rem)]">
          <h3 className="prestations-title-shimmer whitespace-nowrap font-[family-name:var(--font-main)] text-[clamp(2rem,2.5vw,3rem)] font-bold leading-[1.02] tracking-[-0.035em]">{main.title}</h3>
          <p className="pt-[clamp(1.9rem,2.45vw,2.7rem)] text-[clamp(.95rem,1.02vw,1.075rem)] font-normal leading-[1.6] tracking-[-0.01em] text-white/50">{main.shortDescription.line1}<br />{main.shortDescription.line2}</p>
        </div>

        <div className="flex shrink-0 items-end px-[clamp(.75rem,1vw,1.25rem)] pb-[clamp(.4rem,.55vw,.55rem)]">
          <div className="flex h-[clamp(2.25rem,2.45vw,2.5rem)] w-[clamp(3.1rem,3.35vw,3.4rem)] items-center justify-center">
            <div aria-hidden="true" className="flex h-[clamp(2.1rem,2.3vw,2.35rem)] w-[clamp(2.85rem,3.1vw,3.15rem)] items-center justify-center rounded-[.75rem] border border-white/[0.08] bg-white/[0.045] shadow-[inset_0_1px_0_rgba(255,255,255,0.045),0_0.35rem_1rem_rgba(0,0,0,0.12)] backdrop-blur-[2px] transition-[width,height,transform,background-color,border-color,box-shadow] duration-300 ease-out group-hover:h-[clamp(2.25rem,2.45vw,2.5rem)] group-hover:w-[clamp(3.1rem,3.35vw,3.4rem)] group-hover:translate-y-[2px] group-hover:border-white/[0.14] group-hover:bg-white/[0.065] group-hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.075),0_0.45rem_1.25rem_rgba(0,0,0,0.15)]">
              <ChevronDown className="h-[clamp(1.05rem,1.15vw,1.2rem)] w-[clamp(1.05rem,1.15vw,1.2rem)] stroke-[1.8] text-white/72 transition-[width,height,color] duration-300 ease-out group-hover:h-[clamp(1.15rem,1.25vw,1.3rem)] group-hover:w-[clamp(1.15rem,1.25vw,1.3rem)] group-hover:text-white/90" />
            </div>
          </div>
        </div>

        <div className="w-[50%] shrink-0">
          <MainCardVisual />
        </div>
      </div>
    </article>
  );
}

function MainCardVisual() {
  return (
    <div aria-hidden="true" className="pointer-events-none flex h-full w-full items-center [container-type:inline-size]">
      <div className="relative aspect-[700/245] w-full [--scene-u:calc(100cqw/700)]">
        <div className="absolute left-[50%] top-1/2 h-[calc(205*var(--scene-u))] w-[calc(465*var(--scene-u))] -translate-x-1/2 -translate-y-1/2 rounded-[50%] bg-[radial-gradient(ellipse,rgba(109,207,211,0.055)_0%,rgba(109,207,211,0.018)_44%,transparent_74%)] blur-[calc(22*var(--scene-u))]" />
        <BetaDesktop />
        <BetaMobile />
      </div>
    </div>
  );
}

function BetaDesktop() {
  return (
    <div className="absolute left-[calc(145*var(--scene-u))] top-[calc(18.5*var(--scene-u))] z-20 h-[calc(205*var(--u))] w-[calc(350*var(--u))] [--u:calc(100cqw/690)]">
      <div className="absolute inset-0 rounded-[calc(15*var(--u))] bg-[linear-gradient(145deg,#5a5d61_0%,#2a2f34_10%,#101419_58%,#292e33_100%)] p-[calc(5*var(--u))] shadow-[0_17px_32px_rgba(0,0,0,0.30),inset_0_1px_0_rgba(255,255,255,0.23),0_0_0_1px_rgba(255,255,255,0.065)]">

        <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(10.5*var(--u))] bg-[#f5f8f8] shadow-[inset_0_0_0_1px_rgba(16,24,28,0.11)]">
          <div className="flex h-[calc(30*var(--u))] shrink-0 items-center border-b border-[#142126]/[0.07] bg-white px-[calc(10*var(--u))]">
            <div className="flex items-center gap-[calc(5*var(--u))]">
              <BetaMark className="size-[calc(14*var(--u))]" />
              <span className="font-[family-name:var(--font-main)] text-[calc(8.6*var(--u))] font-black tracking-[0.055em] text-[#142126]">BETA</span>
            </div>

            <div className="mx-auto flex items-center gap-[calc(3.5*var(--u))]">
              <DesktopNavIcon active><Home /></DesktopNavIcon>
              <DesktopNavIcon><Bell /></DesktopNavIcon>
              <DesktopNavIcon><CalendarDays /></DesktopNavIcon>
              <DesktopNavIcon><MessageCircle /></DesktopNavIcon>
            </div>
          </div>

          <div className="flex min-h-0 flex-1 flex-col bg-[#f2f5f5] px-[calc(10*var(--u))] py-[calc(8*var(--u))]">
            <div className="flex h-[calc(28*var(--u))] shrink-0 items-center gap-[calc(6*var(--u))] rounded-[calc(7*var(--u))] border border-[#142126]/[0.07] bg-white px-[calc(7*var(--u))] shadow-[0_3px_10px_rgba(20,33,38,0.035)]">
            <div className="relative size-[calc(16.5*var(--u))] overflow-hidden rounded-full shadow-[inset_0_0_0_1px_rgba(20,33,38,0.10)]"><Image src={leo} alt="" fill sizes="32px" className="object-cover" /></div>
              <span className="text-[clamp(6.1px,calc(6*var(--u)),7.5px)] font-medium leading-none text-[#46565c]">Léo, partager une idée avec la communauté...</span>
              <span className="ml-auto flex size-[calc(15*var(--u))] items-center justify-center rounded-[calc(4.5*var(--u))] bg-[#e8f5f5] text-[#23858d]"><ImageIcon className="size-[calc(7.5*var(--u))]" strokeWidth={1.8} /></span>
            </div>

            <div className="mt-[calc(6*var(--u))] grid min-h-0 flex-1 grid-cols-[1.46fr_.78fr] gap-[calc(6*var(--u))]">
              <div className="flex min-h-0 flex-col overflow-hidden rounded-[calc(8*var(--u))] border border-[#142126]/[0.07] bg-white shadow-[0_4px_13px_rgba(20,33,38,0.04)]">
                <div className="flex shrink-0 items-center gap-[calc(5*var(--u))] px-[calc(7*var(--u))] py-[calc(5.5*var(--u))]">
                <div className="relative size-[calc(16.5*var(--u))] overflow-hidden rounded-full shadow-[inset_0_0_0_1px_rgba(20,33,38,0.10)]"><Image src={tom} alt="" fill sizes="32px" className="object-cover" /></div>

                  <div>
                    <span className="block text-[clamp(6.25px,calc(5.8*var(--u)),7.5px)] font-bold leading-none text-[#18262b]">Tom Michaëlis</span>
                    <span className="mt-[clamp(1px,calc(.7*var(--u)),2px)] block text-[clamp(5px,calc(4.3*var(--u)),6px)] font-medium leading-none text-[#66767c]">13 min · Aix-en-Provence</span>
                  </div>
                  <MoreHorizontal className="ml-auto size-[calc(8.5*var(--u))] text-[#68777d]" />
                </div>

                <div className="shrink-0 px-[calc(7*var(--u))] pb-[calc(5.5*var(--u))] text-[clamp(6px,calc(5*var(--u)),7px)] font-medium leading-[1.3] text-[#394a50]">Nouvelle défaite de nos chèvres 🐐</div>

                <div className="relative min-h-0 flex-1 overflow-hidden"><Image src={velodrome} alt="" fill sizes="320px" className="object-cover object-[center_87%]" /></div>

                <div className="flex h-[calc(21*var(--u))] shrink-0 items-center gap-[calc(11*var(--u))] px-[calc(7*var(--u))] text-[#526269]">
                  <span className="flex items-center gap-[calc(3*var(--u))]">
                    <span className="flex h-[calc(8*var(--u))] items-center">
                      <Heart className="size-[calc(6.8*var(--u))]" />
                    </span>
                    <span className="flex h-[calc(8*var(--u))] items-center text-[clamp(5.25px,calc(4.7*var(--u)),6.25px)] font-medium leading-none">128</span>
                  </span>

                  <span className="flex items-center gap-[calc(3*var(--u))]">
                    <span className="flex h-[calc(8*var(--u))] items-center">
                      <MessageCircle className="size-[calc(6.8*var(--u))]" />
                    </span>
                    <span className="flex h-[calc(8*var(--u))] items-center text-[clamp(5.25px,calc(4.7*var(--u)),6.25px)] font-medium leading-none">24</span>
                  </span>
                </div>
              </div>

              <div className="grid h-full min-h-0 grid-rows-2 gap-[calc(6*var(--u))]">
                <div className="flex min-h-0 flex-col rounded-[calc(8*var(--u))] border border-[#142126]/[0.07] bg-white p-[calc(7*var(--u))] shadow-[0_4px_13px_rgba(20,33,38,0.04)]">
                  <div className="flex items-center justify-between">
                    <span className="text-[clamp(5px,calc(4.4*var(--u)),6px)] font-bold uppercase leading-none tracking-[0.055em] text-[#237c84]">À découvrir</span>
                    <CalendarDays className="size-[calc(7.8*var(--u))] text-[#2a8c94]" />
                  </div>

                  <span className="mt-[calc(4*var(--u))] block text-[clamp(6.25px,calc(6*var(--u)),7.5px)] font-bold leading-[1.15] text-[#17252a]">Atelier théâtre</span>
                  <span className="mt-[calc(2*var(--u))] block text-[clamp(5.25px,calc(4.6*var(--u)),6.25px)] font-medium leading-none text-[#65757b]">Ce soir · 19:00</span>

                  <div className="mt-auto flex items-center pt-[calc(5*var(--u))]">
                    <div className="relative -ml-[calc(2.5*var(--u))] size-[calc(10*var(--u))] overflow-hidden rounded-full border border-white"><Image src={ines} alt="" fill sizes="20px" className="object-cover" /></div>
                    <div className="relative -ml-[calc(2.5*var(--u))] size-[calc(10*var(--u))] overflow-hidden rounded-full border border-white"><Image src={alvina} alt="" fill sizes="20px" className="object-cover" /></div>
                    <div className="relative -ml-[calc(2.5*var(--u))] size-[calc(10*var(--u))] overflow-hidden rounded-full border border-white"><Image src={sophie} alt="" fill sizes="20px" className="object-cover" /></div>
                    <span className="ml-[calc(3*var(--u))] text-[clamp(5px,calc(4.3*var(--u)),6px)] font-semibold text-[#5d6d73]">+18</span>
                  </div>
                </div>

                <div className="flex min-h-0 flex-col rounded-[calc(8*var(--u))] border border-[#142126]/[0.06] bg-[linear-gradient(145deg,#eaf6f6,#d9eeee)] p-[calc(7*var(--u))]">
                  <span className="block text-[clamp(5px,calc(4.3*var(--u)),6px)] font-bold uppercase leading-none tracking-[0.055em] text-[#287981]">Autour de vous</span>
                  <span className="mt-[calc(4*var(--u))] block text-[clamp(5.75px,calc(5.5*var(--u)),7px)] font-bold leading-[1.2] text-[#203338]">3 communautés à explorer</span>

                  <div className="mt-auto grid grid-cols-3 gap-[calc(3*var(--u))] pt-[calc(5*var(--u))]">
                    <span className="relative h-[calc(14*var(--u))] overflow-hidden rounded-[calc(4*var(--u))] shadow-[inset_0_0_0_1px_rgba(49,127,134,0.08)]"><Image src={poker} alt="" fill sizes="80px" className="object-cover" /></span>
                    <span className="relative h-[calc(14*var(--u))] overflow-hidden rounded-[calc(4*var(--u))] shadow-[inset_0_0_0_1px_rgba(49,127,134,0.08)]"><Image src={simpsons} alt="" fill sizes="80px" className="object-cover" /></span>
                    <span className="relative flex h-[calc(14*var(--u))] items-center justify-center overflow-hidden rounded-[calc(4*var(--u))] bg-[#10a8d2] shadow-[inset_0_0_0_1px_rgba(49,127,134,0.08)]"><Image src={om} alt="" fill sizes="40px" className="object-contain p-[calc(var(--u))]" /></span>                  
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function BetaMobile() {
  return (
    <div className="absolute left-[calc(457*var(--scene-u))] top-[calc(23*var(--scene-u))] z-30 h-[calc(210*var(--u))] w-[calc(112*var(--u))] rounded-[calc(23*var(--u))] bg-[linear-gradient(145deg,#5a5e62_0%,#292e33_9%,#0e1216_56%,#262b30_100%)] p-[calc(4.5*var(--u))] shadow-[0_20px_31px_rgba(0,0,0,0.34),inset_0_1px_0_rgba(255,255,255,0.19),0_0_0_1px_rgba(255,255,255,0.07)] [--u:calc(100cqw/720)]">
      <div className="relative h-full overflow-hidden rounded-[calc(18.5*var(--u))] bg-[#f5f8f8] shadow-[inset_0_0_0_1px_rgba(16,24,28,0.10)]">
        <span className="absolute left-1/2 top-[calc(4.5*var(--u))] z-30 h-[calc(7*var(--u))] w-[calc(27*var(--u))] -translate-x-1/2 rounded-full bg-[#080c0f]" />

        <div className="flex h-[calc(30*var(--u))] items-end justify-between bg-white px-[calc(8*var(--u))] pb-[calc(3*var(--u))]">
          <div className="flex items-center gap-[calc(4*var(--u))]">
            <BetaMark className="size-[clamp(10.5px,calc(11.5*var(--u)),14px)]" />
            <span className="text-[clamp(6.75px,calc(6.8*var(--u)),8.5px)] font-black leading-none tracking-[0.045em] text-[#142126]">BETA</span>
          </div>
          <div className="relative size-[calc(12*var(--u))] overflow-hidden rounded-full shadow-[inset_0_0_0_1px_rgba(20,33,38,0.10)]"><Image src={leo} alt="" fill sizes="32px" className="object-cover" /></div>
        </div>

        <div className="px-[calc(8*var(--u))] pt-[calc(5*var(--u))]">
          <span className="block text-[calc(9.5*var(--u))] font-black tracking-[-0.03em] text-[#17252a]">Messages</span>

          <div className="mt-[calc(5*var(--u))] flex h-[clamp(14px,calc(16*var(--u)),18px)] items-center gap-[calc(4.5*var(--u))] rounded-[calc(6*var(--u))] bg-[#e9eeee] px-[calc(6*var(--u))] text-[#69797f]">
            <Search className="size-[clamp(6.75px,calc(7.2*var(--u)),9px)]" strokeWidth={2} />
            <span className="-mt-[1%] text-[clamp(5.5px,calc(4.9*var(--u)),6.5px)] font-medium">Rechercher</span>
          </div>
        </div>

        <div className="mt-[calc(6*var(--u))] px-[calc(5*var(--u))]">
          <ConversationRow name="Iryna" preview="Noudna !" time="2m" />
          <ConversationRow name="Maman" preview="Viens à la maison" time="4h" unread="1" />
          <ConversationRow name="Emma" preview="Pokebowl ?" time="Hier" active />
        </div>

        <div className="absolute inset-x-0 bottom-0 flex h-[clamp(20.5px,calc(24*var(--u)),25px)] items-center justify-around border-t border-[#142126]/[0.07] bg-white px-[calc(7*var(--u))]">
          <MobileNavIcon><Home /></MobileNavIcon>
          <MobileNavIcon><Bell /></MobileNavIcon>
          <MobileNavIcon><CalendarDays /></MobileNavIcon>
          <MobileNavIcon active><MessageCircle /></MobileNavIcon>
        </div>
      </div>
    </div>
  );
}

function BetaMark({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none">
      <path d="M5 12C5 8.7 7.2 6.5 10.4 6.5H14.2C17.1 6.5 19 8.2 19 10.5C19 12.9 17 14.5 14.2 14.5H10.7C8.3 14.5 6.7 16 6.7 18.2" stroke="#238b94" strokeWidth="2.4" strokeLinecap="round" />
      <circle cx="5" cy="12" r="2" fill="#238b94" />
      <circle cx="19" cy="10.5" r="2" fill="#63cbd0" />
    </svg>
  );
}

function DesktopNavIcon({ children, active = false }: { children: ReactNode; active?: boolean }) {
  return <span className={`flex size-[calc(20*var(--u))] items-center justify-center rounded-[calc(5.5*var(--u))] ${active ? "bg-[#def1f1] text-[#23858d]" : "text-[#718086]"}`}><span className="[&>svg]:size-[calc(9*var(--u))] [&>svg]:stroke-[1.8]">{children}</span></span>;
}

function MobileNavIcon({ children, active = false }: { children: ReactNode; active?: boolean }) {
  return <span className={`flex size-[clamp(16px,calc(18*var(--u)),19px)] items-center justify-center rounded-[calc(5.5*var(--u))] ${active ? "bg-[#def1f1] text-[#23858d]" : "text-[#829095]"}`}><span className="[&>svg]:size-[clamp(8px,calc(8.5*var(--u)),9.5px)] [&>svg]:stroke-[1.8]">{children}</span></span>;
}

function ConversationRow({ name, preview, time, unread, active = false }: { name: string; preview: string; time: string; unread?: string; active?: boolean; }) {
  return (
    <div className="flex h-[clamp(23px,calc(30*var(--u)),32px)] items-center gap-[calc(5.5*var(--u))] rounded-[calc(7*var(--u))] px-[calc(4*var(--u))]">
    
    <div className="relative size-[clamp(15.5px,calc(19*var(--u)),20px)] shrink-0">
      <div className="relative size-full overflow-hidden rounded-full"><Image src={profiles[name.toLowerCase() as keyof typeof profiles]} alt={`Photo de profil de ${name}`} fill sizes="20px" className="object-cover" /></div>
      {active && <span className="absolute bottom-0 right-0.5 size-[clamp(4px,calc(5*var(--u)),5px)] translate-x-[25%] translate-y-[25%] rounded-full border-[1px] border-[#f5f8f8] bg-[#4fbf79]" />}
    </div>

      <div className="min-w-0 flex-1">
        <span className="block truncate text-[clamp(6.5px,calc(6.5*var(--u)),7.5px)] font-bold leading-none text-[#26353a]">{name}</span>
        <span className="mt-[4%] block truncate text-[clamp(6px,calc(6*var(--u)),7px)] font-medium leading-none text-[#69797f]">{preview}</span>
      </div>

      <div className="flex shrink-0 flex-col items-end gap-[clamp(1px,calc(2*var(--u)),2px)]">
        <span className="text-[clamp(5px,calc(4.5*var(--u)),6px)] font-medium leading-none text-[#77868b]">{time}</span>
        {unread && <span className="flex size-[clamp(7px,calc(8*var(--u)),8.5px)] items-center justify-center rounded-full bg-[#2b929a] text-[clamp(4.4px,calc(4*var(--u)),5px)] font-bold leading-none text-white">{unread}</span>}
      </div>
    </div>
  );
}

function MainCardBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
      <div className="absolute inset-0 bg-[linear-gradient(116deg,#251b29_0%,#211922_27%,#1b171e_61%,#1d1722_100%)]" />
      <div className="absolute -left-[11%] -top-[72%] h-[172%] w-[52%] rounded-full bg-[radial-gradient(ellipse,rgba(168,85,247,0.135)_0%,rgba(126,34,206,0.064)_40%,rgba(88,28,135,0.018)_62%,transparent_76%)] blur-[clamp(2.4rem,3.8vw,4.25rem)]" />
      <div className="absolute left-[14%] bottom-[-118%] h-[150%] w-[58%] rounded-full bg-[radial-gradient(ellipse,rgba(126,34,206,0.070)_0%,rgba(147,51,234,0.026)_46%,transparent_72%)] blur-[clamp(2.8rem,4.2vw,4.75rem)]" />
      <div className="absolute inset-0 bg-[linear-gradient(100deg,rgba(255,255,255,0.020)_0%,rgba(255,255,255,0.008)_24%,transparent_47%,rgba(99,102,241,0.014)_78%,rgba(192,132,252,0.018)_100%)]" />
      <div className="absolute inset-0 shadow-[inset_0_0_4rem_rgba(8,6,10,0.08)]" />
    </div>
  );
}

function PrestationsSecondaryCard({ title, illustration }: { title: string; illustration?: ReactNode }) {
  return (
    <article className="group relative isolate flex min-w-0 flex-1 flex-col overflow-hidden rounded-[clamp(1.4rem,1.6vw,1.7rem)] border border-white/[0.085] bg-[#1c1720] shadow-[0_1.5rem_4rem_rgba(0,0,0,0.18),0_0_0_1px_rgba(168,85,247,0.018),inset_0_1px_0_rgba(255,255,255,0.035),inset_0_-1px_0_rgba(126,34,206,0.045)] transition-[border-color,box-shadow] duration-300 ease-out hover:border-white/[0.16] hover:shadow-[0_1.5rem_4rem_rgba(0,0,0,0.20),0_0_0_1px_rgba(216,180,254,0.06),0_0_1.2rem_rgba(168,85,247,0.035),inset_0_1px_0_rgba(255,255,255,0.07),inset_0_-1px_0_rgba(168,85,247,0.06)]">
      <SecondaryCardBackground />

      <div className="relative z-10 flex flex-1 flex-col px-[clamp(1.4rem,1.7vw,1.8rem)] pt-[clamp(1.35rem,1.6vw,1.7rem)] pb-[clamp(.4rem,.55vw,.55rem)]">
        <div className="h-[clamp(7rem,9vw,9.5rem)] w-full">{illustration}</div>
        
        <h3 className="prestations-title-shimmer mt-[clamp(1rem,1.2vw,1.3rem)] text-center font-[family-name:var(--font-main)] text-[clamp(1.25rem,1.45vw,1.55rem)] font-bold leading-[1.08] tracking-[-0.025em]">
          {title}
        </h3>

        <div className="mt-[clamp(1rem,1.15vw,1.2rem)] flex h-[clamp(2.25rem,2.45vw,2.5rem)] w-[clamp(3.1rem,3.35vw,3.4rem)] shrink-0 self-center items-center justify-center">
          <div aria-hidden="true" className="flex h-[clamp(2.1rem,2.3vw,2.35rem)] w-[clamp(2.85rem,3.1vw,3.15rem)] items-center justify-center rounded-[.75rem] border border-white/[0.08] bg-white/[0.045] shadow-[inset_0_1px_0_rgba(255,255,255,0.045),0_0.35rem_1rem_rgba(0,0,0,0.12)] backdrop-blur-[2px] transition-[width,height,transform,background-color,border-color,box-shadow] duration-300 ease-out group-hover:h-[clamp(2.25rem,2.45vw,2.5rem)] group-hover:w-[clamp(3.1rem,3.35vw,3.4rem)] group-hover:translate-y-[2px] group-hover:border-white/[0.14] group-hover:bg-white/[0.065] group-hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.075),0_0.45rem_1.25rem_rgba(0,0,0,0.15)]">
            <ChevronDown className="h-[clamp(1.05rem,1.15vw,1.2rem)] w-[clamp(1.05rem,1.15vw,1.2rem)] stroke-[1.8] text-white/72 transition-[width,height,color] duration-300 ease-out group-hover:h-[clamp(1.15rem,1.25vw,1.3rem)] group-hover:w-[clamp(1.15rem,1.25vw,1.3rem)] group-hover:text-white/90" />
          </div>
        </div>
      </div>
    </article>
  );
}

function SitesExperienceVisual() {
  return (
    <div aria-hidden="true" className="h-full w-full [container-type:inline-size]">
      <div className="relative mx-auto h-full w-full [--u:calc(100cqw/360)]">
        <div className="absolute left-[calc(10*var(--u))] top-0 h-[calc(148*var(--u))] w-[calc(340*var(--u))]">
          <WebBrowserVisual />
        </div>
      </div>
    </div>
  );
}

function WebBrowserVisual() {
  return (
    <svg className="h-full w-full overflow-visible" viewBox="0 0 340 150" fill="none">
      <defs>
        {/* Structure browser */}
        <linearGradient id="web-browser-depth" x1="22" y1="20" x2="326" y2="140" gradientUnits="userSpaceOnUse">
          <stop stopColor="#dfe3e7" />
          <stop offset=".5" stopColor="#aeb5bc" />
          <stop offset="1" stopColor="#747c84" />
        </linearGradient>

        <linearGradient id="web-browser-frame" x1="15" y1="8" x2="327" y2="138" gradientUnits="userSpaceOnUse">
          <stop stopColor="#ffffff" />
          <stop offset=".42" stopColor="#f8f9fa" />
          <stop offset="1" stopColor="#e5e8eb" />
        </linearGradient>

        <linearGradient id="web-browser-topbar" x1="10" y1="8" x2="330" y2="33" gradientUnits="userSpaceOnUse">
          <stop stopColor="#fafbfc" />
          <stop offset=".55" stopColor="#eef1f3" />
          <stop offset="1" stopColor="#e4e7ea" />
        </linearGradient>

        <linearGradient id="web-browser-toolbar" x1="10" y1="31" x2="330" y2="58" gradientUnits="userSpaceOnUse">
          <stop stopColor="#f7f8f9" />
          <stop offset="1" stopColor="#eceff1" />
        </linearGradient>

        {/* Univers du viewport */}
        <linearGradient id="web-stage" x1="16" y1="58" x2="323" y2="140" gradientUnits="userSpaceOnUse">
          <stop stopColor="#fbf9fd" />
          <stop offset=".34" stopColor="#f4eef8" />
          <stop offset=".68" stopColor="#eee5f4" />
          <stop offset="1" stopColor="#faf5fb" />
        </linearGradient>

        <radialGradient id="web-stage-lilac" cx="0" cy="0" r="1" gradientTransform="translate(74 105) rotate(-12) scale(116 76)" gradientUnits="userSpaceOnUse">
          <stop stopColor="#cba3d8" stopOpacity=".24" />
          <stop offset=".46" stopColor="#ad7cbe" stopOpacity=".07" />
          <stop offset="1" stopColor="#ad7cbe" stopOpacity="0" />
        </radialGradient>

        <radialGradient id="web-stage-purple" cx="0" cy="0" r="1" gradientTransform="translate(177 92) rotate(90) scale(68 128)" gradientUnits="userSpaceOnUse">
          <stop stopColor="#8b559d" stopOpacity=".20" />
          <stop offset=".48" stopColor="#734381" stopOpacity=".06" />
          <stop offset="1" stopColor="#734381" stopOpacity="0" />
        </radialGradient>

        <radialGradient id="web-stage-pink" cx="0" cy="0" r="1" gradientTransform="translate(291 102) rotate(150) scale(102 72)" gradientUnits="userSpaceOnUse">
          <stop stopColor="#db86b8" stopOpacity=".19" />
          <stop offset=".5" stopColor="#c66da8" stopOpacity=".055" />
          <stop offset="1" stopColor="#c66da8" stopOpacity="0" />
        </radialGradient>

        <linearGradient id="web-glass-lilac" x1="42" y1="70" x2="82" y2="96" gradientUnits="userSpaceOnUse">
          <stop stopColor="#f2e3f6" stopOpacity=".86" />
          <stop offset=".45" stopColor="#c99cd4" stopOpacity=".44" />
          <stop offset="1" stopColor="#8b589a" stopOpacity=".13" />
        </linearGradient>

        <linearGradient id="web-glass-purple" x1="248" y1="64" x2="289" y2="96" gradientUnits="userSpaceOnUse">
          <stop stopColor="#eedcf4" stopOpacity=".84" />
          <stop offset=".48" stopColor="#b887c8" stopOpacity=".43" />
          <stop offset="1" stopColor="#70417f" stopOpacity=".12" />
        </linearGradient>

        <linearGradient id="web-glass-pink" x1="278" y1="101" x2="317" y2="130" gradientUnits="userSpaceOnUse">
          <stop stopColor="#f8ddec" stopOpacity=".82" />
          <stop offset=".5" stopColor="#df94bd" stopOpacity=".40" />
          <stop offset="1" stopColor="#9d4c7d" stopOpacity=".12" />
        </linearGradient>

        {/* Trail lumineux */}
        <linearGradient id="web-light-trail" x1="45" y1="130" x2="306" y2="71" gradientUnits="userSpaceOnUse">
          <stop stopColor="#67dadd" stopOpacity="0" />
          <stop offset=".22" stopColor="#67dadd" stopOpacity=".55" />
          <stop offset=".55" stopColor="#a471c1" stopOpacity=".58" />
          <stop offset=".82" stopColor="#e682bd" stopOpacity=".55" />
          <stop offset="1" stopColor="#e682bd" stopOpacity="0" />
        </linearGradient>

        {/* Fragments verre */}
        <linearGradient id="web-glass-cyan" x1="53" y1="72" x2="83" y2="102" gradientUnits="userSpaceOnUse">
          <stop stopColor="#b9ffff" stopOpacity=".72" />
          <stop offset=".5" stopColor="#62d8dd" stopOpacity=".30" />
          <stop offset="1" stopColor="#248e98" stopOpacity=".08" />
        </linearGradient>

        <linearGradient id="web-glass-purple" x1="237" y1="68" x2="270" y2="100" gradientUnits="userSpaceOnUse">
          <stop stopColor="#eed8fa" stopOpacity=".72" />
          <stop offset=".48" stopColor="#b98bdd" stopOpacity=".30" />
          <stop offset="1" stopColor="#72509b" stopOpacity=".08" />
        </linearGradient>

        <linearGradient id="web-glass-pink" x1="274" y1="105" x2="304" y2="130" gradientUnits="userSpaceOnUse">
          <stop stopColor="#ffd8ef" stopOpacity=".66" />
          <stop offset=".5" stopColor="#e88ac4" stopOpacity=".25" />
          <stop offset="1" stopColor="#a34b94" stopOpacity=".06" />
        </linearGradient>

        <filter id="web-browser-shadow" x="-20%" y="-35%" width="150%" height="190%">
          <feDropShadow dx="0" dy="9" stdDeviation="7" floodColor="#050406" floodOpacity=".34" />
        </filter>

        <filter id="web-floor-blur" x="-30%" y="-100%" width="170%" height="300%">
          <feGaussianBlur stdDeviation="5" />
        </filter>

        <filter id="web-trail-glow" x="-30%" y="-100%" width="170%" height="300%">
          <feGaussianBlur stdDeviation="4" />
        </filter>

        <filter id="web-fragment-shadow" x="-60%" y="-60%" width="220%" height="220%">
          <feDropShadow dx="0" dy="3" stdDeviation="2.5" floodColor="#3c2445" floodOpacity=".18" />
        </filter>

        <clipPath id="web-browser-clip">
          <rect x="9" y="7" width="322" height="130" rx="12" />
        </clipPath>
      </defs>

      {/* Ombre de l'objet */}
      <ellipse cx="170" cy="142" rx="142" ry="6" fill="#060407" opacity=".17" filter="url(#web-floor-blur)" />

      {/* Épaisseur */}
      <rect x="14" y="12" width="322" height="130" rx="12" fill="url(#web-browser-depth)" />
      <path d="M20 132H322C329 132 333 128 336 122V131C336 138 331 142 323 142H26C19 142 15 139 14 132H20Z" fill="#8d969d" opacity=".68" />
      <path d="M331 21C334 25 336 30 336 35V129C336 135 333 138 329 140V27C329 24 330 22 331 21Z" fill="#717a82" opacity=".48" />

      {/* Face */}
      <rect x="9" y="7" width="322" height="130" rx="12" fill="url(#web-browser-frame)" stroke="#c5cbd0" strokeWidth="1.35" filter="url(#web-browser-shadow)" />

      <g clipPath="url(#web-browser-clip)">
        {/* Topbar */}
        <rect x="9" y="7" width="322" height="24" fill="url(#web-browser-topbar)" />
        <path d="M9 30.5H331" stroke="#cfd4d8" strokeWidth=".8" />

        <circle cx="21" cy="19" r="3.5" fill="#ff5f57" />
        <circle cx="32" cy="19" r="3.5" fill="#febc2e" />
        <circle cx="43" cy="19" r="3.5" fill="#28c840" />

        {/* Onglet */}
        <path d="M58 13C58 10.8 59.8 9 62 9H188C190.2 9 192 10.8 192 13V30H58V13Z" fill="#ffffff" stroke="#d8dde1" strokeWidth=".8" />

        <image href={browserFavicon.src} x="65" y="15" width="8.5" height="8.5" />

        <text x="78" y="21.2" fill="#30353a" fontSize="5.8" fontWeight="600">
          Léo Michaëlis | Ingénieur logiciel
        </text>

        <path d="M183 16L187 20M187 16L183 20" stroke="#959ba1" strokeWidth=".8" strokeLinecap="round" />

        {/* Toolbar */}
        <rect x="9" y="31" width="322" height="26" fill="url(#web-browser-toolbar)" />

        {/* navigation */}
        <path d="M22 44H28M22 44L25 41M22 44L25 47" stroke="#697077" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M37 44H43M43 44L40 41M43 44L40 47" stroke="#aeb3b8" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />

        <path d="M55 40.7A4.2 4.2 0 1 0 56 46.5" stroke="#697077" strokeWidth="1.05" strokeLinecap="round" />
        <path d="M56 39.6L56.6 43.3L52.9 42.5" stroke="#697077" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />

        {/* adresse */}
        <rect x="65" y="36.5" width="251" height="15" rx="7.5" fill="#fff" stroke="#d2d6da" strokeWidth=".8" />

        <circle cx="75" cy="44" r="4.8" fill="#e9edf6" />

        <path d="M72 42H73.5M76 42H78M72 46H74.4M76.8 46H78" stroke="#30343a" strokeWidth=".8" strokeLinecap="round" />
        <circle cx="74.8" cy="42" r=".95" stroke="#30343a" strokeWidth=".8" />
        <circle cx="75.7" cy="46" r=".95" stroke="#30343a" strokeWidth=".8" />

        <text x="84" y="45.9" fill="#3d4348" fontSize="5.5" fontWeight="500">
          leomichaelis.fr
        </text>

       <path d="M306 40.2L307.2 42.7L310 43L308 45L308.5 47.8L306 46.5L303.5 47.8L304 45L302 43L304.8 42.7L306 40.2Z" fill="#f6c84c" stroke="#dba92d" strokeWidth=".7" strokeLinejoin="round" />

        {/* VIEWPORT */}
        <rect x="9" y="57" width="322" height="80" fill="url(#web-stage)" />

        {/* Atmosphère */}
        <ellipse cx="74" cy="105" rx="116" ry="76" fill="url(#web-stage-lilac)" />
        <ellipse cx="177" cy="92" rx="128" ry="68" fill="url(#web-stage-purple)" />
        <ellipse cx="291" cy="102" rx="102" ry="72" fill="url(#web-stage-pink)" />

        {/* Formes flottantes - gauche */}
        <g filter="url(#web-fragment-shadow)">
          <path d="M42 82L65 70L82 79L65 94L43 90L42 82Z" fill="url(#web-glass-lilac)" stroke="#b88aca" strokeOpacity=".28" strokeWidth=".8" />
          <path d="M65 94L82 79L80 88L66 100L65 94Z" fill="#684474" fillOpacity=".18" />
          <path d="M43 82L65 70L82 79L60 86L43 82Z" fill="#ead9f0" fillOpacity=".42" />
        </g>

        {/* Petite forme arrière gauche */}
        <g opacity=".45" filter="url(#web-fragment-shadow)">
          <path d="M87 68L101 62L111 70L99 80L85 76L87 68Z" fill="#b486c4" fillOpacity=".24" />
          <path d="M99 80L111 70L109 76L100 84L99 80Z" fill="#65406f" fillOpacity=".16" />
        </g>

        {/* Forme haute droite */}
        <g filter="url(#web-fragment-shadow)">
          <path d="M252 70L274 64L289 76L269 91L248 84L252 70Z" fill="url(#web-glass-purple)" stroke="#a773ba" strokeOpacity=".28" strokeWidth=".8" />
          <path d="M269 91L289 76L286 86L271 97L269 91Z" fill="#593364" fillOpacity=".18" />
          <path d="M252 70L274 64L289 76L266 80L252 70Z" fill="#ead7ef" fillOpacity=".40" />
        </g>

        {/* Forme basse droite */}
        <g filter="url(#web-fragment-shadow)" opacity=".82">
          <path d="M281 108L302 101L317 112L299 128L278 121L281 108Z" fill="url(#web-glass-pink)" stroke="#cb72ad" strokeOpacity=".26" strokeWidth=".8" />
          <path d="M299 128L317 112L314 121L301 133L299 128Z" fill="#76365f" fillOpacity=".18" />
        </g>

        {/* Petites plaques flottantes */}
        <g opacity=".65">
          <rect x="60" y="114" width="13" height="5" rx="1.5" transform="rotate(-16 60 114)" fill="#8e5c9d" fillOpacity=".18" />
          <rect x="229" y="112" width="15" height="5" rx="1.5" transform="rotate(18 229 112)" fill="#a56ab3" fillOpacity=".17" />
          <rect x="248" y="94" width="8" height="3.5" rx="1" transform="rotate(-24 248 94)" fill="#d083b6" fillOpacity=".18" />
        </g>

        {/* Particules */}
        <g opacity=".55">
          <circle cx="93" cy="118" r="1.3" fill="#9863a8" />
          <circle cx="103" cy="123" r=".8" fill="#c398ce" />
          <circle cx="230" cy="77" r="1.1" fill="#a66ab6" />
          <circle cx="287" cy="91" r="1.2" fill="#d67bb5" />
          <circle cx="296" cy="84" r=".8" fill="#efafd5" />
        </g>

        {/* Symbole */}
        <g transform="translate(80 61)">
          <DevSymbol />
        </g>

        {/* Reflet sur le verre */}
        <path d="M22 62C85 57 147 59 204 68C252 75 291 89 322 107" stroke="white" strokeWidth="6" strokeLinecap="round" opacity=".075" />
      </g>

      {/* Highlight coque */}
      <path d="M21 8H317C324 8 329 12 330 19" stroke="white" strokeWidth="1.2" strokeLinecap="round" opacity=".88" />
    </svg>
  );
}

function DevSymbol() {
  return (
    <svg width="180" height="70" viewBox="0 0 180 70" fill="none">
      <defs>
        <linearGradient id="dev-front" x1="21" y1="7" x2="157" y2="63" gradientUnits="userSpaceOnUse">
          <stop stopColor="#594860" />
          <stop offset=".22" stopColor="#302337" />
          <stop offset=".52" stopColor="#100c13" />
          <stop offset=".78" stopColor="#1c1220" />
          <stop offset="1" stopColor="#58325f" />
        </linearGradient>

        <linearGradient id="dev-slash" x1="80" y1="4" x2="104" y2="65" gradientUnits="userSpaceOnUse">
          <stop stopColor="#71517a" />
          <stop offset=".25" stopColor="#38283e" />
          <stop offset=".56" stopColor="#100c13" />
          <stop offset=".82" stopColor="#25152a" />
          <stop offset="1" stopColor="#603568" />
        </linearGradient>

        <linearGradient id="dev-side" x1="35" y1="20" x2="145" y2="61" gradientUnits="userSpaceOnUse">
          <stop stopColor="#845692" />
          <stop offset=".46" stopColor="#4d2e56" />
          <stop offset="1" stopColor="#241429" />
        </linearGradient>

        <linearGradient id="dev-top-light" x1="28" y1="8" x2="150" y2="41" gradientUnits="userSpaceOnUse">
          <stop stopColor="#f1d9f5" stopOpacity=".72" />
          <stop offset=".28" stopColor="#c38ace" stopOpacity=".36" />
          <stop offset=".72" stopColor="#70417b" stopOpacity=".07" />
          <stop offset="1" stopColor="#ffffff" stopOpacity="0" />
        </linearGradient>

        <radialGradient id="dev-glow" cx="0" cy="0" r="1" gradientTransform="translate(90 36) rotate(90) scale(31 71)" gradientUnits="userSpaceOnUse">
          <stop stopColor="#9b5cab" stopOpacity=".23" />
          <stop offset=".48" stopColor="#784486" stopOpacity=".065" />
          <stop offset="1" stopColor="#784486" stopOpacity="0" />
        </radialGradient>

        <filter id="dev-shadow" x="-40%" y="-60%" width="180%" height="240%">
          <feDropShadow dx="0" dy="6" stdDeviation="4" floodColor="#120c15" floodOpacity=".38" />
        </filter>

        <filter id="dev-glow-blur" x="-50%" y="-70%" width="200%" height="240%">
          <feGaussianBlur stdDeviation="5.5" />
        </filter>
      </defs>

      <ellipse cx="90" cy="36" rx="69" ry="30" fill="url(#dev-glow)" filter="url(#dev-glow-blur)" />

      <g filter="url(#dev-shadow)">
        {/* < */}
        <path d="M52 8L17 34L52 61L62 52L39 34L62 17L52 8Z" fill="url(#dev-front)" stroke="#65446d" strokeWidth=".85" />

        {/* vraie tranche basse */}
        <path d="M17 34L52 61L62 52L59 57L52 65L14 37L17 34Z" fill="url(#dev-side)" opacity=".9" />

        {/* highlight supérieur */}
        <path d="M51 10L21 32L39 32L59 17L51 10Z" fill="url(#dev-top-light)" opacity=".62" />

        {/* / */}
        <path d="M95 4L108 8L86 64L73 60L95 4Z" fill="url(#dev-slash)" stroke="#65446d" strokeWidth=".85" />

        {/* tranche droite uniquement */}
        <path d="M108 8L86 64L82 63L103 9.5L108 8Z" fill="url(#dev-side)" opacity=".82" />

        {/* highlight */}
        <path d="M96 6L103 8L86 50L81 48.6L96 6Z" fill="url(#dev-top-light)" opacity=".55" />

        {/* > */}
        <path d="M128 8L163 34L128 61L118 52L141 34L118 17L128 8Z" fill="url(#dev-front)" stroke="#65446d" strokeWidth=".85" />

        {/* vraie tranche basse */}
        <path d="M163 34L128 61L118 52L121 57L128 65L166 37L163 34Z" fill="url(#dev-side)" opacity=".9" />

        {/* highlight supérieur */}
        <path d="M129 10L159 32L141 32L121 17L129 10Z" fill="url(#dev-top-light)" opacity=".62" />
      </g>
    </svg>
  );
}

function AutomationDataVisual() {
  return (
    <div aria-hidden="true" className="h-full w-full">
      <svg className="h-full w-full overflow-visible" viewBox="0 0 360 150" fill="none">
        <defs>
          <radialGradient id="gear-face" cx="0" cy="0" r="1" gradientTransform="translate(68 43) rotate(48) scale(95 95)" gradientUnits="userSpaceOnUse">
            <stop stopColor="#69636d" />
            <stop offset=".22" stopColor="#49434d" />
            <stop offset=".52" stopColor="#29232c" />
            <stop offset=".78" stopColor="#171419" />
            <stop offset="1" stopColor="#302533" />
          </radialGradient>

          <linearGradient id="gear-edge" x1="55" y1="30" x2="153" y2="118" gradientUnits="userSpaceOnUse">
            <stop stopColor="#d3b4dc" stopOpacity=".7" />
            <stop offset=".26" stopColor="#8d5e99" stopOpacity=".38" />
            <stop offset=".67" stopColor="#583360" stopOpacity=".15" />
            <stop offset="1" stopColor="#231428" stopOpacity=".05" />
          </linearGradient>

          <linearGradient id="db-front" x1="218" y1="37" x2="320" y2="123" gradientUnits="userSpaceOnUse">
            <stop stopColor="#4c4253" />
            <stop offset=".25" stopColor="#2a222e" />
            <stop offset=".56" stopColor="#100d12" />
            <stop offset=".82" stopColor="#1d1522" />
            <stop offset="1" stopColor="#38253f" />
          </linearGradient>

          <linearGradient id="db-top" x1="230" y1="35" x2="307" y2="55" gradientUnits="userSpaceOnUse">
            <stop stopColor="#77627e" />
            <stop offset=".35" stopColor="#3f3445" />
            <stop offset=".72" stopColor="#1c171f" />
            <stop offset="1" stopColor="#51405a" />
          </linearGradient>

          <linearGradient id="db-rim" x1="225" y1="31" x2="309" y2="55" gradientUnits="userSpaceOnUse">
            <stop stopColor="#d9c4df" stopOpacity=".62" />
            <stop offset=".3" stopColor="#9a70a5" stopOpacity=".32" />
            <stop offset=".75" stopColor="#5c3966" stopOpacity=".12" />
            <stop offset="1" stopColor="#ffffff" stopOpacity="0" />
          </linearGradient>

          <radialGradient id="automation-glow" cx="0" cy="0" r="1" gradientTransform="translate(177 77) rotate(90) scale(72 156)" gradientUnits="userSpaceOnUse">
            <stop stopColor="#8a5697" stopOpacity=".17" />
            <stop offset=".5" stopColor="#70417d" stopOpacity=".055" />
            <stop offset="1" stopColor="#70417d" stopOpacity="0" />
          </radialGradient>

          <filter id="automation-shadow" x="-35%" y="-40%" width="180%" height="200%">
            <feDropShadow dx="0" dy="8" stdDeviation="6" floodColor="#070509" floodOpacity=".42" />
          </filter>

          <filter id="automation-soft-glow" x="-50%" y="-60%" width="200%" height="220%">
            <feGaussianBlur stdDeviation="8" />
          </filter>
        </defs>

        {/* Halo général */}
        <ellipse cx="177" cy="78" rx="155" ry="68" fill="url(#automation-glow)" filter="url(#automation-soft-glow)" />

        {/* Engrenages */}
        <g filter="url(#automation-shadow)">
          <g transform="translate(75 75)">
            <GearShape size={54} teeth={10} fill="url(#gear-face)" stroke="#5b4d60" />

            <circle r="33" fill="none" stroke="url(#gear-edge)" strokeWidth="2.2" opacity=".8" />
            <circle r="29" fill="none" stroke="#d6b8dd" strokeWidth=".8" opacity=".12" />

            <circle r="13" fill="#0c090e" stroke="#7d5787" strokeWidth="2" />
            <circle r="6" fill="#312437" />

            <path d="M-27 -22A35 35 0 0 1 12 -33" stroke="#ead7ee" strokeWidth="2.2" strokeLinecap="round" opacity=".34" />
          </g>

          <g transform="translate(135 98)">
            <GearShape size={38} teeth={9} fill="url(#gear-face)" stroke="#554759" />

            <circle r="23" fill="none" stroke="url(#gear-edge)" strokeWidth="1.8" opacity=".7" />
            <circle r="20" fill="none" stroke="#d6b8dd" strokeWidth=".7" opacity=".11" />

            <circle r="9" fill="#0c090e" stroke="#75507e" strokeWidth="1.7" />
            <circle r="4" fill="#322438" />

            <path d="M-18 -14A24 24 0 0 1 8 -22" stroke="#ead7ee" strokeWidth="1.8" strokeLinecap="round" opacity=".30" />
          </g>
        </g>

        {/* Transition automatisation → données */}
        <g opacity=".5">
          <path d="M174 76C185 76 197 76 210 76" stroke="#855491" strokeWidth="1.4" strokeDasharray="2 5" strokeLinecap="round" />
          <circle cx="183" cy="76" r="2.4" fill="#9c6aaa" />
          <circle cx="197" cy="76" r="2" fill="#71437e" />
        </g>

        {/* Database */}
        <g filter="url(#automation-shadow)">
          <path d="M218 51C218 42 240 35 269 35C298 35 320 42 320 51V111C320 121 298 129 269 129C240 129 218 121 218 111V51Z" fill="url(#db-front)" stroke="#62436c" strokeWidth="1.2" />

          <ellipse cx="269" cy="51" rx="51" ry="16" fill="url(#db-top)" stroke="#74507e" strokeWidth="1.4" />
          <ellipse cx="269" cy="49" rx="43" ry="11" fill="none" stroke="url(#db-rim)" strokeWidth="2" opacity=".65" />

          <path d="M218 71C218 81 240 89 269 89C298 89 320 81 320 71" stroke="#8d6198" strokeWidth="1.4" opacity=".54" />
          <path d="M218 92C218 102 240 110 269 110C298 110 320 102 320 92" stroke="#8d6198" strokeWidth="1.4" opacity=".44" />
          <path d="M218 110C218 120 240 128 269 128C298 128 320 120 320 110" stroke="#b38abd" strokeWidth="1.4" opacity=".38" />

          <path d="M227 57V105" stroke="#d9c2df" strokeWidth="1.7" strokeLinecap="round" opacity=".16" />
          <path d="M312 58V103" stroke="#6b4375" strokeWidth="2" strokeLinecap="round" opacity=".28" />

          <g opacity=".75">
            <circle cx="235" cy="70" r="2.3" fill="#aa79b5" />
            <circle cx="235" cy="91" r="2.3" fill="#8d5b99" />
            <circle cx="235" cy="111" r="2.3" fill="#72447e" />
          </g>

          <path d="M237 45C251 40 284 39 301 45" stroke="#eadcf0" strokeWidth="2" strokeLinecap="round" opacity=".22" />
        </g>
      </svg>
    </div>
  );
}

function GearShape({ size, teeth, fill, stroke }: { size: number; teeth: number; fill: string; stroke: string }) {
  const outer = size;
  const root = size * 0.78;
  const points: string[] = [];

  for (let i = 0; i < teeth * 4; i++) {
    const angle = (Math.PI * 2 * i) / (teeth * 4) - Math.PI / 2;
    const phase = i % 4;
    const radius = phase === 1 || phase === 2 ? outer : root;
    points.push(`${Math.cos(angle) * radius},${Math.sin(angle) * radius}`);
  }

  return <polygon points={points.join(" ")} fill={fill} stroke={stroke} strokeWidth="1.4" strokeLinejoin="round" />;
}

function ExistingEvolutionVisual() {
  return (
    <div aria-hidden="true" className="h-full w-full">
      <svg className="h-full w-full overflow-visible" viewBox="0 0 360 150" fill="none">
        <defs>
          {/* BARRES */}
          <linearGradient id="evo-bar-1" x1="55" y1="69" x2="88" y2="130" gradientUnits="userSpaceOnUse">
            <stop stopColor="#89e7e9" />
            <stop offset=".28" stopColor="#3bbfc5" />
            <stop offset=".72" stopColor="#197d86" />
            <stop offset="1" stopColor="#10525b" />
          </linearGradient>

          <linearGradient id="evo-bar-2" x1="106" y1="57" x2="139" y2="130" gradientUnits="userSpaceOnUse">
            <stop stopColor="#7dd8ca" />
            <stop offset=".28" stopColor="#36b8a7" />
            <stop offset=".72" stopColor="#247d76" />
            <stop offset="1" stopColor="#15534f" />
          </linearGradient>

          <linearGradient id="evo-bar-3" x1="157" y1="42" x2="190" y2="130" gradientUnits="userSpaceOnUse">
            <stop stopColor="#c3a1e5" />
            <stop offset=".27" stopColor="#9164c4" />
            <stop offset=".72" stopColor="#61418c" />
            <stop offset="1" stopColor="#392750" />
          </linearGradient>

          <linearGradient id="evo-bar-4" x1="208" y1="22" x2="241" y2="130" gradientUnits="userSpaceOnUse">
            <stop stopColor="#f0a3d4" />
            <stop offset=".26" stopColor="#cf6bb2" />
            <stop offset=".68" stopColor="#913e86" />
            <stop offset="1" stopColor="#5b2859" />
          </linearGradient>

          {/* Faces latérales */}
          <linearGradient id="evo-side-1" x1="82" y1="80" x2="99" y2="131" gradientUnits="userSpaceOnUse">
            <stop stopColor="#218c94" />
            <stop offset="1" stopColor="#0c3d44" />
          </linearGradient>

          <linearGradient id="evo-side-2" x1="133" y1="66" x2="150" y2="131" gradientUnits="userSpaceOnUse">
            <stop stopColor="#27877f" />
            <stop offset="1" stopColor="#103f3c" />
          </linearGradient>

          <linearGradient id="evo-side-3" x1="184" y1="49" x2="201" y2="131" gradientUnits="userSpaceOnUse">
            <stop stopColor="#64438b" />
            <stop offset="1" stopColor="#2b1d3e" />
          </linearGradient>

          <linearGradient id="evo-side-4" x1="235" y1="30" x2="252" y2="131" gradientUnits="userSpaceOnUse">
            <stop stopColor="#9c4b91" />
            <stop offset="1" stopColor="#472143" />
          </linearGradient>

          {/* Faces supérieures */}
          <linearGradient id="evo-top-1" x1="54" y1="67" x2="96" y2="76" gradientUnits="userSpaceOnUse">
            <stop stopColor="#c9ffff" />
            <stop offset=".55" stopColor="#62d4d8" />
            <stop offset="1" stopColor="#248e96" />
          </linearGradient>

          <linearGradient id="evo-top-2" x1="105" y1="55" x2="147" y2="64" gradientUnits="userSpaceOnUse">
            <stop stopColor="#c9f9ed" />
            <stop offset=".55" stopColor="#66cdbd" />
            <stop offset="1" stopColor="#328d84" />
          </linearGradient>

          <linearGradient id="evo-top-3" x1="156" y1="40" x2="198" y2="49" gradientUnits="userSpaceOnUse">
            <stop stopColor="#eadbfa" />
            <stop offset=".55" stopColor="#b78bdd" />
            <stop offset="1" stopColor="#7550a0" />
          </linearGradient>

          <linearGradient id="evo-top-4" x1="207" y1="20" x2="249" y2="29" gradientUnits="userSpaceOnUse">
            <stop stopColor="#ffd8ef" />
            <stop offset=".55" stopColor="#e98bc5" />
            <stop offset="1" stopColor="#a54c96" />
          </linearGradient>

          {/* Flèche */}
          <linearGradient id="evo-arrow" x1="67" y1="90" x2="301" y2="26" gradientUnits="userSpaceOnUse">
            <stop stopColor="#344447" />
            <stop offset=".22" stopColor="#172326" />
            <stop offset=".5" stopColor="#0b0c0f" />
            <stop offset=".73" stopColor="#19121c" />
            <stop offset="1" stopColor="#42243f" />
          </linearGradient>

          <linearGradient id="evo-arrow-light" x1="72" y1="78" x2="294" y2="21" gradientUnits="userSpaceOnUse">
            <stop stopColor="#8fe4e5" stopOpacity=".55" />
            <stop offset=".34" stopColor="#77d6c8" stopOpacity=".34" />
            <stop offset=".66" stopColor="#b98bdd" stopOpacity=".40" />
            <stop offset="1" stopColor="#ee8bc7" stopOpacity=".60" />
          </linearGradient>

          {/* Halo général */}
          <radialGradient id="evo-glow" cx="0" cy="0" r="1" gradientTransform="translate(178 82) rotate(90) scale(70 148)" gradientUnits="userSpaceOnUse">
            <stop stopColor="#b271c0" stopOpacity=".12" />
            <stop offset=".36" stopColor="#5fbfc0" stopOpacity=".055" />
            <stop offset=".68" stopColor="#c869ac" stopOpacity=".04" />
            <stop offset="1" stopColor="#ffffff" stopOpacity="0" />
          </radialGradient>

          <filter id="evo-shadow" x="-30%" y="-35%" width="170%" height="190%">
            <feDropShadow dx="0" dy="8" stdDeviation="6" floodColor="#070508" floodOpacity=".40" />
          </filter>

          <filter id="evo-soft-glow" x="-40%" y="-50%" width="180%" height="210%">
            <feGaussianBlur stdDeviation="8" />
          </filter>

          <filter id="evo-arrow-shadow" x="-25%" y="-40%" width="160%" height="190%">
            <feDropShadow dx="0" dy="5" stdDeviation="4" floodColor="#08060a" floodOpacity=".42" />
          </filter>
        </defs>

        {/* lumière globale */}
        <ellipse cx="178" cy="82" rx="147" ry="67" fill="url(#evo-glow)" filter="url(#evo-soft-glow)" />

        {/* sol / ombre */}
        <ellipse cx="160" cy="132" rx="111" ry="8" fill="#080609" opacity=".19" filter="url(#evo-soft-glow)" />

        {/* BARRE 1 */}
        <g filter="url(#evo-shadow)">
          <path d="M50 81L80 74L94 81V128L64 134L50 127V81Z" fill="url(#evo-bar-1)" />
          <path d="M80 74L94 81V128L80 121V74Z" fill="url(#evo-side-1)" opacity=".94" />
          <path d="M50 81L80 74L94 81L64 88L50 81Z" fill="url(#evo-top-1)" />
          <path d="M55 89V121" stroke="white" strokeWidth="2" strokeLinecap="round" opacity=".18" />
        </g>

        {/* BARRE 2 */}
        <g filter="url(#evo-shadow)">
          <path d="M101 66L131 59L145 66V128L115 134L101 127V66Z" fill="url(#evo-bar-2)" />
          <path d="M131 59L145 66V128L131 121V59Z" fill="url(#evo-side-2)" opacity=".94" />
          <path d="M101 66L131 59L145 66L115 73L101 66Z" fill="url(#evo-top-2)" />
          <path d="M106 75V120" stroke="white" strokeWidth="2" strokeLinecap="round" opacity=".18" />
        </g>

        {/* BARRE 3 */}
        <g filter="url(#evo-shadow)">
          <path d="M152 49L182 42L196 49V128L166 134L152 127V49Z" fill="url(#evo-bar-3)" />
          <path d="M182 42L196 49V128L182 121V42Z" fill="url(#evo-side-3)" opacity=".94" />
          <path d="M152 49L182 42L196 49L166 56L152 49Z" fill="url(#evo-top-3)" />
          <path d="M157 59V119" stroke="white" strokeWidth="2" strokeLinecap="round" opacity=".16" />
        </g>

        {/* BARRE 4 */}
        <g filter="url(#evo-shadow)">
          <path d="M203 29L233 22L247 29V128L217 134L203 127V29Z" fill="url(#evo-bar-4)" />
          <path d="M233 22L247 29V128L233 121V22Z" fill="url(#evo-side-4)" opacity=".94" />
          <path d="M203 29L233 22L247 29L217 36L203 29Z" fill="url(#evo-top-4)" />
          <path d="M208 40V118" stroke="white" strokeWidth="2" strokeLinecap="round" opacity=".15" />
        </g>

        {/* petites lumières au pied */}
        <g opacity=".62">
          <circle cx="64" cy="122" r="2.3" fill="#8de5e8" />
          <circle cx="115" cy="122" r="2.3" fill="#72d5c5" />
          <circle cx="166" cy="122" r="2.3" fill="#b18bda" />
          <circle cx="217" cy="122" r="2.3" fill="#e887c2" />
        </g>

        {/* FLÈCHE */}
        <g filter="url(#evo-arrow-shadow)">
          <path
            d="M59 99C92 98 119 91 145 79C172 67 197 51 222 35C239 24 253 17 269 12L264 3L302 8L286 43L279 31C265 36 252 43 237 53C211 70 184 87 155 99C125 112 94 118 60 118L59 99Z"
            fill="url(#evo-arrow)"
            stroke="#49364f"
            strokeWidth="1.2"
            strokeLinejoin="round"
          />

          <path
            d="M65 102C96 101 122 94 148 82C175 69 200 54 225 38C243 26 255 20 272 15"
            stroke="url(#evo-arrow-light)"
            strokeWidth="2.4"
            strokeLinecap="round"
            opacity=".85"
          />
        </g>
      </svg>
    </div>
  );
}

function SecondaryCardBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
      <div className="absolute inset-0 bg-[linear-gradient(150deg,#251b29_0%,#211922_38%,#1b171e_72%,#1d1722_100%)]" />
      <div className="absolute -left-[28%] -top-[30%] h-[72%] w-[82%] rounded-full bg-[radial-gradient(ellipse,rgba(168,85,247,0.12)_0%,rgba(126,34,206,0.055)_42%,transparent_74%)] blur-[clamp(2.2rem,3vw,3.5rem)]" />
      <div className="absolute -bottom-[38%] right-[-28%] h-[72%] w-[82%] rounded-full bg-[radial-gradient(ellipse,rgba(126,34,206,0.06)_0%,rgba(147,51,234,0.025)_48%,transparent_72%)] blur-[clamp(2.4rem,3.4vw,3.8rem)]" />
      <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.018)_0%,transparent_45%,rgba(192,132,252,0.014)_100%)]" />
      <div className="absolute inset-0 shadow-[inset_0_0_3.5rem_rgba(8,6,10,0.08)]" />
    </div>
  );
}