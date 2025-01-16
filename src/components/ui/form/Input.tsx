import { UseFormRegister } from "react-hook-form";

interface FieldInfo {
  inputType: string;
  placeholderText: string;
  name: string;
  errors?: any;
  labelName?: string;
  register: UseFormRegister<any>;
  disabled?: boolean;
  isRequired?: boolean;
  defaultValue?: any;
  errorsMsg?: any;
}

const Input: React.FC<FieldInfo> = ({
  labelName,
  inputType,
  placeholderText,
  name,
  errors,
  register,
  disabled,
  defaultValue,
  isRequired,
  errorsMsg,
}) => {
  return (
    <div className="flex flex-col gap-3 w-full">
      <label className="text-black text-base pl-2">
        {labelName}
        {isRequired && !disabled && (
          <span className="text-red-500 px-0.5">*</span>
        )}{" "}
      </label>
      <input
        className="block outline-none bg-greySecondary font-normal placeholder:text-textPrimary text-sm py-2.5 px-3 rounded-md w-full [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
        type={inputType}
        placeholder={placeholderText}
        defaultValue={defaultValue}
        {...register(name)}
        disabled={disabled}
        onWheel={(e) => e.currentTarget.blur()}
      />
      {errors?.[name] && !disabled && (
        <p className="text-red-500 text-sm mt-1 pl-3">
          {errors[name]?.message}
        </p>
      )}
      {/* {errorsMsg && (
        <p className="text-red-500 text-sm mt-1 pl-3">{errorsMsg}</p>
      )} */}
    </div>
  );
};

export default Input;
