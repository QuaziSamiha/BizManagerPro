import { ITable } from "@/interfaces/table";
import {
  BsFillSkipBackwardFill,
  BsFillSkipEndFill,
  BsFillSkipForwardFill,
  BsFillSkipStartFill,
} from "react-icons/bs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../select";

const TablePagination = <TData,>({ table }: ITable<TData>) => {
  const pageIndex = table.getState().pagination.pageIndex;
  const pageCount = table.getPageCount();
  const pageSize = table.getState().pagination.pageSize;

  return (
    <div className="w-full">
      {table?.getRowModel().rows?.length > 0 && (
        <div className="py-5 px-7 flex w-full items-center justify-between pagination-container gap-4 bg-stone-50 rounded-b-lg border-t border-stone-200">
          <div className="flex items-center gap-2">
            <p className="text-base text-stone-600">Show:</p>
            <Select
              value={String(pageSize)}
              onValueChange={(value) => table.setPageSize(Number(value))}
            >
              <SelectTrigger className="py-1 rounded border border-blue-300 bg-white outline-none text-center text-stone-600 w-[80px]">
                <SelectValue placeholder="Entries" />
              </SelectTrigger>
              <SelectContent>
                {[5, 10].map((size) => (
                  <SelectItem
                    key={size}
                    value={String(size)}
                    className="hover:bg-blue-100 rounded"
                  >
                    {size}
                  </SelectItem>
                ))}
                <SelectItem
                  value={String(table.getCoreRowModel().rows.length)}
                  className="hover:bg-blue-100 rounded"
                >
                  All
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Go to page input */}
          <div className="flex items-center gap-2">
            <p className="text-base text-stone-600">Go to page:</p>
            <input
              type="number"
              min={1}
              max={pageCount}
              defaultValue={pageIndex + 1}
              onChange={(e) => {
                const newPage = e.target.value ? Number(e.target.value) - 1 : 0;
                if (newPage >= 0 && newPage < pageCount) {
                  table.setPageIndex(newPage);
                }
              }}
              className="border border-blue-300 rounded bg-white py-1 outline-none text-center text-stone-600 w-16"
            />
          </div>

          {/* Pagination buttons */}
          <div className="flex items-center gap-2">
            <button
              disabled={!table.getCanPreviousPage()}
              onClick={() => table.setPageIndex(0)}
              className="disabled:opacity-25 disabled:cursor-not-allowed text-xl rounded-full p-2 bg-blue-700"
            >
              <BsFillSkipBackwardFill fontSize={18} className="text-white" />
            </button>

            <button
              disabled={!table.getCanPreviousPage()}
              onClick={() => table.previousPage()}
              className="disabled:opacity-25 disabled:cursor-not-allowed text-xl rounded-full p-2 bg-blue-700"
            >
              <BsFillSkipStartFill fontSize={18} className="text-white" />
            </button>

            <div className="px-1.5 w-fit h-6 text-stone-600 bg-white flex justify-center items-center border border-blue-400 rounded">
              {pageIndex + 1}
            </div>

            <button
              disabled={!table.getCanNextPage()}
              onClick={() => table.nextPage()}
              className="disabled:opacity-25 disabled:cursor-not-allowed text-xl rounded-full p-2 bg-blue-700"
            >
              <BsFillSkipEndFill fontSize={18} className="text-white" />
            </button>

            <button
              disabled={!table.getCanNextPage()}
              onClick={() => table.setPageIndex(pageCount - 1)}
              className="disabled:opacity-25 disabled:cursor-not-allowed text-xl rounded-full p-2 bg-blue-700"
            >
              <BsFillSkipForwardFill fontSize={18} className="text-white" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TablePagination;

// import { ITable } from "@/interfaces/table";
// import {
//   BsFillSkipBackwardFill,
//   BsFillSkipEndFill,
//   BsFillSkipForwardFill,
//   BsFillSkipStartFill,
// } from "react-icons/bs";

// const TablePagination = <TData,>({ table }: ITable<TData>) => {
//   const pageIndex = table.getState().pagination.pageIndex;
//   const pageCount = table.getPageCount();

//   return (
//     <div className="w-full">
//       {table?.getRowModel().rows?.length > 0 && (
//         <div className="py-5 px-7 flex w-full items-center justify-between pagination-container gap-4 bg-stone-50 rounded-b-lg border-t border-stone-200">
//           <div className="flex items-center gap-2">
//             <p className="text-base text-stone-600">Show:</p>
//             <select
//               className="py-1 rounded border border-blue-300 bg-white outline-none text-center text-stone-600"
//               value={table.getState().pagination.pageSize}
//               onChange={(e) => {
//                 table.setPageSize(Number(e.target.value));
//               }}
//             >
//               {[5, 10].map((pageSize) => (
//                 <option
//                   className="text-base text-stone-600"
//                   key={pageSize}
//                   value={pageSize}
//                 >
//                   {pageSize}
//                 </option>
//               ))}
//               <option
//                 className="text-base text-stone-600"
//                 value={table.getCoreRowModel().rows.length}
//               >
//                 All show
//               </option>
//             </select>
//           </div>

//           {/* ================= DIRECT PAGE NO =================== */}
//           <div className="flex items-center gap-2">
//             <p className="text-base text-stone-600">Go to page:</p>
//             <input
//               type="number"
//               min={1}
//               max={pageCount}
//               defaultValue={pageIndex + 1}
//               onChange={(e) => {
//                 const newPage = e.target.value ? Number(e.target.value) - 1 : 0;
//                 if (newPage >= 0 && newPage < pageCount) {
//                   table.setPageIndex(newPage);
//                 }
//               }}
//               className="border border-blue-300 rounded bg-white py-1 outline-none text-center text-stone-600"
//             />
//           </div>

//           {/* ============ NEXT PREVIOUS BUTTON ================ */}
//           <div className="flex items-center gap-2">
//             <button
//               disabled={!table.getCanPreviousPage()}
//               onClick={() => table.setPageIndex(0)}
//               className="disabled:opacity-25 disabled:cursor-not-allowed text-xl rounded-full p-2 bg-blue-700"
//             >
//               <BsFillSkipBackwardFill fontSize={18} className="text-white" />
//             </button>

//             <button
//               disabled={!table.getCanPreviousPage()}
//               onClick={() => table.previousPage()}
//               className="disabled:opacity-25 disabled:cursor-not-allowed text-xl rounded-full p-2 bg-blue-700"
//             >
//               <BsFillSkipStartFill fontSize={18} className="text-white" />
//             </button>
//             <div className="px-1.5 w-fit h-6 text-stone-600 bg-white flex justify-center items-center border border-blue-400 rounded">
//               {pageIndex + 1}
//             </div>
//             <button
//               disabled={!table.getCanNextPage()}
//               onClick={() => table.nextPage()}
//               className="disabled:opacity-25 disabled:cursor-not-allowed text-xl rounded-full p-2 bg-blue-700"
//             >
//               <BsFillSkipEndFill fontSize={18} className="text-white" />
//             </button>

//             <button
//               disabled={!table.getCanNextPage()}
//               onClick={() => table.setPageIndex(pageCount - 1)}
//               className="disabled:opacity-25 disabled:cursor-not-allowed text-xl rounded-full p-2 bg-blue-700"
//             >
//               <BsFillSkipForwardFill fontSize={18} className="text-white" />
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default TablePagination;
