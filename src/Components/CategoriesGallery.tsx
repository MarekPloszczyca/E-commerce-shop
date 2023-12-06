import styles from "./CategoriesGallery.module.scss";
import Category from "./Category";
import Clothes from "../Assets/CategoriesImages/Clothes.jpg";
import Jewelry from "../Assets/CategoriesImages/Jewelry.jpg";
import Technology from "../Assets/CategoriesImages/Technology.jpg";

export default function CategoriesGallery() {
  return (
    <div className={styles.categoriesContainer}>
      <Category src={Clothes} header="Clothes"/>
      <Category src={Jewelry} header="Jewelry" />
      <Category src={Technology} header="Electronics" />
    </div>
  );
}
