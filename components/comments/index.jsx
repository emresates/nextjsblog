"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import useSWR from "swr";

const fetcher = async (url) => {
  const res = await fetch(url);
  const data = await res.json();

  if (!res.ok) {
    throw new Error(data.message);
  }

  return data;
};

const Comments = ({ postSlug }) => {
  const { status } = useSession();
  const { data, mutate, isLoading } = useSWR(
    `http://localhost:3000/api/comments?postSlug=${postSlug}`,
    fetcher,
  );

  const [desc, setDesc] = React.useState("");

  const handleSubmit = async () => {
    await fetch("/api/comments", {
      method: "POST",
      body: JSON.stringify({ desc, postSlug }),
    });
    mutate();

    setDesc("");
  };

  return (
    <div className="mt-14">
      <h1 className="mb-7 text-4xl text-gray-500">Comments</h1>
      {status === "authenticated" ? (
        <div className="flex items-center justify-between gap-7">
          <textarea
            placeholder="Write a comment..."
            className="w-full rounded-2xl border border-teal-300 bg-transparent p-4"
            onChange={(e) => setDesc(e.target.value)}
            value={desc}
          />
          <button
            onClick={handleSubmit}
            className="rounded-lg border-none bg-teal-500 px-3 py-1 font-bold"
          >
            Send
          </button>
        </div>
      ) : (
        <Link href="/login">Login to write a comment</Link>
      )}
      <div className="mt-8">
        {isLoading
          ? "Loading"
          : data?.map((comment) => (
              <div className="mb-8" key={comment.id}>
                <div className="mb-4 flex items-center gap-4">
                  <div className="relative h-12 w-12">
                    {comment.user.image && (
                      <Image
                        src={comment.user.image}
                        alt="user"
                        fill
                        sizes="30px"
                        className="rounded-full object-cover"
                      />
                    )}
                  </div>
                  <div className="flex flex-col gap-1 text-gray-400">
                    <span className="font-bold">{comment.user.name}</span>
                    <span className="text-base">
                      {comment.createdAt.substring(0, 10)}
                    </span>
                  </div>
                </div>
                <p className="text-base font-light">{comment.desc}</p>
              </div>
            ))}
      </div>
    </div>
  );
};

export default Comments;
