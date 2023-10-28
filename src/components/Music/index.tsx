import styles from "../index.module.css";
import { useMusicContext } from "./useMusicContext";

export function Music() {
  const { toggle } = useMusicContext();
  const onClick = () => toggle?.();

  return (
    <button
      className={styles.button}
      type="button"
      {...{
        onClick,
      }}
    >
      <span className={styles.icon}>♫</span>
    </button>
  );
}
