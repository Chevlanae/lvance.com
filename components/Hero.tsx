import BorderButtomAnimated from "./BorderButtonAnimated.tsx";

export default function Hero() {
  return (
    <div
      id="hero"
      class="bg-gray-100 dark:bg-gray-800 px-4 py-8 mx-auto h-screen flex"
    >
      <div class="justify-center items-center flex flex-col mx-auto">
        <h1 class="text-4xl font-bold mb-4">Hello im Leah</h1>
        <p class="text-lg text-center mb-6">
          I'm an IT professional and a hobbyist programmer.
        </p>
        <BorderButtomAnimated href="#about" text="About Me" />
      </div>
    </div>
  );
}
