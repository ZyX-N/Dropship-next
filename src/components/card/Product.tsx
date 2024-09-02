import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Product = (item: any) => {
  return (
    <div className="lg:w-[calc(25%-12px)] md:w-[calc(50%-8px)] w-full">
      <Link
        // href={category + "/" + title}
        href={"product" + "/" +item.slug}
        className="block relative h-48 rounded overflow-hidden hover:scale-105 transition-all duration-300"
      >
        <Image
          alt="ecommerce"
          fill={true}
          className="object-cover object-center block"
          src={item?.image?.length > 0 ? item.image[0].url : "http://13.127.50.182:5000/image/android-chrome-512x512-1723279207572.png"}
        />
      </Link>
      <div className="mt-4">
        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1 uppercase">
          {item?.category?.title}
        </h3>
        <h2 className="text-gray-900 title-font text-lg font-medium">
          {item.title}
        </h2>
        <p className="mt-1">₹ {item.price}</p>
      </div>
    </div>
  );
};
