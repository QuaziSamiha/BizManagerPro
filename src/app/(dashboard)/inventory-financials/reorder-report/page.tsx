import Loader from "@/components/ui/share/loader/Loader";
import dynamic from "next/dynamic";

const DynamicReorderReport = dynamic(
  () => import("@/components/inventoryFinancials/reorder-report/ReorderReport"),
  { loading: () => <Loader /> }
);

const page = () => {
  return <DynamicReorderReport />;
};

export default page;
