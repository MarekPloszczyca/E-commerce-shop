import styles from "./CategoriesGallery.module.scss";
import Category from "./Category";
import Clothes from "../Assets/CategoriesImages/Clothes.jpg";
import Jewellery from "../Assets/CategoriesImages/Jewelry.jpg";
import Technology from "../Assets/CategoriesImages/Technology.jpg";

export default function CategoriesGallery() {
  return (
    <div className={styles.categoriesContainer}>
      <Category src={Clothes} header="Clothes" id="women's clothing" />
      <Category src={Jewellery} header="Jewellery" id="jewelery" />
      <Category src={Technology} header="Electronics" id="electronics" />
    </div>
  );
}
