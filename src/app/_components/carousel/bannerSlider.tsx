"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export function BannerSlider({ data }: { data: Array<any> }) {
  const [slide, setSlide] = useState<number>(0);

  useEffect(() => {
    // let timer = setInterval(() => {
    //   setSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1));
    // }, 4000);

    // return () => clearInterval(timer);
  }, []);

  return (
    <div className="w-full">
      <div id="default-carousel" className="relative">
        <div className="overflow-hidden flex w-full h-[300px] sm:h-[400px] xl:h-[500px]">
          {data?.map((item: any, index: number) => (
            <div
              className={`absolute duration-700 ease-in-out left-0 top-0 w-full h-full ${
                slide === index ? "opacity-100 z-20" : "opacity-0 z-10"
              }`}
              key={item.title}
            >
              <Image
                src={item.image}
                fill={true}
                alt={item.title}
              />
            </div>
          ))}
        </div>

        <div className="absolute z-30 top-1/2 -translate-y-1/2 left-[16%] flex flex-col items-start gap-4">
          <h1 className="flex flex-col gap-1 sm:gap-3">
            <span className="text-lg sm:text-xl lg:text-2xl font-medium">
              Easy, Fresh & Convenient
            </span>
            <span className="text-2xl sm:text-4xl lg:text-6xl font-semibold sm:font-medium">
              Stock Up on <br />
              Daily Essentials
            </span>
            <span className="text-lg sm:text-2xl lg:text-4xl font-semibold sm:font-medium">
              Save Big on Your <br />
              Favorite Brands
            </span>
          </h1>
          <button
            type="button"
            className="rounded-full border border-amber-600 px-5 py-1.5 font-medium text-sm sm:text-md lg:text-lg bg-amber-600 hover:bg-white hover:text-amber-600"
          >
            Shop Now
          </button>
        </div>
        {/* <div className="flex absolute bottom-5 left-1/2 z-30 space-x-3 -translate-x-1/2">
          {data?.map((item: any, index: number) => (
            <button
              key={index}
              type="button"
              className={`w-3 h-3 rounded-full ${
                index === slide ? "bg-gray-300" : "bg-gray-100"
              }`}
              onClick={() => setSlide(index)}
            ></button>
          ))}
        </div> */}

        {/* <button
          type="button"
          className="flex absolute top-0 left-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
          onClick={() => setSlide(slide > 0 ? slide - 1 : data.length - 1)}
        >
          <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              ></path>
            </svg>
            <span className="hidden">Previous</span>
          </span>
        </button>

        <button
          type="button"
          className="flex absolute top-0 right-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
          onClick={() => setSlide(slide < data.length - 1 ? slide + 1 : 0)}
        >
          <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
            <span className="hidden">Next</span>
          </span>
        </button> */}
      </div>
    </div>
  );
}
