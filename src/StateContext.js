import React, { createContext, useContext, useState } from "react";

// Create the context
const StateContext = createContext();

// Create a provider component
export function StateProvider({ children }) {
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const [openSignupModal, setOpenSignupModal] = useState(false);
  const [orderData, setOrderData] = useState({
    bookingTo: { name: "", gender: "He/Him" },
    bookingBy: { name: "", gender: "He/Him" },
    occasion: "",
    language: "",
    customMessage: "",
    price: "",
    publicVideo: true,
    fastDelivery: false,
    extras: [],
    billingNumber: "",
    bookingEmail: "",
    addOnnPrice: 0,
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
