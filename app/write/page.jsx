"use client";
import { useSession } from "next-auth/react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
const ReactQuill = dynamic(
  () => {
    return import("react-quill");
  },
  { ssr: false },
);

import "react-quill/dist/quill.bubble.css";

const Write = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  const { data, status } = useSession();

  const router = useRouter();
  if (status === "loading") {
    return <div>Loading...</div>;
  }
  if (status === "authenticated") {
    router.push("/");
  }

  return (
    <div className="">
      <input
        type="text"
        placeholder="Title"
        className="border-none bg-transparent p-10 text-5xl outline-none placeholder:text-gray-100"
      />
      <div className="relative flex h-[700px] gap-5">
        <button
          onClick={() => setOpen(!open)}
          className="z-50 flex h-9 w-9 items-center justify-center rounded-full border border-green-400 bg-transparent"
        >
          <Image src="/plus.png" alt="" width={16} height={16} />
        </button>

        <div
          className={`${
            open ? "left-14 opacity-100" : "left-0 opacity-0"
          } absolute  z-20 flex w-full gap-5 transition-all`}
        >
          <button
            className={
              "flex h-9 w-9 items-center justify-center rounded-full border border-green-400 bg-transparent"
            }
          >
            <Image src="/image.png" alt="" width={16} height={16} />
          </button>
          <button
            className={
              "flex h-9 w-9 items-center justify-center rounded-full border border-green-400 bg-transparent"
            }
          >
            <span className="relative h-4 w-4">
              <Image src="/external.png" alt="" fill />
            </span>
          </button>
          <button
            className={
              "flex h-9 w-9 items-center justify-center rounded-full border border-green-400 bg-transparent"
            }
          >
            <Image src="/video.png" alt="" width={16} height={16} />
          </button>
        </div>

        <ReactQuill
          theme="bubble"
          value={value}
          onChange={setValue}
          placeholder="Tell your story"
          className="w-full"
        />
      </div>

      <button className="absolute right-6 top-6 rounded-xl border-none bg-teal-600 px-3 py-2">
        Publish
      </button>
    </div>
  );
};

export default Write;
