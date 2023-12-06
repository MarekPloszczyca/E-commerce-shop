import ProductsContainer from "./Models/ProductsContainer";
import styles from "./RecommendedProducts.module.scss";
import SectionHeader from "./SectionHeader";

export default function RecommendedProducts(props: {
  products: JSX.Element[];
}) {
  return (
    <div className={styles.recommendedContainer}>
      <SectionHeader text="Recommended Products" />
      <ProductsContainer>{props.products}</ProductsContainer>
    </div>
  );
}
