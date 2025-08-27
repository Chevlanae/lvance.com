export default function Hero() {
  return (
    <div
      id="hero"
      class="px-4 py-8 mx-auto min-h-screen flex bg-gradient-to-r from-gray-800 via-purple-700 to-red-500 animate-gradient-xy"
    >
      <div class="justify-center items-center flex flex-col mx-auto">
        <h1 class="text-4xl text-white font-bold mb-4">Hello im Leah</h1>
        <p class="text-lg text-white text-center mb-6">
          I'm an IT professional and a hobbyist programmer.
        </p>
        <a
          href="#about"
          class="relative inline-block text-lg group"
        >
          <span class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white dark:text-gray-200 dark:border-gray-200">
            <span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50 dark:bg-gray-700">
            </span>
            <span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 dark:bg-gray-800 group-hover:-rotate-180 ease">
            </span>
            <span class="relative">About Me</span>
          </span>
          <span class="absolute bottom-0 right-0 w-full h-full -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0">
          </span>
        </a>
      </div>
    </div>
  );
}
