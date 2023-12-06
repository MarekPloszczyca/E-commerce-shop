import styles from "./ProductsContainer.module.scss";

export default function ProductsContainer(props:{children:JSX.Element[]}){
    return <div className={styles.productsContainer}>{props.children}</div>
}