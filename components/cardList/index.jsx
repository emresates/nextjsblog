import React from "react";
import Pagination from "../pagination";
import Card from "../card";

const getData = async (page) => {
  const res = await fetch(`http://localhost:3000/api/posts?page=${page}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Something went wrong");
  }

  return res.json();
};

const CardList = async ({ page }) => {
  const { posts, count } = await getData(page);

  const POST_PER_PAGE = 2;

  const hasPrev = POST_PER_PAGE * (page - 1) > 0;
  const hasNext = POST_PER_PAGE * (page - 1) + POST_PER_PAGE < count;

  console.log(posts);

  return (
    <div className="flex-[5]">
      <h1 className="my-10 text-4xl">Recent Posts</h1>
      <div className="posts">
        {posts?.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </div>
      <Pagination page={page} hasPrev={hasPrev} hasNext={hasNext} />
    </div>
  );
};

export default CardList;
