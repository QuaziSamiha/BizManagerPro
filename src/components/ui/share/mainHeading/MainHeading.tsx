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
      <div className="flex justify-between items-center">
        <div>
          <p className="font-semibold text-amber-950 text-3xl">{headerName}</p>
          {/* <p className="font-bold text-blackSecondary text-2xl">{headerName}</p> */}
          <p className="text-blackSecondary text-opacity-60 font-medium">
            {subHeader}
          </p>
        </div>

        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger className="">
            <div className="bg-blueActual hover:bg-blueHover select-none px-3 py-2 rounded-md font-medium text-white hover:text-silver text-base flex justify-center items-center gap-2">
              {/* <div className="bg-violetAltSecondary select-none px-3 py-2 rounded-md font-medium text-white text-base flex justify-center items-center gap-2"> */}
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
              <DialogTitle className="text-amber-950 font-semibold text-2xl">
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
