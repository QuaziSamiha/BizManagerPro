"use client";
import { useMemo, useState } from "react";
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
import TableAll from "@/components/ui/table/TableAll";
import TableTool from "@/components/ui/table/TableTool";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// ! THIS SECTION OF THE MODULE IS REMOVED 

// ============ DEMO STATIC DATA==============
const demoData = [
  {
    no: "1",
    name: "John Doe",
    status: "Active",
  },
  {
    no: "2",
    name: "Jane Smith",
    status: "Inactive",
  },
  {
    no: "3",
    name: "Alice Johnson",
    status: "Active",
  },
  {
    no: "4",
    name: "Bob Brown",
    status: "Inactive",
  },
  {
    no: "5",
    name: "Charlie Black",
    status: "Active",
  },
  {
    no: "6",
    name: "Diana White",
    status: "Active",
  },
];

const Tags = () => {

  // ========= DEFINE TABLE COLUMNS ==========
  const COLUMNS = [
    {
      header: "No.",
      accessorKey: "no",
      enableColumnFilter: false,
      enableSorting: false,
    },
    {
      header: "Tags Name",
      accessorKey: "name",
      enableColumnFilter: false,
      enableSorting: false,
    },
    {
      header: "Status",
      accessorKey: "status",
      enableColumnFilter: false,
      enableSorting: false,
    },
  ];

  // ========= DATA FETCHING ==========
  const {
    isLoading,
  } = useQuery({
    queryKey: ["allUserData"],
    queryFn: () => getUsers(),
  });

  // ========= ASSIGNING COLUMNS AND DATA =========
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => demoData, []);

  // ========== REQUIRED STATE FOR TABLE ==========
  const [sorting, setSorting] = useState<SortingState>([]);
  const [filtering, setFiltering] = useState("");
  const [columnVisibility, setColumnVisibility] = useState({});

  // ========= TABLE FUNCTIONALITY ==========
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
        <p className="font-bold text-textPrimary text-xl">Tags</p>
      </div>
      <TableTool
        table={table}
        filtering={filtering}
        setFiltering={setFiltering}
        data={data}
        isLoading={isLoading}
      />
      {isLoading ? <div>loading ...</div> : <TableAll table={table} />}

      <ToastContainer />
    </div>
  );
};

export default Tags;
