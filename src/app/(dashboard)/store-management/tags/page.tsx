import Loader from "@/components/ui/share/loader/Loader";
import dynamic from "next/dynamic";

const DynamicTags = dynamic(
  () => import("@/components/storeManagement/tags/Tags"),
  { loading: () => <Loader /> }
);

const page = () => {
  return <DynamicTags />;
};

export default page;

// ! THIS SECTION OF THE MODULE IS REMOVED 
