"use client";

import { usePathname, useSearchParams, useRouter } from "next/navigation";

const Pagination = ({ count }) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const page = searchParams.get("page") || 1;

  const params = new URLSearchParams(searchParams);
  const ITEM_PER_PAGE = 2;

  const hasPrev = ITEM_PER_PAGE * (parseInt(page) - 1) > 0;
  const hasNext = ITEM_PER_PAGE * (parseInt(page) - 1) + ITEM_PER_PAGE < count;

  const handleChangePage = (type) => {
    type === "prev"
      ? params.set("page", parseInt(page) - 1)
      : params.set("page", parseInt(page) + 1);
    replace(`${pathname}?${params}`);
  };

  return (
    <div className="flex justify-between p-[10px] mt-5">
      <button
        disabled={!hasPrev}
        className="py-2 px-4 bg-[#2e374a] rounded-lg cursor-pointer disabled:cursor-not-allowed"
        onClick={() => handleChangePage("prev")}
      >
        Previous
      </button>
      <button
        disabled={!hasNext}
        className="py-2 px-4 bg-[#2e374a] rounded-lg cursor-pointer disabled:cursor-not-allowed"
        onClick={() => handleChangePage("next")}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
