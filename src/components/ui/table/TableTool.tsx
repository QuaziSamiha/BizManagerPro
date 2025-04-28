import FilterTable from "./FilterTable";
import { GrDocumentCsv } from "react-icons/gr";
import { GrDocumentPdf } from "react-icons/gr";
// import AddPromo from "@/components/storeManagement/promotions/PromoProductList/AddPromo";
// import AddMix from "@/components/storeManagement/promotions/MixAndMatchPromo/AddMix";
// import AddNewProduct from "@/components/inventoryFinancials/inventoryCount/Add";
// import AddCombo from "@/components/storeManagement/promotions/CombinationPromo/AddCombo";
// import FilterTransaction from "@/components/lossPrevention/FilterTransaction";
// import TableTrigger from "./TableTrigger";
import { ITableTool } from "@/interfaces/table";
import TablePagination from "./TablePagination";

const TableTool = <TData,>({
  table,
  isLoading,
  filtering,
  setFiltering,
}: ITableTool<TData>) => {
  return (
    <div className="flex justify-between items-center bg-violetPrimary bg-opacity-50 rounded-t-lg mt-5 px-14 py-1.5">
      <div className="flex items-center gap-5">
        {!isLoading && <TablePagination table={table} />}
        <FilterTable filtering={filtering} setFiltering={setFiltering} />
      </div>
      <div className="flex items-center gap-2.5">
        <GrDocumentPdf size={24} className="text-redPrimary" />
        <GrDocumentCsv size={24} className="text-blueTernary" />

        {/* {addTriggerButton && (
          <div className="ml-4">
            <TableTrigger
              open={addModalOpen}
              setOpen={setAddModalOpen}
              buttonName={buttonName}
              buttonIcon={ButtonIcon}
              modalTitle={modalTitle}
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
              {buttonName === "Filter Transaction" && (
                <FilterTransaction
                  setOpen={setAddModalOpen}
                  refetch={refetch}
                />
              )}
            </TableTrigger>
          </div>
        )} */}
      </div>
    </div>
  );
};

export default TableTool;

// import MainHeading from "../share/heading/MainHeading";
// import FilterTable from "./FilterTable";
// import TablePagination from "./TablePagination";
// import { GrDocumentCsv } from "react-icons/gr";
// import { GrDocumentPdf } from "react-icons/gr";
// import AddPromo from "@/components/storeManagement/promotions/PromoProductList/AddPromo";
// import AddMix from "@/components/storeManagement/promotions/MixAndMatchPromo/AddMix";
// import AddNewProduct from "@/components/inventoryFinancials/inventoryCount/Add";
// import AddCombo from "@/components/storeManagement/promotions/CombinationPromo/AddCombo";
// import FilterTransaction from "@/components/lossPrevention/FilterTransaction";

// interface IFilter {
//   filtering: string;
//   setFiltering: React.Dispatch<React.SetStateAction<string>>;
//   table: any;
//   data: any;
//   isLoading: boolean;
//   add?: any;
//   setAddModalOpen?: any;
//   addModalOpen?: any;
//   refetch?: any;
//   headerName?: any;
//   buttonName?: any;
//   removeHeading?: any;
//   addButton?:any;
// }

// const TableTool: React.FC<IFilter> = ({
//   filtering,
//   setFiltering,
//   isLoading,
//   table,
//   data,
//   add,
//   setAddModalOpen,
//   addModalOpen,
//   refetch,
//   headerName,
//   buttonName,
//   removeHeading,
//   addButton
// }) => {
//   return (
//     <div className="flex justify-between items-center bg-violetTernary bg-opacity-50 rounded-t-[10px] mt-5 px-7 py-3.5">
//       <div className="flex items-center gap-4">
//         {!isLoading && <TablePagination table={table} />}
//         <FilterTable
//           filtering={filtering}
//           setFiltering={setFiltering}
//           data={data}
//           table={table}
//         />
//       </div>
//       <div className="flex items-center gap-2.5">
//         <GrDocumentPdf size={24} />
//         <GrDocumentCsv size={24} />

//         {add && (
//           <div className="ml-4">
//             <MainHeading
//               open={addModalOpen}
//               setOpen={setAddModalOpen}
//               headerName={headerName}
//               buttonName={buttonName}
//               totalData=""
//               removeHeading={removeHeading}
//               addButton={addButton}
//             >
//               {buttonName === "New Promotional Product" && (
//                 <AddPromo setOpen={setAddModalOpen} refetch={refetch} />
//               )}
//               {buttonName === "New Mix & Match Promotion" && (
//                 <AddMix setOpen={setAddModalOpen} refetch={refetch} />
//               )}
//               {buttonName === "New Combination Promotion" && (
//                 <AddCombo setOpen={setAddModalOpen} refetch={refetch} />
//               )}
//               {buttonName === "New Product" && (
//                 <AddNewProduct setOpen={setAddModalOpen} refetch={refetch} />
//               )}
//               {buttonName === "Filter Transaction" && (
//                 <FilterTransaction setOpen={setAddModalOpen} refetch={refetch}/>
//               )}
//             </MainHeading>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default TableTool;
// import FilterTable from "./FilterTable";
// import { GrDocumentCsv } from "react-icons/gr";
// import { GrDocumentPdf } from "react-icons/gr";
// // import AddPromo from "@/components/storeManagement/promotions/PromoProductList/AddPromo";
// // import AddMix from "@/components/storeManagement/promotions/MixAndMatchPromo/AddMix";
// // import AddNewProduct from "@/components/inventoryFinancials/inventoryCount/Add";
// // import AddCombo from "@/components/storeManagement/promotions/CombinationPromo/AddCombo";
// // import FilterTransaction from "@/components/lossPrevention/FilterTransaction";
// // import TableTrigger from "./TableTrigger";
// import { ITableTool } from "@/interfaces/table";
// import TablePagination from "./TablePagination";

// const TableTool = ({
// // const TableTool: React.FC<ITableTool> = ({
//   filtering,
//   setFiltering,
//   isLoading,
//   table,
//   // data,
//   // refetch,
//   // addTriggerButton,
//   // buttonName,
//   // ButtonIcon,
//   // modalTitle,
//   // addModalOpen,
//   // setAddModalOpen,
// }) => {
//   return (
//     <div className="flex justify-between items-center bg-violetPrimary bg-opacity-50 rounded-t-lg mt-5 px-7 py-3.5">
//       <div className="flex items-center gap-4">
//         {!isLoading && <TablePagination />}
//         <FilterTable filtering={filtering} setFiltering={setFiltering} />
//       </div>
//       <div className="flex items-center gap-2.5">
//         <GrDocumentPdf size={24} className="text-redPrimary" />
//         <GrDocumentCsv size={24} className="text-stone-700" />

//         {/* {addTriggerButton && (
//           <div className="ml-4">
//             <TableTrigger
//               open={addModalOpen}
//               setOpen={setAddModalOpen}
//               buttonName={buttonName}
//               buttonIcon={ButtonIcon}
//               modalTitle={modalTitle}
//             >
//               {buttonName === "New Promotional Product" && (
//                 <AddPromo setOpen={setAddModalOpen} refetch={refetch} />
//               )}

//               {buttonName === "New Mix & Match Promotion" && (
//                 <AddMix setOpen={setAddModalOpen} refetch={refetch} />
//               )}
//               {buttonName === "New Combination Promotion" && (
//                 <AddCombo setOpen={setAddModalOpen} refetch={refetch} />
//               )}
//               {buttonName === "Filter Transaction" && (
//                 <FilterTransaction
//                   setOpen={setAddModalOpen}
//                   refetch={refetch}
//                 />
//               )}
//             </TableTrigger>
//           </div>
//         )} */}
//       </div>
//     </div>
//   );
// };

// export default TableTool;

// // import MainHeading from "../share/heading/MainHeading";
// // import FilterTable from "./FilterTable";
// // import TablePagination from "./TablePagination";
// // import { GrDocumentCsv } from "react-icons/gr";
// // import { GrDocumentPdf } from "react-icons/gr";
// // import AddPromo from "@/components/storeManagement/promotions/PromoProductList/AddPromo";
// // import AddMix from "@/components/storeManagement/promotions/MixAndMatchPromo/AddMix";
// // import AddNewProduct from "@/components/inventoryFinancials/inventoryCount/Add";
// // import AddCombo from "@/components/storeManagement/promotions/CombinationPromo/AddCombo";
// // import FilterTransaction from "@/components/lossPrevention/FilterTransaction";

// // interface IFilter {
// //   filtering: string;
// //   setFiltering: React.Dispatch<React.SetStateAction<string>>;
// //   table: any;
// //   data: any;
// //   isLoading: boolean;
// //   add?: any;
// //   setAddModalOpen?: any;
// //   addModalOpen?: any;
// //   refetch?: any;
// //   headerName?: any;
// //   buttonName?: any;
// //   removeHeading?: any;
// //   addButton?:any;
// // }

// // const TableTool: React.FC<IFilter> = ({
// //   filtering,
// //   setFiltering,
// //   isLoading,
// //   table,
// //   data,
// //   add,
// //   setAddModalOpen,
// //   addModalOpen,
// //   refetch,
// //   headerName,
// //   buttonName,
// //   removeHeading,
// //   addButton
// // }) => {
// //   return (
// //     <div className="flex justify-between items-center bg-violetTernary bg-opacity-50 rounded-t-[10px] mt-5 px-7 py-3.5">
// //       <div className="flex items-center gap-4">
// //         {!isLoading && <TablePagination table={table} />}
// //         <FilterTable
// //           filtering={filtering}
// //           setFiltering={setFiltering}
// //           data={data}
// //           table={table}
// //         />
// //       </div>
// //       <div className="flex items-center gap-2.5">
// //         <GrDocumentPdf size={24} />
// //         <GrDocumentCsv size={24} />

// //         {add && (
// //           <div className="ml-4">
// //             <MainHeading
// //               open={addModalOpen}
// //               setOpen={setAddModalOpen}
// //               headerName={headerName}
// //               buttonName={buttonName}
// //               totalData=""
// //               removeHeading={removeHeading}
// //               addButton={addButton}
// //             >
// //               {buttonName === "New Promotional Product" && (
// //                 <AddPromo setOpen={setAddModalOpen} refetch={refetch} />
// //               )}
// //               {buttonName === "New Mix & Match Promotion" && (
// //                 <AddMix setOpen={setAddModalOpen} refetch={refetch} />
// //               )}
// //               {buttonName === "New Combination Promotion" && (
// //                 <AddCombo setOpen={setAddModalOpen} refetch={refetch} />
// //               )}
// //               {buttonName === "New Product" && (
// //                 <AddNewProduct setOpen={setAddModalOpen} refetch={refetch} />
// //               )}
// //               {buttonName === "Filter Transaction" && (
// //                 <FilterTransaction setOpen={setAddModalOpen} refetch={refetch}/>
// //               )}
// //             </MainHeading>
// //           </div>
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default TableTool;
