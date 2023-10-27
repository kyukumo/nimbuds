import spritesUrl from "../../images/sprites.png";
import { Element } from "../../types";
import { block, size, tile } from "../../data/elements";
import { useEffect, useState } from "react";

const sprites = new Image();
sprites.src = spritesUrl;

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

  const drawSprite = (element: Element, index: number) => {
    const { x, y } = tile[element];
    const dx = index * size + (!index ? index : block);
    context.drawImage(sprites, x, y, block, block, dx, 0, size, size);
  };

  const onImageLoad = () => elements.forEach(drawSprite);
  if (sprites.complete) onImageLoad();
  else sprites.addEventListener("load", onImageLoad);
};

export function ElementCanvas({ elements }: { elements: Element[] | null }) {
  const [canvas, setCanvas] = useState<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const render = () =>
      draw({
        canvas,
        elements,
      });

    render();

    window.addEventListener("resize", render);
    return () => window.removeEventListener("resize", render);
  }, [canvas, elements]);

  return <canvas aria-label={elements?.join(", ")} ref={setCanvas} />;
}
