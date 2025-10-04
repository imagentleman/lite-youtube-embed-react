import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import LiteYoutubeEmbed from "../lib";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <h1>
      <code>lite-youtube</code> custom element
    </h1>

    <LiteYoutubeEmbed
      videoid="goiWrNiaT0I"
      playlabel="Play: Crayon Physics Deluxe - Trailer HD"
    ></LiteYoutubeEmbed>
  </StrictMode>
);
