import {
  ReactNode,
  RefObject,
  createContext,
  createRef,
  useLayoutEffect,
  useRef,
} from "react";

type Context = {
  musicRef: RefObject<HTMLAudioElement>;
  toggle: (() => void) | null;
};

export const MusicContext = createContext<Context>({
  musicRef: createRef<HTMLAudioElement>(),
  toggle: null,
});

const bgm = "./sounds/bgm.mp3";

export function MusicProvider({ children }: { children: ReactNode }) {
  const musicRef = useRef<HTMLAudioElement | null>(null);

  useLayoutEffect(() => {
    musicRef.current = new Audio(bgm);
    musicRef.current.load();
    musicRef.current.loop = true;
    musicRef.current.volume = 0.1;
  }, []);

  const toggle = () =>
    musicRef.current?.paused
      ? musicRef.current?.play()
      : musicRef.current?.pause();

  return (
    <MusicContext.Provider
      value={{
        musicRef,
        toggle,
      }}
    >
      {children}
    </MusicContext.Provider>
  );
}
