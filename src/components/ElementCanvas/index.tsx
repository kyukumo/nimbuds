import { selectActiveBudElements } from "../../selectors";
import { useStore } from "../../hooks/useStore";
import { useEffect, useRef } from "react";
import "./index.css";
import spritesUrl from "../../images/color-sprites.png";
import { Element } from "../../types";

const sprites = new Image();
sprites.src = spritesUrl;

const block = 5;
const scale = 4;
const size = block * scale;

const tile = {
  [Element.Dark]: {
    x: 30,
    y: 0,
  },
  [Element.Earth]: {
    x: 30,
    y: 25,
  },
  [Element.Fire]: {
    x: 30,
    y: 5,
  },
  [Element.Light]: {
    x: 30,
    y: 10,
  },
  [Element.Water]: {
    x: 30,
    y: 20,
  },
  [Element.Wind]: {
    x: 30,
    y: 15,
  },
};

const draw = ({
  canvas,
  elements,
}: {
  canvas: HTMLCanvasElement | null;
  elements: Element[] | null;
}) => {
  if (!canvas || !elements) return;

  const spacing = block * (elements.length - 1);
  canvas.width = size * elements.length + spacing;
  canvas.height = size;

  const context = canvas.getContext("2d");
  if (!context) return;

  context.imageSmoothingEnabled = false;
  context.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);

  elements.forEach((element, index) => {
    const { x, y } = tile[element];
    const dx = index * size + (!index ? index : block);
    context.drawImage(sprites, x, y, block, block, dx, 0, size, size);
  });

  return;
};

export function ElementCanvas() {
  const elements = useStore(selectActiveBudElements);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const frameRef = useRef(0);

  useEffect(() => {
    const render = () => {
      draw({
        canvas: canvasRef.current,
        elements,
      });

      frameRef.current = requestAnimationFrame(render);
    };

    frameRef.current = requestAnimationFrame(render);
    return () => cancelAnimationFrame(frameRef.current);
  }, [elements]);

  return (
    <canvas
      aria-label={elements?.join(", ")}
      className="element-canvas"
      ref={canvasRef}
    />
  );
}
