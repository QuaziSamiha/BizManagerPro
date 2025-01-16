import Loader from "@/components/ui/share/loader/Loader";
import dynamic from "next/dynamic";

const DynamicLotteryBookList = dynamic(
  () =>
    import("@/components/inventoryFinancials/lotteryBookList/LotteryBookList"),
  { loading: () => <Loader /> }
);
const page = () => {
  return <DynamicLotteryBookList />;
};

export default page;
