import React, { createContext, useState } from "react";

export const FarmsContext = createContext();

export const FarmsProvider = (props) => {
  const [farms, setFarms] = useState({});
  return (
    <FarmsContext.Provider value={[farms, setFarms]}>
      {props.children}
    </FarmsContext.Provider>
  );
};
