import { FC } from "react";
import Link from "next/link";
import GitHub from "bootstrap-icons/icons/github.svg";

export const Footer: FC = () => {
  return (
    <footer className="mx-auto flex w-full max-w-[960px] flex-col items-center px-10 pt-12 pb-12 sm:flex-row sm:px-20 sm:pt-12 sm:pb-20">
      <ul className="flex list-none items-center space-x-4 pb-4 sm:order-last sm:pb-0">
        <li>
          <Link href="/about">
            <a>About</a>
          </Link>
        </li>
        <li>
          <Link href="/imprint">
            <a>Imprint</a>
          </Link>
        </li>
        <li>
          <a
            href="https://github.com/florianwiech"
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-8 w-8 transform transform-gpu items-center justify-center rounded-full transition duration-200 hover:translate-y-[-2px] hover:bg-neutral-50 dark:bg-opacity-20 dark:hover:bg-opacity-40 dark:hover:text-white"
            aria-label="GitHub"
          >
            <GitHub alt="GitHub" className="h-4 w-4 transform" />
          </a>
        </li>
      </ul>
      <small className="m-auto text-base text-neutral-400 sm:mr-auto sm:ml-0">©&nbsp;2022 Florian&nbsp;Wiech</small>
    </footer>
  );
};
