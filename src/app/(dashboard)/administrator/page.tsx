import Loader from "@/components/ui/share/loader/Loader";
import dynamic from "next/dynamic";

const DynamicAdministrator = dynamic(
  () => import("@/components/administrator/Administrator"),
  {
    loading: () => <Loader />,
  }
);

const page = () => {
  return <DynamicAdministrator />;
};

export default page;
