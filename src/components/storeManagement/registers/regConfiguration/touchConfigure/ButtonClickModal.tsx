import {
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { buttonSchema } from "./buttonSchema";
import SelectField from "@/components/ui/form/SelectField";
import SubmitButton from "@/components/ui/form/SubmitButton";
import Input from "./Input";

// ========== BUTTON ELEMENT TYPE DEFINITION =========
interface IData {
  rowSpan?: string;
  colSpan?: string;
  buttonElement: string | React.ReactNode;
  type?: string;
  department: string;
}

interface IItem {
  id: number;
  data: IData;
  color?: string;
}

interface IForm {
  buttonLabel: string;
  department: string;
}

// =========== DEPARTMENT TYPE ============
interface IDepartment {
  departmentValue: string;
  departmentName: string;
}

// ========= DEMO DEPARTMENTS =============
const departments: IDepartment[] = [
  {
    departmentValue: "dept_001",
    departmentName: "Admin",
  },
  {
    departmentValue: "dept_002",
    departmentName: "Beverages",
  },
  {
    departmentValue: "dept_003",
    departmentName: "Food",
  },
  {
    departmentValue: "dept_004",
    departmentName: "Tools",
  },
  {
    departmentValue: "dept_005",
    departmentName: "Drinks",
  },
  {
    departmentValue: "dept_006",
    departmentName: "Tobacco",
  },
  {
    departmentValue: "dept_007",
    departmentName: "Fuel",
  },
  {
    departmentValue: "dept_008",
    departmentName: "Frozen Goods",
  },
  {
    departmentValue: "dept_009",
    departmentName: "Dairy",
  },
  {
    departmentValue: "dept_010",
    departmentName: "Finance",
  },
  {
    departmentValue: "dept_011",
    departmentName: "Entertainment",
  },
  {
    departmentValue: "dept_012",
    departmentName: "Discounts",
  },
  {
    departmentValue: "dept_013",
    departmentName: "Sales",
  },
  {
    departmentValue: "dept_014",
    departmentName: "Miscellaneous",
  },
  {
    departmentValue: "dept_015",
    departmentName: "Operations",
  },
  {
    departmentValue: "dept_016",
    departmentName: "General",
  },
];

const ButtonClickModal: React.FC<IItem> = ({
  id,
  data: { rowSpan, colSpan, buttonElement, type, department },
  color,
}) => {
  console.log("id", id);
  console.log("button element", buttonElement);
  console.log("department", department);

  const resolver = yupResolver(buttonSchema);

  // ========= REACT HOOK FORM =========
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    control,
    resetField,
  } = useForm<IForm>({ resolver });

  // ============ SUBMIT FUNCTION ===========
  const onSubmit: SubmitHandler<IForm> = (data) => {
    const formData = JSON.stringify(data);
    console.log("Form data submitted:", formData);
    // console.log(buttonData);
    alert(formData);
  };

  // ============== FORM ERROR ==========
  const onError = (errors: any) => {
    console.error("Form submission errors:", errors);
  };

  return (
    <DialogContent className="w-2/4 bg-white">
      <DialogHeader className="pt-8 pl-3">
        <DialogTitle className="text-lg text-black font-semibold">
          Button Configure
        </DialogTitle>
      </DialogHeader>
      <form
        className="flex flex-col gap-5"
        onSubmit={handleSubmit(onSubmit, onError)}
      >
        <Input
          placeholderText="Label Name"
          inputType="text"
          labelName={"Label"}
          defaultValue={buttonElement}
          name="buttonLabel"
          errors={errors}
        />

        <SelectField
          control={control}
          name="department"
          data={departments}
          label="Select Department"
          placeholderText="-- Select Type --"
          errors={errors}
          labelKey="departmentName"
          valueKey="departmentValue"
          resetField={resetField}
          resetFieldName1="lists"
          resetFieldName2=""
          disabledValue="1"
          isLoading={false}
          // onChange={setSelected}
          //! DEFAULT VALUE IS NOT SHOWING --- HAVE TO RESOLVED
          defaultValue={department}
          isRequired
        />
        <SubmitButton
          submitTitle="Save Button"
          bgColor="bg-violetAltTernary"
          hoverBgColor="bg-transparent"
        />
      </form>
    </DialogContent>
  );
};

export default ButtonClickModal;
