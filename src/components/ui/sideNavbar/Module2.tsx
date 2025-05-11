// "use client";

// import { IModule } from "@/types/dashboard.type";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { LuLayoutDashboard } from "react-icons/lu";

// const Module2: React.FC<IModule> = ({ open, moduleData }) => {
//   // console.log(moduleData);
//   const pathname = usePathname();
//   return (
//     <div className={`flex flex-col gap-2 first:border-none border-t border-slate-500 ${open ? 'px-2' : 'pl-5 pr-6'} py-2`}>
//       {moduleData?.subMenuList?.length === 0 ? (
//         // ========= NO SUB MENU LIST ==================
//         <Link
//           href={`/${moduleData?.route}`}
//           className={`text-slate-800 text-sm font-semibold ${
//             open ? "opacity-100" : "opacity-0"
//           } text-nowrap`}
//         >
//           <div
//             className={`flex items-center justify-start gap-2 py-2 ${
//               pathname === moduleData?.route
//                 ? "font-semibold text-blue-800"
//                 : "text-slate-800"
//             }`}
//           >
//             <LuLayoutDashboard
//               className={`${
//                 pathname === moduleData?.route
//                   ? "font-semibold text-blue-800"
//                   : "text-slate-800"
//               } flex-shrink-0`}
//               fontSize={24}
//             />
//             {moduleData.menuName}
//           </div>
//         </Link>
//       ) : (
//         <div>
//           {/* ======== IF MODULE SUBMENU EXIT THEN SHOW MODULE MAIN TITLE ============== */}
//           <p
//             className={`text-slate-800 text-sm font-semibold ${
//               open ? "opacity-100" : "opacity-0"
//             } text-nowrap`}
//           >
//             {moduleData.menuName}
//           </p>
//           {/* ======== MODULE SUBMENU'S LINKS ============== */}
//           {moduleData?.subMenuList?.map((subMenu, index) => (
//             <SidebarMenuLink
//               key={index}
//               link={subMenu}
//               mainRoute={moduleData?.route}
//             />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Module2;
