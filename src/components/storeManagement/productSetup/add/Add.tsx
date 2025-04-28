import SubmitButton from "@/components/ui/form-inputs/SubmitButton";
import { IModal } from "@/interfaces/share";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import BasicInfo from "./BasicInfo";
import InventoryInfo from "./InventoryInfo";
import PricingMode from "./PricingMode";
import productSchema, { IFormInputs } from "../schema";
import { yupResolver } from "@hookform/resolvers/yup";

const Add: React.FC<IModal> = ({ setOpen }) => {
  const resolver = yupResolver(productSchema);

  const methods = useForm<IFormInputs>({
    resolver,
  });
  const { watch, handleSubmit } = methods;

  const pricingMode = watch("pricingMode");

  const onSubmit: SubmitHandler<IFormInputs> = (data: IFormInputs) => {
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
      priceCalType: data.pricingMode,
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
    console.log("Product Payload : ", productPayload);
    setOpen(false);
  };

  return (
    <div>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-10">
            <BasicInfo />
            <InventoryInfo />
            <PricingMode />
            <SubmitButton submitTitle="Add Product" />
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default Add;
