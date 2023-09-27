import Image from "next/image";
import Link from "next/link";
import React from "react";

const Card = ({ itemKey, item }) => {
  const description = item?.description
    .replace(/<h1/g, "<p")
    .replace(/<\/h1>/g, "</p>")
    .replace(/<blockquote/g, "<p")
    .replace(/<\/blockquote>/g, "</p>");

  return (
    <div className="mb-10 block items-center gap-10 xl:flex" key={itemKey}>
      {item?.image && (
        <div className="relative h-80 flex-1">
          <Image src={item?.image} alt="demo" fill className="object-cover" sizes="400px" />
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
        <div
          className="text-xl font-light"
          dangerouslySetInnerHTML={{
            __html: description.substring(0, 100),
          }}
        />
        <Link href={`/posts/${item.slug}`} className="w-max border-b-2">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Card;
