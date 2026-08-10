export const PROJECT_AUTOPLAY_DELAY = 5600;

export function getRelativePosition(index: number, activeIndex: number, length: number) {
  let difference = index - activeIndex;

  if (difference > length / 2) difference -= length;
  if (difference < -length / 2) difference += length;

  return difference;
}

export function getCardTransform(position: number) {
  if (position === 0) return "translateX(-50%) translateY(0) rotateY(0deg) rotateZ(0deg)";
  if (position === -1) return "translateX(calc(-50% - min(31vw, 440px))) translateY(42px) rotateY(7deg) rotateZ(-1.25deg)";
  if (position === 1) return "translateX(calc(-50% + min(31vw, 440px))) translateY(42px) rotateY(-7deg) rotateZ(1.25deg)";
  if (position < -1) return "translateX(calc(-50% - min(62vw, 880px))) translateY(75px) rotateY(12deg) rotateZ(-2deg)";

  return "translateX(calc(-50% + min(62vw, 880px))) translateY(75px) rotateY(-12deg) rotateZ(2deg)";
}