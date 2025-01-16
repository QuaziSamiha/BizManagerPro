import { Controller, useWatch } from "react-hook-form";
import { Skeleton } from "@/components/ui/skeleton";
import { useState, useRef, useEffect } from "react";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";

interface SelectFieldProps {
  control: any;
  name: string;
  data: any[];
  label: string;
  placeholderText?: string;
  isLoading?: boolean;
  labelKey: string;
  valueKey: string;
  append: (value: any) => void;
  errors?: any;
}

const SelectFieldArray: React.FC<SelectFieldProps> = ({
  control,
  name,
  data,
  label,
  placeholderText,
  isLoading,
  labelKey,
  valueKey,
  append,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const selectedItems = useWatch({ control, name });

  const availableOptions = data
    .filter(
      (item) =>
        !selectedItems?.some(
          (selectedItem: any) => selectedItem[valueKey] === item[valueKey]
        )
    )
    .filter((item) =>
      item[labelKey].toLowerCase().includes(searchQuery.toLowerCase())
    );

  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        inputRef.current &&
        !inputRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSelectChange = (item: any) => {
    append(item);
    setSearchQuery("");
    setIsOpen(false);
  };

  return (
    <div className="flex flex-col gap-2 relative">
      <label className="text-black text-base pl-2 mb-1">{label}</label>

      {isLoading ? (
        <Skeleton className="w-full h-11 bg-gray-300" />
      ) : (
        <div>
          <Controller
            control={control}
            name={name}
            rules={{ required: true }}
            render={({ field }) => (
              <div>
                <div
                  ref={inputRef}
                  className="outline-none text-base bg-greySecondary py-2 pl-4 rounded-md w-full flex justify-between items-center cursor-pointer"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <div>{placeholderText}</div>
                  <div className="pr-3">
                    {isOpen ? (
                      <RiArrowDropUpLine size={23} />
                    ) : (
                      <RiArrowDropDownLine size={23} />
                    )}
                  </div>
                </div>
                {isOpen && (
                  <div
                    ref={dropdownRef}
                    className="bg-white border rounded-md mt-1 max-h-40 shadow-md w-full p-1 absolute z-50"
                    style={{ top: "100%", left: 0 }}
                  >
                    <div className="flex relative">
                      <input
                        placeholder="Search..."
                        className="flex-1 outline-none p-2 pr-10"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                      />
                      <div className="p-2 absolute right-0">
                        <CiSearch size={22} />
                      </div>
                    </div>
                    <div className="overflow-y-auto max-h-24 mt-1 hide-scrollbar">
                      {availableOptions?.map((item, idx) => (
                        <div
                          key={idx}
                          className="bg-greySecondary hover:bg-redPrimary text-sm text-textPrimary hover:text-white pl-3 py-2"
                          onClick={() => handleSelectChange(item)}
                        >
                          {item[labelKey]}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          />
        </div>
      )}
    </div>
  );
};

export default SelectFieldArray;
