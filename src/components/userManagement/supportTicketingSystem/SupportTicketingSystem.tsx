"use client";
import { getUsers } from "@/api/api";
import { DialogContent } from "@/components/ui/dialog";
import MainHeading from "@/components/ui/share/mainHeading/MainHeading";
import TooltipDiv from "@/components/ui/share/TooltipDiv";
import Table from "@/components/ui/table/Table";
import TableTool from "@/components/ui/table/TableTool";
import { rowValue } from "@/redux/Reducer/MainSlice";
import { Dialog } from "@radix-ui/react-dialog";
import { useQuery } from "@tanstack/react-query";
import {
  ColumnDef,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";
import { useMemo, useState } from "react";
import { useDispatch } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Edit from "./Edit";
import Add from "./Add";

interface IRow {
  ticketId: string;
  title: string;
  category: string;
  priority: string;
  status: string;
  createdOn: string;
}

const ticketsData: IRow[] = [
  {
    ticketId: "T-001",
    title: "Unable to access dashboard",
    category: "Technical Issue",
    priority: "High",
    status: "Open",
    createdOn: "20/01/2025",
  },
  {
    ticketId: "T-002",
    title: "Incorrect invoice generated",
    category: "Billing",
    priority: "Critical",
    status: "In Progress",
    createdOn: "19/01/2025",
  },
  {
    ticketId: "T-003",
    title: "Request for additional storage",
    category: "Service Request",
    priority: "Medium",
    status: "Resolved",
    createdOn: "18/01/2025",
  },
  {
    ticketId: "T-004",
    title: "Slow application performance",
    category: "Performance",
    priority: "High",
    status: "Pending",
    createdOn: "17/01/2025",
  },
  {
    ticketId: "T-005",
    title: "Unable to login with SSO",
    category: "Authentication",
    priority: "Critical",
    status: "Open",
    createdOn: "16/01/2025",
  },
  {
    ticketId: "T-006",
    title: "Add new users to the system",
    category: "Access Request",
    priority: "Low",
    status: "Completed",
    createdOn: "15/01/2025",
  },
  {
    ticketId: "T-007",
    title: "Report generation failing",
    category: "Technical Issue",
    priority: "High",
    status: "In Progress",
    createdOn: "14/01/2025",
  },
  {
    ticketId: "T-008",
    title: "Feedback form not working",
    category: "Bug Report",
    priority: "Medium",
    status: "Pending",
    createdOn: "13/01/2025",
  },
  {
    ticketId: "T-009",
    title: "Backup request for last month",
    category: "Service Request",
    priority: "Low",
    status: "Resolved",
    createdOn: "12/01/2025",
  },
  {
    ticketId: "T-010",
    title: "UI inconsistency in dark mode",
    category: "UI/UX",
    priority: "Low",
    status: "Completed",
    createdOn: "11/01/2025",
  },
  {
    ticketId: "T-011",
    title: "Add new category in dropdown",
    category: "Feature Request",
    priority: "Medium",
    status: "Open",
    createdOn: "10/01/2025",
  },
  {
    ticketId: "T-012",
    title: "Broken link in FAQ section",
    category: "Bug Report",
    priority: "Low",
    status: "Pending",
    createdOn: "09/01/2025",
  },
  {
    ticketId: "T-013",
    title: "API rate limiting issue",
    category: "Technical Issue",
    priority: "High",
    status: "In Progress",
    createdOn: "08/01/2025",
  },
  {
    ticketId: "T-014",
    title: "Request for detailed audit log",
    category: "Feature Request",
    priority: "Medium",
    status: "Open",
    createdOn: "07/01/2025",
  },
  {
    ticketId: "T-015",
    title: "Improve loading speed for charts",
    category: "Performance",
    priority: "High",
    status: "Resolved",
    createdOn: "06/01/2025",
  },
  {
    ticketId: "T-016",
    title: "Reset password link not working",
    category: "Authentication",
    priority: "Critical",
    status: "Pending",
    createdOn: "05/01/2025",
  },
  {
    ticketId: "T-017",
    title: "Request for software update",
    category: "Service Request",
    priority: "Low",
    status: "Completed",
    createdOn: "04/01/2025",
  },
  {
    ticketId: "T-018",
    title: "Enable multi-factor authentication",
    category: "Security",
    priority: "High",
    status: "Open",
    createdOn: "03/01/2025",
  },
  {
    ticketId: "T-019",
    title: "Fix image upload limit",
    category: "Bug Report",
    priority: "Critical",
    status: "In Progress",
    createdOn: "02/01/2025",
  },
  {
    ticketId: "T-020",
    title: "Add support for new languages",
    category: "Feature Request",
    priority: "Medium",
    status: "Pending",
    createdOn: "01/01/2025",
  },
  {
    ticketId: "T-021",
    title: "Configure email notifications",
    category: "Configuration",
    priority: "Low",
    status: "Resolved",
    createdOn: "31/12/2024",
  },
  {
    ticketId: "T-022",
    title: "Incorrect data in analytics",
    category: "Technical Issue",
    priority: "Critical",
    status: "Open",
    createdOn: "30/12/2024",
  },
  {
    ticketId: "T-023",
    title: "Request new user manual",
    category: "Documentation",
    priority: "Low",
    status: "Completed",
    createdOn: "29/12/2024",
  },
  {
    ticketId: "T-024",
    title: "UI alignment in mobile view",
    category: "UI/UX",
    priority: "Medium",
    status: "Pending",
    createdOn: "28/12/2024",
  },
  {
    ticketId: "T-025",
    title: "System health report automation",
    category: "Feature Request",
    priority: "High",
    status: "In Progress",
    createdOn: "27/12/2024",
  },
];

const SupportTicketingSystem = () => {
  const [addModalOpen, setAddModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const dispatch = useDispatch();

  const handleEdit = (rowData: IRow) => {
    dispatch(rowValue(rowData));
    // setEditData(rowData);
    setEditModalOpen(true);
  };

  const COLUMNS: ColumnDef<IRow>[] = [
    {
      header: "Ticket ID",
      accessorKey: "ticketId",
      enableColumnFilter: false,
      enableSorting: false,
    },
    {
      header: "Title",
      accessorKey: "title",
      enableColumnFilter: false,
      enableSorting: false,
    },
    {
      header: "Category",
      accessorKey: "category",
      enableColumnFilter: false,
      enableSorting: false,
    },
    {
      header: "Priority",
      accessorKey: "priority",
      enableColumnFilter: false,
      enableSorting: false,
    },
    {
      header: "Status",
      accessorKey: "status",
      enableColumnFilter: false,
      enableSorting: false,
    },
    {
      header: "Created On",
      accessorKey: "createdOn",
      enableColumnFilter: false,
      enableSorting: false,
    },
    {
      header: "Action",
      id: "edit",
      enableSorting: false,
      cell: (row) => {
        return (
          <div className="flex gap-3 justify-center items-center w-full">
            <button
              onClick={() => handleEdit(row.row.original)}
              className="flex"
            >
              <TooltipDiv name="Edit" />
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
  const data = useMemo(() => ticketsData, []);

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
        headerName="Support Ticketing System"
        subHeader="Ticketing List"
        open={addModalOpen}
        setOpen={setAddModalOpen}
        buttonName="New Ticket"
        modalTitle="Create New Ticket"
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

      <Dialog open={editModalOpen} onOpenChange={setEditModalOpen}>
        <DialogContent className="bg-white w-[50vw]">
          <Edit setOpen={setEditModalOpen} refetch={refetch} />
        </DialogContent>
      </Dialog>

      <ToastContainer />
    </div>
  );
};

export default SupportTicketingSystem;
