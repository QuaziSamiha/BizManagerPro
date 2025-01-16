"use client";

import { RootState } from "@/redux/Reducer/MainSlice";
import { yupResolver } from "@hookform/resolvers/yup";
import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
// import Schema from "./Schema";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Input from "@/components/ui/form/Input";
import EditSelectField from "@/components/ui/form/EditSelectField";

interface IEditProps {
  setEditModalOpen: Function;
  refetch: any;
}

interface IFormInput {
  name: string;
  email: string;
  gender: string;
}

interface IFormInput {
  employeeName: string;
  employeeType: string;
  storeName: string;
  cashierPermissions?: (string | null | undefined)[];
}

interface IStore {
  storeValue: string;
  storeName: string;
}

const stores: IStore[] = [
  {
    storeValue: "store_001",
    storeName: "Downtown Grocery",
  },
  {
    storeValue: "store_002",
    storeName: "Sunset Mart",
  },
  {
    storeValue: "store_003",
    storeName: "Evergreen Essentials",
  },
  {
    storeValue: "store_004",
    storeName: "Mountain View Supplies",
  },
  {
    storeValue: "store_005",
    storeName: "Oceanfront Market",
  },
];

const Edit: FC<IEditProps> = ({ setEditModalOpen, refetch }) => {
  //   const [isLoading, setIsLoading] = useState<boolean>();

  //   const editData = useSelector((state: RootState) => state.Initial.val);

  //   console.log("editData", editData);

  //   const resolver = yupResolver(Schema);

  //   const {
  //     register,
  //     handleSubmit,
  //     formState: { errors },
  //     reset,
  //     control,
  //     resetField,
  //     watch,
  //   } = useForm<IFormInput>({ resolver });

  //   const name = watch("name");
  //   const gender = watch("gender");

  //   console.log("name", name);
  //   console.log("gender", gender);

  //   const onSubmit = (data: IFormInput) => {
  //     alert(JSON.stringify(data));
  //     setIsLoading(true);
  //     toast.success("Message sent successfully!", {
  //       position: "bottom-left",
  //       autoClose: 3001,
  //       hideProgressBar: false,
  //       closeOnClick: true,
  //       pauseOnHover: true,
  //       draggable: true,
  //       progress: undefined,
  //       theme: "light",
  //     });
  //     reset();
  //     refetch();
  //     setEditModalOpen(false);
  //     setIsLoading(true);
  //   };

  return (
    <div>
      {/* <form onSubmit={handleSubmit(onSubmit)}>
        edit modal
        <div className="grid  grid-cols-2 gap-6">
          <Input
            inputType="text"
            labelName="Employee Name"
            placeholderText="Enter your name"
            name="employeeName"
            defaultValue={editData?.name}
            errors={errors}
            register={register}
          />

          <EditSelectField
            control={control}
            name="storeName"
            data={stores}
            label="Store"
            placeholder="-Select Store-"
            error=""
            labelKey="storeName"
            valueKey="storeValue"
            resetField={resetField}
            resetFieldName1=""
            resetFieldName2=""
            disabledValue="1"
            isLoading={false}
            defaultValue={editData?.storeName}
          />
        </div>
        <button
          type="submit"
          disabled={isLoading}
          className="bg-[#388E3C] text-bgPrimary text-sm font-medium px-8 py-3 rounded-md mt-6"
        >
          {isLoading ? "Loading..." : "Add"}
        </button>
      </form> */}
      edi modal
      {/* <button
        type="submit"
        disabled={isLoading}
        className="bg-[#388E3C] text-bgPrimary text-sm font-medium px-8 py-3 rounded-md mt-6"
      >
        {isLoading ? "Loading..." : "Add"}
      </button> */}
    </div>
  );
};

export default Edit;
