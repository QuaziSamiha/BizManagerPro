"use client";
import { useState } from "react";
import {
  flexRender,
  HeaderGroup,
  Header,
  Row,
  Cell,
} from "@tanstack/react-table";
import { CiSearch } from "react-icons/ci";
import {
  TiArrowSortedDown,
  TiArrowSortedUp,
  TiArrowUnsorted,
} from "react-icons/ti";
import TablePagination from "./TablePagination";
import { ITable } from "@/interfaces/table";

const Table = <TData,>({ table, isLoading }: ITable<TData>) => {
  const [selectedRows, setSelectedRows] = useState<string[]>([]);

  const handleRowClick = (rowId: string) => {
    setSelectedRows((prevSelectedRows) =>
      prevSelectedRows.includes(rowId)
        ? prevSelectedRows.filter((id) => id !== rowId)
        : [...prevSelectedRows, rowId]
    );
  };

  return (
    <>
      <div className="pt-2.5 bg-stone-100">
        <div className="max-w-full overflow-x-auto">
          <table className="w-full">
            <thead>
              {table
                .getHeaderGroups()
                .map((headerGroup: HeaderGroup<TData>) => (
                  <tr key={headerGroup.id}>
                    {headerGroup.headers.map(
                      (header: Header<TData, unknown>) => (
                        <th
                          key={header.id}
                          className="py-2 px-7 bg-stone-100 first:rounded-l-md first:flex last:flex last:justify-center"
                          // className="py-2 px-7 bg-stone-100 first:rounded-l-md first:flex items-center last:flex last:justify-center"
                        >
                          <div
                            onClick={header.column.getToggleSortingHandler()}
                          >
                            <div className="flex items-center justify-start gap-2 select-none">
                              <div className="text-base font-semibold text-stone-700">
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
                          {header.column.getCanFilter() && (
                            <div className="relative">
                              <CiSearch className="absolute text-xl top-3 left-2" />
                              <input
                                type="text"
                                className="my-1 px-8 py-1 w-full column-filter bg-white border border-stone-200 outline-none rounded-md text-stone-600 font-medium"
                                onChange={(
                                  e: React.ChangeEvent<HTMLInputElement>
                                ) =>
                                  header.column.setFilterValue(e.target.value)
                                }
                              />
                            </div>
                          )}
                        </th>
                      )
                    )}
                  </tr>
                ))}
            </thead>

            <tbody>
              {table
                .getRowModel()
                .rows.map((row: Row<TData>, index: number) => (
                  <tr
                    key={index}
                    className={`${
                      selectedRows.includes(row.id) ? "" : ""
                    } odd:bg-white even:bg-stone-50 hover:font-medium cursor-pointer border-t border-stone-200`}
                    onClick={() => handleRowClick(row.id)}
                  >
                    {row.getVisibleCells().map((cell: Cell<TData, unknown>) => (
                      <td
                        key={cell.id}
                        className="px-7 py-3.5 mx-2 text-sm text-stone-700  last:text-center"
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
      {!isLoading && <TablePagination table={table} />}
    </>
  );
};

export default Table;
