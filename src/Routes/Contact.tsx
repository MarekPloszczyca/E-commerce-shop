import { Fragment } from "react";
import Navigation from "../Components/Navigation";
import ContactInformations from "../Components/ContactInformations";
import Footer from "../Components/Footer";
import ScrollToTop from "../Components/Functional/ScrollToTop";
import SectionHeader from "../Components/SectionHeader";

export default function Contact() {
  return (
    <Fragment>
      <Navigation />
      <SectionHeader text="Contact"/>
      <ContactInformations />
      <Footer />
      <ScrollToTop/>
    </Fragment>
  );
}
