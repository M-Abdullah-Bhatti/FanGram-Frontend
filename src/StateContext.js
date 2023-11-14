import React, { createContext, useContext, useState } from "react";

// Create the context
const StateContext = createContext();

// Create a provider component
export function StateProvider({ children }) {
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const [openSignupModal, setOpenSignupModal] = useState(false);
  const [orderData, setOrderData] = useState({
    bookingTo: { name: "", gender: "" },
    bookingBy: { name: "", gender: "" },
  });

  return (
    <StateContext.Provider
      value={{
        openLoginModal,
        setOpenLoginModal,
        openSignupModal,
        setOpenSignupModal,
        orderData,
        setOrderData,
      }}
    >
      {children}
    </StateContext.Provider>
  );
}

// Custom hook to access the context
export function useStateContext() {
  return useContext(StateContext);
}
