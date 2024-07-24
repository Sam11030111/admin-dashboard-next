import Image from "next/image";

import { updateUser } from "@/app/lib/actions";
import { fetchUser } from "@/app/lib/data";

const SingleUserPage = async ({ params }) => {
  const { id } = params;
  const user = await fetchUser(id);

  return (
    <div className="flex gap-[50px] mt-5">
      <div className="flex-1 bg-[var(--bgSoft)] p-5 rounded-[10px] font-bold text-[var(--textSoft)] h-max">
        <div className="relative w-full h-[250px] rounded-[10px] overflow-hidden mb-5">
          <Image src={user.img || "/noavatar.png"} alt="" fill />
        </div>
        {user.username}
      </div>
      <div className="flex-3 bg-[var(--bgSoft)] p-5 rounded-[10px]">
        <form action={updateUser} className="flex flex-col">
          <input
            type="hidden"
            name="id"
            value={user.id}
            className="p-5 border-2 border-[#2e374a] bg-[var(--bg)] text-[var(--text)] my-[10px]"
          />
          <label className="text-[12px]">Username</label>
          <input
            type="text"
            name="username"
            className="p-5 border-2 border-[#2e374a] bg-[var(--bg)] text-[var(--text)] my-[10px]"
            placeholder={user.username}
          />
          <label className="text-[12px]">Email</label>
          <input
            type="email"
            name="email"
            className="p-5 border-2 border-[#2e374a] bg-[var(--bg)] text-[var(--text)] my-[10px]"
            placeholder={user.email}
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
            placeholder={user.phone}
          />
          <label className="text-[12px]">Address</label>
          <textarea
            type="text"
            name="address"
            className="p-5 border-2 border-[#2e374a] bg-[var(--bg)] text-[var(--text)] my-[10px]"
            placeholder={user.address}
          />
          <label className="text-[12px]">Is Admin?</label>
          <select
            name="isAdmin"
            id="isAdmin"
            className="p-5 border-2 border-[#2e374a] bg-[var(--bg)] text-[var(--text)] my-[10px]"
            defaultValue={user.isAdmin}
          >
            <option value={true}>Yes</option>
            <option value={false}>No</option>
          </select>
          <label className="text-[12px]">Is Active?</label>
          <select
            name="isActive"
            id="isActive"
            className="p-5 border-2 border-[#2e374a] bg-[var(--bg)] text-[var(--text)] my-[10px]"
            defaultValue={user.isActive}
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
