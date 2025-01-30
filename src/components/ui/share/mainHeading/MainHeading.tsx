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
  buttonName,
  children,
  open,
  setOpen,
  modalTitle = "New " + headerName,
  ButtonIcon = MdAdd,
}) => {
  return (
    <>
      <div className="flex justify-between items-center">
        <div>
          <p className="font-semibold text-blue-900 text-3xl">{headerName}</p>
          <p className="text-blue-700 font-normal">
            {subHeader}
          </p>
        </div>

        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger className="">
            <div className="bg-blue-700 hover:bg-blue-800 select-none px-3 py-2 rounded-md font-medium text-white text-base flex justify-center items-center gap-2">
              {<ButtonIcon fontSize={20} />}
              {buttonName}
            </div>
          </DialogTrigger>

          <DialogContent className="bg-white w-[50vw] max-h-[90vh] overflow-y-auto scrollbar">
            <DialogHeader>
              <DialogTitle className="text-blue-800 text-2xl">{modalTitle}</DialogTitle>
            </DialogHeader>
            {children}
          </DialogContent>
        </Dialog>
      </div>
    </>
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
// import { IMainHeading } from "@/interfaces/share";

// const MainHeading: React.FC<IMainHeading> = ({
//   headerName,
//   subHeader,
//   open,
//   setOpen,
//   buttonName,
//   ButtonIcon = MdAdd,
//   children,
//     modalTitle = "New " + headerName,
// }) => {
//   return (
//     <>
//       <div className="flex justify-between items-center">
//         <div>
//           <p className="font-bold text-blackSecondary text-2xl">{headerName}</p>
//           <p className="text-blackSecondary text-opacity-60 font-medium">
//             {subHeader}
//           </p>
//         </div>

//         <Dialog open={open} onOpenChange={setOpen}>
//           <DialogTrigger className="">
//             <div className="bg-violetAltSecondary select-none px-3 py-2 rounded-md font-medium text-white text-base flex justify-center items-center gap-2">
//               {<ButtonIcon fontSize={20} />}
//               {buttonName}
//             </div>
//           </DialogTrigger>

//           <DialogContent className="bg-white w-[90vh] max-h-[90vh] overflow-y-auto scrollbar">
//             <DialogHeader>
//               <DialogTitle className="text-violetQuaternary font-semibold text-2xl">
//                 {modalTitle}
//               </DialogTitle>
//             </DialogHeader>
//             {children}
//           </DialogContent>
//         </Dialog>
//       </div>
//     </>
//   );
// };

// export default MainHeading;
