import { useContext } from "react";
import { DialogContext } from "./DialogContext";

export const useDialogContext = () => {
  const context = useContext(DialogContext);
  return context;
};
