import { selectPlayerId } from "../../selectors";
import { useStore } from "../../hooks/useStore";
import { FormEvent, useRef } from "react";
import { containsProfanity } from "profane-js";

interface FormElements extends HTMLFormControlsCollection {
  "player-name": HTMLInputElement;
}

interface Form extends HTMLFormElement {
  readonly elements: FormElements;
}

export function PlayerName() {
  const ref = useRef<HTMLFormElement>(null);
  const id = useStore(selectPlayerId);

  const onSubmit = (event: FormEvent<Form>) => {
    event.preventDefault();

    const {
      currentTarget: {
        elements: {
          ["player-name"]: { value },
        },
      },
    } = event;

    if (!containsProfanity(value))
      Rune.actions.setPlayerName({
        id,
        name: value,
      });
  };

  const submitForm = () => ref.current?.requestSubmit();

  return (
    <form
      {...{
        onSubmit,
        ref,
      }}
    >
      <label>
        Name:
        <input
          maxLength={20}
          name="player-name"
          onBlur={submitForm}
          type="text"
        />
      </label>
    </form>
  );
}
