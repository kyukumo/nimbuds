import { Icons } from "../Icons";
import styles from "./index.module.css";

export function Events({ events }: { events: string[] }) {
  return (
    <div className={styles.events}>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <ul
            aria-live="polite"
            aria-atomic="false"
            className={events.length ? styles.show : styles.hide}
          >
            {events.map((event, index) => (
              <li key={`event-${index}`}>{event}</li>
            ))}
          </ul>

          {!events.length && (
            <p>Train until the timer runs out, then battle your rivals!</p>
          )}
        </div>
      </div>

      <Icons />
    </div>
  );
}
