import React, { useState } from "react";

export const Context = React.createContext();

export const ContextProvider = ({ children }) => {
  const [toggleOpen, setToggleOpen] = useState(false);

  return (
    <Context.Provider value={{ toggleOpen, setToggleOpen }}>
      {children}
    </Context.Provider>
  );
};
