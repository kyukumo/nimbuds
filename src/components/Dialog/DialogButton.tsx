import React, { HTMLAttributes, ReactNode } from "react";
import { useDialogContext } from "./useDialogContext";

interface Props extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export function DialogButton({ children, onClick, ...props }: Props) {
  const { open } = useDialogContext();

  const handleOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    open?.();
    onClick?.(event);
  };

  return (
    <button onClick={handleOpen} {...props}>
      {children}
    </button>
  );
}
