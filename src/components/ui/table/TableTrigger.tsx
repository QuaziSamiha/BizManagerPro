import { MdAdd } from "react-icons/md";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../dialog";
import { ReactNode } from "react";

interface IFilter {
  open?: boolean;
  setOpen: (open: boolean) => void;
  buttonName?: string;
  buttonIcon?: ReactNode;
  modalTitle?: string;
  modalTitleColor?: string;
  children: ReactNode;
}

const TableTrigger: React.FC<IFilter> = ({
  open,
  setOpen,
  buttonName,
  buttonIcon = <MdAdd fontSize={20} />,
  modalTitle,
  modalTitleColor = "text-textPrimary",
  children,
}) => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger className="">
            <div className="bg-violetAltPrimary hover:bg-violetAltSecondary select-none px-3 py-2 rounded-md font-medium text-white text-base flex justify-center items-center gap-2">
              {buttonIcon}
              {buttonName}
            </div>
          </DialogTrigger>

          <DialogContent className="bg-white w-full max-h-[90vh] overflow-y-auto scrollbar">
            <DialogHeader>
              <DialogTitle
                className={`${modalTitleColor} font-semibold text-2xl`}
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
