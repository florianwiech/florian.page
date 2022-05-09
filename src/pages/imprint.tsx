import { NextPage } from "next";
import Head from "next/head";
import { Footer } from "../components/Footer";
import { GoBackHome } from "../components/GoBackHome";

const Imprint: NextPage = () => {
  return (
    <main className="flex flex-col justify-center font-medium">
      <Head>
        <title>Imprint - Florian Wiech</title>
        <meta name="description" content="Personal Website and Blog" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </Head>

      <header className="mx-auto w-full max-w-[960px] px-10 pt-11 pb-12 sm:px-20 sm:pt-24 sm:pb-16">
        <h1 className="flex font-extrabold text-neutral-900 dark:text-neutral-50">
          <span className="bg-clip-text text-4xl antialiased sm:text-6xl">Imprint</span>
        </h1>
      </header>

      <section className="mx-auto w-full max-w-[960px] px-10 sm:px-20">
        <address className="not-italic">
          <b className="block pb-1">Florian Wiech</b>
          <span className="block pb-2">
            c/o codecentric AG
            <br />
            Lise-Meitner-Straße 4
            <br />
            60486 Frankfurt am Main
            <br />
            Germany
          </span>
          <a href="mailto:florian.wiech@gmail.com" className="before:pr-1 before:content-['📧']">
            social.florian.wiech@gmail.com
          </a>
          <br />
        </address>
      </section>

      <section className="mx-auto w-full max-w-[960px] px-10 pt-16 sm:px-20">
        <GoBackHome />
      </section>

      <Footer />
    </main>
  );
};

export default Imprint;
