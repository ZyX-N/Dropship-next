import React, { useState } from "react";
import { Cross } from "../icons";
import { Chevron } from "../icons/chevron";
import { postCall } from "@/service/apiCall";
import { getLoginToken } from "@/service/token";

interface cartListProps {
  setCartlistBar: (val: Boolean) => any;
  getCart: () => any;
  data: Array<any>;
}

const Cartlist: React.FC<cartListProps> = ({
  setCartlistBar,
  data,
  getCart,
}) => {
  const [showBillDetails, setShowBillDetails] = useState<boolean>(false);
  console.log(data);

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
        getCart();
      }
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  return (
    <div className="w-screen h-screen bg-transparent z-50 flex">
      <div
        className="h-full w-1/6 lg:w-2/3 bg-transparent"
        onClick={() => setCartlistBar(false)}
      ></div>
      <div className="h-full w-5/6 lg:w-1/3 bg-white flex flex-col justify-between">
        <div className="flex items-center px-4">
          <h3 className="w-full text-black text-2xl font-medium py-4">
            Your Cart
          </h3>
          <button
            type="button"
            className="size-10 rounded-md hover:bg-gray-200 flex items-center justify-center"
            onClick={() => setCartlistBar(false)}
          >
            <Cross className="size-7" />
          </button>
        </div>

        <div className="w-full flex flex-col h-[calc(100%-130px)] overflow-y-auto divide-y pr-2 px-4">
          {data.length > 0 ? (
            data.map(({ product, quantity, _id }: any, index) => (
              <div className="flex gap-2 py-2" key={_id}>
                <div className="w-1/4 h-28">
                  <img
                    src={
                      product?.image[0]?.url ||
                      "http://13.127.50.182:5000/image/android-chrome-512x512-1723279207572.png"
                    }
                    alt="Zixen"
                    className="size-full rounded-lg"
                  />
                </div>

                <div className="flex flex-col justify-center w-3/4 gap-2 pl-3">
                  <div className="w-full inline-flex font-semibold text-black">
                    {product?.title}
                  </div>
                  <div className="w-full inline-flex text-gray-700">
                    ₹ {Number(product?.price) * Number(quantity)}
                  </div>
                  <div className="w-full inline-flex justify-end">
                    <span className="inline-flex">
                      <button
                        type="button"
                        className="rounded-l-md px-2 border border-gray-300 bg-gray-300 flex justify-center items-center font-semibold cursor-pointer"
                        onClick={() => updateToCart(product?._id, quantity - 1)}
                      >
                        -
                      </button>
                      <input
                        type="number"
                        value={quantity}
                        className="w-10 border border-gray-300 text-center outline-none"
                        onChange={(ev) =>
                          Number(ev.target.value) > 0 &&
                          updateToCart(product?._id, Number(ev.target.value))
                        }
                      />
                      <button
                        type="button"
                        className="rounded-r-md px-2 border border-gray-300 bg-gray-300 flex justify-center items-center font-semibold cursor-pointer"
                        onClick={() => updateToCart(product?._id, quantity + 1)}
                      >
                        +
                      </button>
                    </span>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div>No Products</div>
          )}
        </div>

        <div className="flex items-center h-16 border-t border-gray-300 py-2 relative">
          <div
            className={`flex flex-col w-full absolute left-0 bg-white py-4 px-4 transition-all duration-500 ease-in-out ${
              showBillDetails
                ? "opacity-100 z-40 bottom-full"
                : "opacity-0 z-0 -bottom-full"
            }`}
            style={{
              boxShadow: "0px -8px 10px 0px rgba(0,0,0,0.3)",
            }}
          >
            <div className="flex flex-col w-full pb-2">
              <div className="inline-flex items-center justify-between w-full pb-1">
                <span>Cart Total:</span>
                <span>₹ 2498</span>
              </div>

              <div className="inline-flex items-center justify-between w-full pb-1">
                <span>Shipping:</span>
                <span>FREE</span>
              </div>
            </div>
            <div className="inline-flex items-center justify-between border-t border-dashed border-black pt-2">
              <span>To Pay:</span>
              <span>₹ 2498</span>
            </div>
          </div>
          <div className="w-1/2 h-full font-bold flex items-center justify-center gap-2">
            <span>₹ 19800</span>
            <button
              type="button"
              onClick={() => setShowBillDetails(!showBillDetails)}
            >
              <Chevron
                className={`size-5 ${!showBillDetails ? "rotate-180" : ""}`}
              />
            </button>
          </div>
          <button
            type="button"
            className="w-1/2 rounded-lg h-full bg-slate-800 text-white font-semibold flex items-center justify-center"
          >
            Check Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cartlist;
