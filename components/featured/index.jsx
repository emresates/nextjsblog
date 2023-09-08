import Image from "next/image";
import React from "react";

const Featured = () => {
  return (
    <div className="mt-10">
      <h1 className="text-7xl font-light">
        <b className="font-bold">Hey, Secenory here!</b> Discover my stories and
        creative ideas
      </h1>
      <div className="mt-10 flex items-center gap-10">
        <div className="relative h-96 flex-1 overflow-hidden rounded-lg">
          <Image
            src="/img1.jpg"
            alt=""
            fill
            sizes="600px"
            className="object-cover"
          />
        </div>
        <div className="flex flex-1 flex-col gap-5">
          <h1 className="text-4xl">Lorem ipsum dolor sit.</h1>
          <p className="text-xl font-light">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Exercitationem praesentium explicabo tempore, quos est consequuntur
            eum sint expedita quaerat officia enim veritatis! Sunt sit fugiat
            labore odio nemo minima nostrum.
          </p>
          <button className="w-max rounded-lg bg-red-50 px-4 py-2 text-black shadow-lg shadow-red-500">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
