import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="mt-10 flex flex-col items-center justify-between py-4 sm:flex-row">
      <div className="flex flex-1 flex-col gap-3">
        <div className="flex items-center gap-2">
          <div className="relative w-12 aspect-square">
            <Image src="/eawhite.png" alt="ealogo" fill sizes="30px" className="object-cover" />
          </div>
          <h1 className="text-xl">Secenory Blog</h1>
        </div>
        <p className="font-light">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          dolorem non officia iusto reiciendis optio excepturi et culpa fugiat
          dolores quos reprehenderit, voluptate cupiditate ullam itaque quia id
          qui sint?
        </p>
        <div className="mt-2 flex gap-2">
          <div className="relative h-4 w-4 md:h-6 md:w-6">
            <Image src="/socials/linkedin.png" alt="" fill sizes="30px" />
          </div>
          <div className="relative block h-4 w-4 dark:hidden md:h-6 md:w-6">
            <Image src="/socials/github.png" alt="" fill sizes="30px" />
          </div>
          <div className="relative hidden h-4 w-4 dark:block md:h-6 md:w-6">
            <Image src="/socials/githubdark.png" alt="" fill sizes="30px" />
          </div>
          <div className="relative h-4 w-4 md:h-6 md:w-6">
            <Image src="/socials/instagram.png" alt="" fill sizes="30px" />
          </div>
          <div className="relative h-4 w-4 md:h-6 md:w-6">
            <Image src="/socials/pinterest.png" alt="" fill sizes="30px" />
          </div>
        </div>
      </div>
      <div className="mt-3 flex w-full flex-1 justify-between gap-10 sm:mt-0 sm:justify-end">
        <div className="flex flex-col gap-2 font-light">
          <span className="font-bold">Links</span>
          <Link href="/">Homepage</Link>
          <Link href="/">Blog</Link>
          <Link href="/">Contact</Link>
          <Link href="/">About</Link>
        </div>
        <div className="flex flex-col gap-2 font-light">
          <span className="font-bold">Tags</span>
          <Link href="/">Style</Link>
          <Link href="/">Fashion</Link>
          <Link href="/">Coding</Link>
          <Link href="/">Travel</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
