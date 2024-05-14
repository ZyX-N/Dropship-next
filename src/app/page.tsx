import { StripCard } from "@/components/card/Strip";
import { BannerSlider } from "@/components/carousel/bannerSlider";
import Navbar from "@/components/nav/Navbar";
import ToolTip from "@/components/tool-tip/info";
import ProContext from "@/context/mainContext";
import Image from "next/image";
import { useState } from "react";

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

  const strips: any = [
    {
      logo: <img src="/static/image/img3.jpg" />,
      title: "Free Delivery",
      link: "to your door",
    },
    {
      logo: <img src="/static/image/img2.jpg" />,
      title: "Available for you",
      link: "<a href='/'><u>Online Support</u></a> 24/7",
    },
  ];

  return (
    <div className="">
      <Navbar />

      <div className="w-full">
        <BannerSlider data={banners} />
      </div>

      <div className="flex items-center justify-center">
        {strips.map(({ logo, title, link }: any) => (
          <StripCard logo={logo} title={title} link={link} />
        ))}
      </div>

      <main className="flex min-h-screen flex-col px-10">
        <section className="text-gray-600 w-full flex justify-center py-16 container">
          <div className="w-full md:w-1/2 bg-greena-500 flex items-center justify-center flex-col">
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
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src="/logo.jpg"
              alt="Logo"
              className="rounded-full w-60 h-60"
            />
          </div>
        </section>
      </main>
    </div>
  );
}
