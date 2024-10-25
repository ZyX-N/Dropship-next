"use client";
import { getCall } from "@/service/apiCall";
import { getLoginToken } from "@/service/token";
import React, { ReactNode, createContext, useEffect, useState } from "react";

export const ProContext: any = createContext<any>(null);

export interface contextValuesProps {
  cartlistData?: Array<any>;
  getCart_f?: () => void;
}

export const ContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [cartlistData, setCartlistData] = useState<Array<any>>([]);

  // FUNCTIONS
  const getCart_f = async () => {
    try {
      let resp = await getCall(`/cart`, {
        authorization: `Bearer ${getLoginToken()}`,
      });
      if (resp && resp.status) {
        setCartlistData(resp.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCart_f();
  }, []);

  const contextValues: contextValuesProps = { cartlistData, getCart_f };
  return (
    <ProContext.Provider value={contextValues}>{children}</ProContext.Provider>
  );
};
