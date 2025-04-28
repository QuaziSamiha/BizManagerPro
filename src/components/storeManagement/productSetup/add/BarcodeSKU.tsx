import InputField from "@/components/ui/form-inputs/InputField";
import { useEffect } from "react";
import { useFormContext } from "react-hook-form";

const BarcodeSKU = () => {
  const { control, trigger, watch, setValue } = useFormContext();
  const barcodeId = watch("barcodeId");

  useEffect(() => {
    if (!barcodeId) {
      return;
    } else {
      setValue("sku", barcodeId);
    }
  }, [barcodeId, setValue]);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
        disabled
      />
    </div>
  );
};

export default BarcodeSKU;
