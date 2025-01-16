"use client";
import React from "react";
import { UseFormRegister } from "react-hook-form";
interface InputProps {
  label: string;
  type: string;
  index?: number;
  placeholder: string;
  id: string;
  errors?: any;
  register?: UseFormRegister<any>;
}
const Input: React.FC<InputProps> = ({
  label,
  type,
  index,
  placeholder,
  id,
  errors,
  register,
}) => {
  return (
    <div className="flex flex-col gap-4 pt-2 w-full">
      <label htmlFor={id} className="text-sm font-medium text-blueAltPrimary">
        {label}
      </label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        {...(register
          ? register(`${id}[${index}].line`, {
              onChange: (e) => {
                console.log(
                  `Changed value for ${id} at index ${index}:`,
                  e.target.value
                );
              },
            })
          : {})}
        className="text-sm font-normal leading-6 p-2 outline-outlinePrimary border border-borderPrimary rounded-lg"
      />
      {/* //! NOT SHOWING ERROR MESSAGE FIX THIS ISSUE */}
      <p className="text-red-500 text-sm mt-1">
        {errors?.[id]?.message ||
          (index !== undefined && errors?.items?.[index]?.name?.message)}
      </p>
    </div>
  );
};

export default Input;
