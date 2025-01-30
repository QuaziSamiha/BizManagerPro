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
            {name === "Edit" && (
              <BiSolidEdit fontSize={24} className="text-blue-700" />
            )}
            {name === "View" && (
              // <div className="hover:bg-green-100 hover:border border-green-300 rounded px-1.5 py-1 group">
                <IoEyeOutline fontSize={20} className="text-blackSecondary hover:text-blue-700 font-bold" />
                // <IoEyeOutline fontSize={20} className="text-blackSecondary group-hover:text-green-900" />
              // </div>
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
