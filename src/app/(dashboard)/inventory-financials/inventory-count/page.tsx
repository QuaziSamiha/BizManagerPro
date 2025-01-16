import Loader from "@/components/ui/share/loader/Loader";
import dynamic from "next/dynamic";

const DynamicInventoryCount = dynamic(
  () => import("@/components/inventoryFinancials/inventoryCount/InventoryCount"),
  { loading: () => <Loader /> }
);
const page = () => {
  return <DynamicInventoryCount />;
};

export default page;
