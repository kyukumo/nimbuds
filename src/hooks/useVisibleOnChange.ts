import { RefObject, useEffect } from "react";

export function useVisibleOnChange<T>({
  ref,
  value,
}: {
  ref: RefObject<HTMLElement>;
  value: T;
}) {
  useEffect(() => {
    if (ref.current) ref.current.style.visibility = "visible";

    const timeout = setTimeout(() => {
      clearTimeout(timeout);
      if (ref.current) ref.current.style.visibility = "hidden";
    }, 5000);

    return () => clearTimeout(timeout);
  }, [ref, value]);
}
