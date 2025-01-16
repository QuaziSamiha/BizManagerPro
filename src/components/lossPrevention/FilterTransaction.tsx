"use client";
import React from "react";
import SelectField from "../ui/form/SelectField";
import { useForm } from "react-hook-form";
import SubmitButton from "../ui/form/SubmitButton";
import Input from "../ui/form/Input";
import { yupResolver } from "@hookform/resolvers/yup";
import Schema from "./Schema";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface IForm {
  registers: string;
  cashiers: string;
  eventTypes: string;
  salesEventTypes: string;
  includesSKUs: string;
  includesDepartments: string;
  includesTags: string;
  tenderCodes: string;
  minimumAmount: number;
  maximumAmount: number;
  lastFourCard: string;
  manualRingUp: string;
  discountedLine: string;
  voidLine: string;
  flagged: string;
}

interface IAdd {
  setOpen: (open: boolean) => void;
  refetch: any;
}

interface ISelect {
  selectValue: string;
  selectName: string;
}

const demoOptions: ISelect[] = [
  {
    selectValue: "price_001",
    selectName: "Direct Unit Mode",
  },
  {
    selectValue: "price_002",
    selectName: "Direct Case Calculation",
  },
  {
    selectValue: "price_003",
    selectName: "Direct Item Calculation",
  },
];

const FilterTransaction: React.FC<IAdd> = ({ setOpen, refetch }) => {
  // ============== RESOLVE SCHEMA =============
  const resolver = yupResolver(Schema);

  // ========== USE REACT HOOK FORM ==========
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    resetField,
    watch,
    control,
  } = useForm<IForm>({ resolver });

  // ============== SUBMIT FUNCTION ==================
  const onSubmit = (data: IForm) => {
    alert(JSON.stringify(data));
    // setIsLoading(true);
    toast.success("Message sent successfully!", {
      position: "bottom-left",
      autoClose: 3001,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    reset();
    // refetch();
    setOpen(false);
    // setIsLoading(true);
    // fetch(
    //     `url`,
    //     {
    //       method: "POST",
    //       headers: {
    //         "content-type": "application/json",
    //       },
    //       body: JSON.stringify(data),
    //     }
    //   )
    //     .then((res) => {
    //       console.log("res", res);

    //       return res.json();
    //     })
    //     .then((data) => {
    //        console.log("data", data);
    //       if (data.success === true) {
    //         toast.success("Message sent successfully!", {
    //           position: "bottom-left",
    //           autoClose: 3001,
    //           hideProgressBar: false,
    //           closeOnClick: true,
    //           pauseOnHover: true,
    //           draggable: true,
    //           progress: undefined,
    //           theme: "light",
    //         });

    //         reset();
    //         refetch();
    //         setOpen(false);
    //       } else {
    //         toast.error("Message not sent. Please try again!", {
    //           position: "bottom-left",
    //           autoClose: 3001,
    //           hideProgressBar: false,
    //           closeOnClick: true,
    //           pauseOnHover: true,
    //           draggable: true,
    //           progress: undefined,
    //           theme: "light",
    //         });
    //       }
    //     })
    // .finally(() => setIsLoading(false));
  };

  // =========== RESET FILTER FUNCTION ==========
  const handleResetFilter = () => {
    reset();
  };

  return (
    <section className="flex flex-col gap-4">
      {/* ========== TITLE ======== */}
      <p className="text-textPrimary font-semibold text-2xl">
        Transaction Search
      </p>
      {/* ========== FORM =========== */}
      <form
        action=""
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4"
      >
        <SelectField
          control={control}
          name="registers"
          data={demoOptions}
          label="Registers"
          placeholderText="Registers"
          errorMessage={errors?.registers?.message}
          errors={errors}
          labelKey="selectName"
          valueKey="selectValue"
          // labelKey="registersName"
          // valueKey="registersValue"
          resetField={resetField}
          resetFieldName1=""
          resetFieldName2=""
          disabledValue="1"
          isLoading={false}
        />
        <SelectField
          control={control}
          name="cashiers"
          data={demoOptions}
          label="Cashiers"
          placeholderText="Cashiers"
          errorMessage={errors?.cashiers?.message}
          errors={errors}
          // labelKey="cashiersName"
          // valueKey="cashiersValue"
          labelKey="selectName"
          valueKey="selectValue"
          resetField={resetField}
          resetFieldName1=""
          resetFieldName2=""
          disabledValue="1"
          isLoading={false}
        />
        <SelectField
          control={control}
          name="eventTypes"
          data={demoOptions}
          label="Event Types"
          placeholderText="Event Types"
          errorMessage={errors?.eventTypes?.message}
          errors={errors}
          // labelKey="eventTypesName"
          // valueKey="eventTypesValue"
          labelKey="selectName"
          valueKey="selectValue"
          resetField={resetField}
          resetFieldName1=""
          resetFieldName2=""
          disabledValue="1"
          isLoading={false}
        />
        <SelectField
          control={control}
          name="salesEventTypes"
          data={demoOptions}
          label="Sales Event Types"
          placeholderText="Sales Event Types"
          errorMessage={errors?.salesEventTypes?.message}
          errors={errors}
          // labelKey="salesEventTypesName"
          // valueKey="salesEventTypesValue"
          labelKey="selectName"
          valueKey="selectValue"
          resetField={resetField}
          resetFieldName1=""
          resetFieldName2=""
          disabledValue="1"
          isLoading={false}
        />
        <SelectField
          control={control}
          name="includesSKUs"
          data={demoOptions}
          label="Includes SKUs"
          placeholderText="Includes SKUs"
          errorMessage={errors?.includesSKUs?.message}
          errors={errors}
          // labelKey="includesSKUsName"
          // valueKey="includesSKUsValue"
          labelKey="selectName"
          valueKey="selectValue"
          resetField={resetField}
          resetFieldName1=""
          resetFieldName2=""
          disabledValue="1"
          isLoading={false}
        />
        <SelectField
          control={control}
          name="includesDepartments"
          data={demoOptions}
          label="Includes Departments"
          placeholderText="Includes Departments"
          errorMessage={errors?.includesDepartments?.message}
          errors={errors}
          // labelKey="includesDepartmentsName"
          // valueKey="includesDepartmentsValue"
          labelKey="selectName"
          valueKey="selectValue"
          resetField={resetField}
          resetFieldName1=""
          resetFieldName2=""
          disabledValue="1"
          isLoading={false}
        />
        <SelectField
          control={control}
          name="includesTags"
          data={demoOptions}
          label="Includes Tags"
          placeholderText="Includes Tags"
          errorMessage={errors?.includesTags?.message}
          errors={errors}
          // labelKey="includesTagsName"
          // valueKey="includesTagsValue"
          labelKey="selectName"
          valueKey="selectValue"
          resetField={resetField}
          resetFieldName1=""
          resetFieldName2=""
          disabledValue="1"
          isLoading={false}
        />
        <SelectField
          control={control}
          name="tenderCodes"
          data={demoOptions}
          label="Tender Codes"
          placeholderText="Tender Codes"
          errorMessage={errors?.tenderCodes?.message}
          errors={errors}
          // labelKey="tenderCodesName"
          // valueKey="tenderCodesValue"
          labelKey="selectName"
          valueKey="selectValue"
          resetField={resetField}
          resetFieldName1=""
          resetFieldName2=""
          disabledValue="1"
          isLoading={false}
        />
        <div className="flex items-center gap-4">
          <Input
            labelName="Minimum Amount"
            inputType="number"
            placeholderText="Minimum Amount"
            name="minimumAmount"
            errors={errors}
            register={register}
          />
          <Input
            labelName="Maximum Amount"
            inputType="number"
            placeholderText="Maximum Amount"
            name="maximumAmount"
            errors={errors}
            register={register}
          />
        </div>
        <SelectField
          control={control}
          name="lastFourCard"
          data={demoOptions}
          label="Last Four #'s of Card"
          placeholderText="Last Four #'s of Card"
          errorMessage={errors?.lastFourCard?.message}
          errors={errors}
          // labelKey="lastFourCardName"
          // valueKey="lastFourCardValue"
          labelKey="selectName"
          valueKey="selectValue"
          resetField={resetField}
          resetFieldName1=""
          resetFieldName2=""
          disabledValue="1"
          isLoading={false}
        />
        <div className="flex items-center gap-4">
          <SelectField
            control={control}
            name="manualRingUp"
            data={demoOptions}
            label="Has Manual Ring up"
            placeholderText="Don't Filter"
            errorMessage={errors?.manualRingUp?.message}
            errors={errors}
            // labelKey="manualRingUpName"
            // valueKey="manualRingUpValue"
            labelKey="selectName"
            valueKey="selectValue"
            resetField={resetField}
            resetFieldName1=""
            resetFieldName2=""
            disabledValue="1"
            isLoading={false}
          />
          <SelectField
            control={control}
            name="discountedLine"
            data={demoOptions}
            label="Has Discounted Line"
            placeholderText="Don't Filter"
            errorMessage={errors?.discountedLine?.message}
            errors={errors}
            // labelKey="discountedLineName"
            // valueKey="discountedLineValue"
            labelKey="selectName"
            valueKey="selectValue"
            resetField={resetField}
            resetFieldName1=""
            resetFieldName2=""
            disabledValue="1"
            isLoading={false}
          />
        </div>
        <div className="flex items-center gap-4">
          <SelectField
            control={control}
            name="voidLine"
            data={demoOptions}
            label="Has Void Line"
            placeholderText="Don't Filter"
            errorMessage={errors?.voidLine?.message}
            errors={errors}
            // labelKey="voidLineName"
            // valueKey="voidLineValue"
            labelKey="selectName"
            valueKey="selectValue"
            resetField={resetField}
            resetFieldName1=""
            resetFieldName2=""
            disabledValue="1"
            isLoading={false}
          />
          <SelectField
            control={control}
            name="flagged"
            data={demoOptions}
            label="Was Flagged"
            placeholderText="Don't Filter"
            errorMessage={errors?.flagged?.message}
            errors={errors}
            // labelKey="flaggedName"
            // valueKey="flaggedValue"
            labelKey="selectName"
            valueKey="selectValue"
            resetField={resetField}
            resetFieldName1=""
            resetFieldName2=""
            disabledValue="1"
            isLoading={false}
          />
        </div>
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={handleResetFilter}
            className="bg-violetAltSecondary w-full rounded-md text-white font-medium text-base py-2"
          >
            Reset Filters
          </button>
          <SubmitButton submitTitle="Save Changes" />
        </div>
      </form>
    </section>
  );
};

export default FilterTransaction;
