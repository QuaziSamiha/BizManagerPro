"use client";
import React from "react";
import {
  Control,
  useFieldArray,
  UseFormRegister,
  UseFormGetValues,
} from "react-hook-form";
import { IoMdTrash } from "react-icons/io";
import Input from "./Input";

interface Lines {
  line: string;
}

interface ReceiptConfigureFormInfo {
  header: string;
  contact: Lines[];
  footer: Lines[];
}

interface Props {
  register: UseFormRegister<ReceiptConfigureFormInfo>;
  control: Control<ReceiptConfigureFormInfo>;
  getValues: UseFormGetValues<ReceiptConfigureFormInfo>;
  addHeader: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Contact: React.FC<Props> = ({
  register,
  control,
  getValues,
  addHeader,
}) => {
  const { fields, append, remove } = useFieldArray({
    control,
    name: "contact",
  });

  const handleDeleteButton = (index: number) => {
    remove(index);
  };

  const handleButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const newObj = {
      line: "",
    };
    const lastContactLine = getValues(
      `contact.${getValues("contact")?.length - 1}.line`
    );

    if (lastContactLine?.trim() !== "") {
      append(newObj);
    }
  };

  return (
    <div className="flex flex-col h-full bg-[#DCDBFB80] p-4 rounded">
      <div className="flex items-center gap-3">
        <h1 className="text-black font-semibold">Contact Line</h1>
        <button
          className="w-8 h-8 rounded-sm bg-[#D8D7FC]"
          onClick={handleButtonClick}
        >
          +
        </button>
      </div>

      <div className="overflow-y-auto scrollbar max-h-80">
        {fields.map((_, index) => (
          <div key={index} className="">
            <div className="flex items-center gap-2 ">
              <Input
                id={"contact"}
                placeholder="Enter Line"
                label={`Line #${index + 1}`}
                type="text"
                register={register}
                index={index}
              />
              <div
                onClick={() => handleDeleteButton(index)}
                className="group hover:bg-[#E81741E8] border border-[#E6E6E6] p-1 rounded-lg transition duration-300 ease-in-out relative top-3"
              >
                <IoMdTrash
                  size={30}
                  color="#9B9B9C"
                  className="group-hover:fill-white cursor-pointer transition duration-300 ease-in-out"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <button
          className="text-textPrimary text-sm font-semibold bg-violetSecondary rounded-sm py-1 px-7"
          onClick={(e: React.MouseEvent<HTMLButtonElement>) => addHeader(e)}
        >
          Add Header
        </button>
      </div>
    </div>
  );
};

export default Contact;
