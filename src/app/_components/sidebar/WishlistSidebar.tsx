import React, { useState } from "react";
import { Cross } from "../icons";
import { Chevron } from "../icons/chevron";
import { Cart } from "../icons/cart";
import { ICard } from "../icons/i-card";

interface wishlistProps {
  setWishlistBar: (val: Boolean) => any;
  data: Array<any>;
}

const Wishlist: React.FC<wishlistProps> = ({ setWishlistBar,data }) => {
  let [wishlistProduct, setWishlistProduct] = useState<Array<any>>([
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
          {wishlistProduct.length > 0 ? (
            wishlistProduct.map(
              ({ title, mrp, price, quantity, image }, index) => (
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
                    <div className="w-full inline-flex gap-2">
                      <button
                        type="button"
                        className="inline-flex items-center bg-amber-600 text-white px-2 py-1 rounded-md gap-1 hover:scale-105 transition-all duration-100"
                      >
                        + Cart <Cart className="size-5" />
                      </button>
                      <button
                        type="button"
                        className="inline-flex items-center bg-amber-600 text-white px-2 py-1 rounded-md gap-1 hover:scale-105 transition-all duration-100"
                      >
                        Details <ICard className="size-5" />
                      </button>
                    </div>
                  </div>
                </div>
              )
            )
          ) : (
            <div>No Products</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
