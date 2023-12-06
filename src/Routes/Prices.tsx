import styles from "./Prices.module.scss";
import { Fragment } from "react";
import SectionHeader from "../Components/SectionHeader";
import Navigation from "../Components/Navigation";
import Footer from "../Components/Footer";
import PricesGrid from "../Components/PricesGrid";
import ScrollToTop from "../Components/Functional/ScrollToTop";

export default function Prices() {
  return (
    <Fragment>
      <Navigation />
      <SectionHeader text="Prices and ways of delivery" />
      <div className={styles.timeInfo}>
        <h6>Delivery time</h6>
        <p>
          If you make an order before 1:00 p.m., we will ship it on the same
          day!
        </p>
      </div>
      <PricesGrid />
      <Footer />
      <ScrollToTop />
    </Fragment>
  );
}
