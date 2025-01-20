"use client";

import { useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getUsers } from "@/api/api";
import { useDispatch } from "react-redux";
import { rowValue } from "@/redux/Reducer/MainSlice";
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
import MainHeading from "@/components/ui/share/heading/MainHeading";
import RegConfiguration from "../regConfiguration/RegConfiguration";

// ========== PROPS TYPE ==============
interface IProps {
  handleOpen: () => void;
}

// ======= DEMO STATIC DATA ========
const demoData = [
  {
    no: "1",
    name: "John Doe",
    code: "POS001",
  },
  {
    no: "2",
    name: "Jane Smith",
    code: "POS002",
  },
  {
    no: "3",
    name: "Alice Johnson",
    code: "POS003",
  },
  {
    no: "4",
    name: "Bob Brown",
    code: "POS004",
  },
  {
    no: "5",
    name: "Charlie Black",
    code: "POS005",
  },
  {
    no: "6",
    name: "Diana White",
    code: "POS006",
  },
];

const RegisterList: React.FC<IProps> = ({ handleOpen }) => {
  // const [editData, setEditData] = useState(null);
  const [editRegister, setEditRegister] = useState(false);
  // ======== TABLE STATES ==============
  const [sorting, setSorting] = useState<SortingState>([]);
  const [filtering, setFiltering] = useState("");
  const [columnVisibility, setColumnVisibility] = useState({});

  const dispatch = useDispatch();

  // ============= EDIT SPECIFIC ROW ===========
  const handleEdit = (rowData: { no: string; name: string; code: string }) => {
    dispatch(rowValue(rowData));
    // setEditData(rowData);
    setEditRegister(true);
  };

  // =========== HANDLE EDIT ==========
  const controlEdit = () => {
    setEditRegister((prev: boolean) => !prev);
  };

  // ========= COLUMN'S DATA =========
  const COLUMNS = [
    {
      header: "No.",
      accessorKey: "no",
      enableColumnFilter: false,
      enableSorting: false,
    },
    {
      header: "Name",
      accessorKey: "name",
      enableColumnFilter: false,
      enableSorting: false,
    },
    {
      header: "POS Code",
      accessorKey: "code",
      enableColumnFilter: false,
      enableSorting: false,
    },
    {
      header: "Action",
      accessor: "edit",
      enableSorting: false,
      cell: (row: {
        row: { original: { no: string; name: string; code: string } };
      }) => (
        <div className="flex gap-3 justify-center items-center w-full">
          <button onClick={() => handleEdit(row.row.original)} className="flex">
            <TooltipDiv name="Edit" />
          </button>
        </div>
      ),
    },
  ];

  // ========= FETCHING DATA =========
  const {
    isLoading,
    isError,
    data: allUserData,
    refetch,
  } = useQuery({
    queryKey: ["allUserData"],
    queryFn: () => getUsers(),
  });

  // ===========  ASSIGNING COLUMN AND DATA ==========
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => demoData, []);

  // =================  TABLE FUNCTIONALITIES =============
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
      {editRegister ? (
        // ============= EDIT REGISTERED INFORMATION =================
        <RegConfiguration handleOpen={controlEdit} isDisable={true} />
      ) : (
        // ========== ALL REGISTER LIST (TABLE) ===========
        <div>
          <MainHeading
            headerName="Register List"
            totalData="11 registers"
            buttonName="New Register"
            setOpen={handleOpen}
          ></MainHeading>

          <TableTool
            table={table}
            filtering={filtering}
            setFiltering={setFiltering}
            data={data}
            isLoading={isLoading}
          />
          {isLoading ? <div>loading ...</div> : <TableAll table={table} />}
        </div>
      )}
    </div>
  );
};

export default RegisterList;
