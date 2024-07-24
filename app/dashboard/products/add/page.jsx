import { addProduct } from "@/app/lib/actions";

const AddProductPage = () => {
  return (
    <div className="bg-[var(--bgSoft)] p-5 rounded-[10px] mt-5">
      <form action={addProduct} className="flex flex-wrap justify-between">
        <input
          type="text"
          placeholder="title"
          name="title"
          required
          className="p-[30px] bg-[var(--bg)] text-[var(--text)] border-2 border-[#2e374a] rounded-[5px] mb-[30px] w-[45%]"
        />
        <select
          name="cat"
          id="cat"
          className="p-[30px] bg-[var(--bg)] text-[var(--text)] border-2 border-[#2e374a] rounded-[5px] mb-[30px] w-[45%]"
        >
          <option value="general">Choose a Category</option>
          <option value="kitchen">Kitchen</option>
          <option value="phone">Phone</option>
          <option value="computer">Computer</option>
        </select>
        <input
          type="number"
          placeholder="price"
          name="price"
          required
          className="p-[30px] bg-[var(--bg)] text-[var(--text)] border-2 border-[#2e374a] rounded-[5px] mb-[30px] w-[45%]"
        />
        <input
          type="number"
          placeholder="stock"
          name="stock"
          required
          className="p-[30px] bg-[var(--bg)] text-[var(--text)] border-2 border-[#2e374a] rounded-[5px] mb-[30px] w-[45%]"
        />
        <input
          type="text"
          placeholder="color"
          name="color"
          className="p-[30px] bg-[var(--bg)] text-[var(--text)] border-2 border-[#2e374a] rounded-[5px] mb-[30px] w-[45%]"
        />
        <input
          type="text"
          placeholder="size"
          name="size"
          className="p-[30px] bg-[var(--bg)] text-[var(--text)] border-2 border-[#2e374a] rounded-[5px] mb-[30px] w-[45%]"
        />
        <textarea
          required
          name="desc"
          id="desc"
          rows="16"
          placeholder="Description"
          className="p-[30px] bg-[var(--bg)] text-[var(--text)] border-2 border-[#2e374a] rounded-[5px] mb-[30px] w-[100%]"
        ></textarea>
        <button
          type="submit"
          className="w-full p-5 bg-teal-400 text-[var(--text)] border-none rounded-[5px] cursor-pointer"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddProductPage;
