import Image from "next/image";

const SingleProductPage = () => {
  return (
    <div className="flex gap-[50px] mt-5">
      <div className="flex-1 bg-[var(--bgSoft)] p-5 rounded-[10px] font-bold text-[var(--textSoft)] h-max">
        <div className="relative w-full h-[250px] rounded-[10px] overflow-hidden mb-5">
          <Image src="/noavatar.png" alt="" fill />
        </div>
        Amazon
      </div>
      <div className="flex-3 bg-[var(--bgSoft)] p-5 rounded-[10px]">
        <form className="flex flex-col">
          <input
            type="hidden"
            name="id"
            className="p-5 border-2 border-[#2e374a] bg-[var(--bg)] text-[var(--text)] my-[10px]"
          />
          <label className="text-[12px]">Title</label>
          <input
            type="text"
            name="title"
            className="p-5 border-2 border-[#2e374a] bg-[var(--bg)] text-[var(--text)] my-[10px]"
          />
          <label className="text-[12px]">Price</label>
          <input
            type="number"
            name="price"
            className="p-5 border-2 border-[#2e374a] bg-[var(--bg)] text-[var(--text)] my-[10px]"
          />
          <label className="text-[12px]">Stock</label>
          <input
            type="number"
            name="stock"
            className="p-5 border-2 border-[#2e374a] bg-[var(--bg)] text-[var(--text)] my-[10px]"
          />
          <label className="text-[12px]">Color</label>
          <input
            type="text"
            name="color"
            placeholder="color"
            className="p-5 border-2 border-[#2e374a] bg-[var(--bg)] text-[var(--text)] my-[10px]"
          />
          <label className="text-[12px]">Size</label>
          <textarea
            type="text"
            name="size"
            placeholder="size"
            className="p-5 border-2 border-[#2e374a] bg-[var(--bg)] text-[var(--text)] my-[10px]"
          />
          <label className="text-[12px]">Cat</label>
          <select
            name="cat"
            id="cat"
            className="p-5 border-2 border-[#2e374a] bg-[var(--bg)] text-[var(--text)] my-[10px]"
          >
            <option value="kitchen">Kitchen</option>
            <option value="computers">Computers</option>
          </select>
          <label className="text-[12px]">Description</label>
          <textarea
            type="desc"
            name="desc"
            rows="10"
            className="p-5 border-2 border-[#2e374a] bg-[var(--bg)] text-[var(--text)] my-[10px]"
          />
          <button className="w-full p-5 bg-teal-500 text-[var(--text)] border-none rounded-[5px] cursor-pointer mt-5">
            Update
          </button>
        </form>
      </div>
    </div>
  );
};

export default SingleProductPage;
