import Loader from "@/components/ui/share/loader/Loader";
import dynamic from "next/dynamic";

const DynamicInventoryManagement = dynamic(
  () => import("@/components/userManagement/inventoryManagement/InventoryManagement"),
  { loading: () => <Loader /> }
);

const page = () => {
  return <DynamicInventoryManagement />;
};

export default page;
