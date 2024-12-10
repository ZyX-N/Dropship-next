"use client";

import TriangleSpinner from "@/app/_components/loader/Loader";
import { getCall, postCall } from "@/service/apiCall";
import { getLoginToken } from "@/service/token";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Page = ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
  const [orderInfo, setOrderInfo] = useState<any>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const getOrderDetails = async () => {
    let response = await getCall(`/order/${slug}`, {
      authorization: `Bearer ${getLoginToken()}`,
    });
    if (response.status) {
      setOrderInfo(response.data);
    }
    setIsLoading(false);
  };

  const getddmmyyyy = (dt: string) => {
    const date = new Date(dt);
    const formattedDate = date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
    return formattedDate;
  };

  console.log(orderInfo);

  const getPendingComponent = (
    status: "pending" | "confirmed" | "cancelled" | "delivered"
  ) => {
    switch (status) {
      case "pending": {
        return <span className="text-yellow-600">{status}</span>;
      }
      case "confirmed": {
        return <span className="text-blue-600">{status}</span>;
      }
      case "cancelled": {
        return <span className="text-red-600">{status}</span>;
      }
      case "delivered": {
        return <span className="text-green-600">{status}</span>;
      }
      default: {
        return <span>-</span>;
      }
    }
  };

  useEffect(() => {
    getOrderDetails();
  }, []);

  return (
    <section className="py-8">
      <div className="mx-auto max-w-screen-xl px-4 2xl:px-0">
        <div className="mx-auto max-w-6xl">
          <div className="gap-4 sm:flex sm:items-center sm:justify-between">
            <h2 className="text-xl font-semibold text-gray-900 sm:text-2xl">
              Order Details
            </h2>
          </div>

          <div className="mt-6 flow-root">
            {!isLoading ? (
              orderInfo && (
                <div className="relative bg-white p-6 rounded-lg shadow-lg shadow-gray-300 border border-gray-200">

                  <div className="mt-2">
                    <p className="text-lg font-semibold">
                      Hello {orderInfo.shippingAddressId.name},
                    </p>
                    <p className="text-base">
                      Your order has been confirmed and will be shipping within
                      a few days.
                    </p>
                  </div>

                  <div className="mt-6">
                    <div className="flex justify-between py-2 border-y border-gray-300">
                      <div className="flex flex-col justify-center items-start">
                        <p className="text-gray-600 text-sm">Order Date</p>
                        <p className="text-black font-medium text-sm">
                          {getddmmyyyy(orderInfo.createdAt)}
                        </p>
                      </div>

                      <div className="flex flex-col justify-center items-start">
                        <p className="text-gray-600 text-sm">Order No</p>
                        <p className="text-black font-medium text-sm">
                          {orderInfo.orderId}
                        </p>
                      </div>

                      <div className="flex flex-col justify-center items-start">
                        <p className="text-gray-600 text-sm">Payment Method</p>
                        <p className="text-black font-medium text-sm capitalize">
                          {orderInfo?.paymentMethod}
                        </p>
                      </div>

                      <div className="flex flex-col justify-center items-start">
                        <p className="text-gray-600 text-sm">
                          Shipping Address
                        </p>
                        <p className="text-black font-medium text-sm">
                          {orderInfo.shippingAddressId.house},{" "}
                          {orderInfo.shippingAddressId.city.name},<br />
                          {orderInfo.shippingAddressId.state.name},{" "}
                          {orderInfo.shippingAddressId.pincode.code}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <h3 className="text-xl font-semibold">Order Summary</h3>
                    <div className="mt-4">
                      {orderInfo.productDetails.length > 0 &&
                        orderInfo.productDetails.map(
                          ({
                            price,
                            strikePrice,
                            image,
                            title,
                            quantity,
                            status,
                          }: {
                            price: number;
                            strikePrice: number;
                            image: Array<string>;
                            title: string;
                            quantity: number;
                            status:
                              | "pending"
                              | "confirmed"
                              | "cancelled"
                              | "delivered";
                          }) => (
                            <div className="flex justify-between mb-4">
                              <div className="flex items-center">
                                <Image
                                  src={image.length > 0 ? image[0] : "/"}
                                  alt={title}
                                  width={64}
                                  height={64}
                                  className="mr-4 rounded-lg object-cover"
                                />
                                <div className="flex flex-col gap-0.5">
                                  <p>{title || ""}</p>
                                  <p className="text-gray-500 text-sm">
                                    Quantity:{" "}
                                    <span className="">{quantity || "-"}</span>
                                  </p>
                                  <p className="text-gray-500 text-sm">
                                    Delivery Status:{" "}
                                    {getPendingComponent(status)}
                                  </p>
                                </div>
                              </div>
                              <p>
                                <del className="text-gray-500 text-sm">
                                  ₹{strikePrice}
                                </del>
                                <span className="ml-2">₹{price}</span>
                              </p>
                            </div>
                          )
                        )}

                      <div className="my-6 bg-gray-300 h-[1px]" />

                      <div className="flex justify-between w-96 ml-auto text-sm">
                        <p className="text-gray-600">Total MRP</p>
                        <del className="text-red-600">
                          {orderInfo?.totalMrp > 0 ? "₹" : ""}
                          {orderInfo?.totalMrp}
                        </del>
                      </div>

                      <div className="border-b border-dashed border-gray-300 my-2 w-96 ml-auto"></div>

                      <div className="flex justify-between w-96 ml-auto text-sm">
                        <p className="text-gray-600">Subtotal</p>
                        <p className="text-green-600">
                          {orderInfo?.totalPrice > 0 ? "₹" : ""}
                          {orderInfo?.totalPrice}
                        </p>
                      </div>

                      <div className="border-b border-dashed border-gray-300 my-2 w-96 ml-auto"></div>

                      <div className="flex justify-between w-96 ml-auto text-sm">
                        <p className="text-gray-600">Shipping Fee</p>
                        <p>
                          {orderInfo?.shippingCost > 0 ? "₹" : ""}
                          {orderInfo?.shippingCost}
                        </p>
                      </div>

                      <div className="flex justify-between w-96 ml-auto border-y border-gray-300 py-2 mt-2 text-sm">
                        <p className="font-bold">Total</p>
                        <p className="font-bold">
                          {orderInfo?.totalAmountToPay > 0 ? "₹" : ""}
                          {orderInfo?.totalAmountToPay}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8">
                    <p className="mt-6 text-sm text-gray-600">
                      We will be sending a shipping confirmation email when the
                      items are shipped successfully.
                    </p>
                    <p className="mt-2 text-gray-800 font-medium">
                      Thank you for shopping with us!
                    </p>
                  </div>

                  {/* <div className="mt-4 text-sm text-gray-500">
                      <p>Need Help? Visit Help Center</p>
                    </div> */}
                </div>
              )
            ) : (
              <TriangleSpinner />
            )}
          </div>

          {/* <nav
            className="mt-6 flex items-center justify-center sm:mt-8"
            aria-label="Page navigation example"
          >
            <ul className="flex h-8 items-center -space-x-px text-sm">
              <li>
                <a
                  href="#"
                  className="ms-0 flex h-8 items-center justify-center rounded-s-lg border border-e-0 border-gray-300 bg-white px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  <span className="sr-only">Previous</span>
                  <svg
                    className="h-4 w-4 rtl:rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m15 19-7-7 7-7"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex h-8 items-center justify-center border border-gray-300 bg-white px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  1
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex h-8 items-center justify-center border border-gray-300 bg-white px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  2
                </a>
              </li>
              <li>
                <a
                  href="#"
                  aria-current="page"
                  className="z-10 flex h-8 items-center justify-center border border-primary-300 bg-primary-50 px-3 leading-tight text-primary-600 hover:bg-primary-100 hover:text-primary-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                >
                  3
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex h-8 items-center justify-center border border-gray-300 bg-white px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  ...
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex h-8 items-center justify-center border border-gray-300 bg-white px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  100
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex h-8 items-center justify-center rounded-e-lg border border-gray-300 bg-white px-3 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  <span className="sr-only">Next</span>
                  <svg
                    className="h-4 w-4 rtl:rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m9 5 7 7-7 7"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </nav> */}
        </div>
      </div>
    </section>
  );
};

export default Page;
