"use client";
import { Star } from "@/app/_components/icons";
import { getProductsDetails } from "@/app/_server";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Home = ({ params }: { params: { slug: string } }) => {
  const [data, setData] = useState<any>(null);
  const { slug } = params;

  const getProducts = async () => {
    const resp = await getProductsDetails({ slug });
    if (resp.status) {
      setData(resp.data);
    }
  };

  useEffect(() => {
    getProducts();
  }, [slug]);
  console.log(data);

  return (
    <>
      <main className="px-4 mx-auto py-6">
        <section className="text-black body-font">
          <div className="lg:w-full mx-auto flex flex-col lg:justify-center lg:flex-row">
            <div className="flex justify-end w-full lg:w-1/2">
              <div className="lg:w-8/12 flex flex-col gap-4 relative">
                <Image
                  src={data?.image[0]?.url || "https://dummyimage.com/400x400"}
                  alt="zixen"
                  className="w-full lg:h-auto h-64 object-cover object-center rounded-md"
                  width={400}
                  height={400}
                />
                <div className="flex gap-4 w-full">
                  <button
                    type="button"
                    className="w-[calc(50%-8px)] py-3 text-white rounded-md bg-amber-600 hover:bg-amber-700 hover:scale-105 transition-all duration-300"
                  >
                    Add to cart
                  </button>
                  <button
                    type="button"
                    className="w-[calc(50%-8px)] py-3 text-white rounded-md bg-amber-600 hover:bg-amber-700 hover:scale-105 transition-all duration-300"
                  >
                    Buy Now
                  </button>
                </div>
                <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4 absolute right-4 top-4">
                  <svg
                    fill="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    className="w-5 h-5 text-gray-800"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                  </svg>
                </button>
              </div>
            </div>
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest uppercase">
                {data?.category?.title || "ZIXEN"}
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                {data?.title || "-"}
              </h1>
              <div className="flex mb-2">
                <span className="flex items-center">
                  {[1, 2, 3, 4, 5].map((num: number) => (
                    <Star
                      key={num}
                      className="w-5 h-5 text-yellow-400"
                      fill={data?.rating < num ? "none" : "yellow"}
                    />
                  ))}

                  <span className="text-gray-600 ml-3">4 Reviews</span>
                </span>
                {/* <span className="flex gap-2 ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                  <a className="text-gray-500">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                  </a>
                  <a className="text-gray-500">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                  </a>
                  <a className="text-gray-500">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>
                  </a>
                </span> */}
              </div>

              <div className="flex w-full items-center gap-2">
                <p className="text-gray-900 font-medium text-2xl">
                  ₹{data?.price || "-"}
                </p>
                {data?.strikePrice && (
                  <span className="text-md text-gray-500 font-light">
                    <del className="ml-0.5">₹{data?.strikePrice}</del>
                  </span>
                )}
                {data?.stock === 0 && (
                  <span className="text-xs ml-1 font-medium text-red-500">
                    Out of stock
                  </span>
                )}
              </div>

              <div className="border-b-2 border-white my-3"></div>

              {/* Description */}
              <div
                // className="leading-relaxed pb-5 border-b-2 border-gray-100"
                className="leading-relaxed"
                dangerouslySetInnerHTML={{
                  __html: data?.description || "",
                }}
              />
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
