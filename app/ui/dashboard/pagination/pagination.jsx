import React from "react";

const Pagination = () => {
  return (
    <div className="flex justify-between p-[10px] mt-5">
      <button
        disabled
        className="py-2 px-4 bg-[#2e374a] rounded-lg cursor-pointer disabled:cursor-not-allowed"
      >
        Previous
      </button>
      <button className="py-2 px-4 bg-[#2e374a] rounded-lg cursor-pointer">
        Next
      </button>
    </div>
  );
};

export default Pagination;
