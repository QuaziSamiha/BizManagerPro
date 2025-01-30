export interface IAdd {
  setOpen: (open: boolean) => void;
  refetch: () => void;
}

export interface IEdit {
  setOpen: (open: boolean) => void;
  refetch: () => void;
}

export interface ISubmitButton {
  submitTitle: string;
  bgColor?: string;
  hoverBgColor?: string;
}
