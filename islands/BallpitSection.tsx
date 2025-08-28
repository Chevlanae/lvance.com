import Ballpit from "../islands/Ballpit.tsx";
import { useState } from "preact/hooks";

export default function BallpitSection() {
  const [isTransparent, setIsTransparent] = useState(false);

  const hoverHandler = () => {
    setIsTransparent(true);
  };

  const fadeClassName =
    `max-w-screen-lg mx-auto px-4 w-full h-full items-center justify-center flex flex-col fade-out-element ${
      isTransparent ? "transparent" : ""
    }`;

  return (
    <div class="py-12 h-screen flex justify-center items-center">
      <div
        onMouseEnter={hoverHandler}
        class={fadeClassName}
      >
        <h2 class="text-3xl font-bold mb-8 text-center">Ballpit</h2>
        <p>
          Move your mouse around!
        </p>
        <Ballpit />
      </div>
    </div>
  );
}
