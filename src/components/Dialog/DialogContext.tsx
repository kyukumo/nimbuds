import {
  ReactNode,
  RefObject,
  createContext,
  createRef,
  useEffect,
  useRef,
  useState,
} from "react";

type Context = {
  close: (() => void) | null;
  dialogRef: RefObject<HTMLDialogElement>;
  isOpen: boolean;
  open: (() => void) | null;
};

export const DialogContext = createContext<Context>({
  close: null,
  dialogRef: createRef<HTMLDialogElement>(),
  isOpen: false,
  open: null,
});

export function DialogProvider({ children }: { children: ReactNode }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const close = () => setIsOpen(false);
  const open = () => setIsOpen(true);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (dialog) isOpen ? dialog.showModal() : dialog?.close();
  }, [isOpen]);

  return (
    <DialogContext.Provider
      value={{
        close,
        dialogRef,
        isOpen,
        open,
      }}
    >
      {children}
    </DialogContext.Provider>
  );
}
