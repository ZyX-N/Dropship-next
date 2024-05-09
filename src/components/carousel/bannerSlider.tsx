"use client";

import { useState } from "react";

export function BannerSlider({ data }: { data: Array<any> }) {
  const [slide, setSlide] = useState<number>(1);

  return (
    <div className="w-full">
      <div id="default-carousel" className="relative">
        <div className="overflow-hid den flex relative w-full h-56 rounded-lg sm:h-64 xl:h-80 2xl:h-96">
          {data?.map((item: any) => (
            <div
              className={`absolute duration-700 ease-in-out w-full h-full`}
              key={item.title}
            >
              <img
                src={item.image}
                className="w-96 h-full"
                alt={item.title}
              />
            </div>
          ))}
        </div>
        <div className="flex absolute bottom-5 left-1/2 z-30 space-x-3 -translate-x-1/2">
          <button type="button" className="w-3 h-3 rounded-full"></button>
          <button type="button" className="w-3 h-3 rounded-full"></button>
          <button type="button" className="w-3 h-3 rounded-full"></button>
        </div>
        <button
          type="button"
          className="flex absolute top-0 left-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
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
        </button>
      </div>
    </div>
  );
}
