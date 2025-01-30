import { Table } from "@tanstack/react-table";
import { ReactNode } from "react";
import { IconType } from "react-icons/lib";

// export interface IHeaderGroupType {
//   id: string;
//   column: {
//     getToggleSortingHandler: () =>
//       | React.MouseEventHandler<HTMLDivElement>
//       | undefined;
//     columnDef: {
//       header:
//         | string
//         | number
//         | boolean
//         | React.ReactElement<any, string | React.JSXElementConstructor<any>>
//         | Iterable<React.ReactNode>
//         | React.ReactPortal
//         // | React.PromiseLikeOfReactNode
//         | React.ComponentType<any>
//         | null
//         | undefined;
//     };
//     getIsSorted: () => string;
//     getCanFilter: () => any;
//     setFilterValue: (arg0: string) => void;
//   };
//   getContext: () => any;
// }

// export interface ICellType {
//   id: string;
//   column: {
//     columnDef: {
//       cell:
//         | string
//         | number
//         | boolean
//         | React.ReactElement<any, string | React.JSXElementConstructor<any>>
//         | Iterable<React.ReactNode>
//         | React.ReactPortal
//         // | React.PromiseLikeOfReactNode
//         | React.ComponentType<any>
//         | null
//         | undefined;
//     };
//   };
//   getContext: () => any;
// }

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
