import { Element } from "../../types";
import { ElementCanvas } from "../ElementCanvas";

export function SubElementCanvas({ element }: { element: Element }) {
  return (
    <ElementCanvas
      {...{
        elements: [element],
      }}
    />
  );
}
