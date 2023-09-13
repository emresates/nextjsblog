import Image from "next/image";
import Link from "next/link";
import React from "react";
import MenuPosts from "../menuPosts";
import MenuCategories from "../menuCategories";

const Menu = () => {
  return (
    <div className="mt-16 flex-[2]">
      <h2 className="text-lg font-normal text-gray-500">What's hot</h2>
      <h1 className="text-2xl">Most Popular</h1>
      <MenuPosts withImage={false} />

      <h2 className="mt-5 text-lg font-normal text-gray-500">
        Discover by topic
      </h2>
      <h1 className="text-2xl">Categories</h1>
      <MenuCategories />

      <h2 className="mt-5 text-lg font-normal text-gray-500">
        Choosen by the editor
      </h2>
      <h1 className="text-2xl">Editor's pick</h1>
      <MenuPosts withImage={true} />
    </div>
  );
};

export default Menu;
