'use client'
import { Product } from "@/components/card";
import { Footer } from "@/components/footer/footer";
import Navbar from "@/components/nav/Navbar";
import { getCall } from "@/service/apiCall";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default async function Home({ params }: { params: { slug: string } }) {
  // export default function Home(props:any) {
  const page = 1;
  const count = 20;

  const [data,setData] = useState([]);

  const response = await getCall(
    `/product/by-category/${params.slug}?page=${page}&count=${count}`
  );

const getProducts = async () =>{

} 

  useEffect(()=>{
    getProducts()
  },[]);
  // console.log(data);

  // let list = [];
  // const bestDeals: any = [
  //   {
  //     image: "https://dummyimage.com/420x260",
  //     category: "category",
  //     title: "The Catalyzer",
  //     price: 3499,
  //   },
  //   {
  //     image: "https://dummyimage.com/420x261",
  //     category: "category",
  //     title: "Shooting Stars",
  //     price: 4799,
  //   },
  //   {
  //     image: "https://dummyimage.com/420x260",
  //     category: "category",
  //     title: "Neptune",
  //     price: 2599,
  //   },
  //   {
  //     image: "https://dummyimage.com/420x260",
  //     category: "category",
  //     title: "The 400 Bows",
  //     price: 7999,
  //   },
  //   {
  //     image: "https://dummyimage.com/420x260",
  //     category: "category",
  //     title: "The Catalyzer",
  //     price: 3499,
  //   },
  //   {
  //     image: "https://dummyimage.com/420x261",
  //     category: "category",
  //     title: "Shooting Stars",
  //     price: 4799,
  //   },
  //   {
  //     image: "https://dummyimage.com/420x260",
  //     category: "category",
  //     title: "Neptune",
  //     price: 2599,
  //   },
  //   {
  //     image: "https://dummyimage.com/420x260",
  //     category: "category",
  //     title: "The 400 Bows",
  //     price: 7999,
  //   },
  // ];
  // console.log(data);

  // const createTitleFromUrl: (title: string) => string = (title) => {
  //   return title.replaceAll("%20", " ").replaceAll("-", " ");
  // };

  // const categoryTitle = params.slug
  //   ? createTitleFromUrl(params.slug)
  //   : "Category";

  return (
    <>
      <Navbar />
      <main className="max-w-6xl px-4 mx-auto py-6">
        <section className="flex flex-col mt-4">
          <h3 className="text-3xl font-semibold capitalize">
            {/* {categoryTitle || "Category"} */}
          </h3>
          <div className="flex flex-wrap gap-x-4 gap-y-8 w-full mt-6">
            {/* {data.data?.map((item: any, index: number) => (
              <Product key={index} data={item} />
            ))} */}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

// export async function getServerSideProps () {
//   const page = 1;
//   const count = 20;

//   const data = await getCall(
//     `/product/by-category/6676b67a38b122f82ce3119d?page=${page}&count=${count}`
//   );

//   return { props: { data } };
// };
