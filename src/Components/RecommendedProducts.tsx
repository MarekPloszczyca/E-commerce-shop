import styles from "./RecommendedProducts.module.scss";
import SectionHeader from "./SectionHeader";

export default function RecommendedProducts() {
  return (
    <div className={styles.header}>
      <SectionHeader text="Recommended Products" />
    </div>
  );
}
