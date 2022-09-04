import React, { useState, useContext } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [showMobileSearch, setShowMobileSearch] = useState(false);

  return (
    <AppContext.Provider value={{ setShowMobileSearch, showMobileSearch }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
