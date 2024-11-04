"use client";
import { Cross, Star } from "@/app/_components/icons";
import { getPercent } from "@/service/calculation";
import { getProductsDetails } from "@/app/_server";
import Image from "next/image";
import React, { useContext, useEffect, useMemo, useState } from "react";
import { getCall, postCall } from "@/service/apiCall";
import { getLoginToken } from "@/service/token";
import { ProContext } from "@/app/_context/contextProvider";
import { useRouter } from "next/navigation";
import InputSearch from "@/app/_components/input/inputSearch";
import Link from "next/link";

const Home = ({ params }: { params: { slug: string } }) => {
  const router = useRouter();
  const { slug } = params;
  let { getCart_f }: any = useContext(ProContext);

  const [data, setData] = useState<any>(null);
  const [mainImage, setMainImage] = useState<string>("");
  // const [pincode, setPincode] = useState<string>("");
  // const [pincodeList, setPincodeList] = useState<Array<any>>([]);

  const getProducts = async () => {
    const resp = await getProductsDetails({
      slug,
      header: { authorization: `Bearer ${getLoginToken()}` },
    });
    if (resp.status) {
      console.log(resp);

      setData(resp.data);
      if (resp.data.image && resp.data.image.length > 0) {
        setMainImage(
          resp.data.image[0]?.url || "https://dummyimage.com/400x400"
        );
      }
    }
  };

  const addToCart = async (id: string) => {
    try {
      let resp = await postCall(
        `/cart`,
        {
          authorization: `Bearer ${getLoginToken()}`,
        },
        {
          product: id,
          quantity: 1,
        }
      );
      if (resp && resp.status) {
        getProducts();
        getCart_f();
      } else if (resp.status_code) {
        router.push("/login");
      }
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  // const searchPincode = async (str: string) => {
  //   try {
  //     let resp = await postCall(
  //       `/location/available-pincode`,
  //       {},
  //       { pincode: str }
  //     );
  //     if (resp && resp.status) {
  //       setPincodeList(resp.data);
  //     }
  //   } catch (error) {
  //     console.log(error);
  //     return null;
  //   }
  // };

  // useMemo(() => {
  //   searchPincode(pincode);
  // }, [pincode]);

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <main className="px-4 mx-auto py-6">
      <section className="text-black body-font">
        <div className="lg:w-full mx-auto flex flex-col lg:justify-center lg:flex-row px-0 lg:px-4">
          <div className="flex justify-end w-full lg:w-1/2">
            <div className="w-full lg:w-11/12 flex justify-end gap-3">
              <div className="hidden lg:flex flex-col gap-2 overflow-y-auto overflow-x-hidden lg:w-1/5">
                {data?.image?.map(({ url }: { url: string }) => (
                  <button
                    type="button"
                    className="w-full "
                    onClick={() => setMainImage(url)}
                    key={url}
                  >
                    <Image
                      src={url || "https://dummyimage.com/400x400"}
                      alt="zixen"
                      className={`size-full object-cover object-center rounded-lg ${
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
                  className="w-full h-[50vh] lg:h-[70vh] object-cover object-center rounded-md"
                  width={400}
                  height={400}
                />

                <div className="lg:hidden flex gap-2 overflow-y-scroll w-full">
                  {data?.image?.map(({ url }: { url: string }) => (
                    <button
                      type="button"
                      onClick={() => setMainImage(url)}
                      className="size-20"
                      key={url}
                    >
                      <Image
                        src={url || "https://dummyimage.com/400x400"}
                        alt="zixen"
                        className={`size-full object-cover object-center rounded-lg ${
                          mainImage === url ? "p-0.5 border-2 border-black" : ""
                        }`}
                        width={400}
                        height={400}
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 w-full lg:px-10 mt-6 lg:mt-0">
            {/* category */}
            <h2 className="text-sm title-font text-gray-500 tracking-widest uppercase">
              {data?.category?.title}
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
              {data?.strikePrice > data?.price && (
                <span className="text-md ml-0 font-medium text-green-500">
                  ({getPercent(data.strikePrice, data.strikePrice - data.price)}
                  % OFF)
                </span>
              )}
              {data?.stock === 0 && (
                <span className="text-xs ml-1 font-medium text-red-500">
                  Out of stock
                </span>
              )}
            </div>

            {/* pincode */}
            {/* <div className="flex w-full items-center gap-2 mt-4">
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

                  <InputSearch
                    value={pincode}
                    setValue={setPincode}
                    option={pincodeList}
                  />
                </span>
              </div>
            </div> */}

            {/* buttons */}
            <div className="flex gap-4 w-full mt-4">
              {!data?.inCart && (
                <button
                  type="button"
                  className="w-1/4 py-3 text-white rounded-md bg-amber-600 hover:bg-amber-700 hover:scale-105 transition-all duration-300"
                  onClick={() => addToCart(data?._id)}
                >
                  Add to cart
                </button>
              )}
              <Link href={`/payment?type=product&q=${slug}`} className="w-1/4">
                <button
                  type="button"
                  className="w-full py-3 text-white rounded-md bg-amber-600 hover:bg-amber-700 hover:scale-105 transition-all duration-300"
                >
                  Buy Now
                </button>
              </Link>
            </div>

            {/* Description */}
            <div className="border-b border-gray-300 my-2 pb-2 text-lg font-medium mt-4">
              Description
            </div>
            <div
              className="leading-relaxed text-sm normal-ul normal-margin-padding"
              dangerouslySetInnerHTML={{
                __html: data?.description || "",
              }}
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
