"use client";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/nav/Navbar";
import Wishlist from "@/components/sidebar/WishlistSidebar";
import React, { useState } from "react";

interface parentHomeWrapperProps {
  children: React.ReactNode;
}

const ParentHomeWrapper: React.FC<parentHomeWrapperProps> = ({
  children,
}: {
  children: any;
}) => {
  const [wishlistBar, setWishlistBar] = useState<Boolean>(false);

  return (
    <div
      className={`size-full relative ${wishlistBar ? "overflow-hidden" : ""}`}
    >
      <Navbar setWishlistBar={setWishlistBar} />
      <div
        className={`fixed top-0 size-full z-50 transition-all duration-500 ${
          wishlistBar ? "left-0 opacity-100" : "left-full opacity-0"
        }`}
      >
        <Wishlist setWishlistBar={setWishlistBar} />
      </div>
      <div
        className={`fixed top-0 size-full transition-all duration-500 ${
          wishlistBar
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
