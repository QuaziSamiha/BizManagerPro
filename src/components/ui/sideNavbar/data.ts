import { IModuleData } from "@/interfaces/dashboard";

// ======================= ALL REQUIRED ICONS ========================
import { LuLayoutDashboard } from "react-icons/lu";
import { TbReportAnalytics } from "react-icons/tb";
import {
  MdInventory,
  MdOutlineAnalytics,
  MdOutlineFeedback,
} from "react-icons/md";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import { TiChartPieOutline, TiTicket } from "react-icons/ti";
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

export const dashboardModuleData: IModuleData = {
  moduleLinks: [
    {
      label: "Dashboard",
      href: "/dashboard",
      icon: LuLayoutDashboard,
    },
  ],
};

export const reportModuleData: IModuleData = {
  moduleTitle: "Reports",
  moduleLinks: [
    {
      label: "KPI Reports",
      href: "/kpi-reports",
      icon: MdOutlineAnalytics,
    },
    {
      label: "Department Reports",
      href: "/department-reports",
      icon: MdOutlineAccountTree,
    },
    {
      label: "Product Reports",
      href: "/product-reports",
      icon: TbReportAnalytics,
    },
    {
      label: "Tax Reports",
      href: "/tax-reports",
      icon: RiMoneyDollarCircleLine,
    },
    {
      label: "Not Found SKUs Reports",
      href: "/not-found-skus-reports",
      icon: TiChartPieOutline,
    },
  ],
};

export const managementModuleData: IModuleData = {
  moduleTitle: "Store Management",
  moduleLinks: [
    {
      label: "Register",
      href: "/store-management/register",
      icon: BsClipboard2Check,
    },
    {
      label: "Employees & Cashiers",
      href: "/store-management/employees-cashiers",
      icon: MdOutlineAccountBalanceWallet,
    },
    {
      label: "Departments",
      href: "/store-management/departments",
      icon: MdOutlineAccountTree,
    },
    {
      label: "Products",
      href: "/store-management/products",
      icon: RiShoppingCartLine,
    },
    {
      label: "Tax Setup",
      href: "/store-management/tax-setup",
      icon: RiMoneyDollarCircleLine,
    },
    {
      label: "Promotions",
      href: "/store-management/promotions",
      icon: LuTag,
    },
  ],
};

export const inventoryModuleData: IModuleData = {
  moduleTitle: "Inventory & Financial",
  moduleLinks: [
    {
      label: "Inventory Count",
      href: "/inventory-financial/inventory-count",
      icon: MdOutlineInventory2,
    },
    {
      label: "Invoices by Vendor",
      href: "/inventory-financial/invoices-vendor",
      icon: TbFileInvoice,
    },
    {
      label: "Inventory Audit",
      href: "/inventory-financial/inventory-audit",
      icon: BsClipboard2Check,
    },
    {
      label: "Lottery Booklist",
      href: "/inventory-financial/lottery-booklist",
      icon: IoTicketOutline,
    },
    {
      label: "Re-order Report",
      href: "/inventory-financial/reorder-report",
      icon: TbFileDescription,
    },
  ],
};

export const lossPreventionModuleData: IModuleData = {
  moduleLinks: [
    {
      label: "Loss Prevention",
      href: "/loss-prevention",
      icon: MdOutlineVideoCameraBack,
    },
  ],
};

export const userManagementModuleData: IModuleData = {
  moduleTitle: "User Management",
  moduleLinks: [
    {
      label: "Administrator",
      href: "/user-management/administrator",
      icon: FaRegUser,
    },
    {
      label: "Inventory Management",
      href: "/user-management/inventory-management",
      icon: MdInventory,
    },
    {
      label: "Support Ticketing System",
      href: "/user-management/support-ticketing-system",
      icon: TiTicket,
    },
    {
      label: "Feedback and Survey Management",
      href: "/user-management/feedback-survey-management",
      icon: MdOutlineFeedback,
    },
  ],
};
