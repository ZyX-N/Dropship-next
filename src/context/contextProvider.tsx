import React, { ReactNode, useEffect, useState } from "react";
import ProContext from "./mainContext";

const ContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {

  const [navOpen, setNavOpen] = useState<boolean>(false);


  const contextValues:any = {navOpen,setNavOpen}

  return (
    <ProContext.Provider value={contextValues}>{children}</ProContext.Provider>
  );
};

export default ContextProvider;
