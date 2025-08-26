export default function Projects() {
  return (
    <section
      id="projects"
      class="py-12 h-screen bg-gray-100 dark:bg-gray-800 justify-center items-center flex"
    >
      <div class="max-w-screen-lg mx-auto px-4">
        <h2 class="text-3xl font-bold mb-8 text-center">Projects</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <h3 class="text-xl font-semibold mb-4">Project One</h3>
            <p class="text-gray-700 dark:text-gray-300 mb-4">
              A brief description of Project One. This project involves...
            </p>
            <a href="#" class="text-blue-500 hover:underline">Learn More</a>
          </div>
          <div class="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <h3 class="text-xl font-semibold mb-4">Project Two</h3>
            <p class="text-gray-700 dark:text-gray-300 mb-4">
              A brief description of Project Two. This project focuses on...
            </p>
            <a href="#" class="text-blue-500 hover:underline">Learn More</a>
          </div>
          <div class="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <h3 class="text-xl font-semibold mb-4">Project Three</h3>
            <p class="text-gray-700 dark:text-gray-300 mb-4">
              A brief description of Project Three. This project is about...
            </p>
            <a href="#" class="text-blue-500 hover:underline">Learn More</a>
          </div>
        </div>
      </div>
    </section>
  );
}
