import React from "react";
import Pagination from "../pagination";
import Card from "../card";

const CardList = () => {
  return (
    <div className="flex-[5]">
      <h1 className="my-10 text-4xl">Recent Posts</h1>
      <div className="posts">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <Pagination />
    </div>
  );
};

export default CardList;
