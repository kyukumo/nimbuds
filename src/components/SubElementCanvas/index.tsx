import { selectActiveBudElements } from "../../selectors";
import { useStore } from "../../hooks/useStore";
import { useEffect, useState } from "react";

import spritesUrl from "../../images/sprites.png";
import { Element } from "../../types";
import { block, size, tile } from "../../data/elements";

const sprites = new Image();
sprites.src = spritesUrl;

const draw = ({
  canvas,
  element,
}: {
  canvas: HTMLCanvasElement | null;
  element: Element | null;
}) => {
  if (!canvas || !element) return;

  canvas.width = size;
  canvas.height = size;

  const context = canvas.getContext("2d");
  if (!context) return;

  context.imageSmoothingEnabled = false;
  context.clearRect(0, 0, canvas.clientWidth, canvas.clientHeight);

  const sprites = new Image();

  const onImageLoad = () => {
    const { x, y } = tile[element];
    context.drawImage(sprites, x, y, block, block, 0, 0, size, size);
  };

  sprites.addEventListener("load", onImageLoad);
  sprites.src = spritesUrl;
  return;
};

export function SubElementCanvas({ element }: { element: Element }) {
  const elements = useStore(selectActiveBudElements);
  const [canvas, setCanvas] = useState<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const render = () =>
      draw({
        canvas,
        element,
      });

    render();

    window.addEventListener("resize", render);
    return () => window.removeEventListener("resize", render);
  }, [canvas, element]);

  return (
    <canvas
      aria-label={elements?.join(", ")}
      className="sub-element-canvas"
      ref={setCanvas}
    />
  );
}
