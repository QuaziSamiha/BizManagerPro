import Loader from "@/components/ui/share/loader/Loader";
import dynamic from "next/dynamic";

const DynamicFeedbackSurveyManagement = dynamic(
  () =>
    import(
      "@/components/userManagement/feedbackSurveyManagement/FeedbackSurveyManagement"
    ),
  { loading: () => <Loader /> }
);

const page = () => {
  return <DynamicFeedbackSurveyManagement />;
};

export default page;
