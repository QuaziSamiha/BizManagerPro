import Loader from "@/components/ui/share/loader/Loader";
import dynamic from "next/dynamic";

const DynamicDepartment = dynamic(
  () => import("@/components/storeManagement/department/Department"),
  { loading: () => <Loader /> }
);
const page = () => {
  return <DynamicDepartment />;
};

export default page;
