import Image from "next/image";
import Link from "next/link";
import React from "react";

const getData = async () => {
  const res = await fetch("http://localhost:3000/api/categories", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Something went wrong");
  }

  return res.json();
};

const CategoryList = async () => {
  const data = await getData();
  return (
    <div className="">
      <h1 className="my-10 text-4xl">Popular Categories</h1>
      <div className="flex flex-wrap justify-between gap-5">
        {data?.map((item) => (
          <Link
            key={item.id}
            href="/blog?cat=style"
            className={`flex h-20 w-full items-center justify-center gap-x-2 rounded-xl capitalize sm:w-[45%] md:w-1/4 lg:w-1/5 xl:w-[15%] ${item.bgColor}`}
          >
            <div className="relative h-10 w-10">
              {item.image && (
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="rounded-full"
                  sizes="30px"
                />
              )}
            </div>
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
