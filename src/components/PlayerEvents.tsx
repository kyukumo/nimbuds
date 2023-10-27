import { useStore } from "../hooks/useStore";
import { selectPlayerEvents } from "../selectors";
import { Events } from "./Events";

export function PlayerEvents() {
  const events = useStore(selectPlayerEvents);

  return (
    <Events
      {...{
        events,
      }}
    />
  );
}
