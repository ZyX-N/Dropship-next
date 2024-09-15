"use client";
import Footer from "@/components/footer/Footer";
import Navbar from "@/components/nav/Navbar";
import Wishlist from "@/components/sidebar/WishlistSidebar";
import React, { useEffect, useState } from "react";

const ParentHomeWrapper = ({ children }: { children: any }) => {
  const [wishlistBar, setWishlistBar] = useState(false);
console.log("stttt");

  return (
    <div className="size-full relative">
      <Navbar setWishlistBar={setWishlistBar} />
      <div className="absolute top-0 left-0 size-full z-50">
        <Wishlist />
      </div>
      {children}
      <Footer />
    </div>
  );
};

export default ParentHomeWrapper;
