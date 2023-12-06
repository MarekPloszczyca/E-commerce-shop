/* eslint-disable @typescript-eslint/no-explicit-any */
import { Fragment, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Navigation from "../Components/Navigation";
import Footer from "../Components/Footer";
import ScrollToTop from "../Components/Functional/ScrollToTop";
import SingleProduct from "../Components/SingleProduct";
import RecommendedProducts from "../Components/RecommendedProducts";
import ProductsRender from "../Components/Functional/ProductsRender";

export default function ProductPage() {
  const { productDetails }: any = useLoaderData();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchRecommended = async () => {
      try {
        const number = Math.floor(Math.random() * 10);
        const response = await fetch(
          `https://fakestoreapi.com/products/category/${
            productDetails.category
          }?sort=${number >= 4 ? "asc" : "desc"}`
        );
        const productsArray = await response.json();
        ProductsRender(productsArray, setProducts);
      } catch (error) {
        console.log(error);
      }
    };
    fetchRecommended();
  }, [productDetails.category]);

  return (
    <Fragment>
      <Navigation />
      <SingleProduct
        image={productDetails.image}
        title={productDetails.title}
        description={productDetails.description}
        price={productDetails.price}
        number={productDetails.rating.rate}
        count={productDetails.rating.count}
      />
      <RecommendedProducts products={products} />
      <Footer />
      <ScrollToTop />
    </Fragment>
  );
}
