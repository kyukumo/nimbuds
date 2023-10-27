import { selectActiveBudElements } from "../../selectors";
import { useStore } from "../../hooks/useStore";
import { ElementCanvas } from "../ElementCanvas";

export function MainElementCanvas() {
  const elements = useStore(selectActiveBudElements);

  return (
    <ElementCanvas
      {...{
        elements,
      }}
    />
  );
}
