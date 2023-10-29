import { HTMLAttributes } from "react";
import { Element } from "../types";
import { ElementCanvas } from "./ElementCanvas";

type Props = HTMLAttributes<HTMLCanvasElement> & {
  element: Element;
};

export function SubElementCanvas({ element, ...props }: Props) {
  return (
    <ElementCanvas
      {...{
        ...props,
        elements: [element],
      }}
    />
  );
}
