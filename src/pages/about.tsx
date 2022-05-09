import type { NextPage } from "next";
import Head from "next/head";
import { Footer } from "../components/Footer";
import { GoBackHome } from "../components/GoBackHome";

const Home: NextPage = () => {
  return (
    <main className="flex flex-col justify-center font-medium">
      <Head>
        <title>About - Florian Wiech</title>
        <meta name="description" content="Personal Website and Blog" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </Head>

      <header className="mx-auto w-full max-w-[960px] px-10 pt-11 pb-12 sm:px-20 sm:pt-24 sm:pb-16">
        <h1 className="mb-7 flex font-extrabold text-neutral-900 dark:text-neutral-50 sm:mb-10">
          <span className="bg-clip-text text-4xl antialiased sm:text-6xl">About</span>
        </h1>
        <p className="max-w-3xl text-3xl text-3xl font-bold text-neutral-700 dark:text-neutral-200 sm:text-4xl">
          Hey, I&apos;m Florian&nbsp;Wiech! 👋
        </p>
      </header>

      <section className="mx-auto w-full max-w-[960px] px-10 sm:px-20">
        <p>
          I&apos;m a software engineer from Germany working as an IT Consultant at{" "}
          <a href="https://codecentric.de" target="_blank" rel="noreferrer">
            codecentric AG
          </a>
          .
          <br />
          Currently I focus on the JavaScript Ecosystem and AWS Cloud.
          <br />
          My Motto: <i>&quot;The only constant is change.&quot;</i>
          <br />
          <br />
          In the past I&apos;ve worked with several different technologies.
          <br />
          Some of them are (in no particular order): Python, Java, Kubernetes, Keycloak, Angular, Tensorflow
        </p>
      </section>

      <section className="mx-auto w-full max-w-[960px] px-10 pt-16 text-center sm:px-20 sm:text-left">
        <GoBackHome />
      </section>

      <Footer />
    </main>
  );
};

export default Home;
