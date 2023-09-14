import Image from "next/image";
import Link from "next/link";
import React from "react";

const Comments = () => {
  const status = "authenticated";

  return (
    <div className="mt-14">
      <h1 className="mb-7 text-4xl text-gray-500">Comments</h1>
      {status === "authenticated" ? (
        <div className="flex items-center justify-between gap-7">
          <textarea
            placeholder="Write a comment..."
            className="w-full rounded-2xl p-4"
          />
          <button className="rounded-lg border-none bg-teal-500 px-3 py-1 font-bold">
            Send
          </button>
        </div>
      ) : (
        <Link href="/login">Login to write a comment</Link>
      )}
      <div className="mt-8">
        <div className="mb-8">
          <div className="mb-4 flex items-center gap-4">
            <div className="relative h-12 w-12">
              <Image
                src="/p1.jpeg"
                alt="user"
                fill
                sizes="30px"
                className="rounded-full object-cover"
              />
            </div>
            <div className="flex flex-col gap-1 text-gray-400">
              <span className="font-bold">John Doe</span>
              <span className="text-base">11.02.2023</span>
            </div>
          </div>
          <p className="text-base font-light">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aperiam
            dolor quae excepturi, neque expedita exercitationem ut ipsum earum
            incidunt voluptatum voluptatibus aliquam aliquid officiis ipsam at
            omnis itaque nemo cumque!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Comments;
