"use client";

import { useFieldArray, useForm } from "react-hook-form";
import { useState } from "react";
import { toast } from "react-toastify";
import Input from "@/components/ui/form/Input";
import SelectField from "@/components/ui/form/SelectField";
import SelectFieldArray from "./SelectFieldArray";
import { MdDelete } from "react-icons/md";
import { yupResolver } from "@hookform/resolvers/yup";
import Schema from "./Schema";
import SubmitButton from "@/components/ui/form/SubmitButton";

interface IAdd {
  setOpen: (open: boolean) => void;
  refetch: any;
}

interface IPromoList {
  id: string | number;
  name: string;
}

interface IFormInput {
  name: string;
  listType: string;
  lists: IPromoList[];
}

interface IList {
  listValue: string;
  listName: string;
}

const lists: IList[] = [
  {
    listValue: "departments",
    listName: "Departments",
  },
  {
    listValue: "products",
    listName: "Products",
  },
];

interface IProduct {
  productValue: string;
  productName: string;
}

const products: IProduct[] = [
  {
    productValue: "pro_001",
    productName: "Cake",
  },
  {
    productValue: "pro_002",
    productName: "Bread",
  },
  {
    productValue: "pro_003",
    productName: "Cupcake",
  },
  {
    productValue: "pro_004",
    productName: "Cookie",
  },
  {
    productValue: "pro_005",
    productName: "Pie",
  },
  {
    productValue: "pro_006",
    productName: "Muffin",
  },
  {
    productValue: "pro_007",
    productName: "Donut",
  },
  {
    productValue: "pro_008",
    productName: "Brownie",
  },
  {
    productValue: "pro_009",
    productName: "Croissant",
  },
  {
    productValue: "pro_010",
    productName: "Scone",
  },
  {
    productValue: "pro_011",
    productName: "Bagel",
  },
  {
    productValue: "pro_012",
    productName: "Coffee",
  },
  {
    productValue: "pro_013",
    productName: "Tea",
  },
  {
    productValue: "pro_014",
    productName: "Fruit Juice",
  },
  {
    productValue: "pro_015",
    productName: "Chips",
  },
  {
    productValue: "pro_016",
    productName: "Chocolate Bar",
  },
  {
    productValue: "pro_017",
    productName: "Ice Cream",
  },
  {
    productValue: "pro_018",
    productName: "Granola Bar",
  },
  {
    productValue: "pro_019",
    productName: "Yogurt",
  },
  {
    productValue: "pro_020",
    productName: "Salad",
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

const AddPromo: React.FC<IAdd> = ({ setOpen, refetch }) => {
  const [isLoading, setIsLoading] = useState<boolean>();
  const [selected, setSelected] = useState<string>("");

  // ======== VALIDATION SCHEMA =========
  const resolver = yupResolver(Schema);

  // ======= USE REACT HOOK FORM =======
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    resetField,
    watch,
    control,
  } = useForm<IFormInput>({ resolver });

  // ========= ADD PROMOTION LIST ITEM ===========
  const { fields, append, remove } = useFieldArray({
    control,
    name: "lists",
  });

  const listData = watch("lists");
  // const listType = watch("listType");

  // ========= FORM SUBMISSION FUNCTION ============
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
          <div className="flex items-center justify-center gap-8">
            <Input
              labelName="Name"
              inputType="text"
              placeholderText="Name"
              name="name"
              errors={errors}
              register={register}
              isRequired
            />
            <SelectField
              control={control}
              name="listType"
              data={lists}
              label="Select List"
              placeholderText="-- Select Type --"
              errors={errors}
              labelKey="listName"
              valueKey="listValue"
              resetField={resetField}
              resetFieldName1="lists"
              resetFieldName2=""
              disabledValue="1"
              isLoading={false}
              onChange={setSelected}
              isRequired={true}
            />
          </div>

          {/* ======== IF PROMOTION BASED ON DEPARTMENT ================ */}
          {selected === "departments" && (
            <div className="w-1/2">
              <SelectFieldArray
                control={control}
                append={append}
                name="lists"
                data={departments}
                label="Select Departments"
                labelKey="departmentName"
                valueKey="departmentValue"
                placeholderText="Department"
                isLoading={false}
              />
            </div>
          )}

          {/* ======== IF PROMOTION BASED ON PRODUCT ================ */}
          {selected === "products" && (
            <div className="w-1/2">
              <SelectFieldArray
                control={control}
                append={append}
                name="lists"
                data={products}
                label="Select Products"
                labelKey="productName"
                valueKey="productValue"
                placeholderText="Products"
                isLoading={false}
              />
            </div>
          )}

          {/* ================== CURRENT PROMOTION LIST ==================== */}
          <div>
            <h1 className="text-textPrimary font-semibold pb-4">
              Current List Size: {listData?.length || 0}
            </h1>
            <div className="grid grid-cols-3  p-2  bg-greySecondary rounded-md">
              <div className="pl-10">SKU</div>
              <div className="text-center">Name</div>
              <div className="text-right pr-10">Action</div>
            </div>

            {listData?.length > 0 && (
              <div>
                {fields?.map((data: any, index) => (
                  <div key={index} className="grid grid-cols-3  p-2">
                    <div className="pl-10">
                      {data.productValue || data.departmentValue}
                    </div>
                    <div className="text-center">
                      {data?.productName || data.departmentName}
                    </div>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        remove(data.id);
                      }}
                      className="flex justify-end pr-10"
                    >
                      <MdDelete size={22} className="text-red-500" />
                    </button>
                  </div>
                ))}
              </div>
            )}

            {errors["lists"] && (
              <p className="text-red-500 text-sm mt-1 px-2">
                At least 1 item is required
              </p>
            )}
          </div>
          <SubmitButton submitTitle="Save" />
        </div>
      </form>
    </div>
  );
};

export default AddPromo;
