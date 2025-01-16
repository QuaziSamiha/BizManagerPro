import React from "react";
import Wave from "../ui/svg/register/Wave";
import Cart from "../ui/svg/register/Cart";
// import { ScrollArea } from "../ui/scroll-area";

const products = [
  { name: "Sunsilk", price: 200.0 },
  { name: "Dove", price: 250.0 },
  { name: "Pantene", price: 300.0 },
  { name: "Head & Shoulders", price: 280.0 },
  { name: "Tresemme", price: 350.0 },
  { name: "Herbal Essences", price: 400.0 },
  { name: "Clear", price: 220.0 },
  { name: "Loreal", price: 450.0 },
  { name: "Clinic Plus", price: 180.0 },
  { name: "Garnier", price: 270.0 },
  { name: "Sunsilk", price: 200.0 },
  { name: "Dove", price: 250.0 },
  { name: "Pantene", price: 300.0 },
  { name: "Head & Shoulders", price: 280.0 },
  { name: "Tresemme", price: 350.0 },
  { name: "Herbal Essences", price: 400.0 },
  { name: "Clear", price: 220.0 },
  { name: "Loreal", price: 450.0 },
  { name: "Head & Shoulders", price: 280.0 },
  { name: "Tresemme", price: 350.0 },
  { name: "Herbal Essences", price: 400.0 },
  { name: "Clear", price: 220.0 },
  { name: "Herbal Essences", price: 400.0 },
  { name: "Clear", price: 220.0 },
  { name: "Loreal", price: 450.0 },
  { name: "Head & Shoulders", price: 280.0 },
  { name: "Tresemme", price: 350.0 },
  { name: "Herbal Essences", price: 400.0 },
  { name: "Clear", price: 220.0 },
];

const Receipt = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="relative overflow-y-auto scrollbar h-[30vw] bg-bgSecondary">
        <div className="border-4 border-red-500">
          <Wave />
        </div>
        {/* <ScrollArea> */}
          <div className="w-full flex flex-col bg-bgSecondary border-2 border-green-500 min-h-fit">
            <div className="p-4 border-b border-dashed border-black">
              <div className="text-4xl flex font-bold gap-5">
                <div className="w-14 h-12">
                  <Cart />
                </div>
                <p className="break-all">ECHOMART</p>
              </div>
              <div className="text-center text-textPrimary text-sm font-medium">
                <p>Store #1234</p>
                <p>123 Main Street</p>
                <p>City, State, ZIP</p>
                <p>Phone: 017360986</p>
              </div>
            </div>
            <div className="px-4 py-6">
              {products.map((product, index) => (
                <div key={index} className="flex justify-between">
                  <p>{product.name}</p> <p>{product.price}</p>
                </div>
              ))}
            </div>
            <div className="flex justify-center items-center py-6 border-t border-dashed border-black">
              <div className="text-center text-textPrimary font-medium">
                <p className="font-semibold text-xl">THANK YOU</p>
                <p className="text-sm">
                  for shopping at <span className="text-lg">LAAN TECH USA</span>
                </p>
                <p className="text-sm">Customer Service: 0173609863</p>
              </div>
            </div>
          </div>
        {/* </ScrollArea> */}
        <div className="rotate-180 border-4 border-blue-500">
          <Wave />
        </div>
      </div>
      <button className="bg-greenPrimary text-primary font-semibold text-base py-2 rounded-md">
        Download Receipt
      </button>
    </div>
  );
};

export default Receipt;
