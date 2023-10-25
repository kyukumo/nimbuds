import { PlayerButton } from "./PlayerButton";
import { useStore } from "../../hooks/useStore";
import { selectRivals } from "../../selectors";
import styles from "./index.module.css";

export function PlayerButtons() {
  const rivals = useStore(selectRivals);

  return (
    <ul className={styles.players}>
      {rivals.map(({ id, ...player }) => (
        <li key={id}>
          <PlayerButton
            {...{
              ...player,
              id,
            }}
          />
        </li>
      ))}
    </ul>
  );
}
