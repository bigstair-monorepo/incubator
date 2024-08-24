"use client";
import Logo from "../molecules/Logo";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import dynamic from 'next/dynamic';
const Image = dynamic(() => import('next/image'));
import LOGO from 'public/logo.png'
import {NavLink} from '@molecules/MobileNavLink';
import {MobileNavLink} from '@molecules/MobileNavLink';



interface NavbarProps {
  links: Array<NavLink>;
  logoUrl: string | null;
  logoText: string | null;
}


export default function Navbar({
  links,
  logoUrl,
  logoText,
}: NavbarProps) {

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);


const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMenu = () => {
    setMobileMenuOpen(false);
  };


  return (
  
    <header className="bg-white"> 
      <div className="mx-auto flex h-18 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8 shadow justify-between">

        {/* LOGO */}
        <a className="block py-1"href="#">
          <span className="sr-only">Home</span>
          <Image src={LOGO} width={102} height={100} alt=''/>
        </a>

        {/* NAV */}
        <nav aria-label="Global" className="relative right-5 tablet:hidden phone-md:hidden phone-sm:hidden phone-xs:hidden">
            <ul className="flex items-center gap-6 text-sm *:text-black *:transition *:font-inter *:font-[600]  ">
             
              <li><a href="#" className='hover:underline underline-offset-8 decoration-primary'> Home  </a></li>
              <li><a href="#" className='hover:underline underline-offset-8 decoration-primary'> About  </a></li>
              <li><a href="#" className='hover:underline underline-offset-8 decoration-primary'> Contact  </a></li>
              <li><a href="#" className='hover:underline underline-offset-8 decoration-primary'> Membership  </a></li>

            </ul>
          </nav>
        
        
        {/* BUTTONS */}
        <div className="flex items-center justify-end md:justify-between  tablet:hidden phone-md:hidden phone-sm:hidden phone-xs:hidden">
         <div className="flex items-center gap-4 justify-end">
            <div className="flex gap-4">
              <a className="block rounded-md bg-white border border-primary px-5 py-2.5 text-sm font-medium text-primary transition hover:bg-primary hover:text-white" href="#">Login</a>
              <a  className="sm:hidden rounded-md bg-primary text-white px-5 py-2.5 text-sm font-medium transition hover:bg-primary-dark sm:block" href="#">Register</a>
            </div>
          </div>
        </div>
      
        {/* MOBILE MENU BUTTON */}
        <div className="flex laptop:hidden">
          <button
            type="button"
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white"
            onClick={toggleMobileMenu}
          >
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
     
      </div>

   
       {/* MOBILE MENU */}
      {mobileMenuOpen && (
        <div className="">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <MobileNavLink url="#" text="Home" closeMenu={closeMenu} />
            <MobileNavLink url="#" text="About" closeMenu={closeMenu} />
            <MobileNavLink url="#" text="Contact" closeMenu={closeMenu} />
            <MobileNavLink url="#" text="Membership" closeMenu={closeMenu} />
          </div>
          <div className="pt-4 pb-3 border-t border-gray-700">
            <div className="px-2 space-y-1">
              <a href="#" className="block rounded-md bg-white border border-primary px-5 py-2.5 text-sm font-medium text-primary transition hover:bg-primary hover:text-white text-center">Login</a>
              <a href="#" className="block rounded-md bg-primary text-white px-5 py-2.5 text-sm font-medium transition hover:bg-primary-dark text-center">Register</a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
