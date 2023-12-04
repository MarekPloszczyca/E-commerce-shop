import styles from "./Category.module.scss";

interface Props {
  src: string;
  header: string;
}

export default function Category(props: Props) {
  return (
    <div>
      <img src={props.src}></img>
      <div className={styles.categoryTitle}>
        <h5>{props.header}</h5>
      </div>
    </div>
  );
}
