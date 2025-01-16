"use client";

import { RootState } from "@/redux/Reducer/MainSlice";
import { yupResolver } from "@hookform/resolvers/yup";
import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import Schema from "./Schema";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Input from "@/components/ui/form/Input";
import SelectField from "@/components/ui/form/SelectField";
import RadioButtons from "@/components/ui/form/RadioButtons";
import EditSelectField from "@/components/ui/form/EditSelectField";

interface IEditProps {
  setEditModalOpen: Function;
  refetch: any;
}

interface IFormInput {
  sku:string;
  name: string;
  weight: number;
  department:string;
uom:string;
lowStock: string;
productType: string;
pricingMode:string;
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
    "departmentValue": "store_001",
    "departmentName": "Drinks"
  },
  {
    "departmentValue": "store_002",
    "departmentName": "Beverages"
  },
  {
    "departmentValue": "store_003",
    "departmentName": "Fresh Produce"
  },
  {
    "departmentValue": "store_004",
    "departmentName": "Dairy"
  },
  {
    "departmentValue": "store_005",
    "departmentName": "Bakery"
  },
  {
    "departmentValue": "store_006",
    "departmentName": "Meat & Seafood"
  },
  {
    "departmentValue": "store_007",
    "departmentName": "Frozen Foods"
  },
  {
    "departmentValue": "store_008",
    "departmentName": "Snacks"
  },
  {
    "departmentValue": "store_009",
    "departmentName": "Household Items"
  },
  {
    "departmentValue": "store_010",
    "departmentName": "Personal Care"
  }
]
interface IPriceMode {
  priceModeValue: string;
  priceModeName: string;
}

const priceMode: IPriceMode[] = [
  {
    "priceModeValue": "price_001",
    "priceModeName": "Direct Unit Mode"
  },
  {
    "priceModeValue": "price_002",
    "priceModeName": "Direct Case Calculation"
  },
  {
    "priceModeValue": "price_003",
    "priceModeName": "Direct Item Calculation"
  },
]

const Edit: FC<IEditProps> = ({ setEditModalOpen, refetch }) => {
    const [isLoading, setIsLoading] = useState<boolean>();

    const editData = useSelector((state: RootState) => state.Initial.val);

    console.log("editData", editData);

    const resolver = yupResolver(Schema);

    const {
      register,
      handleSubmit,
      formState: { errors },
      reset,
      control,
      resetField,
      watch,
    } = useForm<IFormInput>({ resolver });

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
      setEditModalOpen(false);
      setIsLoading(true);
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
            defaultValue={editData.sku}
          />
          <Input
            labelName="Name"
            inputType="text"
            placeholderText="Name"
            name="name"
            errors={errors}
            register={register}
            defaultValue={editData.name}
          />
          </div>
          <div className="grid grid-cols-3 gap-2">
            <div className=" border border-[#787878] p-2 rounded-md flex justify-center items-center flex-col">
              <button className="text-[#878787] hover:bg-greySecondary py-1 w-full text-sm font-semibold">Scan Product</button>
              <button className="text-[#878787] hover:bg-greySecondary py-1 w-full text-sm font-semibold">Add Check Digit</button>
              <button className="text-[#878787] hover:bg-greySecondary py-1 w-full text-sm font-semibold">Print Label</button>
            </div>
            <Input
            labelName="Weight"
            inputType="text"
            placeholderText="Product Weight"
            name="weight"
            errors={errors}
            register={register}
            defaultValue="30"
          />
          <EditSelectField
            control={control}
            name="department"
            data={departments}
            label="Department Name"
            placeholder="Department"
            // error="departmentName"
            labelKey="departmentName"
            valueKey="departmentValue"
            resetField={resetField}
            resetFieldName1=""
            resetFieldName2=""
            disabledValue="1"
            isLoading={false}
            defaultValue="store_001"
          />
        
          </div>
          <RadioButtons
            labelName=""
            inputName="productType"
            errorMessage={errors?.productType?.message}
            register={register}
            data={productTypes}
            gridCols={3}
            defaultValue="Age Restricted"
          />
          <div className="grid grid-cols-2 gap-2">
          <Input
            labelName="Unit of Measurement (UOM)"
            inputType="text"
            placeholderText="Unit of Measurement"
            name="uom"
            errors={errors}
            register={register}
            defaultValue={editData.uom}
          />
          <Input
            labelName="Low Stock Alert"
            inputType="text"
            placeholderText="Low Stock"
            name="lowStock"
            errors={errors}
            register={register}
            defaultValue={editData.lowStock}
          />
          </div>
          <div className="border-t border-dashed pt-2">
    <div className=" w-2/4 ">
          <EditSelectField
            control={control}
            name="pricingMode"
            data={priceMode}
            label="Pricing Mode"
            placeholder="Pricing Mode"
            // error="departmentName"
            labelKey="priceModeName"
            valueKey="priceModeValue"
            resetField={resetField}
            resetFieldName1=""
            resetFieldName2=""
            disabledValue="1"
            isLoading={false}
            defaultValue="price_001"
          />
    </div>
          </div>
          <div>
            <input
              type="submit"
              value="Save Products"
              className="w-full bg-greenPrimary rounded-md text-white font-medium text-base py-2 cursor-pointer"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default Edit;
