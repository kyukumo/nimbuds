import React, { ReactNode } from "react";
import { useDialogContext } from "./useDialogContext";
import styles from "./index.module.css";
import { createPortal } from "react-dom";

export function Dialog({
  children,
  close,
  title,
}: {
  children: ReactNode;
  close: () => void;
  title: ReactNode;
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

  return createPortal(
    <dialog className={styles.dialog} onClick={onDialogClick} ref={dialogRef}>
      <header>
        {title}

        <form method="dialog">
          <button onClick={close} type="submit">
            <span aria-hidden="true">&times;</span>
            <span className="sr-only">Close</span>
          </button>
        </form>
      </header>

      {children}
    </dialog>,
    document.body
  );
}
