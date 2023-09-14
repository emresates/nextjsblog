import Image from "next/image";
import Link from "next/link";
import React from "react";

const MenuPosts = ({ withImage }) => {
  return (
    <div className="flex flex-col gap-7">
      <Link href="/" className="mt-5 flex items-center gap-5">
        {withImage && (
          <div className="relative aspect-square flex-1">
            <Image
              src="/p1.jpeg"
              alt=""
              fill
              className="rounded-full border-2 object-cover"
              sizes="50px"
            />
          </div>
        )}
        <div className="ga-1 flex flex-[4] flex-col">
          <span className="w-max rounded-lg bg-blue-300 px-2 py-0.5 text-xs font-normal capitalize text-white">
            travel
          </span>
          <h3 className="text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            voluptatum.
          </h3>
          <div className="flex gap-2">
            <span className="font-thin">John Doe</span>
            <span className="text-gray-500">10.03.2023</span>
          </div>
        </div>
      </Link>
      <Link href="/" className="flex items-center gap-5">
        {withImage && (
          <div className="relative aspect-square flex-1">
            <Image
              src="/p1.jpeg"
              alt=""
              fill
              className="rounded-full border-2 object-cover"
              sizes="50px"
            />
          </div>
        )}
        <div className="ga-1 flex flex-[4] flex-col">
          <span className="w-max rounded-lg bg-lime-800 px-2 py-0.5 text-xs font-normal capitalize text-white">
            culture
          </span>
          <h3 className="text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            voluptatum.
          </h3>
          <div className="flex gap-2">
            <span className="font-thin">John Doe</span>
            <span className="text-gray-500">10.03.2023</span>
          </div>
        </div>
      </Link>
      <Link href="/" className="flex items-center gap-5">
        {withImage && (
          <div className="relative aspect-square flex-1">
            <Image
              src="/p1.jpeg"
              alt=""
              fill
              className="rounded-full border-2 object-cover"
              sizes="50px"
            />
          </div>
        )}
        <div className="ga-1 flex flex-[4] flex-col">
          <span className="w-max rounded-lg bg-orange-400 px-2 py-0.5 text-xs font-normal capitalize text-white">
            food
          </span>
          <h3 className="text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            voluptatum.
          </h3>
          <div className="flex gap-2">
            <span className="font-thin">John Doe</span>
            <span className="text-gray-500">10.03.2023</span>
          </div>
        </div>
      </Link>
      <Link href="/" className="flex items-center gap-5">
        {withImage && (
          <div className="relative aspect-square flex-1">
            <Image
              src="/p1.jpeg"
              alt=""
              fill
              className="rounded-full border-2 object-cover"
              sizes="50px"
            />
          </div>
        )}
        <div className="ga-1 flex flex-[4] flex-col">
          <span className="w-max rounded-lg bg-pink-400 px-2 py-0.5 text-xs font-normal capitalize text-white">
            fashion
          </span>
          <h3 className="text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            voluptatum.
          </h3>
          <div className="flex gap-2">
            <span className="font-thin">John Doe</span>
            <span className="text-gray-500">10.03.2023</span>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MenuPosts;
