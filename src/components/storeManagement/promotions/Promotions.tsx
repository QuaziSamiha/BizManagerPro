"use client"
import { useState } from "react";
import PromoProductList from "./PromoProductList/PromoProductList";
import MixAndMatchPromo from "./MixAndMatchPromo/MixAndMatchPromo";
import CombinationPromo from "./CombinationPromo/CombinationPromo";

const Promotions = () => {
  const [selected, setSelected] = useState("PromoProductList");

  return (
    <div>
      <div className="flex justify-between pb-7">
        <button
          className={`select-none px-3 py-2 rounded-md font-semibold  text-base ${selected==="PromoProductList"?" text-violetAltPrimary border border-violetAltPrimary":"text-white bg-violetAltPrimary"} `}
          onClick={() => setSelected("PromoProductList")}
        >
          Promotional Product List
        </button>
        <button
            className={`select-none px-3 py-2 rounded-md font-semibold  text-base ${selected==="MixAndMatchPromo"?" text-violetAltPrimary border border-violetAltPrimary":"text-white bg-violetAltPrimary"} `}
          onClick={() => setSelected("MixAndMatchPromo")}
        >
          Mix & Match Promotion
        </button>
        <button
              className={`select-none px-3 py-2 rounded-md font-semibold  text-base ${selected==="CombinationPromo"?" text-violetAltPrimary border border-violetAltPrimary":"text-white bg-violetAltPrimary"} `}
          onClick={() => setSelected("CombinationPromo")}
        >
          Combination Promotion
        </button>
      </div>
      {selected === "PromoProductList" && <PromoProductList/>}
      {selected === "MixAndMatchPromo" && <MixAndMatchPromo/>}
      {selected === "CombinationPromo" && <CombinationPromo/>}
    </div>
  );
};

export default Promotions;

