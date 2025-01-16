"use client";

import ReceiptConfigure from "./receiptConfigure/ReceiptConfigure";
import TouchConfigure from "./touchConfigure/TouchConfigure";
import RegisterInfo from "./RegisterInfo/RegisterInfo";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Schema } from "./RegisterInfo/Schema";
import SubmitButton from "@/components/ui/form/SubmitButton";

interface IProps {
  handleOpen?: () => void;
  refetch?: () => void;
  isDisable?: boolean | undefined;
}

const RegConfiguration: React.FC<IProps> = ({ handleOpen, isDisable }) => {
  // ============= YUP VALIDATION =============
  const resolver = yupResolver(Schema);

  // ======= REACT HOOK FORM ========
  const {
    register,
    handleSubmit,
    formState: { errors },
    resetField,
    control,
    getValues,
  } = useForm({ resolver });

  // ============ SUBMIT FUNCTION ==========
  const onSubmit = (data: { [key: string]: unknown }) => {
    console.log(data);
  };

  return (
    <div className="relative">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-6">
          <RegisterInfo
            control={control}
            register={register}
            isDisable={isDisable}
            resetField={resetField}
            errors={errors}
          />
        </div>
        <div className="mb-6">
          <h1 className=" text-xl font-bold text-textPrimary pb-5">
            Touchscreen Configuration
          </h1>
          <TouchConfigure />
        </div>
        <div>
          <h1 className=" text-xl font-bold text-textPrimary pb-5">
            Receipt Configuration
          </h1>
          <ReceiptConfigure
            control={control}
            register={register}
            errors={errors}
            getValues={getValues}
          />
        </div>

        <div className="sticky -bottom-10 left-0 right-0 flex justify-center items-center gap-5 bg-white z-10 h-20">
          <button
            onClick={handleOpen}
            type="button"
            className="font-semibold text-textPrimary rounded py-1 px-10 h-8 bg-whitePrimary border border-textPrimary w-full"
          >
            Cancel
          </button>

          <SubmitButton submitTitle="Save" />
        </div>
      </form>
    </div>
  );
};

export default RegConfiguration;
