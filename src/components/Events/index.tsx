import { useStore } from "../../hooks/useStore";
import { selectEvents } from "../../selectors";
import styles from "./index.module.css";

export function Events() {
  const events = useStore(selectEvents);

  return (
    <div className={styles.events}>
      <div>
        {events.length ? (
          <ul>
            {events.map((event, index) => (
              <li key={`event-${index}`}>{event}</li>
            ))}
          </ul>
        ) : (
          <p>Train until the timer runs out, then fight your rivals!</p>
        )}
      </div>
    </div>
  );
}
