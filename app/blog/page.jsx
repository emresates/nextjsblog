import CardList from "@/components/cardList";
import Menu from "@/components/menu";
import React from "react";

const BlogPage = ({ searchParams }) => {
  const page = parseInt(searchParams.page) || 1;
  const { cat } = searchParams;
  return (
    <div>
      <h1 className="bg-orange-500 px-1 py-2 text-center text-3xl font-bold capitalize text-white">
        {cat} Blog
      </h1>
      <div className="flex gap-10">
        <CardList page={page} cat={cat} />
        <Menu />
      </div>
    </div>
  );
};

export default BlogPage;
