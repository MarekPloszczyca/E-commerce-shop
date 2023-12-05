import { Fragment } from "react";
import SectionHeader from "../Components/SectionHeader";
import Navigation from "../Components/Navigation";
import Footer from "../Components/Footer";

export default function Prices() {
  return (
    <Fragment>
      <Navigation />
      <SectionHeader text="Prices and ways of delivery" />
      <Footer />
    </Fragment>
  );
}
