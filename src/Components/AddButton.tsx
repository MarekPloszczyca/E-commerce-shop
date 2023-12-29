import styles from "./AddButton.module.scss";
import { AddCircleOutline } from "react-ionicons";
import { add } from "./Cart/Cart";
import { useDispatch } from "react-redux";

export default function AddButton(props: {
  product: {
    id: number;
    img: string;
    title: string;
    price: string;
    quantity: number;
  };
}) {
  const dispatch = useDispatch();

  return (
    <button
      className={styles.add}
      onClick={() => {
        for (let i = 0; i < props.product.quantity; i++) {
          dispatch(add(props.product));
        }
      }}
    >
      <AddCircleOutline />
      Add to cart
    </button>
  );
}
