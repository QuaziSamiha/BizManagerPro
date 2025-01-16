import Loader from "@/components/ui/share/loader/Loader";
// IMPORT DYNAMIC FUNCTION FROM NEXT/DYNAMIC FOR DYNAMIC IMPORTS
import dynamic from "next/dynamic";

// DYNAMICALLY IMPORT THE TAX-SETUP COMPONENT WITH A LOADER
const DynamicTaxSetup = dynamic(
  () => import("@/components/storeManagement/taxSetup/TaxSetup"),
  { loading: () => <Loader /> }
);

const page = () => {
  return <DynamicTaxSetup />;
};

export default page;
