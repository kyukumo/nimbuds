import { ReactNode } from "react";
import { Heading } from "../Heading";
import styles from "./index.module.css";

export function Header({ children }: { children?: ReactNode }) {
  return (
    <header className={[styles.header, !children && styles.short].join(" ")}>
      <Heading />
      {children}
    </header>
  );
}
