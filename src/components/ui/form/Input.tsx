import { IInput } from "@/interfaces/form";
import { FieldValues, Path } from "react-hook-form";

const Input = <T extends FieldValues>({
  labelName,
  inputType = "text",
  placeholderText,
  name,
  errors,
  register,
  disabled,
  isRequired,
  defaultValue,
}: IInput<T>) => {
  return (
    <div className="flex flex-col gap-3 w-full">
      <label className="text-black text-base pl-2">
        {labelName}
        {isRequired && !disabled && (
          <span className="text-red-500 px-0.5">*</span>
        )}{" "}
      </label>
      <input
        className="block outline-none bg-greyPrimary font-normal placeholder:text-textPrimary text-sm py-2.5 px-3 rounded-md w-full [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
        type={inputType}
        placeholder={placeholderText}
        defaultValue={defaultValue}
        {...register(name as Path<T>)}
        disabled={disabled}
        onWheel={(e) => e.currentTarget.blur()}
      />
      {errors?.[name] && !disabled && (
        <p className="text-red-500 text-sm mt-1 pl-3">
          {typeof errors[name]?.message === "string" && errors[name]?.message}
        </p>
      )}
    </div>
  );
};

export default Input;
