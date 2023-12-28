import styles from "./CartProduct.module.scss";
import { CaretDownOutline } from "react-ionicons";
import { useState } from "react";
interface Props {
  image: string;
  title: string;
  quantity: number;
  price: string;
  id: number;
}

export default function CartProduct(props: Props) {
  const [quantityOptions, setQuantityOptions] = useState(false);

  const optionsHandler = () => {
    quantityOptions ? setQuantityOptions(false) : setQuantityOptions(true);
  };

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
      <div className={quantityOptions ? styles.clicked : styles.icon}>
        <CaretDownOutline
          color="#255841"
          width="1rem"
          onClick={optionsHandler}
        />
      </div>
    </div>
  );
}
