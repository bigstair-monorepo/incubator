"use client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Logo from "../molecules/Logo";
import { CgWebsite } from "react-icons/cg";
import { FaDiscord } from "react-icons/fa";
import { AiFillTwitterCircle, AiFillYoutube } from "react-icons/ai";

interface FooterLink {
  id: number;
  url: string;
  newTab: boolean;
  text: string;
  social?: string;
}

interface CategoryLink {
  id: string;
  attributes: {
    name: string;
    slug: string;
  };
}

function FooterLink({ url, text }: FooterLink) {
  const path = usePathname();
  return (
    <li className="flex">
      <Link
        href={url}
        className={`hover:dark:text-violet-400 ${
          path === url && "dark:text-violet-400 dark:border-violet-400"
        }}`}
      >
        {text}
      </Link>
    </li>
  );
}

function CategoryLink({ attributes }: CategoryLink) {
  return (
    <li className="flex">
      <Link
        href={`/blog/${attributes.slug}`}
        className="hover:dark:text-violet-400"
      >
        {attributes.name}
      </Link>
    </li>
  );
}

function RenderSocialIcon({ social }: { social: string | undefined }) {
  switch (social) {
    case "WEBSITE":
      return <CgWebsite />;
    case "TWITTER":
      return <AiFillTwitterCircle />;
    case "YOUTUBE":
      return <AiFillYoutube />;
    case "DISCORD":
      return <FaDiscord />;
    default:
      return null;
  }
}

export default function Footer({
  logoUrl,
  logoText,
  menuLinks,
  categoryLinks,
  legalLinks,
  socialLinks,
}: {
  logoUrl: string ;
  logoText: string | null;
  menuLinks: Array<FooterLink>;
  categoryLinks: Array<CategoryLink>;
  legalLinks: Array<FooterLink>;
  socialLinks: Array<FooterLink>;
}) {

  return (

      <div className='grid phone-sm:grid-cols-1 phone-sm:px-10 gap-4 bg-black phone-md:flex-col phone-xs:flex-col phone-xs:px-8  mt-20 px-5 py-5 desktop:grid-cols-4 laptop:grid-cols-3'>
        <Image
          src={logoUrl}
          alt='logo image'
          width={284.73}
          height={259.49} />

        <div className='flex flex-col text-white'>
            <h3 className='mb-3 font-[800] font-inter text-[19.12px]'>
              Contact Us
            </h3>
            <ul>
              <li className='mb-5'>  1 Stratford</li>
              <li className='mb-5'> +234</li>
              <li className='mb-5'> email address</li>
            </ul>
        </div>
           

        <div className='flex flex-col text-white'>
          <h3 className='mb-3 font-[800] font-inter text-[19.12px]'> Quick Links </h3>
          <ul>
            <li className='mb-5 underline font-inter font-[400] text-[19.12px] text-primary'> <a href="#">Register your Business</a></li>
            <li className='mb-5 underline font-inter font-[400] text-[19.12px] text-primary'> Manange your business</li>
            <li className='mb-5 underline font-inter font-[400] text-[19.12px] text-primary'> Upcoming events</li>
          </ul>
        </div> 

        <div className='flex flex-col text-white'>
          <h3 className='mb-3 font-[800] font-inter text-[19.12px]'> 
            WANT US TO CONTACT YOU
          </h3>
          <div className='flex'>
            <input
              
                type="email"
                id="UserEmail"
                placeholder="Enter your email address"
                className="
                rounded-l-[16px]
                border-none
                px-4
                h-[41px]
                font-inter
                focus:border-transparent
                sm:text-sm"/>

              <button
                className="h-[41.2px] rounded-r-[16px]
                bg-primary px-6 
                py-3 text-sm font-bold 
                uppercase tracking-wide
                  text-white transition-none
                  hover:bg-primary sm:mt-0
                    sm:shrink-0"
              >
                Submit
            </button>
          </div>
        </div>
      
      </div>
  )
}
