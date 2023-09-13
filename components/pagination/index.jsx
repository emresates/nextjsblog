import React from "react";

const Pagination = () => {
  return (
    <div className="flex items-center justify-between">
      <button className="w-20 rounded-lg border-none bg-red-400 p-2 text-center text-white">
        Previous
      </button>
      <button className="w-20 rounded-lg border-none bg-red-400 p-2 text-center text-white">
        Next
      </button>
    </div>
  );
};

export default Pagination;
