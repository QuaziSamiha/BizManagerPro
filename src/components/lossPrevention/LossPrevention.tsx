"use client";
import { ToastContainer } from "react-toastify";
import ReportingPeriod from "./reportingPeriod/ReportingPeriod";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "../ui/dialog";
import Receipt from "./Receipt";
import { useMemo, useState } from "react";
import {
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";
import { useQuery } from "@tanstack/react-query";
import { getUsers } from "@/api/api";
import TooltipDiv from "../ui/share/TooltipDiv";
import { useDispatch } from "react-redux";
import { rowValue } from "@/redux/Reducer/MainSlice";
import TableAll from "../ui/table/Table";
import TableTool from "../ui/table/TableTool2";
import { RiFilter3Line } from "react-icons/ri";

const tableData = [
  {
    date: "09/01/2024",
    fromTime: "09:00 AM",
    toTime: "09:00 AM",
    register: "101",
    cashier: "John Doe",
    event_type: "Void Transaction",
    sale_amount: "$150.00",
    training_mode: "No",
  },
  {
    date: "09/01/2024",
    fromTime: "09:15 AM",
    toTime: "09:45 AM",
    register: "102",
    cashier: "Jane Smith",
    event_type: "Sale",
    sale_amount: "$200.00",
    training_mode: "Yes",
  },
  {
    date: "09/01/2024",
    fromTime: "10:00 AM",
    toTime: "10:30 AM",
    register: "103",
    cashier: "Jack Johnson",
    event_type: "Return",
    sale_amount: "$50.00",
    training_mode: "No",
  },
  {
    date: "09/01/2024",
    fromTime: "10:30 AM",
    toTime: "11:00 AM",
    register: "104",
    cashier: "Sarah Brown",
    event_type: "Sale",
    sale_amount: "$120.00",
    training_mode: "Yes",
  },
  {
    date: "09/01/2024",
    fromTime: "11:00 AM",
    toTime: "11:30 AM",
    register: "105",
    cashier: "Emily White",
    event_type: "Sale",
    sale_amount: "$180.00",
    training_mode: "No",
  },
  {
    date: "09/01/2024",
    fromTime: "11:30 AM",
    toTime: "12:00 PM",
    register: "106",
    cashier: "Chris Green",
    event_type: "Void Transaction",
    sale_amount: "$70.00",
    training_mode: "Yes",
  },
  {
    date: "09/01/2024",
    fromTime: "12:00 PM",
    toTime: "12:30 PM",
    register: "107",
    cashier: "Tom Davis",
    event_type: "Sale",
    sale_amount: "$250.00",
    training_mode: "No",
  },
  {
    date: "09/01/2024",
    fromTime: "12:30 PM",
    toTime: "01:00 PM",
    register: "108",
    cashier: "Olivia Lee",
    event_type: "Return",
    sale_amount: "$90.00",
    training_mode: "Yes",
  },
  {
    date: "09/01/2024",
    fromTime: "01:00 PM",
    toTime: "01:30 PM",
    register: "109",
    cashier: "Jacob Miller",
    event_type: "Sale",
    sale_amount: "$110.00",
    training_mode: "No",
  },
  {
    date: "09/01/2024",
    fromTime: "01:30 PM",
    toTime: "02:00 PM",
    register: "110",
    cashier: "Lucas Wilson",
    event_type: "Void Transaction",
    sale_amount: "$45.00",
    training_mode: "Yes",
  },
  {
    date: "09/01/2024",
    fromTime: "02:00 PM",
    toTime: "02:30 PM",
    register: "111",
    cashier: "Mia Turner",
    event_type: "Sale",
    sale_amount: "$250.00",
    training_mode: "Yes",
  },
  {
    date: "09/01/2024",
    fromTime: "02:30 PM",
    toTime: "03:00 PM",
    register: "112",
    cashier: "William Clark",
    event_type: "Return",
    sale_amount: "$120.00",
    training_mode: "No",
  },
  {
    date: "09/01/2024",
    fromTime: "03:00 PM",
    toTime: "03:30 PM",
    register: "113",
    cashier: "Emma Rodriguez",
    event_type: "Sale",
    sale_amount: "$180.00",
    training_mode: "Yes",
  },
  {
    date: "09/01/2024",
    fromTime: "03:30 PM",
    toTime: "04:00 PM",
    register: "114",
    cashier: "Daniel Scott",
    event_type: "Void Transaction",
    sale_amount: "$60.00",
    training_mode: "Yes",
  },
  {
    date: "09/01/2024",
    fromTime: "04:00 PM",
    toTime: "04:30 PM",
    register: "115",
    cashier: "Sophia Harris",
    event_type: "Sale",
    sale_amount: "$160.00",
    training_mode: "No",
  },
  {
    date: "09/01/2024",
    fromTime: "04:30 PM",
    toTime: "05:00 PM",
    register: "116",
    cashier: "Aiden Nelson",
    event_type: "Return",
    sale_amount: "$75.00",
    training_mode: "Yes",
  },
  {
    date: "09/01/2024",
    fromTime: "05:00 PM",
    toTime: "05:30 PM",
    register: "117",
    cashier: "Charlotte King",
    event_type: "Sale",
    sale_amount: "$210.00",
    training_mode: "No",
  },
  {
    date: "09/01/2024",
    fromTime: "05:30 PM",
    toTime: "06:00 PM",
    register: "118",
    cashier: "James Adams",
    event_type: "Sale",
    sale_amount: "$130.00",
    training_mode: "Yes",
  },
  {
    date: "09/01/2024",
    fromTime: "06:00 PM",
    toTime: "06:30 PM",
    register: "119",
    cashier: "Amelia Perez",
    event_type: "Void Transaction",
    sale_amount: "$85.00",
    training_mode: "No",
  },
  {
    date: "09/01/2024",
    fromTime: "06:30 PM",
    toTime: "07:00 PM",
    register: "120",
    cashier: "Benjamin Taylor",
    event_type: "Sale",
    sale_amount: "$260.00",
    training_mode: "Yes",
  },
  {
    date: "09/01/2024",
    fromTime: "07:00 PM",
    toTime: "07:30 PM",
    register: "121",
    cashier: "Harper Carter",
    event_type: "Sale",
    sale_amount: "$190.00",
    training_mode: "No",
  },
  {
    date: "09/01/2024",
    fromTime: "07:30 PM",
    toTime: "08:00 PM",
    register: "122",
    cashier: "Alexander Young",
    event_type: "Void Transaction",
    sale_amount: "$100.00",
    training_mode: "Yes",
  },
  {
    date: "09/01/2024",
    fromTime: "08:00 PM",
    toTime: "08:30 PM",
    register: "123",
    cashier: "Scarlett Walker",
    event_type: "Return",
    sale_amount: "$45.00",
    training_mode: "No",
  },
  {
    date: "09/01/2024",
    fromTime: "08:30 PM",
    toTime: "09:00 PM",
    register: "124",
    cashier: "Elijah Hall",
    event_type: "Sale",
    sale_amount: "$220.00",
    training_mode: "Yes",
  },
];

const LossPrevention = () => {
  // const [editData, setEditData] = useState<EditDataProps | null>(null);
  const [filterModalOpen, setFilterModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);

  const dispatch = useDispatch();

  const handleEdit = (rowData: any) => {
    dispatch(rowValue(rowData));
    // setEditData(rowData);
    setEditModalOpen(true);
  };

  const COLUMNS = [
    {
      header: "Date",
      accessorKey: "date",
      enableColumnFilter: false,
      enableSorting: false,
    },
    {
      header: "From",
      accessorKey: "fromTime",
      enableColumnFilter: false,
      enableSorting: false,
    },
    {
      header: "To",
      accessorKey: "toTime",
      enableColumnFilter: false,
      enableSorting: false,
    },
    {
      header: "Register",
      accessorKey: "register",
      enableColumnFilter: false,
      enableSorting: false,
    },
    {
      header: "Cashier",
      accessorKey: "cashier",
      enableColumnFilter: false,
      enableSorting: false,
    },
    {
      header: "Event Type",
      accessorKey: "event_type",
      enableColumnFilter: false,
      enableSorting: false,
    },
    {
      header: "Sale Amount",
      accessorKey: "sale_amount",
      enableColumnFilter: false,
      enableSorting: false,
    },
    {
      header: "Training Mode",
      accessorKey: "training_mode",
      enableColumnFilter: false,
      enableSorting: false,
    },
    {
      header: "Action",
      accessor: "download",
      enableSorting: false,
      cell: (row: any) => (
        <div className="flex gap-3 justify-center items-center w-full">
          <button onClick={() => handleEdit(row.row.original)} className="flex">
            <TooltipDiv name="Download" />
          </button>
        </div>
      ),
    },
  ];

  const {
    isLoading,
    isError,
    data: allUserData,
    refetch,
  } = useQuery({
    queryKey: ["allUserData"],
    queryFn: () => getUsers(),
  });

  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => tableData, [tableData]);

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
    <section className="flex flex-col gap-5">
      <p className="text-textPrimary font-bold text-xl">Loss Prevention</p>
      <ReportingPeriod />

      <div>
        <TableTool
          table={table}
          filtering={filtering}
          setFiltering={setFiltering}
          data={data}
          isLoading={isLoading}
          addTableButton={true}
          buttonName="Filter Transaction"
          addModalOpen={filterModalOpen}
          setAddModalOpen={setFilterModalOpen}
          buttonIcon={<RiFilter3Line size={20} />}
        />

        {isLoading ? <div>loading ...</div> : <TableAll table={table} />}

        <Dialog open={editModalOpen} onOpenChange={setEditModalOpen}>
          <DialogTitle></DialogTitle>
          <DialogContent className="bg-transparent w-[20vw]" showCross={false}>
            <Receipt />
          </DialogContent>
        </Dialog>

        <ToastContainer />
      </div>
    </section>
  );
};

export default LossPrevention;
