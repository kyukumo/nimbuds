import { ReactNode } from "react";
import { Heading } from "../Heading";
import styles from "./index.module.css";

export function Header({ children }: { children?: ReactNode }) {
  return (
    <header className={styles.header}>
      <Heading />
      {children}
    </header>
  );
}
