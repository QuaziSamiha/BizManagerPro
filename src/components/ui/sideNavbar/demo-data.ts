import { IModule } from "@/types/dashboard.type";

// Demo data in the format specified by the interfaces
export const demoModules: IModule[] = [
  {
    open: true,
    moduleData: {
      menuId: 1,
      menuUId: "dashboard-001",
      menuName: "Dashboard",
      menuIcon: "LayoutDashboard",
      menuOrder: 1,
      permissionLvl: "user",
      route: "/dashboard",
      isContainSubMenu: 0,
      isWelcomePage: 1,
      subMenuList: [],
    },
  },
  {
    open: true,
    moduleData: {
      menuId: 2,
      menuUId: "pos-002",
      menuName: "POS",
      menuIcon: "ShoppingCart",
      menuOrder: 2,
      permissionLvl: "user",
      route: "/pos",
      isContainSubMenu: 0,
      isWelcomePage: 0,
      subMenuList: [],
    },
  },
  {
    open: true,
    moduleData: {
      menuId: 3,
      menuUId: "reports-003",
      menuName: "Reports",
      menuIcon: "BarChart2",
      menuOrder: 3,
      permissionLvl: "user",
      route: "",
      isContainSubMenu: 1,
      isWelcomePage: 0,
      subMenuList: [
        {
          subMenuId: 301,
          udSubMenuId: "kpi-reports-301",
          menuId: 3,
          subMenuName: "KPI Reports",
          menuOrder: 1,
          permissionLvl: "user",
          route: "/reports/kpi",
          menuIcon: "LineChart",
          isWelcomePage: 0,
        },
        {
          subMenuId: 302,
          udSubMenuId: "department-reports-302",
          menuId: 3,
          subMenuName: "Department Reports",
          menuOrder: 2,
          permissionLvl: "user",
          route: "/reports/department",
          menuIcon: "FolderKanban",
          isWelcomePage: 0,
        },
        {
          subMenuId: 303,
          udSubMenuId: "product-reports-303",
          menuId: 3,
          subMenuName: "Product Reports",
          menuOrder: 3,
          permissionLvl: "user",
          route: "/reports/product",
          menuIcon: "Package",
          isWelcomePage: 0,
        },
        {
          subMenuId: 304,
          udSubMenuId: "tax-reports-304",
          menuId: 3,
          subMenuName: "Tax Reports",
          menuOrder: 4,
          permissionLvl: "user",
          route: "/reports/tax",
          menuIcon: "Receipt",
          isWelcomePage: 0,
        },
        {
          subMenuId: 305,
          udSubMenuId: "not-found-sku-reports-305",
          menuId: 3,
          subMenuName: "Not Found SKU Reports",
          menuOrder: 5,
          permissionLvl: "user",
          route: "/reports/not-found-sku",
          menuIcon: "Search",
          isWelcomePage: 0,
        },
      ],
    },
  },
  {
    open: true,
    moduleData: {
      menuId: 4,
      menuUId: "store-management-004",
      menuName: "Store Management",
      menuIcon: "Store",
      menuOrder: 4,
      permissionLvl: "admin",
      route: "",
      isContainSubMenu: 1,
      isWelcomePage: 0,
      subMenuList: [
        {
          subMenuId: 401,
          udSubMenuId: "registers-401",
          menuId: 4,
          subMenuName: "Registers",
          menuOrder: 1,
          permissionLvl: "admin",
          route: "/store/registers",
          menuIcon: "Calculator",
          isWelcomePage: 0,
        },
        {
          subMenuId: 402,
          udSubMenuId: "employees-cashiers-402",
          menuId: 4,
          subMenuName: "Employees & Cashiers",
          menuOrder: 2,
          permissionLvl: "admin",
          route: "/store/employees",
          menuIcon: "Users",
          isWelcomePage: 0,
        },
        {
          subMenuId: 403,
          udSubMenuId: "departments-403",
          menuId: 4,
          subMenuName: "Departments",
          menuOrder: 3,
          permissionLvl: "admin",
          route: "/store/departments",
          menuIcon: "FolderTree",
          isWelcomePage: 0,
        },
        {
          subMenuId: 404,
          udSubMenuId: "products-404",
          menuId: 4,
          subMenuName: "Products",
          menuOrder: 4,
          permissionLvl: "admin",
          route: "/store/products",
          menuIcon: "ShoppingBag",
          isWelcomePage: 0,
        },
        {
          subMenuId: 405,
          udSubMenuId: "tax-setup-405",
          menuId: 4,
          subMenuName: "Tax Setup",
          menuOrder: 5,
          permissionLvl: "admin",
          route: "/store/tax-setup",
          menuIcon: "Percent",
          isWelcomePage: 0,
        },
        {
          subMenuId: 406,
          udSubMenuId: "promotions-406",
          menuId: 4,
          subMenuName: "Promotions",
          menuOrder: 6,
          permissionLvl: "admin",
          route: "/store/promotions",
          menuIcon: "Tag",
          isWelcomePage: 0,
        },
      ],
    },
  },
  {
    open: true,
    moduleData: {
      menuId: 5,
      menuUId: "inventory-financials-005",
      menuName: "Inventory & Financials",
      menuIcon: "ClipboardList",
      menuOrder: 5,
      permissionLvl: "admin",
      route: "",
      isContainSubMenu: 1,
      isWelcomePage: 0,
      subMenuList: [
        {
          subMenuId: 501,
          udSubMenuId: "inventory-count-501",
          menuId: 5,
          subMenuName: "Inventory Count",
          menuOrder: 1,
          permissionLvl: "admin",
          route: "/inventory/count",
          menuIcon: "ListChecks",
          isWelcomePage: 0,
        },
        {
          subMenuId: 502,
          udSubMenuId: "invoices-by-vendor-502",
          menuId: 5,
          subMenuName: "Invoices by Vendor",
          menuOrder: 2,
          permissionLvl: "admin",
          route: "/inventory/invoices",
          menuIcon: "FileText",
          isWelcomePage: 0,
        },
        {
          subMenuId: 503,
          udSubMenuId: "inventory-audit-503",
          menuId: 5,
          subMenuName: "Inventory Audit",
          menuOrder: 3,
          permissionLvl: "admin",
          route: "/inventory/audit",
          menuIcon: "FileSearch",
          isWelcomePage: 0,
        },
        {
          subMenuId: 504,
          udSubMenuId: "lottery-inventory-504",
          menuId: 5,
          subMenuName: "Lottery Inventory",
          menuOrder: 4,
          permissionLvl: "admin",
          route: "/inventory/lottery",
          menuIcon: "Ticket",
          isWelcomePage: 0,
        },
        {
          subMenuId: 505,
          udSubMenuId: "low-stock-alert-505",
          menuId: 5,
          subMenuName: "Low Stock Alert",
          menuOrder: 5,
          permissionLvl: "admin",
          route: "/inventory/low-stock",
          menuIcon: "AlertTriangle",
          isWelcomePage: 0,
        },
      ],
    },
  },
];
