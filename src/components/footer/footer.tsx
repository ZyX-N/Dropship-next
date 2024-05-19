import Image from "next/image";
import Link from "next/link";
import React from "react";

export const Footer = () => {
  return (
    <footer className="text-gray-600 body-font bg-amber-600">
      <div className="container px-5 py-12 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <Link
            href={`/`}
            className="flex title-font font-medium items-center md:justify-start justify-center text-black"
          >
            <Image
              src="/logo.jpg"
              height={40}
              width={40}
              alt="zixen"
              className="rounded-full"
            />
            <span className="ml-3 text-3xl font-semibold whitespace-nowrap">
              Zixen
            </span>
          </Link>
          <p className="mt-2 text-sm text-gray-900">
            Air plant banjo lyft occupy retro adaptogen indego
          </p>
        </div>
        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
          <div className="lg:w-1/3 md:w-1/2 w-full px-4">
            <h2 className="title-font font-semibold text-black tracking-wider text-lg mb-3">
              CATEGORIES
            </h2>
            <nav className="list-none mb-10 flex flex-col gap-2">
              <li>
                <Link href={`/`} className="text-gray-900 hover:text-gray-800">
                  Deals
                </Link>
              </li>
              <li>
                <Link href={`/`} className="text-gray-900 hover:text-gray-800">
                  Food
                </Link>
              </li>
              <li>
                <Link href={`/`} className="text-gray-900 hover:text-gray-800">
                  Bevarages
                </Link>
              </li>
              <li>
                <Link href={`/`} className="text-gray-900 hover:text-gray-800">
                  House Hold
                </Link>
              </li>
              <li>
                <Link href={`/`} className="text-gray-900 hover:text-gray-800">
                  Personal Care
                </Link>
              </li>
              <li>
                <Link href={`/`} className="text-gray-900 hover:text-gray-800">
                  Popular
                </Link>
              </li>
              <li>
                <Link href={`/`} className="text-gray-900 hover:text-gray-800">
                  Orders
                </Link>
              </li>
            </nav>
          </div>

          <div className="lg:w-1/3 md:w-1/2 w-full px-4">
            <h2 className="title-font font-semibold text-black tracking-wider text-lg mb-3">
              INFO
            </h2>
            <nav className="list-none mb-10 flex flex-col gap-2">
              <li>
                <Link href={`/`} className="text-gray-900 hover:text-gray-800">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href={`/`} className="text-gray-900 hover:text-gray-800">
                  About Us
                </Link>
              </li>
              <li>
                <Link href={`/`} className="text-gray-900 hover:text-gray-800">
                  Customer Support
                </Link>
              </li>
              <li>
                <Link href={`/`} className="text-gray-900 hover:text-gray-800">
                  Location
                </Link>
              </li>
            </nav>
          </div>

          <div className="lg:w-1/3 md:w-1/2 w-full px-4">
            <h2 className="title-font font-semibold text-black tracking-wider text-lg mb-3">
              MY CHOICE
            </h2>
            <nav className="list-none mb-10 flex flex-col gap-2">
              <li>
                <Link href={`/`} className="text-gray-900 hover:text-gray-800">
                  Favorites
                </Link>
              </li>
              <li>
                <Link href={`/`} className="text-gray-900 hover:text-gray-800">
                  My Orders
                </Link>
              </li>
            </nav>
          </div>
        </div>
      </div>

       <div className="bg-gray-100">
        <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
          <p className="text-gray-500 text-sm text-center sm:text-left">
            © 2024 Zixen —
            <Link
              href={"/"}
              className="text-gray-600 ml-1"
              target="_blank"
            >
              @zixen
            </Link>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
            <Link href={`/`} className="text-gray-500">
              <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </Link>
            <Link href={`/`} className="ml-3 text-gray-500">
              <svg
                fill="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </Link>
            <Link href={`/`} className="ml-3 text-gray-500">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </Link>
            <Link href={`/`} className="ml-3 text-gray-500">
              <svg
                fill="currentColor"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="0"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                ></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </Link>
          </span>
        </div>
      </div>
    </footer>
  );
};
