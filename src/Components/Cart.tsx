/* eslint-disable @typescript-eslint/no-explicit-any */
import styles from "./Cart.module.scss";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import EmptyCart from "../Assets/Cart/Cart.gif";
import CartProduct from "./CartProduct";

export default function Cart() {
  const [products, setProducts] = useState([]);
  const cart = useSelector((state: { products: [] }) => state.products);

  useEffect(() => {
    if (cart.length !== 0) {
      const productsArray: any = cart.map(
        (product: {
          id: number;
          img: string;
          title: string;
          price: string;
        }) => {
          return (
            <CartProduct
              key={product.id}
              id={product.id}
              image={product.img}
              title={product.title}
              price={product.price}
              quantity={1}
            />
          );
        }
      );
      setProducts(productsArray);
      console.log(cart);
    }
  }, [cart]);

  return (
    <div className={styles.cartContainer}>
      {products.length !== 0 ? (
        products
      ) : (
        <h5>
          <img src={EmptyCart}></img>Your cart is empty! Try to add some
          products
        </h5>
      )}
    </div>
  );
}
