import { Product } from "@/components/card";
import Image from "next/image";
import React from "react";

export default function Home({ params }: { params: { slug: string } }) {
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

  const createTitleFromUrl: (title: string) => string = (title) => {
    return title.replaceAll("%20", " ").replaceAll("-", " ");
  };

  const categoryTitle = params.slug
    ? createTitleFromUrl(params.slug)
    : "Category";

  return (
    <main className="max-w-6xl px-4 mx-auto py-6">
      <section className="flex flex-col mt-4">
        <h3 className="text-3xl font-semibold capitalize">
          {categoryTitle || "Category"}
        </h3>
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
    </main>
  );
}
