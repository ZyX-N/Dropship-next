"use client";

import React, { ReactElement } from "react";

const ToolTip: React.FC<{ message: string; children: ReactElement }> = ({
  message,
  children,
}) => {
  return (
    <div
      className="relative flex items-center justify-center"
      onMouseEnter={(e) => {
        let infoBox = (e.currentTarget.firstChild as HTMLElement) || null;
        infoBox?.classList.remove("opacity-0");
        infoBox?.classList.add("opacity-100");
      }}
      onMouseLeave={(e) => {
        let infoBox = (e.currentTarget.firstChild as HTMLElement) || null;
        infoBox?.classList.remove("opacity-100");
        infoBox?.classList.add("opacity-0");
      }}
    >
      <span className="absolute px-2 py-1 top-[calc(-100%-8px)] left-1/2 -translate-x-1/2 bg-gray-900 text-gray-50 rounded-md opacity-0 transition-all duration-300 ease-in-out">
        {message}
      </span>
      {children}
    </div>
  );
};

export default ToolTip;
