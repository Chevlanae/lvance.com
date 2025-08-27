export default function Projects() {
  return (
    <div
      id="projects"
      class="py-12 mt-20 min-h-screen bg-gray-100 dark:bg-gray-800 justify-center items-center flex"
    >
      <div class="max-w-screen-lg mx-auto px-4">
        <h2 class="text-3xl font-bold mb-8 text-center">Projects</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <h3 class="text-xl font-semibold mb-4">lvance.com</h3>
            <p class="text-gray-700 dark:text-gray-300 mb-4">
              This very website! Built with Deno, Fresh, and deployed on Deno
              Deploy.
            </p>
            <a
              target="_blank"
              href="https://github.com/Chevlanae/lvance.com"
              class="text-blue-500 hover:underline"
            >
              Learn More
            </a>
          </div>
          <div class="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <h3 class="text-xl font-semibold mb-4">Ollama Client</h3>
            <p class="text-gray-700 dark:text-gray-300 mb-4">
              A simple client for interacting with Ollama's local LLMs via their
              API. Built using WinUI3.
            </p>
            <a
              target="_blank"
              href="https://github.com/Chevlanae/OllamaClient"
              class="text-blue-500 hover:underline"
            >
              Learn More
            </a>
          </div>
          <div class="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow">
            <h3 class="text-xl font-semibold mb-4">Kraken Trader</h3>
            <p class="text-gray-700 dark:text-gray-300 mb-4">
              A trading bot for the Kraken cryptocurrency exchange, built with
              C# and CryptoExchange.Net.
            </p>
            <a
              target="_blank"
              href="https://github.com/Chevlanae/KrakenTrader"
              class="text-blue-500 hover:underline"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
