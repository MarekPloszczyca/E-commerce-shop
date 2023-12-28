import styles from "./CartProduct.module.scss";
import { CaretDownOutline } from "react-ionicons";
interface Props {
  image: string;
  title: string;
  quantity: number;
  price: string;
  id: number;
}

export default function CartProduct(props: Props) {
  return (
    <div className={styles.container}>
      <img src={props.image}></img>
      <div className={styles.description}>
        <p className={styles.title}>{props.title}</p>
        <p>
          <span>{props.price}</span>
        </p>
      </div>
      <input value={props.quantity}></input>
      <CaretDownOutline color="#255841" width="1rem" />
    </div>
  );
}
