/* eslint-disable @typescript-eslint/no-explicit-any */
import { Fragment, useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import Navigation from "../Components/Navigation";
import Footer from "../Components/Footer";
import ScrollToTop from "../Components/Functional/ScrollToTop";
import SectionHeader from "../Components/SectionHeader";
import ProductsContainer from "../Components/Models/ProductsContainer";
import ProductsRender from "../Components/Functional/ProductsRender";

export default function CategoriesPage() {
  const { categoriesDetails }: any = useLoaderData();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    ProductsRender(categoriesDetails, setProducts);
  }, [categoriesDetails]);

  return (
    <Fragment>
      <Navigation />
      <SectionHeader
        text={
          categoriesDetails[0].category.charAt(0).toUpperCase() +
          categoriesDetails[0].category.slice(1)
        }
      />
      <ProductsContainer>{products}</ProductsContainer>
      <Footer />
      <ScrollToTop />
    </Fragment>
  );
}
