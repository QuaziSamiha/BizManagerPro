import { MdAdd } from "react-icons/md";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../dialog";
import { IMainHeading } from "@/interfaces/share";

const MainHeading: React.FC<IMainHeading> = ({
  headerName,
  subHeader,
  open,
  setOpen,
  buttonName,
  ButtonIcon = MdAdd,
  children,
  modalTitle = "New " + headerName,
}) => {
  // console.log(open)
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 max-md:mt-6">
        <div>
          <p className="font-semibold text-blueActual text-3xl">{headerName}</p>
          <p className="text-blackSecondary text-opacity-60 font-medium">
            {subHeader}
          </p>
        </div>

        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger className="">
            <div className="bg-blueActual hover:bg-blueHover select-none px-3 py-2 rounded-md font-medium text-white hover:text-silver text-base flex justify-center items-center gap-2">
              {
                <ButtonIcon
                  fontSize={20}
                  className="text-white hover:text-silver"
                />
              }
              {buttonName}
            </div>
          </DialogTrigger>

          <DialogContent className="bg-white w-[60vw] max-h-[90vh] overflow-y-auto scrollbar">
            <DialogHeader className="">
              <DialogTitle className="text-blueActual font-semibold text-2xl">
                {modalTitle}
              </DialogTitle>
            </DialogHeader>
            {children}
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
};

export default MainHeading;
