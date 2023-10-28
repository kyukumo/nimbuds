import { useContext } from "react";
import { MusicContext } from "./MusicContext";

export const useMusicContext = () => {
  const context = useContext(MusicContext);
  return context;
};
