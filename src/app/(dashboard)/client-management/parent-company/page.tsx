import Loader from "@/components/ui/share/loader/Loader";
import dynamic from "next/dynamic";

const DynamicParentCompany = dynamic(
  () => import("@/components/clientManagement/parentCompany/ParentCompany"),
  {
    loading: () => <Loader />,
  }
);

const ParentCompanyPage = () => {
  return <DynamicParentCompany />;
};

export default ParentCompanyPage;
