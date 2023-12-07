import styles from "./CategoriesGallery.module.scss";
import Category from "./Category";
import Clothes from "../Assets/CategoriesImages/Clothes.jpg";
import Jewellery from "../Assets/CategoriesImages/Jewelry.jpg";
import Technology from "../Assets/CategoriesImages/Technology.jpg";
import { Link } from "react-router-dom";

export default function CategoriesGallery() {
  return (
    <div className={styles.categoriesContainer}>
       <Link to={"/products/category/clothing"}><Category src={Clothes} header="Clothes" /></Link>
      <Link to={"/products/category/jewelery"}>
        <Category src={Jewellery} header="Jewellery"/>
      </Link>
      <Link to={"/products/category/electronics"}><Category src={Technology} header="Electronics"/></Link>
    </div>
  );
}
