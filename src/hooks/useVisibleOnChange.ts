import { RefObject, useEffect, useRef } from "react";

export function useVisibleOnChange<T>({
  defaultValue,
  ref,
  value,
}: {
  defaultValue?: T;
  ref: RefObject<HTMLElement>;
  value: T;
}) {
  const originalValue = useRef(value);

  useEffect(() => {
    const isDefaultValue = value === defaultValue;
    const isNewValue = originalValue.current !== value;
    const hasNewValue = !isDefaultValue && isNewValue;
    if (!hasNewValue) return;

    if (ref.current) ref.current.style.visibility = "visible";

    const timeout = setTimeout(() => {
      clearTimeout(timeout);
      if (ref.current) ref.current.style.visibility = "hidden";
    }, 5000);

    return () => clearTimeout(timeout);
  }, [defaultValue, ref, value]);
}
