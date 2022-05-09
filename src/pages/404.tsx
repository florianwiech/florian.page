import Head from "next/head";
import { Footer } from "../components/Footer";
import { GoBackHome } from "../components/GoBackHome";

export default function Error() {
  return (
    <main className="flex flex-col justify-center font-medium">
      <Head>
        <title>404 - Florian Wiech</title>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </Head>

      <header className="mx-auto w-full max-w-[960px] px-10 pt-11 pb-12 sm:px-20 sm:pt-24 sm:pb-16">
        <h1 className="mb-7 flex font-extrabold text-neutral-900 dark:text-neutral-50 sm:mb-10">
          <span className="bg-clip-text text-4xl antialiased sm:text-6xl">404</span>
        </h1>
        <p className="max-w-3xl text-3xl text-3xl font-bold text-neutral-700 dark:text-neutral-200 sm:text-4xl">
          Page not found.
        </p>
      </header>

      <section className="mx-auto w-full max-w-[960px] px-10 sm:px-20">
        <p>Sorry, we couldn&apos;t find the page you&apos;re looking for.</p>
      </section>

      <section className="mx-auto w-full max-w-[960px] px-10 pt-16 sm:px-20">
        <GoBackHome />
      </section>

      <Footer />
    </main>
  );
}
