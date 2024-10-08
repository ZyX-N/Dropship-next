"use client";
import { Product } from "@/app/_components/card";
import { getProductsByCategory } from "@/app/_server";
import React, { useEffect, useState } from "react";

const Page = ({ params }: { params: { slug: string } }) => {
  const [data, setData] = useState<Array<any>>([]);
  const { slug } = params;

  const getProducts = async () => {
    const resp = await getProductsByCategory({ slug });
    if (resp.status) {
      setData(resp.data);
    }
  };

  useEffect(() => {
    getProducts();
  }, [slug]);
  console.log(data);

  return (
    <>
      <main className="max-w-6xl px-4 mx-auto py-6">
        <section className="flex flex-col mt-4">
          <h3 className="text-3xl font-semibold capitalize">Category</h3>
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
        </section>
      </main>
    </>
  );
};

export default Page;
