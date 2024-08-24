
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";;

interface NavLink {
  id?: number;
  url: string;
  newTab?: boolean;
  text?: string;
}

export default function NavLink ({ url, text }: NavLink) {
  const path = usePathname();

  return (
    // <li className="flex">
      <Link
        href={url}
        className={`flex items-center mx-4 -mb-1 border-b-2 dark:border-transparent ${
          path === url && "dark:text-violet-400 dark:border-violet-400"
        }}`}
      > 
        {text}
      </Link>
    // </li>
  );
}