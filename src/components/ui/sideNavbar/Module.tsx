"use client";
import { usePathname } from "next/navigation";
import { SidebarLink } from "../sidebar";
import React from "react";
import { IModuleProps } from "@/interfaces/dashboard";

const Module: React.FC<IModuleProps> = ({ open, moduleData }) => {
  const pathname = usePathname();
  // console.log(moduleData)
  return (
    <div className="flex flex-col gap-2 border-t border-[#7A7A7A] px-2 py-2">
      {moduleData?.moduleTitle && (
        <p
          className={`text-[#909090] text-sm font-semibold ${
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
                ? "text-violetAltPrimary font-bold"
                : "text-[#626262] font-semibold"
            }`}
          />
        );
      })}
    </div>
  );
};

export default Module;
