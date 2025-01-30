import { FieldValues, Path } from "react-hook-form";
import { Textarea } from "../textarea";
import { ITextArea } from "@/interfaces/form";

const TextArea = <T extends FieldValues>({
  labelName,
  placeholderText,
  name,
  register,
  errors,
  isRequired,
  disabled,
}: ITextArea<T>) => {
  return (
    <div className="flex flex-col gap-3 w-full">
      <label className="text-black text-base pl-2">
        {labelName}
        {isRequired && !disabled && (
          <span className="text-red-500 px-0.5">*</span>
        )}{" "}
      </label>
      <Textarea
        id={String(name)}
        placeholder={placeholderText}
        disabled={disabled}
        // defaultValue={defaultValue}
        {...register(name as Path<T>)}
        // rows={10}
        // cols={12}
        className={`w-full border rounded-md p-2 bg-greyPrimary resize-none`}
      />
      {errors?.[name] && !disabled && (
        <p className="text-red-500 text-sm mt-1 pl-3">
          {typeof errors[name]?.message === "string" && errors[name]?.message}
        </p>
      )}
    </div>
  );
};

export default TextArea;
