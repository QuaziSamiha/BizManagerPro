// ? 24 & 26 & 27 April, 25
"use client";

import "react-toastify/dist/ReactToastify.css";
// ? ========== REACT HOOK FORM & VALIDATION ============
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
//? ============= TYPE DEFINITION ===========
import { IModal } from "@/interfaces/table";
import { ISelectOption, ISingleSelectOption } from "@/interfaces/form";
// ? ========= AUTH DATA ============
import { getFromLocalStorage } from "@/utils/local-storage";
import { appId } from "../../../../authData";
// ? =========== CUSTOM INPUT FIELD IMPORTED =============
import ToggleButton from "@/components/ui/form/ToggleButton";
import InputField from "@/components/ui/form/InputField";
import SelectField from "@/components/ui/form/SelectField2";
import SingleSelect from "@/components/ui/form/SingleSelectSearch";
import SubmitButton from "@/components/ui/form/SubmitButton";
// ? ======== REACT HOOK ===========
import { useEffect, useRef, useState } from "react";
// ? ============ CUSTOM HOOK ==========
import { useGet } from "@/hooks/useGet";
import { usePostFormData } from "@/hooks/usePost";
import productSchema from "./schema";
import { axiosInstance } from "@/helpers/axios/axiosInstance";

interface IGetData<T> {
  dataList: T[];
}

interface IFormInputs {
  prodName: string;
  departmentId: string; // deptId: number;
  barcodeId?: string;
  sku?: string;
  isTaxable: boolean;
  isEBTAllowed: boolean;
  //   isAgeRestricted?: boolean;
  weight?: number;
  uom?: string; // uomId?: number;
  lowStockAlertQty?: number;
  // ? ======================= PRICING MODE =========================
  pricingMode: string;
  // ? ==== DIRECT UNIT MODE ====
  retailPriceDirectUnit?: number; // ? UNIT RETAIL PRICE FOR DIRECT UNIT MODE
  // ? ==== DIRECT CASE CALCULATION ====
  totalPrice?: number; // ? CASE COST
  packQty?: number; // ? UNIT PER CASE (TOTAL UNIT WITHIN A CASE)
  unitPriceCaseCalculation?: number; // ? UNIT COST
  profitMarginCaseCalculation?: number; // ? PROFIT PERCENTAGE - PROFIT MARGIN
  retailPriceCaseCalculation?: number; // ? UNIT RETAIL PRICE FOR CASE CALCULATION MODE
  // ? ==== DIRECT ITEM CALCULATION ======
  unitPriceItemCalculation?: number; // ? UNIT COST
  profitMarginItemCalculation?: number; // ? PROFIT PERCENTAGE - PROFIT MARGIN
  retailPriceItemCalculation?: number; // ? UNIT RETAIL PRICE FOR CASE CALCULATION MODE
}

const pricingModes: ISelectOption[] = [
  {
    id: 1,
    value: "mode1",
    label: "Direct Unit Mode",
  },
  {
    id: 2,
    value: "mode2",
    label: "Direct Case Calculation",
  },
  {
    id: 3,
    value: "mode3",
    label: "Direct Item Calculation",
  },
];

const Add: React.FC<IModal> = ({ setOpen, refetch }) => {
  const userId = Number(getFromLocalStorage("userId"));
  const companyId = Number(getFromLocalStorage("companyId"));
  const resolver = yupResolver(productSchema);
  const [shouldFetch, setShouldFetch] = useState(false);
  const [barcode, setBarcode] = useState("");

  // ========== REQUIRED REACT-HOOK-FORM'S METHODS ===============
  const {
    handleSubmit,
    trigger,
    control,
    reset,
    watch,
    setValue,
    formState: { errors },
  } = useForm<IFormInputs>({
    resolver,
  });

  const pricingMode = watch("pricingMode");
  const totalPrice: number | undefined = watch("totalPrice");
  const packQty = watch("packQty");
  const profitMarginCaseCalculation = watch("profitMarginCaseCalculation");
  const unitPriceItemCalculation = watch("unitPriceItemCalculation");
  const profitMarginItemCalculation = watch("profitMarginItemCalculation");
  const barcodeId = watch("barcodeId");
  const sku = watch("sku");

  useEffect(() => {
    const unitPrice =
      totalPrice && packQty ? Number(totalPrice) / Number(packQty) : undefined;

    if (unitPrice !== undefined) {
      setValue("unitPriceCaseCalculation", unitPrice);
    }

    const retailPrice =
      unitPrice && profitMarginCaseCalculation
        ? Number(unitPrice) +
          (Number(unitPrice) * Number(profitMarginCaseCalculation)) / 100
        : undefined;

    if (retailPrice !== undefined) {
      setValue("retailPriceCaseCalculation", retailPrice);
    }
  }, [totalPrice, packQty, profitMarginCaseCalculation, setValue]);

  useEffect(() => {
    const retailPrice =
      unitPriceItemCalculation && profitMarginItemCalculation
        ? Number(unitPriceItemCalculation) +
          (Number(unitPriceItemCalculation) *
            Number(profitMarginItemCalculation)) /
            100
        : undefined;

    if (retailPrice !== undefined) {
      setValue("retailPriceItemCalculation", retailPrice);
    }
  }, [unitPriceItemCalculation, profitMarginItemCalculation, setValue]);

  // useEffect(() => {
  //   if (barcodeId) {
  //     setValue("sku", barcodeId);
  //   }
  // }, [barcodeId, sku]);

  // ? ======= UOM DATA FETCHING =======
  const {
    data: uomData,
    isLoading: isUOMLoading,
    error: uomError,
  } = useGet<IGetData<{ uomId: number; uomName: string }>>(
    `setup-ws/api/v1/prod/get-uom-data?appId=${appId}&userId=${userId}&companyId=${companyId}&flag=AL`,
    ["allActiveUOMForProduct"]
  );
  const allUOM: ISingleSelectOption[] = (
    uomData?.dataList as { uomId: number; uomName: string }[]
  )?.map((uom) => ({
    id: uom.uomId,
    name: uom.uomName,
  }));
  // ? ========== API ERROR HANDLED ===========
  if (uomError) {
    console.error("Error to get UOM data: ", uomError);
  }

  // ? ======= DEPARTMENT DATA FETCHING =======
  const {
    data: departmentData,
    isLoading: isDeptLoading,
    error: deptError,
  } = useGet<IGetData<{ deptId: number; deptName: string }>>(
    `setup-ws/api/v1/prod/get-dept-by-com-id?appId=${appId}&userId=${userId}&companyId=${companyId}&flag=AC`,
    ["allActiveDeptForProduct"]
  );
  const allDepartment: ISingleSelectOption[] = (
    departmentData?.dataList as { deptId: number; deptName: string }[]
  )?.map((dept) => ({
    id: dept.deptId,
    name: dept.deptName,
  }));
  // ? ========== API ERROR HANDLED ===========
  if (deptError) {
    console.error("Error to get UOM data: ", deptError);
  }

  useEffect(() => {
    const fetchSKU = async () => {
      try {
        if (!barcodeId) return; // 👉 No barcodeId, no API call

        const response = await axiosInstance.get(
          `setup-ws/api/v1/prod/get-last-sku?companyId=${companyId}&barcodeId=${barcodeId}`
        );
        let newSKU;
        console.log("response", response);

        if (response.status === 200) {
          const lastSKU: string = response.data.data;
          const { statusCode, message } = response.data;

          if (statusCode === 204 && message === "No Data Found") {
            console.log("Product not added before");
            newSKU = barcodeId;
          } else if (statusCode === 200 && message === "Success") {
            console.log("Product added before");

            if (barcodeId === lastSKU) {
              console.log("First variant");
              newSKU = `${barcodeId}-1`;
            } else if (lastSKU.startsWith(`${barcodeId}-`)) {
              console.log("Barcode ID differs from last SKU");
              // You might want to handle this case too if needed
              const parts = lastSKU.split("-");
              const lastNumber = Number(parts[1]);
              newSKU = `${barcodeId}-${lastNumber + 1}`;
            }
          } else {
            console.warn("Unexpected response:", response.data);
          }
        } else {
          console.error(
            "Failed API response:",
            response.status,
            response.statusText
          );
        }

        // if (response.status === 200) {
        //   // console.log(response);
        //   const lastSku: string = response.data.data; // last fetched sku

        //   let newSku = barcodeId; // default set

        //   if (!lastSku) {
        //     // 🟡 If last SKU is empty, set SKU same as barcodeId
        //     newSku = barcodeId;
        //   } else if (lastSku === barcodeId) {
        //     // 🟡 If last SKU === barcodeId, then first variant -> barcodeId-1
        //     newSku = `${barcodeId}-1`;
        //   } else if (lastSku.startsWith(`${barcodeId}-`)) {
        //     // 🟡 If last SKU like barcodeId-1, barcodeId-2, etc.
        //     const parts = lastSku.split("-");
        //     const lastNumber = Number(parts[1]);

        //     if (!isNaN(lastNumber)) {
        //       newSku = `${barcodeId}-${lastNumber + 1}`;
        //     }
        //   }

        //   setValue("sku", newSku);
        // }
        setValue("sku", newSKU);
      } catch (error) {
        console.error("Error fetching SKU:", error);
      }
    };

    fetchSKU();
  }, [barcodeId, companyId, setValue]);

  // ? =========== POST API CALL ===========
  const { mutate: addProduct } = usePostFormData(
    "setup-ws/api/v1/prod/save-product",
    () => {
      refetch?.();
      reset();
      setOpen(false);
    }
  );

  // ? =============== FORM SUBMIT FUNCTION ================
  const onSubmit: SubmitHandler<IFormInputs> = (data) => {
    // console.log(data);
    const productPayload = {
      prodName: data.prodName,
      deptId: data.departmentId,
      sku: data.sku ? data.sku : "",
      barcodeId: data.barcodeId ? data.barcodeId : "",
      isTaxable: data.isTaxable ? 1 : 0,
      isEBTAllowed: data.isEBTAllowed ? 1 : 0,
      weight: data.weight ? data.weight : "",
      uomId: data.uom,
      lowStockAlertQty: data.lowStockAlertQty,
      totalPrice: 0,
      packQty: 1,
      unitPrice: 0,
      profitPct: 0,
      retailPrice: 0,
      entryBy: userId,
      companyId: companyId,
      priceCalType: data.pricingMode,
      // totalQty: 0,
    };
    if (pricingMode === "mode1") {
      productPayload.retailPrice = Number(data.retailPriceDirectUnit);
      productPayload.unitPrice = Number(data.retailPriceDirectUnit);
    }
    if (pricingMode === "mode2") {
      productPayload.totalPrice = Number(data.totalPrice); //? CASE COST
      productPayload.packQty = Number(data.packQty); //? UNIT PER CASE
      productPayload.unitPrice = Number(data.unitPriceCaseCalculation); //? UNIT COST
      productPayload.profitPct = Number(data.profitMarginCaseCalculation);
      productPayload.retailPrice = Number(data.retailPriceCaseCalculation);
    }
    if (pricingMode === "mode3") {
      productPayload.unitPrice = Number(data.unitPriceItemCalculation);
      productPayload.profitPct = Number(data.profitMarginItemCalculation);
      productPayload.retailPrice = Number(data.retailPriceItemCalculation);
    }
    // console.log(productPayload);
    addProduct(productPayload);
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            e.preventDefault(); // 👈 Prevent Enter key from submitting form
          }
        }}
      >
        <div className="flex flex-col gap-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <InputField
              labelName="Name"
              placeholderText="Enter Product Name..."
              name="prodName"
              control={control}
              trigger={trigger}
              isRequired
            />
            <SingleSelect
              labelName="Select a department"
              name="departmentId"
              control={control}
              options={allDepartment}
              isLoading={isDeptLoading}
              isRequired
            />

            <InputField
              labelName="Scan Product"
              placeholderText="Scan Product"
              name="barcodeId"
              control={control}
              trigger={trigger}
            />
            <InputField
              labelName="SKU"
              placeholderText="Add Product Variant"
              name="sku"
              control={control}
              trigger={trigger}
            />
            <ToggleButton
              labelName="Tax"
              name="isTaxable"
              control={control}
              defaultValue={1}
              positiveText="Enable"
              negativeText="Disable"
            />
            <ToggleButton
              labelName="EBT Allowance"
              name="isEBTAllowed"
              control={control}
              defaultValue={1}
              positiveText="Enable"
              negativeText="Disable"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <InputField
              labelName="Weight"
              placeholderText="Product Weight"
              name="weight"
              control={control}
              trigger={trigger}
            />
            <SingleSelect
              labelName="Select a UOM"
              name="uom"
              control={control}
              options={allUOM}
              isLoading={isUOMLoading}
            />
            <InputField
              labelName="Low Stock Alert"
              placeholderText="Low Stock Quantity"
              inputType="number"
              name="lowStockAlertQty"
              control={control}
              trigger={trigger}
            />
          </div>
          <div className="flex flex-col gap-8">
            <SelectField
              label="Pricing Mode"
              placeholderText="Select Pricing Mode..."
              name="pricingMode"
              control={control}
              trigger={trigger}
              data={pricingModes}
              labelKey="label"
              valueKey="value"
              errors={errors}
              isLoading={false}
              isRequired
            />
            <div>
              {pricingMode === "mode1" && (
                <InputField
                  labelName="Unit Retail Price"
                  placeholderText="$ 00.00"
                  inputType="number"
                  name="retailPriceDirectUnit"
                  control={control}
                  trigger={trigger}
                  isRequired
                />
              )}
              {pricingMode === "mode2" && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <InputField
                    labelName="Case Cost"
                    placeholderText="$ 00.00"
                    inputType="number"
                    name="totalPrice"
                    control={control}
                    trigger={trigger}
                    isRequired
                  />
                  <InputField
                    labelName="Unit Per Case"
                    placeholderText="$ 00.00"
                    inputType="number"
                    name="packQty"
                    control={control}
                    trigger={trigger}
                    isRequired
                  />
                  <InputField
                    labelName="Unit Cost"
                    placeholderText="$ 00.00"
                    inputType="number"
                    name="unitPriceCaseCalculation"
                    control={control}
                    trigger={trigger}
                    disabled
                  />
                  {/* totalPrice / packQty = unit price */}
                  <InputField
                    labelName="Profit Margin"
                    placeholderText="% 00"
                    inputType="number"
                    name="profitMarginCaseCalculation"
                    control={control}
                    trigger={trigger}
                    isRequired
                  />
                  <InputField
                    labelName="Unit Retail Price"
                    placeholderText="$ 00.00"
                    inputType="number"
                    name="retailPriceCaseCalculation"
                    control={control}
                    trigger={trigger}
                    disabled
                  />
                  {/* profit margin + unit cost = unit retail price */}
                </div>
              )}
              {pricingMode === "mode3" && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <InputField
                    labelName="Unit Cost"
                    placeholderText="$ 00.00"
                    inputType="number"
                    name="unitPriceItemCalculation"
                    control={control}
                    trigger={trigger}
                    isRequired
                  />
                  <InputField
                    labelName="Profit Margin"
                    placeholderText="% 00"
                    inputType="number"
                    name="profitMarginItemCalculation"
                    control={control}
                    trigger={trigger}
                    isRequired
                  />
                  <InputField
                    labelName="Unit Retail Price"
                    placeholderText="$ 00.00"
                    inputType="number"
                    name="retailPriceItemCalculation"
                    control={control}
                    trigger={trigger}
                    disabled
                  />
                </div>
              )}
            </div>
          </div>
          <SubmitButton submitTitle="Add Product" />
        </div>
      </form>
    </div>
  );
};

export default Add;
