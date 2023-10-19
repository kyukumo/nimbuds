import { selectLastEvent } from "../../selectors";
import { useStore } from "../../hooks/useStore";
import { useRef } from "react";
import { useVisibleOnChange } from "../../hooks/useVisibleOnChange";

export function RandomEvent() {
  const ref = useRef<HTMLParagraphElement>(null);
  const lastEvent = useStore(selectLastEvent);

  useVisibleOnChange({
    ref,
    value: lastEvent,
  });

  return (
    <p
      {...{
        ref,
      }}
    >
      Random event!
    </p>
  );
}
