import { IHeading } from "@/types/share.type";

export default function Heading({ headerName, subHeader }: IHeading) {
  return (
    <div className="flex flex-col gap-3 max-md:mt-6">
      <p className="font-semibold text-blueActual text-3xl">{headerName}</p>
      <p className="text-blackSecondary text-opacity-60 font-medium">
        {subHeader}
      </p>
    </div>
  );
}
