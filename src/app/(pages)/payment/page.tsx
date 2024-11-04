"use client";
import React, { useContext, useEffect, useState } from "react";
import useRazorpay from "react-razorpay";
import { useRouter, useSearchParams } from "next/navigation";
import { getProductsDetails } from "@/app/_server";
import { getLoginToken } from "@/service/token";

const Home = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [product, setProduct] = useState(null);

  const getProductDetails = async (slug: string) => {
    const resp = await getProductsDetails({
      slug,
      header: { authorization: `Bearer ${getLoginToken()}` },
    });
    console.log(resp);
    
    if (resp.status) {
      setProduct(resp.data);
    } else {
      router.push("/not-found");
    }
  };

  const getCartDetails = async () => {

  };

  const checkPageValidity = () => {
    const type = searchParams.get("type");
    if (type !== "product" && type !== "cart") {
      router.push("/not-found");
    }

    if (type === "product") {
      const slug = searchParams.get("q") || "";
      getProductDetails(slug);
    }

    if (type === "cart") {
      getCartDetails();
    }
  };

  console.log(product);

  useEffect(() => {
    checkPageValidity();
  }, []);

  return <main className="px-4 mx-auto py-6">123</main>;
};

export default Home;
