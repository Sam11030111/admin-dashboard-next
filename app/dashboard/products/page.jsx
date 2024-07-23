import Image from "next/image";
import Link from "next/link";

import Search from "@/app/ui/dashboard/search/search";
import Pagination from "@/app/ui/dashboard/pagination/pagination";
import { fetchProducts } from "@/app/lib/data";

const ProductsPage = async ({ searchParams }) => {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;
  const { count, products } = await fetchProducts(q, page);

  return (
    <div className="bg-[var(--bgSoft)] p-5 rounded-[10px] mt-5">
      <div className="flex items-center justify-between">
        <Search placeholder="Search for a user..." />
        <Link href="/dashboard/products/add">
          <button className="bg-[#5d57c9] text-[var(--text)] border-none rounded-[5px] cursor-pointer p-[10px]">
            Add New
          </button>
        </Link>
      </div>
      <table className="w-full mt-5">
        <thead>
          <tr>
            <td className="p-[10px]">Title</td>
            <td className="p-[10px]">Description</td>
            <td className="p-[10px]">Price</td>
            <td className="p-[10px]">Created At</td>
            <td className="p-[10px]">Stock</td>
            <td className="p-[10px]">Action</td>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td className="p-[10px]">
                <div className="flex items-center gap-2">
                  <Image
                    src={product.img || "/noproduct.jpg"}
                    alt=""
                    width={40}
                    height={40}
                    className="object-cover rounded-full"
                  />
                  {product.title}
                </div>
              </td>
              <td className="p-[10px]">{product.desc}</td>
              <td className="p-[10px]">${product.price}</td>
              <td className="p-[10px]">
                {product.createdAt?.toString().slice(4, 16)}
              </td>
              <td className="p-[10px]">{product.stock}</td>
              <td className="p-[10px]">
                <div className="flex gap-2">
                  <Link href={`/dashboard/products/${product.id}`}>
                    <button className="py-1 px-2 rounded-[5px] text-[var(--text)] border-none cursor-pointer bg-teal-500">
                      View
                    </button>
                  </Link>
                  <form>
                    <input type="hidden" name="id" />
                    <button className="py-1 px-2 rounded-[5px] text-[var(--text)] border-none cursor-pointer bg-red-300">
                      Delete
                    </button>
                  </form>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination count={count} />
    </div>
  );
};

export default ProductsPage;
