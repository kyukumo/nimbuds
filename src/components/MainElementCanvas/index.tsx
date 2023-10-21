import spritesUrl from "../../images/sprites.png";
import styles from "./index.module.css";
import { Element } from "../../types";
import { block, size, tile } from "../../data/elements";
import { selectActiveBudElements } from "../../selectors";
import { useEffect, useState } from "react";
import { useStore } from "../../hooks/useStore";

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

  const sprites = new Image();

  const drawSprite = (element: Element, index: number) => {
    const { x, y } = tile[element];
    const dx = index * size + (!index ? index : block);
    context.drawImage(sprites, x, y, block, block, dx, 0, size, size);
  };

  const onImageLoad = () => elements.forEach(drawSprite);
  sprites.addEventListener("load", onImageLoad);
  sprites.src = spritesUrl;

  return;
};

export function MainElementCanvas() {
  const elements = useStore(selectActiveBudElements);
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

  return (
    <canvas
      aria-label={elements?.join(", ")}
      className={styles.canvas}
      ref={setCanvas}
    />
  );
}
