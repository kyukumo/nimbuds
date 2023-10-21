import { PlayerButton } from "./PlayerButton";
import { useStore } from "../../hooks/useStore";
import { selectRivals } from "../../selectors";

export function PlayerButtons() {
  const rivals = useStore(selectRivals);

  return (
    <ul>
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
