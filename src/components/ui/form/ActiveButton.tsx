'use client'
import { useEffect, useState } from "react";
import { UseFormRegister, UseFormSetValue } from "react-hook-form";

interface StatusToggleProps {
  register: UseFormRegister<any>;
  setValue: UseFormSetValue<any>;
  name: string;
  initialStatus?: boolean;
  onStatusChange?: (status: boolean) => void;
}

const ActiveButton: React.FC<StatusToggleProps> = ({
  register,
  setValue,
  name,
  initialStatus = false,
  onStatusChange,
}) => {
  const [isActive, setIsActive] = useState(initialStatus);

  useEffect(() => {
    register(name);
    setValue(name, isActive);
  }, [isActive, name, register, setValue]);

  const toggleStatus = () => {
    const newStatus = !isActive;
    setIsActive(newStatus);
    setValue(name, newStatus);
    if (onStatusChange) {
      onStatusChange(newStatus);
    }
  };

  return (
    <div className="flex gap-2 justify-end w-full mt-7">
      <div className="flex items-center gap-3 rounded-lg">
        <span
          className={`font-medium ${
            isActive ? "text-textPrimary" : "text-blackPrimary"
          }`}
        >
          Active
        </span>
        <button
          type="button"
          onClick={toggleStatus}
          className={`relative w-16 h-7 rounded-full cursor-pointer transition-colors duration-200 ease-in-out ${
            isActive ? "bg-blackPrimary" : "bg-textPrimary"
          }`}
        >
          <div
            className={`absolute top-1 h-5 w-5 rounded-full transition-transform duration-200 ease-in-out ${
              isActive
                ? "translate-x-10 bg-blackAltPrimary"
                : "translate-x-1 bg-blackPrimary"
            }`}
          />
        </button>
      </div>
    </div>
  );
};

export default ActiveButton;
