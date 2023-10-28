import React from "react";
import ReactDOM from "react-dom/client";
import { Game } from "./components/Game";
import "./index.css";
import "./reset.css";
import { MusicProvider } from "./components/Music/MusicContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <MusicProvider>
      <Game />
    </MusicProvider>
  </React.StrictMode>
);
