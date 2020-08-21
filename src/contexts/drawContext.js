import React, { createContext, useState } from "react";

export const DrawContext = createContext();

export const DrawProvider = (props) => {
  const [drawField, setdrawField] = useState(false);
  return (
    <DrawContext.Provider value={[drawField, setdrawField]}>
      {props.children}
    </DrawContext.Provider>
  );
};
