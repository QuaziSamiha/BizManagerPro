"use client";
import { usePathname } from "next/navigation";
import { SidebarLink } from "../sidebar";
import React from "react";
import { IModuleProps } from "@/interfaces/dashboard";

const Module: React.FC<IModuleProps> = ({ open, moduleData }) => {
  const pathname = usePathname();
  // console.log(moduleData)
  return (
    <div className="flex flex-col gap-2 border-t border-stone-500 px-2 py-2">
      {moduleData?.moduleTitle && (
        <p
          className={`text-stone-700 text-sm font-semibold ${
            open ? " opacity-100 " : " opacity-0"
          } text-nowrap`}
        >
          {moduleData.moduleTitle}
        </p>
      )}
      {moduleData?.moduleLinks?.map((link, index) => {
        // console.log(link.href);
        return (
          <SidebarLink
            key={index}
            link={link}
            className={`${
              pathname === link.href
                ? "text-blue-700 font-bold"
                : "text-stone-600 font-semibold"
            }`}
          />
        );
      })}
    </div>
  );
};

export default Module;
