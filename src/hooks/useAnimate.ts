import { useEffect, useRef } from "react";

const fps = 2;
const interval = 1000 / fps;

export const useAnimate = (draw: (animate: boolean) => void) => {
  const frameRef = useRef(0);
  const animateRef = useRef(false);
  const deltaRef = useRef(0);
  const nowRef = useRef(0);
  const thenRef = useRef(performance.now());

  useEffect(() => {
    const render = () => {
      frameRef.current = requestAnimationFrame(render);

      nowRef.current = performance.now();
      deltaRef.current = nowRef.current - thenRef.current;

      if (deltaRef.current > interval) {
        thenRef.current = nowRef.current - (deltaRef.current % interval);
        draw(animateRef.current);
        animateRef.current = !animateRef.current;
      }
    };

    frameRef.current = requestAnimationFrame(render);
    return () => cancelAnimationFrame(frameRef.current);
  }, [draw]);
};
