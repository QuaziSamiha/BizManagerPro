import Loader from "@/components/ui/share/loader/Loader";
import dynamic from "next/dynamic";

const DynamicProducts = dynamic(
  () => import("@/components/storeManagement/products/Products"),
  { loading: () => <Loader /> }
);

const page = () => {
  return <DynamicProducts />;
};

export default page;
