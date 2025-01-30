"use client";
import { getUsers } from "@/api/api";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import MainHeading from "@/components/ui/share/mainHeading/MainHeading";
import TooltipDiv from "@/components/ui/share/TooltipDiv";
import Table from "@/components/ui/table/Table";
import TableTool from "@/components/ui/table/TableTool";
import { rowValue } from "@/redux/Reducer/MainSlice";
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
import Add from "./Add";

interface IRow {
  date: string;
  clientName: string;
  surveyTitle: string;
  feedback: string;
}

const feedbackSurveyData: IRow[] = [
  {
    date: "01/01/2025",
    clientName: "Agora",
    surveyTitle: "Customer Satisfaction Survey",
    feedback: "Very positive response",
  },
  {
    date: "02/01/2025",
    clientName: "Mina Bazaar",
    surveyTitle: "Product Availability Feedback",
    feedback: "Stock is well managed",
  },
  {
    date: "03/01/2025",
    clientName: "Shopno",
    surveyTitle: "Service Quality Check",
    feedback: "Friendly staff, excellent service",
  },
  {
    date: "04/01/2025",
    clientName: "Agora",
    surveyTitle: "Pricing Feedback",
    feedback: "Affordable prices but some high-demand items missing",
  },
  {
    date: "05/01/2025",
    clientName: "Mina Bazaar",
    surveyTitle: "Customer Loyalty Survey",
    feedback: "Great loyalty program benefits",
  },
  {
    date: "06/01/2025",
    clientName: "Shopno",
    surveyTitle: "Shopping Experience Survey",
    feedback: "Excellent checkout process",
  },
  {
    date: "07/01/2025",
    clientName: "Agora",
    surveyTitle: "Product Feedback",
    feedback: "Quality is consistent across items",
  },
  {
    date: "08/01/2025",
    clientName: "Mina Bazaar",
    surveyTitle: "Service Improvement Survey",
    feedback: "Suggestion for more checkout counters",
  },
  {
    date: "09/01/2025",
    clientName: "Shopno",
    surveyTitle: "Weekend Rush Feedback",
    feedback: "Crowded but managed well",
  },
  {
    date: "10/01/2025",
    clientName: "Agora",
    surveyTitle: "Seasonal Products Survey",
    feedback: "Winter collection is fantastic",
  },
  {
    date: "11/01/2025",
    clientName: "Mina Bazaar",
    surveyTitle: "Delivery Service Feedback",
    feedback: "Quick and reliable delivery",
  },
  {
    date: "12/01/2025",
    clientName: "Shopno",
    surveyTitle: "Product Variety Survey",
    feedback: "Wide range of choices available",
  },
  {
    date: "13/01/2025",
    clientName: "Agora",
    surveyTitle: "Customer Behavior Survey",
    feedback: "Repeat customers increasing",
  },
  {
    date: "14/01/2025",
    clientName: "Mina Bazaar",
    surveyTitle: "Staff Attitude Feedback",
    feedback: "Staff is very courteous",
  },
  {
    date: "15/01/2025",
    clientName: "Shopno",
    surveyTitle: "Facility Cleanliness Survey",
    feedback: "Always neat and tidy",
  },
  {
    date: "16/01/2025",
    clientName: "Agora",
    surveyTitle: "Promotional Campaign Survey",
    feedback: "Discounts are attractive",
  },
  {
    date: "17/01/2025",
    clientName: "Mina Bazaar",
    surveyTitle: "Holiday Season Survey",
    feedback: "Festive items well stocked",
  },
  {
    date: "18/01/2025",
    clientName: "Shopno",
    surveyTitle: "Checkout Feedback",
    feedback: "Efficient queue management",
  },
  {
    date: "19/01/2025",
    clientName: "Agora",
    surveyTitle: "Product Labeling Feedback",
    feedback: "Clear and informative labels",
  },
  {
    date: "20/01/2025",
    clientName: "Mina Bazaar",
    surveyTitle: "Bakery Products Feedback",
    feedback: "Fresh and delicious items",
  },
  {
    date: "21/01/2025",
    clientName: "Shopno",
    surveyTitle: "Organic Products Survey",
    feedback: "Great range of organic items",
  },
  {
    date: "22/01/2025",
    clientName: "Agora",
    surveyTitle: "Payment Options Survey",
    feedback: "Multiple options make it easy",
  },
  {
    date: "23/01/2025",
    clientName: "Mina Bazaar",
    surveyTitle: "Weekend Sales Survey",
    feedback: "High volume but smooth",
  },
  {
    date: "24/01/2025",
    clientName: "Shopno",
    surveyTitle: "Mobile App Feedback",
    feedback: "App is user-friendly and intuitive",
  },
  {
    date: "25/01/2025",
    clientName: "Agora",
    surveyTitle: "Special Offers Feedback",
    feedback: "Great offers and value packs",
  },
];

const FeedbackSurveyManagement = () => {
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
      header: "Date",
      accessorKey: "date",
      enableColumnFilter: false,
      enableSorting: false,
    },
    {
      header: "Client Name",
      accessorKey: "clientName",
      enableColumnFilter: false,
      enableSorting: false,
    },
    {
      header: "Survey Title",
      accessorKey: "surveyTitle",
      enableColumnFilter: false,
      enableSorting: false,
    },
    {
      header: "Feedback",
      accessorKey: "feedback",
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
  const data = useMemo(() => feedbackSurveyData, []);

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
        headerName="Recent Feedback Summary"
        open={addModalOpen}
        setOpen={setAddModalOpen}
        buttonName="New Survey"
        modalTitle="Create New Survey"
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
          {/* <View /> */}
          <div>hekk</div>
        </DialogContent>
      </Dialog>

      <ToastContainer />
    </div>
  );
};

export default FeedbackSurveyManagement;
