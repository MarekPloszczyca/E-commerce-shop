/* eslint-disable @typescript-eslint/no-explicit-any */
import Product from "../Product";
import { useEffect } from "react";

type Product = {
  id: string;
  props: {
    id: number;
    image: string;
    title: string;
    price: string;
    rating: string;
  };
};

const sort = (
  array: any,
  ascending: boolean,
  price: boolean,
  rating: boolean
) => {
  price
    ? array.sort(
        (a: { props: { price: number } }, b: { props: { price: number } }) => {
          return ascending
            ? a.props.price - b.props.price
            : b.props.price - a.props.price;
        }
      )
    : rating
    ? array.sort(
        (
          a: { props: { rating: number } },
          b: { props: { rating: number } }
        ) => {
          return ascending
            ? a.props.rating - b.props.rating
            : b.props.rating - a.props.rating;
        }
      )
    : array.sort(
        (a: { props: { title: string } }, b: { props: { title: string } }) => {
          return ascending
            ? a.props.title.localeCompare(b.props.title)
            : 
                b.props.title.localeCompare(a.props.title)
              ;
        }
      );
};

export default function useFilter(
  state: any,
  productsArray: any,
  setState: any
) {
  useEffect(() => {
    const numericalSort = (array: any[]) => {
      if (state.price === "asc") {
        sort(array, true, true, false);
      }
      if (state.price === "desc") {
        sort(array, false, true, false);
      }
      if (state.rating === "asc") {
        sort(array, true, false, true);
      }
      if (state.rating === "desc") {
        sort(array, false, false, true);
      }
      if (state.name === "a-z") {
        sort(array, true, false, false);
      }
      if (state.name === "z-a") {
        sort(array, false, false, false);
      }
      array.map((product: Product) => {
        return (
          <Product
            key={product.id}
            id={product.props.id}
            image={product.props.image}
            title={product.props.title}
            price={product.props.price}
            rating={product.props.rating}
          />
        );
      });
    };

    const newArray = [...productsArray];

    numericalSort(newArray);

    if (JSON.stringify(newArray) === JSON.stringify(productsArray)) {
      return;
    }
    setState(newArray);
  }, [state, productsArray, setState]);
}
