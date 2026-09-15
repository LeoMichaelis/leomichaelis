"use client";

import { useRef } from "react";

export function NeedsLevelBubble() {
  const bubbleRef = useRef<HTMLSpanElement>(null);
  const areaRef = useRef<HTMLSpanElement>(null);
  const DEFAULT_RATIO = .24;

  const setPosition = (left: string, returning = false) => {
    if (!bubbleRef.current) return;
    bubbleRef.current.style.transition = returning ? "left 420ms cubic-bezier(.22,.9,.3,1)" : "none";
    bubbleRef.current.style.left = left;
  };

  const moveBubble = (e: React.PointerEvent<HTMLSpanElement>) => {
    if (!areaRef.current) return;
    const rect = areaRef.current.getBoundingClientRect();
    setPosition(`${e.clientX - rect.left}px`);
  };

  const resetBubble = () => setPosition(`${DEFAULT_RATIO * 100}%`, true);

  return (
    <span ref={areaRef} aria-hidden="true" className="pointer-events-auto absolute inset-0 z-[20]" onPointerMove={moveBubble} onPointerLeave={resetBubble}>
      <span ref={bubbleRef} className="pointer-events-none absolute left-[24%] top-[calc(-10*var(--u))] h-[calc(11*var(--u))] w-[calc(31*var(--u))] -translate-x-1/2 will-change-[left]">
        <span className="absolute inset-0 rounded-full border border-[#79549d]/30 bg-white/30 shadow-[inset_0_1px_1px_rgba(255,255,255,.78),0_1px_3px_rgba(76,43,104,.10)] backdrop-blur-[2px]" />
        <span className="absolute inset-[calc(2*var(--u))] overflow-hidden rounded-full border border-[#704590]/18 bg-[#714792]/10">
          <span className="absolute left-[calc(5*var(--u))] top-1/2 size-[calc(11*var(--u))] -translate-y-1/2 rounded-full border border-[#68438a]/25 bg-[#f4eafa]/45 shadow-[inset_0_1px_1px_rgba(255,255,255,.65)]" />
        </span>
      </span>
    </span>
  );
}