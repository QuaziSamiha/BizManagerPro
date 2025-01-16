import React from "react";
import { Controller } from "react-hook-form";
import { Checkbox } from "@/components/ui/checkbox";

interface IItem {
  id: string;
  label: string;
}

interface IProps {
  items: ReadonlyArray<IItem>;
  control: any;
  title?: string;
  inputName: string;
  errors?: any;
  errorMessage?: string | undefined;
  isRequired?: boolean;
}

const MultipleCheckboxInput: React.FC<IProps> = ({
  items,
  control,
  title,
  inputName,
  errors,
  errorMessage,
  isRequired,
}) => {
  return (
    <div>
      {title && (
        <label className="font-medium text-black text-base">
          {title} {isRequired && <span className="text-red-500">*</span>}
        </label>
      )}
      <div className="mt-2 space-y-3">
        {items.map((item) => (
          <Controller
            key={item.id}
            name={inputName}
            control={control}
            rules={{ required: true }}
            render={({
              field,
            }: {
              field: { value: string[]; onChange: (value: string[]) => void };
            }) => (
              <div className="flex items-center gap-2">
                <Checkbox
                  className={`h-6 w-6 rounded-sm border border-bluePrimary ${
                    field.value?.includes(item.id)
                      ? "data-[state=checked]:bg-bluePrimary data-[state=checked]:text-bluePrimary"
                      : "bg-transparent"
                  }`}
                  checked={field.value?.includes(item.id)}
                  onCheckedChange={(checked) => {
                    const newValue = checked
                      ? [...(field.value || []), item.id]
                      : (field.value || []).filter(
                          (value) => value !== item.id
                        );
                    field.onChange(newValue);
                  }}
                  id={item.id}
                />
                <label
                  htmlFor={item.id}
                  className="cursor-pointer text-sm font-medium text-gray-700"
                >
                  {item.label}
                </label>
              </div>
            )}
          />
        ))}
      </div>
      {/* {errors?.[inputName] && (
        <p className="text-red-500 text-sm mt-2">{title} is required</p>
      )} */}
      {errorMessage && (
        <p className="text-red-500 text-sm mt-2">{errorMessage}</p>
      )}
    </div>
  );
};

export default MultipleCheckboxInput;
