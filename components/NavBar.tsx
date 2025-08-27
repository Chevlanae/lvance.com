export default function NavBar() {
  return (
    <nav class="bg-gray-100 dark:bg-gray-800 p-4 sticky top-0 w-full">
      <div class="max-w-screen-lg mx-auto flex justify-between items-center">
        <div class=" font-bold text-xl">
          lvance.com
        </div>
        <div>
          <a
            href="#hero"
            class="hover:text-black dark:hover:text-white px-3"
          >
            Home
          </a>
          <a
            href="#about"
            class="hover:text-black dark:hover:text-white px-3"
          >
            About
          </a>
          <a
            href="#projects"
            class="hover:text-black dark:hover:text-white px-3"
          >
            Projects
          </a>
          <a
            href="#resume"
            class=" hover:text-black dark:hover:text-white px-3"
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
}
