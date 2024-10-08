"use server";
import { getCall } from "@/service/apiCall";

export const getProductsByCategory = async ({ slug }: any) => {
  const page = 1;
  const count = 20;
  const response = await getCall(
    `/product/by-category/${slug}?page=${page}&count=${count}`
  );
  return response
};
