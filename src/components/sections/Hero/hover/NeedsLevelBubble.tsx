"use client";

import { useRef } from "react";

export function NeedsLevelBubble() {
  const bubbleRef = useRef<HTMLSpanElement>(null);
  const areaRef = useRef<HTMLSpanElement>(null);
  const BUBBLE_WIDTH = 31;
  const DEFAULT_RATIO = .24;

  const setPosition = (x: number, returning = false) => {
    if (!bubbleRef.current) return;
    bubbleRef.current.style.transition = returning ? "transform 420ms cubic-bezier(.22,.9,.3,1)" : "none";
    bubbleRef.current.style.transform = `translate3d(${x - BUBBLE_WIDTH / 2}px,0,0)`;
  };

  const moveBubble = (e: React.PointerEvent<HTMLSpanElement>) => {
    if (!areaRef.current) return;
    const rect = areaRef.current.getBoundingClientRect();
    setPosition(e.clientX - rect.left);
  };

  const resetBubble = () => {
    if (!areaRef.current) return;
    setPosition(areaRef.current.getBoundingClientRect().width * DEFAULT_RATIO, true);
  };

  return (
    <span ref={areaRef} aria-hidden="true" className="pointer-events-auto absolute inset-0 z-[20]" onPointerMove={moveBubble} onPointerLeave={resetBubble}>
      <span ref={bubbleRef} className="pointer-events-none absolute left-0 top-[-8px] h-[11px] w-[31px] will-change-transform" style={{ transform: "translate3d(24px,0,0)" }}>
        <span className="absolute inset-0 rounded-full border border-[#79549d]/30 bg-white/30 shadow-[inset_0_1px_1px_rgba(255,255,255,.78),0_1px_3px_rgba(76,43,104,.10)] backdrop-blur-[2px]" />
        <span className="absolute inset-[2px] overflow-hidden rounded-full border border-[#704590]/18 bg-[#714792]/10">
         <span className="absolute left-[5px] top-1/2 h-[11px] w-[11px] -translate-y-1/2 rounded-full border border-[#68438a]/25 bg-[#f4eafa]/45 shadow-[inset_0_1px_1px_rgba(255,255,255,.65)]" />
        </span>
      </span>
    </span>
  );
}