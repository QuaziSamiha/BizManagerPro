// ? 23 April, 25
"use client";

// ? =========== IMPORT REACT HOOKS =======
import { useMemo, useState } from "react";
// ? ========== IMPORT SHADCN COMPONENTS ============
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ToastContainer } from "react-toastify";
// ? ========= REACT TANSTACK TABLE =========
import {
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";
// ? ========= IMPORT CUSTOM COMPONENT ==========
import FilterTable from "@/components/ui/table/FilterTable";
import TooltipDiv from "@/components/ui/share/TooltipDiv";
import MainHeading from "@/components/ui/share/mainHeading/MainHeading";
import Edit from "./Edit";
import TablePagination from "@/components/ui/table/TablePagination";
import Table from "@/components/ui/table/Table";
import Add from "./add/Add";
import { demoData } from "./data/data";

// ? ============= MAIN COMPONENT =============
export default function ProductSetup<T extends Record<string, unknown>>() {
  // ? =========== STATE HOOKS FOR ROW DATA ============
  //   const [editData, setEditData] = useState<T | null>(null);
  // ? =============== STATE HOOKS FOR Modal ================
  const [editModalOpen, setEditModalOpen] = useState<boolean>(false);
  const [addModalOpen, setAddModalOpen] = useState<boolean>(false);
  // ? =============== STATE HOOKS FOR TABLE ================
  const [sorting, setSorting] = useState<SortingState>([]);
  const [filtering, setFiltering] = useState<string>("");
  const [columnVisibility, setColumnVisibility] = useState({});

  // ? ======= HANDLE EDIT FUNCTION =======
  const handleEdit = (rowData: T) => {
    console.log(rowData);
    setEditModalOpen(true);
    // setEditData(rowData);
  };

  // ? ======= COLUMNS DEFINITION =======
  const COLUMNS = [
    {
      header: "Name",
      accessorKey: "prodName",
      enableColumnFilter: false,
      enableSorting: false,
      cell: ({ row }: { row: { original: T } }) => (
        <div className="capitalize">{String(row.original.prodName)}</div>
      ),
    },
    {
      header: "Department",
      accessorKey: "deptId",
      enableColumnFilter: false,
      enableSorting: false,
      cell: ({ row }: { row: { original: T } }) => (
        <div className="capitalize">{String(row.original.deptId)}</div>
      ),
    },
    {
      header: "SKU",
      accessorKey: "sku",
      enableColumnFilter: false,
      enableSorting: false,
    },
    {
      header: "Profit Margin",
      accessorKey: "profitPct",
      enableColumnFilter: false,
      enableSorting: false,
    },
    {
      header: "Unit Margin",
      accessorKey: "unitPrice",
      enableColumnFilter: false,
      enableSorting: false,
    },
    {
      header: "Packet Quantity",
      accessorKey: "packQty",
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
      accessorKey: "actions",
      enableSorting: false,
      enableColumnFilter: false,
      cell: ({ row }: { row: { original: T } }) => (
        <div className="flex gap-3 justify-center items-center w-full">
          <button onClick={() => handleEdit(row.original)}>
            <TooltipDiv name="Edit" />
          </button>
        </div>
      ),
    },
  ];
  const columns = useMemo(() => COLUMNS, []);

  // ? ======= TABLE INSTANCE =======
  const table = useReactTable<T>({
    data: demoData ?? [],
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting,
      globalFilter: filtering,
      columnVisibility,
    },
    onSortingChange: setSorting,
    onGlobalFilterChange: setFiltering,
    onColumnVisibilityChange: setColumnVisibility,
  });

  return (
    <div>
      <div className="flex flex-col gap-10">
        <MainHeading
          headerName="Product"
          buttonName="Add Product"
          open={addModalOpen}
          setOpen={setAddModalOpen}
          modalTitle="New Product Setup"
        >
          <Add setOpen={setAddModalOpen} />
          {/* <Add setOpen={setAddModalOpen} /> */}
        </MainHeading>

        <div className="w-full">
          {/* {isLoading ? (
            <Loader />
          ) : ( */}
          <div>
            {demoData.length > 0 ? (
              <div className="bg-silver shadow-lg rounded-lg px-14 pt-8 pb-4 flex flex-col gap-4">
                <div className="w-1/3">
                  <FilterTable
                    filtering={filtering}
                    setFiltering={setFiltering}
                  />
                </div>

                {/* <Table table={table} isLoading={isLoading} /> */}
                <Table table={table} />

                <div className="flex justify-end">
                  <div>
                    {/* {isLoading ? (
                        <Loader />
                      ) : (
                        )} */}
                    <TablePagination table={table} />
                  </div>
                </div>
              </div>
            ) : (
              <div className="flex flex-col items-center justify-center h-48 bg-gray-100 rounded-xl shadow p-4">
                <p className="text-lg font-semibold text-gray-600">
                  No Data Found
                </p>
              </div>
            )}
          </div>
          {/* )} */}
        </div>
      </div>

      {/* // ? ============== EDIT MODAL ============= */}
      <Dialog open={editModalOpen} onOpenChange={setEditModalOpen}>
        <DialogContent className="bg-white w-[50vw] max-h-[90vh] overflow-y-auto scrollbar">
          <DialogHeader>
            <DialogTitle className="text-blueActual text-2xl">
              Edit Product
            </DialogTitle>
          </DialogHeader>
          <Edit />
          {/* <Edit setOpen={setEditModalOpen} data={editData} refetch={refetch} /> */}
        </DialogContent>
      </Dialog>

      <ToastContainer />
    </div>
  );
}

// import ProductCodeScanner from "./ProductCodeScanner";

// export default function ProductDepartment() {
//   return (
//     <div>
//       product department
//       <ProductCodeScanner />
//     </div>
//   );
// }
