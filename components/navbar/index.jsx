import Image from "next/image";
import Link from "next/link";
import React from "react";
import AuthLinks from "../authLinks";
import ThemeToggle from "../themeToggle";

const Navbar = () => {
  return (
    <div className="flex h-24 items-center justify-between">
      <div className="block flex-[3] flex-row-reverse md:flex">
        <h1 className="flex-[2] text-left text-2xl md:text-3xl font-bold md:text-center">
          Secenory Blog
        </h1>
        <div className="flex h-full flex-1 gap-x-2">
          <div className="relative h-6 w-6 md:h-8 md:w-8">
            <Image src="/socials/linkedin.png" alt="" fill sizes="30px"  />
          </div>
          <div className="relative h-6 w-6 md:h-8 md:w-8 block dark:hidden">
            <Image src="/socials/github.png" alt="" fill sizes="30px" />
          </div>
          <div className="relative h-6 w-6 md:h-8 md:w-8 hidden dark:block">
            <Image src="/socials/githubdark.png" alt="" fill sizes="30px" />
          </div>
          <div className="relative h-6 w-6 md:h-8 md:w-8">
            <Image src="/socials/instagram.png" alt="" fill sizes="30px" />
          </div>
          <div className="relative h-6 w-6 md:h-8 md:w-8">
            <Image src="/socials/pinterest.png" alt="" fill sizes="30px" />
          </div>
        </div>
      </div>

      <div className="flex z-50 flex-1 justify-end gap-x-4 md:justify-center md:gap-x-2">
        <ThemeToggle />
        <Link href="/" className="hidden md:block">
          Homepage
        </Link>
        <Link href="/" className="hidden md:block">
          Contact
        </Link>
        <Link href="/" className="hidden md:block">
          About
        </Link>
        <AuthLinks />
      </div>
    </div>
  );
};

export default Navbar;
