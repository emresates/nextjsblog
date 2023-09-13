import Image from "next/image";
import Link from "next/link";
import React from "react";

const Card = () => {
  return (
    <div className="mb-10 block xl:flex items-center gap-10">
      <div className="relative h-80 flex-1">
        <Image src="/p1.jpeg" alt="demo" fill className="object-cover" />
      </div>
      <div className="flex flex-1 flex-col mt-2 gap-2 sm:gap-4">
        <div>
          <span className="text-gray-500">11.02.2023 - </span>
          <span className="font-semibold capitalize text-red-300">culture</span>
        </div>
        <h1 className="text-2xl font-medium">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </h1>
        <p className="text-xl font-light">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur
          esse voluptate tempora amet saepe, praesentium perspiciatis placeat
          facere enim aliquam ex consequuntur modi minus in voluptates quisquam
          itaque corporis dolores!
        </p>
        <Link href="/" className="w-max border-b-2">
          Read More
        </Link>
      </div>
    </div>
  );
};

export default Card;
