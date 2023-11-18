import React, { createContext, useContext, useState } from "react";

// Create the context
const StateContext = createContext();

// Create a provider component
export function StateProvider({ children }) {
  const [openLoginModal, setOpenLoginModal] = useState(false);
  const [openSignupModal, setOpenSignupModal] = useState(false);
  const [paymentModal, setPaymentModal] = useState(false);
  const [searchValue, setSearchValue] = useState();

  console.log("Hello it is context");

  const [orderData, setOrderData] = useState({
    bookingTo: { name: "", gender: "He/Him" },
    bookingBy: { name: "", gender: "He/Him" },
    occasion: "",
    language: "English",
    customMessage: "",
    price: "",
    publicVideo: true,
    fastDelivery: false,
    extras: [],
    billingNumber: "",
    bookingEmail: "",
    addOnnPrice: 0,
    coupenDiscount: 550,
    coupenNames: [],
  });

  return (
    <StateContext.Provider
      value={{
        openLoginModal,
        setOpenLoginModal,
        openSignupModal,
        setOpenSignupModal,
        paymentModal,
        setPaymentModal,
        orderData,
        setOrderData,
        searchValue,
        setSearchValue,
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
