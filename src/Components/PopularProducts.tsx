import styles from "./PopularProducts.module.scss";
import { useEffect, useState, Fragment } from "react";
import { Link } from "react-router-dom";
import Product from "./Product";
import SectionHeader from "./SectionHeader";

export default function PopularProducts() {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          `https://fakestoreapi.com/products?limit=4`
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
              <Link key={product.id} to={`/products/${product.id}`}>
                <Product
                  image={product.image}
                  title={product.title}
                  price={product.price}
                />
              </Link>
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
      <div className={styles.productsContainer}>{popular}</div>
    </Fragment>
  );
}
