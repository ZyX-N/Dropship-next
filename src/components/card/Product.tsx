import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Product = ({
  src,
  title,
  category,
  price,
}: {
  src: string;
  title: string;
  category: string;
  price: number;
}) => {
  return (
    <div className="lg:w-[calc(25%-12px)] md:w-[calc(50%-8px)] w-full">
      <Link
        // href={category + "/" + title}
        href={"product" + "/" + title}
        className="block relative h-48 rounded overflow-hidden"
      >
        <Image
          alt="ecommerce"
          fill={true}
          className="object-cover object-center block"
          src={src}
        />
      </Link>
      <div className="mt-4">
        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1 uppercase">
          {category}
        </h3>
        <h2 className="text-gray-900 title-font text-lg font-medium">
          {title}
        </h2>
        <p className="mt-1">₹ {price}</p>
      </div>
    </div>
  );
};
