"use client";

import { useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getUsers } from "@/api/api";
import TooltipDiv from "@/components/ui/share/TooltipDiv";
import {
  ColumnDef,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";
import TableTool from "@/components/ui/table/TableTool";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import Table from "@/components/ui/table/Table";
import MainHeading from "@/components/ui/share/mainHeading/MainHeading";
import View from "./View";
import Add from "./Add";
import { useDispatch } from "react-redux";
import { rowValue } from "@/redux/Reducer/MainSlice";

interface IRow {
  item: string;
  category: string;
  stockLevel: number;
  specifications: string;
  location: string;
}

const inventoryData: IRow[] = [
  {
    item: "POS Machine A",
    category: "POS Machines",
    stockLevel: 10,
    specifications: "Dual screen, touchscreen, 8GB RAM",
    location: "Warehouse 1",
  },
  {
    item: "Desktop B",
    category: "Desktops",
    stockLevel: 5,
    specifications: "Intel i7, 16GB RAM, 512GB SSD",
    location: "Store Room 3",
  },
  {
    item: "Scanner C",
    category: "Scanners",
    stockLevel: 8,
    specifications: "High-speed A4 scanner",
    location: "Warehouse 2",
  },
  {
    item: "Camera X",
    category: "Cameras",
    stockLevel: 6,
    specifications: "1080p HD, Night vision",
    location: "Store Room 2",
  },
  {
    item: "Barcode Printer D",
    category: "Printers",
    stockLevel: 7,
    specifications: "Thermal, High-speed printing",
    location: "Warehouse 3",
  },
  {
    item: "Router E",
    category: "Networking",
    stockLevel: 15,
    specifications: "Dual-band, WiFi 6 support",
    location: "Warehouse 1",
  },
  {
    item: "Laptop Y",
    category: "Laptops",
    stockLevel: 12,
    specifications: "AMD Ryzen 5, 8GB RAM, 256GB SSD",
    location: "Store Room 1",
  },
  {
    item: "Tablet Z",
    category: "Tablets",
    stockLevel: 9,
    specifications: "10.5 inch display, 64GB storage",
    location: "Warehouse 2",
  },
  {
    item: "Thermal Scanner F",
    category: "Scanners",
    stockLevel: 5,
    specifications: "Contactless, Infrared",
    location: "Store Room 3",
  },
  {
    item: "Monitor G",
    category: "Displays",
    stockLevel: 14,
    specifications: "24 inch, Full HD",
    location: "Warehouse 3",
  },
  {
    item: "Keypad H",
    category: "Input Devices",
    stockLevel: 20,
    specifications: "Mechanical, RGB lighting",
    location: "Store Room 2",
  },
  {
    item: "Wireless Mouse I",
    category: "Input Devices",
    stockLevel: 18,
    specifications: "Bluetooth, Optical sensor",
    location: "Warehouse 1",
  },
  {
    item: "Headset J",
    category: "Accessories",
    stockLevel: 25,
    specifications: "Noise-canceling, USB",
    location: "Store Room 3",
  },
  {
    item: "Smartphone K",
    category: "Mobiles",
    stockLevel: 10,
    specifications: "6.4 inch display, 128GB storage",
    location: "Store Room 1",
  },
  {
    item: "UPS L",
    category: "Power Supplies",
    stockLevel: 8,
    specifications: "650VA, Battery backup",
    location: "Warehouse 2",
  },
  {
    item: "Server Rack M",
    category: "Servers",
    stockLevel: 3,
    specifications: "42U, Steel construction",
    location: "Warehouse 3",
  },
  {
    item: "Label Printer N",
    category: "Printers",
    stockLevel: 6,
    specifications: "Compact, WiFi-enabled",
    location: "Store Room 1",
  },
  {
    item: "Webcam O",
    category: "Cameras",
    stockLevel: 11,
    specifications: "1080p resolution, Autofocus",
    location: "Warehouse 3",
  },
  {
    item: "Flash Drive P",
    category: "Storage",
    stockLevel: 50,
    specifications: "32GB, USB 3.0",
    location: "Store Room 2",
  },
  {
    item: "SD Card Q",
    category: "Storage",
    stockLevel: 40,
    specifications: "64GB, Class 10",
    location: "Warehouse 1",
  },
  {
    item: "CCTV Camera R",
    category: "Cameras",
    stockLevel: 7,
    specifications: "360° view, IP66 rated",
    location: "Store Room 1",
  },
  {
    item: "Networking Switch S",
    category: "Networking",
    stockLevel: 9,
    specifications: "24-Port, Gigabit",
    location: "Warehouse 2",
  },
  {
    item: "Projector T",
    category: "Displays",
    stockLevel: 4,
    specifications: "3000 lumens, HD support",
    location: "Store Room 3",
  },
  {
    item: "External Hard Drive U",
    category: "Storage",
    stockLevel: 15,
    specifications: "1TB, USB-C",
    location: "Warehouse 2",
  },
  {
    item: "Wireless Speaker V",
    category: "Audio",
    stockLevel: 10,
    specifications: "Bluetooth, 12-hour battery",
    location: "Store Room 1",
  },
];

const InventoryManagement = () => {
  // const [editData, setEditData] = useState();
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [viewModalOpen, setViewModalOpen] = useState(false);

  const dispatch = useDispatch();

  const handleView = (rowData: IRow) => {
    dispatch(rowValue(rowData));
    // setEditData(rowData);
    setViewModalOpen(true);
  };

  const COLUMNS: ColumnDef<IRow>[] = [
    {
      header: "Item",
      accessorKey: "item",
      enableColumnFilter: false,
      enableSorting: false,
    },
    {
      header: "Category",
      accessorKey: "category",
      cell: ({ row }: { row: { original: IRow } }) => {
        const rowData = row.original;
        // console.log(rowData.category);
        const category = rowData.category;
        return (
          <div className="flex gap-3 justify-center items-center w-full">
            <div
              className={`w-32 py-1 rounded-full text-center ${
                category === "Displays"
                  ? "bg-green-100 text-green-900"
                  : `${
                      category === "Storage"
                        ? "bg-cyan-100 text-cyan-800"
                        : `${
                            category === "Audio" &&
                            "bg-yellow-100 text-yellow-700"
                          }`
                    }`
              }`}
            >
              {category}
            </div>
          </div>
        );
      },
    },
    {
      header: "Stock Level",
      accessorKey: "stockLevel",
    },
    {
      header: "Specifications",
      accessorKey: "specifications",
      enableColumnFilter: false,
      enableSorting: false,
    },
    {
      header: "Location",
      accessorKey: "location",
      enableColumnFilter: false,
      enableSorting: false,
    },
    {
      header: "Action",
      id: "view",
      enableSorting: false,
      cell: (row) => {
        return (
          <div className="flex gap-3 justify-center items-center w-full">
            <button
              onClick={() => handleView(row.row.original)}
              className="flex"
            >
              <TooltipDiv name="View" />
            </button>
          </div>
        );
      },
    },
  ];

  const { isLoading, refetch } = useQuery({
    queryKey: ["allUserData"],
    queryFn: () => getUsers(),
  });

  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => inventoryData, []);

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
        headerName="Inventory Tracking"
        subHeader="Total Products in Store: 50pc"
        open={addModalOpen}
        setOpen={setAddModalOpen}
        buttonName="New Item"
        modalTitle="Add New Item"
      >
        <Add setOpen={setAddModalOpen} refetch={refetch} />
      </MainHeading>

      <TableTool
        table={table}
        filtering={filtering}
        setFiltering={setFiltering}
        isLoading={isLoading}
      />

      {isLoading ? <div>loading ...</div> : <Table table={table} />}

      <Dialog open={viewModalOpen} onOpenChange={setViewModalOpen}>
        <DialogContent className="bg-white w-[50vw]">
          <View />
        </DialogContent>
      </Dialog>

      <ToastContainer />
    </div>
  );
};

export default InventoryManagement;
