"use client";
import { useRouter } from "next/navigation";
import React from "react";

const Pagination = ({ page, hasPrev, hasNext, cat }) => {
  const router = useRouter();

  return (
    <div className="flex items-center justify-between">
      <button
        disabled={!hasPrev}
        onClick={() =>
          router.push(`?page=${page - 1}${cat ? `&cat=${cat}` : ""}`)
        }
        className="w-20 rounded-lg border-none bg-red-400 p-2 text-center text-white disabled:cursor-not-allowed disabled:bg-slate-400"
      >
        Previous
      </button>
      <button
        disabled={!hasNext}
        onClick={() =>
          router.push(`?page=${page + 1}${cat ? `&cat=${cat}` : ""}`)
        }
        className="w-20 rounded-lg border-none bg-red-400 p-2 text-center text-white disabled:cursor-not-allowed disabled:bg-slate-400"
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
