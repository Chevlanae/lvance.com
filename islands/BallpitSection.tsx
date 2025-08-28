import Ballpit from "../islands/Ballpit.tsx";
import { useState } from "preact/hooks";

export default function BallpitSection() {
  const [isFading, setIsFading] = useState(false);

  const hoverHandler = () => {
    setIsFading(true);
  };

  return (
    <div class="py-12 h-screen flex flex-col justify-center items-center">
      <div
        onMouseEnter={hoverHandler}
        class={`absolute z-1 mx-auto px-4 items-center justify-center flex flex-col 
          fade-element ${isFading ? "fade-out" : ""}`}
      >
        <h2 class="text-3xl font-bold mb-8 text-center">Ballpit</h2>
        <p>
          Move your mouse around, or tap the screen!
        </p>
      </div>
      <Ballpit />
    </div>
  );
}
