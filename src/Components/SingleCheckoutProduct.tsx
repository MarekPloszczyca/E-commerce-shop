import styles from "./SingleCheckoutProduct.module.scss";
import { useEffect, useState } from "react";

interface Props {
  src: string;
  quantity: number;
  title: string;
  price: string;
}

export default function SingleCheckoutProduct(props: Props) {
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const price =
      Number(props.price.split(" ").splice(0, 1).toString().replace(",", ".")) *
      props.quantity;
    setTotal(price);
  }, [props.price, props.quantity]);

  return (
    <div className={styles.singleProduct}>
      <div>
        <img src={props.src} />
        <p>{props.title}</p>
      </div>
      <div className={styles.quantity}>{props.quantity}</div>
      <p className={styles.price}>{`${total.toFixed(2)} PLN`}</p>
    </div>
  );
}
