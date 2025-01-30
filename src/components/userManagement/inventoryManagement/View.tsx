const View = () => {
  return (
    <div className="flex flex-col gap-4 pt-4">
      <div className="bg-blueAltPrimary p-4 rounded-lg">
        <p className="text-center text-2xl font-bold text-blackPrimary">
          Product Name: POS Machine A
        </p>
      </div>
      <div className="text-blackPrimary flex flex-col gap-3">
        <p>
          Category <span className="pl-4 font-semibold">: POS Machine</span>
        </p>
        <p>
          Stock Level <span className="pl-4 font-semibold">: 10</span>
        </p>
        <p>
          Specification{" "}
          <span className="pl-4 font-semibold">
            : Dual screen, touchscreen, 8GB RAM
          </span>
        </p>
        <p>
          Serial Number <span className="pl-4 font-semibold">: #7A7A7A</span>
        </p>
        <p>
          Location <span className="pl-4 font-semibold">: Warehouse 1</span>
        </p>
        <p>
          Last Restock Date{" "}
          <span className="pl-4 font-semibold">: 02/01/2025</span>
        </p>
        <div className="flex">
          <p className="font-semibold">Stock Movement Log </p>
          <div className="pl-4  flex">
            <div>
              <p>
                Restocked{" "}
                <span className="pl-4 font-semibold">: +100(02/01/2025)</span>
              </p>
              <p>
                Last Restock Date{" "}
                <span className="pl-4 font-semibold">: -50(02/01/2025)</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default View;
