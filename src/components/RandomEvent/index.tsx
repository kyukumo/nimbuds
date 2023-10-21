import styles from "./index.module.css";
import { selectLastEvent } from "../../selectors";
import { useRef } from "react";
import { useStore } from "../../hooks/useStore";
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
      className={styles.event}
      {...{
        ref,
      }}
    >
      Random event!
    </p>
  );
}
