import React, { HTMLAttributes, ReactNode } from "react";
import { useDialogContext } from "./useDialogContext";

interface Props extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export function DialogButton({ children, onClick, ...props }: Props) {
  const { dialogRef } = useDialogContext();

  const open = (event: React.MouseEvent<HTMLButtonElement>) => {
    dialogRef.current?.showModal();
    onClick?.(event);
  };

  return (
    <button onClick={open} {...props}>
      {children}
    </button>
  );
}
