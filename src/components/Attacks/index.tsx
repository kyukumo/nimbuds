import { useStore } from "../../hooks/useStore";
import { selectActiveBudMoves } from "../../selectors";
import { Attack } from "./Attack";
import styles from "./index.module.css";

export function Attacks() {
  const moves = useStore(selectActiveBudMoves);

  return (
    <ul className={styles.attacks}>
      {moves.map(({ move, ...props }) => (
        <Attack
          key={`${move}-bud`}
          {...{
            ...props,
            move,
          }}
        />
      ))}
    </ul>
  );
}
