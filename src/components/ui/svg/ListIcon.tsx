import React from "react";

const ListIcon = ({ width = 24, height = 24, className = "" }) => {
  const defaultClassName = "stroke-current text-[#E9F4FF]";
  const combinedClassName = className ? `${defaultClassName} ${className}` : defaultClassName;

  return (
    <div>
      <svg
        width={width}
        height={height}
        viewBox="0 0 24 24"
        fill="transparent"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18.0667 4H5.93333C5.41787 4 5 4.44772 5 5V21C5 21.5523 5.41787 22 5.93333 22H18.0667C18.5821 22 19 21.5523 19 21V5C19 4.44772 18.5821 4 18.0667 4Z"
          className={combinedClassName}
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
        <path
          d="M9.19993 2V5M14.7999 2V5M8.2666 9.5H15.7333M8.2666 13.5H13.8666M8.2666 17.5H11.9999"
          className={combinedClassName}
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export default ListIcon;
