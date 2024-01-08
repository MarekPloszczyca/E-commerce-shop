import styles from "./NavigationCart.module.scss";
import { useSelector } from "react-redux";
import { Fragment } from "react";
import { Link } from "react-router-dom";

import NavCart from "../Assets/Cart/NavCart.png";

export default function NavigationCart(props: {
  shown: boolean;
  mouseEnter: () => void;
  mouseLeave: () => void;
}) {
  const cart = useSelector(
    (state: { products: { img: string; title: string; quantity: number }[] }) =>
      state.products
  );

  return (
    <div
      onMouseEnter={() => {
        props.mouseEnter();
      }}
      onMouseLeave={() => {
        props.mouseLeave();
      }}
      className={props.shown ? styles.shownCartNav : styles.cartNav}
    >
      {cart.length === 0 ? (
        <p>
          <img src={NavCart} />
          Your cart is empty
        </p>
      ) : (
        <Fragment>
          <div className={styles.product}>
            <div>
              <img src={cart[0].img} />
              <span>{cart[0].quantity}</span>
            </div>
            <p>{cart[0].title}</p>
          </div>
          {cart.length > 0 && (
            <Link className={styles.button} to="/cart">
              <button>
                {cart.length > 1
                  ? `And ${cart.length - 1} more...`
                  : `Go to your cart`}
              </button>
            </Link>
          )}
        </Fragment>
      )}
    </div>
  );
}
