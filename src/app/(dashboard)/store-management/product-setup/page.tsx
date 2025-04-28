import Loader from "@/components/ui/share/loader/Loader";
import dynamic from "next/dynamic";

const DynamicProductSetup = dynamic(
  () => import("@/components/storeManagement/productSetup/ProductSetup"),
  {
    loading: () => <Loader />,
  }
);

const ProductSetupPage = () => {
  return <DynamicProductSetup />;
};

export default ProductSetupPage;
