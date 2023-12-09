/* eslint-disable @typescript-eslint/no-explicit-any */
import styles from "./ProductsContainer.module.scss";

export default function ProductsContainer(props:{children:JSX.Element[]| any}){
    return <div className={styles.productsContainer}>{props.children}</div>
}