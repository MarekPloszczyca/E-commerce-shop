import styles from "./Product.module.scss";
import AddButton from "./AddButton";
import { Link } from "react-router-dom";

interface Props {
  image: string;
  title: string;
  price: string;
  id: number;
  rating?: string;
  category?: string;
}

export default function Product(props: Props) {
  return (
    <div className={styles.productContainer}>
      <Link to={`/products/${props.id}`}>
        <img src={props.image} /> <h6>{props.title}</h6>
        <p>{`${Math.floor(Number(props.price))},99 PLN`}</p>
      </Link>
      <AddButton
        product={{
          id: props.id,
          img: props.image,
          title: props.title,
          price: `${Math.floor(Number(props.price))},99 PLN`,
        }}
      />
    </div>
  );
}
