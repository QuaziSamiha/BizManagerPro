import { ITable } from "@/interfaces/table";
import {
  BsFillSkipForwardFill,
  BsFillSkipBackwardFill,
  BsFillSkipEndFill,
  BsFillSkipStartFill,
} from "react-icons/bs";

const TablePagination = <TData,>({ table }: ITable<TData>) => {
  const pageIndex = table.getState().pagination.pageIndex;
  const pageCount = table.getPageCount();

  return (
    <div className="w-full">
      <div className="flex gap-2">
        <button
          disabled={!table.getCanPreviousPage()}
          onClick={() => table.setPageIndex(0)}
          className="disabled:opacity-25 disabled:cursor-not-allowed text-xl rounded-full p-2 bg-blueActual hover:bg-blueHover"
        >
          <BsFillSkipBackwardFill fontSize={18} className="text-white" />
        </button>

        <button
          disabled={!table.getCanPreviousPage()}
          onClick={() => table.previousPage()}
          className="disabled:opacity-25 disabled:cursor-not-allowed text-xl rounded-full p-2 bg-blueActual hover:bg-blueHover"
        >
          <BsFillSkipStartFill fontSize={18} className="text-white" />
        </button>
        <div className="w-6 h-7 bg-transparent flex justify-center items-center">
          {pageIndex + 1}
        </div>
        <button
          disabled={!table.getCanNextPage()}
          onClick={() => table.nextPage()}
          className="disabled:opacity-25 disabled:cursor-not-allowed text-xl rounded-full p-2 bg-blueActual hover:bg-blueHover"
        >
          <BsFillSkipEndFill fontSize={18} className="text-white" />
        </button>

        <button
          disabled={!table.getCanNextPage()}
          onClick={() => table.setPageIndex(pageCount - 1)}
          className="disabled:opacity-25 disabled:cursor-not-allowed text-xl  rounded-full p-2 bg-blueActual hover:bg-blueHover"
        >
          <BsFillSkipForwardFill fontSize={18} className="text-white" />
        </button>
      </div>
    </div>
  );
};

export default TablePagination;

// import { ITable } from "@/interfaces/table";
// import {
//   MdOutlineKeyboardArrowLeft,
//   MdOutlineKeyboardArrowRight,
// } from "react-icons/md";

// const TablePagination = <TData,>({ table }: ITable<TData>) => {
//   const pageIndex = table.getState().pagination.pageIndex;
//   return (
//     <div className="w-full">
//       {table?.getRowModel().rows?.length > 0 && (
//         <div className="py-3 pagination-container">
//           <div className="flex items-center gap-2">
//             <button
//               disabled={!table.getCanPreviousPage()}
//               onClick={() => table.previousPage()}
//               className="disabled:opacity-40 disabled:cursor-not-allowed"
//             >
//               <MdOutlineKeyboardArrowLeft
//                 fontSize={24}
//                 className="text-blackPrimary disabled:text-opacity-30"
//               />
//             </button>
//             <div className="flex justify-center items-center gap-2">
//               <div className="px-1.5 w-6 h-6 text-whitePrimary bg-violetTernary2 rounded text-center">
//                 {pageIndex + 1}
//               </div>{" "}
//               <div className="px-1.5 w-6 h-6 text-whitePrimary bg-violetTernary2 rounded text-center">
//                 {pageIndex + 2}
//               </div>
//             </div>
//             <button
//               disabled={!table.getCanNextPage()}
//               onClick={() => table.nextPage()}
//               className="disabled:opacity-40 disabled:cursor-not-allowed"
//             >
//               <MdOutlineKeyboardArrowRight
//                 fontSize={24}
//                 className="text-blackPrimary disabled:text-opacity-40"
//               />
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default TablePagination;
