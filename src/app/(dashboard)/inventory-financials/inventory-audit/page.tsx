import Loader from "@/components/ui/share/loader/Loader";
import dynamic from "next/dynamic";

const DynamicInventoryAudit = dynamic(
  () =>
    import("@/components/inventoryFinancials/inventoryAudit/InventoryAudit"),
  { loading: () => <Loader /> }
);
const page = () => {
  return <DynamicInventoryAudit />;
};

export default page;
