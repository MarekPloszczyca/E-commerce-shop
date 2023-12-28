import React from "react";
import ReactDOM from "react-dom/client";
import "./main.module.scss";
import App from "./Routes/App.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { store } from "./Components/Cart/Cart.tsx";
import { Provider } from "react-redux";
import ErrorPage from "./Components/ErrorPage.tsx";
import Contact from "./Routes/Contact.tsx";
import AboutUs from "./Routes/AboutUs.tsx";
import Packing from "./Routes/Packing.tsx";
import Prices from "./Routes/Prices.tsx";
import ProductsLoader from "./Components/Functional/ProductsLoader.tsx";
import ProductPage from "./Routes/ProductPage.tsx";
import CategoriesPage from "./Routes/CategoriesPage.tsx";
import CategoriesLoader from "./Components/Functional/CategoriesLoader.tsx";
import UserCart from "./Routes/UserCart.tsx";

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
    loader: ProductsLoader,
    errorElement: <ErrorPage />,
  },
  {
    path: "/products/category/:id",
    element: <CategoriesPage />,
    loader: CategoriesLoader,
    errorElement: <ErrorPage />,
  },
  { path: "/cart", element: <UserCart />, errorElement: <ErrorPage /> },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
