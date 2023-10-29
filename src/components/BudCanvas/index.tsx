import { Bud } from "../../types";
import { getIsReducedMotionPreferred } from "../../lib/getIsReducedMotionPreferred";
import { useAnimate } from "../../hooks/useAnimate";
import { HTMLAttributes, useEffect, useRef } from "react";

const spritesUrl = "./images/sprites.png";
const block = 10;

const draw = ({
  animate,
  bud,
  canvas,
  sprites,
}: {
  animate: boolean;
  bud?: Bud | null;
  canvas: HTMLCanvasElement | null;
  sprites: HTMLImageElement;
}) => {
  if (!canvas || !bud) return;

  const width = window.innerWidth;
  const height = width;

  canvas.height = height;
  canvas.width = width;

  const context = canvas.getContext("2d");
  if (!context) return;

  context.imageSmoothingEnabled = false;
  context.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);

  const {
    tile: { x, y },
  } = bud;

  const size = canvas.width;
  const isReducedMotionPreferred = getIsReducedMotionPreferred();
  const bop = !isReducedMotionPreferred && animate ? y + block : y;

  const halfSize = size / 2;
  const dx = canvas.width / 2 - halfSize;
  const dy = canvas.height / 2 - halfSize;

  context.drawImage(sprites, x, bop, block, block, dx, dy, size, size);
};

export type CanvasProps = HTMLAttributes<HTMLCanvasElement> & {
  bud?: Bud;
};

export function BudCanvas({ bud, ...props }: CanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const spritesRef = useRef<HTMLImageElement>(new Image());

  useEffect(() => {
    spritesRef.current.src = spritesUrl;
  }, []);

  const render = (animate: boolean) =>
    draw({
      animate,
      bud,
      canvas: canvasRef.current,
      sprites: spritesRef.current,
    });

  useAnimate(render);

  return <canvas aria-label={bud?.name} ref={canvasRef} {...props} />;
}
