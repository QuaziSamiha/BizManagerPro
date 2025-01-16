import Loader from "@/components/ui/share/loader/Loader";
import dynamic from "next/dynamic";

const DynamicInvoicesVendor = dynamic(
  () =>
    import("@/components/inventoryFinancials/invoicesVendor/InvoicesVendor"),
  { loading: () => <Loader /> }
);
const page = () => {
  return <DynamicInvoicesVendor />;
};

export default page;
