"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState, type CSSProperties, type ReactNode } from "react";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { realisationsContent } from "@/content/realisations";
import { RealisationsSlideshowIllustration } from "./RealisationsSlideshowIllustrations";

const AUTOPLAY_DELAY = 10_000;
const TRANSITION_DURATION = 650;
const INITIAL_ACTIVE_INDEX = 1;

type Project = (typeof realisationsContent.projects)[number];
type Direction = "previous" | "next";
type CardSlot = -2 | -1 | 0 | 1 | 2;

type SlideshowContextValue = {
  activeIndex: number;
  slots: CardSlot[];
  transitionEnabled: boolean;
  isTransitioning: boolean;
  timerPaused: boolean;
  goPrevious: () => void;
  goNext: () => void;
  goToIndex: (index: number) => void;
  setActiveHovered: (hovered: boolean) => void;
};

const SlideshowContext = createContext<SlideshowContextValue | null>(null);

function useSlideshow() {
  const context = useContext(SlideshowContext);
  if (!context) throw new Error("Les composants du slideshow doivent être utilisés dans <RealisationsSlideshow>.");
  return context;
}

function wrapIndex(index: number) {
  const total = realisationsContent.projects.length;
  return (index + total) % total;
}

function getInitialSlots(activeIndex: number): CardSlot[] {
  const total = realisationsContent.projects.length;
  return realisationsContent.projects.map((_, index) => {
    const forwardDistance = (index - activeIndex + total) % total;
    return forwardDistance === 0 || forwardDistance === 1 ? forwardDistance : forwardDistance === total - 1 ? -1 : 2;
  });
}

function shiftSlot(slot: CardSlot, direction: Direction): CardSlot {
  return direction === "next"
    ? slot === 2 ? 1 : slot === 1 ? 0 : slot === 0 ? -1 : -2
    : slot === -2 ? -1 : slot === -1 ? 0 : slot === 0 ? 1 : 2;
}

function wait(duration: number) {
  return new Promise<void>((resolve) => window.setTimeout(resolve, duration));
}

function nextFrame() {
  return new Promise<void>((resolve) => window.requestAnimationFrame(() => resolve()));
}

export function RealisationsSlideshow({ children }: { children: ReactNode }) {
  const initialSlots = useMemo(() => getInitialSlots(INITIAL_ACTIVE_INDEX), []);
  const [activeIndex, setActiveIndex] = useState(INITIAL_ACTIVE_INDEX);
  const [slots, setSlots] = useState<CardSlot[]>(initialSlots);
  const [transitionEnabled, setTransitionEnabled] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isActiveHovered, setIsActiveHovered] = useState(false);
  const [isSectionVisible, setIsSectionVisible] = useState(false);

  const activeIndexRef = useRef(INITIAL_ACTIVE_INDEX);
  const slotsRef = useRef<CardSlot[]>(initialSlots);
  const transitionRef = useRef(false);
  const mountedRef = useRef(true);

  const applySlots = useCallback((nextSlots: CardSlot[]) => {
    slotsRef.current = nextSlots;
    setSlots(nextSlots);
  }, []);

  useEffect(() => {
    return () => {
      mountedRef.current = false;
    };
  }, []);

  useEffect(() => {
    const section = document.getElementById("realisations");
    if (!section) return;
    const observer = new IntersectionObserver(([entry]) => entry && setIsSectionVisible(entry.isIntersecting), { rootMargin: "-20% 0px -20% 0px", threshold: 0 });
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const navigate = useCallback(async (direction: Direction, steps = 1) => {
    if (transitionRef.current || steps <= 0) return;
    transitionRef.current = true;
    setIsTransitioning(true);
    setIsActiveHovered(false);
    const indexDelta = direction === "next" ? 1 : -1;
    for (let step = 0; step < steps; step++) {
      if (!mountedRef.current) return;
      const currentSlots = slotsRef.current;
      const normalizedSlots = currentSlots.map((slot) => direction === "next" && slot === -2 ? 2 : direction === "previous" && slot === 2 ? -2 : slot);
      const needsRebase = normalizedSlots.some((slot, index) => slot !== currentSlots[index]);
      if (needsRebase) {
        setTransitionEnabled(false);
        applySlots(normalizedSlots);
        await nextFrame();
        await nextFrame();
        if (!mountedRef.current) return;
        setTransitionEnabled(true);
        await nextFrame();
      }
      const shiftedSlots = normalizedSlots.map((slot) => shiftSlot(slot, direction));
      const nextIndex = wrapIndex(activeIndexRef.current + indexDelta);
      applySlots(shiftedSlots);
      activeIndexRef.current = nextIndex;
      setActiveIndex(nextIndex);
      await wait(TRANSITION_DURATION);
    }
    if (!mountedRef.current) return;
    setIsTransitioning(false);
    transitionRef.current = false;
  }, [applySlots]);

  const goPrevious = useCallback(() => {
    void navigate("previous");
  }, [navigate]);

  const goNext = useCallback(() => {
    void navigate("next");
  }, [navigate]);

  const goToIndex = useCallback((targetIndex: number) => {
    if (transitionRef.current) return;
    const currentIndex = activeIndexRef.current;
    if (targetIndex === currentIndex) return;
    const total = realisationsContent.projects.length;
    const forwardDistance = (targetIndex - currentIndex + total) % total;
    const backwardDistance = (currentIndex - targetIndex + total) % total;
    if (forwardDistance <= backwardDistance) void navigate("next", forwardDistance);
    else void navigate("previous", backwardDistance);
  }, [navigate]);

  const value = useMemo<SlideshowContextValue>(() => ({
    activeIndex,
    slots,
    transitionEnabled,
    isTransitioning,
    timerPaused: !isSectionVisible || isActiveHovered || isTransitioning,
    goPrevious,
    goNext,
    goToIndex,
    setActiveHovered: setIsActiveHovered,
  }), [activeIndex, slots, transitionEnabled, isTransitioning, isSectionVisible, isActiveHovered, goPrevious, goNext, goToIndex]);

  return (
    <SlideshowContext.Provider value={value}>
      <div className="relative isolate [container-type:inline-size] [--active-card-width:clamp(20.5rem,27vw,27rem)] [--side-card-width:clamp(15.5rem,23.7vw,23.75rem)] [--side-gap:clamp(.75rem,2.1cqw,2.1rem)] [--side-offset:clamp(1.25rem,2.2cqw,2rem)]">{children}</div>
    </SlideshowContext.Provider>
  );
}

export function RealisationsNavigation() {
  const { goPrevious, goNext } = useSlideshow();
  return (
    <nav aria-label="Navigation des réalisations" className="flex shrink-0 items-center gap-[clamp(.45rem,.65vw,.65rem)]">
      <NavigationButton direction="previous" onClick={goPrevious} />
      <NavigationButton direction="next" onClick={goNext} />
    </nav>
  );
}

function NavigationButton({ direction, onClick }: { direction: Direction; onClick: () => void }) {
  const previous = direction === "previous";
  const Icon = previous ? ArrowLeft : ArrowRight;
  return (
    <button type="button" aria-label={previous ? "Réalisation précédente" : "Réalisation suivante"} onClick={onClick} className="group/nav relative size-[clamp(2.7rem,3.2vw,3rem)] aspect-square shrink-0 appearance-none rounded-full border-0 bg-transparent p-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#c084fc]/35 focus-visible:ring-offset-[clamp(.12rem,.15vw,.15rem)] focus-visible:ring-offset-transparent">
      <span aria-hidden="true" className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden rounded-full bg-[linear-gradient(145deg,#5a3764_0%,#4b2b57_35%,#3d2249_68%,#321b3d_100%)] shadow-[0_10px_24px_rgba(58,31,69,0.24),0_4px_10px_rgba(32,17,39,0.16),inset_0_0_0_1px_rgba(221,185,234,0.16)] transition-[box-shadow] duration-300 group-hover/nav:shadow-[0_14px_30px_rgba(69,37,82,0.30),0_5px_12px_rgba(32,17,39,0.18),inset_0_0_0_1px_rgba(225,191,237,0.22)]">
        <span className="absolute inset-x-0 top-0 h-[55%] bg-[radial-gradient(ellipse_at_32%_-10%,rgba(224,177,239,0.28)_0%,rgba(195,126,216,0.14)_34%,rgba(157,87,181,0.045)_58%,transparent_76%)] transition-opacity duration-300 group-hover/nav:opacity-125" />
        {/* Lamelles usinées */}
        <span className={`pointer-events-none absolute inset-0 ${previous ? "-scale-x-100" : ""}`}>
          <span className="absolute right-[14%] top-[9%] h-[34%] w-[4%] rotate-[-38deg] rounded-full bg-[linear-gradient(180deg,#ead4f2_0%,#a75fba_100%)] opacity-70 transition-opacity duration-300 group-hover/nav:opacity-90" />
          <span className="absolute right-[24%] top-[18%] h-[26%] w-[4%] rotate-[-38deg] rounded-full bg-[linear-gradient(180deg,#d8b5e3_0%,#8e4ba0_100%)] opacity-70 transition-opacity duration-300 group-hover/nav:opacity-90" />
        </span>
        <Icon strokeWidth={1.8} className={`relative z-10 size-[clamp(1rem,1.15vw,1.12rem)] text-[#f7eef9]/90 drop-shadow-[0_1px_0_rgba(255,255,255,0.08)] transition-[width,height,transform,color] duration-300 ease-out group-hover/nav:size-[clamp(1.03rem,1.18vw,1.15rem)] group-hover/nav:text-[#fffaff] ${previous ? "group-hover/nav:-translate-x-[clamp(.04rem,.06vw,.06rem)]" : "group-hover/nav:translate-x-[clamp(.04rem,.06vw,.06rem)]"}`} />
      </span>
    </button>
  );
}

export function RealisationsCards() {
  const { slots, transitionEnabled, isTransitioning, goPrevious, goNext, setActiveHovered } = useSlideshow();
  return (
   <div className="relative mt-[clamp(2rem,2.8vw,3rem)] w-full">
      {/* Préserve exactement la hauteur de la card active */}
      <div aria-hidden="true" className="pointer-events-none invisible mx-auto aspect-[3/4] w-[var(--active-card-width)]" />
      {realisationsContent.projects.map((project, index) => {
        const slot = slots[index]!;
        const active = slot === 0;
        const previous = slot === -1;
        const next = slot === 1;
        const clickable = !isTransitioning && (previous || next);
        return (
          <div key={project.id} style={getCardStyle(slot, isTransitioning)} onClick={clickable ? previous ? goPrevious : goNext : undefined} onMouseEnter={active && !isTransitioning ? () => setActiveHovered(true) : undefined} onMouseLeave={active ? () => setActiveHovered(false) : undefined} className={`${transitionEnabled ? "transition-[left,top,width,opacity] duration-[650ms] ease-[cubic-bezier(.22,1,.36,1)]" : "transition-none"} ${clickable ? "cursor-pointer" : ""}`}>
            <RealisationsCard project={project} active={active} />
          </div>
        );
      })}
    </div>
  );
}

function getCardStyle(slot: CardSlot, isTransitioning: boolean): CSSProperties {
  const pointerEvents = !isTransitioning && slot >= -1 && slot <= 1 ? "auto" : "none";
  if (slot <= -2) return { position: "absolute", left: "calc(0px - var(--side-card-width) - var(--side-gap))", top: "var(--side-offset)", width: "var(--side-card-width)", opacity: 0, zIndex: 0, pointerEvents };
  if (slot === -1) return { position: "absolute", left: "max(0px, calc(50% - var(--active-card-width) / 2 - var(--side-gap) - var(--side-card-width)))", top: "var(--side-offset)", width: "var(--side-card-width)", opacity: 0.9, zIndex: 10, pointerEvents };
  if (slot === 0) return { position: "absolute", left: "calc(50% - var(--active-card-width) / 2)", top: 0, width: "var(--active-card-width)", opacity: 1, zIndex: 20, pointerEvents };
  if (slot === 1) return { position: "absolute", left: "min(calc(100% - var(--side-card-width)),calc(50% + var(--active-card-width) / 2 + var(--side-gap)))", top: "var(--side-offset)", width: "var(--side-card-width)", opacity: 0.9, zIndex: 10, pointerEvents };
  return { position: "absolute", left: "calc(100% + var(--side-gap))", top: "var(--side-offset)", width: "var(--side-card-width)", opacity: 0, zIndex: 0, pointerEvents };
}

export function RealisationsPagination() {
  const { activeIndex, timerPaused, goToIndex, goNext } = useSlideshow();
  const fillRef = useRef<HTMLSpanElement | null>(null);
  const animationRef = useRef<Animation | null>(null);
  const pausedRef = useRef(timerPaused);
  pausedRef.current = timerPaused;

  useEffect(() => {
    const element = fillRef.current;
    if (!element) return;
    animationRef.current?.cancel();
    const animation = element.animate([{ transform: "scaleX(0)" }, { transform: "scaleX(1)" }], { duration: AUTOPLAY_DELAY, easing: "linear", fill: "forwards" });
    animation.onfinish = () => { if (animationRef.current === animation) goNext(); };
    animationRef.current = animation;
    if (pausedRef.current) animation.pause();
    return () => {
      animation.onfinish = null;
      animation.cancel();
    };
  }, [activeIndex, goNext]);

  useEffect(() => {
    const animation = animationRef.current;
    if (!animation) return;
    if (timerPaused) animation.pause();
    else animation.play();
  }, [timerPaused]);

  return (
    <nav aria-label="Accès direct aux réalisations" className="flex w-fit items-center gap-[clamp(.38rem,.5vw,.48rem)]">
      {realisationsContent.projects.map((project, index) => {
        const active = index === activeIndex;
        return (
          <button key={project.id} type="button" aria-label={`Afficher le projet ${project.title}`} aria-current={active ? "true" : undefined} onClick={() => goToIndex(index)} className={`relative h-[clamp(.32rem,.38vw,.38rem)] overflow-hidden rounded-full bg-[linear-gradient(180deg,rgba(74,43,86,0.16)_0%,rgba(54,31,64,0.11)_100%)] shadow-[inset_0_1px_1px_rgba(72,42,84,0.12),inset_0_-1px_0_rgba(255,255,255,0.30)] transition-[width,background-color] duration-500 ease-[cubic-bezier(.22,1,.36,1)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#9333ea]/25 ${active ? "w-[clamp(3.1rem,3.8vw,3.55rem)]" : "w-[clamp(1.25rem,1.55vw,1.45rem)]"}`}>
            {active && (
              <span ref={fillRef} className="absolute inset-0 origin-left">
                <span className="absolute inset-0 rounded-full bg-[linear-gradient(90deg,#8b4ba1_0%,#b26bc6_46%,#d39be1_100%)] shadow-[0_0_9px_rgba(185,104,207,0.20)]" />
                <span className="absolute inset-x-[8%] top-0 h-px bg-[linear-gradient(90deg,transparent_0%,rgba(255,235,255,0.48)_40%,rgba(255,255,255,0.28)_68%,transparent_100%)]" />
              </span>
            )}
          </button>
        );
      })}
    </nav>
  );
}

function RealisationsCard({ project, active = false }: { project: Project; active?: boolean }) {
  const splashId = `splash-center-${project.id}`;
  return (
    <article className={`relative aspect-[3/4] w-full [container-type:inline-size] ${active ? "group/card cursor-pointer" : ""}`}>
      {/* Tranche / épaisseur */}
      <div aria-hidden="true" className="absolute inset-0 translate-x-[3px] translate-y-[6px] rounded-[min(clamp(1.4rem,1.8vw,1.75rem),7.16cqw)] bg-[linear-gradient(145deg,#56345f_0%,#3a2244_32%,#291731_66%,#160c1c_100%)] shadow-[0_38px_74px_rgba(72,41,84,0.30),0_18px_34px_rgba(45,24,53,0.24),0_7px_15px_rgba(28,14,34,0.22)]" />
      {/* Coque / contour métallique */}
      <div className={`absolute inset-0 rounded-[min(clamp(1.4rem,1.8vw,1.75rem),7.16cqw)] bg-[linear-gradient(135deg,rgba(241,216,252,0.38)_0%,rgba(195,132,220,0.17)_17%,rgba(255,255,255,0.07)_43%,rgba(116,68,133,0.14)_68%,rgba(25,13,31,0.62)_100%)] p-px shadow-[0_2px_0_rgba(255,255,255,0.055),0_22px_50px_rgba(61,35,72,0.18)] ${active ? "transition-shadow duration-500 group-hover/card:shadow-[0_2px_0_rgba(255,255,255,0.08),0_30px_68px_rgba(71,39,84,0.25)]" : ""}`}>
        <div className="relative h-full w-full overflow-hidden rounded-[inherit] bg-[linear-gradient(158deg,#3a2444_0%,#33203d_18%,#2c1b36_38%,#291933_62%,#25162e_82%,#211329_100%)]">
          {/* Matière satinée */}
          <div aria-hidden="true" className="pointer-events-none absolute inset-0">
            {/* Accroche lumineuse haute */}
            <div className="absolute inset-x-0 top-0 h-[29%] bg-[radial-gradient(ellipse_at_24%_-14%,rgba(245,220,255,0.24)_0%,rgba(217,172,237,0.11)_28%,rgba(171,105,197,0.035)_52%,transparent_70%),linear-gradient(180deg,rgba(255,255,255,0.055)_0%,rgba(255,255,255,0.016)_46%,transparent_100%)]" />
            {/* Splash chromatique central */}
            <svg aria-hidden="true" className="absolute inset-x-0 top-0 h-[30px] w-full overflow-visible" viewBox="0 0 390 30" preserveAspectRatio="none">
              <defs>
                <linearGradient id={splashId} x1="0" x2="1">
                  <stop offset="0%" stopColor="#d37ac9" stopOpacity=".05" />
                  <stop offset="48%" stopColor="#e7a3dc" stopOpacity=".22" />
                  <stop offset="100%" stopColor="#b96dca" stopOpacity=".05" />
                </linearGradient>
              </defs>
              <path d="M151 -7C167 -3 174 3 186 2C198 1 203 -3 216 1C224 3 229 8 237 9C224 11 214 8 204 9C191 11 180 12 169 8C160 6 154 1 151 -7Z" fill={`url(#${splashId})`} />
              <path d="M163 1C176 4 183 6 195 5C208 4 215 3 226 7" fill="none" stroke="rgba(255,255,255,.10)" strokeWidth=".6" strokeLinecap="round" />
            </svg>
            {/* Assombrissement bas très léger */}
            <div className="absolute inset-x-0 bottom-0 h-[34%] bg-[linear-gradient(0deg,rgba(22,10,27,0.26)_0%,rgba(29,14,35,0.07)_54%,transparent_100%)]" />
            {/* Reflet du chant supérieur */}
            <div className="absolute left-[5%] right-[5%] top-px h-px bg-[linear-gradient(90deg,transparent_0%,rgba(247,224,255,0.36)_20%,rgba(255,255,255,0.17)_52%,rgba(193,131,217,0.12)_79%,transparent_100%)]" />
            {/* Micro-décor : lamelles usinées */}
            <div className="absolute -right-[9px] top-[70%] flex rotate-[-38deg] gap-[5px] opacity-[0.12]">
              <span className="h-[34px] w-[4px] rounded-full bg-[linear-gradient(180deg,#ecd8f5_0%,#a761bd_100%)]" />
              <span className="mt-[6px] h-[30px] w-[4px] rounded-full bg-[linear-gradient(180deg,#d7b8e4_0%,#84469a_100%)]" />
              <span className="mt-[12px] h-[26px] w-[4px] rounded-full bg-[linear-gradient(180deg,#c89fd8_0%,#703982_100%)]" />
            </div>
            {/* Micro-décor : empreintes basses */}
            <div aria-hidden="true" className="pointer-events-none absolute bottom-0 left-[14px] h-[52px] w-[92px] opacity-45">
              <span className="absolute bottom-0 left-0 size-[42px] rounded-full bg-[radial-gradient(circle_at_35%_30%,rgba(245,220,252,0.30)_0%,rgba(205,143,226,0.16)_34%,rgba(138,77,157,0.06)_64%,rgba(84,43,99,0.01)_100%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.09),0_0_12px_rgba(197,128,219,0.06)]" />
              <span className="absolute bottom-[15px] left-[32px] size-[31px] rounded-full bg-[radial-gradient(circle_at_35%_30%,rgba(233,201,245,0.22)_0%,rgba(184,119,206,0.12)_38%,rgba(116,61,134,0.04)_68%,transparent_100%)] shadow-[inset_0_1px_0_rgba(255,255,255,0.07)]" />
              <span className="absolute bottom-[8px] left-[59px] size-[28px] rounded-full bg-[radial-gradient(circle_at_35%_30%,rgba(225,188,239,0.14)_0%,rgba(171,103,195,0.07)_40%,transparent_74%)]" />
            </div>
          </div>
          {/* Contenu */}
          <div className="relative z-10 flex h-full flex-col px-[min(clamp(1.15rem,1.55vw,1.4rem),5.76cqw)] pb-[min(clamp(1.2rem,1.55vw,1.45rem),5.94cqw)] pt-[min(clamp(1.1rem,1.45vw,1.3rem),5.39cqw)]">
            {/* Header */}
            <header className="flex items-center justify-between gap-4">
              {/* Timeline */}
              <div className="flex min-w-0 items-center">
                <span className="relative flex h-[11px] w-[11px] shrink-0 items-center justify-center rounded-full border border-[#e5c7ef]/35 shadow-[0_0_10px_rgba(209,143,232,0.18)]">
                  <span className="h-[3px] w-[3px] rounded-full bg-[#e1b9ef] shadow-[0_0_7px_rgba(222,174,240,0.55)]" />
                </span>
                <span className="ml-[4px] h-[1px] w-[min(clamp(.6rem,.7vw,.7rem),2.95cqw)] shrink-0 rounded-full bg-[#dcaee9]/65 shadow-[0_0_5px_rgba(216,159,233,0.20)]" />
                <div className="ml-[4px] flex items-center">
                  {project.period.map((year, index) => (
                    <span key={year} className="flex items-center">
                      {index > 0 && <span className="mx-[3px] h-[1px] w-[min(clamp(.35rem,.45vw,.45rem),1.86cqw)] shrink-0 rounded-full bg-[#dcaee9]/65 shadow-[0_0_4px_rgba(216,159,233,0.16)]" />}
                      <span className="whitespace-nowrap font-main text-[min(clamp(.58rem,.64vw,.64rem),2.85cqw)] font-medium tracking-[0.09em] text-[#eee4f1]/[0.66]">{year}</span>
                    </span>
                  ))}
                </div>
              </div>
              {/* Type incrusté */}
              <div className="shrink-0 rounded-full bg-[linear-gradient(145deg,rgba(244,222,252,0.25)_0%,rgba(255,255,255,0.07)_35%,rgba(147,83,169,0.19)_100%)] p-px shadow-[0_5px_15px_rgba(18,8,23,0.13),inset_0_1px_0_rgba(255,255,255,0.05)]">
                <div className="flex items-center justify-center rounded-full bg-[linear-gradient(180deg,rgba(92,58,105,0.76)_0%,rgba(65,39,77,0.72)_100%)] px-[min(clamp(.5rem,.64vw,.62rem),2.55cqw)] py-[min(clamp(.24rem,.3vw,.28rem),1.19cqw)] shadow-[inset_0_1px_0_rgba(255,255,255,0.07),inset_0_-1px_0_rgba(13,7,17,0.18)]">
                  <span className="font-main text-[min(clamp(.47rem,.52vw,.52rem),2.31cqw)] font-semibold uppercase tracking-[0.11em] text-[#f0e7f3]/[0.70]">{project.type}</span>
                </div>
              </div>
            </header>
            {/* Fine gravure sous la zone haute */}
            <div aria-hidden="true" className="mt-[min(clamp(.8rem,1vw,.95rem),3.93cqw)] h-px w-full bg-[linear-gradient(90deg,rgba(231,199,242,0.10)_0%,rgba(255,255,255,0.045)_52%,transparent_100%)]" />
            {/* Illustration projet */}
            <div className="relative mt-[min(clamp(1rem,1.35vw,1.2rem),5.02cqw)] aspect-[17/10] w-full">
              <RealisationsSlideshowIllustration projectId={project.id} />
            </div>
            {/* Identité projet */}
            <div className="mt-[min(clamp(2.5rem,3.5vw,3.5rem),7cqw)] pr-[min(clamp(1.9rem,2.2vw,2.25rem),9.30cqw)]">
              <div className="relative w-fit pb-[min(clamp(.58rem,.72vw,.68rem),2.85cqw)]">
                <div className="flex items-center gap-[min(clamp(.65rem,.8vw,.78rem),3.21cqw)]">
                  <span className="h-[9px] w-[9px] shrink-0 rotate-45 bg-[linear-gradient(135deg,#f1d6fb_0%,#bd7ad4_45%,#7a3d91_100%)] shadow-[0_0_13px_rgba(199,122,224,0.35)]" />
                  <h3 className="font-main text-[min(clamp(1.72rem,2.05vw,1.95rem),8.42cqw)] font-bold leading-none tracking-[-0.04em] text-[#fbf7fc]">{project.title}</h3>
                </div>
                <div aria-hidden="true" className="absolute bottom-0 left-[4px] top-[calc(.5*min(clamp(1.72rem,2.05vw,1.95rem),8.42cqw)+7px)] w-px bg-[linear-gradient(180deg,rgba(183,103,207,0.4)_0%,rgba(203,137,223,0.4)_48%,rgba(229,184,244,0.2)_100%)] shadow-[0_0_6px_rgba(187,110,210,0.12)]" />
                <div aria-hidden="true" className="absolute bottom-0 left-[4px] -right-[clamp(4px,.35vw,7px)] h-px bg-[linear-gradient(90deg,rgba(229,184,244,0.2)_0%,rgba(183,103,207,0.4)_37%,rgba(240,218,248,0.4)_100%)] shadow-[0_0_8px_rgba(187,110,210,0.10)]" />
              </div>
              <p className="mt-[min(clamp(1rem,1.5vw,1.5rem),5cqw)] max-w-[95%] font-main text-[min(clamp(.78rem,.88vw,.88rem),3.83cqw)] font-normal leading-[1.55] text-[#e8dfe9]/[0.61]">{project.shortDescription}</p>
            </div>
          </div>
          {/* Coin métallique replié */}
          {active && (
            <div aria-hidden="true" className="pointer-events-none absolute bottom-0 right-0 z-20 h-[50px] w-[50px] transition-[width,height] duration-500 ease-[cubic-bezier(.22,1,.36,1)] group-hover/card:h-[60px] group-hover/card:w-[60px]">
              {/* Ombre du pli */}
              <div className="absolute inset-0 translate-[-2px] bg-[rgba(13,6,17,0.34)] opacity-75 blur-[3px] [clip-path:polygon(0_100%,100%_0,100%_100%)]" />
              {/* Facette métallique */}
              <div className="absolute inset-0 bg-[linear-gradient(135deg,#593366_0%,#9861aa_34%,#d5a9e1_58%,#875198_78%,#4c2a58_100%)] [clip-path:polygon(0_100%,100%_0,100%_100%)]">
                <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.04)_35%,rgba(255,255,255,0.32)_49%,rgba(255,255,255,0.07)_52%,transparent_72%)]" />
              </div>
              {/* Ligne de pli */}
              <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent_47%,rgba(243,218,250,0.45)_49%,rgba(45,20,52,0.42)_51%,transparent_53%)]" />
              {/* Affordance révélée au hover */}
              <ArrowUpRight className="absolute bottom-[7px] right-[7px] h-[25px] w-[25px] translate-x-[3px] translate-y-[3px] text-[#241229] opacity-0 drop-shadow-[0_1px_0_rgba(255,255,255,0.22)] transition-all delay-0 duration-300 group-hover/card:translate-x-0 group-hover/card:translate-y-0 group-hover/card:opacity-100 group-hover/card:delay-150" strokeWidth={2.5} />
            </div>
          )}
          {/* Éclairage très fin du chant droit */}
          <div aria-hidden="true" className="pointer-events-none absolute bottom-[8%] right-px top-[7%] w-px bg-[linear-gradient(180deg,rgba(236,206,246,0.13)_0%,rgba(255,255,255,0.025)_45%,rgba(16,7,20,0.20)_100%)]" />
        </div>
      </div>
    </article>
  );
}