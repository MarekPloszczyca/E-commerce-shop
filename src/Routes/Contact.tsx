import { Fragment } from "react";
import Navigation from "../Components/Navigation";
import ContactInformations from "../Components/ContactInformations";
import Footer from "../Components/Footer";
import ScrollToTop from "../Components/Functional/ScrollToTop";

export default function Contact() {
  return (
    <Fragment>
      <Navigation />
      <ContactInformations />
      <Footer />
      <ScrollToTop/>
    </Fragment>
  );
}
