import { selectPing } from "../../selectors";
import { useVisibleOnChange } from "../../hooks/useVisibleOnChange";
import { useRef } from "react";
import { useStore } from "../../hooks/useStore";

export function Ping() {
  const ref = useRef<HTMLParagraphElement>(null);
  const ping = useStore(selectPing);

  useVisibleOnChange({
    ref,
    value: ping,
  });

  return (
    <p
      {...{
        ref,
      }}
    >
      {ping}
    </p>
  );
}
