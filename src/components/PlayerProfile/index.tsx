import { Bud } from "../../types";
import { SubBudCanvas } from "../SubBudCanvas";
import styles from "./index.module.css";

export function PlayerProfile({ buds }: { buds: Bud[] }) {
  return (
    <>
      <p>Train to take down your rivals! This rival has the following buds:</p>

      <ul className={styles.buds}>
        {buds.map((bud, index) => {
          const { name, id } = bud;

          return (
            <li key={`player-profile-${id}-${index.toString()}`}>
              <SubBudCanvas
                aria-hidden="true"
                {...{
                  bud,
                }}
              />

              <strong>{name}</strong>
            </li>
          );
        })}
      </ul>
    </>
  );
}
