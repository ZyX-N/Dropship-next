"use client";
import React from "react";

export const Cross: React.FC<{
  className?: string;
  fill?: string;
  strokeWidth?: string;
}> = ({ className, fill = "none", strokeWidth = "1.5" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={fill}
      viewBox="0 0 24 24"
      strokeWidth={strokeWidth}
      stroke="currentColor"
      className={className || "w-6 h-6"}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18 18 6M6 6l12 12"
      />
    </svg>
  );
};
