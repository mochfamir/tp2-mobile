import React, { createContext, useContext, useState } from "react";

const CommonContext = createContext();

export const CommonContextProvider = ({ children }) => {
  const [state, setState] = useState({
    nama: "Guest",
    hobi: "",
  });

  return (
    <CommonContext.Provider value={{ state, setState }}>
      {children}
    </CommonContext.Provider>
  );
};

export const useCommonState = () => {
  const context = useContext(CommonContext);
  if (!context) {
    throw new Error(
      "useCommonState must be used within a CommonContextProvider"
    );
  }
  return context;
};
