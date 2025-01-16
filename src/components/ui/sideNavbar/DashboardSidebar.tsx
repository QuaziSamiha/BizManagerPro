"use client";
import React, { useState } from "react";
import { LuLayoutDashboard } from "react-icons/lu";
import { cn } from "@/lib/utils";
import { Sidebar, SidebarBody, SidebarLink } from "../sidebar";
import { TbReportAnalytics } from "react-icons/tb";
import { MdOutlineAnalytics } from "react-icons/md";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { TiChartPieOutline } from "react-icons/ti";
import { BsClipboard2Check } from "react-icons/bs";
import { MdOutlineAccountBalanceWallet } from "react-icons/md";
import { RiShoppingCartLine } from "react-icons/ri";
import { LuTag } from "react-icons/lu";
import { IoTicketOutline } from "react-icons/io5";
import { TbFileDescription } from "react-icons/tb";
import { TbFileInvoice } from "react-icons/tb";
import { MdOutlineInventory2 } from "react-icons/md";
import { MdOutlineVideoCameraBack } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineAccountTree } from "react-icons/md";
import { usePathname } from "next/navigation";
import { IModuleData } from "@/interfaces/dashboard";
import Module from "./Module";

const DashboardSidebar = ({ children }: { children: React.ReactNode }) => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const reportModuleData: IModuleData = {
    moduleTitle: "Reports",
    moduleLinks: [
      {
        label: "KPI Reports",
        href: "/kpi-reports",
        icon: (
          <MdOutlineAnalytics
            className={`${
              pathname === "/kpi-reports"
                ? "text-violetAltPrimary"
                : "text-[#626262]"
            } h-5 w-5 flex-shrink-0`}
          />
        ),
      },
      {
        label: "Department Reports",
        href: "/department-reports",
        icon: (
          <MdOutlineAccountTree
            className={`${
              pathname === "/department-reports"
                ? "text-violetAltPrimary"
                : "text-[#626262]"
            } h-5 w-5 flex-shrink-0`}
          />
        ),
      },
      {
        label: "Product Reports",
        href: "/product-reports",
        icon: (
          <TbReportAnalytics
            className={`${
              pathname === "/product-reports"
                ? "text-violetAltPrimary"
                : "text-[#626262]"
            } h-5 w-5 flex-shrink-0`}
          />
        ),
      },
      {
        label: "Tax Reports",
        href: "/tax-reports",
        icon: (
          <RiMoneyDollarCircleLine
            className={`${
              pathname === "/tax-reports"
                ? "text-violetAltPrimary"
                : "text-[#626262]"
            } h-5 w-5 flex-shrink-0`}
          />
        ),
      },
      {
        label: "Not Found SKUs Reports",
        href: "/not-found-skus-reports",
        icon: (
          <TiChartPieOutline
            className={`${
              pathname === "/not-found-skus-reports"
                ? "text-violetAltPrimary"
                : "text-[#626262]"
            } h-5 w-5 flex-shrink-0`}
          />
        ),
      },
    ],
  };

  const managementModuleData: IModuleData = {
    moduleTitle: "Store Management",
    moduleLinks: [
      {
        label: "Registers",
        href: "/store-management/registers",
        icon: (
          <BsClipboard2Check
            className={`${
              pathname === "/store-management/registers"
                ? "text-violetAltPrimary"
                : "text-[#626262]"
            } h-5 w-5 flex-shrink-0`}
          />
        ),
      },
      {
        label: "Employees & Cashiers",
        href: "/store-management/employees-cashiers",
        icon: (
          <MdOutlineAccountBalanceWallet
            className={`${
              pathname === "/store-management/employees-cashiers"
                ? "text-violetAltPrimary"
                : "text-[#626262]"
            } h-5 w-5 flex-shrink-0`}
          />
        ),
      },
      {
        label: "Departments",
        href: "/store-management/departments",
        icon: (
          <MdOutlineAccountTree
            className={`${
              pathname === "/store-management/departments"
                ? "text-violetAltPrimary"
                : "text-[#626262]"
            } h-5 w-5 flex-shrink-0`}
          />
        ),
      },
      {
        label: "Products",
        href: "/store-management/products",
        icon: (
          <RiShoppingCartLine
            className={`${
              pathname === "/store-management/products"
                ? "text-violetAltPrimary"
                : "text-[#626262]"
            } h-5 w-5 flex-shrink-0`}
          />
        ),
      },
      {
        label: "Tax Setup",
        href: "/store-management/tax-setup",
        icon: (
          <RiMoneyDollarCircleLine
            className={`${
              pathname === "/store-management/tax-setup"
                ? "text-violetAltPrimary"
                : "text-[#626262]"
            } h-5 w-5 flex-shrink-0`}
          />
        ),
      },
      // {
      //   label: "Tags",
      //   href: "/store-management/tags",
      //   icon: <MdOutlineTag className={`${pathname==="/store-management/tags"?"text-violetAltPrimary":"text-[#626262]"} h-5 w-5 flex-shrink-0`}/>,
      // },
      {
        label: "Promotions",
        href: "/store-management/promotions",
        icon: (
          <LuTag
            className={`${
              pathname === "/store-management/promotions"
                ? "text-violetAltPrimary"
                : "text-[#626262]"
            } h-5 w-5 flex-shrink-0`}
          />
        ),
      },
    ],
  };

  const inventoryLinks = [
    {
      label: "Inventory Count",
      href: "/inventory-financials/inventory-count",
      icon: (
        <MdOutlineInventory2
          className={`${
            pathname === "/inventory-financials/inventory-count"
              ? "text-violetAltPrimary"
              : "text-[#626262]"
          } h-5 w-5 flex-shrink-0`}
        />
      ),
    },
    {
      label: "Invoices by Vendor",
      href: "/inventory-financials/invoices-vendor",
      icon: (
        <TbFileInvoice
          className={`${
            pathname === "/inventory-financials/invoices-vendor"
              ? "text-violetAltPrimary"
              : "text-[#626262]"
          } h-5 w-5 flex-shrink-0`}
        />
      ),
    },
    {
      label: "Inventory Audit",
      href: "/inventory-financials/inventory-audit",
      icon: (
        <BsClipboard2Check
          className={`${
            pathname === "/inventory-financials/inventory-audit"
              ? "text-violetAltPrimary"
              : "text-[#626262]"
          } h-5 w-5 flex-shrink-0`}
        />
      ),
    },
    {
      label: "Lottery Booklist",
      href: "/inventory-financials/lottery-booklist",
      icon: (
        <IoTicketOutline
          className={`${
            pathname === "/inventory-financials/lottery-booklist"
              ? "text-violetAltPrimary"
              : "text-[#626262]"
          } h-5 w-5 flex-shrink-0`}
        />
      ),
    },
    {
      label: "Re-order Report",
      href: "/inventory-financials/reorder-report",
      icon: (
        <TbFileDescription
          className={`${
            pathname === "/inventory-financials/reorder-report"
              ? "text-violetAltPrimary"
              : "text-[#626262]"
          } h-5 w-5 flex-shrink-0`}
        />
      ),
    },
  ];

  return (
    <div className={cn("flex flex-col md:flex-row w-full h-screen flex-1")}>
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between">
          <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden scroll-smooth scrollbar">
            {/* {open ? <Logo /> : <LogoIcon />} */}
            <div className=" flex flex-col gap-2 border-[#7A7A7A] px-2 py-2">
              <SidebarLink
                link={{
                  label: "Dashboard",
                  href: "/dashboard",
                  icon: (
                    <LuLayoutDashboard
                      className={`${
                        pathname === "/dashboard"
                          ? "text-violetAltPrimary"
                          : "text-[#626262]"
                      } h-5 w-5 flex-shrink-0`}
                    />
                  ),
                }}
                className={`${
                  pathname === "/dashboard"
                    ? "text-violetAltPrimary font-bold"
                    : "text-[#626262] font-semibold"
                }`}
              />
            </div>
            <Module open={open} moduleData={reportModuleData} />
            {/* <div className="flex flex-col gap-2 border-t border-[#7A7A7A] px-2 py-2">
              <p
                className={`text-[#909090] text-sm font-semibold ${
                  open ? " opacity-100 " : " opacity-0"
                } text-nowrap`}
              >
                Reports
              </p>
              {reportLinks.map((link, idx) => (
                <SidebarLink
                  key={idx}
                  link={link}
                  className={`${
                    pathname === link.href
                      ? "text-violetAltPrimary font-bold"
                      : "text-[#626262] font-semibold"
                  }`}
                />
              ))}
            </div> */}
            <Module open={open} moduleData={managementModuleData} />
            {/* <div className="flex flex-col gap-2 border-t border-[#7A7A7A] px-2 py-2">
              <p
                className={`text-[#909090] text-sm font-semibold ${
                  open ? " opacity-100 " : " opacity-0"
                } text-nowrap`}
              >
                Store Management
              </p>
              {managementLinks.map((link, idx) => (
                <SidebarLink
                  key={idx}
                  link={link}
                  className={`${
                    pathname === link.href
                      ? "text-violetAltPrimary font-bold"
                      : "text-[#626262] font-semibold"
                  }`}
                />
              ))}
            </div> */}
            <div className="flex flex-col gap-2 border-t border-[#7A7A7A] px-2 py-2">
              <p
                className={`text-[#909090] text-sm font-semibold ${
                  open ? " opacity-100 " : " opacity-0"
                } text-nowrap`}
              >
                Inventory & Financials
              </p>
              {inventoryLinks.map((link, idx) => (
                <SidebarLink
                  key={idx}
                  link={link}
                  className={`${
                    pathname === link.href
                      ? "text-violetAltPrimary font-bold"
                      : "text-[#626262] font-semibold"
                  }`}
                />
              ))}
            </div>
            <div className="flex flex-col gap-2 border-t border-[#7A7A7A] px-2">
              <SidebarLink
                link={{
                  label: "Loss Prevention",
                  href: "/loss-prevention",
                  icon: (
                    <MdOutlineVideoCameraBack
                      className={`${
                        pathname === "/loss-prevention"
                          ? "text-violetAltPrimary"
                          : "text-[#626262]"
                      } h-5 w-5 flex-shrink-0`}
                    />
                  ),
                }}
                className={`${
                  pathname === "/loss-prevention"
                    ? "text-violetAltPrimary font-bold"
                    : "text-[#626262] font-semibold"
                }`}
              />
            </div>
            <div className=" flex flex-col gap-2 border-t border-[#7A7A7A] px-2 py-2">
              <p
                className={`text-[#909090] text-sm font-semibold ${
                  open ? " opacity-100 " : " opacity-0"
                } text-nowrap`}
              >
                User Management
              </p>
              <SidebarLink
                link={{
                  label: "Administrator",
                  href: "/administrator",
                  icon: (
                    <FaRegUser
                      className={`${
                        pathname === "/administrator"
                          ? "text-violetAltPrimary"
                          : "text-[#626262]"
                      } h-5 w-5 flex-shrink-0`}
                    />
                  ),
                }}
                className={`${
                  pathname === "/administrator"
                    ? "text-violetAltPrimary font-bold"
                    : "text-[#626262] font-semibold"
                }`}
              />
            </div>
          </div>

          {/* <div>
            <SidebarLink
              link={{
                label: "Mahfuz Islam",
                href: "#",
                icon: (
                  <Image
                    src={"/images/sidebar/mahfuz.JPG"}
                    className="h-7 w-7 flex-shrink-0 rounded-full"
                    width={50}
                    height={50}
                    alt="Avatar"
                  />
                ),
              }}
            />
          </div> */}
        </SidebarBody>
      </Sidebar>
      <div className="flex flex-1">
        <div className="p-2 md:p-10  border border-Tertiary bg-bg flex flex-col gap-2 flex-1 w-full h-full overflow-hidden overflow-y-scroll">
          {children}
        </div>
      </div>
    </div>
  );
};

export default DashboardSidebar;
// export const Logo = () => {
//   return (
//     <Link
//       href="/dashboard"
//       className="font-normal flex space-x-2 items-center text-sm  py-1 relative z-20 px-2"
//     >
//       <LuLayoutDashboard className="text-[#626262] h-5 w-5 flex-shrink-0" />
//       <motion.span
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         className="font-medium whitespace-pre text-[#626262]"
//       >
//         Dashboard
//       </motion.span>
//     </Link>
//   );
// };
// const LogoIcon = () => {
//   return (
//     <Link
//       href="/dashboard"
//       className="font-normal flex space-x-2 items-center text-sm  py-1 relative z-20 px-2"
//     >
//       <LuLayoutDashboard className="text-[#626262] h-5 w-5 flex-shrink-0" />
//       <p className={`font-medium whitespace-pre text-[#626262] `}>Dashboard</p>
//     </Link>
//   );
// };
// "use client";
// import React, { useState } from "react";
// import { LuLayoutDashboard } from "react-icons/lu";
// import { cn } from "@/lib/utils";
// import { Sidebar, SidebarBody, SidebarLink } from "../sidebar";
// import { TbReportAnalytics } from "react-icons/tb";
// import { MdOutlineAnalytics } from "react-icons/md";
// import { RiMoneyDollarCircleLine } from "react-icons/ri";
// import { TiChartPieOutline } from "react-icons/ti";
// import { BsClipboard2Check } from "react-icons/bs";
// import { MdOutlineAccountBalanceWallet } from "react-icons/md";
// import { RiShoppingCartLine } from "react-icons/ri";
// import { LuTag } from "react-icons/lu";
// import { IoTicketOutline } from "react-icons/io5";
// import { TbFileDescription } from "react-icons/tb";
// import { TbFileInvoice } from "react-icons/tb";
// import { MdOutlineInventory2 } from "react-icons/md";
// import { MdOutlineVideoCameraBack } from "react-icons/md";
// import { FaRegUser } from "react-icons/fa";
// import { MdOutlineAccountTree } from "react-icons/md";
// import { usePathname } from "next/navigation";

// const DashboardSidebar = ({ children }: { children: React.ReactNode }) => {
//   const [open, setOpen] = useState(false);
//   const pathname = usePathname();

//   const reportLinks = [
//     {
//       label: "KPI Reports",
//       href: "/kpi-reports",
//       icon: (
//         <MdOutlineAnalytics
//           className={`${
//             pathname === "/kpi-reports"
//               ? "text-violetAltPrimary"
//               : "text-[#626262]"
//           } h-5 w-5 flex-shrink-0`}
//         />
//       ),
//     },
//     {
//       label: "Department Reports",
//       href: "/department-reports",
//       icon: (
//         <MdOutlineAccountTree
//           className={`${
//             pathname === "/department-reports"
//               ? "text-violetAltPrimary"
//               : "text-[#626262]"
//           } h-5 w-5 flex-shrink-0`}
//         />
//       ),
//     },
//     {
//       label: "Product Reports",
//       href: "/product-reports",
//       icon: (
//         <TbReportAnalytics
//           className={`${
//             pathname === "/product-reports"
//               ? "text-violetAltPrimary"
//               : "text-[#626262]"
//           } h-5 w-5 flex-shrink-0`}
//         />
//       ),
//     },
//     {
//       label: "Tax Reports",
//       href: "/tax-reports",
//       icon: (
//         <RiMoneyDollarCircleLine
//           className={`${
//             pathname === "/tax-reports"
//               ? "text-violetAltPrimary"
//               : "text-[#626262]"
//           } h-5 w-5 flex-shrink-0`}
//         />
//       ),
//     },
//     {
//       label: "Not Found SKUs Reports",
//       href: "/not-found-skus-reports",
//       icon: (
//         <TiChartPieOutline
//           className={`${
//             pathname === "/not-found-skus-reports"
//               ? "text-violetAltPrimary"
//               : "text-[#626262]"
//           } h-5 w-5 flex-shrink-0`}
//         />
//       ),
//     },
//   ];

//   const managementLinks = [
//     {
//       label: "Registers",
//       href: "/store-management/registers",
//       icon: (
//         <BsClipboard2Check
//           className={`${
//             pathname === "/store-management/registers"
//               ? "text-violetAltPrimary"
//               : "text-[#626262]"
//           } h-5 w-5 flex-shrink-0`}
//         />
//       ),
//     },
//     {
//       label: "Employees & Cashiers",
//       href: "/store-management/employees-cashiers",
//       icon: (
//         <MdOutlineAccountBalanceWallet
//           className={`${
//             pathname === "/store-management/employees-cashiers"
//               ? "text-violetAltPrimary"
//               : "text-[#626262]"
//           } h-5 w-5 flex-shrink-0`}
//         />
//       ),
//     },
//     {
//       label: "Departments",
//       href: "/store-management/departments",
//       icon: (
//         <MdOutlineAccountTree
//           className={`${
//             pathname === "/store-management/departments"
//               ? "text-violetAltPrimary"
//               : "text-[#626262]"
//           } h-5 w-5 flex-shrink-0`}
//         />
//       ),
//     },
//     {
//       label: "Products",
//       href: "/store-management/products",
//       icon: (
//         <RiShoppingCartLine
//           className={`${
//             pathname === "/store-management/products"
//               ? "text-violetAltPrimary"
//               : "text-[#626262]"
//           } h-5 w-5 flex-shrink-0`}
//         />
//       ),
//     },
//     {
//       label: "Tax Setup",
//       href: "/store-management/tax-setup",
//       icon: (
//         <RiMoneyDollarCircleLine
//           className={`${
//             pathname === "/store-management/tax-setup"
//               ? "text-violetAltPrimary"
//               : "text-[#626262]"
//           } h-5 w-5 flex-shrink-0`}
//         />
//       ),
//     },
//     // {
//     //   label: "Tags",
//     //   href: "/store-management/tags",
//     //   icon: <MdOutlineTag className={`${pathname==="/store-management/tags"?"text-violetAltPrimary":"text-[#626262]"} h-5 w-5 flex-shrink-0`}/>,
//     // },
//     {
//       label: "Promotions",
//       href: "/store-management/promotions",
//       icon: (
//         <LuTag
//           className={`${
//             pathname === "/store-management/promotions"
//               ? "text-violetAltPrimary"
//               : "text-[#626262]"
//           } h-5 w-5 flex-shrink-0`}
//         />
//       ),
//     },
//   ];

//   const inventoryLinks = [
//     {
//       label: "Inventory Count",
//       href: "/inventory-financials/inventory-count",
//       icon: (
//         <MdOutlineInventory2
//           className={`${
//             pathname === "/inventory-financials/inventory-count"
//               ? "text-violetAltPrimary"
//               : "text-[#626262]"
//           } h-5 w-5 flex-shrink-0`}
//         />
//       ),
//     },
//     {
//       label: "Invoices by Vendor",
//       href: "/inventory-financials/invoices-vendor",
//       icon: (
//         <TbFileInvoice
//           className={`${
//             pathname === "/inventory-financials/invoices-vendor"
//               ? "text-violetAltPrimary"
//               : "text-[#626262]"
//           } h-5 w-5 flex-shrink-0`}
//         />
//       ),
//     },
//     {
//       label: "Inventory Audit",
//       href: "/inventory-financials/inventory-audit",
//       icon: (
//         <BsClipboard2Check
//           className={`${
//             pathname === "/inventory-financials/inventory-audit"
//               ? "text-violetAltPrimary"
//               : "text-[#626262]"
//           } h-5 w-5 flex-shrink-0`}
//         />
//       ),
//     },
//     {
//       label: "Lottery Booklist",
//       href: "/inventory-financials/lottery-booklist",
//       icon: (
//         <IoTicketOutline
//           className={`${
//             pathname === "/inventory-financials/lottery-booklist"
//               ? "text-violetAltPrimary"
//               : "text-[#626262]"
//           } h-5 w-5 flex-shrink-0`}
//         />
//       ),
//     },
//     {
//       label: "Re-order Report",
//       href: "/inventory-financials/reorder-report",
//       icon: (
//         <TbFileDescription
//           className={`${
//             pathname === "/inventory-financials/reorder-report"
//               ? "text-violetAltPrimary"
//               : "text-[#626262]"
//           } h-5 w-5 flex-shrink-0`}
//         />
//       ),
//     },
//   ];

//   return (
//     <div className={cn("flex flex-col md:flex-row w-full h-screen flex-1")}>
//       <Sidebar open={open} setOpen={setOpen}>
//         <SidebarBody className="justify-between">
//           <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden scroll-smooth scrollbar">
//             {/* {open ? <Logo /> : <LogoIcon />} */}
//             <div className=" flex flex-col gap-2 border-[#7A7A7A] px-2 py-2">
//               <SidebarLink
//                 link={{
//                   label: "Dashboard",
//                   href: "/dashboard",
//                   icon: (
//                     <LuLayoutDashboard
//                       className={`${
//                         pathname === "/dashboard"
//                           ? "text-violetAltPrimary"
//                           : "text-[#626262]"
//                       } h-5 w-5 flex-shrink-0`}
//                     />
//                   ),
//                 }}
//                 className={`${
//                   pathname === "/dashboard"
//                     ? "text-violetAltPrimary font-bold"
//                     : "text-[#626262] font-semibold"
//                 }`}
//               />
//             </div>
//             <div className="flex flex-col gap-2 border-t border-[#7A7A7A] px-2 py-2">
//               <p
//                 className={`text-[#909090] text-sm font-semibold ${
//                   open ? " opacity-100 " : " opacity-0"
//                 } text-nowrap`}
//               >
//                 Reports
//               </p>
//               {reportLinks.map((link, idx) => (
//                 <SidebarLink
//                   key={idx}
//                   link={link}
//                   className={`${
//                     pathname === link.href
//                       ? "text-violetAltPrimary font-bold"
//                       : "text-[#626262] font-semibold"
//                   }`}
//                 />
//               ))}
//             </div>
//             <div className="flex flex-col gap-2 border-t border-[#7A7A7A] px-2 py-2">
//               <p
//                 className={`text-[#909090] text-sm font-semibold ${
//                   open ? " opacity-100 " : " opacity-0"
//                 } text-nowrap`}
//               >
//                 Store Management
//               </p>
//               {managementLinks.map((link, idx) => (
//                 <SidebarLink
//                   key={idx}
//                   link={link}
//                   className={`${
//                     pathname === link.href
//                       ? "text-violetAltPrimary font-bold"
//                       : "text-[#626262] font-semibold"
//                   }`}
//                 />
//               ))}
//             </div>
//             <div className="flex flex-col gap-2 border-t border-[#7A7A7A] px-2 py-2">
//               <p
//                 className={`text-[#909090] text-sm font-semibold ${
//                   open ? " opacity-100 " : " opacity-0"
//                 } text-nowrap`}
//               >
//                 Inventory & Financials
//               </p>
//               {inventoryLinks.map((link, idx) => (
//                 <SidebarLink
//                   key={idx}
//                   link={link}
//                   className={`${
//                     pathname === link.href
//                       ? "text-violetAltPrimary font-bold"
//                       : "text-[#626262] font-semibold"
//                   }`}
//                 />
//               ))}
//             </div>
//             <div className="flex flex-col gap-2 border-t border-[#7A7A7A] px-2">
//               <SidebarLink
//                 link={{
//                   label: "Loss Prevention",
//                   href: "/loss-prevention",
//                   icon: (
//                     <MdOutlineVideoCameraBack
//                       className={`${
//                         pathname === "/loss-prevention"
//                           ? "text-violetAltPrimary"
//                           : "text-[#626262]"
//                       } h-5 w-5 flex-shrink-0`}
//                     />
//                   ),
//                 }}
//                 className={`${
//                   pathname === "/loss-prevention"
//                     ? "text-violetAltPrimary font-bold"
//                     : "text-[#626262] font-semibold"
//                 }`}
//               />
//             </div>
//             <div className=" flex flex-col gap-2 border-t border-[#7A7A7A] px-2 py-2">
//               <p
//                 className={`text-[#909090] text-sm font-semibold ${
//                   open ? " opacity-100 " : " opacity-0"
//                 } text-nowrap`}
//               >
//                 User Management
//               </p>
//               <SidebarLink
//                 link={{
//                   label: "Administrator",
//                   href: "/administrator",
//                   icon: (
//                     <FaRegUser
//                       className={`${
//                         pathname === "/administrator"
//                           ? "text-violetAltPrimary"
//                           : "text-[#626262]"
//                       } h-5 w-5 flex-shrink-0`}
//                     />
//                   ),
//                 }}
//                 className={`${
//                   pathname === "/administrator"
//                     ? "text-violetAltPrimary font-bold"
//                     : "text-[#626262] font-semibold"
//                 }`}
//               />
//             </div>
//           </div>

//           {/* <div>
//             <SidebarLink
//               link={{
//                 label: "Mahfuz Islam",
//                 href: "#",
//                 icon: (
//                   <Image
//                     src={"/images/sidebar/mahfuz.JPG"}
//                     className="h-7 w-7 flex-shrink-0 rounded-full"
//                     width={50}
//                     height={50}
//                     alt="Avatar"
//                   />
//                 ),
//               }}
//             />
//           </div> */}
//         </SidebarBody>
//       </Sidebar>
//       <div className="flex flex-1">
//         <div className="p-2 md:p-10  border border-Tertiary bg-bg flex flex-col gap-2 flex-1 w-full h-full overflow-hidden overflow-y-scroll">
//           {children}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DashboardSidebar;
// // export const Logo = () => {
// //   return (
// //     <Link
// //       href="/dashboard"
// //       className="font-normal flex space-x-2 items-center text-sm  py-1 relative z-20 px-2"
// //     >
// //       <LuLayoutDashboard className="text-[#626262] h-5 w-5 flex-shrink-0" />
// //       <motion.span
// //         initial={{ opacity: 0 }}
// //         animate={{ opacity: 1 }}
// //         className="font-medium whitespace-pre text-[#626262]"
// //       >
// //         Dashboard
// //       </motion.span>
// //     </Link>
// //   );
// // };
// // const LogoIcon = () => {
// //   return (
// //     <Link
// //       href="/dashboard"
// //       className="font-normal flex space-x-2 items-center text-sm  py-1 relative z-20 px-2"
// //     >
// //       <LuLayoutDashboard className="text-[#626262] h-5 w-5 flex-shrink-0" />
// //       <p className={`font-medium whitespace-pre text-[#626262] `}>Dashboard</p>
// //     </Link>
// //   );
// // };
