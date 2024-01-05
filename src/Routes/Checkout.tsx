import { Fragment, useState } from "react";
import Navigation from "../Components/Navigation";
import Footer from "../Components/Footer";
import ScrollToTop from "../Components/Functional/ScrollToTop";
import CheckoutForm from "../Components/CheckoutForm";
import SectionHeader from "../Components/SectionHeader";
import styles from "./Prices.module.scss";
import OrderConfirmation from "../Components/OrderConfirmation";

export default function Checkout() {
  const [formSubmited, setFormSubmited] = useState(false);

  const submitHandler = () => {
    formSubmited ? setFormSubmited(false) : setFormSubmited(true);
  };

  return (
    <Fragment>
      <Navigation visible />
      <div className={formSubmited ? styles.testTwo : undefined}>
        <SectionHeader text="Delivery informations" />
        <CheckoutForm submit={submitHandler} />
      </div>
      {formSubmited && <OrderConfirmation />}
      <Footer />
      <ScrollToTop />
    </Fragment>
  );
}
