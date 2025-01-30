"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Image from "next/image";
import { ChangeEvent, useState } from "react";
import { MdDelete, MdEdit } from "react-icons/md";
import { FaImages } from "react-icons/fa";
import { ISingleImageInput } from "@/interfaces/form";
import { PiInfoThin } from "react-icons/pi";

const SingleImageInput: React.FC<ISingleImageInput> = ({
  labelName,
  selectedImage,
  setSelectedImage,
  isRequired = false,
}) => {
  // ============ STATE INITIALIZED TO STORE SINGLE FILE DATA =============
  const [imageSrc, setImageSrc] = useState<string | null>(null);

  // ================= SELECT SINGLE FILE FUNCTION ========================
  const selectFile = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const imageFile = e.target.files[0];
      setSelectedImage(imageFile);
      const reader = new FileReader();
      reader.readAsDataURL(imageFile);
      reader.onload = () => setImageSrc(reader.result as string);
      reader.onerror = () => {
        console.error(reader.error);
      };
    }
  };

  // ==================== REMOVE SELECTED IMAGE ============================
  const removeSelectedImage = () => {
    setSelectedImage(null);
    setImageSrc(null);
  };

  return (
    <div className="flex flex-col gap-3">
      <label className="text-black text-base font-normal pl-2">
        {labelName}
        {isRequired && <span className="text-red-500 px-0.5">*</span>}
      </label>
      <div className="border border-blue-200 rounded w-full h-24">
        {!selectedImage ? (
          <div className="flex items-center justify-center h-full">
            <div className="flex items-center justify-center gap-6">
              <FaImages fontSize={50} className="text-blue-500" />
              {/* ================================= INPUT FIELD ================================ */}
              <div className="text-center">
                <label className="text-link text-base font-normal hover:text-blue-500 cursor-pointer">
                  <input
                    hidden
                    type="file"
                    accept="image/*"
                    onChange={selectFile}
                    className="outline-none"
                  />
                  Click here to Upload Screenshot
                </label>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex justify-evenly items-center h-full w-full p-2 gap-6">
            {/* ======================= EDIT SELECT FILE OPTION ========================= */}
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <label htmlFor="editFile" className="cursor-pointer">
                    <MdEdit fontSize={24} />
                  </label>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Change this file</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>

            {/* ======================== EDIT SELECT FILE ========================= */}
            <input
              id="editFile"
              hidden
              accept="image/*"
              type="file"
              onChange={selectFile}
            />

            {/* ======================= DISPLAY SELECTED FILE ===================== */}
            <div>
              <Image
                src={imageSrc || ""}
                alt={`Selected file ${labelName}`}
                width={80}
                height={80}
                className="rounded"
              />
            </div>

            {/* ===================== DELETE SELECTED IMAGE ======================= */}
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <button
                    onClick={removeSelectedImage}
                    className="cursor-pointer"
                  >
                    <MdDelete fontSize={24} />
                  </button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Delete this file</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
        )}
      </div>

      {/* ====================== SELECT FILE CRITERIA ======================= */}
      <div className="flex items-center gap-1">
		<PiInfoThin />
        <p className="text-ashPrimary text-sm">
          Up to <span className="font-semibold">5 MB</span>; Format:
          <span className="font-semibold"> JPEG</span>,
          <span className="font-semibold"> JPG</span>,
          <span className="font-semibold"> PNG</span>,
        </p>
      </div>
    </div>
  );
};

export default SingleImageInput;
