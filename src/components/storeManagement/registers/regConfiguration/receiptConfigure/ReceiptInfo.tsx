import React, { ReactNode } from "react";
import Image from "next/image";
import Cart from "@/components/ui/svg/register/Cart";

interface Lines {
  line: string;
}

interface Props {
  header?: string;
  contact?: Lines[];
  footer?: Lines[];
}

interface IData {
  data?: Props
  children?: ReactNode;
}

function ReceiptInfo({ data, children }:  IData) {
  return (
    <div className="w-full flex flex-col bg-bgSecondary relative h-full">
      <div className="p-4 border-b border-dashed border-b-black flex flex-col items-center">
        <div className="text-4xl flex font-bold gap-5">
          <div className="w-14 h-12">
            <Cart />
          </div>
          <p className="break-all">{data?.header}</p>
        </div>
        {data && (
          <div className="w-full">
            {data.contact?.map((item, index) => (
              <p key={index} className="text-sm font-semibold text-center">
                {item.line}
              </p>
            ))}
          </div>
        )}
      </div>
      <div className="flex-1 min-h-60">{children}</div>
      <div className="py-4 px-10 border-t border-dashed border-t-black flex flex-col items-center">
        {data && (
          <div className="flex flex-col items-center px-10">
            {data.footer?.map((item, index) => (
              <div key={index} className="text-sm text-center">
                {index === 0 ? (
                  <h1 className="text-2xl font-semibold">{item.line}</h1>
                ) : index === 1 ? (
                  <>
                    <span>for shopping at </span>
                    <span className="font-semibold">{item.line}</span>
                  </>
                ) : (
                  <p>{item.line}</p>
                )}
              </div>
            ))}
          </div>
        )}
        <div>
          <Image
            src={"/images/register/qrCode.png"}
            priority={true}
            width={120}
            height={120}
            alt="qr code"
          />
        </div>
      </div>
    </div>
  );
}

export default ReceiptInfo;
