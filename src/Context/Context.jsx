import React, { useState } from "react";

export const Context = React.createContext();

export const ContextProvider = ({ children }) => {
  const [toggleOpen, setToggleOpen] = useState(false);
  const [imgSrc, setImgSrc] = useState("");
  return (
    <Context.Provider value={{ toggleOpen, setToggleOpen, imgSrc, setImgSrc }}>
      {children}
    </Context.Provider>
  );
};
