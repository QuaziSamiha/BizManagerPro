"use client";

import { useState } from "react";
import RegConfiguration from "./regConfiguration/RegConfiguration";
import RegisterList from "./registerList/RegisterList";

const Registers = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div>
      {open ? (
        // =========== NEW REGISTRATION ==============
        <RegConfiguration handleOpen={handleOpen} isDisable={false} />
      ) : (
        // ============ TABLE =============
        <RegisterList handleOpen={handleOpen} />
      )}
    </div>
  );
};

export default Registers;
