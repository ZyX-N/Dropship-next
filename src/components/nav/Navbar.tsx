"use client";
import React, { useEffect, useState } from "react";
import ToolTip from "../tool-tip/info";
import { Cross } from "../icons/cross";
import { Person } from "../icons/person";
import Link from "next/link";
import Image from "next/image";
import { getCall } from "../../service/apiCall";

const Navbar = () => {
  const [nav, setNav] = useState<boolean>(false);

  // const navlist = [
  //   { title: "Deals", url: "/deals" },
  //   { title: "Household", url: "/household" },
  //   { title: "Electronic", url: "/electronic" },
  //   { title: "Personal", url: "/personal" },
  //   { title: "Popular", url: "/popular" },
  //   { title: "Orders", url: "/order" },
  // ];

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
      <header className="flex flex-col items-center">
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
                  <button type="button" className="">
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
                        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                      />
                    </svg>
                  </button>
                </ToolTip>

                <ToolTip message="Cart">
                  <button type="button" className="">
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
                        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                      />
                    </svg>
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
            {navList.map((item) => (
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
            {navList.map((item) => (
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
