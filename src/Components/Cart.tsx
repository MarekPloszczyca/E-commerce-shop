/* eslint-disable @typescript-eslint/no-explicit-any */
import styles from "./Cart.module.scss";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import EmptyCart from "../Assets/Cart/Cart.gif";
import CartProduct from "./CartProduct";
import CartCost from "./CartCost";

export default function Cart() {
  const [products, setProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const cart = useSelector((state: { products: [] }) => state.products);

  useEffect(() => {
    if (cart.length !== 0) {
      const productsArray: any = cart.map(
        (product: {
          id: number;
          img: string;
          title: string;
          price: string;
          quantity: number;
        }) => {
          return (
            <CartProduct
              key={product.id}
              id={product.id}
              image={product.img}
              title={product.title}
              price={product.price}
              quantity={product.quantity}
            />
          );
        }
      );
      setProducts(productsArray);
      let cost = 0;
      productsArray.forEach(
        (product: { props: { price: string; quantity: number } }) => {
          const price = Number(
            product.props.price
              .split(" ")
              .splice(0, 1)
              .toString()
              .replace(",", ".")
          );
          cost += price * product.props.quantity;
        }
      );
      setTotalPrice(cost);
    } else setProducts([]);
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
      {products.length !== 0 && <CartCost total={totalPrice} />}
    </div>
  );
}
