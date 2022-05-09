import type { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import LogoSquare from "../assets/flow-square.svg";
import { Footer } from "../components/Footer";

const Home: NextPage = () => {
  return (
    <main className="flex flex-col justify-center font-medium">
      <Head>
        <title>Florian Wiech - Software Developer</title>
        <meta name="description" content="Personal Website and Blog" />
        <link rel="shortcut icon" href="/favicon.svg" type="image/svg+xml" />
      </Head>

      <header className="mx-auto w-full max-w-[960px] px-10 pt-11 pb-12 sm:px-20 sm:pt-24 sm:pb-16">
        <h1 className="mb-7 flex font-extrabold text-neutral-900 dark:text-neutral-50 sm:mb-10">
          <span className="bg-clip-text text-4xl antialiased sm:text-6xl">florian.page</span>
        </h1>
        <p className="max-w-3xl text-3xl text-3xl font-bold text-neutral-700 dark:text-neutral-200 sm:text-4xl">
          A collection of projects &amp; articles,
          <br />
          brought to you by
          <Link href="/about">
            <a className="relative top-[2px] -m-1 ml-0 inline-flex translate-y-[4px] transform items-center space-x-1 rounded-full border border-transparent bg-slate-100 bg-opacity-0 p-1.5 leading-none text-opacity-90 no-underline transition duration-200 hover:translate-y-[2px] hover:bg-opacity-100 hover:text-opacity-100 dark:text-white dark:hover:bg-opacity-20 sm:top-0">
              <LogoSquare className="inline-block h-5 rounded-full bg-black text-white dark:bg-white dark:text-neutral-900 sm:h-8" />
              <span className="translate-y-[-1px] transform pr-1">Florian Wiech</span>
            </a>
          </Link>
        </p>
      </header>

      <section className="mx-auto w-full max-w-[960px] px-10 sm:px-20">
        <div className="flex flex-col items-stretch space-y-12 md:flex-row md:space-x-12 md:space-y-0">
          <article className="flex-1">
            <a
              href="https://github.com/florianwiech/codewaffle"
              target="_blank"
              rel="noreferrer"
              className="group flex transform flex-col items-center rounded-xl bg-slate-50 py-10 px-8 text-center transition duration-200 hover:translate-y-[-4px] dark:bg-neutral-800 dark:hover:bg-neutral-700"
            >
              <img
                src="/CodeWaffle.png"
                className="w-52 transform transition duration-200 group-hover:translate-y-[-2px]"
              />
              <h3 className="pb-2 text-3xl font-bold text-neutral-900 dark:text-neutral-50">CodeWaffle</h3>
              <p className="max-w-md text-lg font-semibold dark:text-white dark:text-opacity-70">
                Powerful developer scratchpad combined with tools for your everyday tasks.
              </p>
            </a>
          </article>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Home;
