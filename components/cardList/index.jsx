import React from "react";
import Pagination from "../pagination";
import Card from "../card";

const getData = async () => {
  const res = await fetch("http://localhost:3000/api/posts", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Something went wrong");
  }

  return res.json();
};

const CardList = async () => {
  const data = await getData();
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
