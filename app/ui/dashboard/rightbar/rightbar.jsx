import Image from "next/image";
import { MdPlayCircleFilled, MdReadMore } from "react-icons/md";

const Rightbar = () => {
  return (
    <div>
      <div className="relative py-5 px-6 rounded-[10px] mb-5 bg-gradient-to-top">
        <div className="absolute right-0 bottom-0 w-[50%] h-[50%]">
          <Image
            src="/astronaut.png"
            alt=""
            fill
            className="object-contain opacity-20"
          />
        </div>
        <div className="flex flex-col gap-4">
          <span className="font-bold">🔥 Available Now</span>
          <h3>How to use the new version of the admin dashboard?</h3>
          <span className="text-[var(--textSoft)] font-medium text-[12px]">
            Takes 4 minutes to learn
          </span>
          <p className="text-[14px] text-[var(--textSoft)]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit eius libero perspiciatis recusandae possimus.
          </p>
          <button className="flex items-center gap-2 w-max bg-[#5d57c9] text-white border-0 rounded-[5px] cursor-pointer p-[10px]">
            <MdPlayCircleFilled />
            Watch
          </button>
        </div>
      </div>
      <div className="relative py-5 px-6 rounded-[10px] mb-5 bg-gradient-to-top">
        <div className="flex flex-col gap-4">
          <span className="font-bold">🚀 Coming Soon</span>
          <h3>
            New server actions are available, partial pre-rendering is coming
            up!
          </h3>
          <span className="text-[var(--textSoft)] font-medium text-[12px]">
            Boost your productivity
          </span>
          <p className="text-[14px] text-[var(--textSoft)]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Reprehenderit eius libero perspiciatis recusandae possimus.
          </p>
          <button className="flex items-center gap-2 w-max bg-[#5d57c9] text-white border-0 rounded-[5px] cursor-pointer p-[10px]">
            <MdReadMore />
            Learn
          </button>
        </div>
      </div>
    </div>
  );
};

export default Rightbar;
