import { useState, useRef, useEffect } from "react";
import { Check, ChevronDown, Search } from "lucide-react";
import { Controller, FieldValues, Path } from "react-hook-form";
import { Skeleton } from "../skeleton";

const MultiSelect = <T extends FieldValues>({
  labelName,
  name,
  options,
  control,
  isRequired = false,
  isLoading,
}: IMultiSelect<T>) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filteredOptions = (options ?? []).filter((option) =>
    option.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col gap-2 w-full">
      <label className="text-slate-800 text-base font-medium pl-2">
        {labelName}
        {isRequired && <span className="text-red-500 px-0.5">*</span>}
      </label>

      {isLoading ? (
        <Skeleton className="w-full h-11 bg-slate-50" />
      ) : (
        <div
          className="w-full flex flex-col gap-2 text-sm text-slate-700 relative"
          ref={dropdownRef}
        >
          <Controller
            name={name as Path<T>}
            control={control}
            rules={{ required: true }}
            render={({ field: { value, onChange }, fieldState: { error } }) => {
              const selectedOptions: IMultiSelectOption[] = value || [];
              const allSelected = selectedOptions.length === options?.length;
              const isIndeterminate =
                selectedOptions.length > 0 && !allSelected;

              const toggleOption = (option: IMultiSelectOption) => {
                const isSelected = selectedOptions.some(
                  (selected) => selected.id === option.id
                );
                if (isSelected) {
                  onChange(
                    selectedOptions.filter(
                      (selected) => selected.id !== option.id
                    )
                  );
                } else {
                  onChange([...selectedOptions, option]);
                }
              };

              const toggleSelectAll = () => {
                if (allSelected) {
                  onChange([]);
                } else {
                  onChange(options);
                }
              };

              return (
                <>
                  <div
                    className="min-h-[42px] px-3 py-1 text-sm rounded-md bg-stone-100 cursor-pointer flex items-center gap-2 overflow-hidden whitespace-nowrap"
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    <div className="flex items-center gap-2 flex-nowrap overflow-hidden">
                      {selectedOptions.length > 0 ? (
                        <span className="text-slate-700 whitespace-nowrap">
                          {allSelected
                            ? "All clients selected"
                            : `${selectedOptions.length} client(s) selected`}
                        </span>
                      ) : (
                        <span className="text-slate-700">{labelName}</span>
                      )}
                    </div>
                    <ChevronDown
                      size={20}
                      className={`ml-auto flex-shrink-0 transition-transform ${
                        isOpen && "transform rotate-180"
                      }`}
                    />
                  </div>

                  {isOpen && (
                    <div className="absolute z-10 w-full mt-1 bg-white border border-slate-300 rounded-lg shadow-lg top-full">
                      <div className="p-2 border-b border-slate-200">
                        <div className="relative">
                          <Search
                            size={18}
                            className="absolute left-2 top-1/2 transform -translate-y-1/2"
                          />
                          <input
                            type="text"
                            placeholder="Search clients..."
                            className="w-full pl-8 pr-2 py-1 rounded-md focus:outline-none text-sm placeholder:text-slate-700"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            onClick={(e) => e.stopPropagation()}
                          />
                        </div>
                      </div>
                      <div className="max-h-60 overflow-y-auto">
                        <div
                          className="px-4 py-2 cursor-pointer flex items-center gap-2 hover:bg-gray-100"
                          onClick={toggleSelectAll}
                        >
                          <div
                            className={`w-4 h-4 border rounded flex items-center justify-center ${
                              allSelected ? "bg-blue-500" : "border-slate-300"
                            }`}
                          >
                            {allSelected || isIndeterminate ? (
                              <Check size={12} className="text-white" />
                            ) : null}
                          </div>
                          Select All
                        </div>

                        {filteredOptions.map((option) => {
                          const isSelected = selectedOptions.some(
                            (selected) => selected.id === option.id
                          );
                          return (
                            <div
                              key={option.id}
                              className={`px-4 py-2 cursor-pointer flex items-center gap-2 hover:bg-gray-100 ${
                                isSelected && "bg-blue-50 text-blue-800"
                              }`}
                              onClick={() => toggleOption(option)}
                            >
                              <div
                                className={`w-4 h-4 border rounded flex items-center justify-center ${
                                  isSelected
                                    ? "bg-blue-500"
                                    : "border-slate-300"
                                }`}
                              >
                                {isSelected && (
                                  <Check size={12} className="text-white" />
                                )}
                              </div>
                              {option.name}
                            </div>
                          );
                        })}
                        {filteredOptions.length === 0 && (
                          <div className="px-4 py-2 text-slate-700 text-center">
                            No clients found
                          </div>
                        )}
                      </div>
                    </div>
                  )}

                  {error && (
                    <p className="text-red-500 text-sm px-2 absolute bottom-[-24px] left-0">
                      {error.message}
                    </p>
                  )}
                </>
              );
            }}
          />
        </div>
      )}
    </div>
  );
};

export default MultiSelect;
