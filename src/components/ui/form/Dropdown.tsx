import React, { useState } from "react";
import { UseFormRegister, UseFormSetValue } from "react-hook-form";
import { FaAngleUp, FaAngleDown } from "react-icons/fa6";

interface Option {
  value: string;
  label: string;
}

interface DropdownSelectProps {
  id: string;
  label: string;
  options: Option[];
  errors?: any;
  register?: UseFormRegister<any>;
  setValue?: UseFormSetValue<any>;
  initialValue?:string
}

const Dropdown: React.FC<DropdownSelectProps> = ({
  id,
  label,
  options,
  register,
  errors,
  setValue,
  initialValue
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(initialValue||"Select Company");

  const handleOptionClick = (option: Option) => {
    setSelectedOption(option.label);
    setIsOpen(false);
    if (setValue) {
      setValue(id, option.value, { shouldValidate: true });
    }
  };

  return (
    <div className="flex flex-col gap-4 p-3">
      <label
        htmlFor={id}
        className="text-sm font-medium leading-5 text-[#0D121F]"
      >
        {label}
      </label>
      <div className="relative">
        <button
          id={id}
          className="text-sm font-normal leading-6 p-2 outline-none border border-[#E6E6E6] rounded-lg w-full text-left"
          onClick={(e) => {
            e.preventDefault();
            setIsOpen(!isOpen);
          }}
          {...(register ? register(id) : {})}
        >
          {isOpen ? (
            <div className="flex justify-between items-center">
              {selectedOption} <FaAngleUp size={18} />
            </div>
          ) : (
            <div className="flex justify-between items-center">
              {selectedOption} <FaAngleDown size={18} />
            </div>
          )}
        </button>
        {isOpen && (
          <div className="absolute left-0 right-0 bg-white border border-[#E6E6E6] rounded-lg mt-1 z-10">
            {options.map((option) => (
              <div
                key={option.value}
                className="my-2 p-2 hover:bg-[#13508F] hover:text-white cursor-pointer text-sm font-normal leading-6"
                onClick={(e) => {
                  e.preventDefault();
                  handleOptionClick(option);
                }}
              >
                {option.label}
              </div>
            ))}
          </div>
        )}
          <input
            type="hidden"
            value={selectedOption}
            {...(register ? register(id) : {})}
          />
        {errors?.[id] && (
          <p className="text-red-500 text-sm mt-4">{errors[id]?.message}</p>
        )}
      </div>
    </div>
  );
};

export default Dropdown;
