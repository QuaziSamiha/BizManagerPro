"use client";

import { useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getUsers } from "@/api/api";
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

// ========= SAMPLE DATA ========
const demoData = [
  {
    name: "Summer Coolers",
    posId: "12345",
    listType: "Product",
    listSize: "15",
  },
  {
    name: "Fresh Picks Sale",
    posId: "67890",
    listType: "Department",
    listSize: "9",
  },
  {
    name: "Summer Coolers",
    posId: "12345",
    listType: "Product",
    listSize: "15",
  },
  {
    name: "Fresh Picks Sale",
    posId: "67890",
    listType: "Department",
    listSize: "9",
  },
  {
    name: "Summer Coolers",
    posId: "12345",
    listType: "Product",
    listSize: "15",
  },
  {
    name: "Fresh Picks Sale",
    posId: "67890",
    listType: "Department",
    listSize: "9",
  },
  {
    name: "Summer Coolers",
    posId: "12345",
    listType: "Product",
    listSize: "15",
  },
  {
    name: "Fresh Picks Sale",
    posId: "67890",
    listType: "Department",
    listSize: "9",
  },
];

const PromoProductList = () => {
  const [addModalOpen, setAddModalOpen] = useState(false);

  // ===== DEFINING COLUMNS ======
  const COLUMNS = [
    {
      header: "Name",
      accessorKey: "name",
      enableColumnFilter: false,
      enableSorting: false,
    },
    {
      header: "POS ID",
      accessorKey: "posId",
      enableColumnFilter: false,
      enableSorting: false,
    },
    {
      header: "List Type",
      accessorKey: "listType",
      enableColumnFilter: false,
      enableSorting: false,
    },
    {
      header: "List Size",
      accessorKey: "listSize",
      enableColumnFilter: false,
      enableSorting: false,
    },
    {
      header: "Action",
      accessor: "edit",
      enableSorting: false,
      cell: (row: any) => (
        <div className="flex gap-3 justify-center items-center w-full">
          <button className="flex">
            <TooltipDiv name="Delete" />
          </button>
        </div>
      ),
    },
  ];

  // ======= DATA FETCHING ======
  const { isLoading, refetch } = useQuery({
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
      <p className="font-bold text-textPrimary text-xl">
        Promotional Product List
      </p>

      <TableTool
        table={table}
        filtering={filtering}
        setFiltering={setFiltering}
        data={data}
        isLoading={isLoading}
        addTableButton={true}
        buttonName="New Promotional Product"
        modalTitle="New Promotional Product List"
        modalTitleColor="text-violetAltSecondary"
        addModalOpen={addModalOpen}
        setAddModalOpen={setAddModalOpen}
        refetch={refetch}
      />

      {isLoading ? <div>loading ...</div> : <TableAll table={table} />}

      <ToastContainer />
    </div>
  );
};
export default PromoProductList;

// "use client";
// import { useMemo, useState } from "react";
// import { useQuery } from "@tanstack/react-query";
// import { getUsers } from "@/api/api";
// import TooltipDiv from "@/components/ui/share/TooltipDiv";
// import {
//   getCoreRowModel,
//   getFilteredRowModel,
//   getPaginationRowModel,
//   getSortedRowModel,
//   SortingState,
//   useReactTable,
// } from "@tanstack/react-table";
// import TableAll from "@/components/ui/table/TableAll";
// import TableTool from "@/components/ui/table/TableTool";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// function PromoProductList() {
//   const [addModalOpen, setAddModalOpen] = useState(false);

//   const COLUMNS = [
//     {
//       header: "Name",
//       accessorKey: "name",
//       enableColumnFilter: false,
//       enableSorting: false,
//     },
//     {
//       header: "POS ID",
//       accessorKey: "posId",
//       enableColumnFilter: false,
//       enableSorting: false,
//     },
//     {
//       header: "List Type",
//       accessorKey: "listType",
//       enableColumnFilter: false,
//       enableSorting: false,
//     },
//     {
//       header: "List Size",
//       accessorKey: "listSize",
//       enableColumnFilter: false,
//       enableSorting: false,
//     },
//     {
//       header: "Action",
//       accessor: "edit",
//       enableSorting: false,
//       cell: (row: any) => (
//         <div className="flex gap-3 justify-center items-center w-full">
//           <button className=" flex">
//             <TooltipDiv name="Delete" />
//           </button>
//         </div>
//       ),
//     },
//   ];

//   const {
//     isLoading,
//     isError,
//     data: allUserData,
//     refetch,
//   } = useQuery({
//     queryKey: ["allUserData"],
//     queryFn: () => getUsers(),
//   });

//   const demoData = [
//     {
//       name: "Summer Coolers",
//       posId: "12345",
//       listType: "Product",
//       listSize: "15",
//     },
//     {
//       name: "Fresh Picks Sale",
//       posId: "67890",
//       listType: "Department",
//       listSize: "9",
//     },
//     {
//       name: "Summer Coolers",
//       posId: "12345",
//       listType: "Product",
//       listSize: "15",
//     },
//     {
//       name: "Fresh Picks Sale",
//       posId: "67890",
//       listType: "Department",
//       listSize: "9",
//     },
//     {
//       name: "Summer Coolers",
//       posId: "12345",
//       listType: "Product",
//       listSize: "15",
//     },
//     {
//       name: "Fresh Picks Sale",
//       posId: "67890",
//       listType: "Department",
//       listSize: "9",
//     },
//     {
//       name: "Summer Coolers",
//       posId: "12345",
//       listType: "Product",
//       listSize: "15",
//     },
//     {
//       name: "Fresh Picks Sale",
//       posId: "67890",
//       listType: "Department",
//       listSize: "9",
//     },
//   ];

//   const columns = useMemo(() => COLUMNS, []);
//   const data = useMemo(() => demoData, []);

//   const [sorting, setSorting] = useState<SortingState>([]);
//   const [filtering, setFiltering] = useState("");
//   const [columnVisibility, setColumnVisibility] = useState({});

//   const table = useReactTable({
//     data: data ?? [],
//     columns,
//     getCoreRowModel: getCoreRowModel(),
//     getPaginationRowModel: getPaginationRowModel(),
//     getSortedRowModel: getSortedRowModel(),
//     getFilteredRowModel: getFilteredRowModel(),
//     state: {
//       sorting: sorting,
//       globalFilter: filtering,
//       columnVisibility: columnVisibility,
//     },
//     onSortingChange: setSorting,
//     onGlobalFilterChange: setFiltering,
//     onColumnVisibilityChange: setColumnVisibility,
//   });

//   return (
//     <div>
//       <div>
//         <p className="font-bold text-textPrimary text-xl">
//           Promotional Product List
//         </p>
//       </div>
//       <TableTool
//         table={table}
//         filtering={filtering}
//         setFiltering={setFiltering}
//         data={data}
//         isLoading={isLoading}
//         add={true}
//         addModalOpen={addModalOpen}
//         setAddModalOpen={setAddModalOpen}
//         refetch={refetch}
//         headerName={"New Promotional Product"}
//         buttonName={"New Promotional Product"}
//         removeHeading={true}
//       />
//       {isLoading ? <div>loading ...</div> : <TableAll table={table} />}
//       <ToastContainer />
//     </div>
//   );
// }
// export default PromoProductList;
