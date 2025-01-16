"use client";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { toast } from "react-toastify";
import Input from "@/components/ui/form/Input";
import SelectField from "@/components/ui/form/SelectField";
import Schema from "./Schema";
import RadioButtons from "@/components/ui/form/RadioButtons";
import SubmitButton from "@/components/ui/form/SubmitButton";

interface IFormInput {
  sku: string;
  name: string;
  weight: number;
  department: string;
  uom: string;
  lowStock: string;
  productType: string;
  pricingMode: string;
}

interface IAdd {
  setOpen: (open: boolean) => void;
  refetch: any;
}

interface IProductType {
  valueId: string;
  valueLabel: string;
}

const productTypes: IProductType[] = [
  {
    valueId: "taxable",
    valueLabel: "Taxable",
  },
  {
    valueId: "ebt",
    valueLabel: "EBT Eligible",
  },
  {
    valueId: "age",
    valueLabel: "Age Restricted",
  },
];

interface IDepartment {
  departmentValue: string;
  departmentName: string;
}

const departments: IDepartment[] = [
  {
    departmentValue: "store_001",
    departmentName: "Drinks",
  },
  {
    departmentValue: "store_002",
    departmentName: "Beverages",
  },
  {
    departmentValue: "store_003",
    departmentName: "Fresh Produce",
  },
  {
    departmentValue: "store_004",
    departmentName: "Dairy",
  },
  {
    departmentValue: "store_005",
    departmentName: "Bakery",
  },
  {
    departmentValue: "store_006",
    departmentName: "Meat & Seafood",
  },
  {
    departmentValue: "store_007",
    departmentName: "Frozen Foods",
  },
  {
    departmentValue: "store_008",
    departmentName: "Snacks",
  },
  {
    departmentValue: "store_009",
    departmentName: "Household Items",
  },
  {
    departmentValue: "store_010",
    departmentName: "Personal Care",
  },
];

interface IPriceMode {
  priceModeValue: string;
  priceModeName: string;
}

const priceModes: IPriceMode[] = [
  {
    priceModeValue: "price_001",
    priceModeName: "Direct Unit Mode",
  },
  {
    priceModeValue: "price_002",
    priceModeName: "Direct Case Calculation",
  },
  {
    priceModeValue: "price_003",
    priceModeName: "Direct Item Calculation",
  },
];

const Add: React.FC<IAdd> = ({ setOpen, refetch }) => {
  const [isLoading, setIsLoading] = useState<boolean>();

  const resolver = yupResolver(Schema);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    resetField,
    watch,
    control,
  } = useForm<IFormInput>({ resolver });

  const pricingMode = watch("pricingMode");

  const onSubmit = (data: IFormInput) => {
    alert(JSON.stringify(data));
    setIsLoading(true);
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
    refetch();
    setOpen(false);
    setIsLoading(true);
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

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-6">
          <div className="grid grid-cols-2 gap-2">
            <Input
              labelName="SKU"
              inputType="text"
              placeholderText="SKU"
              name="sku"
              errors={errors}
              register={register}
            />
            <Input
              labelName="Name"
              inputType="text"
              placeholderText="Name"
              name="name"
              errors={errors}
              register={register}
            />
          </div>
          <div className="grid grid-cols-3 gap-2">
            <div className=" border border-[#787878] p-2 rounded-md flex justify-center items-center flex-col">
              <button className="text-[#878787] hover:bg-greySecondary py-1 w-full text-sm font-semibold">
                Scan Product
              </button>
              <button className="text-[#878787] hover:bg-greySecondary py-1 w-full text-sm font-semibold">
                Add Check Digit
              </button>
              <button className="text-[#878787] hover:bg-greySecondary py-1 w-full text-sm font-semibold">
                Print Label
              </button>
            </div>
            <Input
              labelName="Weight"
              inputType="text"
              placeholderText="Product Weight"
              name="weight"
              defaultValue={0}
              errors={errors}
              register={register}
            />
            <SelectField
              control={control}
              name="department"
              data={departments}
              label="Department Name"
              placeholderText="Department"
              errorMessage={errors?.department?.message}
              labelKey="departmentName"
              valueKey="departmentValue"
              resetField={resetField}
              resetFieldName1=""
              resetFieldName2=""
              disabledValue="1"
              isLoading={false}
            />
          </div>
          <RadioButtons
            labelName=""
            inputName="productType"
            errorMessage={errors?.productType?.message}
            register={register}
            data={productTypes}
            gridCols={3}
          />
          <div className="grid grid-cols-2 gap-2">
            <Input
              labelName="Unit of Measurement (UOM)"
              inputType="text"
              placeholderText="Unit of Measurement"
              name="uom"
              errors={errors}
              register={register}
            />
            <Input
              labelName="Low Stock Alert"
              inputType="text"
              placeholderText="Low Stock"
              name="lowStock"
              errors={errors}
              register={register}
            />
          </div>
          <div className="border-t border-dashed pt-2">
            <div className="w-1/2 flex flex-col gap-4">
              <SelectField
                control={control}
                name="pricingMode"
                data={priceModes}
                label="Pricing Mode"
                placeholderText="Pricing Mode"
                errorMessage={errors?.pricingMode?.message}
                labelKey="priceModeName"
                valueKey="priceModeValue"
                resetField={resetField}
                resetFieldName1=""
                resetFieldName2=""
                disabledValue="1"
                isLoading={false}
              />
              
              {/* ======== IF DIRECT UNIT MODE SELECTED ======= */}
              {pricingMode === "price_001" && (
                <div className="w-1/2">
                  <Input
                    labelName="Unit Retail Price"
                    inputType="number"
                    placeholderText="$ 00.00"
                    name="unitRetailPrice"
                    errors={errors}
                    register={register}
                  />
                </div>
              )}

              {/* =============== IF DIRECT CASE CALCULATION SELECTED ========== */}
              {pricingMode === "price_002" && (
                <div className="flex flex-col gap-4">
                  <div className="flex justify-between gap-2">
                    <Input
                      labelName="Case Cost"
                      inputType="number"
                      placeholderText="$ 00.00"
                      name="caseCost"
                      errors={errors}
                      register={register}
                    />
                    <Input
                      labelName="Unit Per Case"
                      inputType="number"
                      placeholderText="$ 00.00"
                      name="unitPerCase"
                      errors={errors}
                      register={register}
                    />
                    <Input
                      labelName="Unit Cost"
                      inputType="number"
                      placeholderText="$ 00.00"
                      name="unitCost"
                      errors={errors}
                      register={register}
                    />
                  </div>
                  <div className="flex justify-between gap-2">
                    <Input
                      labelName="Profit Margin"
                      inputType="number"
                      placeholderText="$ 00.00"
                      name="profitMargin"
                      errors={errors}
                      register={register}
                    />
                    <Input
                      labelName="Unit Retail Price"
                      inputType="number"
                      placeholderText="$ 00.00"
                      name="caseRetailPrice"
                      errors={errors}
                      register={register}
                    />
                  </div>
                </div>
              )}

              {/* =============== IF DIRECT ITEM CALCULATION SELECTED ========== */}
              {pricingMode === "price_003" && (
                <div className="flex justify-between gap-2">
                  <Input
                    labelName="Unit Cost"
                    inputType="number"
                    placeholderText="$ 00.00"
                    name="unitCost"
                    errors={errors}
                    register={register}
                  />
                  <Input
                    labelName="Profit Margin"
                    inputType="number"
                    placeholderText="$ 00.00"
                    name="itemProfitMargin"
                    errors={errors}
                    register={register}
                  />
                  <Input
                    labelName="Unit Retail Price"
                    inputType="number"
                    placeholderText="$ 00.00"
                    name="itemRetailPrice"
                    errors={errors}
                    register={register}
                  />
                </div>
              )}
            </div>
          </div>

          <SubmitButton submitTitle="Save Products" />
        </div>
      </form>
    </div>
  );
};

export default Add;
