import { UseFormRegister } from "react-hook-form";

interface IOptions {
  valueId: string;
  valueLabel: string;
}

interface IProps {
  labelName?: string;
  inputName: string;
  errorMessage?: string;
  register: UseFormRegister<any>;
  disabled?: boolean;
  isRequired?: boolean;
  defaultValue?: any;
  data: IOptions[];
  gridCols?: number;
}

const RadioButtons: React.FC<IProps> = ({
  labelName,
  inputName,
  errorMessage,
  register,
  disabled,
  defaultValue,
  isRequired,
  data,
  gridCols=3,
}) => {
  // console.log(errorMessage);

  return (
    <div className="flex flex-col gap-2">
      <label className="text-black text-base pl-2 mb-1 whitespace-nowrap">
        {labelName}
        {isRequired && <span className="text-red-500"> *</span>}{" "}
      </label>
      <div className={`grid grid-cols-${gridCols}`}>
        {/* <div className={`grid grid-cols-3`}> */}
        {data.map((datum: IOptions, index: number) => (
          <label
            key={index}
            className="flex items-center justify-center gap-2 w-fit px-3  whitespace-nowrap"
          >
            <input
              className=" outline-none bg-greySecondary font-normal placeholder:text-textPrimary text-sm py-2.5 px-6 rounded-md w-full"
              type="radio"
              defaultChecked={datum.valueLabel === defaultValue}
              // defaultValue={defaultValue}
              // checked={defaultValue===datum?.valueLabel}
              value={datum.valueId}
              {...register(inputName)}
              disabled={disabled}
            />
            <span className="mb-1">{datum.valueLabel}</span>
          </label>
        ))}
      </div>

      {/* {errors[name] && (
        <p className="text-red-500 text-sm mt-1 px-6">{labelName} is required</p>
      )} */}
      {errorMessage && (
        <p className="text-red-500 text-sm mt-1">{errorMessage}</p>
      )}
    </div>
  );
};

export default RadioButtons;
