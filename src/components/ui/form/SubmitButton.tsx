import React from "react";

interface IProps {
  submitTitle: string;
  bgColor?: string;
  hoverBgColor?: string;
}
const SubmitButton: React.FC<IProps> = ({
  submitTitle = 'Submit',
  bgColor = 'bg-greenPrimary',
  hoverBgColor = 'hover:bg-greenPrimary',
}) => {
  return (
    <div className="w-full">
      <input
        type="submit"
        value={submitTitle}
        className={`w-full ${bgColor} ${hoverBgColor} rounded-md text-white font-medium text-base py-2 cursor-pointer`}
      />
    </div>
  );
};

export default SubmitButton;
