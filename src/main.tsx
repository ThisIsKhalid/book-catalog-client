import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./index.css";
import router from "./routes/routes.tsx";
 import { ToastContainer } from "react-toastify";
 import "react-toastify/dist/ReactToastify.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ToastContainer autoClose={2000} />
    <RouterProvider router={router} />
  </React.StrictMode>
);
