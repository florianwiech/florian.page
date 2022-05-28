import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="bg-white text-neutral-600 dark:bg-neutral-900 dark:text-neutral-300">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
