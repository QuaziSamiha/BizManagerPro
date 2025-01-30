import { ReactNode } from "react";
import { IconType } from "react-icons/lib";

export interface IMainHeading {
  headerName: string;
  subHeader?: string;
  buttonName: string;
  ButtonIcon?: IconType;
  open: boolean;
  setOpen: (open: boolean) => void;
  modalTitle?: string;
  children?: ReactNode;
}

export interface ITooltipDiv {
  name: string;
}
