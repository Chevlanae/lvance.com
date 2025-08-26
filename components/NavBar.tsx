export default function NavBar() {
  return (
    <nav class="bg-gray-100 dark:bg-gray-800 p-4 sticky top-0 w-full">
      <div class="max-w-screen-lg mx-auto flex justify-between items-center">
        <div class="dark:text-black dark:text-gray-300 font-bold text-xl">
          lvance.com
        </div>
        <div>
          <a
            href="#hero"
            class="dark:text-black dark:text-gray-300 hover:text-white px-3"
          >
            Home
          </a>
          <a
            href="#about"
            class="dark:text-black dark:text-gray-300 hover:text-white px-3"
          >
            About
          </a>
          <a
            href="#projects"
            class="dark:text-black dark:text-gray-300 hover:text-white px-3"
          >
            Projects
          </a>
          <a
            href="#contact"
            class="dark:text-black dark:text-gray-300 hover:text-white px-3"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
