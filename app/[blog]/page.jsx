import CardList from "@/components/cardList";
import Menu from "@/components/menu";
import React from "react";

const BlogPage = () => {
  return (
    <div>
      <h1 className="bg-orange-500 px-1 py-2 text-center text-3xl font-bold text-white">
        Style Blog
      </h1>
      <div className="flex gap-10">
        <CardList />
        <Menu />
      </div>
    </div>
  );
};

export default BlogPage;
