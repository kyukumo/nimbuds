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
      <span className={styles.icon}>
        <span aria-hidden="true">♫</span>
        <span className="sr-only">Toggle Playing Music</span>
      </span>
    </button>
  );
}
