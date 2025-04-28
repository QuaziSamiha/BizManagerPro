import { ISubmitButton } from "@/interfaces/form/form";

const SubmitButton: React.FC<ISubmitButton> = ({
  submitTitle = "Submit",
  bgColor = "bg-blueActual",
  hoverBgColor = "hover:bg-blueHover",
}) => {
  return (
    <div className="w-full">
      <input
        type="submit"
        value={submitTitle}
        className={`w-full ${bgColor} ${hoverBgColor} rounded-md text-white hover:text-silver font-medium text-base py-2 cursor-pointer`}
      />
    </div>
  );
};

export default SubmitButton;
