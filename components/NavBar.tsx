export default function NavBar() {
  return (
    <nav class="sticky top-0 z-20 bg-gray-100 dark:bg-gray-800 p-4 w-full">
      <div class="max-w-screen-lg mx-auto flex justify-between items-center">
        <div>
          <a
            href="#hero"
            class="hover:text-gray-500 dark:hover:text-gray-400 px-3"
          >
            Home
          </a>
          <a
            href="#about"
            class="hover:text-gray-500 dark:hover:text-gray-400 px-3"
          >
            About
          </a>
          <a
            href="#projects"
            class="hover:text-gray-500 dark:hover:text-gray-400 px-3"
          >
            Projects
          </a>
          <a
            href="#resume"
            class=" hover:text-gray-500 dark:hover:text-gray-400 px-3"
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
}
