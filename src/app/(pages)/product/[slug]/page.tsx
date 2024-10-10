"use client";
import { Calender } from "@/app/_components/calender/calender";
import { Cross, Star } from "@/app/_components/icons";
import { getProductsDetails } from "@/app/_server";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Home = ({ params }: { params: { slug: string } }) => {
  const { slug } = params;

  const [data, setData] = useState<any>(null);
  const [mainImage, setMainImage] = useState<string>("");
  const [pincode, setPincode] = useState<string>("");

  const getProducts = async () => {
    const resp = await getProductsDetails({ slug });
    if (resp.status) {
      setData(resp.data);
      if (resp.data.image && resp.data.image.length > 0) {
        setMainImage(
          resp.data.image[0]?.url || "https://dummyimage.com/400x400"
        );
      }
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
          <div className="lg:w-full mx-auto flex flex-col lg:justify-center lg:flex-row px-0 lg:px-4">
            <div className="flex justify-end w-full lg:w-1/2">
              <div className="w-full lg:w-8/12 flex gap-6">
                <div className="hidden lg:flex flex-col gap-2 overflow-y-auto lg:w-1/5">
                  {data?.image?.map(({ url }: { url: string }) => (
                    <button type="button" onClick={() => setMainImage(url)}>
                      <Image
                        src={url || "https://dummyimage.com/400x400"}
                        alt="zixen"
                        className={`h-20 w-40 object-cover object-center rounded-lg ${
                          mainImage === url ? "p-0.5 border-2 border-black" : ""
                        }`}
                        width={400}
                        height={400}
                      />
                    </button>
                  ))}
                </div>
                <div className="flex flex-col gap-4 relative w-full lg:w-4/5">
                  <Image
                    src={mainImage}
                    alt="zixen"
                    className="w-full h-96 object-cover object-center rounded-md"
                    width={400}
                    height={400}
                  />

                  <div className="lg:hidden flex gap-2 overflow-x-auto w-[40px]">
                    {data?.image?.map(({ url }: { url: string }) => (
                      <button
                        type="button"
                        onClick={() => setMainImage(url)}
                        className="size-20"
                      >
                        <Image
                          src={url || "https://dummyimage.com/400x400"}
                          alt="zixen"
                          className={`size-full object-cover object-center rounded-lg ${
                            mainImage === url
                              ? "p-0.5 border-2 border-black"
                              : ""
                          }`}
                          width={400}
                          height={400}
                        />
                      </button>
                    ))}
                  </div>

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
            </div>
            <div className="lg:w-1/2 w-full lg:px-10 mt-6 lg:mt-0">
              {/* category */}
              <h2 className="text-sm title-font text-gray-500 tracking-widest uppercase">
                {data?.category?.title || "ZIXEN"}
              </h2>

              {/* title */}
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                {data?.title || "-"}
              </h1>

              {/* rating */}
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

              {/* price */}
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

              {/* pincode */}
              <div className="flex w-full items-center gap-2 mt-2">
                <div className="flex items-center border border-gray-400 h-10 rounded-md bg-white w-2/3 lg:w-1/2">
                  <span className="h-full w-1/5 border-r border-gray-300 flex justify-center items-center">
                    <Image
                      src="/static/image/flag.png"
                      alt="india"
                      width={30}
                      height={30}
                    />
                  </span>
                  <span className="h-full w-4/5 flex justify-center items-center relative">
                    <input
                      type="number"
                      className="size-full text-sm outline-none px-2 text-gray-600 rounded-md"
                      value={pincode}
                      onChange={(e) => setPincode(e.target.value)}
                      placeholder="Enter delivery location"
                    />
                    {pincode !== "" && (
                      <button
                        type="button"
                        className="absolute right-2 p-0.5 rounded-full text-black hover:bg-gray-400 hover:text-white cursor-pointer transition-all duration-300"
                        onClick={() => setPincode("")}
                      >
                        <Cross className="size-4" strokeWidth="2" />
                      </button>
                    )}
                  </span>
                </div>
              </div>

              {/* Description */}
              <div className="border-b-2 border-white my-3 pb-3">
                Description
              </div>
              <div
                className="leading-relaxed text-sm"
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
