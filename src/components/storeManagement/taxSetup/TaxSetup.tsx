"use client";

// ===== IMPORT NECESSARY MODULES AND COMPONENTS =====
import MainHeading from "@/components/ui/share/heading/MainHeading";
import TableTool from "@/components/ui/table/TableTool";
import {
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";
import { useMemo, useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TableAll from "@/components/ui/table/TableAll";
import { useQuery } from "@tanstack/react-query";
import { getUsers } from "@/api/api";
import Add from "./Add";

// ======== SAMPLE TAX DATA =======
const taxData = [
  {
    id: 1,
    taxName: "Sales Tax",
    taxDescription: "Tax on sales of goods and services",
    from_date: "01/01/2024",
    to_date: "01/31/2024",
    status: "Active",
  },
  {
    id: 2,
    taxName: "Income Tax",
    taxDescription: "Tax on individual and corporate income",
    from_date: "02/01/2024",
    to_date: "02/28/2024",
    status: "Inactive",
  },
  {
    id: 3,
    taxName: "Property Tax",
    taxDescription: "Tax on property ownership",
    from_date: "03/01/2024",
    to_date: "03/31/2024",
    status: "Active",
  },
  {
    id: 4,
    taxName: "Value Added Tax (VAT)",
    taxDescription: "Tax on value added to goods and services",
    from_date: "04/01/2024",
    to_date: "04/30/2024",
    status: "Inactive",
  },
  {
    id: 5,
    taxName: "Corporate Tax",
    taxDescription: "Tax on corporate profits",
    from_date: "05/01/2024",
    to_date: "05/31/2024",
    status: "Inactive",
  },
  {
    id: 6,
    taxName: "Excise Tax",
    taxDescription: "Tax on specific goods like alcohol and tobacco",
    from_date: "06/01/2024",
    to_date: "06/30/2024",
    status: "Active",
  },
  {
    id: 7,
    taxName: "Payroll Tax",
    taxDescription: "Tax on employee wages",
    from_date: "07/01/2024",
    to_date: "07/31/2024",
    status: "Inactive",
  },
  {
    id: 8,
    taxName: "Capital Gains Tax",
    taxDescription: "Tax on profits from asset sales",
    from_date: "08/01/2024",
    to_date: "08/31/2024",
    status: "Active",
  },
  {
    id: 9,
    taxName: "Inheritance Tax",
    taxDescription: "Tax on inherited assets",
    from_date: "09/01/2024",
    to_date: "09/30/2024",
    status: "Inactive",
  },
  {
    id: 10,
    taxName: "Gift Tax",
    taxDescription: "Tax on gifts above a certain value",
    from_date: "10/01/2024",
    to_date: "10/31/2024",
    status: "Inactive",
  },
  {
    id: 11,
    taxName: "Luxury Tax",
    taxDescription: "Tax on luxury goods",
    from_date: "11/01/2024",
    to_date: "11/30/2024",
    status: "Active",
  },
  {
    id: 12,
    taxName: "Environmental Tax",
    taxDescription: "Tax on activities harmful to the environment",
    from_date: "12/01/2024",
    to_date: "12/31/2024",
    status: "Inactive",
  },
  {
    id: 13,
    taxName: "Self-Employment Tax",
    taxDescription: "Tax on self-employed individuals",
    from_date: "01/01/2025",
    to_date: "01/31/2025",
    status: "Active",
  },
  {
    id: 14,
    taxName: "Import Duty",
    taxDescription: "Tax on imported goods",
    from_date: "02/01/2025",
    to_date: "02/28/2025",
    status: "Inactive",
  },
  {
    id: 15,
    taxName: "Export Duty",
    taxDescription: "Tax on exported goods",
    from_date: "03/01/2025",
    to_date: "03/31/2025",
    status: "Inactive",
  },
];

const TaxSetup = () => {
  // STATE TO CONTROL FILTER MODAL OPEN/CLOSE
  const [filterModalOpen, setFilterModalOpen] = useState(false);

  // FETCH DATA USING REACT-QUERY
  const { isLoading, refetch } = useQuery({
    queryKey: ["allUserData"],
    queryFn: () => getUsers(),
  });

  // =========== DEFINE TABLE COLUMNS ========
  const COLUMNS = [
    {
      header: "No.",
      accessorKey: "id",
      enableColumnFilter: false,
      enableSorting: false,
    },
    {
      header: "Name",
      accessorKey: "taxName",
      enableColumnFilter: false,
      enableSorting: false,
    },
    {
      header: "Description",
      accessorKey: "taxDescription",
      enableColumnFilter: false,
      enableSorting: false,
    },
    {
      header: "From Date",
      accessorKey: "from_date",
      enableColumnFilter: false,
      enableSorting: false,
    },
    {
      header: "To Date",
      accessorKey: "to_date",
      enableColumnFilter: false,
      enableSorting: false,
    },
    {
      header: "Status",
      accessorKey: "status",
      enableColumnFilter: false,
      enableSorting: false,
    },
  ];

  // ===== MEMOIZE COLUMNS AND DATA TO AVOID UNNECESSARY RE-RENDERS ====
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => taxData, [taxData]);

  // ========= STATE FOR TABLE FUNCTIONALITY ========
  const [sorting, setSorting] = useState<SortingState>([]);
  const [filtering, setFiltering] = useState<string>("");
  const [columnVisibility, setColumnVisibility] = useState<{}>({});

  // ======== INITIALIZE TABLE WITH REACT TABLE HOOKS =======
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
        headerName="Tax Setup"
        buttonName="New Tax Setup"
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

      <ToastContainer />
    </div>
  );
};

export default TaxSetup;
