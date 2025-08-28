import { type PageProps } from "$fresh/server.ts";
export default function App({ Component }: PageProps) {
  return (
    <html class="scroll-smooth">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>lvance.com</title>
        <link rel="stylesheet" href="/styles.css" />
      </head>
      <body class=" bg-gray-100 dark:bg-gray-800 text-black dark:text-white">
        <Component />
      </body>
    </html>
  );
}
