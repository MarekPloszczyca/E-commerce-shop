import React from "react";
import ReactDOM from "react-dom/client";
import "./main.module.scss";
import App from "./Routes/App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./Components/ErrorPage.tsx";
import Contact from "./Routes/Contact.tsx";
import AboutUs from "./Routes/AboutUs.tsx";
import Packing from "./Routes/Packing.tsx";
import Prices from "./Routes/Prices.tsx";
import ProductLoader from "./Components/Functional/SingleProductLoader.tsx";
import ProductPage from "./Routes/ProductPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  { path: "/contact", element: <Contact />, errorElement: <ErrorPage /> },
  { path: "/aboutUs", element: <AboutUs />, errorElement: <ErrorPage /> },
  {
    path: "/productsPacking",
    element: <Packing />,
    errorElement: <ErrorPage />,
  },
  { path: "/prices", element: <Prices />, errorElement: <ErrorPage /> },
  {
    path: "/products/:id",
    element: <ProductPage />,
    loader: ProductLoader,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
