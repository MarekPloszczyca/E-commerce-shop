/* eslint-disable @typescript-eslint/no-explicit-any */
import { Fragment } from "react";
import { useLoaderData } from "react-router-dom";
import Navigation from "../Components/Navigation";
import Footer from "../Components/Footer";
import ScrollToTop from "../Components/Functional/ScrollToTop";
import SingleProduct from "../Components/SingleProduct";
import RecommendedProducts from "../Components/RecommendedProducts";

export default function ProductPage() {
  const { productDetails }: any = useLoaderData();

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
      <RecommendedProducts/>
      <Footer />
      <ScrollToTop />
    </Fragment>
  );
}
