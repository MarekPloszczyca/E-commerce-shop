import styles from "./NavigationCart.module.scss";
import { useSelector } from "react-redux";
import NavCart from "../Assets/Cart/NavCart.png";

export default function NavigationCart(props: { shown: boolean }) {
  const cart = useSelector((state: { products: [] }) => state.products);

  return (
    <div className={props.shown ? styles.shownCartNav : styles.cartNav}>
      {cart.length === 0 && (
        <p>
          <img src={NavCart} />
          Your cart is empty
        </p>
      )}
    </div>
  );
}
