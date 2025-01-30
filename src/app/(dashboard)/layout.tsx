"use client";

import DashboardSidebar from "@/components/ui/sideNavbar/DashboardSidebar";
import store from "@/redux/Store/store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const queryClient = new QueryClient();

  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <div>
          <DashboardSidebar>{children}</DashboardSidebar>
        </div>
      </QueryClientProvider>
    </Provider>
  );
};

export default DashboardLayout;
