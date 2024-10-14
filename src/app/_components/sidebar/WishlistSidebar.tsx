import React from "react";
import { Cross, Cart, ICard } from "../icons";
import Link from "next/link";

interface wishlistProps {
  setWishlistBar: (val: Boolean) => any;
  data: Array<any>;
}

const Wishlist: React.FC<wishlistProps> = ({ setWishlistBar, data }) => {
  return (
    <div className="w-screen h-screen bg-transparent z-50 flex">
      <div
        className="h-full w-1/6 lg:w-2/3 bg-transparent"
        onClick={() => setWishlistBar(false)}
      ></div>
      <div className="h-full w-5/6 lg:w-1/3 bg-white flex flex-col px-4">
        <div className="flex items-center">
          <h3 className="w-full text-black text-2xl font-medium py-4">
            Your Wishlist
          </h3>
          <button
            type="button"
            className="size-10 rounded-md hover:bg-gray-200 flex items-center justify-center"
            onClick={() => setWishlistBar(false)}
          >
            <Cross className="size-7" />
          </button>
        </div>

        <div className="w-full flex flex-col h-[calc(100%-75px)] overflow-y-auto divide-y pr-2">
          {data.length > 0 ? (
            data.map(({ _id, product }) => (
              <div className="flex gap-2 py-2" key={_id}>
                <div className="w-1/4 h-28">
                  <img
                    src={product?.image[0]?.url}
                    alt="Zixen"
                    className="size-full rounded-lg border"
                  />
                </div>

                <div className="flex flex-col justify-center w-3/4 gap-2 pl-3">
                  <div className="w-full inline-flex font-semibold text-black">
                    {product?.title}
                  </div>
                  <div className="w-full inline-flex text-gray-700">
                    ₹ {product?.price}
                  </div>
                  <div className="w-full inline-flex gap-2">
                    <button
                      type="button"
                      className="inline-flex items-center bg-amber-600 text-white px-2 py-1 rounded-md gap-1 hover:scale-105 transition-all duration-100"
                    >
                      + Cart <Cart className="size-5" />
                    </button>
                    <Link
                      href={`/product/${product?.slug}`}
                      onClick={() => setWishlistBar(false)}
                    >
                      <button
                        type="button"
                        className="inline-flex items-center bg-amber-600 text-white px-2 py-1 rounded-md gap-1 hover:scale-105 transition-all duration-100"
                      >
                        Details <ICard className="size-5" />
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div>No Products</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
