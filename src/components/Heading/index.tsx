import { Icons } from "../Icons";
import styles from "./index.module.css";

export function Heading() {
  return (
    <div className={styles.heading}>
      <h1>
        <img src="./images/logo.png" /> <span className="sr-only">Nimbuds</span>
      </h1>

      <Icons />
    </div>
  );
}
