import Image from "next/image";

import { updateProduct } from "@/app/lib/actions";
import { fetchProduct } from "@/app/lib/data";

const SingleProductPage = async ({ params }) => {
  const { id } = params;
  const product = await fetchProduct(id);

  return (
    <div className="flex gap-[50px] mt-5">
      <div className="flex-1 bg-[var(--bgSoft)] p-5 rounded-[10px] font-bold text-[var(--textSoft)] h-max">
        <div className="relative w-full h-[250px] rounded-[10px] overflow-hidden mb-5">
          <Image src="/noavatar.png" alt="" fill />
        </div>
        {product.title}
      </div>
      <div className="flex-3 bg-[var(--bgSoft)] p-5 rounded-[10px]">
        <form action={updateProduct} className="flex flex-col">
          <input
            type="hidden"
            name="id"
            value={product.id}
            className="p-5 border-2 border-[#2e374a] bg-[var(--bg)] text-[var(--text)] my-[10px]"
          />
          <label className="text-[12px]">Title</label>
          <input
            type="text"
            name="title"
            className="p-5 border-2 border-[#2e374a] bg-[var(--bg)] text-[var(--text)] my-[10px]"
            placeholder={product.title}
          />
          <label className="text-[12px]">Price</label>
          <input
            type="number"
            name="price"
            className="p-5 border-2 border-[#2e374a] bg-[var(--bg)] text-[var(--text)] my-[10px]"
            placeholder={product.price}
          />
          <label className="text-[12px]">Stock</label>
          <input
            type="number"
            name="stock"
            className="p-5 border-2 border-[#2e374a] bg-[var(--bg)] text-[var(--text)] my-[10px]"
            placeholder={product.stock}
          />
          <label className="text-[12px]">Color</label>
          <input
            type="text"
            name="color"
            placeholder={product.color || "color"}
            className="p-5 border-2 border-[#2e374a] bg-[var(--bg)] text-[var(--text)] my-[10px]"
          />
          <label className="text-[12px]">Size</label>
          <textarea
            type="text"
            name="size"
            placeholder={product.size || "size"}
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
            placeholder={product.desc}
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
