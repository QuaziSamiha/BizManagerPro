"use client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import TableAll from "@/components/ui/table/TableAll";
import TableTool from "@/components/ui/table/TableTool";
import React, { useMemo, useState } from "react";
import Edit from "../inventoryAudit/Edit";
import { ToastContainer } from "react-toastify";
import { useDispatch } from "react-redux";
import { useQuery } from "@tanstack/react-query";
import { getUsers } from "@/api/api";
import {
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";

const lotteryData = [
  {
    id: 1,
    book_barcode: "BB1001",
    game_name: "Chess Master",
    quantity: 5,
    total_price: 50,
  },
  {
    id: 2,
    book_barcode: "BB1002",
    game_name: "Poker Pro",
    quantity: 3,
    total_price: 75,
  },
  {
    id: 3,
    book_barcode: "BB1003",
    game_name: "Monopoly Deal",
    quantity: 10,
    total_price: 120,
  },
  {
    id: 4,
    book_barcode: "BB1004",
    game_name: "Uno Classic",
    quantity: 7,
    total_price: 35,
  },
  {
    id: 5,
    book_barcode: "BB1005",
    game_name: "Catan Expansion",
    quantity: 2,
    total_price: 90,
  },
  {
    id: 6,
    book_barcode: "BB1006",
    game_name: "Risk Global",
    quantity: 4,
    total_price: 80,
  },
  {
    id: 7,
    book_barcode: "BB1007",
    game_name: "Scrabble",
    quantity: 3,
    total_price: 60,
  },
  {
    id: 8,
    book_barcode: "BB1008",
    game_name: "Ticket to Ride",
    quantity: 6,
    total_price: 150,
  },
  {
    id: 9,
    book_barcode: "BB1009",
    game_name: "Pandemic",
    quantity: 5,
    total_price: 110,
  },
  {
    id: 10,
    book_barcode: "BB1010",
    game_name: "Carcassonne",
    quantity: 8,
    total_price: 145,
  },
  {
    id: 11,
    book_barcode: "BB1011",
    game_name: "Azul",
    quantity: 4,
    total_price: 80,
  },
  {
    id: 12,
    book_barcode: "BB1012",
    game_name: "Dixit",
    quantity: 9,
    total_price: 130,
  },
  {
    id: 13,
    book_barcode: "BB1013",
    game_name: "Gloomhaven",
    quantity: 1,
    total_price: 250,
  },
  {
    id: 14,
    book_barcode: "BB1014",
    game_name: "Dominion",
    quantity: 6,
    total_price: 120,
  },
  {
    id: 15,
    book_barcode: "BB1015",
    game_name: "Magic Maze",
    quantity: 5,
    total_price: 100,
  },
];

const TotalLotteryStock = () => {
//   const dispatch = useDispatch();

  const {
    isLoading,
    isError,
    data: allUserData,
    refetch,
  } = useQuery({
    queryKey: ["allUserData"],
    queryFn: () => getUsers(),
  });

  const COLUMNS = [
    {
      header: "SL",
      accessorKey: "id",
      enableColumnFilter: false,
      enableSorting: false,
    },
    {
      header: "Book Barcode",
      accessorKey: "book_barcode",
      enableColumnFilter: false,
      enableSorting: false,
    },
    {
      header: "Game Name",
      accessorKey: "game_name",
      enableColumnFilter: false,
      enableSorting: false,
    },
    {
      header: "Qty",
      accessorKey: "quantity",
      enableColumnFilter: false,
      enableSorting: false,
    },
    {
      header: "Total Price",
      accessorKey: "total_price",
      enableColumnFilter: false,
      enableSorting: false,
    },
  ];

  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => lotteryData, [lotteryData]);

  const [sorting, setSorting] = useState<SortingState>([]);
  const [filtering, setFiltering] = useState("");
  const [columnVisibility, setColumnVisibility] = useState({});

  const table = useReactTable({
    data: data ?? [],
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting: sorting,
      globalFilter: filtering,
      columnVisibility: columnVisibility,
    },
    onSortingChange: setSorting,
    onGlobalFilterChange: setFiltering,
    onColumnVisibilityChange: setColumnVisibility,
  });

  return (
    <>
      <main className="mt-10">
        <p className="font-bold text-textPrimary text-xl">
          Total Stock of Lotteries
        </p>
        {/* ====================== Table ================== */}
        <div>
          <TableTool
            table={table}
            filtering={filtering}
            setFiltering={setFiltering}
            data={data}
            isLoading={isLoading}
            refetch={refetch}
          />
          {isLoading ? <div>loading ...</div> : <TableAll table={table} />}
        </div>
      </main>
    </>
  );
};

export default TotalLotteryStock;
