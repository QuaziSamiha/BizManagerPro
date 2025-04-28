"use client";

import { FieldValues, Path, PathValue, useController } from "react-hook-form";
import { cn } from "@/lib/utils";
import { IToggleButton } from "@/interfaces/form/form";

export default function ToggleButton<T extends FieldValues>({
  labelName,
  name,
  control,
  positiveText = "Active",
  negativeText = "Inactive",
  defaultValue,
  className,
}: IToggleButton<T>) {
  // ========== REACT HOOK FORM API ==========
  const { field } = useController({
    name,
    control,
    defaultValue: defaultValue as PathValue<T, Path<T>>,
  });
  return (
    <div className="flex flex-col gap-2 w-full">
      <label className="text-slate-800 text-base font-medium pl-2">
        {labelName}
      </label>
      <div
        className={cn(
          "flex rounded-md overflow-hidden w-full transition-all",
          className
        )}
      >
        <button
          type="button"
          className={cn(
            "px-4 py-2.5 text-sm font-medium transition-all duration-300 w-1/2",
            field.value
              ? "bg-blue-100 text-blueActual"
              : "bg-whiteSecondary text-gray-700 hover:bg-gray-200"
          )}
          onClick={() => field.onChange(true)}
          aria-pressed={field.value === true}
        >
          {positiveText}
        </button>
        <button
          type="button"
          className={cn(
            "px-4 py-2.5 text-sm font-medium transition-all duration-300 w-1/2",
            !field.value
              ? "bg-red-100 text-redActual"
              : "bg-whiteSecondary text-gray-700 hover:bg-gray-200"
          )}
          onClick={() => field.onChange(false)}
          aria-pressed={field.value === false}
        >
          {negativeText}
        </button>
      </div>
    </div>
  );
}
