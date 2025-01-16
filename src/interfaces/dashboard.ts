import { ReactNode } from "react";

export interface ILink {
  label: string;
  href: string;
  icon: ReactNode;
}

export interface IModuleData {
  moduleTitle: string;
  moduleLinks: ILink[];
}

export interface IModuleProps {
  open: boolean;
  moduleData: IModuleData;
}
