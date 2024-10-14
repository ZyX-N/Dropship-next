"use client";
import Footer from "@/app/_components/footer/Footer";
import Navbar from "@/app/_components/nav/Navbar";
import React, { useEffect, useState } from "react";
import Cartlist from "../sidebar/CartSidebar";
import { getCall } from "@/service/apiCall";
import { getLoginToken } from "@/service/token";

interface parentHomeWrapperProps {
  children: React.ReactNode;
}

const ParentHomeWrapper: React.FC<parentHomeWrapperProps> = ({
  children,
}: {
  children: any;
}) => {
  const [cartlistBar, setCartlistBar] = useState<Boolean>(false);
  const [cartlistData, setCartlistData] = useState<Array<any>>([]);

  const getCart = async () => {
    try {
      let resp = await getCall(`/cart`, {
        authorization: `Bearer ${getLoginToken()}`,
      });
      if (resp && resp.status) {
        setCartlistData(resp.data);
      }
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  useEffect(() => {
    getCart();
  }, []);

  return (
    <div className={`size-full relative`}>
      <Navbar setCartlistBar={setCartlistBar} />

      <div
        className={`fixed top-0 size-full z-50 transition-all duration-500 ${
          cartlistBar ? "left-0 opacity-100" : "left-full opacity-0"
        }`}
      >
        <Cartlist setCartlistBar={setCartlistBar} data={cartlistData} getCart={getCart} />
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
