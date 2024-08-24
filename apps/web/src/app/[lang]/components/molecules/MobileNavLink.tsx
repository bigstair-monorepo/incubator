"use client";
import Logo from "./Logo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import dynamic from 'next/dynamic';
const Image = dynamic(() => import('next/image'));
import LOGO from 'public/logo.png'
// Image
export interface NavLink {
  id?: number;
  url: string;
  newTab?: boolean;
  text?: string;
}

interface MobileNavLink extends NavLink {
  closeMenu: () => void;
}




export function MobileNavLink({ url, text, closeMenu }: MobileNavLink) {
  const path = usePathname();
  const handleClick = () => {
    closeMenu();
  };
  return (
    <a className="flex  justify-center ">
      <Link
        href={url}
        onClick={handleClick}
        className={`-mx-3 blockrounded-lg px-3 py-2 text-base font-semibold leading-7 text-black hover:bg-primary ${
          path === url && "dark:text-violet-400 dark:border-violet-400"
        }}`}
      >
        {text}
      </Link>
    </a>
  );
}