"use client";

// import DashboardSidebar from "@/components/ui/sideNavbar/DashboardSidebar3";
import DashboardSidebar from "@/components/ui/sideNavbar/DashboardSidebar2";
// import DashboardSidebar from "@/components/ui/sideNavbar/DashboardSidebar";
import store from "@/redux/Store/store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const queryClient = new QueryClient();

  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <div className="h-screen w-screen flex justify-center items-center overflow-y-auto bg-silver">
          <DashboardSidebar>{children}</DashboardSidebar>
        </div>
      </QueryClientProvider>
    </Provider>
  );
};

export default DashboardLayout;
