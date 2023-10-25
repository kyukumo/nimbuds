import styles from "./index.module.css";
import { selectLastEvent } from "../../selectors";
import { useRef } from "react";
import { useStore } from "../../hooks/useStore";
import { useVisibleOnChange } from "../../hooks/useVisibleOnChange";

export function RandomEvent() {
  const ref = useRef<HTMLParagraphElement>(null);
  const lastEvent = useStore(selectLastEvent);

  useVisibleOnChange({
    defaultValue: 0,
    ref,
    value: lastEvent,
  });

  return (
    <p
      className={styles.event}
      style={{
        visibility: "hidden",
      }}
      {...{
        ref,
      }}
    >
      Random event!
    </p>
  );
}
