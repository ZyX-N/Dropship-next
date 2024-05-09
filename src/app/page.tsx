import { BannerSlider } from "@/components/carousel/bannerSlider";
import Image from "next/image";

export default function Home() {

  const banners:any = [
    {
      title:"Slide 1",
      image:"https://flowbite.com/docs/images/carousel/carousel-1.svg"
    },
    {
      title:"Slide 2",
      image:"https://flowbite.com/docs/images/carousel/carousel-2.svg"
    },
    {
      title:"Slide 3",
      image:"https://flowbite.com/docs/images/carousel/carousel-3.svg"
    }
  ]

  return (
    <main className="flex min-h-screen flex-col items-center justify-between px-10">
      <div className="w-full">
        <BannerSlider data={banners}/>
      </div>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-20 items-center justify-center flex-col">
          <img
            className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded"
            alt="hero"
            src="https://dummyimage.com/720x600"
          />
          <div className="text-center lg:w-2/3 w-full">
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
      </section>
    </main>
  );
}
