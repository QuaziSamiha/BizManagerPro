import React from "react";
import { MdAdd } from "react-icons/md";

interface IAdd {
  buttonName: string;
}
const AddButton: React.FC<IAdd> = ({ buttonName }) => {
  return (
    <>
      <button className="bg-violetAltPrimary hover:bg-violetAltSecondary select-none px-3 py-2 rounded-md font-medium text-white text-base flex justify-center items-center gap-2">
        <MdAdd fontSize={20} />
        {buttonName}
      </button>
    </>
  );
};

export default AddButton;
