import AddButton from "./AddButton";
import styles from "./Product.module.scss";

interface Props {
  image: string;
  title: string;
  price: string;
}

export default function Product(props: Props) {
  return (
    <div className={styles.productContainer}>
      <img src={props.image} /> <h6>{props.title}</h6>
      <p>{`${Math.floor(Number(props.price))},99 PLN`}</p>
      <AddButton />
    </div>
  );
}
