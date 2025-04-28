import InputField from "@/components/ui/form-inputs/InputField";
import { useFormContext } from "react-hook-form";
import { pricingModes } from "../data/pricingModeData";
import SelectField from "@/components/ui/form-inputs/SelectField";
import { useEffect } from "react";

const PricingMode = () => {
  const { control, trigger, watch, setValue } = useFormContext();

  const pricingMode = watch("pricingMode");
  const totalPrice: number | undefined = watch("totalPrice");
  const packQty = watch("packQty");
  const profitMarginCaseCalculation = watch("profitMarginCaseCalculation");
  const unitPriceItemCalculation = watch("unitPriceItemCalculation");
  const profitMarginItemCalculation = watch("profitMarginItemCalculation");

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

  return (
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
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
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
  );
};

export default PricingMode;
