import { StripCard, Product } from "@/components/card";
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

  const bestDeals: any = [
    {
      image: "https://dummyimage.com/420x260",
      category: "category",
      title: "The Catalyzer",
      price: 3499,
    },
    {
      image: "https://dummyimage.com/420x261",
      category: "category",
      title: "Shooting Stars",
      price: 4799,
    },
    {
      image: "https://dummyimage.com/420x260",
      category: "category",
      title: "Neptune",
      price: 2599,
    },
    {
      image: "https://dummyimage.com/420x260",
      category: "category",
      title: "The 400 Bows",
      price: 7999,
    },
    {
      image: "https://dummyimage.com/420x260",
      category: "category",
      title: "The Catalyzer",
      price: 3499,
    },
    {
      image: "https://dummyimage.com/420x261",
      category: "category",
      title: "Shooting Stars",
      price: 4799,
    },
    {
      image: "https://dummyimage.com/420x260",
      category: "category",
      title: "Neptune",
      price: 2599,
    },
    {
      image: "https://dummyimage.com/420x260",
      category: "category",
      title: "The 400 Bows",
      price: 7999,
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
          {strips?.map(({ logo, title, link }: any, index: number) => (
            <StripCard key={index} logo={logo} title={title} link={link} />
          ))}
        </div>

        <section className="flex flex-col mt-10">
          <h3 className="text-3xl font-semibold">Best Deals</h3>
          <div className="flex flex-wrap gap-x-4 gap-y-8 w-full mt-6">
            {bestDeals?.map(
              ({ image, category, title, price }: any, index: number) => (
                <Product
                  key={index}
                  src={image}
                  category={category}
                  title={title}
                  price={price}
                />
              )
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
