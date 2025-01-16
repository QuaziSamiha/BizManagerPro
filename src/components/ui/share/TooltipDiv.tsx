import { MdOutlineEdit } from "react-icons/md";
import { IoEyeOutline } from "react-icons/io5";
import { MdDeleteOutline } from "react-icons/md";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../tooltip";
import { GrDocumentDownload } from "react-icons/gr";

interface IAdd {
  name: string;
}

const TooltipDiv: React.FC<IAdd> = ({ name }) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <label
            htmlFor="show data"
            className="cursor-pointer bg-violetAltPrimary p-2 rounded-md"
          >
            {name === "Edit" && <MdOutlineEdit fontSize={16} color="#FFF" />}
            {name === "View" && <IoEyeOutline fontSize={16} color="#FFF" />}
            {name === "Delete" && (
              <MdDeleteOutline
                fontSize={16}
                color="#FFF"
                className="hover:fill-red-500"
              />
            )}
            {name === "Download" && (
              <GrDocumentDownload fontSize={20} color="#FFF" />
            )}
          </label>
        </TooltipTrigger>
        <TooltipContent className="border border-violetAltPrimary">
          <p>{name}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default TooltipDiv;
