import { selectActiveBud } from "../../selectors";
import { useStore } from "../../hooks/useStore";
import { useEffect, useRef } from "react";
import "./index.css";
import spritesUrl from "../../images/color-sprites.png";
import { Bud } from "../../types";
import { getIsReducedMotionPreferred } from "../../lib/getIsReducedMotionPreferred";

const sprites = new Image();
sprites.src = spritesUrl;

const speed = 50;
const block = 10;

const draw = ({
  activeBud,
  canvas,
  frame,
}: {
  activeBud: Bud | null;
  canvas: HTMLCanvasElement | null;
  frame: number;
}) => {
  if (!canvas || !activeBud) return;

  const { left } = canvas.getBoundingClientRect();
  canvas.width = window.innerWidth - left * 2;
  const height = canvas.width * 0.7;
  canvas.height = height;

  const context = canvas.getContext("2d");
  if (!context) return;

  context.imageSmoothingEnabled = false;
  context.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);

  const {
    tile: { x, y },
  } = activeBud;

  const size = canvas.width / 2;
  const isReducedMotionPreferred = getIsReducedMotionPreferred();
  const animate = !isReducedMotionPreferred && frame % speed < speed / 2;
  const bop = animate ? y + block : y;

  const halfSize = size / 2;
  const dx = canvas.width / 2 - halfSize;
  const dy = canvas.height / 2 - halfSize;

  context.drawImage(sprites, x, bop, block, block, dx, dy, size, size);
  return;
};

export function BudCanvas() {
  const activeBud = useStore(selectActiveBud);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const frameRef = useRef(0);

  useEffect(() => {
    const render = () => {
      draw({
        activeBud,
        canvas: canvasRef.current,
        frame: frameRef.current,
      });

      frameRef.current = requestAnimationFrame(render);
    };

    requestAnimationFrame(render);
    return () => cancelAnimationFrame(frameRef.current);
  }, [activeBud]);

  return (
    <canvas
      aria-label={activeBud?.name}
      className="bud-canvas"
      ref={canvasRef}
    />
  );
}
