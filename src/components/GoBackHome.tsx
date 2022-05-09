import { FC } from "react";
import Link from "next/link";

export const GoBackHome: FC = () => {
  return (
    <Link href="/">
      <a className="pb-0.5 text-black text-opacity-70 transition duration-200 ease-in hover:text-opacity-100 dark:text-neutral-300 dark:hover:text-neutral-50">
        Go back home
      </a>
    </Link>
  );
};
