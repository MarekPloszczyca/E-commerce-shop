import styles from "./Product.module.scss";
import AddButton from "./AddButton";
import { Link } from "react-router-dom";

interface Props {
  image: string;
  title: string;
  price: string;
  id: number;
  category: string;
}

export default function Product(props: Props) {
  return (
    <div className={styles.productContainer}>
      <Link to={`/${props.category}/${props.id}`}>
        <img src={props.image} /> <h6>{props.title}</h6>
        <p>{`${Math.floor(Number(props.price))},99 PLN`}</p>
      </Link>
      <AddButton />
    </div>
  );
}
