import Image from "next/image";

const Transactions = () => {
  return (
    <div className="bg-[var(--bgSoft)] p-5 rounded-[10px]">
      <h2 className="mb-5 font-extralight text-[var(--textSoft)]">
        Latest Transactions
      </h2>
      <table className="w-full">
        <thead>
          <tr>
            <td className="p-[10px]">Name</td>
            <td className="p-[10px]">Status</td>
            <td className="p-[10px]">Date</td>
            <td className="p-[10px]">Amount</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="p-[10px]">
              <div className="flex gap-[10px] items-center">
                <Image
                  src="/noavatar.png"
                  alt=""
                  width={40}
                  height={40}
                  className="object-cover rounded-full"
                />
                John Doe
              </div>
            </td>
            <td className="p-[10px]">
              <span className="p-1 text-sm text-white rounded bg-[#f7cb7375]">
                Pending
              </span>
            </td>
            <td className="p-[10px]">14.02.2024</td>
            <td className="p-[10px]">$3.200</td>
          </tr>
          <tr>
            <td className="p-[10px]">
              <div className="flex gap-[10px] items-center">
                <Image
                  src="/noavatar.png"
                  alt=""
                  width={40}
                  height={40}
                  className="object-cover rounded-full"
                />
                John Doe
              </div>
            </td>
            <td className="p-[10px]">
              <span className="p-1 text-sm text-white rounded bg-[#afd6ee75]">
                Done
              </span>
            </td>
            <td className="p-[10px]">14.02.2024</td>
            <td className="p-[10px]">$3.200</td>
          </tr>
          <tr>
            <td className="p-[10px]">
              <div className="flex gap-[10px] items-center">
                <Image
                  src="/noavatar.png"
                  alt=""
                  width={40}
                  height={40}
                  className="object-cover rounded-full"
                />
                John Doe
              </div>
            </td>
            <td className="p-[10px]">
              <span className="p-1 text-sm text-white rounded bg-[#f7737375]">
                Cancelled
              </span>
            </td>
            <td className="p-[10px]">14.02.2024</td>
            <td className="p-[10px]">$3.200</td>
          </tr>
          <tr>
            <td className="p-[10px]">
              <div className="flex gap-[10px] items-center">
                <Image
                  src="/noavatar.png"
                  alt=""
                  width={40}
                  height={40}
                  className="object-cover rounded-full"
                />
                John Doe
              </div>
            </td>
            <td className="p-[10px]">
              <span className="p-1 text-sm text-white rounded bg-[#f7cb7375]">
                Pending
              </span>
            </td>
            <td className="p-[10px]">14.02.2024</td>
            <td className="p-[10px]">$3.200</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Transactions;
