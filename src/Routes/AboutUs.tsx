import styles from "./AboutUs.module.scss";
import { Fragment } from "react";
import Footer from "../Components/Footer";
import Navigation from "../Components/Navigation";
import AboutSection from "../Components/AboutSection";
import ScrollToTop from "../Components/Functional/ScrollToTop";
import ClothesStore from "../Assets/AboutUs/StoreImage.jpg";
import ElectronicsStore from "../Assets/AboutUs/PhonesStore.jpg";
import JewelryStore from "../Assets/AboutUs/JewelryStore.jpg";
import SectionHeader from "../Components/SectionHeader";

const clothesStore = {
  src: ClothesStore,
  text: "For fashion-forward individuals, our racks and shelves display a myriad of choices—trendsetting clothing ranging from chic streetwear to elegant formal attire. Whether it's the latest runway sensation or timeless classics, our collection caters to diverse tastes and preferences.",
};
const electonicsStore = {
  src: ElectronicsStore,
  text: "In the realm of electronics, we offer an array of cutting-edge gadgets and devices designed to enhance your lifestyle. Immerse yourself in the latest advancements in tech—from state-of-the-art smartphones and smartwatches to high-performance laptops and home entertainment systems, we've curated the best for your convenience.",
};
const jewelryStore = {
  src: JewelryStore,
  text: "Gleaming with opulence, our jewelry section showcases meticulously crafted pieces that exude sophistication and glamour. From delicate necklaces to statement earrings, each item tells its own story and adds a touch of elegance to any ensemble.",
};

export default function AboutUs() {
  return (
    <Fragment>
      <Navigation />
      <SectionHeader text="About Us"/>
      <p className={styles.text}>
        Discover a haven for fashion enthusiasts, tech aficionados, and jewelry
        connoisseurs alike in our sprawling emporium.
      </p>
      <AboutSection src={clothesStore.src} text={clothesStore.text} />
      <div className={styles.secondSection}><AboutSection src={electonicsStore.src} text={electonicsStore.text} /></div>
      <AboutSection src={jewelryStore.src} text={jewelryStore.text} />
      <Footer />
      <ScrollToTop/>
    </Fragment>
  );
}
