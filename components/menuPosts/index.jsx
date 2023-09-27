import Image from "next/image";
import Link from "next/link";
import React from "react";

const getData = async (order, user) => {
  const res = await fetch(
    `${process.env.API_URL}/posts?order=${order || ""}&user=${user || ""}`,
    {
      cache: "no-store",
    },
  );

  if (!res.ok) {
    throw new Error("Something went wrong");
  }

  return res.json();
};

const MenuPosts = async ({ withImage }) => {
  const { posts } = await getData("views", true);

  console.log(posts);

  return (
    <div className="flex flex-col gap-7">
      {posts.map((post) => (
        <Link href="/" className="mt-5 flex items-center gap-5">
          {withImage && (
            <div className="relative aspect-square flex-1">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="rounded-full border-2 object-cover"
                sizes="50px"
              />
            </div>
          )}
          <div className="ga-1 flex flex-[4] flex-col">
            <span
              className={`w-max rounded-lg px-2 py-0.5 text-xs font-normal capitalize text-white ${
                post.catSlug === "style"
                  ? "bg-slate-400"
                  : post.catSlug === "fashion"
                  ? "bg-pink-400"
                  : post.catSlug === "food"
                  ? "bg-orange-400"
                  : post.catSlug === "travel"
                  ? "bg-blue-300"
                  : post.catSlug === "culture"
                  ? "bg-lime-800"
                  : "bg-emerald-800"
              }`}
            >
              {post.catSlug}
            </span>
            <h3 className="text-base">{post.title}</h3>
            <div className="flex gap-2">
              <span className="font-thin">{post.user.name}</span>
              <span className="text-gray-500">
                {post.createdAt.substring(0, 10)}
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MenuPosts;
