// "use client";

// import {
//   flexRender,
//   HeaderGroup,
//   Header,
//   Row,
//   Cell,
// } from "@tanstack/react-table";
// import { ITable } from "@/interfaces/table";

// const Table = <TData,>({ table }: ITable<TData>) => {
//   // console.log(table.getRowModel())
//   return (
//     <div className="w-full overflow-x-auto">
//       <table className="w-full min-w-max">
//         {" "}
//         {/* Add min-w-max */}
//         <thead>
//           {table.getHeaderGroups().map((headerGroup: HeaderGroup<TData>) => (
//             <tr key={headerGroup.id}>
//               {headerGroup.headers.map((header: Header<TData, unknown>) => (
//                 <th
//                   key={header.id}
//                   className="py-4 px-7 bg-blueActual first:rounded-tl-lg last:rounded-tr-lg whitespace-nowrap"
//                 >
//                   <div onClick={header.column.getToggleSortingHandler()}>
//                     <div className="flex items-center justify-start gap-2 select-none">
//                       <div className="text-base text-white font-normal">
//                         {flexRender(
//                           header.column.columnDef.header,
//                           header.getContext()
//                         )}
//                       </div>
//                     </div>
//                   </div>
//                 </th>
//               ))}
//             </tr>
//           ))}
//         </thead>
//         <tbody>
//           {table.getRowModel().rows.map((row: Row<TData>, index: number) => (
//             <tr
//               key={index}
//               className="hover:bg-stone-100 border-b border-slate-300 cursor-grab"
//             >
//               {row.getVisibleCells().map((cell: Cell<TData, unknown>) => (
//                 <td
//                   key={cell.id}
//                   className="px-7 py-3 text-slate-700 text-base last:text-center whitespace-nowrap"
//                 >
//                   {flexRender(cell.column.columnDef.cell, cell.getContext())}
//                 </td>
//               ))}
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default Table;
"use client";

import {
  flexRender,
  HeaderGroup,
  Header,
  Row,
  Cell,
} from "@tanstack/react-table";
import { ITable } from "@/interfaces/table";

const Table = <TData,>({ table }: ITable<TData>) => {
  // console.log(table.getRowModel())
  return (
    <>
      <div className="">
        <table className="">
          <thead>
            {table.getHeaderGroups().map((headerGroup: HeaderGroup<TData>) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header: Header<TData, unknown>) => (
                  <th
                    key={header.id}
                    className="py-4 px-7 bg-blueActual first:rounded-tl-lg last:rounded-tr-lg first:flex first:items-center last:flex last:justify-center"
                  >
                    <div onClick={header.column.getToggleSortingHandler()}>
                      <div className="flex items-center justify-start gap-2 select-none">
                        <div className="text-base text-white font-normal">
                          {flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                        </div>
                      </div>
                    </div>
                  </th>
                ))}
              </tr>
            ))}
          </thead>

          <tbody>
            {table.getRowModel().rows.map((row: Row<TData>, index: number) => (
              <tr
                key={index}
                className={
                  "hover:bg-stone-100 border-b border-slate-300 cursor-grab"
                }
              >
                {row.getVisibleCells().map((cell: Cell<TData, unknown>) => (
                  <td
                    key={cell.id}
                    className="px-7 py-3 text-slate-700 text-base last:text-center"
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
