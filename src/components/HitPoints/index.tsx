import { getHp } from "../../lib/getHp";
import styles from "./index.module.css";

export function HitPoints({
  hp = 0,
  id,
  level = 1,
}: {
  hp?: number;
  id: string;
  level?: number;
}) {
  const maxHp = getHp(level);
  const high = maxHp / 2;
  const low = high / 2;
  const min = 0;

  return (
    <>
      <label className="sr-only" htmlFor={id}>
        HP
      </label>

      <meter
        className={styles.hp}
        max={maxHp}
        optimum={maxHp}
        value={hp}
        {...{
          high,
          id,
          low,
          min,
        }}
      />
    </>
  );
}
