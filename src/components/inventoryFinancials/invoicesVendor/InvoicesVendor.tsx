"use client";
import MainHeading from "@/components/ui/share/heading/MainHeading";
import { useMemo, useState } from "react";
// import { ToastContainer } from "react-toastify";
// import Add from "../inventoryAudit/Add";
import { useQuery } from "@tanstack/react-query";
import { getUsers } from "@/api/api";
import { useDispatch } from "react-redux";
import TableTool from "@/components/ui/table/TableTool";
import TableAll from "@/components/ui/table/Table";
// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
// } from "@/components/ui/dialog";
// import Edit from "../inventoryAudit/Edit";
import {
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";
import TotalLotteryStock from "./TotalLotteryStock";
import Add from "./Add";
// import LowStockAlert from "./LowStockAlert";

const inventoryCountData = [
  {
    id: 1,
    department: "Drinks",
    product: "Coca-Cola 500ml",
    sku_code: "SKU_001",
    total_stock: 150,
  },
  {
    id: 2,
    department: "Beverages",
    product: "Pepsi Can 330ml",
    sku_code: "SKU_002",
    total_stock: 200,
  },
  {
    id: 3,
    department: "Fresh Produce",
    product: "Banana - Organic",
    sku_code: "SKU_003",
    total_stock: 180,
  },
  {
    id: 4,
    department: "Dairy",
    product: "Whole Milk 1L",
    sku_code: "SKU_004",
    total_stock: 75,
  },
  {
    id: 5,
    department: "Bakery",
    product: "Croissant",
    sku_code: "SKU_005",
    total_stock: 50,
  },
  {
    id: 6,
    department: "Meat & Seafood",
    product: "Fresh Salmon Fillet",
    sku_code: "SKU_006",
    total_stock: 60,
  },
  {
    id: 7,
    department: "Frozen Foods",
    product: "Frozen Pizza - Pepperoni",
    sku_code: "SKU_007",
    total_stock: 40,
  },
  {
    id: 8,
    department: "Snacks",
    product: "Potato Chips - Salted",
    sku_code: "SKU_008",
    total_stock: 220,
  },
  {
    id: 9,
    department: "Household Items",
    product: "Detergent Powder 1kg",
    sku_code: "SKU_009",
    total_stock: 110,
  },
  {
    id: 10,
    department: "Personal Care",
    product: "Shampoo - Herbal Extracts",
    sku_code: "SKU_010",
    total_stock: 85,
  },
  {
    id: 11,
    department: "Drinks",
    product: "Orange Juice 1L",
    sku_code: "SKU_011",
    total_stock: 130,
  },
  {
    id: 12,
    department: "Bakery",
    product: "Bagel",
    sku_code: "SKU_012",
    total_stock: 35,
  },
  {
    id: 13,
    department: "Frozen Foods",
    product: "Ice Cream Tub 500ml",
    sku_code: "SKU_013",
    total_stock: 95,
  },
  {
    id: 14,
    department: "Meat & Seafood",
    product: "Chicken Breast - Boneless",
    sku_code: "SKU_014",
    total_stock: 70,
  },
  {
    id: 15,
    department: "Snacks",
    product: "Chocolate Bar",
    sku_code: "SKU_015",
    total_stock: 250,
  },
];

const InvoicesVendor = () => {
  const [filterModalOpen, setFilterModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [showLowStockAlert, setShowLowStockAlert] = useState(false);
  const dispatch = useDispatch();

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
      header: "Department",
      accessorKey: "department",
      enableColumnFilter: false,
      enableSorting: false,
    },
    {
      header: "Product",
      accessorKey: "product",
      enableColumnFilter: false,
      enableSorting: false,
    },
    {
      header: "SKU",
      accessorKey: "sku_code",
      enableColumnFilter: false,
      enableSorting: false,
    },
    {
      header: "Total Stock",
      accessorKey: "total_stock",
      enableColumnFilter: false,
      enableSorting: false,
    },
  ];

  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => inventoryCountData, [inventoryCountData]);

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
      {/* <div className="flex justify-between items-center">
        <p className="font-bold text-textPrimary text-xl">Invoices by Vendor</p>
        <button className="bg-violetAltPrimary hover:bg-violetAltSecondary select-none px-3 py-2 rounded-md font-medium text-white text-base">
          Low Stock Alert
        </button>
      </div> */}
      <div>
        <MainHeading
          open={filterModalOpen}
          setOpen={setFilterModalOpen}
          headerName="Invoice by Vendor"
          buttonName="New Vendor"
          
        >
          <Add setOpen={setFilterModalOpen} refetch={refetch} />
        </MainHeading>

        <TableTool
          table={table}
          filtering={filtering}
          setFiltering={setFiltering}
          data={data}
          isLoading={isLoading}
          // add={true}
          // addModalOpen={addModalOpen}
          // buttonName="New Product"
          // refetch={refetch}
          // setAddModalOpen={setAddModalOpen}
        />
        {isLoading ? <div>loading ...</div> : <TableAll table={table} />}

        {/* <Dialog open={editModalOpen} onOpenChange={setEditModalOpen}>
          <DialogContent className="bg-white w-[80vw]">
            <DialogHeader>
              <DialogTitle>User Information Edit</DialogTitle>
            </DialogHeader>
            <Edit setEditModalOpen={setEditModalOpen} refetch={refetch} />
          </DialogContent>
        </Dialog>

        <ToastContainer /> */}
      </div>
      <TotalLotteryStock />
    </>
  );
};

export default InvoicesVendor;
