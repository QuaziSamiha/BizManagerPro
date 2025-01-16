"use client";
import React, { useState } from "react";
import { UseFormRegister } from "react-hook-form";
import { FiEyeOff } from "react-icons/fi";
import { MdOutlineRemoveRedEye } from "react-icons/md";

interface FieldInfo {
  labelName?: string;
  placeholderText: string;
  name: string;
  errors: any;
  // errorMessage?: string;
  register: UseFormRegister<any>;
  disabled?: boolean;
  isRequired?: boolean;
  defaultValue?: any;
}

const PasswordInput: React.FC<FieldInfo> = ({
  labelName,
  placeholderText,
  name,
  errors,
  register,
  disabled,
  defaultValue,
  isRequired,
  // errorMessage,
}) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  return (
    <div className="flex flex-col gap-2 w-full">
      <label className="text-black text-basic pl-2">
        {labelName}
        {isRequired && <span className="text-red-500">*</span>}{" "}
      </label>
      <div className="flex items-center justify-between bg-greySecondary py-[10px] rounded-md w-full">
        <input
          className="block outline-none font-normal placeholder:text-textPrimary text-sm bg-greySecondary pl-6 w-full"
          type={showPassword ? "text" : "password"}
          placeholder={placeholderText}
          // defaultValue={defaultValue}
          {...register(name, { required: true })}
          // disabled={disabled}
        />
        {showPassword ? (
          <button
            className="px-6 outline-none"
            onClick={() => setShowPassword(false)}
          >
            <MdOutlineRemoveRedEye />
          </button>
        ) : (
          <button
            className="px-6 outline-none"
            onClick={() => setShowPassword(true)}
          >
            <FiEyeOff />
          </button>
        )}
      </div>
      {errors[name] && (
        <p className="text-red-500 text-sm mt-1 px-3">
         {errors[name].message}
        </p>
      )}
      {/* {errorMessage && (
        <p className="text-red-500 text-sm mt-1 px-6">{errorMessage}</p>
      )} */}
    </div>
  );
};

export default PasswordInput;
