import styles from "./AddButton.module.scss";
import { AddCircleOutline } from "react-ionicons";

export default function AddButton() {
  return (
    <button className={styles.add}>
      <AddCircleOutline />
      Add to cart
    </button>
  );
}
