import { selectLastEvent } from "../../selectors";
import { useStore } from "../../hooks/useStore";
import { useEffect, useRef } from "react";

export function RandomEvent() {
  const ref = useRef<HTMLParagraphElement>(null);
  const lastEvent = useStore(selectLastEvent);

  useEffect(() => {
    if (ref.current) ref.current.style.display = "block";

    const timeout = setTimeout(() => {
      clearTimeout(timeout);
      if (ref.current) ref.current.style.display = "none";
    }, 5000);

    return () => clearTimeout(timeout);
  }, [lastEvent]);

  return (
    <p
      {...{
        ref,
      }}
    >
      {Boolean(lastEvent) && "Random event!"}
    </p>
  );
}
