"use client";
import { info } from "./info";
import React, { useState } from "react";
import { VscTriangleRight } from "react-icons/vsc";
import styles from "@/styles/Drag.module.css";
import ButtonClickModal from "./ButtonClickModal";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";

interface IData {
  rowSpan?: string;
  colSpan?: string;
  buttonElement: string | React.ReactNode;
  type?: string;
  department: string;
}

interface IItem {
  id: number;
  data: IData;
  color?: string;
}

const TouchConfigure = () => {
  const [data, setData] = useState<IItem[]>(info);
  // console.log(data);
  const [draggedItem, setDraggedItem] = useState<IItem>();
const [selectedItem, setSelectedItem] = useState<number | null>(null);
  const handleDragStart = (e: React.DragEvent<HTMLDivElement>, item: IItem) => {
    console.log("Drag start: ", item);
    setDraggedItem(item);
    (e.target as HTMLDivElement).style.opacity = "0.5";
    e.dataTransfer.effectAllowed = "move";
  };

  const handleDragEnd = (e: React.DragEvent<HTMLDivElement>) => {
    (e.target as HTMLDivElement).style.opacity = "1";
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDrop = (
    e: React.DragEvent<HTMLDivElement>,
    targetItem: IItem
  ) => {
    e.preventDefault();

    if (draggedItem && targetItem.data.type !== "fixed") {
      const updatedData = data.map((d) => {
        if (d.id === draggedItem.id) {
          return {
            ...d,
            // Only swap the `data` part of dragged item with the targetItem
            data: { ...targetItem.data },
          };
        }
        if (d.id === targetItem.id) {
          return {
            ...d,
            // Only swap the `data` part of target item with the dragged item
            data: { ...draggedItem.data },
          };
        }
        return d;
      });

      setData(updatedData);
    }
  };
  // console.log(data);

  return (
    <div>
      <div className="grid grid-cols-8 grid-rows-8 gap-1 p-4 rounded-xl h-screen bg-bgPrimary">
        {data.map((item) => (
          <div
            className={`${
              item.color === "firstBlock"
                ? `bg-violetQuaternary text-primary`
                : item.color === "lastBlock"
                ? `bg-primary  text-bgPrimary`
                : item.color === "blue"
                ? "bg-violetAltSecondary text-primary"
                : item.color === "white"
                ? "bg-primary text-textPrimary"
                : item.color === "red"
                ? "bg-redSecondary text-primary"
                : "bg-bgPrimary"
            } ${item.data.colSpan} ${
              item.data.rowSpan
            } m-1 flex justify-center items-center rounded ${
              item.color === "black" ? "" : "p-3 hover:p-0"
            } font-semibold  ${
              item.color === "lastBlock"
                ? styles.outerLastDivShadow
                : item.color === "firstBlock"
                ? styles.outerFirstDivShadow
                : styles.outerDivShadow
            } cursor-pointer`}
            key={item.id}
            draggable={item.data.type !== "fixed"}
            onDragStart={(e) => handleDragStart(e, item)}
            onDragEnd={handleDragEnd}
            onDragOver={handleDragOver}
            onDrop={(e) => handleDrop(e, item)}
          >
            <div
              className={`${
                item.color === "firstBlock" || item.color === "lastBlock"
                  ? ""
                  : item.color === "blue"
                  ? `bg-violetQuaternary ${styles.innerBlueDivShadow}`
                  : item.color === "white"
                  ? `bg-whiteSecondary ${styles.innerWhiteDivShadow}`
                  : item.color === "red"
                  ? `bg-redTernary ${styles.innerRedDivShadow}`
                  : ""
              } w-full h-full rounded`}
            >
              {/* ============= EDIT BUTTON IF NOT FIXED =============== */}
              {item?.data.type !== "fixed" ? (
                <Dialog>
                  <DialogTrigger
                    className="w-full h-full z-50 text-nowrap"
                    onClick={() => setSelectedItem(item.id)}
                  >
                    {item?.data.buttonElement}
                    {item?.data.buttonElement === "More" && (
                      <VscTriangleRight size={20} />
                    )}
                  </DialogTrigger>
                 
                  <ButtonClickModal
                    id={item.id}
                    color={item.color}
                    data={item.data}
                  />
                </Dialog>
              ) : (
                // ========== FIXED BUTTON =========
                <div className="w-full h-full flex justify-center items-center text-nowrap">
                  {item?.data.buttonElement}

                  {item?.data.buttonElement === "More" && (
                    <VscTriangleRight size={20} />
                  )}
                </div>
              )}
            </div>
          </div> 
        ))}
      </div>
    </div>
  );
};

export default TouchConfigure;

// "use client";
// import { info } from "./info";
// import React, { useState } from "react";
// import { VscTriangleRight } from "react-icons/vsc";
// import styles from "@/styles/Drag.module.css";
// import ButtonClickModal from "./ButtonClickModal";

// import { Dialog, DialogTrigger } from "@/components/ui/dialog";

// interface IItem {
//   id?: number;
//   rowSpan?: string;
//   colSpan?: string;
//   color?: string;
//   buttonElement: string | React.ReactNode;
//   type?: string;
//   department: string;
// }

// const TouchConfigure = () => {
//   const [data, setData] = useState(info);
//   // console.log(data);
//   const [draggedItem, setDraggedItem] = useState<IItem>();

//   const handleDragStart = (e: React.DragEvent<HTMLDivElement>, item: IItem) => {
//     setDraggedItem(item);
//     (e.target as HTMLDivElement).style.opacity = "0.5";
//   };

//   const handleDragEnd = (e: React.DragEvent<HTMLDivElement>) => {
//     (e.target as HTMLDivElement).style.opacity = "1";
//   };

//   const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
//     e.preventDefault();
//   };

//   const handleDrop = (e: React.DragEvent<HTMLDivElement>, targetItem: any) => {
//     e.preventDefault();

//     if (draggedItem && targetItem.type !== "fixed") {
//       const updatedData = data.map((d) => {
//         if (d.id === draggedItem.id) {
//           return { ...d, buttonElement: targetItem.buttonElement };
//         }
//         if (d.id === targetItem.id) {
//           return { ...d, buttonElement: draggedItem.buttonElement };
//         }
//         return d;
//       });

//       // console.log(updatedData);
//       setData(updatedData);
//     }
//   };

//   return (
//     <div>
//       <div className="grid grid-cols-8 grid-rows-8 gap-1 p-4 rounded-xl h-screen bg-bgPrimary">
//         {data.map((d) => (
//           <div
//             className={`${
//               d.color === "firstBlock"
//                 ? `bg-violetQuaternary text-primary`
//                 : d.color === "lastBlock"
//                 ? `bg-primary  text-bgPrimary`
//                 : d.color === "blue"
//                 ? "bg-violetAltSecondary text-primary"
//                 : d.color === "white"
//                 ? "bg-primary text-textPrimary"
//                 : d.color === "red"
//                 ? "bg-redSecondary text-primary"
//                 : "bg-bgPrimary"
//             } ${d.colSpan} ${
//               d.rowSpan
//             } m-1 flex justify-center items-center rounded ${
//               d.color === "black" ? "" : "p-3 hover:p-0"
//             } font-semibold  ${
//               d.color === "lastBlock"
//                 ? styles.outerLastDivShadow
//                 : d.color === "firstBlock"
//                 ? styles.outerFirstDivShadow
//                 : styles.outerDivShadow
//             } cursor-pointer`}
//             key={d.id}
//             draggable={d.type !== "fixed"}
//             onDragStart={(e) => handleDragStart(e, d)}
//             onDragEnd={handleDragEnd}
//             onDragOver={handleDragOver}
//             onDrop={(e) => handleDrop(e, d)}
//           >
//             <div
//               className={`${
//                 d.color === "firstBlock" || d.color === "lastBlock"
//                   ? ""
//                   : d.color === "blue"
//                   ? `bg-violetQuaternary ${styles.innerBlueDivShadow}`
//                   : d.color === "white"
//                   ? `${styles.innerWhiteDivShadow} bg-whiteSecondary`
//                   : d.color === "red"
//                   ? `bg-redTernary ${styles.innerRedDivShadow}`
//                   : ""
//               } w-full h-full rounded`}
//             >
//               {/* ============= EDIT BUTTON IF NOT FIXED =============== */}
//               {d?.type !== "fixed" ? (
//                 <Dialog>
//                   <DialogTrigger className="w-full h-full z-50 text-nowrap">
//                     {d?.buttonElement}
//                     {d?.buttonElement === "More" && (
//                       <VscTriangleRight size={20} />
//                     )}
//                   </DialogTrigger>
//                   <ButtonClickModal
//                     id={d.id}
//                     rowSpan={d.rowSpan}
//                     colSpan={d.colSpan}
//                     color={d.color}
//                     buttonElement={d.buttonElement || ""}
//                     type={d.type}
//                     department={d.department}
//                   />
//                 </Dialog>
//               ) : (
//                 // ========== FIXED BUTTON =========
//                 <div className="w-full h-full flex justify-center items-center text-nowrap">
//                   {d?.buttonElement}
//                   {d?.buttonElement === "More" && (
//                     <VscTriangleRight size={20} />
//                   )}
//                 </div>
//               )}
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default TouchConfigure;
