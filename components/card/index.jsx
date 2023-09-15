import Image from "next/image";
import Link from "next/link";
import React from "react";

const Card = ({ key, item }) => {
  return (
    <div className="mb-10 block items-center gap-10 xl:flex" key={key}>
      {item.image && (
        <div className="relative h-80 flex-1">
          <Image src={item.image} alt="demo" fill className="object-cover" />
        </div>
      )}
      <div className="mt-2 flex flex-1 flex-col gap-2 sm:gap-4">
        <div>
          <span className="text-gray-500">
            {item.createdAt.substring(0, 10)} -{" "}
          </span>
          <span className="font-semibold capitalize text-red-300">
            {item.catSlug}
          </span>
        </div>
        <Link href={`/posts/${item.slug}`} className="text-2xl font-medium">
          {item.title}
        </Link>
        <p className="text-xl font-light">
          {item.description.substring(0, 100)}
        </p>
        <Link href={`/posts/${item.slug}`} className="w-max border-b-2">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Card;
