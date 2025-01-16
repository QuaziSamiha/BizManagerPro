import FilterTable from "./FilterTable";
import TablePagination from "./TablePagination";
import { GrDocumentCsv } from "react-icons/gr";
import { GrDocumentPdf } from "react-icons/gr";
import AddPromo from "@/components/storeManagement/promotions/PromoProductList/AddPromo";
import AddMix from "@/components/storeManagement/promotions/MixAndMatchPromo/AddMix";
// import AddNewProduct from "@/components/inventoryFinancials/inventoryCount/Add";
import AddCombo from "@/components/storeManagement/promotions/CombinationPromo/AddCombo";
import FilterTransaction from "@/components/lossPrevention/FilterTransaction";
import TableTrigger from "./TableTrigger";
import { ReactNode } from "react";

interface IFilter {
  filtering: string;
  setFiltering: React.Dispatch<React.SetStateAction<string>>;
  isLoading: boolean;
  table: any;
  data: any;
  refetch?: any;
  addTableButton?: boolean;
  buttonName?: string;
  buttonIcon?: ReactNode;
  setAddModalOpen?: any;
  addModalOpen?: any;
}

const TableTool: React.FC<IFilter> = ({
  filtering,
  setFiltering,
  isLoading,
  table,
  data,
  refetch,
  addTableButton,
  buttonName,
  buttonIcon,
  addModalOpen,
  setAddModalOpen,
}) => {
  return (
    <div className="flex justify-between items-center bg-violetTernary bg-opacity-50 rounded-t-[10px] mt-5 px-7 py-3.5">
      <div className="flex items-center gap-4">
        {!isLoading && <TablePagination table={table} />}
        <FilterTable
          filtering={filtering}
          setFiltering={setFiltering}
          data={data}
          table={table}
        />
      </div>
      <div className="flex items-center gap-2.5">
        <GrDocumentPdf size={24} />
        <GrDocumentCsv size={24} />

        {addTableButton && (
          <div className="ml-4">
            <TableTrigger
              open={addModalOpen}
              setOpen={setAddModalOpen}
              buttonName={buttonName}
              buttonIcon={buttonIcon}
            >
              {buttonName === "New Promotional Product" && (
                <AddPromo setOpen={setAddModalOpen} refetch={refetch} />
              )}

              {buttonName === "New Mix & Match Promotion" && (
                <AddMix setOpen={setAddModalOpen} refetch={refetch} />
              )}
              {buttonName === "New Combination Promotion" && (
                <AddCombo setOpen={setAddModalOpen} refetch={refetch} />
              )}
              {/* {buttonName === "New Product" && (
                <AddNewProduct setOpen={setAddModalOpen} refetch={refetch} />
              )} */}
              {buttonName === "Filter Transaction" && (
                <FilterTransaction
                  setOpen={setAddModalOpen}
                  refetch={refetch}
                />
              )}
            </TableTrigger>
          </div>
        )}
      </div>
    </div>
  );
};

export default TableTool;
