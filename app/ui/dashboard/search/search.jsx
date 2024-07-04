import { MdSearch } from "react-icons/md";

const Search = ({ placeholder }) => {
  return (
    <div className="flex items-center gap-2 bg-[#2e374a] p-[10px] rounded-[10px] w-max">
      <MdSearch />
      <input
        type="text"
        placeholder={placeholder}
        className="bg-transparent border-0 text-[var(--text)] outline-none"
      />
    </div>
  );
};

export default Search;
