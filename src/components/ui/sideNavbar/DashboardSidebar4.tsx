// "use client";

// import { useState } from "react";
// import { cn } from "@/lib/utils";
// import { Sidebar, SidebarBody } from "../sidebar";
// import { motion } from "framer-motion";
// import Link from "next/link";
// import Image from "next/image";
// // ============ ICON =============
// import { RiLogoutCircleLine } from "react-icons/ri";
// import Loader from "../share/loader/Loader";
// // import { appId, companyId } from "../../../../authData";
// import { useRouter } from "next/navigation";
// // import { getFromLocalStorage } from "@/utils/local-storage";
// // import { useGet } from "@/hooks/useGet";
// // import Module2 from "./Module2";
// // import { IMenu, MenuResponse } from "@/interfaces/dashboard.type";

// const DashboardSidebar = ({ children }: { children: React.ReactNode }) => {
//   const [open, setOpen] = useState<boolean>(false);
// //   const userId = Number(getFromLocalStorage("userId"));

// //   const { isLoading, error, data } = useGet<MenuResponse>(
// //     `setup-ws/api/v1/menu/get-permitted-menu?appId=${appId}&userId=${userId}&companyId=${companyId}`,
// //     ["dashboardSidebar"]
// //   );

//   // console.log("dashboard data", data?.dataList);
//   // console.log("dashboard data", data);

//   //  ======= ROUTE ==========
//   const router = useRouter();

//   const logout = () => {
//     router.push("/");
//   };

//   return (
//     <div className={cn("flex flex-col md:flex-row h-screen w-full")}>
//       <Sidebar open={open} setOpen={setOpen}>
//         <SidebarBody className="justify-between gap-10">
//           <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden scroll-smooth scrollbar h-full">
//             {/* ============= LOGO & COMPANY NAME =============== */}
//             <div className="p-2">
//               <Link
//                 href="/"
//                 className={`font-normal flex space-x-2 ${!open && 'justify-center'} items-center text-sm text-blackSecondary py-1 relative z-20`}
//               >
//                 <Image
//                   src="/images/logo.png"
//                   alt="logo"
//                   width={50}
//                   height={50}
//                   className="h-10 w-10"
//                 />
//                 {open && (
//                   <motion.span
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     className="font-bold text-blueActual dark:text-white whitespace-pre"
//                   >
//                     <p>
//                       LAAN POS U<span className="text-redActual">SA</span>
//                     </p>
//                   </motion.span>
//                 )}
//               </Link>
//             </div>
//             <div className="h-full flex flex-col justify-between">
//               {/* ============== LINKS ================ */}
//               <div className="flex flex-col flex-1">
//                 {/* <Module open={open} moduleData={dashboardModuleData} />
//               <Module open={open} moduleData={reportModuleData} /> */}
//                 {error ? (
//                   <p>Error Occurred</p>
//                 ) : (
//                   <div>
//                     {" "}
//                     {isLoading ? (
//                       <Loader />
//                     ) : (
//                       <>
//                         <div>
//                           {data?.dataList?.map((menu: IMenu, index: number) => {
//                             return (
//                               <Module2
//                                 key={index}
//                                 open={open}
//                                 moduleData={menu}
//                               />
//                             );
//                           })}
//                         </div>
//                         <div className="px-5">
//                           <button
//                             className="flex items-center gap-2 text-blackSecondary group"
//                             onClick={() => logout()}
//                           >
//                             <RiLogoutCircleLine
//                               fontSize={24}
//                               className="group-hover:text-redActual font-medium"
//                             />
//                             {open && (
//                               <motion.span
//                                 initial={{ opacity: 0 }}
//                                 animate={{ opacity: 1 }}
//                                 className="text-blackSecondary dark:text-white whitespace-pre group-hover:text-red-600 hover:font-medium"
//                               >
//                                 <span>Logout</span>
//                               </motion.span>
//                             )}
//                           </button>
//                         </div>
//                       </>
//                     )}
//                   </div>
//                 )}
//               </div>

//               {/* ============== USER NAME & PROFILE PICTURE ================ */}
//               <div className="pl-2 py-12 flex items-center gap-2">
//                 <Image
//                   src="/images/sidebar/passport_photo.png"
//                   className="h-7 w-7 flex-shrink-0 rounded-full"
//                   width={80}
//                   height={80}
//                   alt="Avatar"
//                 />
//                 {open && (
//                   <motion.span
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     className="text-blackSecondary dark:text-white whitespace-pre"
//                   >
//                     <span>Quazi Samiha</span>
//                   </motion.span>
//                 )}
//               </div>
//             </div>
//           </div>
//         </SidebarBody>
//       </Sidebar>
//       {/* ====================== DASHBOARD CONTENT ================== */}
//       <div className="flex flex-1">
//         <div className="p-2 md:p-10 border border-Tertiary bg-bg flex flex-col gap-2 flex-1 w-full h-full overflow-y-scroll">
//           {children}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DashboardSidebar;
