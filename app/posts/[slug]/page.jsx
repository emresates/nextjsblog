import Comments from "@/components/comments";
import Menu from "@/components/menu";
import Image from "next/image";
import React from "react";

const getData = async (slug) => {
  const res = await fetch(`https://secenoryblog.vercel.app/api/posts/${slug}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Something went wrong");
  }

  return res.json();
};

const SinglePage = async ({ params }) => {
  const { slug } = params;

  const data = await getData(slug);

  return (
    <div className="">
      <div className="block items-center gap-8 md:flex md:flex-row-reverse">
        {data.image && (
          <div className="relative my-4 h-56 flex-1 md:my-0 md:h-80">
            <Image
              src={data.image}
              alt=""
              fill
              className="rounded-3xl object-cover"
              sizes="200px"
            />
          </div>
        )}

        <div className="flex-1">
          <h1 className="mb-4 text-2xl md:text-5xl">{data.title}</h1>
          <div className="flex items-center gap-4">
            {data.user.image && (
              <div className="relative h-12 w-12">
                <Image
                  src={data.user.image}
                  alt=""
                  fill
                  className="rounded-full object-cover"
                  sizes="50px"
                />
              </div>
            )}
            <div className="flex flex-col gap-1 text-gray-400">
              <span className="text-lg">{data.user.name}</span>
              <span>{data.createdAt.substring(0, 10)}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-8">
        <div className="mt-6 flex-[5] md:mt-16">
          <div
            className="space-y-4 text-xl font-light"
            dangerouslySetInnerHTML={{ __html: data?.description }}
          />

          <div>
            <Comments postSlug={slug} />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SinglePage;
