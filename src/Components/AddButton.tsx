import styles from "./AddButton.module.scss";
import { AddCircleOutline } from "react-ionicons";
import { add } from "./Cart/Cart";
import { useDispatch, useSelector } from "react-redux";

export default function AddButton(props: {
  product: { id: number; img: string; title: string; price: string };
}) {
  const dispatch = useDispatch();
  const cart = useSelector((state: { products: [] }) => state.products);
  return (
    <button
      className={styles.add}
      onClick={() => {
        dispatch(add(props.product));
        console.log(props.product);
        console.log(cart);
      }}
    >
      <AddCircleOutline />
      Add to cart
    </button>
  );
}
