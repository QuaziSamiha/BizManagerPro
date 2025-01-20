import { getUsers } from "@/api/api";
import TableAll from "@/components/ui/table/Table";
import TableTool from "@/components/ui/table/TableTool";
import { useQuery } from "@tanstack/react-query";
import {
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";
import { useMemo, useState } from "react";

const lowStockData = [
  {
    id: 1,
    department: "Electronics",
    product: "Wireless Mouse",
    sku: "ELC1001",
    quantity: 25,
  },
  {
    id: 2,
    department: "Clothing",
    product: "Men's Jacket",
    sku: "CLT2002",
    quantity: 15,
  },
  {
    id: 3,
    department: "Home Appliances",
    product: "Blender",
    sku: "HAP3003",
    quantity: 8,
  },
  {
    id: 4,
    department: "Books",
    product: "Programming in JavaScript",
    sku: "BKS4004",
    quantity: 40,
  },
  {
    id: 5,
    department: "Groceries",
    product: "Organic Honey",
    sku: "GRC5005",
    quantity: 60,
  },
  {
    id: 6,
    department: "Furniture",
    product: "Office Chair",
    sku: "FUR6006",
    quantity: 12,
  },
  {
    id: 7,
    department: "Electronics",
    product: "Keyboard",
    sku: "ELC7007",
    quantity: 30,
  },
  {
    id: 8,
    department: "Clothing",
    product: "Women's Dress",
    sku: "CLT8008",
    quantity: 20,
  },
  {
    id: 9,
    department: "Home Appliances",
    product: "Microwave Oven",
    sku: "HAP9009",
    quantity: 10,
  },
  {
    id: 10,
    department: "Books",
    product: "Data Structures and Algorithms",
    sku: "BKS1010",
    quantity: 25,
  },
  {
    id: 11,
    department: "Groceries",
    product: "Brown Rice - 5kg",
    sku: "GRC1111",
    quantity: 50,
  },
  {
    id: 12,
    department: "Furniture",
    product: "Dining Table",
    sku: "FUR1212",
    quantity: 5,
  },
  {
    id: 13,
    department: "Electronics",
    product: "Power Bank",
    sku: "ELC1313",
    quantity: 18,
  },
  {
    id: 14,
    department: "Clothing",
    product: "Sports Shoes",
    sku: "CLT1414",
    quantity: 22,
  },
  {
    id: 15,
    department: "Groceries",
    product: "Almond Butter",
    sku: "GRC1515",
    quantity: 35,
  },
];

const LowStockAlert = () => {
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
      accessorKey: "sku",
      enableColumnFilter: false,
      enableSorting: false,
    },
    {
      header: "Quantity",
      accessorKey: "quantity",
      enableColumnFilter: false,
      enableSorting: false,
    },
  ];

  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => lowStockData, [lowStockData]);

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
    <main className="mt-10">
      <TableTool
        table={table}
        filtering={filtering}
        setFiltering={setFiltering}
        data={data}
        isLoading={isLoading}
        refetch={refetch}
      />
      {isLoading ? <div>loading ...</div> : <TableAll table={table} />}
    </main>
  );
};

export default LowStockAlert;
