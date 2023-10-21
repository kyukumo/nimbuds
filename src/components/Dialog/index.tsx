import React, { ReactNode } from "react";
import { useDialogContext } from "./useDialogContext";
import styles from "./index.module.css";

export function Dialog({
  children,
  close,
}: {
  children: ReactNode;
  close: () => void;
}) {
  const { dialogRef } = useDialogContext();

  const onDialogClick = ({
    clientX,
    clientY,
  }: React.MouseEvent<HTMLDialogElement>) => {
    if (!dialogRef.current?.open) return;

    const {
      height = 0,
      left = 0,
      top = 0,
      width = 0,
    } = dialogRef.current?.getBoundingClientRect() ?? {};

    const inDialog =
      top <= clientY &&
      clientY <= top + height &&
      left <= clientX &&
      clientX <= left + width;

    if (!inDialog) dialogRef.current?.close();
    return;
  };

  return (
    <dialog className={styles.dialog} onClick={onDialogClick} ref={dialogRef}>
      <form method="dialog">
        <button onClick={close} type="submit">
          <span aria-hidden="true">&times;</span>
          <span className="sr-only">Close</span>
        </button>
      </form>

      {children}
    </dialog>
  );
}
