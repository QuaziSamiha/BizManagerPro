"use client";

import { useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getUsers } from "@/api/api";
import { useDispatch } from "react-redux";
import { rowValue } from "@/redux/Reducer/MainSlice";
import MainHeading from "@/components/ui/share/heading/MainHeading";
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

// ====== SAMPLE PRODUCT DATA =======
const demoData = [
  {
    name: "Bottled Water",
    department: "Beverages",
    sku: "BVG1001",
    retailPrice: "$1.50",
  },
  {
    name: "Coca Cola",
    department: "Beverages",
    sku: "BVG1002",
    retailPrice: "$1.75",
  },
  {
    name: "Orange Juice",
    department: "Beverages",
    sku: "BVG1003",
    retailPrice: "$2.50",
  },
  {
    name: "Potato Chips",
    department: "Snacks",
    sku: "SNK1001",
    retailPrice: "$2.00",
  },
  {
    name: "Granola Bar",
    department: "Snacks",
    sku: "SNK1002",
    retailPrice: "$1.00",
  },
  {
    name: "Soda Water",
    department: "Beverages",
    sku: "BVG1004",
    retailPrice: "$1.25",
  },
];

// ========= MAIN COMPONENT FOR PRODUCT MANAGEMENT =====
const Products = () => {
  const [editData, setEditData] = useState(null);
  const [filterModalOpen, setFilterModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);

  const dispatch = useDispatch();

  // ======= FETCH DATA USING REACT-QUERY =====
  const { isLoading, refetch } = useQuery({
    queryKey: ["allUserData"],
    queryFn: () => getUsers(),
  });

  const handleEdit = (rowData: any) => {
    dispatch(rowValue(rowData));
    setEditData(rowData);
    setEditModalOpen(true);
  };

  const handleDelete = (rowData: any) => {
    console.log("deleted");
  };

  // ====== DEFINE TABLE COLUMNS ======
  const COLUMNS = [
    {
      header: "Name",
      accessorKey: "name",
      enableColumnFilter: false,
      enableSorting: false,
    },
    {
      header: "Department",
      accessorKey: "department",
      enableColumnFilter: false,
      enableSorting: false,
    },
    {
      header: "SKU",
      accessorKey: "sku",
      enableColumnFilter: false,
      enableSorting: false,
    },
    {
      header: "Retail Price",
      accessorKey: "retailPrice",
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

  // MEMOIZE COLUMNS AND DATA TO AVOID UNNECESSARY RE-RENDERS
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => demoData, []);

  // ======== STATE FOR TABLE FUNCTIONALITY ========
  const [sorting, setSorting] = useState<SortingState>([]);
  const [filtering, setFiltering] = useState("");
  const [columnVisibility, setColumnVisibility] = useState({});

  // ====== INITIALIZE TABLE WITH REACT TABLE HOOKS ======
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
        headerName="Product List"
        buttonName="New Product"
        totalData="9,686 Products"
        modalTitle="New Product"
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
            <DialogTitle>Edit Product</DialogTitle>
          </DialogHeader>
          <Edit setEditModalOpen={setEditModalOpen} refetch={refetch} />
        </DialogContent>
      </Dialog>

      <ToastContainer />
    </div>
  );
};
export default Products;
