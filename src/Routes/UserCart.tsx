import { Fragment } from "react";
import Navigation from "../Components/Navigation";
import Footer from "../Components/Footer";
import ScrollToTop from "../Components/Functional/ScrollToTop";
import SectionHeader from "../Components/SectionHeader";
import Cart from "../Components/Cart";

export default function UserCart() {
  return (
    <Fragment>
      <Navigation visible={true} />
      <SectionHeader text="Your cart" />
      <Cart />
      <Footer />
      <ScrollToTop />
    </Fragment>
  );
}
