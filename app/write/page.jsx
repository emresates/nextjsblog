"use client";
import { useSession } from "next-auth/react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
import "react-quill/dist/quill.bubble.css";
import { app } from "@/utils/firebase";

const storage = getStorage(app);

const Write = () => {
  // Session
  const { status } = useSession();

  // States
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");

  const [file, setFile] = useState(null);
  const [media, setMedia] = useState("");
  const [title, setTitle] = useState("");

  useEffect(() => {
    const upload = () => {
      const name = new Date().getTime() + "-" + file.name + Math.random();
      console.log(name);
      const storageRef = ref(storage, name);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => {},
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            setMedia(downloadURL);
          });
        },
      );
    };

    file && upload();
  }, [file]);

  const router = useRouter();
  if (status === "loading") {
    return <div>Loading...</div>;
  }
  if (status === "unauthenticated") {
    router.push("/");
  }

  const slugify = (str) =>
    str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");

  const handleSubmit = async () => {
    const res = await fetch("/api/posts", {
      method: "POST",
      body: JSON.stringify({
        title,
        description: value,
        image: media,
        slug: slugify(title),
        catSlug: "travel",
      }),
    });
    console.log(res);
  };

  return (
    <div className="">
      <input
        type="text"
        placeholder="Title"
        className="border-none bg-transparent p-10 text-5xl outline-none placeholder:text-gray-100"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
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
            open ? "right-44 opacity-100" : "right-20 opacity-0"
          } absolute z-20 flex w-full gap-5 transition-all`}
        >
          <input
            type="file"
            id="image"
            onChange={(e) => setFile(e.target.files[0])}
            className="hidden"
          />
          <button
            className={
              "flex h-9 w-9 items-center justify-center overflow-hidden rounded-full border border-green-400 bg-transparent"
            }
          >
            <label
              htmlFor="image"
              className="flex h-full w-full cursor-pointer items-center justify-center"
            >
              <Image src="/image.png" alt="" width={16} height={16} />
            </label>
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

      <button
        onClick={handleSubmit}
        className="absolute right-6 top-6 rounded-xl border-none bg-teal-600 px-3 py-2"
      >
        Publish
      </button>
    </div>
  );
};

export default Write;
