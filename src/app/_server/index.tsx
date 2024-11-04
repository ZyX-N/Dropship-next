"use server";
import { getCall } from "@/service/apiCall";

export const getProductsByCategory = async ({ slug }: any) => {
  try {
    const page = 1;
    const count = 20;
    const response = await getCall(
      `/product/by-category/${slug}?page=${page}&count=${count}`
    );
    return response;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getProductsDetails = async ({ slug, header = {} }: any) => {
  try {
    const response = await getCall(`/product/${slug}`, header);

    return response;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getCategoryDetails = async ({ slug }: any) => {
  const response = await getCall(`/category/${slug}`);
  return response;
};
