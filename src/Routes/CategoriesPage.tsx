/* eslint-disable @typescript-eslint/no-explicit-any */
import { Fragment, useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import Navigation from "../Components/Navigation";
import Footer from "../Components/Footer";
import ScrollToTop from "../Components/Functional/ScrollToTop";
import SectionHeader from "../Components/SectionHeader";
import ProductsContainer from "../Components/Models/ProductsContainer";
import Product from "../Components/Product";

export default function CategoriesPage() {
  const { categoriesDetails }: any = useLoaderData();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const products = categoriesDetails.map(
      (product: {
        id: number;
        image: string;
        title: string;
        price: string;
      }) => {
        return (
          <Product
            key={product.id}
            id={product.id}
            image={product.image}
            title={product.title}
            price={product.price}
          />
        );
      }
    );
    setProducts(products);
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
