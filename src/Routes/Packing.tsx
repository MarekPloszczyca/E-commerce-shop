import styles from "./Packing.module.scss";
import { Fragment } from "react";
import SectionHeader from "../Components/SectionHeader";
import Navigation from "../Components/Navigation";
import Footer from "../Components/Footer";
import ScrollToTop from "../Components/Functional/ScrollToTop";
import QualityCheck from "../Assets/Packing/QualityCheck.jpg";
import PackingBoxes from "../Assets/Packing/Packing.jpg";
import Delivery from "../Assets/Packing/Delivery.jpg";
import AboutSection from "../Components/AboutSection";

const qualityCheck = {
  src: QualityCheck,
  text: "The process of preparing products for shipping to customers involves several meticulous steps. Initially, employees meticulously gather the ordered items from inventory, cross-checking each item against the customer's request to ensure accuracy. They conduct a thorough inspection of the merchandise, meticulously examining for any defects or damages, ensuring that only top-quality products are packed.",
};
const packing = {
  src: PackingBoxes,
  text: "Once the quality check is completed, they methodically select appropriate packaging materials tailored to the nature and fragility of the items. This may involve choosing suitable-sized boxes, cushioning materials like bubble wrap or packing peanuts, and securing tapes to ensure the utmost protection during transit.",
};

const delivery = {
  src: Delivery,
  text: "Finally, once the packaging is meticulously sealed and labeled, the employees coordinate with shipping and logistics services, arranging for timely pickup or drop-off of the packages. They track the shipments closely, ensuring smooth transit and timely delivery to the customer's specified destination.",
};

export default function Packing() {
  return (
    <Fragment>
      <Navigation />
      <SectionHeader text="Products Packing" />
      <div className={styles.reversed}><AboutSection src={qualityCheck.src} text={qualityCheck.text} /></div>
      <AboutSection src={packing.src} text={packing.text} />
      <div className={styles.reversed}><AboutSection src={delivery.src} text={delivery.text} /></div>
      <Footer />
      <ScrollToTop/>
    </Fragment>
  );
}
