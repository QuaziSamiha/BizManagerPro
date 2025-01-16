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
import MainHeading from "@/components/ui/share/heading/MainHeading";
import TableTool from "@/components/ui/table/TableTool";
import TableAll from "@/components/ui/table/TableAll";
import { ToastContainer } from "react-toastify";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Edit from "./Edit";
import Add from "./Add";

const storeData = [
  {
    id: 1,
    name: "John Doe",
    store_name: "Doe Mart",
    employee_type: "cashier",
  },
  {
    id: 2,
    name: "Jane Smith",
    store_name: "Smith's Goods",
    employee_type: "employee",
  },
  {
    id: 3,
    name: "Alice Johnson",
    store_name: "Alice's Wonderland",
    employee_type: "admin",
  },
  {
    id: 4,
    name: "Bob Brown",
    store_name: "Brown's Bazaar",
    employee_type: "cashier",
  },
  {
    id: 5,
    name: "Charlie Davis",
    store_name: "Davis Department Store",
    employee_type: "employee",
  },
];

const EmployeesCashiers = () => {
  const [editData, setEditData] = useState(null);
  const [filterModalOpen, setFilterModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);

  const dispatch = useDispatch();

  const handleEdit = (rowData: any) => {
    dispatch(rowValue(rowData));
    setEditData(rowData);
    setEditModalOpen(true);
  };

  const COLUMNS = [
    {
      header: "No.",
      accessorKey: "id",
      enableColumnFilter: false,
      enableSorting: false,
    },
    {
      header: "Name",
      accessorKey: "name",
      enableColumnFilter: false,
      enableSorting: false,
    },
    {
      header: "Store Name",
      accessorKey: "store_name",
      enableColumnFilter: false,
      enableSorting: false,
    },
    {
      header: "Employee Type",
      accessorKey: "employee_type",
      enableColumnFilter: false,
      enableSorting: false,
    },
    {
      header: "Action",
      accessor: "edit",
      enableSorting: false,
      cell: (row: any) => (
        <div className="flex gap-3 justify-center items-center w-full">
          <button onClick={() => handleEdit(row.row.original)} className="flex">
            <TooltipDiv name="Edit" />
          </button>
        </div>
      ),
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

  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => storeData, [storeData]);

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
      <MainHeading
        open={filterModalOpen}
        setOpen={setFilterModalOpen}
        headerName="Employees & Cashier"
        buttonName="New"
      >
        <Add setOpen={setFilterModalOpen} refetch={refetch} />
      </MainHeading>

      <TableTool
        table={table}
        filtering={filtering}
        setFiltering={setFiltering}
        data={data}
        isLoading={isLoading}
      />

      {isLoading ? <div>loading ...</div> : <TableAll table={table} />}

      <Dialog open={editModalOpen} onOpenChange={setEditModalOpen}>
        <DialogContent className="bg-white w-[80vw]">
          <DialogHeader>
            <DialogTitle>Edit Employee Details</DialogTitle>
          </DialogHeader>
          <Edit setEditModalOpen={setEditModalOpen} refetch={refetch} />
        </DialogContent>
      </Dialog>

      <ToastContainer />
    </div>
  );
};

export default EmployeesCashiers;
