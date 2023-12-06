import styles from "./Category.module.scss";
import {Link} from "react-router-dom";

interface Props {
  src: string;
  header: string;
 
}

export default function Category(props: Props) {
  return (
    <div className={styles.category}>
      <Link to={`/category`}><img src={props.src}></img>
      <div className={styles.categoryTitle}>
        <h5>{props.header}</h5>
      </div></Link>
    </div>
  );
}
