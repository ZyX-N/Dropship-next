import Image from "next/image";
import React from "react";

export const DiscountBanner = () => {
  return (
    <div className="relative h-full container">
      <div className="flex flex-col gap-2 items-start mb-8 md:mb-0 absolute top-1/2 -translate-y-1/2 left-0 z-10 px-8">
        <h2 className="text-xl font-semibold">Deal of the week</h2>
        <h3 className="text-6xl font-semibold flex items-start">
          40% <span className="text-2xl">off</span>
        </h3>
        <h4 className="text-3xl font-semibold flex items-start">
          Cleaning supplies
        </h4>
        <button className="text-red-50 bg-red-600 border-0 py-2 px-6 focus:outline-none hover:bg-amber-700 text-lg rounded-3xl mt-2">
          Shop Now
        </button>
      </div>
      <div className="w-full rounded shadow-md md:w-1/2">
        <Image
          src="/static/image/sponge.webp"
          alt="Discount"
          fill={true}
          className="object-cover"
        />
      </div>
    </div>
  );
};
