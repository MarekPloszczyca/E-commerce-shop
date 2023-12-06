import { useEffect, useState, Fragment } from "react";
import SectionHeader from "./SectionHeader";
import ProductsContainer from "./Models/ProductsContainer";
import ProductsRender from "./Functional/ProductsRender";

export default function PopularProducts() {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          `https://fakestoreapi.com/products?limit=5`
        );
        const productsArray = await response.json();
        ProductsRender(productsArray, setPopular);
      } catch (error) {
        return console.log(error);
      }
    };
    if (popular.length !== 5) {
      fetchProducts();
    }
  }, [popular]);

  return (
    <Fragment>
      <SectionHeader text="Popular Products" />
      <ProductsContainer>{popular}</ProductsContainer>
    </Fragment>
  );
}
