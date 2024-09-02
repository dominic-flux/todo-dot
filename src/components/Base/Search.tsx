import { type FC } from "react";
import { IoSearch } from "react-icons/io5";

interface SearchProps {
  _?: never;
}

const Search: FC<SearchProps> = () => {
  return (
    <div className="relative">
      <IoSearch className="absolute left-3 top-3.5 size-7 text-[#84849D]" />
      <input
        type="text"
        placeholder="Search for a Task"
        className="w-full rounded-xl bg-[#121215] py-4 pl-14 text-[#84849D] placeholder:text-[#84849D]/50 focus:outline-none"
      />
    </div>
  );
};

export default Search;
