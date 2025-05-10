import Loader from "@/components/ui/share/loader/Loader";
import dynamic from "next/dynamic";

const DynamicDashboard = dynamic(
  () => import("@/components/dashboard/Dashboard"),
  {
    loading: () => <Loader />,
  }
);

const DashboardPage = () => {
  return <DynamicDashboard />;
};

export default DashboardPage;
