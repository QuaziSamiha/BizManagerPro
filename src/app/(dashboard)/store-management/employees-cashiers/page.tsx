import Loader from "@/components/ui/share/loader/Loader";
import dynamic from "next/dynamic";

const DynamicEmployeesCashiers = dynamic(
  () =>
    import("@/components/storeManagement/employeesCashiers/EmployeesCashiers"),
  {
    loading: () => <Loader />,
  }
);

const page = () => {
  return <DynamicEmployeesCashiers />;
};

export default page;
