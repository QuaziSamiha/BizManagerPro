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
import TableAll from "@/components/ui/table/Table";
import TableTool from "@/components/ui/table/TableTool";
import { ToastContainer } from "react-toastify";
// import TableTool from "@/components/ui/table/TableTool2";

// ======= SAMPLE DEMO DATA ======
const demoData = [
  {
    name: "Summer Coolers",
    posId: "12345",
    store: "All Stores",
    startTime: "09/01/2024 09.00 AM",
    endTime: "19/01/2024 08.00 PM",
    week: "Mon, Wed, Fri",
    listUsed: "10",
    priceBreaks: "Buy 2, Get 1 Free",
  },
  {
    name: "Winter Jackets Sale",
    posId: "12346",
    store: "Downtown Mall",
    startTime: "01/12/2024 10.00 AM",
    endTime: "15/12/2024 06.00 PM",
    week: "Tue, Thu, Sat",
    listUsed: "20",
    priceBreaks: "20% Off on All Jackets",
  },
  {
    name: "Holiday Bonanza",
    posId: "12347",
    store: "City Center",
    startTime: "05/12/2024 08.00 AM",
    endTime: "25/12/2024 09.00 PM",
    week: "Mon, Wed, Fri, Sun",
    listUsed: "50",
    priceBreaks: "Buy 1, Get 1 50% Off",
  },
  {
    name: "Back to School Sale",
    posId: "12348",
    store: "East Mall",
    startTime: "01/08/2024 09.00 AM",
    endTime: "31/08/2024 08.00 PM",
    week: "Mon - Fri",
    listUsed: "30",
    priceBreaks: "Up to 40% Off on Stationery",
  },
  {
    name: "Fitness Gear Sale",
    posId: "12349",
    store: "West End Store",
    startTime: "10/10/2024 08.00 AM",
    endTime: "25/10/2024 07.00 PM",
    week: "Mon, Thu, Sat",
    listUsed: "15",
    priceBreaks: "Buy 3, Get 1 Free",
  },
  {
    name: "Spring Collection Launch",
    posId: "12350",
    store: "Central Plaza",
    startTime: "15/03/2024 10.00 AM",
    endTime: "30/03/2024 06.00 PM",
    week: "Tue, Fri, Sun",
    listUsed: "25",
    priceBreaks: "10% Off on New Collection",
  },
  {
    name: "Valentine's Day Offers",
    posId: "12351",
    store: "Luxury Mall",
    startTime: "01/02/2024 09.00 AM",
    endTime: "14/02/2024 08.00 PM",
    week: "Mon - Sat",
    listUsed: "40",
    priceBreaks: "Buy 1, Get 1 Free on Gifts",
  },
  {
    name: "Black Friday Deals",
    posId: "12352",
    store: "Mega Store",
    startTime: "29/11/2024 06.00 AM",
    endTime: "29/11/2024 11.59 PM",
    week: "Fri",
    listUsed: "100",
    priceBreaks: "Up to 70% Off on Electronics",
  },
  {
    name: "New Year Countdown Sale",
    posId: "12353",
    store: "Main Street Store",
    startTime: "28/12/2024 08.00 AM",
    endTime: "31/12/2024 10.00 PM",
    week: "Mon - Thu",
    listUsed: "35",
    priceBreaks: "15% Off Storewide",
  },
  {
    name: "Summer Fashion Clearance",
    posId: "12354",
    store: "Beachside Mall",
    startTime: "10/06/2024 10.00 AM",
    endTime: "30/06/2024 07.00 PM",
    week: "Mon, Wed, Fri",
    listUsed: "18",
    priceBreaks: "50% Off on All Summer Apparel",
  },
  {
    name: "Tech Gadgets Sale",
    posId: "12355",
    store: "Tech Plaza",
    startTime: "01/07/2024 09.00 AM",
    endTime: "15/07/2024 08.00 PM",
    week: "Tue, Thu, Sat",
    listUsed: "60",
    priceBreaks: "Buy 1, Get 1 30% Off on Gadgets",
  },
  {
    name: "Furniture Overstock Sale",
    posId: "12356",
    store: "Home Goods Store",
    startTime: "05/05/2024 09.00 AM",
    endTime: "20/05/2024 07.00 PM",
    week: "Mon, Fri, Sun",
    listUsed: "22",
    priceBreaks: "Up to 50% Off on Furniture",
  },
];

const MixAndMatchPromo = () => {
  const [addModalOpen, setAddModalOpen] = useState(false);

  // ======= COLUMN DEFINING =========
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
      header: "Store",
      accessorKey: "store",
      enableColumnFilter: false,
      enableSorting: false,
    },
    {
      header: "Start Day/Time",
      accessorKey: "startTime",
      enableColumnFilter: false,
      enableSorting: false,
    },
    {
      header: "End Day/Time",
      accessorKey: "endTime",
      enableColumnFilter: false,
      enableSorting: false,
    },
    {
      header: "Days of Week Available",
      accessorKey: "week",
      enableColumnFilter: false,
      enableSorting: false,
    },
    {
      header: "List Used",
      accessorKey: "listUsed",
      enableColumnFilter: false,
      enableSorting: false,
    },
    {
      header: "Price Breaks",
      accessorKey: "priceBreaks",
      enableColumnFilter: false,
      enableSorting: false,
    },
    {
      header: "Action",
      accessor: "edit",
      enableSorting: false,
      cell: (row: any) => (
        <div className="flex gap-3 justify-center items-center w-full">
          <button className=" flex">
            <TooltipDiv name="Delete" />
          </button>
        </div>
      ),
    },
  ];

  // ========= DATA FETCHING ==========
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
        Mix & Match Promotion List
      </p>

      <TableTool
        table={table}
        filtering={filtering}
        setFiltering={setFiltering}
        data={data}
        isLoading={isLoading}
        addTableButton={true}
        addModalOpen={addModalOpen}
        setAddModalOpen={setAddModalOpen}
        refetch={refetch}
        buttonName={"New Mix & Match Promotion"}
        modalTitle="New Mix & Match Promotion"
        modalTitleColor="text-violetAltSecondary"
      />
      {isLoading ? <div>loading ...</div> : <TableAll table={table} />}
      <ToastContainer />
    </div>
  );
};

export default MixAndMatchPromo;
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
// const MixAndMatchPromo = () => {
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
//       header: "Store",
//       accessorKey: "store",
//       enableColumnFilter: false,
//       enableSorting: false,
//     },
//     {
//       header: "Start Day/Time",
//       accessorKey: "startTime",
//       enableColumnFilter: false,
//       enableSorting: false,
//     },
//     {
//       header: "End Day/Time",
//       accessorKey: "endTime",
//       enableColumnFilter: false,
//       enableSorting: false,
//     },
//     {
//       header: "Days of Week Available",
//       accessorKey: "week",
//       enableColumnFilter: false,
//       enableSorting: false,
//     },
//     {
//       header: "List Used",
//       accessorKey: "listUsed",
//       enableColumnFilter: false,
//       enableSorting: false,
//     },
//     {
//       header: "Price Breaks",
//       accessorKey: "priceBreaks",
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
//       store: "All Stores",
//       startTime: "09/01/2024 09.00 AM",
//       endTime: "19/01/2024 08.00 PM",
//       week: "Mon, Wed, Fri",
//       listUsed: "10",
//       priceBreaks: "Buy 2, Get 1 Free",
//     },
//     {
//       name: "Winter Jackets Sale",
//       posId: "12346",
//       store: "Downtown Mall",
//       startTime: "01/12/2024 10.00 AM",
//       endTime: "15/12/2024 06.00 PM",
//       week: "Tue, Thu, Sat",
//       listUsed: "20",
//       priceBreaks: "20% Off on All Jackets",
//     },
//     {
//       name: "Holiday Bonanza",
//       posId: "12347",
//       store: "City Center",
//       startTime: "05/12/2024 08.00 AM",
//       endTime: "25/12/2024 09.00 PM",
//       week: "Mon, Wed, Fri, Sun",
//       listUsed: "50",
//       priceBreaks: "Buy 1, Get 1 50% Off",
//     },
//     {
//       name: "Back to School Sale",
//       posId: "12348",
//       store: "East Mall",
//       startTime: "01/08/2024 09.00 AM",
//       endTime: "31/08/2024 08.00 PM",
//       week: "Mon - Fri",
//       listUsed: "30",
//       priceBreaks: "Up to 40% Off on Stationery",
//     },
//     {
//       name: "Fitness Gear Sale",
//       posId: "12349",
//       store: "West End Store",
//       startTime: "10/10/2024 08.00 AM",
//       endTime: "25/10/2024 07.00 PM",
//       week: "Mon, Thu, Sat",
//       listUsed: "15",
//       priceBreaks: "Buy 3, Get 1 Free",
//     },
//     {
//       name: "Spring Collection Launch",
//       posId: "12350",
//       store: "Central Plaza",
//       startTime: "15/03/2024 10.00 AM",
//       endTime: "30/03/2024 06.00 PM",
//       week: "Tue, Fri, Sun",
//       listUsed: "25",
//       priceBreaks: "10% Off on New Collection",
//     },
//     {
//       name: "Valentine's Day Offers",
//       posId: "12351",
//       store: "Luxury Mall",
//       startTime: "01/02/2024 09.00 AM",
//       endTime: "14/02/2024 08.00 PM",
//       week: "Mon - Sat",
//       listUsed: "40",
//       priceBreaks: "Buy 1, Get 1 Free on Gifts",
//     },
//     {
//       name: "Black Friday Deals",
//       posId: "12352",
//       store: "Mega Store",
//       startTime: "29/11/2024 06.00 AM",
//       endTime: "29/11/2024 11.59 PM",
//       week: "Fri",
//       listUsed: "100",
//       priceBreaks: "Up to 70% Off on Electronics",
//     },
//     {
//       name: "New Year Countdown Sale",
//       posId: "12353",
//       store: "Main Street Store",
//       startTime: "28/12/2024 08.00 AM",
//       endTime: "31/12/2024 10.00 PM",
//       week: "Mon - Thu",
//       listUsed: "35",
//       priceBreaks: "15% Off Storewide",
//     },
//     {
//       name: "Summer Fashion Clearance",
//       posId: "12354",
//       store: "Beachside Mall",
//       startTime: "10/06/2024 10.00 AM",
//       endTime: "30/06/2024 07.00 PM",
//       week: "Mon, Wed, Fri",
//       listUsed: "18",
//       priceBreaks: "50% Off on All Summer Apparel",
//     },
//     {
//       name: "Tech Gadgets Sale",
//       posId: "12355",
//       store: "Tech Plaza",
//       startTime: "01/07/2024 09.00 AM",
//       endTime: "15/07/2024 08.00 PM",
//       week: "Tue, Thu, Sat",
//       listUsed: "60",
//       priceBreaks: "Buy 1, Get 1 30% Off on Gadgets",
//     },
//     {
//       name: "Furniture Overstock Sale",
//       posId: "12356",
//       store: "Home Goods Store",
//       startTime: "05/05/2024 09.00 AM",
//       endTime: "20/05/2024 07.00 PM",
//       week: "Mon, Fri, Sun",
//       listUsed: "22",
//       priceBreaks: "Up to 50% Off on Furniture",
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
//           Mix & Match Promotion List
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
//         headerName={"New Mix & Match Promotion"}
//         buttonName={"New Mix & Match Promotion"}
//         removeHeading={true}
//       />
//       {isLoading ? <div>loading ...</div> : <TableAll table={table} />}
//       <ToastContainer />
//     </div>
//   );
// };

// export default MixAndMatchPromo;
