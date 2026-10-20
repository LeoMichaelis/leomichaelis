export function RealisationsSlideshowBackground() {
  return (
   <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10 overflow-visible [--u:clamp(.78px,.0625vw,1.08px)]">
      {/* Lumière centrale — card active */}
      <div className="absolute left-1/2 top-[calc(clamp(2.7rem,3.2vw,3rem)+clamp(2rem,2.8vw,3rem)+calc(55*var(--u)))] h-[calc(410*var(--u))] w-[calc(670*var(--u))] -translate-x-1/2 rounded-[50%] bg-[radial-gradient(ellipse,rgba(255,252,255,0.30)_0%,rgba(247,239,249,0.13)_45%,transparent_73%)] blur-[calc(38*var(--u))]" />

      {/* Repère de construction — card gauche */}
      <div className="absolute h-[calc(98*var(--u))] w-[calc(175*var(--u))] text-[#7e22ce] opacity-75" style={{ left: "calc(max(0px, calc(50% - var(--active-card-width) / 2 - var(--side-gap) - var(--side-card-width))) - calc(25*var(--u)))", bottom: "calc(clamp(1.6rem,2.6vw,2.6rem) + clamp(.32rem,.38vw,.38rem))" }}>
        <span className="absolute bottom-0 left-0 h-full w-px bg-gradient-to-t from-current/45 via-current/25 to-transparent" />
        <span className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-current/45 via-current/25 to-transparent" />
        <span className="absolute bottom-[-4px] left-[27%] h-[9px] w-px bg-current/40" />
        <span className="absolute bottom-[-4px] left-[48%] h-[9px] w-px bg-current/31" />
        <span className="absolute bottom-[-4px] left-[68%] h-[9px] w-px bg-current/23" />
        <span className="absolute bottom-[-4px] left-[86%] h-[9px] w-px bg-current/17" />
      </div>

      {/* Repère de construction — card droite */}
      <div className="absolute h-[calc(98*var(--u))] w-[calc(175*var(--u))] text-[#7e22ce] opacity-75" style={{ right: "calc(max(0px, calc(50% - var(--active-card-width) / 2 - var(--side-gap) - var(--side-card-width))) - calc(25* var(--u)))", bottom: "calc(clamp(1.6rem,2.6vw,2.6rem) + clamp(.32rem,.38vw,.38rem))" }}>
        <span className="absolute bottom-0 right-0 h-full w-px bg-gradient-to-t from-current/45 via-current/25 to-transparent" />
        <span className="absolute bottom-0 right-0 h-px w-full bg-gradient-to-l from-current/45 via-current/25 to-transparent" />
        <span className="absolute bottom-[-4px] right-[27%] h-[9px] w-px bg-current/40" />
        <span className="absolute bottom-[-4px] right-[48%] h-[9px] w-px bg-current/31" />
        <span className="absolute bottom-[-4px] right-[68%] h-[9px] w-px bg-current/23" />
        <span className="absolute bottom-[-4px] right-[86%] h-[9px] w-px bg-current/17" />
      </div>

      {/* Repère isolé — gauche */}
      <div className="absolute flex items-center gap-[calc(7*var(--u))] text-[#7e22ce] opacity-60" style={{ top: "calc(clamp(2.7rem,3.2vw,3.2rem) + clamp(2rem,2.8vw,3rem))", right: "calc(50% + var(--active-card-width) / 2 + calc(5 * var(--u)))" }}>
        <span className="size-[calc(4*var(--u))] rounded-full bg-current" />
        <span className="h-px w-[calc(44*var(--u))] bg-gradient-to-r from-current/55 to-transparent" />
      </div>

      {/* Repère isolé — droite */}
      <div className="absolute flex flex-row-reverse items-center gap-[calc(7*var(--u))] text-[#7e22ce] opacity-60" style={{ top: "calc(clamp(2.7rem,3.2vw,3.2rem) + clamp(2rem,2.8vw,3rem))", left: "calc(50% + var(--active-card-width) / 2 + calc(5 * var(--u)))" }}>
        <span className="size-[calc(4*var(--u))] rounded-full bg-current" />
        <span className="h-px w-[calc(44*var(--u))] bg-gradient-to-l from-current/55 to-transparent" />
      </div>

      {/* Graduation centrale — sous la pagination */}
      <div className="absolute left-1/2 top-[calc(100%+clamp(.9rem,1.1vw,1.05rem))] h-[calc(9*var(--u))] w-[calc(250*var(--u))] -translate-x-1/2 opacity-50 [background-image:repeating-linear-gradient(90deg,rgba(107,33,168,0.36)_0_1px,transparent_1px_calc(15*var(--u)))] [mask-image:linear-gradient(90deg,transparent_0%,black_11%,black_89%,transparent_100%)]" />
    </div>
  );
}