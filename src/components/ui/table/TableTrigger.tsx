import { MdAdd } from "react-icons/md";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../dialog";
import { ITableTrigger } from "@/interfaces/table";

const TableTrigger: React.FC<ITableTrigger> = ({
  open,
  setOpen,
  buttonName,
  ButtonIcon = MdAdd,
  modalTitle,
  children,
}) => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger className="">
            <div className="bg-violetAltPrimary hover:bg-violetAltSecondary select-none px-3 py-2 rounded-md font-medium text-white text-base flex justify-center items-center gap-2">
              {<ButtonIcon fontSize={20} />}
              {buttonName}
            </div>
          </DialogTrigger>

          <DialogContent className="bg-white w-full max-h-[90vh] overflow-y-auto scrollbar">
            <DialogHeader>
              <DialogTitle
                className={`font-semibold text-2xl`}
              >
                {modalTitle}
              </DialogTitle>
            </DialogHeader>
            {children}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default TableTrigger;
