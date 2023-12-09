import { useEffect, useState, Fragment } from "react";
import SectionHeader from "./SectionHeader";
import ProductsContainer from "./Models/ProductsContainer";
import ProductsRender from "./Functional/ProductsRender";
import ProductPlaceholder from "./ProductPlaceholder";

export default function PopularProducts() {
  const [popular, setPopular] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://fakestoreapi.com/products?limit=4`,
          { signal }
        );
        const productsArray = await response.json();
        ProductsRender(productsArray, setPopular);
        setLoading(false);
        controller.abort();
      } catch (error) {
        return console.log(error);
      }
    };
    if (popular.length <= 0) {
      fetchProducts();
    }
  }, [popular]);

  return (
    <Fragment>
      <SectionHeader text="Popular Products" />
      <ProductsContainer>
        {loading ? (
          <Fragment>
            <ProductPlaceholder />
            <ProductPlaceholder />
            <ProductPlaceholder />
            <ProductPlaceholder />
          </Fragment>
        ) : (
          popular
        )}
      </ProductsContainer>
    </Fragment>
  );
}
