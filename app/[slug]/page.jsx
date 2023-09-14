import Comments from "@/components/comments";
import Menu from "@/components/menu";
import Image from "next/image";
import React from "react";

const SinglePage = () => {
  return (
    <div className="">
      <div className="block md:flex md:flex-row-reverse items-center gap-8">
        <div className="relative my-4 h-56 flex-1 md:my-0 md:h-80">
          <Image
            src="/p1.jpeg"
            alt=""
            fill
            className="rounded-3xl object-cover"
            sizes="200px"
          />
        </div>

        <div className="flex-1">
          <h1 className="mb-4 text-2xl md:text-5xl">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Doloremque.
          </h1>
          <div className="flex items-center gap-4">
            <div className="relative h-12 w-12">
              <Image
                src="/p1.jpeg"
                alt=""
                fill
                className="rounded-full object-cover"
                sizes="50px"
              />
            </div>
            <div className="flex flex-col gap-1 text-gray-400">
              <span className="text-lg">John Doe</span>
              <span>01.01.2023</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex gap-8">
        <div className="mt-6 md:mt-16 flex-[5]">
          <div className="space-y-4 text-xl font-light">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe
              consequuntur quae esse enim omnis vero quia, quibusdam nemo
              asperiores? Aliquid temporibus nobis cupiditate fugiat earum non
              tempore dolores reiciendis corporis.
            </p>
            <h1>Lorem ipsum dolor sit amet.</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe
              consequuntur quae esse enim omnis vero quia, quibusdam nemo
              asperiores? Aliquid temporibus nobis cupiditate fugiat earum non
              tempore dolores reiciendis corporis.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe
              consequuntur quae esse enim omnis vero quia, quibusdam nemo
              asperiores? Aliquid temporibus nobis cupiditate fugiat earum non
              tempore dolores reiciendis corporis.
            </p>
          </div>
          <div>
            <Comments />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SinglePage;
