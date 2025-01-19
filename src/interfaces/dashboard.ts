import { IconType } from "react-icons/lib";

export interface ILink {
  label: string;
  href: string;
  icon: IconType;
}

export interface IModuleData {
  moduleTitle?: string;
  moduleLinks: ILink[];
}

export interface IModuleProps {
  open: boolean;
  moduleData: IModuleData;
}
