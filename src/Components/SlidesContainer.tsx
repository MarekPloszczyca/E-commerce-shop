import styles from "./SlidesContainer.module.scss";
import { useEffect, useState } from "react";
import ClothesImage from "../Assets/LandingImages/ClothesImage.jpg";
import JewelleryImage from "../Assets/LandingImages/JewelryImage.jpg";
import TechnologyImage from "../Assets/LandingImages/TechnologyImage.jpg";

const clothes = {
  image: ClothesImage,
  alt:"Smiling girl",
  header: "Are you looking for something new and original?",
  text: "Check out our newest collection",
};
const jewelry = {
  image: JewelleryImage,
  alt:"Necklace with stones",
  header: "Find a small gift for your loved one",
  text: "Jewellery for him and for her",
};
const technology = {
  image: TechnologyImage,
  alt:"Xbox controller",
  header: "Are you a fan of technology?",
  text: "In our store you will find the best electrical devices",
};
const slideArray = [clothes, jewelry, technology];

export default function SlidesContainer() {
  const [slide, setSlide] = useState(clothes);
  const [animation, setAnimation] = useState(false);

  useEffect(() => {
    let interval = 0;
    setInterval(() => {
      setAnimation(true);
      interval++;
      if (interval === 3) {
        interval = 0;
      }
      setTimeout(() => {
        setSlide(slideArray[interval]);
      }, 500);
      setTimeout(() => {
        setAnimation(false);
      }, 1000);
    }, 7000);
  }, []);

  return (
    <div className={styles.slidesContainer}>
      <img
        src={slide.image}
        alt={slide.alt}
        className={animation ? styles.animated : undefined}
      />
      <div className={styles.description}>
        <h3>{slide.header}</h3>
        <p>{slide.text}</p>
      </div>
    </div>
  );
}
