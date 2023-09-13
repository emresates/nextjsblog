import Image from "next/image";
import Link from "next/link";
import React from "react";

const CategoryList = () => {
  return (
    <div className="">
      <h1 className="my-10 text-4xl">Popular Categories</h1>
      <div className="flex flex-wrap justify-between gap-5">
        <Link
          href="/blog?cat=style"
          className={`flex h-20 w-full items-center justify-center gap-x-2 rounded-xl bg-slate-400 capitalize sm:w-[45%] md:w-1/4 lg:w-1/5 xl:w-[15%]`}
        >
          <div className="relative h-10 w-10">
            <Image src="/style.png" alt="" fill className="rounded-full" />
          </div>
          style
        </Link>
        <Link
          href="/blog?cat=style"
          className={`flex h-20 w-full items-center justify-center gap-x-2 rounded-xl bg-pink-400 capitalize sm:w-[45%] md:w-1/4 lg:w-1/5 xl:w-[15%]`}
        >
          <div className="relative h-10 w-10">
            <Image src="/fashion.png" alt="" fill className="rounded-full" />
          </div>
          fashion
        </Link>
        <Link
          href="/blog?cat=style"
          className={`flex h-20 w-full items-center justify-center gap-x-2 rounded-xl bg-orange-400 capitalize sm:w-[45%] md:w-1/4 lg:w-1/5 xl:w-[15%]`}
        >
          <div className="relative h-10 w-10">
            <Image src="/food.png" alt="" fill className="rounded-full" />
          </div>
          food
        </Link>
        <Link
          href="/blog?cat=style"
          className={`flex h-20 w-full items-center justify-center gap-x-2 rounded-xl bg-blue-300 capitalize sm:w-[45%] md:w-1/4 lg:w-1/5 xl:w-[15%]`}
        >
          <div className="relative h-10 w-10">
            <Image src="/travel.png" alt="" fill className="rounded-full" />
          </div>
          travel
        </Link>
        <Link
          href="/blog?cat=style"
          className={`flex h-20 w-full items-center justify-center gap-x-2 rounded-xl bg-lime-800 capitalize sm:w-[45%] md:w-1/4 lg:w-1/5 xl:w-[15%]`}
        >
          <div className="relative h-10 w-10">
            <Image src="/culture.png" alt="" fill className="rounded-full" />
          </div>
          culture
        </Link>
        <Link
          href="/blog?cat=style"
          className={`flex h-20 w-full items-center justify-center gap-x-2 rounded-xl bg-emerald-800 capitalize sm:w-[45%] md:w-1/4 lg:w-1/5 xl:w-[15%]`}
        >
          <div className="relative h-10 w-10">
            <Image src="/coding.png" alt="" fill className="rounded-full" />
          </div>
          coding
        </Link>
      </div>
    </div>
  );
};

export default CategoryList;
