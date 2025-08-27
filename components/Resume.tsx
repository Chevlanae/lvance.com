export default function Resume() {
  return (
    <section
      id="resume"
      class="py-12 h-screen justify-center items-center flex"
    >
      <div class="max-w-screen-lg mx-auto px-4 text-center">
        <h2 class="text-3xl font-bold mb-8">Resume</h2>
        <p class="mb-4">
          You can view and download my resume by clicking the button below.
        </p>
        <a
          href="/Leah_Vance.pdf"
          target="_blank"
          class="relative inline-block text-lg group"
        >
          <span class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white dark:text-gray-200 dark:border-gray-200">
            <span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50 dark:bg-gray-700">
              &nbsp;
            </span>
            <span class="absolute left-0 w-full h-0 transition-all duration-300 ease-in-out bg-gray-900 bottom-0 group-hover:h-full rounded-lg">
            </span>
            <span class="relative">Download Resume</span>
          </span>
          <span class="absolute bottom-0 right-0 w-full h-full -mb-1 -mr-1 transition-all duration-300 ease-in-out border  bg-gray-900 border-gray-900 rounded-lg">
          </span>
        </a>
      </div>
    </section>
  );
}
