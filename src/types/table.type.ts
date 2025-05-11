import { Table } from "@tanstack/react-table";
import { ReactNode } from "react";
import { IconType } from "react-icons/lib";

export interface ITableTrigger {
  open?: boolean;
  setOpen: (open: boolean) => void;
  buttonName?: string;
  ButtonIcon?: IconType;
  modalTitle?: string;
  children: ReactNode;
}

export interface ITableTool<TData> {
  filtering: string;
  setFiltering: React.Dispatch<React.SetStateAction<string>>;
  isLoading: boolean;
  table: Table<TData>;
  //   table: TableState;
  //   data: any[];
  //   refetch?: () => void;
  //   addTriggerButton?: boolean;
  //   buttonName?: string;
  //   ButtonIcon?: IconType;
  //   modalTitle?: string;
  //   open?: boolean;
  //   setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface ITableFilter {
  filtering: string;
  setFiltering: React.Dispatch<React.SetStateAction<string>>;
}

export interface ITable<TData> {
  table: Table<TData>;
  isLoading?: boolean;
}

export interface ITableActionPanel {
  filtering: string;
  setFiltering: React.Dispatch<React.SetStateAction<string>>;
  buttonName: string;
  ButtonIcon?: IconType;
  open: boolean;
  setOpen: (open: boolean) => void;
  modalTitle?: string;
  children?: ReactNode;
}
