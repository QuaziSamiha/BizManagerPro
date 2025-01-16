import Loader from "@/components/ui/share/loader/Loader";
import dynamic from "next/dynamic";

const DynamicLossPrevention = dynamic(
  () => import("@/components/lossPrevention/LossPrevention"),
  { loading: () => <Loader /> }
);

const page = () => {
  return <DynamicLossPrevention />;
};

export default page;
