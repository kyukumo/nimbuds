export const getIsReducedMotionPreferred = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;
