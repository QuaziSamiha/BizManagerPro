"use client";

// import {
//   Dialog,
//   DialogContent,
//   DialogHeader,
//   DialogTitle,
// } from "@/components/ui/dialog";
import MainHeading from "@/components/ui/share/mainHeading/MainHeading";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import Add from "./Add";
import { useMemo, useState } from "react";
import TooltipDiv from "@/components/ui/share/TooltipDiv";
import {
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";
import Loader from "@/components/ui/share/loader/Loader";
import FilterTable from "@/components/ui/table/FilterTable";
import Table from "@/components/ui/table/Table";
import TablePagination from "@/components/ui/table/TablePagination";
import { demoCompanyData } from "./data";
import TableActionPanel from "@/components/ui/table/TableActionPanel";
import Heading from "@/components/ui/share/heading/Heading";
// import Edit from "./Edit";

export default function ParentCompany<T extends Record<string, unknown>>() {
  //? =========== STATE HOOKS FOR ROW DATA ============
  //   const [editData, setEditData] = useState<T | null>(null);
  // ? =============== STATE HOOKS FOR Modal ================
  const [addModalOpen, setAddModalOpen] = useState<boolean>(false);
  //   const [editModalOpen, setEditModalOpen] = useState<boolean>(false);
  // =============== STATE HOOKS FOR TABLE ================
  const [sorting, setSorting] = useState<SortingState>([]);
  const [filtering, setFiltering] = useState<string>("");
  const [columnVisibility, setColumnVisibility] = useState({});
  const isLoading = false;
  //? ======================= HANDLE EDIT FUNCTION ===================
  //   const handleEdit = (rowData: T) => {
  //     // console.log(rowData);
  //     setEditModalOpen(true);
  //     setEditData(rowData);
  //   };

  //? ==================== DEPARTMENT COLUMN DEFINE ==================
  const COLUMNS = [
    {
      header: "Company No.",
      accessorKey: "companyNo",
      enableColumnFilter: false,
      enableSorting: false,
      cell: ({ row }: { row: { original: T } }) => {
        return <div className="">{String(row.original.companyNo)}</div>;
      },
    },
    {
      header: "Name",
      accessorKey: "companyName",
      enableColumnFilter: false,
      enableSorting: false,
      cell: ({ row }: { row: { original: T } }) => {
        return (
          <div className="capitalize">{String(row.original.companyName)}</div>
        );
      },
    },
    {
      header: "Name",
      accessorKey: "companyName",
      enableColumnFilter: false,
      enableSorting: false,
      cell: ({ row }: { row: { original: T } }) => {
        return (
          <div className="capitalize">{String(row.original.companyName)}</div>
        );
      },
    },
    {
      header: "Name",
      accessorKey: "companyName",
      enableColumnFilter: false,
      enableSorting: false,
      cell: ({ row }: { row: { original: T } }) => {
        return (
          <div className="capitalize">{String(row.original.companyName)}</div>
        );
      },
    },
    {
      header: "Name",
      accessorKey: "companyName",
      enableColumnFilter: false,
      enableSorting: false,
      cell: ({ row }: { row: { original: T } }) => {
        return (
          <div className="capitalize">{String(row.original.companyName)}</div>
        );
      },
    },
    {
      header: "Name",
      accessorKey: "companyName",
      enableColumnFilter: false,
      enableSorting: false,
      cell: ({ row }: { row: { original: T } }) => {
        return (
          <div className="capitalize">{String(row.original.companyName)}</div>
        );
      },
    },
    {
      header: "Name",
      accessorKey: "companyName",
      enableColumnFilter: false,
      enableSorting: false,
      cell: ({ row }: { row: { original: T } }) => {
        return (
          <div className="capitalize">{String(row.original.companyName)}</div>
        );
      },
    },
    {
      header: "Name",
      accessorKey: "companyName",
      enableColumnFilter: false,
      enableSorting: false,
      cell: ({ row }: { row: { original: T } }) => {
        return (
          <div className="capitalize">{String(row.original.companyName)}</div>
        );
      },
    },
    {
      header: "Name",
      accessorKey: "companyName",
      enableColumnFilter: false,
      enableSorting: false,
      cell: ({ row }: { row: { original: T } }) => {
        return (
          <div className="capitalize">{String(row.original.companyName)}</div>
        );
      },
    },
    {
      header: "Name",
      accessorKey: "companyName",
      enableColumnFilter: false,
      enableSorting: false,
      cell: ({ row }: { row: { original: T } }) => {
        return (
          <div className="capitalize">{String(row.original.companyName)}</div>
        );
      },
    },
    {
      header: "Name",
      accessorKey: "companyName",
      enableColumnFilter: false,
      enableSorting: false,
      cell: ({ row }: { row: { original: T } }) => {
        return (
          <div className="capitalize">{String(row.original.companyName)}</div>
        );
      },
    },
    {
      header: "Address",
      accessorKey: "address",
      enableColumnFilter: false,
      enableSorting: false,
      cell: ({ row }: { row: { original: T } }) => {
        return <div className="">{String(row.original.address)}</div>;
      },
    },
    {
      header: "Zip Code",
      accessorKey: "zipCode",
      enableColumnFilter: false,
      enableSorting: false,
      cell: ({ row }: { row: { original: T } }) => {
        return <div className="">{String(row.original.zipCode)}</div>;
      },
    },
    {
      header: "Country Code",
      accessorKey: "countryCode",
      enableColumnFilter: false,
      enableSorting: false,
      cell: ({ row }: { row: { original: T } }) => {
        return <div className="">{String(row.original.countryCode)}</div>;
      },
    },
    // {
    //   header: "Status",
    //   accessorKey: "isActive",
    //   enableColumnFilter: false,
    //   enableSorting: false,
    //   cell: ({ row }: { row: { original: T } }) => (
    //     <div
    //       className={`${
    //         row?.original?.isActive
    //           ? "bg-blue-100 text-blueActual"
    //           : "bg-red-100 text-redActual"
    //       } w-full text-center rounded-full py-0.5`}
    //     >
    //       {row.original.isActive ? "Active" : "Inactive"}
    //     </div>
    //   ),
    // },
    {
      header: "Action",
      accessorKey: "actions",
      enableSorting: false,
      enableColumnFilter: false,
      cell: ({ row }: { row: { original: T } }) => (
        <div className="flex gap-3 justify-center items-center w-full">
          {/* <button onClick={() => handleEdit(row.original)}>
            <TooltipDiv name="Edit" />
          </button> */}
        </div>
      ),
    },
  ];

  //?================ MEMOIZED COLUMNS AND DATA ============
  const columns = useMemo(() => COLUMNS, []);

  //? =========== TABLE INSTANCE ================
  const table = useReactTable<T>({
    data: demoCompanyData ?? [],
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
    <div className="flex flex-col gap-10">
      <Heading headerName="Parent Company" />

      <div className="">
        {isLoading ? (
          <Loader />
        ) : (
          <div className=" bg-silver shadow-lg rounded-lg px-4 lg:px-14 pt-8 pb-4 flex flex-col gap-4">
            <div className="w-full">
              <TableActionPanel
                filtering={filtering}
                setFiltering={setFiltering}
                buttonName="New Parent Company"
                open={addModalOpen}
                setOpen={setAddModalOpen}
                modalTitle="New Parent Company"
              >
                <div></div>
              </TableActionPanel>
            </div>
            <Table table={table} isLoading={isLoading} />
            <div className="flex justify-end">
              <div>
                {isLoading ? <Loader /> : <TablePagination table={table} />}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
// "use client";

// // import {
// //   Dialog,
// //   DialogContent,
// //   DialogHeader,
// //   DialogTitle,
// // } from "@/components/ui/dialog";
// import MainHeading from "@/components/ui/share/mainHeading/MainHeading";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// // import Add from "./Add";
// import { useMemo, useState } from "react";
// import TooltipDiv from "@/components/ui/share/TooltipDiv";
// import {
//   getCoreRowModel,
//   getFilteredRowModel,
//   getPaginationRowModel,
//   getSortedRowModel,
//   SortingState,
//   useReactTable,
// } from "@tanstack/react-table";
// import Loader from "@/components/ui/share/loader/Loader";
// import FilterTable from "@/components/ui/table/FilterTable";
// import Table from "@/components/ui/table/Table";
// import TablePagination from "@/components/ui/table/TablePagination";
// import { demoCompanyData } from "./data";
// // import Edit from "./Edit";

// export default function ParentCompany<T extends Record<string, unknown>>() {
//   //? =========== STATE HOOKS FOR ROW DATA ============
//   //   const [editData, setEditData] = useState<T | null>(null);
//   // ? =============== STATE HOOKS FOR Modal ================
//   const [addModalOpen, setAddModalOpen] = useState<boolean>(false);
//   //   const [editModalOpen, setEditModalOpen] = useState<boolean>(false);
//   // =============== STATE HOOKS FOR TABLE ================
//   const [sorting, setSorting] = useState<SortingState>([]);
//   const [filtering, setFiltering] = useState<string>("");
//   const [columnVisibility, setColumnVisibility] = useState({});
//   const isLoading = false;
//   //? ======================= HANDLE EDIT FUNCTION ===================
//   //   const handleEdit = (rowData: T) => {
//   //     // console.log(rowData);
//   //     setEditModalOpen(true);
//   //     setEditData(rowData);
//   //   };

//   //? ==================== DEPARTMENT COLUMN DEFINE ==================
//   const COLUMNS = [
//     {
//       header: "Company No.",
//       accessorKey: "companyNo",
//       enableColumnFilter: false,
//       enableSorting: false,
//       cell: ({ row }: { row: { original: T } }) => {
//         return <div className="">{String(row.original.companyNo)}</div>;
//       },
//     },
//     {
//       header: "Name",
//       accessorKey: "companyName",
//       enableColumnFilter: false,
//       enableSorting: false,
//       cell: ({ row }: { row: { original: T } }) => {
//         return (
//           <div className="capitalize">{String(row.original.companyName)}</div>
//         );
//       },
//     },
//     {
//       header: "Address",
//       accessorKey: "address",
//       enableColumnFilter: false,
//       enableSorting: false,
//       cell: ({ row }: { row: { original: T } }) => {
//         return <div className="">{String(row.original.address)}</div>;
//       },
//     },
//     {
//       header: "Zip Code",
//       accessorKey: "zipCode",
//       enableColumnFilter: false,
//       enableSorting: false,
//       cell: ({ row }: { row: { original: T } }) => {
//         return <div className="">{String(row.original.zipCode)}</div>;
//       },
//     },
//     {
//       header: "Country Code",
//       accessorKey: "countryCode",
//       enableColumnFilter: false,
//       enableSorting: false,
//       cell: ({ row }: { row: { original: T } }) => {
//         return <div className="">{String(row.original.countryCode)}</div>;
//       },
//     },
//     // {
//     //   header: "Status",
//     //   accessorKey: "isActive",
//     //   enableColumnFilter: false,
//     //   enableSorting: false,
//     //   cell: ({ row }: { row: { original: T } }) => (
//     //     <div
//     //       className={`${
//     //         row?.original?.isActive
//     //           ? "bg-blue-100 text-blueActual"
//     //           : "bg-red-100 text-redActual"
//     //       } w-full text-center rounded-full py-0.5`}
//     //     >
//     //       {row.original.isActive ? "Active" : "Inactive"}
//     //     </div>
//     //   ),
//     // },
//     {
//       header: "Action",
//       accessorKey: "actions",
//       enableSorting: false,
//       enableColumnFilter: false,
//       cell: ({ row }: { row: { original: T } }) => (
//         <div className="flex gap-3 justify-center items-center w-full">
//           {/* <button onClick={() => handleEdit(row.original)}>
//             <TooltipDiv name="Edit" />
//           </button> */}
//         </div>
//       ),
//     },
//   ];

//   //?================ MEMOIZED COLUMNS AND DATA ============
//   const columns = useMemo(() => COLUMNS, []);

//   //? =========== TABLE INSTANCE ================
//   const table = useReactTable<T>({
//     data: demoCompanyData ?? [],
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
//     <div className="max-w-7xl mx-auto w-full border border-red-500">
//       <div className="flex justify-center">
//         <div className="flex flex-col gap-10 w-full">
//           {/* <MainHeading
//             headerName="Parent Company"
//             buttonName="New Parent Company"
//             open={addModalOpen}
//             setOpen={setAddModalOpen}
//             modalTitle="New Parent Company"
//           >
//             <div></div> */}
//           {/* <Add setOpen={setAddModalOpen} refetch={refetch} /> */}
//           {/* </MainHeading> */}

//           <div>
//             <div className=" w-full">
//               {isLoading ? (
//                 <Loader />
//               ) : (
//                 <div className="bg-silver shadow-lg rounded-lg px-14 pt-8 pb-4 flex flex-col gap-4">
//                   <div className="w-1/3">
//                     <FilterTable
//                       filtering={filtering}
//                       setFiltering={setFiltering}
//                     />
//                   </div>
//                   <div className="overflow-x-auto scrollbar">
//                     {/* <Table table={table} /> */}
//                     <Table table={table} isLoading={isLoading} />
//                   </div>
//                   <div className="flex justify-end">
//                     <div>
//                       {isLoading ? (
//                         <Loader />
//                       ) : (
//                         <TablePagination table={table} />
//                       )}
//                       {/* <TablePagination table={table} /> */}
//                     </div>
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>

//         {/* //? ============== EDIT ADS MODAL ============= */}
//         {/* <Dialog open={editModalOpen} onOpenChange={setEditModalOpen}>
//           <DialogContent className="bg-white w-[40vw] max-h-[90vh] overflow-y-auto scrollbar">
//             <DialogHeader className="p-6">
//               <DialogTitle className="text-blueActual text-2xl">
//                 Edit Parent Company
//               </DialogTitle>
//             </DialogHeader>
//             <Edit
//               setOpen={setEditModalOpen}
//               data={editData}
//               refetch={refetch}
//             />
//           </DialogContent>
//         </Dialog> */}

//         <ToastContainer />
//       </div>
//     </div>
//   );
// }
