"use client";
import React, { useEffect, useState } from "react";
import ToolTip from "../tool-tip/info";
import { Cross } from "../icons/cross";
import { Person } from "../icons/person";
import Link from "next/link";
import Image from "next/image";

const Wishlist = () => {
  return (
    <div className="w-screen h-screen bg-gray-300 z-50">
      <div className="h-full w-2/3 lg:w-1/3 mr-auto bg-white flex flex-col">
        <h3 className="w-full py-4">Wishlist</h3>
      </div>
    </div>
  );
};

export default Wishlist;
