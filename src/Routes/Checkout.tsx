import { Fragment } from "react";
import Navigation from "../Components/Navigation";
import Footer from "../Components/Footer";
import ScrollToTop from "../Components/Functional/ScrollToTop";
import CheckoutForm from "../Components/CheckoutForm";
import SectionHeader from "../Components/SectionHeader";

export default function Checkout() {
  return (
    <Fragment>
      <Navigation />
      <SectionHeader text="Delivery informations"/>
      <CheckoutForm />
      <Footer />
      <ScrollToTop />
    </Fragment>
  );
}
