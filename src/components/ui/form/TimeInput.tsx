import { useState, useEffect } from "react";
import { Controller } from "react-hook-form";

interface TimeInputProps {
  name: string;
  labelName?: string;
  defaultTime?: string;
  control?: any;
  errors?: any;
  isRequired?: boolean;
  disabled?: boolean;
}

const TimeInput: React.FC<TimeInputProps> = ({
  name,
  defaultTime,
  labelName,
  control,
  errors,
  isRequired,
  disabled,
}) => {
  const [time, setTime] = useState<string | null>(defaultTime || "");

  useEffect(() => {
    setTime(defaultTime || "");
  }, [defaultTime]);

  const handleTimeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newTime = event.target.value;
    setTime(newTime);
  };

  return (
    <div className="flex flex-col gap-3 w-full">
      <label className="text-black text-base pl-1">
        {labelName}
        {isRequired && <span className="text-red-500">*</span>}{" "}
      </label>

      <Controller
        name={name}
        control={control}
        defaultValue={defaultTime}
        rules={{ required: "Time is required" }}
        render={({ field }) => (
          <input
            {...field}
            type="time"
            value={time || ""}
            onChange={(e) => {
              handleTimeChange(e);
              field.onChange(e);
            }}
            className={`px-4 py-1.5 rounded-md outline-none 
              ${
                !time
                  ? "text-textPrimary bg-greySecondary"
                  : "text-black bg-greySecondary"
              }`}
            aria-label="Select Time"
            disabled={disabled}
          />
        )}
      />
      {errors?.[name] && !disabled && (
        <p className="text-red-500 text-sm">{errors[name]?.message}</p>
      )}
    </div>
  );
};

export default TimeInput;
