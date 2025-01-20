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
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Edit from "./Edit";
import Add from "./Add";
import { IRowData } from "@/interfaces/storeManagement/employeeCashier";
import Table from "@/components/ui/table/Table";
import Loader from "@/components/ui/share/loader/Loader";

const storeData: IRowData[] = [
  {
    id: 1,
    name: "John Doe",
    store_name: "Doe Mart",
    employee_type: "Cashier",
  },
  {
    id: 2,
    name: "Jane Smith",
    store_name: "Smith's Goods",
    employee_type: "Staff",
  },
  {
    id: 3,
    name: "Alice Johnson",
    store_name: "Alice's Wonderland",
    employee_type: "Admin",
  },
  {
    id: 4,
    name: "Bob Brown",
    store_name: "Brown's Bazaar",
    employee_type: "Cashier",
  },
  {
    id: 5,
    name: "John Doe",
    store_name: "Doe Mart",
    employee_type: "Cashier",
  },
  {
    id: 6,
    name: "Jane Smith",
    store_name: "Smith's Goods",
    employee_type: "Staff",
  },
  {
    id: 7,
    name: "Alice Johnson",
    store_name: "Alice's Wonderland",
    employee_type: "Admin",
  },
  {
    id: 8,
    name: "Bob Brown",
    store_name: "Brown's Bazaar",
    employee_type: "Cashier",
  },
  {
    id: 9,
    name: "John Doe",
    store_name: "Doe Mart",
    employee_type: "Cashier",
  },
  {
    id: 10,
    name: "Jane Smith",
    store_name: "Smith's Goods",
    employee_type: "Staff",
  },
  {
    id: 11,
    name: "Alice Johnson",
    store_name: "Alice's Wonderland",
    employee_type: "Admin",
  },
  {
    id: 12,
    name: "Bob Brown",
    store_name: "Brown's Bazaar",
    employee_type: "Cashier",
  },
  {
    id: 13,
    name: "Charlie Davis",
    store_name: "Davis Department Store",
    employee_type: "Staff",
  },
];

// ========= COMPONENT FUNCTION ===========
const EmployeesCashiers = () => {
  // =========== STATE HOOKS ============
  const [editData, setEditData] = useState<IRowData | null>(null);
  // =============== STATE HOOKS FOR Modal ================
  const [filterModalOpen, setFilterModalOpen] = useState<boolean>(false);
  const [editModalOpen, setEditModalOpen] = useState<boolean>(false);
  const [addModalOpen, setAddModalOpen] = useState<boolean>(false);
  // =============== STATE HOOKS FOR TABLE ================
  const [sorting, setSorting] = useState<SortingState>([]);
  const [filtering, setFiltering] = useState<string>("");
  const [columnVisibility, setColumnVisibility] = useState({});

  // =============== DISPATCH HOOK ==================
  const dispatch = useDispatch();

  // ======================= HANDLE EDIT FUNCTION ===================
  const handleEdit = (rowData: IRowData) => {
    dispatch(rowValue(rowData));
    setEditData(rowData);
    console.log(editData);
    setEditModalOpen(true);
  };

  // ================ COLUMNS CONFIGURATION ==================
  const COLUMNS = [
    {
      header: "No.",
      accessorKey: "id",
      enableColumnFilter: false,
    },
    {
      header: "Name",
      accessorKey: "name",
    },
    {
      header: "Store Name",
      accessorKey: "store_name",
    },
    {
      header: "Employee Type",
      accessorKey: "employee_type",
      cell: ({ row }: { row: { original: IRowData } }) => {
        const rowData = row.original;
        // console.log(rowData);
        const employeeType = rowData.employee_type;
        return (
          <div className="flex gap-3 justify-center items-center w-full">
            <div
              className={`w-32 py-0.5 rounded-full text-center ${
                employeeType === "Admin"
                  ? "bg-green-100 text-green-900"
                  : `${
                      employeeType === "Cashier"
                        ? "bg-blue-100 text-blue-800"
                        : `${
                            employeeType === "Staff" &&
                            "bg-yellow-100 text-yellow-700"
                          }`
                    }`
              }`}
            >
              {employeeType}
            </div>
          </div>
        );
      },
    },
    {
      header: "Action",
      accessor: "edit",
      enableSorting: false,
      cell: ({ row }: { row: { original: IRowData } }) => (
        <div className="flex gap-3 justify-center items-center w-full">
          <button onClick={() => handleEdit(row.original)} className="flex">
            <TooltipDiv name="Edit" />
          </button>
        </div>
      ),
    },
  ];

  // ========== QUERY HOOK =============
  const { isLoading, refetch } = useQuery({
    queryKey: ["allUserData"],
    queryFn: () => getUsers(),
  });

  // ================ MEMOIZED COLUMNS AND DATA ============
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => storeData, [storeData]);

  // =========== TABLE INSTANCE ================
  const table = useReactTable<IRowData>({
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
        headerName="Employees"
        buttonName="New Employee"
        open={addModalOpen}
        setOpen={setAddModalOpen}
        modalTitle="Add New Employee"
      >
        <Add setOpen={setAddModalOpen} refetch={refetch} />
      </MainHeading>

      <TableTool
        filtering={filtering}
        setFiltering={setFiltering}
        // isLoading={isLoading}
        // table={table}
        // data={data}
      />

      {isLoading ? <Loader /> : <Table table={table} isLoading={isLoading} />}

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
