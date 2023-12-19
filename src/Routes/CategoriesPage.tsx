/* eslint-disable @typescript-eslint/no-explicit-any */
import { Fragment, useState, useEffect, useReducer, useRef } from "react";
import { useLoaderData } from "react-router-dom";
import Navigation from "../Components/Navigation";
import Footer from "../Components/Footer";
import ScrollToTop from "../Components/Functional/ScrollToTop";
import SectionHeader from "../Components/SectionHeader";
import ProductsContainer from "../Components/Models/ProductsContainer";
import ProductsRender from "../Components/Functional/ProductsRender";
import FilterOptions from "../Components/FilterOptions";
import useSort from "../Components/Functional/useSort";

const filterHandler = (state: any, action: any) => {
  switch (action.type) {
    case "Price": {
      return {
        ...state,
        price: action.sort,
        name: "Name",
        rating: "Rating",
      };
    }
    case "Name": {
      return {
        ...state,
        price: "Price",
        name: action.sort,
        rating: "Rating",
      };
    }
    case "Rating": {
      return {
        ...state,
        price: "Price",
        name: "Name",
        rating: action.sort,
      };
    }
  }
};

export default function CategoriesPage() {
  const { categoriesDetails }: any = useLoaderData();
  const [products, setProducts] = useState([]);
  const [clothing, setClothing] = useState(false);
  const radioInput = useRef(false);
  const initialProducts = useRef([]);
  const [filterState, dispatch] = useReducer(filterHandler, {
    price: "Price",
    name: "Name",
    rating: "Rating",
  });

  const clothingHandler = () => {
    radioInput.current = true;
    setClothing(true);
  };

  useEffect(() => {
    ProductsRender(categoriesDetails, setProducts);
  }, [categoriesDetails]);

  useEffect(() => {
    if (initialProducts.current.length <= 0) {
      initialProducts.current = products;
    }
  }, [products]);

  useEffect(() => {
    products.length > 8 ? clothingHandler() : setClothing(false);
  }, [products.length]);

  useSort(filterState, products, setProducts);

  const filter = (e: any, title: string) => {
    dispatch({ type: title, sort: e.value });
  };

  const radioHandler = (gender: string) => {
    if (gender === "all") {
      const products = initialProducts.current;
      return setProducts(products);
    }
    if (gender === "men") {
      const products = categoriesDetails.filter(
        (product: { category: string }) => {
          return product.category === "men's clothing";
        }
      );
      return ProductsRender(products, setProducts);
    }
    if (gender === "women") {
      const products = categoriesDetails.filter(
        (product: { category: string }) => {
          return product.category === "women's clothing";
        }
      );
      return ProductsRender(products, setProducts);
    }
  };

  return (
    <Fragment>
      <Navigation />
      <SectionHeader
        text={
          clothing
            ? "Clothing"
            : categoriesDetails[0].category.charAt(0).toUpperCase() +
              categoriesDetails[0].category.slice(1)
        }
      />
      <FilterOptions
        clothing={radioInput.current}
        filter={filter}
        radioHandler={radioHandler}
      />
      <ProductsContainer>{products}</ProductsContainer>
      <Footer />
      <ScrollToTop />
    </Fragment>
  );
}
