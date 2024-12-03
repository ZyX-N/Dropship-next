"use client";
import React, { useContext, useEffect, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { getLoginToken } from "@/service/token";
import InputTextNormal from "@/app/_components/input/inputTextNormal";
import InputSearch from "@/app/_components/input/inputSearch";
import { getCall, postCall } from "@/service/apiCall";
import { getPercent } from "@/service/calculation";
import { Star } from "@/app/_components/icons";
import { ProContext } from "@/app/_context/contextProvider";
import { RAZORPAY_KEY_ID } from "../../../config/razorpay";
import Razorpay from "../../_components/razorpay/Razorpay";

const Home = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  let { cartlistData, getCart_f }: any = useContext(ProContext);

  const [product, setProduct] = useState<Array<any>>([]);
  const [pincode, setPincode] = useState<string>("");
  const [pincodeList, setPincodeList] = useState<Array<any>>([]);
  const [city, setCity] = useState<string>("");
  const [state, setState] = useState<string>("");
  const [isValidPincode, setIsValidPincode] = useState<boolean>(true);
  const [address, setAddress] = useState<{
    firstName: string;
    lastName: string;
    contact: string;
    house: string;
    area: string;
    pincode?: string;
  }>({
    firstName: "",
    lastName: "",
    contact: "",
    house: "",
    area: "",
  });
  const [addressList, setAddressList] = useState<Array<any>>([]);
  const [selectedAddress, setSelectedAddress] = useState<string>("");
  const [finalPaymentDetails, setFinalPaymentDetails] = useState<{
    product: number;
    shipping: number;
    final: number;
  }>({ product: 0, shipping: 0, final: 0 });

  const [displayRazorpay, setDisplayRazorpay] = useState<boolean>(false);
  const [orderDetails, setOrderDetails] = useState<{
    orderId: string;
    currency: "INR";
  }>({
    orderId: "",
    currency: "INR",
  });

  const getProductDetails = async (slug: string) => {
    const resp = await getCall(`/product/${slug}`, {
      authorization: `Bearer ${getLoginToken()}`,
    });

    if (resp.status) {
      let tempData = {
        ...resp.data,
        quantity: 1,
      };
      setProduct([tempData]);
    } else {
      router.push("/not-found");
    }
  };

  const getCartDetails = async () => {
    await getCart_f();
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

  const searchPincode = async (str: string) => {
    try {
      let resp = await postCall(
        `/location/available-pincode`,
        {},
        { pincode: str }
      );
      if (resp && resp.status) {
        setPincodeList(
          resp.data.map((e: any) => ({
            _id: e._id,
            title: `${e.code}, ${e.city.name}, ${e.state.name}`,
            value: e.code,
            city: e.city.name,
            state: e.state.name,
          }))
        );
      }
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  const setCityState = () => {
    const pincodeData = pincodeList.filter((e) => e.value === pincode);

    if (pincodeData.length === 1) {
      setCity(pincodeData[0].city);
      setState(pincodeData[0].state);
    } else {
      setCity("");
      setState("");
    }
  };

  const getAddress = async () => {
    const response = await getCall(`/address`, {
      authorization: `Bearer ${getLoginToken()}`,
    });

    if (response.status) {
      setAddressList(response.data);
      setSelectedAddress("");
    }
  };

  const addressFormHandler = async (e: any): Promise<null | undefined> => {
    e.preventDefault();
    let payload: any = {
      name: `${address.firstName} ${address.lastName}`,
      contact: address.contact,
      house: address.house,
      area: address.area,
    };

    const pincodeData = pincodeList.filter((e) => e.value === pincode);
    if (pincodeData.length === 1) {
      payload = { ...payload, pincode: pincodeData[0]._id };
    } else {
      setIsValidPincode(false);
      return null;
    }

    let resp = await postCall(
      "/address",
      { authorization: `Bearer ${getLoginToken()}` },
      payload
    );

    if (resp.status) {
      getAddress();
      setAddress({
        firstName: "",
        lastName: "",
        contact: "",
        house: "",
        area: "",
      });
      setPincode("");
    }
  };

  const updateToCart = async (id: string, quantity: number) => {
    try {
      let resp = await postCall(
        `/cart`,
        {
          authorization: `Bearer ${getLoginToken()}`,
        },
        {
          product: id,
          quantity: quantity,
        }
      );
      if (resp && resp.status) {
        getCart_f();
      }
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  const paymentHandler = async () => {
    let orderId = await createOrderId();
    if (orderId) {
      setDisplayRazorpay(true);
      setOrderDetails({ orderId: orderId, currency: "INR" });
      return null;
    }
    setOrderDetails({ orderId: "", currency: "INR" });
  };

  const createOrderId = async () => {
    try {
      if (!selectedAddress) {
        alert("Select a address for delivery");
        return null;
      }

      let payload: {
        type: string;
        address: string;
        product?: string;
        quantity?: number;
      } = {
        type: searchParams.get("type") || "",
        address: selectedAddress,
      };

      if (payload.type === "product" && product.length > 0) {
        payload.product = product[0]?._id;
        payload.quantity = product[0]?.quantity;
      }
      let response = await postCall(
        "/order/place",
        {
          authorization: `Bearer ${getLoginToken()}`,
        },
        payload
      );

      if (response.status) {
        return response.data.orderId;
      }
      return null;
    } catch (error) {
      console.error("There was a problem with your fetch operation:", error);
      return null;
    }
  };

  const verifyPayment = async (
    payment_id: string,
    order_id: string,
    signature: string,
    status = true
  ) => {
    try {
      if (!payment_id || !order_id || !signature) {
        alert("Payment failed...!");
        setDisplayRazorpay(false);
        return null;
      }
      let payload: {
        payment_id: string;
        order_id: string;
        status: boolean;
      } = {
        payment_id: payment_id,
        order_id: order_id,
        status: status,
      };

      let headers = {
        authorization: `Bearer ${getLoginToken()}`,
        "x-razorpay-signature": signature,
      };

      let response = await postCall("/payment/verify", headers, payload);

      if (response.status) {
        alert("Order placed successfully!");
        setTimeout(() => {
          router.push("/");
        }, 2000);
      } else {
        alert(response?.msg || "Payment failed...!");
      }
      setDisplayRazorpay(false);
    } catch (error) {
      console.error("There was a problem with your fetch operation:", error);
      return null;
    }
  };

  useMemo(() => {
    setIsValidPincode(true);
    searchPincode(pincode);
    setCityState();
  }, [pincode]);

  useMemo(() => {
    if (!displayRazorpay) {
      setOrderDetails({
        orderId: "",
        currency: "INR",
      });
    }
  }, [displayRazorpay]);

  useEffect(() => {
    checkPageValidity();
    getAddress();
  }, []);

  useEffect(() => {
    if (searchParams.get("type") === "cart") {
      setProduct(
        cartlistData.map((e: any) => {
          let neededData = { ...e.product, quantity: e.quantity };
          return neededData;
        })
      );
    }
  }, [cartlistData]);

  useEffect(() => {
    let finalProductPrice = 0;
    for (let prod of product) {
      finalProductPrice += prod.price * prod.quantity;
    }

    setFinalPaymentDetails((prev) => {
      return {
        ...prev,
        product: finalProductPrice,
        final: finalProductPrice,
      };
    });
  }, [product]);

  return (
    <main className="bg-gray-100">
      {displayRazorpay && (
        <Razorpay
          orderId={orderDetails.orderId}
          currency={orderDetails.currency}
          keyId={RAZORPAY_KEY_ID}
          verifyFunction={verifyPayment}
          setOpen={setDisplayRazorpay}
        />
      )}

      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        {/* <div className="mb-6">
          <h1 className="text-3xl font-medium text-gray-900">Checkout</h1>
          <p className="text-gray-500 text-sm">
            Please review your order details below
          </p>
        </div> */}

        <div className="flex flex-col-reverse lg:flex-row lg:space-x-10">
          <div className="lg:w-1/2 bg-transparent py-0 rounded-lg mt-10 lg:mt-0">
            <h2 className="text-xl font-medium text-gray-900 mb-6">
              Shipping Information
            </h2>

            <div className="flex flex-col gap-2">
              {addressList.map((item) => (
                <label
                  htmlFor={item._id}
                  className="flex cursor-pointer pt-2"
                  key={item?._id}
                >
                  <div className="flex flex-col gap-0 w-4/5">
                    <p className="text-sm font-medium">{item.name}</p>
                    <p className="text-sm font-light">{item.contact}</p>
                    <p className="text-sm font-light">
                      {item.house || ""}, {item.area || ""}
                    </p>
                    <p className="text-sm font-light">
                      {item.city.name}, {item.state.name}, {item.pincode.code}
                    </p>
                  </div>
                  <div className="size-full w-1/5 flex justify-end">
                    <input
                      type="radio"
                      value={item?._id}
                      id={item._id}
                      name="address_radio"
                      className="size-5 cursor-pointer outline-none border-none"
                      onChange={(e) => setSelectedAddress(e.target.value)}
                      checked={selectedAddress === item._id ? true : false}
                    />
                  </div>
                </label>
              ))}
            </div>
            <hr className="border-t-[1px] border-gray-300 my-3" />

            <h2 className="text-xl font-medium text-gray-900 mb-3">Address</h2>
            <form className="space-y-6" onSubmit={addressFormHandler}>
              <div className="flex gap-2">
                <div className="w-1/2">
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    First Name<span className="text-red-600 text-xs">*</span>
                  </label>
                  <InputTextNormal
                    id="first-name"
                    value={address.firstName}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setAddress((prev) => ({
                        ...prev,
                        firstName: e.target.value,
                      }))
                    }
                  />
                </div>
                <div className="w-1/2">
                  <label
                    htmlFor="last-name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Last Name<span className="text-red-600 text-xs">*</span>
                  </label>
                  <InputTextNormal
                    id="last-name"
                    value={address.lastName}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setAddress((prev) => ({
                        ...prev,
                        lastName: e.target.value,
                      }))
                    }
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="contact"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Contact Number
                  <span className="text-red-600 text-xs">*</span>
                </label>
                <InputTextNormal
                  id="contact"
                  type="number"
                  value={address.contact}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setAddress((prev) => ({
                      ...prev,
                      contact: e.target.value,
                    }))
                  }
                />
              </div>

              <div>
                <label
                  htmlFor="houseNum"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  House, Apartment, Suite
                  <span className="text-red-600 text-xs">*</span>
                </label>
                <InputTextNormal
                  id="houseNo"
                  value={address.house}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setAddress((prev) => ({
                      ...prev,
                      house: e.target.value,
                    }))
                  }
                />
              </div>

              <div>
                <label
                  htmlFor="area"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Area/Street<span className="text-red-600 text-xs">*</span>
                </label>
                <InputTextNormal
                  id="area"
                  value={address.area}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setAddress((prev) => ({
                      ...prev,
                      area: e.target.value,
                    }))
                  }
                />
              </div>

              <div className="relative">
                <label
                  htmlFor="pincode"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Pincode
                  <span className="text-red-600 text-xs">*</span>
                </label>
                <InputSearch
                  value={pincode}
                  setValue={setPincode}
                  option={pincodeList}
                />
                {!isValidPincode && (
                  <span className="text-red-600 text-xs absolute top-full">
                    Delivery not available at this pincode
                  </span>
                )}
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="city"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    City
                  </label>
                  <InputTextNormal
                    id="city"
                    disabled={true}
                    classes="!bg-gray-100"
                    value={city}
                  />
                </div>
                <div>
                  <label
                    htmlFor="state"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    State
                  </label>
                  <InputTextNormal
                    id="state"
                    disabled={true}
                    classes="!bg-gray-100"
                    value={state}
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="bg-amber-600 text-white py-2.5 rounded-md hover:scale-105 transition-all duration-300 w-full"
                >
                  Add
                </button>
              </div>
            </form>
          </div>

          <div className="lg:w-1/2 bg-white p-6 rounded-lg shadow-md h-full lg:sticky top-2">
            <h2 className="text-xl font-medium text-gray-900 mb-4">
              Order Summary
            </h2>

            <div className="space-y-4">
              {product.map(
                (
                  {
                    _id,
                    title,
                    image,
                    category,
                    strikePrice,
                    price,
                    stock,
                    quantity,
                    rating,
                  }: any,
                  index
                ) => (
                  <div className="flex gap-2 py-2" key={_id}>
                    <div className="w-1/4 h-28">
                      <img
                        src={
                          image[0]?.url ||
                          "http://13.127.50.182:5000/image/android-chrome-512x512-1723279207572.png"
                        }
                        alt="Zixen"
                        className="size-full rounded-lg border border-black p-0.5"
                      />
                    </div>

                    <div className="flex flex-col justify-center w-3/4 gap-1 pl-3">
                      <div className="text-xs title-font text-gray-500 tracking-widest uppercase">
                        {category.title}
                      </div>
                      <div className="w-full inline-flex font-semibold text-black">
                        {title}
                      </div>
                      <div className="w-full inline-flex items-center text-gray-800 font-medium">
                        ₹ {Number(price) * Number(quantity)}
                        <del className="text-gray-500 text-sm ml-2 font-light">
                          ₹{Number(strikePrice) * Number(quantity)}
                        </del>
                        {strikePrice > price && (
                          <span className="text-sm ml-2 font-medium text-green-500">
                            ({getPercent(strikePrice, strikePrice - price)}%
                            OFF)
                          </span>
                        )}
                        {stock === 0 && (
                          <span className="text-xs ml-1 font-medium text-red-500">
                            Out of stock
                          </span>
                        )}
                      </div>
                      <div className="w-full inline-flex justify-between">
                        <span className="flex items-center">
                          {[1, 2, 3, 4, 5].map((num: number) => (
                            <Star
                              key={num}
                              className="w-5 h-5 text-yellow-400"
                              fill={rating < num ? "none" : "yellow"}
                            />
                          ))}
                        </span>

                        <span className="inline-flex">
                          <button
                            type="button"
                            className="rounded-l-md px-2 border border-gray-300 bg-gray-300 flex justify-center items-center font-semibold cursor-pointer"
                            onClick={() => {
                              if (searchParams.get("type") === "cart") {
                                updateToCart(_id, quantity - 1);
                              } else {
                                setProduct(
                                  product.map((e, i) => {
                                    if (i === index && e.quantity > 1) {
                                      e.quantity = e.quantity - 1;
                                    }
                                    return e;
                                  })
                                );
                              }
                            }}
                          >
                            -
                          </button>
                          <input
                            type="number"
                            value={quantity}
                            className="w-10 border border-gray-300 text-center outline-none"
                            onChange={(ev) => {
                              if (
                                Number(ev.currentTarget.value) > 0 &&
                                Number(ev.currentTarget.value) < 50
                              ) {
                                if (searchParams.get("type") === "cart") {
                                  updateToCart(
                                    _id,
                                    Number(ev.currentTarget.value)
                                  );
                                } else {
                                  setProduct(
                                    product.map((e, i) => {
                                      if (i === index) {
                                        e.quantity = Number(
                                          ev.currentTarget.value
                                        );
                                      }
                                      return e;
                                    })
                                  );
                                }
                              }
                            }}
                          />
                          <button
                            type="button"
                            className="rounded-r-md px-2 border border-gray-300 bg-gray-300 flex justify-center items-center font-semibold cursor-pointer"
                            onClick={() => {
                              if (searchParams.get("type") === "cart") {
                                updateToCart(_id, quantity + 1);
                              } else {
                                setProduct(
                                  product.map((e, i) => {
                                    if (i === index && e.quantity < 50) {
                                      e.quantity = e.quantity + 1;
                                    }
                                    return e;
                                  })
                                );
                              }
                            }}
                          >
                            +
                          </button>
                        </span>
                      </div>
                    </div>
                  </div>
                )
              )}
            </div>

            <div className="border-t border-gray-200 pt-4 mt-4">
              <div className="flex flex-col w-full pb-2">
                <div className="inline-flex items-center justify-between w-full pb-1">
                  <span>Products Total:</span>
                  <span>₹ {finalPaymentDetails.product}</span>
                </div>

                <div className="inline-flex items-center justify-between w-full pb-1">
                  <span>Shipping:</span>
                  <span>FREE</span>
                  {/* <span>₹ {finalPaymentDetails.shipping}</span> */}
                </div>
              </div>
              <div className="inline-flex w-full items-center justify-between border-t border-dashed border-black pt-2">
                <span>To Pay:</span>
                <span>₹ {finalPaymentDetails.final}</span>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-4 mt-4">
              <button
                type="button"
                className="bg-amber-600 text-white py-2.5 rounded-md hover:scale-105 transition-all duration-300 w-full"
                onClick={paymentHandler}
              >
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
