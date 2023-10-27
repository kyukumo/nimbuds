import { Element } from "../../types";
import styles from "./index.module.css";

export function Background({ element }: { element: Element[] | null }) {
  return (
    <div
      aria-hidden
      className={[styles.background, element?.join("-")].join(" ")}
    />
  );
}
