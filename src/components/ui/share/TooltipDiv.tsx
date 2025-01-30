import { BiSolidEdit } from "react-icons/bi";
import { IoEyeOutline } from "react-icons/io5";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../tooltip";
import { ITooltipDiv } from "@/interfaces/share";

const TooltipDiv: React.FC<ITooltipDiv> = ({ name }) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <label htmlFor="show data" className="cursor-pointer">
            {name === "Edit" && <BiSolidEdit fontSize={24} className="text-blue-700"/>}
            {name === "View" && (
              <IoEyeOutline fontSize={20} className="text-blackSecondary" />
            )}
          </label>
        </TooltipTrigger>
        <TooltipContent>
          <p>{name}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default TooltipDiv;
