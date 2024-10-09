import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Star } from "../icons";
import { Heart } from "../icons/heart";

interface ProductCardProps {
  data: {
    price?: number | null;
    title?: string | null;
    shortDescription?: string | null;
    slug?: string | null;
    stock?: number | null;
    strikePrice?: number | null;
    image: Array<any>;
    rating: number;
    extraCardContent?: string | null;
  };
}

export const Product: React.FC<ProductCardProps> = ({ data }) => {
  const {
    price,
    title,
    slug,
    stock,
    strikePrice,
    image,
    extraCardContent,
    shortDescription,
    rating,
  } = data;

  let isLiked = false;
  const redirectUrl = `/product/${slug}` || "/";

  return (
    <div className="lg:w-[calc(25%-12px)] md:w-[calc(50%-8px)] w-full bg-white rounded-lg shadow-lg relative">
      <Link
        href={"product" + "/" + slug}
        className="block relative h-60 rounded-t overflow-hidden shadow-lg"
      >
        <Image
          alt="ecommerce"
          fill={true}
          className="object-cover object-center block rounded-b-none"
          src={image?.length > 0 ? image[0].url : "/static/image/no-image.png"}
        />
      </Link>
      <div className="mt-2 px-3 pb-2 flex flex-col gap-0.5">
        <h2 className="text-gray-900 title-font text-base font-medium">
          {title || ""}
        </h2>
        <span className="text-gray-500 title-font text-[13px] leading-4 line-clamp-2">
          {shortDescription ||
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem voluptatem consectetur adipisicing elit. Exercitationem voluptatem"}
        </span>
        <div className="mt-1 flex items-center gap-0.5">
          {[1, 2, 3, 4, 5].map((num: number) => (
            <Star
              key={num}
              className="w-5 h-5 text-yellow-400"
              fill={rating < num ? "none" : "yellow"}
            />
          ))}
        </div>
        <div className="flex w-full items-center gap-2">
          <p className="text-gray-900 font-medium text-sm">₹ {price || "-"}</p>
          {strikePrice && (
            <span className="text-sm text-gray-500">
              ₹<del className="ml-0.5">{strikePrice}</del>
            </span>
          )}
          {stock === 0 && (
            <span className="text-xs ml-1 font-medium text-red-500">
              Out of stock
            </span>
          )}
        </div>

        <div className="flex justify-between">{extraCardContent || ""}</div>
        <div className="w-full h-10 mt-1">
          <Link
            href={redirectUrl}
          >
            <button
              type="button"
              className="size-full flex justify-center items-center bg-amber-600 rounded-md text-white cursor-pointer hover:scale-105 transition-all duration-300"
            >
              Shop Now
            </button>
          </Link>
        </div>
      </div>
      <Heart
        className={`size-7 absolute right-3 top-3 z-50 cursor-pointer hover:scale-105 transition-all duration-300 ${
          !isLiked ? "text-gray-300" : "text-amber-500"
        }`}
        fill={!isLiked ? "#d1d5db" : "#f59e0b"}
        strokeWidth="1.7"
      />
    </div>
  );
};
