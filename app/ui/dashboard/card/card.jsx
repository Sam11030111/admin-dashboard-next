import { MdSupervisedUserCircle } from "react-icons/md";

const Card = () => {
  return (
    <div className="bg-[var(--bgSoft)] p-5 rounded-[10px] flex gap-5 cursor-pointer w-full hover:bg-[#2e374a]">
      <MdSupervisedUserCircle size={24} />
      <div className="flex flex-col gap-5">
        <span>Total Users</span>
        <span className="font-medium text-[24px]">10.273</span>
        <span className="font-light text-sm">
          <span className="text-lime-300">12%</span> more than previous week
        </span>
      </div>
    </div>
  );
};

export default Card;
