"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Sidebar, SidebarBody } from "../sidebar";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Module from "./Module";
import {
  dashboardModuleData,
  inventoryModuleData,
  lossPreventionModuleData,
  managementModuleData,
  reportModuleData,
  userManagementModuleData,
} from "./data";

const DashboardSidebar = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className={cn("flex flex-col md:flex-row w-full h-screen flex-1")}>
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between">
          <div className="overflow-y-auto overflow-x-hidden scroll-smooth scrollbar">
            {/* ============= LOGO & COMPANY NAME =============== */}
            <div className="px-2 py-2">
              <Link
                href="/"
                className="font-normal flex space-x-2 items-center text-sm text-blackSecondary py-1 relative z-20"
              >
                <div className="h-5 w-6 bg-black dark:bg-white rounded-br-lg rounded-tr-sm rounded-tl-lg rounded-bl-sm flex-shrink-0" />
                {open && (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="font-medium text-blackSecondary dark:text-white whitespace-pre"
                  >
                    LAAN POS USA
                  </motion.span>
                )}
              </Link>
            </div>
            {/* ============== LINKS ================ */}
            <div className="flex flex-col flex-1">
              <Module open={open} moduleData={dashboardModuleData} />
              <Module open={open} moduleData={reportModuleData} />
              <Module open={open} moduleData={managementModuleData} />
              <Module open={open} moduleData={inventoryModuleData} />
              <Module open={open} moduleData={lossPreventionModuleData} />
              <Module open={open} moduleData={userManagementModuleData} />

              {/* {data?.dataList?.map((menu: IMenu, index: number) => {
                // console.log(menu);
                return <Module2 key={index} open={open} moduleData={menu} />;
              })} */}
            </div>

            {/* ============== USER NAME & PROFILE PICTURE ================ */}
            <div className="px-2 py-2 flex items-center gap-2">
              <Image
                src="/images/sidebar/mahfuz.jpg"
                className="h-7 w-7 flex-shrink-0 rounded-full"
                width={75}
                height={75}
                alt="Avatar"
              />
              {open && (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-blackSecondary dark:text-white whitespace-pre"
                >
                  <span>Mahfuz Islam</span>
                </motion.span>
              )}
            </div>
          </div>
        </SidebarBody>
      </Sidebar>
      {/* ====================== DASHBOARD CONTENT ================== */}
      <div className="flex flex-1">
        <div className="p-2 md:p-10 border border-Tertiary bg-bg flex flex-col gap-2 flex-1 w-full h-full overflow-hidden overflow-y-scroll">
          {children}
        </div>
      </div>
    </div>
  );
};

export default DashboardSidebar;
