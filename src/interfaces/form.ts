import {
  Control,
  FieldErrors,
  FieldValues,
  UseFormRegister,
  UseFormResetField,
  UseFormSetValue,
} from "react-hook-form";

export interface IInput<T extends FieldValues> {
  labelName?: string;
  inputType?: string;
  placeholderText: string;
  name: keyof T;
  register: UseFormRegister<T>;
  errors?: FieldErrors<T>;
  disabled?: boolean;
  isRequired?: boolean;
  defaultValue?: string;
}

export interface ISelectField<T extends FieldValues, U> {
  label?: string;
  placeholderText?: string;
  name: keyof T;
  control?: Control<T>;
  resetField?: UseFormResetField<T>;
  errors?: FieldErrors<T>;
  data: U[];
  labelKey: keyof U;
  valueKey: keyof U;
  resetFieldName1?: keyof T;
  resetFieldName2?: keyof T;
  //  disabledValue?: string;
  makeDisable?: boolean;
  isLoading?: boolean;
  onChange?: (value: unknown) => void;
  defaultValue?: string;
  isRequired?: boolean;
}

export interface ITextArea<T extends FieldValues> {
  labelName?: string;
  inputType?: string;
  placeholderText: string;
  name: keyof T;
  register: UseFormRegister<T>;
  errors?: FieldErrors<T>;
  disabled?: boolean;
  isRequired?: boolean;
  defaultValue?: string;
}

export interface ISingleImageInput {
  labelName: string;
  selectedImage: File | null; // Single image file
  setSelectedImage: (image: File | null) => void;
  isRequired?: boolean;
}

export interface IDateInput<T extends FieldValues> {
  labelName?: string;
  placeholderText?: string;
  name: string;
  errors: FieldErrors<T>;
  control: Control<T>;
  setValue: UseFormSetValue<T>;
  isRequired?: boolean;
  dateFormat?: string;
  disabled?: boolean;
  defaultValue?: unknown;
}
