import Loader from "@/components/ui/share/loader/Loader";
import dynamic from "next/dynamic";

const DynamicRegisters = dynamic(
  () => import("@/components/storeManagement/registers/Registers"),
  { loading: () => <Loader /> }
);

const page = () => {
  return <DynamicRegisters />;
};

export default page;
