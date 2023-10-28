import {
  ReactNode,
  RefObject,
  createContext,
  createRef,
  useEffect,
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

const bgm = "./sounds/bgm.ogg";

export function MusicProvider({ children }: { children: ReactNode }) {
  const musicRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    musicRef.current = new Audio(bgm);
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
