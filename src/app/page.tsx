import { StripCard } from "@/components/card/Strip";
import { BannerSlider } from "@/components/carousel/bannerSlider";
import { Phone, Truck } from "@/components/icons";
import { CreditCard } from "@/components/icons/credit";
import { Gift } from "@/components/icons/gift";
import Navbar from "@/components/nav/Navbar";
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

  const stripClass: string = "size-10 text-amber-600";

  const strips: any = [
    {
      logo: <Truck className={stripClass} />,
      title: "Free Delivery",
      link: "to your door",
    },
    {
      logo: <Phone className={stripClass} />,
      title: "Available for you",
      link: "<a href='/'><u>Online Support</u></a> 24/7",
    },
    {
      logo: <Gift className={stripClass} />,
      title: "Special Offers",
      link: "for our loyal customers",
    },
    {
      logo: <CreditCard className={stripClass} />,
      title: "Secure Payment",
      link: "with SSL encryption",
    },
  ];

  return (
    <div className="">
      <Navbar />

      <div className="w-full">
        <BannerSlider data={banners} />
      </div>

      <div className="flex flex-col max-w-6xl px-4 mx-auto">
        <div className="flex lg:flex-row flex-col items-center justify-center divide-y lg:divide-y-0 divide-x-0 lg:divide-x divide-black mt-6">
          {strips.map(({ logo, title, link }: any) => (
            <StripCard logo={logo} title={title} link={link} />
          ))}
        </div>

        <section className="flex flex-col mt-10">
          <h3 className="text-3xl font-semibold">Best Deals</h3>
          <div className="flex flex-wrap gap-x-4 gap-y-8 w-full mt-6">
            <div className="lg:w-[calc(25%-12px)] md:w-[calc(50%-8px)] w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <Image
                  alt="ecommerce"
                  fill={true}
                  className="object-cover object-center block"
                  src="https://dummyimage.com/420x260"
                />
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  CATEGORY
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  The Catalyzer
                </h2>
                <p className="mt-1">$16.00</p>
              </div>
            </div>
            <div className="lg:w-[calc(25%-12px)] md:w-[calc(50%-8px)] w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <Image
                  alt="ecommerce"
                  fill={true}
                  className="object-cover object-center block"
                  src="https://dummyimage.com/421x261"
                />
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  CATEGORY
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  Shooting Stars
                </h2>
                <p className="mt-1">$21.15</p>
              </div>
            </div>
            <div className="lg:w-[calc(25%-12px)] md:w-[calc(50%-8px)] w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <Image
                  alt="ecommerce"
                  fill={true}
                  className="object-cover object-center block"
                  src="https://dummyimage.com/422x262"
                />
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  CATEGORY
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  Neptune
                </h2>
                <p className="mt-1">$12.00</p>
              </div>
            </div>
            <div className="lg:w-[calc(25%-12px)] md:w-[calc(50%-8px)] w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <Image
                  alt="ecommerce"
                  fill={true}
                  className="object-cover object-center block"
                  src="https://dummyimage.com/423x263"
                />
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  CATEGORY
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  The 400 Blows
                </h2>
                <p className="mt-1">$18.40</p>
              </div>
            </div>
            <div className="lg:w-[calc(25%-12px)] md:w-[calc(50%-8px)] w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <Image
                  alt="ecommerce"
                  fill={true}
                  className="object-cover object-center block"
                  src="https://dummyimage.com/424x264"
                />
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  CATEGORY
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  The Catalyzer
                </h2>
                <p className="mt-1">$16.00</p>
              </div>
            </div>
            <div className="lg:w-[calc(25%-12px)] md:w-[calc(50%-8px)] w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <Image
                  alt="ecommerce"
                  fill={true}
                  className="object-cover object-center block"
                  src="https://dummyimage.com/425x265"
                />
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  CATEGORY
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  Shooting Stars
                </h2>
                <p className="mt-1">$21.15</p>
              </div>
            </div>
            <div className="lg:w-[calc(25%-12px)] md:w-[calc(50%-8px)] w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <Image
                  alt="ecommerce"
                  fill={true}
                  className="object-cover object-center block"
                  src="https://dummyimage.com/427x267"
                />
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  CATEGORY
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  Neptune
                </h2>
                <p className="mt-1">$12.00</p>
              </div>
            </div>
            <div className="lg:w-[calc(25%-12px)] md:w-[calc(50%-8px)] w-full">
              <a className="block relative h-48 rounded overflow-hidden">
                <Image
                  alt="ecommerce"
                  fill={true}
                  className="object-cover object-center block"
                  src="https://dummyimage.com/428x268"
                />
              </a>
              <div className="mt-4">
                <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                  CATEGORY
                </h3>
                <h2 className="text-gray-900 title-font text-lg font-medium">
                  The 400 Blows
                </h2>
                <p className="mt-1">$18.40</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
