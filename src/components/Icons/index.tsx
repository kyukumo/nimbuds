import { Music } from "../Music";
import { Help } from "../Help";
import styles from "./index.module.css";

export function Icons() {
  return (
    <nav className={styles.icons}>
      <Music />
      <Help />
    </nav>
  );
}
