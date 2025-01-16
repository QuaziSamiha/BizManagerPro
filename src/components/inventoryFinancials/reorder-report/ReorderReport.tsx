"use client";
import { useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getUsers } from "@/api/api";
import { useDispatch } from "react-redux";
import { rowValue } from "@/redux/Reducer/MainSlice";
import TooltipDiv from "@/components/ui/share/TooltipDiv";
import {
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";
import TableAll from "@/components/ui/table/TableAll";
import TableTool from "@/components/ui/table/TableTool";

interface EditDataProps {
  name: string;
  email: string;
  gender: string;
}

function ReorderReport() {
  const dispatch = useDispatch();

  const COLUMNS = [
    {
      header: "Tags Name",
      accessorKey: "name",
      enableColumnFilter: false,
      enableSorting: false,
    },
    {
        header: "SKU Number",
        accessorKey: "sku",
        enableColumnFilter: false,
        enableSorting: false,
      },
    {
      header: "Current Stock",
      accessorKey: "stock",
      enableColumnFilter: false,
      enableSorting: false,
    },
    {
        header: "Reorder Level",
        accessorKey: "reorder",
        enableColumnFilter: false,
        enableSorting: false,
      },
      {
        header: "Action",
        accessorKey: "action",
        enableColumnFilter: false,
        enableSorting: false,
      },
  ];

  const {
    isLoading,
    isError,
    data: allUserData,
    refetch,
  } = useQuery({
    queryKey: ["allUserData"],
    queryFn: () => getUsers(),
  });

  const demoData = [
    {
      name: "Coca-Cola 12-pack",
      sku: "049000050104",
      stock: "20",
      reorder: "50",
      action: "Reorder 30 units",
    },
    {
      name: "Banana 1kg",
      sku: "100200300400",
      stock: "100",
      reorder: "200",
      action: "Reorder 100 units",
    },
    {
      name: "Whole Wheat Bread",
      sku: "123456789012",
      stock: "15",
      reorder: "50",
      action: "Reorder 35 units",
    },
    {
      name: "Organic Milk 1L",
      sku: "987654321098",
      stock: "5",
      reorder: "30",
      action: "Reorder 25 units",
    },
    {
      name: "Almond Butter 250g",
      sku: "543210987654",
      stock: "30",
      reorder: "60",
      action: "Reorder 30 units",
    },
    {
      name: "Granola Bars (Box of 12)",
      sku: "112233445566",
      stock: "50",
      reorder: "100",
      action: "Reorder 50 units",
    },
    {
      name: "Tomato Ketchup 500g",
      sku: "998877665544",
      stock: "40",
      reorder: "80",
      action: "Reorder 40 units",
    },
    {
      name: "Green Tea (Pack of 20)",
      sku: "998866554433",
      stock: "70",
      reorder: "150",
      action: "Reorder 80 units",
    },
  ];
  
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => demoData, []);

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
    <div>
      <div>
        <p className="font-bold text-textPrimary text-xl">Re-order Report</p>
      </div>
      <TableTool
        table={table}
        filtering={filtering}
        setFiltering={setFiltering}
        data={data}
        isLoading={isLoading}
      />
      {isLoading ? <div>loading ...</div> : <TableAll table={table} />}
    </div>
  );
}

export default ReorderReport;
