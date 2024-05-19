import Image from "next/image";
import React from "react";

export const LimitedBanner = () => {
  return (
    <div className="relative h-full container">
      <div className="flex-1 mb-8 md:mb-0 absolute top-1/2 -translate-y-1/2 left-0 z-10 px-8">
        <h2 className="text-3xl font-semibold">Great Deals on</h2>
        <h3 className="text-6xl font-semibold">Selected Wines</h3>
        <p className="text-gray-700 py-4 w-2/3">
          I&asop;m a paragraph. Click here to add your own text and edit me. Let your
          users get to know you.
        </p>
        <button className="flex text-red-50 bg-red-600 border-0 py-2 px-6 focus:outline-none hover:bg-amber-700 text-lg rounded-3xl">
          Shop Now
        </button>
      </div>
      <div className="w-full rounded shadow-md md:w-1/2">
        <Image
          src="/static/image/wine.webp"
          alt="Wine bottle"
          fill={true}
          className="object-cover"
        />
      </div>
      <div className="text-xl sm:text-2xl font-bold size-28 sm:size-36 text-white rounded-full flex items-center bg-red-600 z-10 absolute right-12 sm:right-20 top-4 sm:top-8 text-center tracking-wider rotate-12">
        Limited Supply
      </div>
    </div>
  );
};
