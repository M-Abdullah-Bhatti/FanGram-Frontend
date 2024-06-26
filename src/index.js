import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { StateProvider } from "./StateContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ToastContainer position="top-right" autoClose={3000} />
    <BrowserRouter>
      <StateProvider>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </StateProvider>
    </BrowserRouter>
  </React.StrictMode>
);
