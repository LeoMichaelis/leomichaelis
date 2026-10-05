"use client";

import { useState, type KeyboardEvent, type ReactNode } from "react";
import { ArrowRight, ChevronDown, Rocket } from "lucide-react";
import { prestationsContent } from "@/content/prestations";
import { AutomationDataVisual, ExistingEvolutionVisual, MainCardVisual, SitesExperienceVisual } from "./PrestationsIllustrations";

type CardId = "main" | "secondary" | "third" | "fourth";
type SecondaryCardId = Exclude<CardId, "main">;
type SecondaryCardContent = typeof prestationsContent.secondary | typeof prestationsContent.third | typeof prestationsContent.fourth;

export function PrestationsCards() {
  const [expandedCard, setExpandedCard] = useState<CardId | null>(null);

  const toggleCard = (card: CardId) => setExpandedCard(current => current === card ? null : card);

  return (
    <div className="flex flex-col gap-[clamp(1rem,1.35vw,1.4rem)]">
      <PrestationsMainCard expanded={expandedCard === "main"} onToggle={() => toggleCard("main")} />
      <div className="flex items-start gap-[clamp(1rem,1.35vw,1.4rem)]">
        <PrestationsSecondaryCard cardId="secondary" content={prestationsContent.secondary} illustration={<SitesExperienceVisual />} expanded={expandedCard === "secondary"} onToggle={() => toggleCard("secondary")} />
        <PrestationsSecondaryCard cardId="third" content={prestationsContent.third} illustration={<AutomationDataVisual />} expanded={expandedCard === "third"} onToggle={() => toggleCard("third")} />
        <PrestationsSecondaryCard cardId="fourth" content={prestationsContent.fourth} illustration={<ExistingEvolutionVisual />} expanded={expandedCard === "fourth"} onToggle={() => toggleCard("fourth")} />
      </div>
    </div>
  );
}

export function PrestationsMainCard({ expanded, onToggle }: { expanded: boolean; onToggle: () => void }) {
  const { main } = prestationsContent;
  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key !== "Enter" && event.key !== " ") return;
    event.preventDefault();
    onToggle();
  };

  return (
    <article className={`prestations-main-card relative isolate flex w-full flex-col [--expanded-pt:clamp(1.8rem,2.35vw,2.6rem)] [--expanded-eyebrow-size:clamp(1.5rem,1.62vw,1.68rem)] [--expanded-description-gap:clamp(1.2rem,1.5vw,1.6rem)] overflow-hidden rounded-[clamp(1.5rem,1.8vw,1.9rem)] border border-white/[0.085] bg-[#1c1720] shadow-[0_1.5rem_4rem_rgba(0,0,0,0.22),0_0_0_1px_rgba(168,85,247,0.018),inset_0_1px_0_rgba(255,255,255,0.035),inset_0_-1px_0_rgba(126,34,206,0.045)] transition-[border-color,box-shadow] duration-300 ease-out ${expanded ? "" : "group hover:border-white/[0.16] hover:shadow-[0_1.5rem_4rem_rgba(0,0,0,0.22),0_0_0_1px_rgba(216,180,254,0.07),0_0_1.35rem_rgba(168,85,247,0.045),inset_0_1px_0_rgba(255,255,255,0.075),inset_0_-1px_0_rgba(168,85,247,0.07)]"}`}>
      <MainCardBackground />

      <div role={!expanded ? "button" : undefined} tabIndex={!expanded ? 0 : undefined} aria-expanded={!expanded ? false : undefined} aria-controls={!expanded ?"main-prestation-expanded" : undefined} aria-label={!expanded ? `Déplier ${main.title}` : undefined} onClick={!expanded ? onToggle : undefined} onKeyDown={!expanded ? handleKeyDown : undefined} className={`relative z-10 flex w-full items-stretch focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-inset focus-visible:ring-[#c084fc]/35 ${expanded ? "" : "cursor-pointer"}`}>
        <div className="flex shrink-0 flex-col justify-between px-[clamp(1.75rem,2.6vw,3rem)] pt-[clamp(1.6rem,2.15vw,2.4rem)] pb-[clamp(3.6rem,4.2vw,4.5rem)]">
          <h3 className="prestations-title-shimmer whitespace-nowrap font-[family-name:var(--font-main)] text-[clamp(2rem,2.5vw,3rem)] font-bold leading-[1.02] tracking-[-0.035em]">{main.title}</h3>
          <p className="pt-[clamp(1.9rem,2.45vw,2.7rem)] text-[clamp(.95rem,1.02vw,1.075rem)] font-normal leading-[1.6] tracking-[-0.01em] text-white/50">{main.shortDescription.line1}<br />{main.shortDescription.line2}</p>
        </div>

        <div aria-hidden="true" className="flex shrink-0 items-end px-[clamp(.75rem,1vw,1.25rem)] pb-[clamp(.4rem,.55vw,.55rem)]">
          <div className="h-[clamp(2.25rem,2.45vw,2.5rem)] w-[clamp(3.1rem,3.35vw,3.4rem)]" />
        </div>

        <div className="relative w-[50%] shrink-0 [container-type:inline-size] [--scene-u:calc(100cqw/700)]">
          <MainCardVisual />
          <div aria-hidden={!expanded} className={`pointer-events-none absolute left-[calc(145*var(--scene-u))] top-[calc(100%-1px)] z-20 pt-[calc(var(--expanded-pt)+var(--expanded-eyebrow-size)+var(--expanded-description-gap))] transition-[transform,opacity] duration-[480ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${expanded ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-[.6rem] opacity-0"}`}>
            <div className="flex w-[calc(424*var(--scene-u))] flex-col gap-[clamp(.65rem,.82vw,.85rem)]">
              {main.expanded.keywords.map((row, rowIndex) => (
                <div key={rowIndex} className="flex flex-nowrap items-center gap-[clamp(.4rem,.55vw,.65rem)]">
                  {row.map(capsule => (
                    <span key={capsule} className="whitespace-nowrap rounded-full border border-[#d8b4fe]/[0.15] bg-[#d8b4fe]/[0.065] px-[clamp(.7rem,.82vw,.9rem)] py-[clamp(.42rem,.5vw,.53rem)] text-[clamp(.67rem,.72vw,.775rem)] font-semibold leading-none tracking-[-0.01em] text-white/82 shadow-[inset_0_1px_0_rgba(255,255,255,0.045),0_.35rem_1rem_rgba(0,0,0,0.08)]">
                      {capsule}
                    </span>
                  ))}
                </div>
              ))}
              <div aria-hidden="true" className="mt-[clamp(.85rem,1.05vw,1.1rem)] flex items-center gap-[.32rem] ml-[.5vw]">
                <span className="size-[7px] rounded-full bg-[#d8b4fe]/25" />
                <span className="size-[7px] rounded-full bg-[#d8b4fe]/48" />
                <span className="size-[7px] rounded-full bg-[#d8b4fe]/25" />
              </div>
            </div>
          </div>
        </div>

      </div>

      <MainCardExpandedContent expanded={expanded} onToggle={onToggle} />

      <button type="button" tabIndex={expanded ? 0 : -1} aria-expanded={expanded} aria-controls="main-prestation-expanded" aria-label={expanded ? `Replier ${main.title}` : `Déplier ${main.title}`} onClick={onToggle} className="prestations-main-chevron group/chevron absolute bottom-[clamp(.4rem,.55vw,.55rem)] left-1/2 z-30 flex h-[clamp(2.25rem,2.45vw,2.5rem)] w-[clamp(3.1rem,3.35vw,3.4rem)] -translate-x-1/2 items-center justify-center rounded-[.75rem] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#c084fc]/40">
        <span className="prestations-main-chevron-box flex h-[clamp(2.1rem,2.3vw,2.35rem)] w-[clamp(2.85rem,3.1vw,3.15rem)] items-center justify-center rounded-[.75rem] border border-white/[0.08] bg-white/[0.045] shadow-[inset_0_1px_0_rgba(255,255,255,0.045),0_0.35rem_1rem_rgba(0,0,0,0.12)] backdrop-blur-[2px] transition-[width,height,transform,background-color,border-color,box-shadow] duration-300 ease-out group-hover:h-[clamp(2.25rem,2.45vw,2.5rem)] group-hover:w-[clamp(3.1rem,3.35vw,3.4rem)] group-hover:translate-y-[2px] group-hover:border-white/[0.14] group-hover:bg-white/[0.065] group-hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.075),0_0.45rem_1.25rem_rgba(0,0,0,0.15)] group-hover/chevron:h-[clamp(2.25rem,2.45vw,2.5rem)] group-hover/chevron:w-[clamp(3.1rem,3.35vw,3.4rem)] group-hover/chevron:translate-y-[2px] group-hover/chevron:border-white/[0.14] group-hover/chevron:bg-white/[0.065] group-hover/chevron:shadow-[inset_0_1px_0_rgba(255,255,255,0.075),0_0.45rem_1.25rem_rgba(0,0,0,0.15)]">
          <ChevronDown className={`prestations-main-chevron-icon h-[clamp(1.05rem,1.15vw,1.2rem)] w-[clamp(1.05rem,1.15vw,1.2rem)] stroke-[1.8] text-white/72 transition-[width,height,color,transform] duration-300 ease-out group-hover:h-[clamp(1.15rem,1.25vw,1.3rem)] group-hover:w-[clamp(1.15rem,1.25vw,1.3rem)] group-hover:text-white/90 group-hover/chevron:h-[clamp(1.15rem,1.25vw,1.3rem)] group-hover/chevron:w-[clamp(1.15rem,1.25vw,1.3rem)] group-hover/chevron:text-white/90 ${expanded ? "rotate-180" : ""}`} />
        </span>
      </button>
    </article>
  );
}

function MainCardExpandedContent({ expanded, onToggle }: { expanded: boolean; onToggle: () => void }) {
  const { expanded: content } = prestationsContent.main;

  return (
    <div id="main-prestation-expanded" aria-hidden={!expanded} className={`grid transition-[grid-template-rows,opacity] duration-[560ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${expanded ? "grid-rows-[1fr] opacity-100" : "pointer-events-none grid-rows-[0fr] opacity-0"}`}>
      <div className="min-h-0 overflow-hidden">
        <div aria-hidden="true" className="mx-[clamp(1.75rem,2.6vw,3rem)] h-px bg-white/[0.065]" />

       <div onClick={onToggle} className={`prestations-main-expanded-hit relative z-10 flex w-full cursor-pointer items-stretch transition-[transform,opacity] duration-[480ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${expanded ? "translate-y-0 opacity-100" : "-translate-y-[.6rem] opacity-0"}`}>
          <div className="flex min-w-0 flex-1 flex-col px-[clamp(1.75rem,2.6vw,3rem)] pt-[var(--expanded-pt)] pb-[clamp(4.3rem,5vw,5.2rem)]">
            <CardEyebrow>{content.eyebrow}</CardEyebrow>

            <p className="mt-[var(--expanded-description-gap)] max-w-[38vw] text-justify text-[clamp(.9rem,.98vw,1.025rem)] font-normal leading-[1.72] tracking-[-0.01em] text-white/50 whitespace-pre-line">
              {content.description}
            </p>

            <button type="button" tabIndex={expanded ? 0 : -1} onClick={event => event.stopPropagation()} className="group/cta relative mt-[clamp(1.55rem,2vw,2.1rem)] flex w-fit shrink-0 items-center gap-4 overflow-hidden whitespace-nowrap rounded-[17px] border border-white/[0.07] bg-[#2a1d31] px-5 py-3.5 text-[13px] font-bold text-white shadow-[0_18px_40px_rgba(39,20,48,0.22),inset_0_1px_0_rgba(255,255,255,0.09)] transition-all duration-300 hover:-translate-y-1 hover:border-[#c084fc]/20 hover:shadow-[0_24px_50px_rgba(76,29,149,0.26),inset_0_1px_0_rgba(255,255,255,0.12)]">
              <span aria-hidden="true" className="absolute inset-0 translate-x-[-120%] bg-[linear-gradient(110deg,transparent_22%,rgba(192,132,252,0.22)_50%,transparent_78%)] transition-transform duration-700 group-hover/cta:translate-x-[120%]" />
              <span className="relative">{content.cta}</span>
              <span className="relative flex size-7 items-center justify-center rounded-full border border-white/[0.1] bg-white/[0.07]">
                <ArrowRight size={14} />
              </span>
            </button>
          </div>

          <div aria-hidden="true" className="flex shrink-0 px-[clamp(.75rem,1vw,1.25rem)]">
            <div className="w-[clamp(3.1rem,3.35vw,3.4rem)]" />
          </div>

          <div className="w-[50%] shrink-0" />
        </div>
      </div>
    </div>
  );
}

function CardEyebrow({ children }: { children: string }) {
  return (
    <div className="flex min-w-0 items-center gap-2 text-[#d8b4fe]">
      <span aria-hidden="true" className="relative flex size-[var(--expanded-eyebrow-size)] shrink-0 items-center justify-center rounded-full border border-[#c084fc]/45">
        <Rocket className="size-[clamp(.76rem,.82vw,.86rem)] stroke-[1.8]" />
      </span>
      <p className="ml-1 whitespace-nowrap text-[clamp(.625rem,.67vw,.7rem)] font-bold uppercase tracking-[0.17em] text-[#d8b4fe]/82">{children}</p>
      <span aria-hidden="true" className="h-px min-w-0 max-w-[4.75rem] flex-1 bg-gradient-to-r from-[#c084fc]/50 to-transparent" />
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

function PrestationsSecondaryCard({ cardId, content, illustration, expanded, onToggle }: { cardId: SecondaryCardId; content: SecondaryCardContent; illustration?: ReactNode; expanded: boolean; onToggle: () => void }) {
  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key !== "Enter" && event.key !== " ") return;
    event.preventDefault();
    onToggle();
  };

  return (
    <article data-expanded={expanded} className={`prestations-secondary-card relative isolate flex min-w-0 flex-1 flex-col overflow-hidden rounded-[clamp(1.4rem,1.6vw,1.7rem)] border border-white/[0.085] bg-[#1c1720] shadow-[0_1.5rem_4rem_rgba(0,0,0,0.18),0_0_0_1px_rgba(168,85,247,0.018),inset_0_1px_0_rgba(255,255,255,0.035),inset_0_-1px_0_rgba(126,34,206,0.045)] transition-[border-color,box-shadow] duration-300 ease-out ${expanded ? "" : "group hover:border-white/[0.16] hover:shadow-[0_1.5rem_4rem_rgba(0,0,0,0.20),0_0_0_1px_rgba(216,180,254,0.06),0_0_1.2rem_rgba(168,85,247,0.035),inset_0_1px_0_rgba(255,255,255,0.07),inset_0_-1px_0_rgba(168,85,247,0.06)]"}`}>
      <SecondaryCardBackground />

      <div role={!expanded ? "button" : undefined} tabIndex={!expanded ? 0 : undefined} aria-expanded={!expanded ? false : undefined} aria-controls={!expanded ? `${cardId}-prestation-expanded` : undefined} aria-label={!expanded ? `Déplier ${content.title}` : undefined} onClick={!expanded ? onToggle : undefined} onKeyDown={!expanded ? handleKeyDown : undefined} className={`relative z-10 flex w-full flex-col px-[clamp(1.4rem,1.7vw,1.8rem)] pt-[clamp(1.35rem,1.6vw,1.7rem)] ${expanded ? "pb-[clamp(.8rem,1vw,1.05rem)]" : "pb-[clamp(.4rem,.55vw,.55rem)]"} focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-inset focus-visible:ring-[#c084fc]/35 ${expanded ? "" : "cursor-pointer"}`}>
        <div className="h-[clamp(7rem,9vw,9.5rem)] w-full">{illustration}</div>
        <h3 className="prestations-title-shimmer mt-[clamp(1rem,1.2vw,1.3rem)] text-center font-[family-name:var(--font-main)] text-[clamp(1.25rem,1.45vw,1.55rem)] font-bold leading-[1.08] tracking-[-0.025em]">{content.title}</h3>
        <div aria-hidden="true" className={`w-[clamp(3.1rem,3.35vw,3.4rem)] shrink-0 self-center transition-[height,margin-top] duration-[480ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${expanded ? "mt-0 h-0" : "mt-[clamp(1rem,1.15vw,1.2rem)] h-[clamp(2.25rem,2.45vw,2.5rem)]"}`} />
      </div>

      <SecondaryCardExpandedContent cardId={cardId} content={content.expanded} expanded={expanded} onToggle={onToggle} />

      <button type="button" tabIndex={expanded ? 0 : -1} aria-expanded={expanded} aria-controls={`${cardId}-prestation-expanded`} aria-label={expanded ? `Replier ${content.title}` : `Déplier ${content.title}`} onClick={onToggle} className="prestations-secondary-chevron group/secondary-chevron absolute bottom-[clamp(.4rem,.55vw,.55rem)] left-1/2 z-30 flex h-[clamp(2.25rem,2.45vw,2.5rem)] w-[clamp(3.1rem,3.35vw,3.4rem)] -translate-x-1/2 items-center justify-center rounded-[.75rem] focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#c084fc]/40">
        <span className="prestations-secondary-chevron-box flex h-[clamp(2.1rem,2.3vw,2.35rem)] w-[clamp(2.85rem,3.1vw,3.15rem)] items-center justify-center rounded-[.75rem] border border-white/[0.08] bg-white/[0.045] shadow-[inset_0_1px_0_rgba(255,255,255,0.045),0_0.35rem_1rem_rgba(0,0,0,0.12)] backdrop-blur-[2px] transition-[width,height,transform,background-color,border-color,box-shadow] duration-300 ease-out group-hover:h-[clamp(2.25rem,2.45vw,2.5rem)] group-hover:w-[clamp(3.1rem,3.35vw,3.4rem)] group-hover:translate-y-[2px] group-hover:border-white/[0.14] group-hover:bg-white/[0.065] group-hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.075),0_0.45rem_1.25rem_rgba(0,0,0,0.15)] group-hover/secondary-chevron:h-[clamp(2.25rem,2.45vw,2.5rem)] group-hover/secondary-chevron:w-[clamp(3.1rem,3.35vw,3.4rem)] group-hover/secondary-chevron:translate-y-[2px] group-hover/secondary-chevron:border-white/[0.14] group-hover/secondary-chevron:bg-white/[0.065] group-hover/secondary-chevron:shadow-[inset_0_1px_0_rgba(255,255,255,0.075),0_0.45rem_1.25rem_rgba(0,0,0,0.15)]">
          <ChevronDown className={`prestations-secondary-chevron-icon h-[clamp(1.05rem,1.15vw,1.2rem)] w-[clamp(1.05rem,1.15vw,1.2rem)] stroke-[1.8] text-white/72 transition-[width,height,color,transform] duration-300 ease-out group-hover:h-[clamp(1.15rem,1.25vw,1.3rem)] group-hover:w-[clamp(1.15rem,1.25vw,1.3rem)] group-hover:text-white/90 group-hover/secondary-chevron:h-[clamp(1.15rem,1.25vw,1.3rem)] group-hover/secondary-chevron:w-[clamp(1.15rem,1.25vw,1.3rem)] group-hover/secondary-chevron:text-white/90 ${expanded ? "rotate-180" : ""}`} />
        </span>
      </button>
    </article>
  );
}

function SecondaryCardExpandedContent({ cardId, content, expanded, onToggle }: { cardId: SecondaryCardId; content: SecondaryCardContent["expanded"]; expanded: boolean; onToggle: () => void }) {
  return (
    <div id={`${cardId}-prestation-expanded`} aria-hidden={!expanded} className={`grid transition-[grid-template-rows,opacity] duration-[560ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${expanded ? "grid-rows-[1fr] opacity-100" : "pointer-events-none grid-rows-[0fr] opacity-0"}`}>
      <div className="min-h-0 overflow-hidden">
        <div aria-hidden="true" className="mx-[clamp(1.4rem,1.7vw,1.8rem)] h-px bg-white/[0.065]" />

        <div onClick={onToggle} className={`prestations-secondary-expanded-hit relative z-10 flex cursor-pointer flex-col px-[clamp(1.4rem,1.7vw,1.8rem)] pt-[clamp(.8rem,1vw,1.05rem)] pb-[clamp(4.1rem,4.6vw,4.7rem)] transition-[transform,opacity] duration-[480ms] ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${expanded ? "translate-y-0 opacity-100" : "-translate-y-[.6rem] opacity-0"}`}>
          <p className="text-[clamp(.82rem,.88vw,.94rem)] text-justify font-normal leading-[1.68] tracking-[-0.01em] text-white/50">
            {content.description}
          </p>

          <div className="mt-[clamp(1.2rem,1.45vw,1.55rem)] [container-type:inline-size] flex flex-col gap-[.75em]">
            {content.keywords.map((row, rowIndex) => (
              <div key={rowIndex} className="flex flex-nowrap gap-[1.05em] text-[clamp(.54rem,3.1cqw,.82rem)]">
                {row.map(keyword => (
                  <span key={keyword} className="whitespace-nowrap rounded-full border border-[#d8b4fe]/[0.15] bg-[#d8b4fe]/[0.065] px-[1.02em] py-[.63em] font-semibold leading-none tracking-[-0.01em] text-white/82 shadow-[inset_0_1px_0_rgba(255,255,255,0.045),0_.35rem_1rem_rgba(0,0,0,0.08)]">
                    {keyword}
                  </span>
                ))}
              </div>
            ))}
          </div>

          <button type="button" tabIndex={expanded ? 0 : -1} onClick={event => event.stopPropagation()} className="group/cta relative mt-[clamp(1.7rem,2vw,2.1rem)] flex w-fit shrink-0 items-center gap-3 overflow-hidden whitespace-nowrap rounded-[15px] border border-white/[0.07] bg-[#2a1d31] px-4 py-3 text-[12px] font-bold text-white shadow-[0_14px_32px_rgba(39,20,48,0.20),inset_0_1px_0_rgba(255,255,255,0.09)] transition-all duration-300 hover:-translate-y-1 hover:border-[#c084fc]/20 hover:shadow-[0_20px_40px_rgba(76,29,149,0.24),inset_0_1px_0_rgba(255,255,255,0.12)]">
            <span aria-hidden="true" className="absolute inset-0 translate-x-[-120%] bg-[linear-gradient(110deg,transparent_22%,rgba(192,132,252,0.22)_50%,transparent_78%)] transition-transform duration-700 group-hover/cta:translate-x-[120%]" />
            <span className="relative">{content.cta}</span>
            <span className="relative flex size-6 items-center justify-center rounded-full border border-white/[0.1] bg-white/[0.07]">
              <ArrowRight size={12} />
            </span>
          </button>
        </div>
      </div>
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