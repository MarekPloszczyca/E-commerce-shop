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
  const initialProducts = useRef([]);
  const [filterState, dispatch] = useReducer(filterHandler, {
    price: "Price",
    name: "Name",
    rating: "Rating",
  });

 

  useEffect(() => {
    ProductsRender(categoriesDetails, setProducts);
  }, [categoriesDetails]);

  useEffect(() => {
    if (initialProducts.current.length <= 0) {
      initialProducts.current = products;
    }
  }, [products]);

  useEffect(() => {
    products.length > 8 ? setClothing(true) : setClothing(false);
  }, [products.length]);

  const filter = (e: any, title: string) => {
    dispatch({ type: title, sort: e.value });
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
      <FilterOptions clothing={clothing} filter={filter} />
      <ProductsContainer>{products}</ProductsContainer>
      <Footer />
      <ScrollToTop />
    </Fragment>
  );
}
