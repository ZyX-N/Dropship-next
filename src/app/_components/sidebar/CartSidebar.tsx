import React, { useState } from "react";
import { Cross } from "../icons";
import { Chevron } from "../icons/chevron";

interface cartListProps {
  setCartlistBar: (val: Boolean) => any;
}

const Cartlist: React.FC<cartListProps> = ({ setCartlistBar }) => {
  const [cartProduct, setCartProduct] = useState<Array<any>>([
    {
      title: "Puma Shoe (Red)",
      mrp: 15999,
      price: 9999,
      quantity: 2,
      image: "/static/image/img3.jpg",
    },
    {
      title: "Adidas Shoe (Black)",
      mrp: 1599,
      price: 999,
      quantity: 7,
      image: "/static/image/img2.jpg",
    },
    {
      title: "Jordan (Blue)",
      mrp: 179999,
      price: 129999,
      quantity: 1,
      image: "/static/image/img1.jpg",
    },
    {
      title: "Puma Shoe (Red)",
      mrp: 15999,
      price: 9999,
      quantity: 2,
      image: "/static/image/img3.jpg",
    },
    {
      title: "Adidas Shoe (Black)",
      mrp: 1599,
      price: 999,
      quantity: 7,
      image: "/static/image/img2.jpg",
    },
    {
      title: "Jordan (Blue)",
      mrp: 179999,
      price: 129999,
      quantity: 1,
      image: "/static/image/img1.jpg",
    },
  ]);

  const [showBillDetails, setShowBillDetails] = useState<boolean>(false);

  return (
    <div className="w-screen h-screen bg-transparent z-50 flex">
      <div
        className="h-full w-1/3 lg:w-2/3 bg-transparent"
        onClick={() => setCartlistBar(false)}
      ></div>
      <div className="h-full w-2/3 lg:w-1/3 bg-white flex flex-col justify-between">
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
          {cartProduct.length > 0 ? (
            cartProduct.map(({ title, mrp, price, quantity, image }, index) => (
              <div className="flex gap-2 py-2" key={title}>
                <div className="w-1/4 h-28">
                  <img
                    src={image}
                    alt="Zixen"
                    className="size-full rounded-lg"
                  />
                </div>

                <div className="flex flex-col justify-center w-3/4 gap-2 pl-3">
                  <div className="w-full inline-flex font-semibold text-black">
                    {title}
                  </div>
                  <div className="w-full inline-flex text-gray-700">
                    ₹ {mrp}
                  </div>
                  <div className="w-full inline-flex justify-end">
                    <span className="inline-flex">
                      <button
                        type="button"
                        className="rounded-l-md px-2 border border-gray-300 bg-gray-300 flex justify-center items-center font-semibold cursor-pointer"
                        onClick={() =>
                          setCartProduct(
                            cartProduct.map((e, i) => {
                              if (i === index) {
                                e.quantity > 1 && e.quantity--;
                              }
                              return e;
                            })
                          )
                        }
                      >
                        -
                      </button>
                      <input
                        type="number"
                        value={quantity}
                        className="w-10 border border-gray-300 text-center outline-none"
                        onChange={(ev) =>
                          setCartProduct(
                            cartProduct.map((e, i) => {
                              if (i === index) {
                                e.quantity = ev.target.value;
                              }
                              return e;
                            })
                          )
                        }
                      />
                      <button
                        type="button"
                        className="rounded-r-md px-2 border border-gray-300 bg-gray-300 flex justify-center items-center font-semibold cursor-pointer"
                        onClick={() =>
                          setCartProduct(
                            cartProduct.map((e, i) => {
                              if (i === index) {
                                e.quantity++;
                              }
                              return e;
                            })
                          )
                        }
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
