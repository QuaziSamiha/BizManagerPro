import Loader from "@/components/ui/share/loader/Loader";
import dynamic from "next/dynamic";

const DynamicPromotions = dynamic(
  () => import("@/components/storeManagement/promotions/Promotions"),
  {
    loading: () => <Loader />,
  }
);

const page = () => {
  return <DynamicPromotions />;
};

export default page;
