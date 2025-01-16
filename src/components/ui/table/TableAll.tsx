"use client";
import { useState } from "react";
import { flexRender } from "@tanstack/react-table";
import { CiSearch } from "react-icons/ci";
import {
  TiArrowSortedDown,
  TiArrowSortedUp,
  TiArrowUnsorted,
} from "react-icons/ti";

interface ITable {
  table: any;
};

const TableAll: React.FC<ITable> = ({ table }) => {
  const [selectedRows, setSelectedRows] = useState<string[]>([]);

  const handleRowClick = (rowId: string) => {
    setSelectedRows((prevSelectedRows) => {
      if (prevSelectedRows.includes(rowId)) {
        return prevSelectedRows.filter((id) => id !== rowId);
      } else {
        return [...prevSelectedRows, rowId];
      }
    });
  };

  return (
    <div className="rounded-b-[10px] px-7 py-2.5 bg-violetTernary bg-opacity-50">
      <div className="max-w-full overflow-x-auto">
        <table className="w-full">
          <thead className="">
            {table
              .getHeaderGroups()
              .map((headerGroup: { id: string; headers: any[] }) => (
                <tr key={headerGroup.id} className="">
                  {headerGroup.headers.map((header) => (
                    <th
                      key={header.id}
                      className="py-2 px-[10px] bg-darkViolet first:rounded-l-md last:rounded-r-md last:flex last:justify-center"
                    >
                      <div onClick={header.column.getToggleSortingHandler()}>
                        <div className="flex items-center justify-start gap-2 select-none">
                          <div className="text-base text-secondary">
                            {flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                          </div>
                          {header.column.getCanSort() &&
                            (header.column.getIsSorted() === "asc" ? (
                              <TiArrowSortedUp className="inline" />
                            ) : header.column.getIsSorted() === "desc" ? (
                              <TiArrowSortedDown className="inline" />
                            ) : (
                              <TiArrowUnsorted className="inline" />
                            ))}
                        </div>
                      </div>
                      {header.column.getCanFilter() ? (
                        <div className="relative">
                          <CiSearch className="absolute text-xl top-3 left-2" />
                          <input
                            type="text"
                            className="my-1 px-8 py-1 w-full column-filter bg-white border border-[#D4D4D4] outline-none rounded-md "
                            onChange={(e: any) =>
                              header.column.setFilterValue(e.target.value)
                            }
                          />
                        </div>
                      ) : null}
                    </th>
                  ))}
                </tr>
              ))}
          </thead>

          <tbody>
            {table
              .getRowModel()
              .rows.map(
                (
                  row: { id: string; getVisibleCells: () => any[] },
                  index: number
                ) => (
                  <tr
                    key={row.id}
                    className={`
                       ${selectedRows.includes(row.id) ? "" : ""} 
                       hover:bg-darkViolet hover:bg-opacity-40 cursor-pointer`}
                    onClick={() => handleRowClick(row.id)}
                  >
                    {row.getVisibleCells().map((cell) => (
                      <td
                        key={cell.id}
                        className="px-4 text-secondary py-2 first:rounded-l-md last:rounded-r-md last:text-center"
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </td>
                    ))}
                  </tr>
                )
              )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableAll;
