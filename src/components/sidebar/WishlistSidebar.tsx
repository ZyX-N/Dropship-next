import React from "react";
import { Cross } from "../icons";

interface wishlistProps {
  setWishlistBar: (val: Boolean) => null;
}

const Wishlist: React.FC<wishlistProps> = ({ setWishlistBar }) => {
  return (
    <div className="w-screen h-screen bg-transparent z-50 flex">
      <div
        className="h-full w-1/3 lg:w-2/3 bg-transparent"
        onClick={() => setWishlistBar(false)}
      ></div>
      <div className="h-full w-2/3 lg:w-1/3 bg-white flex flex-col px-4">
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
      </div>
    </div>
  );
};

export default Wishlist;
