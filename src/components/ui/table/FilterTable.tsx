import { ITableFilter } from "@/interfaces/table";
import { RiSearchLine } from "react-icons/ri";

const FilterTable: React.FC<ITableFilter> = ({ filtering, setFiltering }) => {
  return (
    <div className="flex items-center gap-2 border border-slate-500 rounded-md p-2.5">
      <RiSearchLine className="w-4 h-4 text-slate-700" />
      <input
        type="text"
        placeholder="Search..."
        name="search"
        value={filtering || ""}
        onChange={(e) => setFiltering(e.target.value)}
        className="bg-transparent pl-2 pr-6 text-slate-700 text-sm placeholder:text-base placeholder:text-slate-700 outline-none w-80 rounded-md"
      />
    </div>
  );
};

export default FilterTable;
