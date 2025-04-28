import { useState, useRef, useEffect } from "react";
import { ChevronDown, Search } from "lucide-react";
import { Controller, FieldValues, Path } from "react-hook-form";
import { Skeleton } from "../skeleton";
import { ISingleSelect } from "@/interfaces/form/form";

const SingleSelectSearch = <T extends FieldValues>({
  labelName,
  name,
  options,
  control,
  isRequired = false,
  isLoading = false,
}: ISingleSelect<T>) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
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
            rules={{ required: isRequired }}
            render={({ field: { value, onChange }, fieldState: { error } }) => {
              const selectedOption = (options ?? []).find(
                (opt) => opt.id === value
              );

              return (
                <>
                  <div
                    className="min-h-[42px] px-3 py-1 text-sm rounded-md bg-stone-100 cursor-pointer flex items-center gap-2 overflow-hidden whitespace-nowrap"
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    <div className="flex items-center gap-2 overflow-hidden">
                      {selectedOption ? (
                        <span className="text-slate-700">
                          {selectedOption.name}
                        </span>
                      ) : (
                        <span className="text-slate-400">{labelName}</span>
                      )}
                    </div>
                    <ChevronDown
                      size={20}
                      className={`ml-auto flex-shrink-0 transition-transform ${
                        isOpen && "rotate-180"
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
                            placeholder="Search..."
                            className="w-full pl-8 pr-2 py-1 rounded-md focus:outline-none text-sm placeholder:text-slate-700"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            onClick={(e) => e.stopPropagation()}
                          />
                        </div>
                      </div>
                      <div className="max-h-60 overflow-y-auto">
                        {filteredOptions.map((option) => (
                          <div
                            key={option.id}
                            className={`px-4 py-2 cursor-pointer hover:bg-gray-100 ${
                              value === option.id && "bg-blue-50 text-blue-800"
                            }`}
                            onClick={() => {
                              onChange(option.id);
                              setIsOpen(false);
                            }}
                          >
                            {option.name}
                          </div>
                        ))}
                        {filteredOptions.length === 0 && (
                          <div className="px-4 py-2 text-slate-700 text-center">
                            No options found
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

export default SingleSelectSearch;
