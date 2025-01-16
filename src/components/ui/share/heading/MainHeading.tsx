import { MdAdd } from "react-icons/md";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../dialog";
import { ReactNode } from "react";

interface IFilter {
  headerName: string;
  totalData?: string;
  children?: ReactNode;
  buttonName: string;
  open?: boolean;
  setOpen: (open: boolean) => void;
  modalTitle?: string;
  userName?: string;
  usersNumber?: number;
  addButton?: boolean;
}

const MainHeading: React.FC<IFilter> = ({
  headerName,
  totalData,
  buttonName,
  children,
  open,
  setOpen,
  addButton = true,
  modalTitle = "New " + headerName,
}) => {
  return (
    <div>
      <div className="flex justify-between items-center">
        <div>
          <p className="font-bold text-textPrimary text-xl">{headerName}</p>

          <p className="text-textPrimary text-opacity-50 font-medium">
            {totalData}
          </p>
        </div>

        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger className="">
            <div className="bg-violetAltPrimary hover:bg-violetAltSecondary select-none px-3 py-2 rounded-md font-medium text-white text-base flex justify-center items-center gap-2">
              {addButton && <MdAdd fontSize={20} />}
              {buttonName}
            </div>
          </DialogTrigger>

          <DialogContent className="bg-white w-full max-h-[90vh] overflow-y-auto scrollbar">
            <DialogHeader>
              <DialogTitle>{modalTitle}</DialogTitle>
            </DialogHeader>
            {children}
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default MainHeading;

// import { MdAdd } from "react-icons/md";
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
//   DialogTrigger,
// } from "../../dialog";
// import { ReactNode } from "react";

// interface IFilter {
//   headerName: string;
//   totalData?: string;
//   children?: ReactNode;
//   buttonName: string;
//   open?: boolean;
//   setOpen: (open: boolean) => void;
//   modalTitle?: string;
//   userName?: string;
//   usersNumber?: number;
//   removeHeading?: any;
//   addButton?: boolean;
// }

// const MainHeading: React.FC<IFilter> = ({
//   headerName,
//   totalData,
//   buttonName,
//   children,
//   open,
//   setOpen,
//   removeHeading,
//   addButton = true,
//   modalTitle = "New " + headerName,
// }) => {
//   return (
//     <div>
//       <div className="flex justify-between items-center">
//         <div>
//           {removeHeading ? (
//             ""
//           ) : (
//             <p className="font-bold text-textPrimary text-xl">{headerName}</p>
//           )}
//           <p className="text-textPrimary text-opacity-50 font-medium">
//             {totalData}
//           </p>
//         </div>

//         <Dialog open={open} onOpenChange={setOpen}>
//           <DialogTrigger className="">
//             <div className="bg-violetAltPrimary hover:bg-violetAltSecondary select-none px-3 py-2 rounded-md font-medium text-white text-base flex justify-center items-center gap-2">
//               {addButton && <MdAdd fontSize={20} />}
//               {buttonName}
//             </div>
//           </DialogTrigger>

//           <DialogContent className="bg-white w-full max-h-[90vh] overflow-y-auto scrollbar">
//             <DialogHeader>
//               <DialogTitle>{modalTitle}</DialogTitle>
//             </DialogHeader>
//             {children}
//           </DialogContent>
//         </Dialog>
//       </div>
//     </div>
//   );
// };

// export default MainHeading;
