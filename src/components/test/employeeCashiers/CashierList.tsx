"use client";
import React, { useMemo } from "react";

const CashierList = () => {
  const handleEdit = (edit: any) => {
    console.log(edit);
  };
  const COLUMNS = [
    {
      header: "No.",
      accessorKey: "index",
      cell: (row: any) => row.row.index + 1,
    },
    {
      header: "",
    },
    {
      header: "edit",
      accessor: "edit",
      enableSorting: false,
      cell: (row: any) => (
        <button onClick={() => handleEdit(row.row.original)}>edit vutu</button>
      ),
    },
  ];

  const columns = useMemo(() => COLUMNS, []);
  return (
    <section className="">
      <main className="flex flex-col gap-8">
        <p className="font-medium text-textPrimary text-xl">Cashier List</p>
        <div className="bg-violetTernary px-7 py-[10px] rounded-lg"></div>
      </main>
    </section>
  );
};

export default CashierList;
