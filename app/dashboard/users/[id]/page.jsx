import Image from "next/image";

const SingleUserPage = () => {
  return (
    <div className="flex gap-[50px] mt-5">
      <div className="flex-1 bg-[var(--bgSoft)] p-5 rounded-[10px] font-bold text-[var(--textSoft)] h-max">
        <div className="relative w-full h-[250px] rounded-[10px] overflow-hidden mb-5">
          <Image src="/noavatar.png" alt="" fill />
        </div>
        Sam Lee
      </div>
      <div className="flex-3 bg-[var(--bgSoft)] p-5 rounded-[10px]">
        <form className="flex flex-col">
          <input
            type="hidden"
            name="id"
            className="p-5 border-2 border-[#2e374a] bg-[var(--bg)] text-[var(--text)] my-[10px]"
          />
          <label className="text-[12px]">Username</label>
          <input
            type="text"
            name="username"
            className="p-5 border-2 border-[#2e374a] bg-[var(--bg)] text-[var(--text)] my-[10px]"
          />
          <label className="text-[12px]">Email</label>
          <input
            type="email"
            name="email"
            className="p-5 border-2 border-[#2e374a] bg-[var(--bg)] text-[var(--text)] my-[10px]"
          />
          <label className="text-[12px]">Password</label>
          <input
            type="password"
            name="password"
            className="p-5 border-2 border-[#2e374a] bg-[var(--bg)] text-[var(--text)] my-[10px]"
          />
          <label className="text-[12px]">Phone</label>
          <input
            type="text"
            name="phone"
            className="p-5 border-2 border-[#2e374a] bg-[var(--bg)] text-[var(--text)] my-[10px]"
          />
          <label className="text-[12px]">Address</label>
          <textarea
            type="text"
            name="address"
            className="p-5 border-2 border-[#2e374a] bg-[var(--bg)] text-[var(--text)] my-[10px]"
          />
          <label className="text-[12px]">Is Admin?</label>
          <select
            name="isAdmin"
            id="isAdmin"
            className="p-5 border-2 border-[#2e374a] bg-[var(--bg)] text-[var(--text)] my-[10px]"
          >
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
          <label className="text-[12px]">Is Active?</label>
          <select
            name="isActive"
            id="isActive"
            className="p-5 border-2 border-[#2e374a] bg-[var(--bg)] text-[var(--text)] my-[10px]"
          >
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
          <button className="w-full p-5 bg-teal-500 text-[var(--text)] border-none rounded-[5px] cursor-pointer mt-5">
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default SingleUserPage;
