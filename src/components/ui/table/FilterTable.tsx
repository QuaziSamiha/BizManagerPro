import { HiOutlineSearch } from "react-icons/hi";

interface IFilter {
  filtering: string;
  setFiltering: React.Dispatch<React.SetStateAction<string>>;
  table: any;
  data: any;
}

// ============== FOR EXPORT OPTION ================
// type Checked = DropdownMenuCheckboxItemProps["checked"];

const FilterTable: React.FC<IFilter> = ({ filtering, setFiltering }) => {
  // ============================= EXPORT STATES =============================
  // const [showStatusBar, setShowStatusBar] = useState<Checked>(true);
  // const [showPanel, setShowPanel] = useState<Checked>(false);

  // =================== 	HANDLE EXPORT FUNCTION ===========================
  return (
    <div className="flex items-center gap-2 border border-stone-600 rounded-md px-2 py-2">
      <HiOutlineSearch className="w-4 h-4" />
      <input
        type="text"
        placeholder="Search..."
        name="search"
        value={filtering || ""}
        onChange={(e) => setFiltering(e.target.value)}
        className="bg-transparent text-stone-600 text-sm placeholder:text-sm placeholder:text-stone-800 outline-none w-80 rounded-md"
      />
    </div>
  );
};

export default FilterTable;
