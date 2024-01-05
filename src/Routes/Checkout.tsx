import { Fragment, useState } from "react";
import Navigation from "../Components/Navigation";
import Footer from "../Components/Footer";
import ScrollToTop from "../Components/Functional/ScrollToTop";
import CheckoutForm from "../Components/CheckoutForm";
import SectionHeader from "../Components/SectionHeader";
import OrderConfirmation from "../Components/OrderConfirmation";
import styles from "./Checkout.module.scss";

export default function Checkout() {
  const [formSubmited, setFormSubmited] = useState(false);

  const submitHandler = () => {
    formSubmited ? setFormSubmited(false) : setFormSubmited(true);
  };

  return (
    <Fragment>
      <Navigation visible confirmed={formSubmited} />{" "}
      <div className={formSubmited ? styles.confirmed : undefined}>
        <SectionHeader text="Delivery informations" />
      </div>
      <div className={formSubmited ? styles.confirmed : undefined}>
        <CheckoutForm submit={submitHandler} />
      </div>
      {formSubmited && <OrderConfirmation />}
      <div className={formSubmited ? styles.confirmed : undefined}>
        <Footer />
      </div>
      <ScrollToTop />
    </Fragment>
  );
}
