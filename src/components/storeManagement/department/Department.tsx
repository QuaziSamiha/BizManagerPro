"use client";

import { useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getUsers } from "@/api/api";
import { useDispatch } from "react-redux";
import { rowValue } from "@/redux/Reducer/MainSlice";
import TooltipDiv from "@/components/ui/share/TooltipDiv";
import MainHeading from "@/components/ui/share/heading/MainHeading";
import {
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";
import TableTool from "@/components/ui/table/TableTool";
import TableAll from "@/components/ui/table/TableAll";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Add from "./Add";
import Edit from "./Edit";

const demoData = [
  {
    name: "John Doe",
    departmentName: "Fresh Produce",
    departmentCode: "dept_003",
    age: "30",
    status: "Active",
  },
  {
    name: "Jane Smith",
    departmentName: "Fresh Produce",
    departmentCode: "dept_003",
    age: "25",
    status: "Inactive",
  },
  {
    name: "Alice Johnson",
    departmentName: "Fresh Produce",
    departmentCode: "dept_003",
    age: "35",
    status: "Active",
  },
  {
    name: "Bob Brown",
    departmentName: "Fresh Produce",
    departmentCode: "dept_003",
    age: "40",
    status: "Inactive",
  },
  {
    name: "Charlie Black",
    departmentName: "Fresh Produce",
    departmentCode: "dept_003",
    age: "28",
    status: "Active",
  },
  {
    name: "Diana White",
    departmentName: "Fresh Produce",
    departmentCode: "dept_003",
    age: "32",
    status: "Active",
  },
];

const Department = () => {
  // const [editData, setEditData] = useState();
  const [filterModalOpen, setFilterModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);

  const dispatch = useDispatch();

  const handleEdit = (rowData: any) => {
    dispatch(rowValue(rowData));
    // setEditData(rowData);
    setEditModalOpen(true);
  };

  const handleDelete = (rowData: any) => {
   console.log('deleted')
  };

  const COLUMNS = [
    {
      header: "Name",
      accessorKey: "name",
      enableColumnFilter: false,
      enableSorting: false,
    },
    {
      header: "Dept. Name",
      accessorKey: "departmentName",
      enableColumnFilter: false,
      enableSorting: false,
    },
    {
      header: "Dept. Code",
      accessorKey: "departmentCode",
      enableColumnFilter: false,
      enableSorting: false,
    },
    {
      header: "Min Age",
      accessorKey: "age",
      enableColumnFilter: false,
      enableSorting: false,
    },
    {
      header: "Status",
      accessorKey: "status",
      enableColumnFilter: false,
      enableSorting: false,
    },
    {
      header: "Action",
      accessor: "edit",
      enableSorting: false,
      cell: (row: any) => (
        <div className="flex gap-3 justify-center items-center w-full">
          <button
            onClick={() => handleEdit(row.row.original)}
            className="flex"
          >
            <TooltipDiv name="Edit" />
          </button>
          <button
            onClick={() => handleDelete(row.row.original)}
            className="flex"
          >
            <TooltipDiv name="Delete" />
          </button>
        </div>
      ),
    },
  ];

  const {
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["allUserData"],
    queryFn: () => getUsers(),
  });

  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => demoData, []);

  const [sorting, setSorting] = useState<SortingState>([]);
  const [filtering, setFiltering] = useState<string>("");
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
        headerName="Department List"
        buttonName="New Department"
        totalData="50 Departments"
        modalTitle="New Department"
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
            <DialogTitle>Edit Department</DialogTitle>
          </DialogHeader>
          <Edit setEditModalOpen={setEditModalOpen} refetch={refetch} />
        </DialogContent>
      </Dialog>

      <ToastContainer />
    </div>
  );
};

export default Department;
