import { BannerSlider } from "@/components/carousel/bannerSlider";
import ToolTip from "@/components/tool-tip/info";
import Image from "next/image";

export default function Home() {
  const banners: any = [
    {
      title: "Slide 1",
      image: "/static/image/img1.jpg",
    },
    {
      title: "Slide 2",
      image: "/static/image/img2.jpg",
    },
    {
      title: "Slide 3",
      image: "/static/image/img3.jpg",
    },
  ];

  return (
    <>
      <header className="flex flex-col items-center">
        <div className="w-full bg-amber-600 relative">
          <div className="max-w-screen-xl mx-auto flex justify-between py-2 px-4">
            <ul className="flex gap-8">
              <li>About Us</li>
              <li>Customer Support</li>
            </ul>
            <p className="absolute left-1/2 -translate-x-1/2 top-2">
              Get 20% off your first order. <u>Subscribe</u>
            </p>
            <button
              type="button"
              className="flex items-center gap-2 hover:text-gray-900"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>

              <span>Log In</span>
            </button>
          </div>
        </div>
        <nav className="bg-white border-gray-200 w-full border-b">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto py-3 px-4">
            <a
              href="/"
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <img
                src="/logo.jpg"
                className="h-10 rounded-full"
                alt="Zixen Logo"
              />
              <span className="self-center text-3xl font-semibold whitespace-nowrap">
                Zixen
              </span>
            </a>
            <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
              <div className="flex gap-6">
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
                data-collapse-toggle="navbar-cta"
                type="button"
                className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                aria-controls="navbar-cta"
                aria-expanded="false"
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
            <div
              className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
              id="navbar-cta"
            >
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
        <div className="w-full bg-white">
          <ul className="w-full flex justify-between mx-auto max-w-4xl">
            <li className="px-4 py-3">Deals</li>
            <li className="px-4 py-3">Food</li>
            <li className="px-4 py-3">Beverages</li>
            <li className="px-4 py-3">Household</li>
            <li className="px-4 py-3">Personal Care</li>
            <li className="px-4 py-3">Popular</li>
            <li className="px-4 py-3">Orders</li>
          </ul>
        </div>
      </header>

      {/* <div className="w-full">
        <BannerSlider data={banners} />
      </div> */}
      <main className="flex min-h-screen flex-col px-10">
        <section className="text-gray-600 w-full flex justify-center py-16 container">
          <div className="w-full lg:w-1/2 bg-greena-500 flex items-center justify-center flex-col">
            <div className="flex flex-col items-start w-full">
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
                Microdosing synth tattooed vexillologist
              </h1>
              <p className="mb-8 leading-relaxed">
                Meggings kinfolk echo park stumptown DIY, kale chips beard
                jianbing tousled. Chambray dreamcatcher trust fund, kitsch vice
                godard disrupt ramps hexagon mustache umami snackwave tilde
                chillwave ugh. Pour-over meditation PBR&B pickled ennui celiac
                mlkshk freegan photo booth af fingerstache pitchfork.
              </p>
              <div className="flex justify-center">
                <button className="inline-flex text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded text-lg">
                  Button
                </button>
                <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                  Button
                </button>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex justify-center">
            <img
              src="/logo.jpg"
              alt="Logo"
              className="rounded-full w-60 h-60"
            />
          </div>
        </section>
      </main>
    </>
  );
}
