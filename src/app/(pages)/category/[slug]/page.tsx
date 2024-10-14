"use client";
import { Product } from "@/app/_components/card";
import TriangleSpinner from "@/app/_components/loader/Loader";
import { getCategoryDetails, getProductsByCategory } from "@/app/_server";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Page = ({ params }: { params: { slug: string } }) => {
  const [data, setData] = useState<Array<any>>([]);
  const [category, setCategory] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const { slug } = params;

  const getProducts = async () => {
    const resp = await getProductsByCategory({ slug });
    if (resp.status) {
      setData(resp.data);
    }
    setLoading(false);
  };

  const getCategory = async () => {
    const resp = await getCategoryDetails({ slug });
    if (resp.status) {
      setCategory(resp.data);
    }
  };

  useEffect(() => {
    getProducts();
    getCategory();
  }, [slug]);
  console.log(category);

  return (
    <>
      <main className="max-w-6xl px-4 mx-auto py-6">
        <section className="flex flex-col mt-4">
          <h3 className="text-3xl font-semibold capitalize flex items-center gap-4">
            {category?.title || ""}
            {category?.image && (
              <span className="size-10 rounded-full">
                <Image
                  src={category.image}
                  alt="Zixen"
                  width={20}
                  height={20}
                  className="size-full rounded-full object-cover"
                />
              </span>
            )}
          </h3>
          {loading ? (
            <TriangleSpinner />
          ) : (
            <div className="flex flex-wrap gap-x-4 gap-y-8 w-full mt-6">
              {data?.map(
                ({
                  _id,
                  price,
                  title,
                  slug,
                  stock,
                  strikePrice,
                  image,
                  rating,
                }) => (
                  <Product
                    key={_id}
                    data={{
                      price,
                      title,
                      slug,
                      stock,
                      strikePrice,
                      image,
                      rating,
                    }}
                  />
                )
              )}
            </div>
          )}
        </section>
      </main>
    </>
  );
};

export default Page;
