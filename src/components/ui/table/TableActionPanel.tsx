import { RiSearchLine } from "react-icons/ri";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../dialog";
import { ITableActionPanel } from "@/types/table.type";
import { MdAdd } from "react-icons/md";
export default function TableActionPanel({
  filtering,
  setFiltering,
  open,
  setOpen,
  ButtonIcon = MdAdd,
  buttonName,
  modalTitle,
  children,
}: ITableActionPanel) {
  return (
    <div className="flex flex-col-reverse lg:flex-row justify-between items-center gap-8">
      <div className="w-full xl:w-1/2">
        <div className="flex items-center gap-2 border border-slate-500 rounded-md p-2.5">
          <RiSearchLine className="w-4 h-4 text-slate-700" />
          <input
            type="text"
            placeholder="Search..."
            name="search"
            value={filtering || ""}
            onChange={(e) => setFiltering(e.target.value)}
            className="bg-transparent pl-2 pr-6 text-slate-700 text-sm placeholder:text-base placeholder:text-slate-700 outline-none rounded-md"
          />
        </div>
      </div>
      <div className="w-full">
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger className="w-full flex justify-end">
            <div className="w-fit">
              <div className="bg-blueActual hover:bg-blueHover select-none px-3 py-2 rounded-md font-medium text-white hover:text-silver text-base flex justify-center items-center gap-2">
                {
                  <ButtonIcon
                    fontSize={20}
                    className="text-white hover:text-silver"
                  />
                }
                {buttonName}
              </div>
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
    </div>
  );
}
