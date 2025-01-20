import { ITableFilter } from "@/interfaces/table";
import { RiSearchLine } from "react-icons/ri";

// ============== FOR EXPORT OPTION ================
// type Checked = DropdownMenuCheckboxItemProps["checked"];

const FilterTable: React.FC<ITableFilter> = ({ filtering, setFiltering }) => {
  // ============================= EXPORT STATES =============================
  // const [showStatusBar, setShowStatusBar] = useState<Checked>(true);
  // const [showPanel, setShowPanel] = useState<Checked>(false);

  // =================== 	HANDLE EXPORT FUNCTION ===========================
  return (
    <div className="flex items-center gap-2 border border-stone-400 rounded-md px-2 py-2 bg-white">
      <RiSearchLine className="w-4 h-4 text-stone-600" />
      <input
        type="text"
        placeholder="Search by..."
        name="search"
        value={filtering || ""}
        onChange={(e) => setFiltering(e.target.value)}
        className="bg-white pl-2 pr-6 text-stone-600 text-sm placeholder:text-sm placeholder:text-stone-600 outline-none w-80 rounded-md"
      />
    </div>
  );
};

export default FilterTable;
