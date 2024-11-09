"use client";
import React, { useContext, useEffect, useMemo, useState } from "react";
import useRazorpay from "react-razorpay";
import { useRouter, useSearchParams } from "next/navigation";
import { getProductsDetails } from "@/app/_server";
import { getLoginToken } from "@/service/token";
import InputTextNormal from "@/app/_components/input/inputTextNormal";
import InputSearch from "@/app/_components/input/inputSearch";
import { getCall, postCall } from "@/service/apiCall";

const Home = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [product, setProduct] = useState(null);
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

  const getProductDetails = async (slug: string) => {
    const resp = await getProductsDetails({
      slug,
      header: { authorization: `Bearer ${getLoginToken()}` },
    });
    // console.log(resp);

    if (resp.status) {
      setProduct(resp.data);
    } else {
      router.push("/not-found");
    }
  };

  const getCartDetails = async () => {};

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
    }
  };

  const addressFormHandler = async (e: any): Promise<null | undefined> => {
    e.preventDefault();
    let payload:any = {
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

  useMemo(() => {
    setIsValidPincode(true);
    searchPincode(pincode);
    setCityState();
  }, [pincode]);

  useEffect(() => {
    checkPageValidity();
    getAddress();
  }, []);

  return (
    <main className="bg-gray-100">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        {/* <div className="mb-6">
          <h1 className="text-3xl font-medium text-gray-900">Checkout</h1>
          <p className="text-gray-500 text-sm">
            Please review your order details below
          </p>
        </div> */}

        <div className="flex flex-col lg:flex-row lg:space-x-10">
          <div className="lg:w-1/2 bg-transparent py-0 rounded-lg mt-10 lg:mt-0">
            <h2 className="text-xl font-medium text-gray-900 mb-6">
              Shipping Information
            </h2>

            <div className="flex flex-col gap-3">
              {addressList.map((item) => (
                <div className="flex">
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
                  {/* <div className="size-full bg-green-400 w-1/5"><input type="radio" name="" id="" /></div> */}
                </div>
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

          <div className="lg:w-1/2 bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-medium text-gray-900 mb-4">
              Order Summary
            </h2>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-900 font-medium">Product Name 1</p>
                  <p className="text-gray-500 text-sm">
                    Description of the product
                  </p>
                </div>
                <p className="text-gray-900 font-medium">$50.00</p>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-900 font-medium">Product Name 2</p>
                  <p className="text-gray-500 text-sm">
                    Description of the product
                  </p>
                </div>
                <p className="text-gray-900 font-medium">$30.00</p>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-900 font-medium">Product Name 3</p>
                  <p className="text-gray-500 text-sm">
                    Description of the product
                  </p>
                </div>
                <p className="text-gray-900 font-medium">$20.00</p>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-4 mt-4">
              <div className="flex justify-between text-lg font-semibold">
                <span>Total</span>
                <span className="text-gray-900">$100.00</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
