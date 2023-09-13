import Link from "next/link";
import React from "react";

const MenuCategories = () => {
  return (
    <div className="mx-8 flex flex-wrap gap-4">
      <Link
        href="/blog?cat=style"
        className="rounded-xl bg-slate-400 px-4 py-1 capitalize"
      >
        style
      </Link>
      <Link
        href="/blog?cat=style"
        className="rounded-xl bg-pink-400 px-4 py-1 capitalize"
      >
        fashion
      </Link>
      <Link
        href="/blog?cat=style"
        className="rounded-xl bg-orange-400 px-4 py-1 capitalize"
      >
        food
      </Link>
      <Link
        href="/blog?cat=style"
        className="rounded-xl bg-blue-300 px-4 py-1 capitalize"
      >
        travel
      </Link>
      <Link
        href="/blog?cat=style"
        className="rounded-xl bg-lime-800 px-4 py-1 capitalize"
      >
        culture
      </Link>
      <Link
        href="/blog?cat=style"
        className="rounded-xl bg-emerald-800 px-4 py-1 capitalize"
      >
        coding
      </Link>
    </div>
  );
};

export default MenuCategories;
