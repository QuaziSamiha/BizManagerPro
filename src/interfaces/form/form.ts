import { Control, FieldValues, Path, UseFormTrigger } from "react-hook-form";
import { IconType } from "react-icons/lib";

export interface ISubmitButton {
  submitTitle: string;
  bgColor?: string;
  hoverBgColor?: string;
}

// ============= THIS INPUT FIELD IS USEFUL FOR USE-FIELD-ARRAY ===================
export interface IInputField<
  T extends FieldValues,
  Type extends "text" | "number" | "email"
> {
  labelName?: string;
  inputType?: Type;
  IconComponent?: IconType | undefined;
  placeholderText: string;
  name: Path<T>;
  control?: Control<T>;
  trigger?: UseFormTrigger<T>;
  disabled?: boolean;
  isRequired?: boolean;
  defaultValue?: Type extends "number" ? number : string;
  requiredMessage?: string;
}

// ============ SINGLE SELECT SEARCH FIELD ==============
export interface ISingleSelectOption {
  id: string | number;
  name: string;
}

export interface ISingleSelect<T extends FieldValues> {
  labelName: string;
  name: Path<T>;
  options: ISingleSelectOption[];
  control: Control<T>;
  isRequired?: boolean;
  isLoading?: boolean;
}

// ========= TOGGLE BUTTON LARGE =========

export interface IToggleButton<T extends FieldValues> {
  labelName?: string;
  name: Path<T>;
  control: Control<T>;
  positiveText?: string;
  negativeText?: string;
  defaultValue: boolean | number;
  className?: string;
}

// ========= SINGLE SELECT FIELD WITHOUT SEARCH OPTION =============

export interface ISelectOption {
  id: number;
  label: string;
  value: string | number;
}

export interface ISelectField<T extends FieldValues> {
  label?: string;
  placeholderText?: string;
  name: Path<T>;
  control: Control<T>;
  trigger: UseFormTrigger<T>;
  data?: ISelectOption[];
  labelKey: "label";
  valueKey: "value";
  makeDisable?: boolean;
  isLoading?: boolean;
  onChange?: (value: unknown) => void;
  defaultValue?: string;
  isRequired?: boolean;
  requiredMessage?: string;
}
