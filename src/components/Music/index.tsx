import { useState } from "react";
import bgm from "../../sounds/bgm.ogg";
import styles from "./index.module.css";

export function Music() {
  const [currentAudio, setCurrentAudio] = useState<HTMLAudioElement>();

  const start = () => {
    const audio = new Audio(bgm);
    audio.loop = true;
    audio.volume = 0.1;
    audio.play();

    setCurrentAudio(audio);
  };

  const togglePlay = () =>
    currentAudio?.paused ? currentAudio?.play() : currentAudio?.pause();

  const hasAudio = Boolean(currentAudio);

  return (
    <button
      className={styles.button}
      onClick={hasAudio ? togglePlay : start}
      type="button"
    >
      <span className={styles.note}>♫</span>
    </button>
  );
}