import { useEffect, useState, Fragment } from "react";
import Product from "./Product";
import SectionHeader from "./SectionHeader";
import ProductsContainer from "./Models/ProductsContainer";

export default function PopularProducts() {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          `https://fakestoreapi.com/products?limit=5`
        );
        const productsArray = await response.json();
        const products = productsArray.map(
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
        setPopular(products);
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
