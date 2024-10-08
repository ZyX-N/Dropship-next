"use client";
import React, { useEffect, useState } from "react";
import ToolTip from "../tool-tip/info";
import { Cross } from "../icons/cross";
import { Person } from "../icons/person";
import Link from "next/link";
import Image from "next/image";
import { getCall } from "../../../service/apiCall";
import { Cart } from "../icons/cart";
import { Heart } from "../icons/heart";

interface NavbarProps {
  setWishlistBar: (value: boolean) => void;
  setCartlistBar: (value: boolean) => void;
}

const Navbar: React.FC<NavbarProps> = ({ setWishlistBar, setCartlistBar }) => {
  const [nav, setNav] = useState<boolean>(false);

  const [navList, setNavList] = useState([]);

  const getNavList = async () => {
    try {
      let list = await getCall("/category");
      if (list) {
        setNavList(list.data);
      }
    } catch (error) {
      console.log(error);
      return null;
    }
  };

  useEffect(() => {
    getNavList();
  }, []);

  return (
    <>
      <header className="flex flex-col items-center shadow-lg">
        <div className="w-full bg-amber-600 relative">
          <div className="max-w-screen-xl mx-auto flex justify-between py-2 px-4">
            <ul className="md:flex gap-8 hidden">
              <li>About Us</li>
              <li>Customer Support</li>
            </ul>
            <p className="static mx-auto md:absolute md:left-1/2 md:-translate-x-1/2 md:top-2">
              Get 20% off your first order. <u>Subscribe</u>
            </p>
            <Link
              href={"/login"}
              className="hidden md:flex items-center gap-2 hover:text-gray-900"
            >
              <Person />
              <span>Log In</span>
            </Link>
          </div>
        </div>

        <nav className="bg-white border-gray-200 w-full md:border-b">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-3 px-4">
            <a
              href="/"
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <Image
                src="/logo.jpg"
                height={40}
                width={40}
                alt="Zixen"
                className="rounded-full"
              />
              <span className="self-center text-3xl font-semibold whitespace-nowrap">
                Zixen
              </span>
            </a>
            <div className="flex items-center md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
              <div className="flex items-center gap-6">
                <ToolTip message="Wishlist">
                  <button
                    type="button"
                    className=""
                    onClick={() => setWishlistBar(true)}
                  >
                    <Heart />
                  </button>
                </ToolTip>

                <ToolTip message="Cart">
                  <button
                    type="button"
                    className=""
                    onClick={() => setCartlistBar(true)}
                  >
                    <Cart />
                  </button>
                </ToolTip>
              </div>

              <button
                type="button"
                className="inline-flex items-center w-10 h-10 justify-center text-sm text-gray-900 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none"
                onClick={() => setNav(true)}
              >
                <span className="sr-only">Open main menu</span>
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 17 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              </button>
            </div>
            <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
              <div className="rounded-md border border-black flex items-center w-96">
                <input
                  type="text"
                  className="outline-none rounded-md py-1 px-2 w-full text-sm"
                  placeholder="Search a product e.g. bag"
                />
                <button
                  type="button"
                  className="bg-amber-600 px-2 py-1 rounded-r-md border-l border-black"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </nav>

        <div className="w-full bg-white px-4 pb-2 md:pb-0">
          <ul className="w-full hidden md:flex justify-between mx-auto max-w-4xl">
            {navList.map((item: any) => (
              <li className="px-4 py-3" key={item?.title}>
                <Link href={"/category/" + item?.slug}>{item?.title}</Link>
              </li>
            ))}
          </ul>
          <div className="items-center justify-between md:hidden w-full flex ">
            <div className="rounded-md border border-black flex items-center mx-auto w-full">
              <input
                type="text"
                className="outline-none rounded-md py-1 px-2 w-full text-sm"
                placeholder="Search a product e.g. bag"
              />
              <button
                type="button"
                className="bg-amber-600 px-2 py-1 rounded-r-md border-l border-black"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div
        className={`z-50 fixed top-0 left-0 bg-amber-500 h-screen w-screen flex-col gap-2 px-6 py-4 md:hidden ${
          nav ? "flex" : "hidden"
        }`}
      >
        <div className="flex justify-between items-center">
          <ul className="flex gap-4 md:hidden">
            <li>About Us</li>
            <li>Customer Support</li>
          </ul>
          <button
            type="button"
            className="rounded-md hover:bg-amber-400 p-2"
            onClick={() => setNav(false)}
          >
            <Cross />
          </button>
        </div>
        <div className="flex justify-start items-center">
          <button
            type="button"
            className="md:hidden flex items-center gap-2 hover:text-gray-900"
          >
            <Person />
            <span>Log In</span>
          </button>
        </div>

        <div className="flex flex-col justify-start ">
          <ul className="w-full md:hidden flex flex-col items-center justify-between gap-1">
            {navList.map((item: any) => (
              <li className="px-4 py-3" key={item?.title}>
                <Link href={"/category/" + item?.slug}>{item?.title}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
