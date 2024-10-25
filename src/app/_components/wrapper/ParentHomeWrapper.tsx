"use client";
import Footer from "@/app/_components/footer/Footer";
import Navbar from "@/app/_components/nav/Navbar";
import React, { useContext, useState } from "react";
import Cartlist from "../sidebar/CartSidebar";
import { ProContext } from "@/app/_context/contextProvider";

interface parentHomeWrapperProps {
  children: React.ReactNode;
}

const ParentHomeWrapper: React.FC<parentHomeWrapperProps> = ({
  children,
}: {
  children: any;
}) => {
  let { cartlistData, getCart_f }: any = useContext(ProContext);
  const [cartlistBar, setCartlistBar] = useState<Boolean>(false);

  return (
    <div className={`size-full relative`}>
      <Navbar setCartlistBar={setCartlistBar} />

      <div
        className={`fixed top-0 size-full z-50 transition-all duration-500 ${
          cartlistBar ? "left-0 opacity-100" : "left-full opacity-0"
        }`}
      >
        <Cartlist
          setCartlistBar={setCartlistBar}
          data={cartlistData}
          getCart={getCart_f}
        />
      </div>
      <div
        className={`fixed top-0 size-full transition-all duration-500 ${
          cartlistBar
            ? "left-0 opacity-100 bg-[rgba(0,0,0,0.5)] z-40"
            : "opacity-0 bg-transparent -z-50"
        }`}
      ></div>

      {children}
      <Footer />
    </div>
  );
};

export default ParentHomeWrapper;
