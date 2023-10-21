import { ReactNode, RefObject, createContext, createRef, useRef } from "react";

type Context = {
  dialogRef: RefObject<HTMLDialogElement>;
};

export const DialogContext = createContext<Context>({
  dialogRef: createRef<HTMLDialogElement>(),
});

export function DialogProvider({ children }: { children: ReactNode }) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  return (
    <DialogContext.Provider
      value={{
        dialogRef,
      }}
    >
      {children}
    </DialogContext.Provider>
  );
}
