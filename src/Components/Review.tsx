import styles from "./Review.module.scss";
import { StarOutline } from "react-ionicons";

interface Props {
  text: string;
  name: string;
}

export default function Review(props: Props) {
  return (
    <div className={styles.review}>
      {props.text}
      <span>{props.name}</span>
      <div>
        <StarOutline />
        <StarOutline />
        <StarOutline />
        <StarOutline />
        <StarOutline />
      </div>
    </div>
  );
}
