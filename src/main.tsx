import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import LiteYoutubeEmbed from "./lib";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <h1>
      <code>lite-youtube</code> custom element
    </h1>

    <LiteYoutubeEmbed videoid="goiWrNiaT0I"></LiteYoutubeEmbed>

    <h3>View isolated demos:</h3>
    <ul>
      <li>
        <a href="./variants/solo.html">lite-youtube-embed</a>
      </li>
    </ul>
  </StrictMode>
);
